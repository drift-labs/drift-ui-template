"use client";

import React from "react";
import { TableRow, TableCell, Button } from "../../ui";
import {
  COMMON_UI_UTILS,
  ENUM_UTILS,
  MarketId,
  TRADING_UTILS,
  UISerializableOrder,
} from "@drift-labs/common";
import { PositionDirection } from "@drift-labs/sdk";
import { useDriftStore } from "@/stores/DriftStore";
import { X } from "lucide-react";
import { useUserAccountDataStore } from "@/stores/UserAccountDataStore";
import { toast } from "sonner";
import { handleErrorToast } from "@/utils/toastUtils";

interface OpenOrderRowProps {
  order: UISerializableOrder;
}

export function OpenOrderRow({ order }: OpenOrderRowProps) {
  const perpMarketConfigs = useDriftStore((s) => s.getPerpMarketConfigs());
  const driftClient = useDriftStore((s) => s.drift?.driftClient);
  const drift = useDriftStore((s) => s.drift);
  const activeSubAccountId = useUserAccountDataStore(
    (s) => s.activeSubAccountId,
  );

  const marketConfig = perpMarketConfigs.find(
    (config) => config.marketIndex === order.marketIndex,
  );

  const tickSizeDecimals = driftClient
    ? TRADING_UTILS.getMarketTickSizeDecimals(
        driftClient,
        MarketId.createPerpMarket(order.marketIndex),
      )
    : 0;

  const isLong = ENUM_UTILS.match(order.direction, PositionDirection.LONG);
  const filled = order.baseAssetAmountFilled;
  const totalString = TRADING_UTILS.isEntirePositionOrder(order.baseAssetAmount)
    ? "Entire Position"
    : order.baseAssetAmount.prettyPrint();

  const orderFlags: string[] = [];
  if (order.reduceOnly) orderFlags.push("Reduce Only");
  if (order.postOnly) orderFlags.push("Post Only");
  if (order.immediateOrCancel) orderFlags.push("IOC");

  const handleCancelOrder = async () => {
    if (!drift || activeSubAccountId === undefined) return;

    try {
      await drift.cancelOrders({
        subAccountId: activeSubAccountId,
        orderIds: [order.orderId],
      });

      toast.success(`Order ${order.orderId} cancelled successfully`);
    } catch (error) {
      handleErrorToast(error, "Failed to cancel order. Please try again.");
    }
  };

  const getOrderTypeLabel = (order: UISerializableOrder) => {
    return COMMON_UI_UTILS.getUIOrderTypeFromSdkOrderType(
      order.orderType,
      order.triggerCondition,
      order.direction,
      order.oraclePriceOffset,
    ).label;
  };

  return (
    <TableRow key={order.orderId}>
      <TableCell>
        <div className="flex flex-col">
          <span className="font-medium">{marketConfig?.symbol}</span>
          <span
            className={`text-xs ${isLong ? "text-green-400" : "text-red-400"}`}
          >
            {isLong ? "LONG" : "SHORT"}
          </span>
        </div>
      </TableCell>
      <TableCell>
        <span className="text-gray-300">{getOrderTypeLabel(order)}</span>
      </TableCell>
      <TableCell>
        <span>
          {filled.prettyPrint()} / {totalString}
        </span>
      </TableCell>
      <TableCell>
        <div className="flex flex-col">
          {order.price.gtZero() && (
            <span>
              {order.price.toNotional(undefined, undefined, tickSizeDecimals)}
            </span>
          )}
          {!order.price.gtZero() && (
            <span className="text-gray-400">Market</span>
          )}
        </div>
      </TableCell>
      <TableCell>
        {order.triggerPrice.gtZero() ? (
          <span>
            {order.triggerPrice.toNotional(
              undefined,
              undefined,
              tickSizeDecimals,
            )}
          </span>
        ) : (
          <span className="text-gray-400">—</span>
        )}
      </TableCell>
      <TableCell>
        {orderFlags.length > 0 ? (
          <div className="flex flex-wrap gap-1">
            {orderFlags.map((flag, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 bg-blue-500/20 text-blue-300 rounded"
              >
                {flag}
              </span>
            ))}
          </div>
        ) : (
          <span className="text-gray-400">—</span>
        )}
      </TableCell>
      <TableCell>
        <Button
          variant="outline"
          size="sm"
          onClick={handleCancelOrder}
          className="flex items-center gap-1 text-red-400 hover:text-red-300 hover:bg-red-500/10"
        >
          <X className="h-3 w-3" />
          Cancel
        </Button>
      </TableCell>
    </TableRow>
  );
}
