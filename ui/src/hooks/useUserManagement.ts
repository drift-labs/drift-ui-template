"use client";

import { useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useDriftStore } from "@/stores/DriftStore";
import { useUserAccountDataStore } from "@/stores/UserAccountDataStore";
import { BigNum } from "@drift-labs/sdk";

export const useUserManagement = () => {
  const { connected, publicKey } = useWallet();
  const drift = useDriftStore((s) => s.drift);
  const spotMarketConfigs = useDriftStore((s) => s.getSpotMarketConfigs());
  const userAccountLookup = useUserAccountDataStore((s) => s.lookup);
  const activeSubAccountId = useUserAccountDataStore(
    (s) => s.activeSubAccountId,
  );
  const setActiveSubAccountId = useUserAccountDataStore(
    (s) => s.setActiveSubAccountId,
  );

  const [isDeleting, setIsDeleting] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [selectedSubAccountForDeletion, setSelectedSubAccountForDeletion] =
    useState<number | null>(null);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  // Get user accounts for the connected wallet
  const userAccounts = Object.values(userAccountLookup).filter(
    (account) => account?.authority?.toBase58() === publicKey?.toBase58(),
  );

  const handleDeleteUser = async (subAccountId: number) => {
    if (!connected || !drift) return;

    setIsDeleting(true);
    setStatus({ type: null, message: "" });

    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const txSignature = await (drift as any).deleteUser(subAccountId);
      setStatus({
        type: "success",
        message: `Successfully deleted user account ${subAccountId}. Transaction: ${txSignature}`,
      });
      setShowDeleteDialog(false);
      setSelectedSubAccountForDeletion(null);
    } catch {
      setStatus({
        type: "error",
        message: `Failed to delete user account ${subAccountId}. Please try again.`,
      });
    } finally {
      setIsDeleting(false);
    }
  };

  const openDeleteDialog = (subAccountId: number) => {
    setSelectedSubAccountForDeletion(subAccountId);
    setShowDeleteDialog(true);
  };

  const handleCreateAndDeposit = async (params: {
    selectedMarketIndex: number;
    amount: string;
  }) => {
    if (!connected || !drift) return;

    const selectedSpotMarketConfig = spotMarketConfigs.find(
      (marketConfig) => marketConfig.marketIndex === params.selectedMarketIndex,
    );

    if (!selectedSpotMarketConfig) {
      throw new Error("Invalid market configuration");
    }

    const depositAmount = BigNum.fromPrint(
      params.amount,
      selectedSpotMarketConfig.precisionExp,
    );

    await drift.createUserAndDeposit({
      depositAmount,
      depositSpotMarketIndex: params.selectedMarketIndex,
      newAccountName: "Main Account",
      poolId: 0,
      subAccountId: 0,
      referrerName: "dev2",
    });
  };

  const handleSetActiveSubAccount = (subAccountId: number) => {
    setActiveSubAccountId(subAccountId);
    setStatus({
      type: "success",
      message: `Sub-Account #${subAccountId} is now active`,
    });
  };

  return {
    // State
    connected,
    publicKey,
    drift,
    spotMarketConfigs,
    userAccounts,
    activeSubAccountId,
    isDeleting,
    showDeleteDialog,
    selectedSubAccountForDeletion,
    status,

    // Actions
    handleDeleteUser,
    openDeleteDialog,
    handleCreateAndDeposit,
    handleSetActiveSubAccount,
    setShowDeleteDialog,
    setStatus,
  };
};
