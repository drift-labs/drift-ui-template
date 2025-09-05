"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/cardd";
import { TooltipProvider } from "../../components/ui/tooltip";
import { User, Coins, AlertCircle, CheckCircle2 } from "lucide-react";
import { UserAccountCard } from "../../components/user/UserAccountCard";
import { CreateUserForm } from "../../components/user/CreateUserForm";
import { DeleteConfirmationDialog } from "../../components/user/DeleteConfirmationDialog";
import { useUserManagement } from "../../hooks/useUserManagement";

const WalletNotConnectedState = () => (
  <div className="container mx-auto px-4 py-8">
    <div className="max-w-6xl mx-auto flex justify-center">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <User className="h-6 w-6 text-blue-400" />
            <CardTitle>User Management</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <AlertCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-white mb-2">
              Wallet Not Connected
            </h3>
            <p className="text-gray-400">
              Please connect your Solana wallet to create an account and deposit
              funds.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ConnectedWalletInfo = ({ publicKey }: { publicKey: any }) => (
  <Card>
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <Coins className="h-5 w-5 text-green-400" />
        Connected Authority
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="bg-gray-800/50 rounded-lg p-4">
        <p className="text-sm text-gray-400 mb-1">Wallet Address</p>
        <p className="font-mono text-white">{publicKey?.toBase58()}</p>
      </div>
    </CardContent>
  </Card>
);

const ExistingUserAccounts = ({
  userAccounts,
  activeSubAccountId,
  onDeleteAccount,
  onSetActiveAccount,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  userAccounts: any[];
  activeSubAccountId: number | undefined;
  onDeleteAccount: (subAccountId: number) => void;
  onSetActiveAccount: (subAccountId: number) => void;
}) => {
  if (userAccounts.length === 0) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <User className="h-5 w-5 text-yellow-400" />
          Existing User Accounts
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {userAccounts.map((account) => (
            <UserAccountCard
              key={account.subAccountId}
              account={account}
              isActive={activeSubAccountId === account.subAccountId}
              onDelete={onDeleteAccount}
              onSetActive={onSetActiveAccount}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const HelpSection = ({
  selectedSpotMarketSymbol,
}: {
  selectedSpotMarketSymbol: string;
}) => (
  <Card>
    <CardHeader>
      <CardTitle>Need Help?</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-3 text-sm text-gray-400">
        <p>
          • Make sure you have sufficient {selectedSpotMarketSymbol} balance in
          your wallet
        </p>
        <p>• The transaction will require SOL for gas fees</p>
        <p>• Your deposited funds will be used as collateral for trading</p>
        <p>• You can deposit more funds or withdraw from the Spot page</p>
        <p>
          • ⚠️ Deleting a user account is permanent and will close all positions
        </p>
      </div>
    </CardContent>
  </Card>
);

export default function UserPage() {
  const {
    connected,
    publicKey,
    spotMarketConfigs,
    userAccounts,
    activeSubAccountId,
    isDeleting,
    showDeleteDialog,
    selectedSubAccountForDeletion,
    status,
    handleDeleteUser,
    openDeleteDialog,
    handleCreateAndDeposit,
    handleSetActiveSubAccount,
    setShowDeleteDialog,
  } = useUserManagement();

  // Show wallet not connected state
  if (!connected) {
    return <WalletNotConnectedState />;
  }

  return (
    <TooltipProvider>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <User className="h-8 w-8 text-blue-400" />
              <h1 className="text-3xl font-bold text-white">User Management</h1>
            </div>
            <p className="text-gray-400">
              Create a new Drift account and make your first deposit to start
              trading.
            </p>
          </div>

          <div className="grid gap-6 max-w-2xl mx-auto">
            {/* Status Messages */}
            {status.type && (
              <div
                className={`rounded-lg p-4 flex items-start gap-3 ${
                  status.type === "success"
                    ? "bg-green-600/10 border border-green-600/20 text-green-400"
                    : "bg-red-600/10 border border-red-600/20 text-red-400"
                }`}
              >
                {status.type === "success" ? (
                  <CheckCircle2 className="h-5 w-5 mt-0.5" />
                ) : (
                  <AlertCircle className="h-5 w-5 mt-0.5" />
                )}
                <p className="text-sm">{status.message}</p>
              </div>
            )}

            {/* Connected Wallet Info */}
            <ConnectedWalletInfo publicKey={publicKey} />

            {/* Create and Deposit Form */}
            <CreateUserForm
              spotMarketConfigs={spotMarketConfigs}
              onSubmit={handleCreateAndDeposit}
            />

            {/* Existing User Accounts */}
            <ExistingUserAccounts
              userAccounts={userAccounts}
              activeSubAccountId={activeSubAccountId}
              onDeleteAccount={openDeleteDialog}
              onSetActiveAccount={handleSetActiveSubAccount}
            />

            {/* Help Section */}
            <HelpSection
              selectedSpotMarketSymbol={spotMarketConfigs[0]?.symbol || ""}
            />
          </div>
        </div>

        {/* Delete Confirmation Dialog */}
        <DeleteConfirmationDialog
          open={showDeleteDialog}
          onOpenChange={setShowDeleteDialog}
          subAccountId={selectedSubAccountForDeletion}
          isDeleting={isDeleting}
          onConfirm={() =>
            selectedSubAccountForDeletion !== null &&
            handleDeleteUser(selectedSubAccountForDeletion)
          }
        />
      </div>
    </TooltipProvider>
  );
}
