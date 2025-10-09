"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../../ui/dialog";
import {
  Button,
  Input,
  Label,
} from "../../ui";
import { PerpPositionInfo } from "@drift-labs/common";
import { PerpMarketConfig, PositionDirection, BigNum, PRICE_PRECISION_EXP } from "@drift-labs/sdk";
import { ENUM_UTILS } from "@drift-labs/common";
import { useDriftStore } from "@/stores/DriftStore";
import { useUserAccountDataStore } from "@/stores/UserAccountDataStore";
import { toast } from "sonner";

interface ClosePositionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  position: PerpPositionInfo;
  marketConfig?: PerpMarketConfig;
  closeType: 'market' | 'limit';
  markPrice: BigNum;
  tickSizeDecimals: number;
}

export function ClosePositionDialog({
  open,
  onOpenChange,
  position,
  marketConfig,
  closeType: initialCloseType,
  markPrice,
  tickSizeDecimals,
}: ClosePositionDialogProps) {
  const [closeType, setCloseType] = useState<'market' | 'limit'>(initialCloseType);
  const [limitPrice, setLimitPrice] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const drift = useDriftStore((s) => s.drift);
  const isSwiftClientHealthy = useDriftStore((s) => s.isSwiftClientHealthy);
  const activeSubAccountId = useUserAccountDataStore((s) => s.activeSubAccountId);

  const isLong = ENUM_UTILS.match(position.direction, PositionDirection.LONG);
  const oppositeDirection = isLong ? PositionDirection.SHORT : PositionDirection.LONG;
  const positionSize = position.baseSize.abs();

  // Reset states when dialog opens/closes or closeType changes
  React.useEffect(() => {
    if (open) {
      setCloseType(initialCloseType);
      setLimitPrice("");
    }
  }, [open, initialCloseType]);

  const handleClosePosition = async () => {
    if (!drift || activeSubAccountId === undefined || !marketConfig) {
      toast.error("System Error", {
        description: "Trading system not ready. Please try again.",
        duration: 4000,
      });
      return;
    }

    if (closeType === 'limit' && !limitPrice) {
      toast.error("Missing Price", {
        description: "Please enter a limit price for limit orders.",
        duration: 4000,
      });
      return;
    }

    setIsLoading(true);

    try {
      let orderConfig;
      
      if (closeType === 'market') {
        const isUsingSwift = isSwiftClientHealthy;
        let toastId = "";
        
        orderConfig = {
          orderType: "market" as const,
          disableSwift: !isUsingSwift,
          swiftOptions: {
            callbacks: {
              onOrderParamsMessagePrepped: () => {
                toastId = toast.loading("Preparing Close Order") as string;
              },
              onSigningSuccess: () => {
                toast.success("Order Signed", { id: toastId });
              },
              onSent: () => {
                toast.success("Order Sent", { id: toastId });
              },
              onConfirmed: () => {
                toast.success("Position Closed", { id: toastId });
              },
              onExpired: () => {
                toast.error("Order Expired", { id: toastId });
              },
              onErrored: () => {
                toast.error("Order Errored", { id: toastId });
              },
            },
          },
        };
      } else {
        const limitPriceBigNum = BigNum.fromPrint(limitPrice, PRICE_PRECISION_EXP);
        orderConfig = {
          orderType: "limit" as const,
          limitPrice: limitPriceBigNum,
        };
      }

      await drift.openPerpOrder({
        subAccountId: activeSubAccountId,
        marketIndex: position.marketIndex,
        orderConfig,
        direction: oppositeDirection,
        assetType: "base",
        size: positionSize,
        reduceOnly: true,
      });

      const orderSide = isLong ? "CLOSE LONG" : "CLOSE SHORT";
      const successMessage = `${closeType.toUpperCase()} ${orderSide} order placed successfully!`;

      if (closeType === 'limit') {
        toast.success("Close Order Placed", {
          description: successMessage,
          duration: 4000,
        });
      }

      onOpenChange(false);
    } catch (error) {
      console.error("Error closing position:", error);
      toast.error("Close Order Failed", {
        description: "Failed to place close order. Please try again.",
        duration: 4000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Close Position</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Position Details */}
          <div className="bg-gray-800 rounded-lg p-4 space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-400">Market:</span>
              <span className="font-medium">{marketConfig?.symbol}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Side:</span>
              <span className={`font-medium ${isLong ? "text-green-400" : "text-red-400"}`}>
                {isLong ? "LONG" : "SHORT"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Size:</span>
              <span className="font-medium">{positionSize.prettyPrint()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Entry Price:</span>
              <span className="font-medium">
                {position.entryPrice.toNotional(undefined, undefined, tickSizeDecimals)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Mark Price:</span>
              <span className="font-medium">
                {BigNum.from(markPrice, PRICE_PRECISION_EXP).toNotional(
                  undefined,
                  undefined,
                  tickSizeDecimals,
                )}
              </span>
            </div>
          </div>

          {/* Order Type Toggle */}
          <div className="space-y-2">
            <Label>Order Type</Label>
            <div className="flex gap-2">
              <Button
                variant={closeType === 'market' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setCloseType('market')}
                className="flex-1"
              >
                Market
              </Button>
              <Button
                variant={closeType === 'limit' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setCloseType('limit')}
                className="flex-1"
              >
                Limit
              </Button>
            </div>
          </div>

          {/* Limit Price Input (only for limit orders) */}
          {closeType === 'limit' && (
            <div className="space-y-2">
              <Label htmlFor="limitPrice">Limit Price</Label>
              <Input
                id="limitPrice"
                type="number"
                placeholder="Enter limit price"
                value={limitPrice}
                onChange={(e) => setLimitPrice(e.target.value)}
                step={`0.${'0'.repeat(Math.max(0, tickSizeDecimals - 1))}1`}
              />
            </div>
          )}

          {/* Size Display (read-only) */}
          <div className="space-y-2">
            <Label>Size to Close</Label>
            <Input
              value={positionSize.prettyPrint()}
              readOnly
              className="bg-gray-800 text-gray-400"
            />
            <p className="text-xs text-gray-500">
              This will close the entire position
            </p>
          </div>
        </div>

        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            disabled={isLoading}
          >
            Cancel
          </Button>
          <Button
            onClick={handleClosePosition}
            disabled={isLoading || (closeType === 'limit' && !limitPrice)}
            className="bg-red-600 hover:bg-red-700"
          >
            {isLoading ? "Closing..." : "Confirm Close"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}