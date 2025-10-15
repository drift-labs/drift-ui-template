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
  getMarketOrderParams,
  MarketType,
  // OrderParams,
  // generateSignedMsgUuid,
  // OptionalOrderParams,
  // OrderTriggerCondition,
} from "@drift-labs/sdk";
import { useDriftStore } from "@/stores/DriftStore";
import { useUserAccountDataStore } from "@/stores/UserAccountDataStore";
import { useMarkPriceStore } from "@/stores/MarkPriceStore";
import { useOraclePriceStore } from "@/stores/OraclePriceStore";
import {
  ENUM_UTILS,
  PerpOrderParams,
  GeoBlockError,
  MarketId,
} from "@drift-labs/common";
import { toast } from "sonner";
import { TransactionSignature } from "@solana/web3.js";
import { useGetPerpMarketMinOrderSize } from "@/hooks/markets/useGetPerpMarketMinOrderSize";
import { useBuilderCodeUtils } from "@/lib/builderCodes";
import axios from "axios";
import { prepSwiftOrder } from "@drift-labs/common";
import { useWallet } from "@solana/wallet-adapter-react";
import { SignedMsgOrderParamsMessage, SignedMsgOrderParamsDelegateMessage } from "@drift-labs/sdk";

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
    (s) => s.activeSubAccountId
  );

  // Builder code utilities
  const { canApplyBuilderCodes, calculateFeeInfo, isOnboardingComplete } =
    useBuilderCodeUtils();

  const [orderType, setOrderType] = useState<PerpOrderType>("market");
  const [direction, setDirection] = useState<PositionDirection>(
    PositionDirection.LONG
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

  const { publicKey, signMessage } = useWallet();

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
    (config) => config.marketIndex === selectedMarketIndex
  );

  const minOrderSize = useGetPerpMarketMinOrderSize(selectedMarketIndex);

  const selectedMarketId = MarketId.createPerpMarket(selectedMarketIndex);
  const markPrice = useMarkPriceStore(
    (s) => s.lookup[selectedMarketId.key]?.markPrice ?? ZERO
  );
  const oraclePrice = useOraclePriceStore(
    (s) => s.lookup[selectedMarketId.key]?.price ?? ZERO
  );

  // Use mark price if available, otherwise fallback to oracle price
  const currentPrice = !markPrice.eq(ZERO) ? markPrice : oraclePrice;

  const validateForm = (): { isValid: boolean; errorMessage?: string } => {
    if (!selectedMarketConfig) {
      return {
        isValid: false,
        errorMessage: "Please select a valid market",
      };
    }

    if (!size || size.trim() === "") {
      return {
        isValid: false,
        errorMessage: "Please enter a size",
      };
    }

    // Validate minimum order size
    if (selectedMarketConfig && !minOrderSize.eq(ZERO)) {
      try {
        const sizePrecisionExp =
          sizeType === "base" ? BASE_PRECISION_EXP : QUOTE_PRECISION_EXP;
        const sizeBigNum = BigNum.fromPrint(size, sizePrecisionExp);
        // For base asset type, directly compare with minimum order size
        if (sizeType === "base") {
          if (sizeBigNum.val.lt(minOrderSize)) {
            const minOrderSizeFormatted = BigNum.from(
              minOrderSize,
              BASE_PRECISION_EXP
            ).prettyPrint();
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
              errorMessage:
                "Price data not available. Please try again in a moment.",
            };
          }

          // Quote amount / Current price = Base amount
          // To maintain precision, we'll use BN math directly
          const currentPriceBigNum = BigNum.from(
            currentPrice,
            PRICE_PRECISION_EXP
          );

          // Convert both to their raw BN values and do the division with proper scaling
          const sizeRaw = sizeBigNum.val; // This is in QUOTE_PRECISION (1e6)
          const priceRaw = currentPriceBigNum.val; // This is in PRICE_PRECISION (1e6)

          // sizeRaw (1e6) / priceRaw (1e6) * 1e9 = result in BASE_PRECISION (1e9)
          const basePrecisionMultiplier = new BN(10).pow(
            new BN(BASE_PRECISION_EXP)
          );
          const baseEquivalentRaw = sizeRaw
            .mul(basePrecisionMultiplier)
            .div(priceRaw);
          const baseEquivalent = BigNum.from(
            baseEquivalentRaw,
            BASE_PRECISION_EXP
          );

          if (baseEquivalent.val.lt(minOrderSize)) {
            const minOrderSizeFormatted = BigNum.from(
              minOrderSize,
              BASE_PRECISION_EXP
            ).prettyPrint();
            const minNotionalValue = BigNum.from(
              minOrderSize,
              BASE_PRECISION_EXP
            ).mul(currentPriceBigNum);
            return {
              isValid: false,
              errorMessage: `Order size must be at least ${minOrderSizeFormatted} ${
                selectedMarketConfig.baseAssetSymbol
              } (≈$${minNotionalValue.prettyPrint()})`,
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

    // Check if we should use Swift orders
    const shouldUseSwift = isSwiftClientHealthy && useSwift;

    if (shouldUseSwift) {
      // Handle Swift orders differently
      try {
        const sizePrecisionExp =
          sizeType === "base" ? BASE_PRECISION_EXP : QUOTE_PRECISION_EXP;
        const sizeBigNum = BigNum.fromPrint(size, sizePrecisionExp);

        const optionalOrderParams = getMarketOrderParams({
          marketIndex: selectedMarketIndex,
          marketType: MarketType.PERP,
          direction: direction,
          baseAssetAmount:
            drift.driftClient.convertToPerpPrecision(sizeBigNum).val,
        });

        // const slot = await drift.driftClient.connection.getSlot();

        // const orderMessage = {
        //   signedMsgOrderParams: orderParams as OrderParams,
        //   subAccountId: drift.driftClient.activeSubAccountId,
        //   slot: new BN(slot),
        //   uuid: generateSignedMsgUuid(),
        //   takeProfitOrderParams: null,
        //   stopLossOrderParams: null,
        //   builderIdx: 0,
        //   builderFeeTenthBps: 50,
        // }

        // const optionalOrderParams: OptionalOrderParams = {
        //   orderType: orderType,
        //   marketType: MarketType.PERP,
        //   userOrderId: undefined,
        //   direction: direction,
        //   baseAssetAmount: size ? drift.driftClient.convertToPerpPrecision(BigNum.fromPrint(size, sizeType === "base" ? BASE_PRECISION_EXP : QUOTE_PRECISION_EXP)) : undefined,
        //   price: (orderType === "limit" && limitPrice) ? drift.driftClient.convertToPerpPrecision(BigNum.fromPrint(limitPrice, QUOTE_PRECISION_EXP)) : undefined,
        //   marketIndex: selectedMarketIndex,
        //   reduceOnly: false,
        //   postOnly: postOnly,
        //   bitFlags: 0,
        //   triggerPrice: (orderType === "takeProfit" || orderType === "stopLoss") && triggerPrice ? drift.driftClient.convertToPerpPrecision(BigNum.fromPrint(triggerPrice, QUOTE_PRECISION_EXP)) : undefined,
        //   oraclePriceOffset: (orderType === "oracleLimit" && oraclePriceOffset) ? drift.driftClient.convertToPerpPrecision(BigNum.fromPrint(oraclePriceOffset, QUOTE_PRECISION_EXP)) : undefined,
        //   triggerCondition: OrderTriggerCondition.ABOVE,
        //   auctionDuration: 15, // default to 15 slots
        //   maxTs: undefined,
        //   auctionStartPrice: null,
        //   auctionEndPrice: null,
        // }

        const orderParams = {
          main: optionalOrderParams,
        };

        console.log("Prepared Swift order params:");

        const data = prepSwiftOrder({
          driftClient: drift.driftClient,
          takerUserAccount: {
            subAccountId: activeSubAccountId,
            pubKey: await drift.driftClient.getUserAccountPublicKey(
              activeSubAccountId
            ),
          },
          currentSlot: await drift.driftClient.connection.getSlot(),
          isDelegate: false,
          orderParams: orderParams,
          slotBuffer: 35,
        });

        console.log(data);

        const handleSignMessage = async (encodedMessage: Uint8Array) => {
          if (!publicKey || !signMessage) {
            console.error(
              "Wallet not connected or doesn't support message signing"
            );
            return;
          }

          try {
            const signature = await signMessage(encodedMessage);
            console.log("Message signature:", signature);
            return signature;
          } catch (error) {
            console.error("Signing failed:", error);
          }
        };

        const finalSignature = await handleSignMessage(
          data.hexEncodedSwiftOrderMessage.uInt8Array
        );

        const signOrderParams = (orderParamsMessage:SignedMsgOrderParamsMessage | SignedMsgOrderParamsDelegateMessage) => {
		        const borshBuf = drift.driftClient.encodeSignedMsgOrderParamsMessage(orderParamsMessage,false);
		        const orderParams = Buffer.from(borshBuf.toString('hex'));
		        return {orderParams};
		    };

       // const sign = drift.driftClient.signMessage(data.hexEncodedSwiftOrderMessage.uInt8Array);

        const {orderParams: message} = signOrderParams(data.signedMsgOrderParamsMessage);

        const swiftUrl = "https://swift.drift.trade/orders";
        const response = await axios.post(
          swiftUrl,
          {
            market_index: selectedMarketIndex,
            market_type: "perp",
            message: message,
            signature: finalSignature,
            taker_authority: drift.driftClient.wallet.publicKey.toBase58(),
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log("Swift order response:", response);

        resetForm();
        return;
      } catch (error) {
        console.error("Error in Swift order handling:", error);
        toast.error("Swift Order Failed", {
          description: "Failed to process Swift order. Please try again.",
          duration: 4000,
        });
        return;
      } finally {
        setIsLoading(false);
      }
    }

    // Handle regular (non-Swift) orders
    try {
      const sizePrecisionExp =
        sizeType === "base" ? BASE_PRECISION_EXP : QUOTE_PRECISION_EXP;
      const sizeBigNum = BigNum.fromPrint(size, sizePrecisionExp);

      let orderConfig: PerpOrderParams["orderConfig"];

      switch (orderType) {
        case "market": {
          orderConfig = {
            orderType: "market",
            disableSwift: true, // Always disable Swift for regular orders
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
        }
        case "limit": {
          const limitPriceBigNum = BigNum.fromPrint(
            limitPrice,
            QUOTE_PRECISION_EXP
          );

          orderConfig = {
            orderType: "limit",
            limitPrice: limitPriceBigNum,
            disableSwift: true, // Always disable Swift for regular orders
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
        }
        case "takeProfit":
        case "stopLoss":
          const triggerPriceBigNum = BigNum.fromPrint(
            triggerPrice,
            QUOTE_PRECISION_EXP
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
            QUOTE_PRECISION_EXP
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

      // For regular (non-Swift) orders, show success toast
      const _txSig = result as TransactionSignature;

      toast.success("Order Placed", {
        description: successMessage,
        duration: 4000,
      });

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

    const shouldUseSwiftOrder =
      isSwiftClientHealthy &&
      useSwift &&
      (orderType === "market" || orderType === "limit");
    if (!canApplyBuilderCodes(shouldUseSwiftOrder)) return null;

    try {
      const sizePrecisionExp =
        sizeType === "base" ? BASE_PRECISION_EXP : QUOTE_PRECISION_EXP;
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
    canUseBuilderCodes: canApplyBuilderCodes(
      isSwiftClientHealthy &&
        useSwift &&
        (orderType === "market" || orderType === "limit")
    ),
  };
};
