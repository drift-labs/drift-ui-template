import { useDriftStore } from "@/stores/DriftStore";
import { useMemo } from "react";

export const useUniqueSpotMarketConfigs = () => {
  const spotMarketConfigs = useDriftStore((s) => s.getSpotMarketConfigs());

  return useMemo(() => {
    const uniqueMints = new Set<string>();

    spotMarketConfigs.forEach((config) => {
      uniqueMints.add(config.mint.toBase58());
    });

    return Array.from(uniqueMints).map((mint) => {
      return spotMarketConfigs.find(
        (config) => config.mint.toBase58() === mint,
      )!;
    });
  }, [spotMarketConfigs]);
};
