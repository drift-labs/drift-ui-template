import { useDriftStore } from "@/stores/DriftStore";
import { useWallet } from "@solana/wallet-adapter-react";
import {
  fetchRevenueShareEscrowAccount,
  fetchRevenueShareAccount,
} from "@drift-labs/sdk";
import { useUserAccountDataStore } from "@/stores/UserAccountDataStore";
import { useQuery } from "@tanstack/react-query";
import { BUILDER_AUTHORITY } from "@/constants/builderCode";

/**
 * Syncs the RevenueShareAccount for the builder (set by the environment variable)
 */
const useSyncRevenueShareAccount = () => {
  const driftClient = useDriftStore((s) => s.drift?.driftClient);
  const connection = useDriftStore((s) => s.drift?.driftClient?.connection);
  const setUserAccountDataStore = useUserAccountDataStore((s) => s.set);

  const { refetch: syncRevenueShareEscrow } = useQuery({
    queryKey: ["revenueShareEscrow", BUILDER_AUTHORITY?.toString()],
    queryFn: async () => {
      if (!connection || !driftClient || !BUILDER_AUTHORITY) {
        setUserAccountDataStore((s) => {
          s.revenueShareEscrow = undefined;
        });
        return null;
      }

      const account = await fetchRevenueShareAccount(
        connection,
        driftClient.program,
        BUILDER_AUTHORITY,
      );

      setUserAccountDataStore((s) => {
        s.revenueShareAccount = account ?? undefined;
      });

      return null;
    },
    enabled: !!driftClient && !!BUILDER_AUTHORITY && !!connection,
  });

  return {
    syncRevenueShareEscrow,
  };
};

/**
 * Syncs the RevenueShareEscrow for the connected user.
 */
export const useSyncRevenueShareEscrow = () => {
  const driftClient = useDriftStore((s) => s.drift?.driftClient);
  const connection = useDriftStore((s) => s.drift?.driftClient?.connection);
  const { publicKey } = useWallet();
  const setUserAccountDataStore = useUserAccountDataStore((s) => s.set);

  const { refetch: syncRevenueShareEscrow } = useQuery({
    queryKey: ["revenueShareEscrow", publicKey?.toString()],
    queryFn: async () => {
      if (!connection || !driftClient || !publicKey) {
        setUserAccountDataStore((s) => {
          s.revenueShareEscrow = undefined;
        });
        return null;
      }

      const escrow = await fetchRevenueShareEscrowAccount(
        connection,
        driftClient.program,
        publicKey,
      );

      setUserAccountDataStore((s) => {
        s.revenueShareEscrow = escrow ?? undefined;
      });

      return null;
    },
    enabled: !!driftClient && !!publicKey && !!connection,
  });

  return {
    syncRevenueShareEscrow,
  };
};

export const useSyncRevenueShareAccts = () => {
  useSyncRevenueShareAccount();
  useSyncRevenueShareEscrow();
};
