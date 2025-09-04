"use client";

import React from "react";
import { PerpMarketConfig, PositionDirection } from "@drift-labs/sdk";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Button } from "../../ui/button";
import { FormInput } from "../../ui/form-input";
import { FormSelect } from "../../ui/form-select";
import { Target, TrendingUp, TrendingDown } from "lucide-react";
import {
  usePerpTrading,
  AssetSizeType,
  PerpOrderType,
} from "./hooks/usePerpTrading";
import { ENUM_UTILS } from "@drift/common";

interface PerpTradeFormProps {
  perpMarketConfigs: PerpMarketConfig[];
  selectedMarketIndex: number;
}

export function PerpTradeForm({
  perpMarketConfigs,
  selectedMarketIndex,
}: PerpTradeFormProps) {
  const {
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
    canSubmit,
  } = usePerpTrading({ perpMarketConfigs, selectedMarketIndex });

  const isLongSide = ENUM_UTILS.match(direction, PositionDirection.LONG);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleSubmit();
  };

  if (perpMarketConfigs.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-yellow-400" />
            Trading Form
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-gray-400">
            <Target className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>No markets available</p>
            <p className="text-sm">Connect to Drift to start trading</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Target className="h-5 w-5 text-yellow-400" />
          Place Perpetual Order
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} className="space-y-6">
          {/* Position Side */}
          <div className="space-y-2">
            <div className="flex bg-gray-800 rounded-lg p-1">
              <button
                type="button"
                onClick={() => setDirection(PositionDirection.LONG)}
                className={`flex-1 px-3 py-2 rounded text-sm font-medium transition-colors ${
                  isLongSide
                    ? "bg-green-600 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Long
              </button>
              <button
                type="button"
                onClick={() => setDirection(PositionDirection.SHORT)}
                className={`flex-1 px-3 py-2 rounded text-sm font-medium transition-colors ${
                  !isLongSide
                    ? "bg-red-600 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Short
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4 w-full *:flex-1">
            {/* Order Type Selection */}
            <FormSelect
              label="Order Type"
              value={orderType}
              onValueChange={(value) => setOrderType(value as PerpOrderType)}
              required
              options={[
                { value: "market", label: "Market" },
                { value: "limit", label: "Limit" },
                { value: "takeProfit", label: "Take Profit" },
                { value: "stopLoss", label: "Stop Loss" },
                { value: "oracleLimit", label: "Oracle Limit" },
              ]}
            />
          </div>

          <div className="flex items-center gap-4 w-full *:flex-1">
            {/* Size Type Selection */}
            <FormSelect
              label="Size Type"
              value={sizeType}
              onValueChange={(value) => setSizeType(value as AssetSizeType)}
              required
              options={[
                {
                  value: "base",
                  label: `Base Asset (${
                    selectedMarketConfig?.baseAssetSymbol || "Units"
                  })`,
                },
                {
                  value: "quote",
                  label: "Notional Value (USDC)",
                },
              ]}
            />

            {/* Size Input */}
            <FormInput
              type="number"
              label={`Size ${
                sizeType === "base"
                  ? `(${selectedMarketConfig?.baseAssetSymbol || "Units"})`
                  : "(USDC)"
              }`}
              placeholder="0.00"
              value={size}
              onChange={(e) => setSize(e.target.value)}
              step="any"
              min="0"
              required
            />
          </div>

          {/* Price Inputs Based on Order Type */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* Limit Price for limit orders */}
            {orderType === "limit" && (
              <FormInput
                type="number"
                label="Limit Price (USDC)"
                placeholder="0.00"
                value={limitPrice}
                onChange={(e) => setLimitPrice(e.target.value)}
                step="any"
                min="0"
                required
              />
            )}

            {/* Trigger Price for take profit/stop loss orders */}
            {(orderType === "takeProfit" || orderType === "stopLoss") && (
              <>
                <FormInput
                  type="number"
                  label="Trigger Price (USDC)"
                  placeholder="0.00"
                  value={triggerPrice}
                  onChange={(e) => setTriggerPrice(e.target.value)}
                  step="any"
                  min="0"
                  required
                />
                <FormInput
                  type="number"
                  label="Limit Price (USDC) - Optional"
                  placeholder="0.00"
                  value={limitPrice}
                  onChange={(e) => setLimitPrice(e.target.value)}
                  step="any"
                  min="0"
                />
              </>
            )}

            {/* Oracle Price Offset for oracle limit orders */}
            {orderType === "oracleLimit" && (
              <FormInput
                type="number"
                label="Price Offset (USDC)"
                placeholder="0.00"
                value={oraclePriceOffset}
                onChange={(e) => setOraclePriceOffset(e.target.value)}
                step="any"
                required
              />
            )}
          </div>

          {/* Take Profit/Stop Loss for Market and Limit Orders */}
          {(orderType === "market" || orderType === "limit") && (
            <div className="space-y-4">
              <div className="border-t border-gray-700 pt-4">
                <h4 className="text-sm font-medium text-gray-300 mb-3">
                  Optional Take Profit / Stop Loss
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <FormInput
                    type="number"
                    label="Take Profit Price (USDC)"
                    placeholder="0.00"
                    value={takeProfitPrice}
                    onChange={(e) => setTakeProfitPrice(e.target.value)}
                    step="any"
                    min="0"
                  />
                  <FormInput
                    type="number"
                    label="Stop Loss Price (USDC)"
                    placeholder="0.00"
                    value={stopLossPrice}
                    onChange={(e) => setStopLossPrice(e.target.value)}
                    step="any"
                    min="0"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Order Flags */}
          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={reduceOnly}
                onChange={(e) => setReduceOnly(e.target.checked)}
                className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
              />
              <span className="text-sm text-gray-200">Reduce Only</span>
            </label>

            {orderType !== "market" &&
              orderType !== "stopLoss" &&
              orderType !== "takeProfit" && (
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={postOnly}
                    onChange={(e) => setPostOnly(e.target.checked)}
                    className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <span className="text-sm text-gray-200">Post Only</span>
                </label>
              )}

            {(orderType === "limit" || orderType === "market") && (
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={useSwift}
                  onChange={(e) => setUseSwift(e.target.checked)}
                  className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
                />
                <span className="text-sm text-gray-200">Use Swift</span>
              </label>
            )}
          </div>

          {/* Order Preview */}
          {size && selectedMarketConfig && (
            <div
              className={`rounded-lg p-4 border ${
                isLongSide
                  ? "bg-green-600/10 border-green-600/20"
                  : "bg-red-600/10 border-red-600/20"
              }`}
            >
              <div className="flex items-start gap-3">
                {isLongSide ? (
                  <TrendingUp className="h-5 w-5 text-green-400 mt-0.5" />
                ) : (
                  <TrendingDown className="h-5 w-5 text-red-400 mt-0.5" />
                )}
                <div>
                  <h4
                    className={`font-medium mb-1 ${
                      isLongSide ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    Order Preview
                  </h4>
                  <div className="text-sm text-gray-300 space-y-1">
                    <p>• Market: {selectedMarketConfig.symbol}</p>
                    <p>• Side: {isLongSide ? "Long" : "Short"}</p>
                    <p>
                      • Type:{" "}
                      {orderType
                        .replace(/([A-Z])/g, " $1")
                        .replace(/^./, (str) => str.toUpperCase())}
                    </p>
                    <p>
                      • Size: {size}{" "}
                      {sizeType === "base"
                        ? selectedMarketConfig.baseAssetSymbol
                        : "USDC"}
                    </p>
                    {orderType === "limit" && limitPrice && (
                      <p>• Limit Price: ${limitPrice}</p>
                    )}
                    {(orderType === "takeProfit" || orderType === "stopLoss") &&
                      triggerPrice && (
                        <>
                          <p>• Trigger Price: ${triggerPrice}</p>
                          {limitPrice && <p>• Limit Price: ${limitPrice}</p>}
                        </>
                      )}
                    {orderType === "oracleLimit" && oraclePriceOffset && (
                      <p>• Price Offset: ${oraclePriceOffset}</p>
                    )}
                    {takeProfitPrice && (
                      <p className="text-green-400">
                        • Take Profit: ${takeProfitPrice}
                      </p>
                    )}
                    {stopLossPrice && (
                      <p className="text-red-400">
                        • Stop Loss: ${stopLossPrice}
                      </p>
                    )}
                    {reduceOnly && (
                      <p className="text-orange-400">• Reduce Only</p>
                    )}
                    {postOnly && <p className="text-purple-400">• Post Only</p>}
                  </div>
                </div>
              </div>
            </div>
          )}

          <Button
            type="submit"
            className={`w-full ${
              isLongSide
                ? "bg-green-600 hover:bg-green-700"
                : "bg-red-600 hover:bg-red-700"
            }`}
            size="lg"
            disabled={!canSubmit}
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                Processing...
              </div>
            ) : (
              <>
                {isLongSide ? (
                  <TrendingUp className="h-4 w-4 mr-2" />
                ) : (
                  <TrendingDown className="h-4 w-4 mr-2" />
                )}
                {isLongSide ? "Place Long" : "Place Short"} Order
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
