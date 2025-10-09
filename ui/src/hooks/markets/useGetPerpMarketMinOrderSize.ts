import { useMemo } from "react";
import { useDriftStore } from "@/stores/DriftStore";
import { BN, ZERO } from "@drift-labs/sdk";

/**
 * Hook to get the minimum order size for a perp market
 * @param marketIndex - The index of the perp market
 * @returns The minimum order size as a BN, or ZERO if not available
 */
export const useGetPerpMarketMinOrderSize = (marketIndex: number): BN => {
  const driftClient = useDriftStore((s) => s.drift?.driftClient);

  return useMemo(() => {
    if (!driftClient) {
      return ZERO;
    }

    try {
      const perpMarketAccount = driftClient.getPerpMarketAccount(marketIndex);
      if (!perpMarketAccount) {
        return ZERO;
      }

      // Get the minimum order size from the AMM
      return perpMarketAccount.amm.minOrderSize;
    } catch (error) {
      console.error(`Failed to get perp market account for index ${marketIndex}:`, error);
      return ZERO;
    }
  }, [driftClient, marketIndex]);
};