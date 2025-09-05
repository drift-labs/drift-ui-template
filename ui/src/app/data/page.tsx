"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useMarkPriceStore } from "@/stores/MarkPriceStore";
import { useOraclePriceStore } from "@/stores/OraclePriceStore";
import { MarketId, MarketKey } from "@drift/common";
import {
  MarketDataTableRow,
  MarketDividerRow,
} from "./components/MarketDataTableRow";
import { useShallow } from "zustand/react/shallow";
import { useDriftStore } from "@/stores/DriftStore";
import { FormSelect } from "@/components/ui/form-select";
import { DEFAULT_PERP_MARKET_INDEX } from "@/constants/defaultMarkets";

const DataPage: React.FC = () => {
  const { lookup: markPriceLookup } = useMarkPriceStore();
  const { lookup: oraclePriceLookup } = useOraclePriceStore();
  const { drift, perpMarketConfigs, spotMarketConfigs } = useDriftStore(
    useShallow((s) => ({
      drift: s.drift,
      perpMarketConfigs: s.getPerpMarketConfigs(),
      spotMarketConfigs: s.getSpotMarketConfigs(),
    })),
  );

  const [selectedMarketId, setSelectedMarketId] = useState<MarketId>(
    MarketId.createPerpMarket(DEFAULT_PERP_MARKET_INDEX),
  );

  // Update AuthorityDrift's selectedTradeMarket when selection changes
  useEffect(() => {
    if (drift) {
      drift.updateSelectedTradeMarket(selectedMarketId);
    }
  }, [drift, selectedMarketId]);

  useEffect(() => {
    return () => {
      if (drift) {
        drift.updateSelectedTradeMarket(null);
      }
    };
  }, [drift]);

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Market Data</h1>
        <p className="text-gray-400">Real-time mark and oracle price data</p>
      </div>

      {/* Market Selector */}
      <Card>
        <CardHeader>
          <CardTitle>Selected Trade Market</CardTitle>
        </CardHeader>
        <CardContent>
          <FormSelect
            label="Select Market"
            value={selectedMarketId.marketIndex.toString()}
            onValueChange={(value) =>
              setSelectedMarketId(MarketId.createPerpMarket(Number(value)))
            }
            options={perpMarketConfigs.map((config) => ({
              value: config.marketIndex.toString(),
              label: `${config.symbol} (${config.baseAssetSymbol})`,
            }))}
          />
        </CardContent>
      </Card>

      {/* Combined Market Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Market Data Overview</CardTitle>
        </CardHeader>
        <CardContent>
          {Object.keys(markPriceLookup).length === 0 &&
          Object.keys(oraclePriceLookup).length === 0 ? (
            <div className="text-center py-8 text-gray-400">
              No market data available
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Index</TableHead>
                  <TableHead>Market</TableHead>
                  <TableHead>Mark Price</TableHead>
                  <TableHead>Oracle Price</TableHead>
                  <TableHead>Best Bid</TableHead>
                  <TableHead>Best Ask</TableHead>
                  <TableHead>Spread</TableHead>
                  <TableHead>L2 Polling Interval</TableHead>
                  <TableHead>L2 Last Update Slot</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {(() => {
                  const allMarketKeys = Array.from(
                    new Set([
                      ...Object.keys(markPriceLookup),
                      ...Object.keys(oraclePriceLookup),
                    ]),
                  );

                  // Separate perps and spots
                  const perpMarkets: string[] = [];
                  const spotMarkets: string[] = [];

                  allMarketKeys.forEach((marketKey) => {
                    const marketId = MarketId.getMarketIdFromKey(
                      marketKey as MarketKey,
                    );
                    if (marketId.isPerp) {
                      perpMarkets.push(marketKey);
                    } else {
                      spotMarkets.push(marketKey);
                    }
                  });

                  perpMarkets.sort((a, b) => {
                    const marketIdA = MarketId.getMarketIdFromKey(
                      a as MarketKey,
                    );
                    const marketIdB = MarketId.getMarketIdFromKey(
                      b as MarketKey,
                    );
                    return marketIdA.marketIndex - marketIdB.marketIndex;
                  });

                  const renderMarketRows = (marketKeys: string[]) =>
                    marketKeys.map((marketKey) => {
                      const markData = markPriceLookup[marketKey as MarketKey];
                      const oracleData =
                        oraclePriceLookup[marketKey as MarketKey];
                      const marketId = MarketId.getMarketIdFromKey(
                        marketKey as MarketKey,
                      );
                      const marketConfig = marketId.isPerp
                        ? perpMarketConfigs.find(
                            (config) =>
                              config.marketIndex === marketId.marketIndex,
                          )
                        : spotMarketConfigs.find(
                            (config) =>
                              config.marketIndex === marketId.marketIndex,
                          );

                      const isSelected = marketId.equals(selectedMarketId);

                      return (
                        <MarketDataTableRow
                          key={marketKey}
                          marketKey={marketKey as MarketKey}
                          markData={markData}
                          oracleData={oracleData}
                          marketSymbol={marketConfig?.symbol || marketKey}
                          isSelected={isSelected}
                        />
                      );
                    });

                  return (
                    <>
                      {perpMarkets.length > 0 && (
                        <>
                          <MarketDividerRow title="Perpetual Markets" />
                          {renderMarketRows(perpMarkets)}
                        </>
                      )}
                      {spotMarkets.length > 0 && (
                        <>
                          <MarketDividerRow title="Spot Markets" />
                          {renderMarketRows(spotMarkets)}
                        </>
                      )}
                    </>
                  );
                })()}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default DataPage;
