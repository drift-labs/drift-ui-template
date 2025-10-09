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
  ZERO,
  BN,
} from "@drift-labs/sdk";
import { useDriftStore } from "@/stores/DriftStore";
import { useUserAccountDataStore } from "@/stores/UserAccountDataStore";
import { useMarkPriceStore } from "@/stores/MarkPriceStore";
import { useOraclePriceStore } from "@/stores/OraclePriceStore";
import { ENUM_UTILS, PerpOrderParams, GeoBlockError, MarketId } from "@drift-labs/common";
import { toast } from "sonner";
import { TransactionSignature } from "@solana/web3.js";
import { useGetPerpMarketMinOrderSize } from "@/hooks/markets/useGetPerpMarketMinOrderSize";

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

  const minOrderSize = useGetPerpMarketMinOrderSize(selectedMarketIndex);
  
  const selectedMarketId = MarketId.createPerpMarket(selectedMarketIndex);
  const markPrice = useMarkPriceStore((s) => s.lookup[selectedMarketId.key]?.markPrice ?? ZERO);
  const oraclePrice = useOraclePriceStore((s) => s.lookup[selectedMarketId.key]?.price ?? ZERO);
  
  // Use mark price if available, otherwise fallback to oracle price
  const currentPrice = !markPrice.eq(ZERO) ? markPrice : oraclePrice;

  const validateForm = (): { isValid: boolean; errorMessage?: string } => {
    console.log("Validation started:", {
      selectedMarketConfig: !!selectedMarketConfig,
      size,
      sizeType,
      orderType,
      minOrderSize: minOrderSize.toString(),
      currentPrice: currentPrice.toString()
    });

    if (!selectedMarketConfig) {
      console.log("Validation failed: No market config");
      return {
        isValid: false,
        errorMessage: "Please select a valid market",
      };
    }

    if (!size) {
      console.log("Validation failed: No size");
      return {
        isValid: false,
        errorMessage: "Please enter a size",
      };
    }

    // Validate minimum order size
    if (selectedMarketConfig && !minOrderSize.eq(ZERO)) {
      try {
        const sizePrecisionExp = sizeType === "base" ? BASE_PRECISION_EXP : QUOTE_PRECISION_EXP;
        const sizeBigNum = BigNum.fromPrint(size, sizePrecisionExp);
        
        // For base asset type, directly compare with minimum order size
        if (sizeType === "base") {
          if (sizeBigNum.val.lt(minOrderSize)) {
            const minOrderSizeFormatted = BigNum.from(minOrderSize, BASE_PRECISION_EXP).prettyPrint();
            return {
              isValid: false,
              errorMessage: `Order size must be at least ${minOrderSizeFormatted} ${selectedMarketConfig.baseAssetSymbol}`,
            };
          }
        } else if (sizeType === "quote") {
          // For quote asset type, convert notional amount to base asset amount using current price
          if (currentPrice.eq(ZERO)) {
            return {
              isValid: false,
              errorMessage: "Price data not available. Please try again in a moment.",
            };
          }
          
          // Quote amount / Current price = Base amount
          // To maintain precision, we'll use BN math directly
          const currentPriceBigNum = BigNum.from(currentPrice, PRICE_PRECISION_EXP);
          
          // Convert both to their raw BN values and do the division with proper scaling
          const sizeRaw = sizeBigNum.val; // This is in QUOTE_PRECISION (1e6)
          const priceRaw = currentPriceBigNum.val; // This is in PRICE_PRECISION (1e6)
          
          // sizeRaw (1e6) / priceRaw (1e6) * 1e9 = result in BASE_PRECISION (1e9)
          const basePrecisionMultiplier = new BN(10).pow(new BN(BASE_PRECISION_EXP));
          const baseEquivalentRaw = sizeRaw.mul(basePrecisionMultiplier).div(priceRaw);
          const baseEquivalent = BigNum.from(baseEquivalentRaw, BASE_PRECISION_EXP);
          
          // Debug logging
          console.log("Quote validation debug (improved):", {
            size,
            sizeUSDC: sizeBigNum.prettyPrint(),
            sizeBigNumVal: sizeBigNum.val.toString(),
            currentPrice: currentPriceBigNum.prettyPrint(),
            currentPriceVal: currentPriceBigNum.val.toString(),
            baseEquivalent: baseEquivalent.prettyPrint(),
            baseEquivalentVal: baseEquivalent.val.toString(),
            baseEquivalentRaw: baseEquivalentRaw.toString(),
            minOrderSize: BigNum.from(minOrderSize, BASE_PRECISION_EXP).prettyPrint(),
            minOrderSizeVal: minOrderSize.toString(),
            isValid: !baseEquivalent.val.lt(minOrderSize)
          });
          
          if (baseEquivalent.val.lt(minOrderSize)) {
            const minOrderSizeFormatted = BigNum.from(minOrderSize, BASE_PRECISION_EXP).prettyPrint();
            const minNotionalValue = BigNum.from(minOrderSize, BASE_PRECISION_EXP).mul(currentPriceBigNum);
            return {
              isValid: false,
              errorMessage: `Order size must be at least ${minOrderSizeFormatted} ${selectedMarketConfig.baseAssetSymbol} (≈$${minNotionalValue.prettyPrint()})`,
            };
          }
        }
      } catch (_error) {
        // If size parsing fails, let it be caught by other validations
      }
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

    console.log("Validation completed successfully");
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
        case "market": {
          isUsingSwift = isSwiftClientHealthy && useSwift;
          let toastId = "";
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
            swiftOptions: {
              callbacks: {
                onOrderParamsMessagePrepped: () => {
                  toastId = toast.loading("Preparing Order") as string;
                },
                onSigningSuccess: () => {
                  toast.success("Order Signed", {
                    id: toastId,
                  });
                },
                onSent: () => {
                  toast.success("Order Sent", {
                    id: toastId,
                  });
                },
                onConfirmed: () => {
                  toast.success("Order Confirmed", {
                    id: toastId,
                  });
                },
                onExpired: () => {
                  toast.error("Order Expired", {
                    id: toastId,
                  });
                },
                onErrored: () => {
                  toast.error("Order Errored", {
                    id: toastId,
                  });
                },
              },
            },
          };
          break;
        }
        case "limit": {
          const limitPriceBigNum = BigNum.fromPrint(
            limitPrice,
            QUOTE_PRECISION_EXP,
          );
          let toastId = "";
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
            swiftOptions: {
              callbacks: {
                onOrderParamsMessagePrepped: () => {
                  toastId = toast.loading("Preparing Order") as string;
                },
                onSigningSuccess: () => {
                  toast.success("Order Signed", {
                    id: toastId,
                  });
                },
                onSent: () => {
                  toast.success("Order Sent", {
                    id: toastId,
                  });
                },
                onConfirmed: () => {
                  toast.success("Order Confirmed", {
                    id: toastId,
                  });
                },
                onExpired: () => {
                  toast.error("Order Expired", {
                    id: toastId,
                  });
                },
                onErrored: () => {
                  toast.error("Order Errored", {
                    id: toastId,
                  });
                },
              },
            },
          };
          break;
        }
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

      if (!isUsingSwift) {
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
    minOrderSize,

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
