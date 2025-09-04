import { useQuery } from "@tanstack/react-query";
import { useWallet } from "@solana/wallet-adapter-react";
import { useDriftStore } from "@/stores/DriftStore";
import { getWalletSpotBalances } from "@/lib/spot";
import { useUniqueSpotMarketConfigs } from "./useUniqueSpotMarketConfigs";

export const useWalletSpotBalances = () => {
  const { publicKey } = useWallet();
  const connection = useDriftStore((s) => s.drift?.driftClient.connection);
  const spotMarketConfigs = useUniqueSpotMarketConfigs();

  return useQuery({
    queryKey: [
      "walletSpotBalances",
      publicKey?.toBase58(),
      spotMarketConfigs.length,
    ],
    queryFn: () => {
      if (!connection || !publicKey) return [];

      return getWalletSpotBalances(connection, publicKey, spotMarketConfigs);
    },
    enabled: !!connection && !!publicKey && spotMarketConfigs.length > 0,
    staleTime: 1000 * 30, // 30 seconds
  });
};
