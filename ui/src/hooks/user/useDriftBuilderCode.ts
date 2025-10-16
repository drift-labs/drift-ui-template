import { PublicKey } from "@solana/web3.js";
import { useState } from "react";
import { useDriftStore } from "@/stores/DriftStore";
import { useWallet } from "@solana/wallet-adapter-react";
import { toast } from "sonner";
import { useSyncRevenueShareEscrow } from "../globalSyncs/useSyncRevenueShareAccts";

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
      const builderAuthorityStr = process.env.NEXT_PUBLIC_BUILDER_AUTHORITY;
      const builderFeeTenthBpsStr =
        process.env.NEXT_PUBLIC_BUILDER_FEE_TENTH_BPS;

      if (!builderAuthorityStr || !builderFeeTenthBpsStr) {
        throw new Error("Builder configuration not found");
      }

      const builderAuthority = new PublicKey(builderAuthorityStr);
      const builderFeeTenthBps = parseInt(builderFeeTenthBpsStr);

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
