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
import { useBuilderCodeUtils, BuilderCodeOptions } from "@/lib/builderCodes";

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

  // Builder code utilities
  const { 
    canApplyBuilderCodes, 
    getBuilderCodeOptionsForUser, 
    calculateFeeInfo,
    isOnboardingComplete 
  } = useBuilderCodeUtils();

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
    if (!selectedMarketConfig) {
      return {
        isValid: false,
        errorMessage: "Please select a valid market",
      };
    }

    if (!size || size.trim() === '') {
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
          
          // Get builder code options if applicable
          let builderCodeOptions: BuilderCodeOptions | null = null;
          if (canApplyBuilderCodes(isUsingSwift)) {
            builderCodeOptions = await getBuilderCodeOptionsForUser();
          }
          
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
              // Builder codes are added directly to swiftOptions to be included in the signed message
              ...(builderCodeOptions && {
                builderIdx: builderCodeOptions.builderIdx,
                builderFeeTenthBps: builderCodeOptions.builderFeeTenthBps,
              }),
              callbacks: {
                onOrderParamsMessagePrepped: (orderParamsMessage) => {
                  console.log('📝 Order Message to be Signed (Market Order):', {
                    orderParamsMessage,
                  });
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
          
          // Get builder code options if applicable
          let builderCodeOptions: BuilderCodeOptions | null = null;
          if (canApplyBuilderCodes(isUsingSwift)) {
            builderCodeOptions = await getBuilderCodeOptionsForUser();
          }
          
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
              // Builder codes are added directly to swiftOptions to be included in the signed message
              ...(builderCodeOptions && {
                builderIdx: builderCodeOptions.builderIdx,
                builderFeeTenthBps: builderCodeOptions.builderFeeTenthBps,
              }),
              callbacks: {
                onOrderParamsMessagePrepped: (orderMessage: unknown) => {
                  console.log('📝 Order Message to be Signed (Limit Order):', {
                    orderMessage,
                    builderCodes: builderCodeOptions,
                    timestamp: new Date().toISOString(),
                    orderType: 'limit',
                    size: sizeBigNum.prettyPrint(),
                    limitPrice: limitPriceBigNum.prettyPrint(),
                    direction: ENUM_UTILS.match(direction, PositionDirection.LONG) ? 'LONG' : 'SHORT',
                    marketIndex: selectedMarketIndex
                  });
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

  // Calculate builder fee info for display
  const getBuilderFeeInfo = () => {
    if (!size || !selectedMarketConfig) return null;
    
    const isUsingSwiftOrder = isSwiftClientHealthy && useSwift && (orderType === "market" || orderType === "limit");
    if (!canApplyBuilderCodes(isUsingSwiftOrder)) return null;

    try {
      const sizePrecisionExp = sizeType === "base" ? BASE_PRECISION_EXP : QUOTE_PRECISION_EXP;
      const sizeBigNum = BigNum.fromPrint(size, sizePrecisionExp);
      
      let orderSizeUsd = 0;
      if (sizeType === "quote") {
        // Size is already in USD
        orderSizeUsd = Number(size);
      } else if (sizeType === "base" && !currentPrice.eq(ZERO)) {
        // Convert base asset size to USD using current price
        const priceBigNum = BigNum.from(currentPrice, PRICE_PRECISION_EXP);
        const notionalValue = sizeBigNum.mul(priceBigNum);
        orderSizeUsd = Number(notionalValue.prettyPrint());
      }

      if (orderSizeUsd > 0) {
        const defaultFee = orderType === "market" ? 50 : 30; // 5 bps for market, 3 bps for limit
        return calculateFeeInfo(orderSizeUsd, defaultFee);
      }
    } catch (error) {
      console.warn("Error calculating builder fee info:", error);
    }
    
    return null;
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
    
    // Builder code information
    builderFeeInfo: getBuilderFeeInfo(),
    isOnboardingComplete,
    canUseBuilderCodes: canApplyBuilderCodes(isSwiftClientHealthy && useSwift && (orderType === "market" || orderType === "limit")),
  };
};
