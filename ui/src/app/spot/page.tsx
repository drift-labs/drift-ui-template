"use client";

import React, { useMemo } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { ArrowUpDown, AlertCircle } from "lucide-react";
import { useUserAccountDataStore } from "@/stores/UserAccountDataStore";
import { SpotBalanceTable } from "../../components/spot/SpotBalanceTable";
import { DepositAndWithdrawForm } from "../../components/spot/DepositAndWithdrawForm";
import { SwapForm } from "../../components/spot/SwapForm";
import { useSpotMarketConfigs } from "@/hooks/spot/useSpotMarketConfigs";

export default function SpotPage() {
  const { connected, publicKey } = useWallet();
  const userAccountLookup = useUserAccountDataStore((s) => s.lookup);
  const currentAccount = useUserAccountDataStore((s) => s.getCurrentAccount());
  const spotMarketConfigs = useSpotMarketConfigs(currentAccount?.poolId);

  // Get user accounts for the connected wallet
  const userAccounts = useMemo(
    () =>
      Object.values(userAccountLookup).filter(
        (account) => account?.authority?.toBase58() === publicKey?.toBase58(),
      ),
    [userAccountLookup, publicKey],
  );

  if (!connected) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto flex justify-center">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <ArrowUpDown className="h-6 w-6 text-green-400" />
                <CardTitle>Spot Actions</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <AlertCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-white mb-2">
                  Wallet Not Connected
                </h3>
                <p className="text-gray-400">
                  Please connect your Solana wallet to deposit and withdraw
                  funds.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <ArrowUpDown className="h-8 w-8 text-green-400" />
            <h1 className="text-3xl font-bold text-white">Spot Actions</h1>
          </div>
          <p className="text-gray-400">
            Deposit, withdraw, and swap tokens in your Drift account.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <DepositAndWithdrawForm
            spotMarketConfigs={spotMarketConfigs}
            connected={connected}
            userAccounts={userAccounts}
          />

          <SwapForm
            spotMarketConfigs={spotMarketConfigs}
            connected={connected}
            userAccounts={userAccounts}
          />

          <SpotBalanceTable spotMarketConfigs={spotMarketConfigs} />
        </div>
      </div>
    </div>
  );
}
