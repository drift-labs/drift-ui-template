import { useState } from "react";
import { useDriftStore } from "@/stores/DriftStore";
import { useWallet } from "@solana/wallet-adapter-react";
import { toast } from "sonner";
import { useSyncRevenueShareEscrow } from "../globalSyncs/useSyncRevenueShareAccts";
import {
  BUILDER_AUTHORITY,
  BUILDER_FEE_TENTH_BPS,
} from "@/constants/builderCode";

export const useDriftBuilderCode = () => {
  const drift = useDriftStore((s) => s.drift);
  const { publicKey } = useWallet();
  const { syncRevenueShareEscrow } = useSyncRevenueShareEscrow();

  const [isCreatingEscrow, setIsCreatingEscrow] = useState(false);

  const handleCreateEscrowForExistingWallet = async () => {
    if (!drift || !publicKey) {
      toast.error("Failed to create RevenueShareEscrow");
      return;
    }

    setIsCreatingEscrow(true);

    try {
      // Get builder configuration from environment
      const builderAuthority = BUILDER_AUTHORITY;
      const builderFeeTenthBps = BUILDER_FEE_TENTH_BPS;

      if (!builderAuthority) {
        toast.error("Builder authority not found");
        return;
      }

      await drift.createRevenueShareEscrow({
        numOrders: 16,
        builder: {
          builderAuthority,
          maxFeeTenthBps: builderFeeTenthBps,
        },
      });

      // Refresh escrow status
      await syncRevenueShareEscrow();
    } catch (error) {
      console.error("Failed to create RevenueShareEscrow:", error);
    } finally {
      setIsCreatingEscrow(false);
    }
  };

  return {
    isCreatingEscrow,
    handleCreateEscrowForExistingWallet,
  };
};
