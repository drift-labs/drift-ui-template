"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { TrendingUp, AlertCircle, DollarSign } from "lucide-react";
import { useDriftStore } from "@/stores/DriftStore";
import { useMarkPriceStore } from "@/stores/MarkPriceStore";
import { useOraclePriceStore } from "@/stores/OraclePriceStore";
import { PerpTradeForm } from "../../components/perps/PerpTradeForm/PerpTradeForm";
import { PositionsTable } from "../../components/perps/PositionsTable/PositionsTable";
import { OpenOrdersTable } from "../../components/perps/OpenOrdersTable/OpenOrdersTable";
import { Orderbook } from "../../components/perps/Orderbook";
import { CandleChart } from "../../components/perps/CandleChart";
import { FormSelect } from "../../components/ui/form-select";
import { DEFAULT_PERP_MARKET_INDEX } from "../../constants/defaultMarkets";
import { MarketId, TRADING_UTILS } from "@drift-labs/common";
import { BigNum, PRICE_PRECISION_EXP, ZERO } from "@drift-labs/sdk";

export default function PerpsPage() {
  const { connected } = useWallet();
  const drift = useDriftStore((s) => s.drift);
  const perpMarketConfigs = useDriftStore((s) => s.getPerpMarketConfigs());
  const [selectedMarketIndex, setSelectedMarketIndex] = useState<number>(
    DEFAULT_PERP_MARKET_INDEX,
  );

  const selectedMarketId = useMemo(
    () => MarketId.createPerpMarket(selectedMarketIndex),
    [selectedMarketIndex],
  );

  const markPriceData = useMarkPriceStore(
    (s) => s.lookup[selectedMarketId.key],
  );
  const oraclePriceData = useOraclePriceStore(
    (s) => s.lookup[selectedMarketId.key],
  );

  const selectedMarketConfig = perpMarketConfigs.find(
    (config) => config.marketIndex === selectedMarketIndex,
  );

  const tickSizeDecimals = drift?.driftClient
    ? TRADING_UTILS.getMarketTickSizeDecimals(
        drift.driftClient,
        MarketId.createPerpMarket(selectedMarketIndex),
      )
    : 0;

  // Update AuthorityDrift's selectedTradeMarket when selection changes
  useEffect(() => {
    if (drift) {
      drift.updateSelectedTradeMarket(selectedMarketId);
    }

    return () => {
      if (drift) {
        drift.updateSelectedTradeMarket(null);
      }
    };
  }, [drift, selectedMarketId]);

  if (!connected) {
    return (
      <div className="container px-4 py-8">
        <div className="max-w-6xl mx-auto flex justify-center">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <TrendingUp className="h-6 w-6 text-purple-400" />
                <CardTitle>Perpetuals Trading</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <AlertCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-white mb-2">
                  Wallet Not Connected
                </h3>
                <p className="text-gray-400">
                  Please connect your Solana wallet to access perpetuals
                  trading.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="w-full mx-auto flex flex-col gap-3">
        {/* Header */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="h-8 w-8 text-purple-400" />
            <h1 className="text-3xl font-bold text-white">
              Perpetuals Trading
            </h1>
          </div>
          <p className="text-gray-400">
            Trade perpetual futures with leverage on your favorite tokens.
          </p>
        </div>

        {/* Market Selection and Price Display */}
        <div className="grid md:grid-cols-3 gap-3">
          {/* Market Selector */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <TrendingUp className="h-5 w-5 text-purple-400" />
                Market Selection
              </CardTitle>
            </CardHeader>
            <CardContent>
              <FormSelect
                label="Select Market"
                value={selectedMarketIndex.toString()}
                onValueChange={(value) => setSelectedMarketIndex(Number(value))}
                options={perpMarketConfigs.map((config) => ({
                  value: config.marketIndex.toString(),
                  label: `${config.symbol} (${config.baseAssetSymbol})`,
                }))}
              />
            </CardContent>
          </Card>

          {/* Mark Price Display */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <DollarSign className="h-5 w-5 text-green-400" />
                Mark Price
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-400">
                {markPriceData
                  ? `${BigNum.from(
                      markPriceData?.markPrice ?? ZERO,
                      PRICE_PRECISION_EXP,
                    ).toNotional(undefined, undefined, tickSizeDecimals)}`
                  : "--"}
              </div>
              <p className="text-sm text-gray-400 mt-1">
                {selectedMarketConfig?.symbol || "No market selected"}
              </p>
            </CardContent>
          </Card>

          {/* Oracle Price Display */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <DollarSign className="h-5 w-5 text-blue-400" />
                Oracle Price
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-400">
                {oraclePriceData
                  ? `${BigNum.from(
                      oraclePriceData?.price ?? ZERO,
                      PRICE_PRECISION_EXP,
                    ).toNotional(undefined, undefined, tickSizeDecimals)}`
                  : "--"}
              </div>
              <p className="text-sm text-gray-400 mt-1">
                {selectedMarketConfig?.symbol || "No market selected"}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Price Chart */}
        <div className="w-full">
          <CandleChart selectedMarketId={selectedMarketId} />
        </div>

        {/* Trading Form and Orderbook */}
        <div className="grid md:grid-cols-2 gap-3">
          <Orderbook selectedMarketId={selectedMarketId} />
          <PerpTradeForm
            perpMarketConfigs={perpMarketConfigs}
            selectedMarketIndex={selectedMarketIndex}
          />
        </div>

        {/* Positions Table */}
        <div>
          <PositionsTable />
        </div>

        {/* Open Orders Table */}
        <div>
          <OpenOrdersTable />
        </div>
      </div>
    </div>
  );
}
