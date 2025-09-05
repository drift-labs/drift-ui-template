"use client";

import React from "react";
import {
  TableRow,
  TableCell,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../../ui";
import {
  ENUM_UTILS,
  MarketId,
  PerpPositionInfo,
  TRADING_UTILS,
} from "@drift-labs/common";
import {
  BigNum,
  PositionDirection,
  PRICE_PRECISION_EXP,
  ZERO,
} from "@drift-labs/sdk";
import { useDriftStore } from "@/stores/DriftStore";
import { useMarkPriceStore } from "@/stores/MarkPriceStore";
import { Info } from "lucide-react";

interface PositionTableRowProps {
  position: PerpPositionInfo;
}

export function PositionTableRow({ position }: PositionTableRowProps) {
  const perpMarketConfigs = useDriftStore((s) => s.getPerpMarketConfigs());
  const driftClient = useDriftStore((s) => s.drift?.driftClient);

  const marketId = MarketId.createPerpMarket(position.marketIndex);

  const markPrice = useMarkPriceStore(
    (s) => s.lookup[marketId.key]?.markPrice ?? ZERO,
  );

  const marketConfig = perpMarketConfigs.find(
    (config) => config.marketIndex === position.marketIndex,
  );

  const tickSizeDecimals = driftClient
    ? TRADING_UTILS.getMarketTickSizeDecimals(
        driftClient,
        MarketId.createPerpMarket(position.marketIndex),
      )
    : 0;

  const isLong = ENUM_UTILS.match(position.direction, PositionDirection.LONG);
  const pnlValue = position.positionPnl.markBased.positionNotionalPnl;
  const pnlPercentage = position.positionPnl.markBased.positionPnlPercentage;
  const pnlColor = pnlValue.gtZero() ? "text-green-400" : "text-red-400";

  // PnL details for tooltip and settle functionality
  const feesAndFundingPnl = position.feesAndFundingPnl;
  const costBasis = position.costBasis;
  const quoteBreakEvenAmount = position.quoteBreakEvenAmount;
  const totalUnrealizedPnl = position.totalUnsettledPnl;
  const totalClaimablePnl = position.totalClaimablePnl; // claimable pnl
  const settledPnl = position.totalSettledPnl; // settled pnl

  return (
    <TableRow key={position.marketIndex}>
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
        <div className="flex flex-col">
          <span>{position.baseSize.prettyPrint()}</span>
          <span className="text-xs text-gray-400">
            {position.notionalSize.toNotional()}
          </span>
        </div>
      </TableCell>
      <TableCell>
        {position.entryPrice.toNotional(undefined, undefined, tickSizeDecimals)}
      </TableCell>
      <TableCell>
        {BigNum.from(markPrice, PRICE_PRECISION_EXP).toNotional(
          undefined,
          undefined,
          tickSizeDecimals,
        )}
      </TableCell>
      <TableCell>
        <div className={`flex flex-col ${pnlColor}`}>
          <span>{pnlValue.toNotional()}</span>
          <span className="text-xs">({pnlPercentage.toFixed(2)}%)</span>
        </div>
      </TableCell>
      <TableCell>
        {position.liquidationPrice.gtZero()
          ? position.liquidationPrice.toNotional(
              undefined,
              undefined,
              tickSizeDecimals,
            )
          : "—"}
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className="h-4 w-4 text-gray-400 hover:text-gray-300 cursor-help" />
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <span>Fees & Funding PnL:</span>
                  <span
                    className={
                      feesAndFundingPnl.gtZero()
                        ? "text-green-400"
                        : "text-red-400"
                    }
                  >
                    {feesAndFundingPnl.toNotional()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Cost Basis:</span>
                  <span>{costBasis.toNotional()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Quote Breakeven:</span>
                  <span>{quoteBreakEvenAmount.toNotional()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Unsettled PnL:</span>
                  <span
                    className={
                      totalUnrealizedPnl.gtZero()
                        ? "text-green-400"
                        : "text-red-400"
                    }
                  >
                    {totalUnrealizedPnl.toNotional()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Total Claimable PnL:</span>
                  <span
                    className={
                      totalClaimablePnl.gtZero()
                        ? "text-green-400"
                        : "text-red-400"
                    }
                  >
                    {totalClaimablePnl.toNotional()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Total Settled PnL:</span>
                  <span
                    className={
                      settledPnl.gtZero() ? "text-green-400" : "text-red-400"
                    }
                  >
                    {settledPnl.toNotional()}
                  </span>
                </div>
              </div>
            </TooltipContent>
          </Tooltip>
        </div>
      </TableCell>
    </TableRow>
  );
}
