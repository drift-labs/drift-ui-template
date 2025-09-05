import { useDriftStore } from "@/stores/DriftStore";
import { MarketId, TRADING_UTILS } from "@drift-labs/common";

export const useGetPerpMarketTickSizeDecimals = (marketIndex: number) => {
  const driftClient = useDriftStore((s) => s.drift?.driftClient);

  const tickSizeDecimals = driftClient
    ? TRADING_UTILS.getMarketTickSizeDecimals(
        driftClient,
        MarketId.createPerpMarket(marketIndex),
      )
    : 0;

  return tickSizeDecimals;
};
