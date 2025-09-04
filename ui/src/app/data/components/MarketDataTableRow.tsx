"use client";

import React, { useEffect, useRef, useState } from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import { useGetPerpMarketTickSizeDecimals } from "@/hooks/markets/useGetPerpMarketTickSizeDecimals";
import { BigNum, BN, PRICE_PRECISION_EXP } from "@drift-labs/sdk";
import { MarketId, MarketKey } from "@drift/common";
import { cn } from "@/lib/utils";
import { useDriftStore } from "@/stores/DriftStore";

interface MarketDataTableRowProps {
  marketKey: MarketKey;
  markData?: {
    markPrice?: BN;
    bestBid?: BN;
    bestAsk?: BN;
    lastUpdateSlot: number;
  };
  oracleData?: {
    price?: BN;
    slot?: BN;
  };
  marketSymbol: string;
  isSelected?: boolean;
}

interface BlinkingCellProps {
  children: React.ReactNode;
  value: BN | string | number | undefined;
  className?: string;
}

const BlinkingCell: React.FC<BlinkingCellProps> = ({
  children,
  value,
  className,
}) => {
  const [isBlinking, setIsBlinking] = useState(false);
  const prevValueRef = useRef(value);

  useEffect(() => {
    if (prevValueRef.current !== value && prevValueRef.current !== undefined) {
      setIsBlinking(true);
      const timer = setTimeout(() => setIsBlinking(false), 100);
      return () => clearTimeout(timer);
    }
    prevValueRef.current = value;
  }, [value]);

  return (
    <TableCell className={className}>
      <span
        className={cn(
          isBlinking &&
            "animate-pulse opacity-30 transition-opacity duration-100",
        )}
      >
        {children}
      </span>
    </TableCell>
  );
};

export const MarketDividerRow: React.FC<{ title: string }> = ({ title }) => {
  return (
    <TableRow>
      <TableCell
        colSpan={9}
        className="bg-black font-semibold text-center py-3 border-y-2 border-gray-300 dark:border-gray-600"
      >
        {title}
      </TableCell>
    </TableRow>
  );
};

export const MarketDataTableRow: React.FC<MarketDataTableRowProps> = ({
  marketKey,
  markData,
  oracleData,
  marketSymbol,
  isSelected = false,
}) => {
  // Get market id from market key and find the market config
  const pollingDlob = useDriftStore((s) => s.drift?.pollingDlob);
  const marketId = MarketId.getMarketIdFromKey(marketKey);

  const tickSizeDecimals = useGetPerpMarketTickSizeDecimals(
    marketId.marketIndex,
  );

  // Calculate price difference and spread
  let spread = "N/A";

  if (markData) {
    const bid = parseFloat(markData.bestBid?.toString() || "0");
    const ask = parseFloat(markData.bestAsk?.toString() || "0");
    if (bid && ask) {
      spread = (((ask - bid) / bid) * 100).toFixed(4) + "%";
    }
  }

  // Format prices with proper decimals
  const formatPrice = (price: BN | undefined) => {
    if (!price) return "N/A";
    return BigNum.from(price, PRICE_PRECISION_EXP).toNotional(
      undefined,
      undefined,
      tickSizeDecimals,
    );
  };

  const pollingInfo = pollingDlob?.getPollingIntervalForMarket(marketKey);

  return (
    <TableRow
      key={marketKey}
      className={cn(
        isSelected &&
          "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700",
      )}
    >
      <TableCell className="font-mono text-sm text-gray-500">
        {marketId.marketIndex}
      </TableCell>
      <TableCell className="font-medium">{marketSymbol}</TableCell>
      <BlinkingCell value={markData?.markPrice}>
        {formatPrice(markData?.markPrice)}
      </BlinkingCell>
      <BlinkingCell value={oracleData?.price}>
        {formatPrice(oracleData?.price)}
      </BlinkingCell>
      <BlinkingCell value={markData?.bestBid}>
        {formatPrice(markData?.bestBid)}
      </BlinkingCell>
      <BlinkingCell value={markData?.bestAsk}>
        {formatPrice(markData?.bestAsk)}
      </BlinkingCell>
      <BlinkingCell value={spread} className="text-gray-400">
        {spread}
      </BlinkingCell>
      <TableCell className={`font-mono text-sm`}>
        {isSelected ? "Websocket" : `${pollingInfo?.intervalMultiplier}s`}
      </TableCell>
      <BlinkingCell value={markData?.lastUpdateSlot}>
        {markData?.lastUpdateSlot || "N/A"}
      </BlinkingCell>
    </TableRow>
  );
};
