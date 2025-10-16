import { Shield, CheckCircle2 } from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { useDriftBuilderCode } from "@/hooks/user/useDriftBuilderCode";
import { useUserAccountDataStore } from "@/stores/UserAccountDataStore";

export const SetupBuilderCodesCard = () => {
  const escrowAccount = useUserAccountDataStore((s) => s.revenueShareEscrow);
  const { isCreatingEscrow, handleCreateEscrowForExistingWallet } =
    useDriftBuilderCode();

  if (escrowAccount) {
    return (
      <Card className="border-green-600/20 bg-green-600/5">
        <CardHeader>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="h-5 w-5 text-green-400" />
            <div>
              <CardTitle className="text-green-400">
                RevenueShare Escrow Active
              </CardTitle>
              <CardDescription>
                Your account is set up and ready for builder revenue sharing
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-gray-800/50 rounded-lg p-4 space-y-3">
              <div>
                <p className="text-sm text-gray-400 mb-1">Authority</p>
                <p className="font-mono text-sm text-white break-all">
                  {escrowAccount.authority.toBase58()}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Approved Builders</p>
                <p className="text-lg font-semibold text-white">
                  {escrowAccount.approvedBuilders.length} Builder
                  {escrowAccount.approvedBuilders.length !== 1 ? "s" : ""}
                </p>
              </div>
              {escrowAccount.approvedBuilders.length > 0 && (
                <div className="space-y-2 mt-3">
                  <p className="text-sm text-gray-400">Builder Details:</p>
                  {escrowAccount.approvedBuilders.map((builder, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-900/50 rounded p-3 space-y-1"
                    >
                      <p className="font-mono text-xs text-gray-300 break-all">
                        {builder.authority.toBase58()}
                      </p>
                      <p className="text-xs text-gray-400">
                        Max Fee: {(builder.maxFeeTenthBps / 10).toFixed(2)} bps
                      </p>
                    </div>
                  ))}
                </div>
              )}
              <div>
                <p className="text-sm text-gray-400 mb-1">Active Orders</p>
                <p className="text-lg font-semibold text-white">
                  {escrowAccount.orders.filter((o) => o.orderId !== 0).length}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-blue-600/20 bg-blue-600/5">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Shield className="h-5 w-5 text-blue-400" />
          <div>
            <CardTitle className="text-blue-400">
              Revenue Share Escrow
            </CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="text-sm text-gray-300">
            <p className="mb-2">
              Your wallet doesn&apos;t have a RevenueShareEscrow account yet.
            </p>
          </div>
          <Button
            onClick={handleCreateEscrowForExistingWallet}
            disabled={isCreatingEscrow}
            className="w-full"
          >
            {isCreatingEscrow
              ? "Creating Escrow..."
              : "Create RevenueShareEscrow"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
