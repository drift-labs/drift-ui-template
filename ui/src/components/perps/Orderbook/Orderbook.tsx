"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/cardd";
import { FormSelect } from "../../ui/form-select";
import { useDriftStore } from "@/stores/DriftStore";
import { useMarkPriceStore } from "@/stores/MarkPriceStore";
import {
  DEFAULT_ORDERBOOK_GROUPING,
  L2WithOracleAndMarketData,
  TRADING_UTILS,
} from "@drift/common";
import { MarketId } from "@drift/common";
import { OrderbookGrouping } from "@drift/common";
import {
  BigNum,
  PRICE_PRECISION_EXP,
  BASE_PRECISION_EXP,
  ZERO,
  BN,
} from "@drift-labs/sdk";
import { BookOpenText } from "lucide-react";

const ORDERBOOK_MAX_LEVELS = 20;

interface OrderbookProps {
  selectedMarketId: MarketId;
}

interface OrderbookLevel {
  price: string;
  size: string;
  total: string;
}

type OrderbookItem = {
  type: "ask" | "bid" | "mark";
  level?: OrderbookLevel;
  markPrice?: string;
  spread?: string;
};

interface OrderbookRowProps {
  item: OrderbookItem;
}

const OrderbookRow: React.FC<OrderbookRowProps> = ({ item }) => {
  if (item.type === "mark") {
    return (
      <div
        className="px-4 py-3 bg-gray-800/50 border-y border-gray-600"
        data-mark-price="true"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-400">Mark:</span>
            <span className="text-sm font-mono text-green-400">
              {item.markPrice || "--"}
            </span>
          </div>
          {item.spread && (
            <div className="text-xs text-gray-400">
              Spread: <span className="font-mono">{item.spread}</span>
            </div>
          )}
        </div>
      </div>
    );
  }

  const level = item.level!;
  const isAsk = item.type === "ask";
  const priceColor = isAsk ? "text-red-400" : "text-green-400";
  const hoverColor = isAsk ? "hover:bg-red-500/10" : "hover:bg-green-500/10";

  return (
    <div
      className={`flex items-center gap-4 px-4 py-1 text-xs ${hoverColor} border-b border-gray-800 [&>div]:flex-1`}
    >
      <div className={`text-left font-mono ${priceColor}`}>{level.price}</div>
      <div className="text-right text-gray-300 font-mono">{level.size}</div>
      <div className="text-right text-gray-400 font-mono">{level.total}</div>
    </div>
  );
};

