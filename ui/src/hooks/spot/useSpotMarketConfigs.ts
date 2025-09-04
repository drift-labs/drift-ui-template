import { useDriftStore } from "@/stores/DriftStore";
import { useMemo } from "react";

export const useSpotMarketConfigs = (poolId?: number) => {
  const spotMarketConfigs = useDriftStore((s) => s.getSpotMarketConfigs());

  return useMemo(() => {
    if (poolId === undefined) {
      return spotMarketConfigs;
    }

    return spotMarketConfigs.filter((marketConfig) => {
      return marketConfig.poolId === poolId;
    });
  }, [spotMarketConfigs, poolId]);
};
