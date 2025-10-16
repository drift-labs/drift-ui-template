"use client";

import React, { useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { AlertCircle, Settings } from "lucide-react";
import { useDriftStore } from "@/stores/DriftStore";
import { createRevenueShareAccountTxn } from "@drift-labs/common";
import { toast } from "sonner";
import { fetchRevenueShareAccount, RevenueShareAccount } from "@drift-labs/sdk";

/**
 * This creates a RevenueShareAccount for the connected user, and its different from the environment-set builder authority.
 */
export default function AdminPage() {
  const { connected, publicKey } = useWallet();
  const drift = useDriftStore((s) => s.drift);
  const [isCreating, setIsCreating] = useState(false);
  const [revenueShareAccount, setRevenueShareAccount] = useState<
    RevenueShareAccount | undefined
  >(undefined);

  useEffect(() => {
    if (
      publicKey &&
      drift?.driftClient?.connection &&
      drift?.driftClient?.program
    ) {
      fetchRevenueShareAccount(
        drift.driftClient.connection,
        drift.driftClient.program,
        publicKey,
      ).then((account) => setRevenueShareAccount(account ?? undefined));
    }
  }, [publicKey, drift?.driftClient]);

  const handleCreateRevenueShareAccount = async () => {
    if (!connected || !drift?.driftClient || !publicKey) {
      toast.error("Wallet Not Connected", {
        description: "Please connect your wallet first",
        duration: 4000,
      });
      return;
    }

    setIsCreating(true);

    try {
      const driftClient = drift.driftClient;

      toast.loading("Creating RevenueShare Account", {
        description: "Please confirm the transaction in your wallet",
      });

      // Create the transaction
      const tx = await createRevenueShareAccountTxn({
        driftClient,
        authority: publicKey,
        txParams: drift.getTxParams(),
      });

      // Send and confirm transaction
      const signature = await drift.driftClient.sendTransaction(tx);

      toast.success("RevenueShare Account Created", {
        description: `Transaction: ${signature.txSig.slice(
          0,
          8,
        )}...${signature.txSig.slice(-8)}`,
        duration: 6000,
      });

      const account = await fetchRevenueShareAccount(
        drift.driftClient.connection,
        drift.driftClient.program,
        publicKey,
      );

      setRevenueShareAccount(account ?? undefined);
    } catch (error) {
      console.error("Failed to create RevenueShare account:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred";
      toast.error("Failed to Create Account", {
        description: errorMessage,
        duration: 6000,
      });
    } finally {
      setIsCreating(false);
    }
  };

  if (!connected) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Settings className="h-6 w-6 text-blue-400" />
                <CardTitle>Builder Admin Panel</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <AlertCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-white mb-2">
                  Wallet Not Connected
                </h3>
                <p className="text-gray-400">
                  Please connect your wallet to access builder administration
                  features.
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
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Settings className="h-8 w-8 text-blue-400" />
            <h1 className="text-3xl font-bold text-white">
              Builder Admin Panel
            </h1>
          </div>
          <p className="text-gray-400">
            Initialize your RevenueShare account to start receiving builder fees
            from trades routed through your services.
          </p>
        </div>

        <div className="space-y-6">
          {/* Connected Wallet Info */}
          <Card>
            <CardHeader>
              <CardTitle>Builder Authority</CardTitle>
              <CardDescription>
                Your wallet address will be used as the builder authority
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <p className="text-sm text-gray-400 mb-1">Wallet Address</p>
                <p className="font-mono text-white break-all">
                  {publicKey?.toBase58()}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* RevenueShare Account Status */}
          {revenueShareAccount ? (
            <Card className="border-green-600/20 bg-green-600/5">
              <CardHeader>
                <CardTitle className="text-green-400">
                  RevenueShare Account Active
                </CardTitle>
                <CardDescription>
                  Your account is set up and ready to receive builder fees
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-gray-800/50 rounded-lg p-4 space-y-3">
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Authority</p>
                      <p className="font-mono text-white break-all">
                        {revenueShareAccount.authority.toBase58()}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">
                        Total Builder Rewards
                      </p>
                      <p className="text-2xl font-bold text-green-400">
                        {(
                          revenueShareAccount.totalBuilderRewards.toNumber() /
                          1_000_000
                        ).toFixed(6)}{" "}
                        USDC
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">
                        Total Referrer Rewards
                      </p>
                      <p className="text-xl font-semibold text-blue-400">
                        {(
                          revenueShareAccount.totalReferrerRewards.toNumber() /
                          1_000_000
                        ).toFixed(6)}{" "}
                        USDC
                      </p>
                    </div>
                  </div>

                  <div className="bg-blue-600/10 border border-blue-600/20 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-blue-400 mb-2">
                      Account Information
                    </h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>
                        • Your account tracks fees earned from user trades
                      </li>
                      <li>
                        • Users can add you to their approved builders list
                      </li>
                      <li>• Fees are accumulated and can be claimed later</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>Initialize RevenueShare Account</CardTitle>
                <CardDescription>
                  Create your RevenueShare account to start earning fees
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-blue-600/10 border border-blue-600/20 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-blue-400 mb-2">
                      What is a RevenueShare Account?
                    </h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Tracks total fees earned from user trades</li>
                      <li>
                        • One-time setup required before users can approve you
                      </li>
                      <li>
                        • Owned by your wallet (builder authority address)
                      </li>
                      <li>• Required to receive builder code revenue</li>
                    </ul>
                  </div>

                  <Button
                    onClick={handleCreateRevenueShareAccount}
                    disabled={isCreating || !drift}
                    className="w-full"
                  >
                    {isCreating
                      ? "Creating Account..."
                      : "Create RevenueShare Account"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Help Section */}
          <Card>
            <CardHeader>
              <CardTitle>
                {revenueShareAccount ? "How It Works" : "Next Steps"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm text-gray-400">
                {!revenueShareAccount && (
                  <p>
                    1. Create your RevenueShare account using the button above
                  </p>
                )}
                <p>
                  {revenueShareAccount ? "1" : "2"}. Share your builder
                  authority address (wallet address) with users
                </p>
                <p>
                  {revenueShareAccount ? "2" : "3"}. Users will add you to their
                  approved builders list with a max fee cap
                </p>
                <p>
                  {revenueShareAccount ? "3" : "4"}. When users place Swift
                  orders, you&apos;ll earn fees based on their settings
                </p>
                <p>
                  {revenueShareAccount ? "4" : "5"}. Fees accumulate in your
                  RevenueShare account and can be claimed later
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
