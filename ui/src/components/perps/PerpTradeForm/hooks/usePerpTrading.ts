"use client";

import { useState } from "react";
import {
  BASE_PRECISION_EXP,
  BigNum,
  PerpMarketConfig,
  PositionDirection,
  PostOnlyParams,
  PRICE_PRECISION_EXP,
  QUOTE_PRECISION_EXP,
} from "@drift-labs/sdk";
import { useDriftStore } from "@/stores/DriftStore";
import { useUserAccountDataStore } from "@/stores/UserAccountDataStore";
import { ENUM_UTILS, PerpOrderParams, GeoBlockError } from "@drift-labs/common";
import { toast } from "sonner";
import { SwiftOrderResult } from "@drift-labs/common";
import { TransactionSignature } from "@solana/web3.js";

export type PerpOrderType =
  | "market"
  | "limit"
  | "takeProfit"
  | "stopLoss"
  | "oracleLimit";
export type AssetSizeType = "base" | "quote";

export interface UsePerpTradingProps {
  perpMarketConfigs: PerpMarketConfig[];
  selectedMarketIndex: number;
}

export const usePerpTrading = ({
  perpMarketConfigs,
  selectedMarketIndex,
}: UsePerpTradingProps) => {
  const drift = useDriftStore((s) => s.drift);
  const isSwiftClientHealthy = useDriftStore((s) => s.isSwiftClientHealthy);
  const activeSubAccountId = useUserAccountDataStore(
    (s) => s.activeSubAccountId,
  );

  const [orderType, setOrderType] = useState<PerpOrderType>("market");
  const [direction, setDirection] = useState<PositionDirection>(
    PositionDirection.LONG,
  );
  const [sizeType, setSizeType] = useState<AssetSizeType>("base");
  const [size, setSize] = useState("");
  const [limitPrice, setLimitPrice] = useState("");
  const [triggerPrice, setTriggerPrice] = useState("");
  const [oraclePriceOffset, setOraclePriceOffset] = useState("");
  const [takeProfitPrice, setTakeProfitPrice] = useState("");
  const [stopLossPrice, setStopLossPrice] = useState("");
  const [reduceOnly, setReduceOnlyState] = useState(false);
  const [postOnly, setPostOnlyState] = useState(false);
  const [useSwift, setUseSwift] = useState(true);

  const setReduceOnly = (value: boolean) => {
    setReduceOnlyState(value);
    if (value) {
      setPostOnlyState(false);
    }
  };

  const setPostOnly = (value: boolean) => {
    setPostOnlyState(value);
    if (value) {
      setReduceOnlyState(false);
    }
  };
  const [isLoading, setIsLoading] = useState(false);

  const selectedMarketConfig = perpMarketConfigs.find(
    (config) => config.marketIndex === selectedMarketIndex,
  );

  const validateForm = (): { isValid: boolean; errorMessage?: string } => {
    if (!selectedMarketConfig) {
      return {
        isValid: false,
        errorMessage: "Please select a valid market",
      };
    }

    if (!size) {
      return {
        isValid: false,
        errorMessage: "Please enter a size",
      };
    }

    if (orderType === "limit" && !limitPrice) {
      return {
        isValid: false,
        errorMessage: "Please enter a limit price for limit orders",
      };
    }

    if (
      (orderType === "takeProfit" || orderType === "stopLoss") &&
      !triggerPrice
    ) {
      return {
        isValid: false,
        errorMessage:
          "Please enter a trigger price for take profit/stop loss orders",
      };
    }

    if (orderType === "oracleLimit" && !oraclePriceOffset) {
      return {
        isValid: false,
        errorMessage: "Please enter a price offset for oracle limit orders",
      };
    }

    // Validate take profit and stop loss values are numeric when provided
    if (
      takeProfitPrice &&
      (isNaN(Number(takeProfitPrice)) || Number(takeProfitPrice) <= 0)
    ) {
      return {
        isValid: false,
        errorMessage: "Take profit price must be a positive number",
      };
    }

    if (
      stopLossPrice &&
      (isNaN(Number(stopLossPrice)) || Number(stopLossPrice) <= 0)
    ) {
      return {
        isValid: false,
        errorMessage: "Stop loss price must be a positive number",
      };
    }

    return { isValid: true };
  };

  const handleSubmit = async () => {
    if (!drift || activeSubAccountId === undefined) {
      toast.error("Drift Not Ready", {
        description:
          "Please ensure Drift is properly initialized and try again.",
        duration: 4000,
      });
      return;
    }

    const validation = validateForm();

    if (!validation.isValid) {
      toast.error("Form Validation Error", {
        description: validation.errorMessage!,
        duration: 4000,
      });
      return;
    }

    setIsLoading(true);

    try {
      const sizePrecisionExp =
        sizeType === "base" ? BASE_PRECISION_EXP : QUOTE_PRECISION_EXP;
      const sizeBigNum = BigNum.fromPrint(size, sizePrecisionExp);

      let isUsingSwift = false;
      let orderConfig: PerpOrderParams["orderConfig"];

      switch (orderType) {
        case "market":
          isUsingSwift = isSwiftClientHealthy && useSwift;
          orderConfig = {
            orderType: "market",
            disableSwift: !isUsingSwift,
            bracketOrders: {
              takeProfitPrice: takeProfitPrice
                ? BigNum.fromPrint(takeProfitPrice, PRICE_PRECISION_EXP)
                : undefined,
              stopLossPrice: stopLossPrice
                ? BigNum.fromPrint(stopLossPrice, PRICE_PRECISION_EXP)
                : undefined,
            },
          };
          break;
        case "limit":
          const limitPriceBigNum = BigNum.fromPrint(
            limitPrice,
            QUOTE_PRECISION_EXP,
          );
          isUsingSwift = isSwiftClientHealthy && useSwift;
          orderConfig = {
            orderType: "limit",
            limitPrice: limitPriceBigNum,
            disableSwift: !isUsingSwift,
            bracketOrders: {
              takeProfitPrice: takeProfitPrice
                ? BigNum.fromPrint(takeProfitPrice, PRICE_PRECISION_EXP)
                : undefined,
              stopLossPrice: stopLossPrice
                ? BigNum.fromPrint(stopLossPrice, PRICE_PRECISION_EXP)
                : undefined,
            },
          };
          break;
        case "takeProfit":
        case "stopLoss":
          const triggerPriceBigNum = BigNum.fromPrint(
            triggerPrice,
            QUOTE_PRECISION_EXP,
          );
          const limitPriceTakeProfitBigNum = limitPrice
            ? BigNum.fromPrint(limitPrice, QUOTE_PRECISION_EXP)
            : undefined;
          orderConfig = {
            orderType: orderType,
            triggerPrice: triggerPriceBigNum,
            limitPrice: limitPriceTakeProfitBigNum,
          };
          break;
        case "oracleLimit":
          const oraclePriceOffsetBigNum = BigNum.fromPrint(
            oraclePriceOffset,
            QUOTE_PRECISION_EXP,
          );
          orderConfig = {
            orderType: "oracleLimit",
            oraclePriceOffset: oraclePriceOffsetBigNum,
          };
          break;
        default:
          throw new Error(`Invalid order type: ${orderType}`);
      }

      const result = await drift.openPerpOrder({
        subAccountId: activeSubAccountId,
        marketIndex: selectedMarketIndex,
        orderConfig,
        direction,
        assetType: sizeType,
        size: sizeBigNum,
        reduceOnly,
        postOnly: postOnly
          ? PostOnlyParams.MUST_POST_ONLY
          : PostOnlyParams.NONE,
      });

      const orderSide = ENUM_UTILS.match(direction, PositionDirection.LONG)
        ? "LONG"
        : "SHORT";
      const successMessage = `${orderType.toUpperCase()} ${orderSide} order placed successfully!`;

      if (isUsingSwift) {
        const swiftResult = result as SwiftOrderResult;
        const swiftOrderObservable = swiftResult.swiftOrderObservable;

        let sentToastId: string | number | undefined;

        swiftOrderObservable.subscribe({
          next: (event) => {
            if (event.type === "sent") {
              sentToastId = toast.success("Order Sent", {
                duration: 4000,
              });
            } else if (event.type === "confirmed") {
              toast.success("Order Confirmed", {
                duration: 4000,
                id: sentToastId,
              });
            } else if (event.type === "errored") {
              toast.error("Order Failed", {
                description: event.message || "Order failed. Please try again.",
                duration: 4000,
                id: sentToastId,
              });
            } else if (event.type === "expired") {
              toast.error("Order Expired", {
                description: "Order expired. Please try again.",
                duration: 4000,
                id: sentToastId,
              });
            }
          },
        });
      } else {
        const _txSig = result as TransactionSignature;

        toast.success("Order Placed", {
          description: successMessage,
          duration: 4000,
        });
      }

      // Reset form
      resetForm();
    } catch (e) {
      console.error("Error in handleSubmit", e);

      // Handle GeoBlockError specifically
      if (e instanceof GeoBlockError) {
        toast.error("Trading Restricted", {
          description:
            "Trading is not available in your region due to geographical restrictions.",
          duration: 6000,
        });
      } else {
        // Handle other errors with generic toast
        toast.error("Order Failed", {
          description: `Failed to place ${orderType} order. Please check your connection and try again.`,
          duration: 4000,
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setSize("");
    setLimitPrice("");
    setTriggerPrice("");
    setOraclePriceOffset("");
    setTakeProfitPrice("");
    setStopLossPrice("");
  };

  return {
    // State
    orderType,
    direction,
    sizeType,
    size,
    limitPrice,
    triggerPrice,
    oraclePriceOffset,
    takeProfitPrice,
    stopLossPrice,
    reduceOnly,
    postOnly,
    useSwift,
    isLoading,
    selectedMarketConfig,

    // Actions
    setOrderType,
    setDirection,
    setSizeType,
    setSize,
    setLimitPrice,
    setTriggerPrice,
    setOraclePriceOffset,
    setTakeProfitPrice,
    setStopLossPrice,
    setReduceOnly,
    setPostOnly,
    setUseSwift,
    handleSubmit,
    resetForm,

    // Computed
    isFormValid: validateForm().isValid,
    canSubmit:
      !isLoading && perpMarketConfigs.length > 0 && validateForm().isValid,
  };
};
