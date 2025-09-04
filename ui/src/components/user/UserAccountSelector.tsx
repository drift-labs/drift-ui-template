"use client";

import React from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useUserAccountDataStore } from "@/stores/UserAccountDataStore";
import { EnhancedAccountData, UserAccountCache } from "@drift/common";
import { User, ChevronDown, CheckCircle2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui";

export function UserAccountSelector() {
  const { connected, publicKey } = useWallet();
  const userAccountLookup = useUserAccountDataStore((s) => s.lookup);
  const activeSubAccountId = useUserAccountDataStore(
    (s) => s.activeSubAccountId,
  );
  const setActiveSubAccountId = useUserAccountDataStore(
    (s) => s.setActiveSubAccountId,
  );

  // Don't render if wallet not connected
  if (!connected || !publicKey) {
    return null;
  }

  // Get user accounts for the connected wallet
  const userAccounts = Object.values(userAccountLookup).filter(
    (account) => account?.authority?.toBase58() === publicKey?.toBase58(),
  );

  // Don't render if no user accounts exist
  if (userAccounts.length === 0) {
    return null;
  }

  // Find the active account
  const activeAccount =
    activeSubAccountId !== undefined
      ? userAccountLookup[
          UserAccountCache.getUserAccountKey(activeSubAccountId, publicKey)
        ]
      : userAccounts[0]; // Fallback to first account if no active account set

  const handleAccountSelect = (subAccountId: number) => {
    setActiveSubAccountId(subAccountId);
  };

  const formatBalance = (account: EnhancedAccountData) => {
    if (!account?.marginInfo?.netUsdValue) return "$0.00";

    // Use the same calculation as UserAccountCard
    return account.marginInfo.netUsdValue.toNotional();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center gap-2 bg-gray-800/50 border-gray-700 hover:bg-gray-800/80 text-white"
        >
          <User className="h-4 w-4" />
          <div className="flex flex-col items-start">
            <span className="text-sm font-medium">
              {activeAccount?.name ||
                `Account #${activeAccount?.subAccountId || 0}`}
            </span>
            <span className="text-xs text-gray-400">
              {formatBalance(activeAccount)}
            </span>
          </div>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64">
        <DropdownMenuLabel>Select User Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {userAccounts.map((account) => {
          const isActive = activeSubAccountId === account.subAccountId;

          return (
            <DropdownMenuItem
              key={account.subAccountId}
              onClick={() => handleAccountSelect(account.subAccountId)}
              className="flex items-center justify-between cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <User className="h-4 w-4 text-gray-400" />
                <div className="flex flex-col">
                  <span className="font-medium">
                    {account.name || `Account #${account.subAccountId}`}
                  </span>
                  <span className="text-xs text-gray-500">
                    ID: {account.subAccountId} • {formatBalance(account)}
                  </span>
                </div>
              </div>
              {isActive && <CheckCircle2 className="h-4 w-4 text-green-400" />}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