export const Orderbook: React.FC<OrderbookProps> = ({ selectedMarketId }) => {
  const drift = useDriftStore((s) => s.drift);
  const [orderbookData, setOrderbookData] =
    useState<L2WithOracleAndMarketData | null>(null);
  const [selectedGrouping, setSelectedGrouping] = useState<OrderbookGrouping>(
    DEFAULT_ORDERBOOK_GROUPING,
  );
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const hasScrolledToCenter = useRef(false);

  const markPriceData = useMarkPriceStore(
    (s) => s.lookup[selectedMarketId.key],
  );

  const tickSizeDecimals = drift?.driftClient
    ? TRADING_UTILS.getMarketTickSizeDecimals(
        drift.driftClient,
        selectedMarketId,
      )
    : 2;
  const tickSizePrecision = drift?.driftClient
    ? TRADING_UTILS.getMarketTickSize(drift.driftClient, selectedMarketId)
    : ZERO;
  const stepSizeDecimals = drift?.driftClient
    ? TRADING_UTILS.getMarketStepSizeDecimals(
        drift.driftClient,
        selectedMarketId,
      )
    : 2;

  const tickSize = useMemo(
    () => BigNum.from(tickSizePrecision, PRICE_PRECISION_EXP),
    [tickSizePrecision],
  );

  const groupingOptions: { value: string; label: string }[] = useMemo(
    () => [
      {
        value: "1",
        label: `${tickSize
          .mul(new BN(1))
          .prettyPrint(undefined, undefined, tickSizeDecimals)}`,
      },
      {
        value: "10",
        label: `${tickSize.mul(new BN(10)).prettyPrint()}`,
      },
      {
        value: "100",
        label: `${tickSize.mul(new BN(100)).prettyPrint()}`,
      },
      {
        value: "500",
        label: `${tickSize.mul(new BN(500)).prettyPrint()}`,
      },
      {
        value: "1000",
        label: `${tickSize.mul(new BN(1000)).prettyPrint()}`,
      },
    ],
    [tickSizeDecimals, tickSize],
  );

  const handleGroupingChange = (value: string) => {
    if (drift?.orderbookManager) {
      const newGrouping = parseInt(value) as OrderbookGrouping;
      setSelectedGrouping(newGrouping);

      drift.orderbookManager.updateSubscription({
        marketId: selectedMarketId,
        grouping: newGrouping,
      });
    }
  };

  useEffect(() => {
    if (!drift) return;

    // Get initial orderbook data
    const initialData = drift.orderbookCache;
    if (initialData) {
      setOrderbookData(initialData);
    }

    // Subscribe to orderbook updates
    const subscription = drift.onOrderbookUpdate((newOrderbookData) => {
      setOrderbookData(newOrderbookData);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [drift]);

  const { combinedOrderbookData } = useMemo(() => {
    if (!orderbookData) {
      return { combinedOrderbookData: [], markPrice: null, spread: null };
    }

    // Process asks (sort high to low for display)
    const asksSlice = orderbookData.asks.slice(0, ORDERBOOK_MAX_LEVELS);
    const reversedAsks = [...asksSlice].reverse(); // Reverse for display (highest price first)

    // Calculate cumulative totals: for asks, smallest at top, largest at bottom
    const processedAsks: OrderbookLevel[] = reversedAsks.map((level, index) => {
      const price = BigNum.from(level.price, PRICE_PRECISION_EXP).toNotional(
        undefined,
        undefined,
        tickSizeDecimals,
      );
      const size = BigNum.from(level.size, BASE_PRECISION_EXP).prettyPrint(
        undefined,
        undefined,
        stepSizeDecimals,
      );

      // Calculate cumulative from current level down to the worst ask (bottom)
      const total = reversedAsks
        .slice(index)
        .reduce((sum, l) => sum.add(l.size), ZERO);
      const totalFormatted = BigNum.from(total, BASE_PRECISION_EXP).prettyPrint(
        undefined,
        undefined,
        stepSizeDecimals,
      );

      return {
        price,
        size,
        total: totalFormatted,
      };
    });

    // Process bids (sort high to low)
    const processedBids: OrderbookLevel[] = orderbookData.bids
      .slice(0, ORDERBOOK_MAX_LEVELS) // Show top 10 levels
      .map((level, index) => {
        const price = BigNum.from(level.price, PRICE_PRECISION_EXP).toNotional(
          undefined,
          undefined,
          tickSizeDecimals,
        );
        const size = BigNum.from(level.size, BASE_PRECISION_EXP).prettyPrint(
          undefined,
          undefined,
          stepSizeDecimals,
        );
        const total = orderbookData.bids
          .slice(0, index + 1)
          .reduce((sum, l) => sum.add(l.size), ZERO);
        const totalFormatted = BigNum.from(
          total,
          BASE_PRECISION_EXP,
        ).prettyPrint(undefined, undefined, stepSizeDecimals);

        return {
          price,
          size,
          total: totalFormatted,
        };
      });

    const currentMarkPrice = markPriceData
      ? BigNum.from(
          markPriceData.markPrice ?? ZERO,
          PRICE_PRECISION_EXP,
        ).toNotional(undefined, undefined, tickSizeDecimals)
      : null;

    const currentSpread =
      orderbookData.bestAskPrice && orderbookData.bestBidPrice
        ? BigNum.from(
            orderbookData.bestAskPrice.sub(orderbookData.bestBidPrice),
            PRICE_PRECISION_EXP,
          ).toNotional(undefined, undefined, tickSizeDecimals)
        : null;

    // Combine asks, mark price, and bids into single array
    const combinedData: OrderbookItem[] = [
      // Asks (highest to lowest price)
      ...processedAsks.map((level) => ({
        type: "ask" as const,
        level,
      })),
      // Mark price separator
      {
        type: "mark" as const,
        markPrice: currentMarkPrice ?? "",
        spread: currentSpread ?? "",
      },
      // Bids (highest to lowest price)
      ...processedBids.map((level) => ({
        type: "bid" as const,
        level,
      })),
    ];

    return {
      combinedOrderbookData: combinedData,
      markPrice: currentMarkPrice,
      spread: currentSpread,
    };
  }, [orderbookData, markPriceData, tickSizeDecimals, stepSizeDecimals]);

  // Auto-scroll to mark price only on first render
  useEffect(() => {
    if (
      combinedOrderbookData.length > 0 &&
      scrollContainerRef.current &&
      !hasScrolledToCenter.current
    ) {
      const markPriceElement = scrollContainerRef.current.querySelector(
        '[data-mark-price="true"]',
      );
      if (markPriceElement) {
        const container = scrollContainerRef.current;
        const containerRect = container.getBoundingClientRect();
        const elementRect = markPriceElement.getBoundingClientRect();

        const scrollTop =
          container.scrollTop +
          (elementRect.top - containerRect.top) -
          containerRect.height / 2 +
          elementRect.height / 2;

        container.scrollTop = scrollTop;
        hasScrolledToCenter.current = true;
      }
    }
  }, [combinedOrderbookData]);

  return (
    <Card className="h-full max-h-[700px] flex flex-col">
      <CardHeader className="flex-shrink-0">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg">
            <BookOpenText className="h-5 w-5 text-blue-400" />
            Order Book
          </CardTitle>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-400">Grouping:</span>
            <FormSelect
              value={selectedGrouping.toString()}
              onValueChange={handleGroupingChange}
              options={groupingOptions}
              className="w-24"
            />
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0 flex-1 flex flex-col min-h-0">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex justify-between gap-4 px-4 py-2 text-xs font-medium text-gray-400 border-b [&>div]:flex-1 flex-shrink-0">
            <div className="text-left">Price</div>
            <div className="text-right">Size</div>
            <div className="text-right">Total</div>
          </div>

          {/* Combined Orderbook */}
          <div
            className="flex-1 overflow-y-auto min-h-0"
            ref={scrollContainerRef}
          >
            {combinedOrderbookData.map((item, index) => (
              <OrderbookRow key={`orderbook-${index}`} item={item} />
            ))}
          </div>

          {/* Loading state */}
          {!orderbookData && (
            <div className="flex-1 flex items-center justify-center py-8">
              <div className="text-sm text-gray-400">Loading orderbook...</div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
