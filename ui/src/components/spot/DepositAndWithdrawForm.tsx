import { useState, useEffect } from "react";
import { SpotMarketConfig, BigNum } from "@drift-labs/sdk";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { FormInput } from "../ui/form-input";
import { FormSelect } from "../ui/form-select";
import {
  ArrowUp,
  ArrowDown,
  BanknoteArrowUp,
  BanknoteArrowDown,
} from "lucide-react";
import { toast } from "sonner";
import { handleErrorToast } from "@/utils/toastUtils";
import { useDriftStore } from "@/stores/DriftStore";
import { useUserAccountDataStore } from "@/stores/UserAccountDataStore";
import { EnhancedAccountData } from "@drift/common";
import { useWalletSpotBalances } from "@/hooks/spot/useWalletSpotBalances";

type ActionType = "deposit" | "withdraw";

interface TradingFormProps {
  spotMarketConfigs: SpotMarketConfig[];
  connected: boolean;
  userAccounts: EnhancedAccountData[];
}

export function DepositAndWithdrawForm({
  spotMarketConfigs,
  connected,
  userAccounts,
}: TradingFormProps) {
  const drift = useDriftStore((s) => s.drift);
  const activeSubAccountId = useUserAccountDataStore(
    (s) => s.activeSubAccountId,
  );
  const { data: walletSpotBalances } = useWalletSpotBalances();

  const [activeAction, setActiveAction] = useState<ActionType>("deposit");
  const [selectedMarketIndex, setSelectedMarketIndex] = useState(0);
  const [selectedSubAccountId, setSelectedSubAccountId] = useState<
    number | undefined
  >(activeSubAccountId);

  const [amount, setAmount] = useState("");
  const [maxAmount, setMaxAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const selectedSpotMarketConfig = spotMarketConfigs.find(
    (marketConfig) => marketConfig.marketIndex === selectedMarketIndex,
  );
  const selectedSpotMarketSymbol = selectedSpotMarketConfig?.symbol ?? "";

  // Update selected subaccount when activeSubAccountId changes or when userAccounts are loaded
  useEffect(() => {
    if (userAccounts.length > 0 && selectedSubAccountId === undefined) {
      // If no subaccount is selected and we have accounts, select the first one
      setSelectedSubAccountId(userAccounts[0].subAccountId);
    }
  }, [activeSubAccountId, userAccounts, selectedSubAccountId]);

  useEffect(() => {
    if (activeAction === "deposit") {
      // Get from wallet balance
      const selectedSpotMarketConfig = spotMarketConfigs.find(
        (config) => config.marketIndex === selectedMarketIndex,
      );
      if (selectedSpotMarketConfig && walletSpotBalances) {
        const walletBalance = walletSpotBalances.find((balance) =>
          balance.marketConfig.mint.equals(selectedSpotMarketConfig.mint),
        );
        if (walletBalance) {
          setMaxAmount(walletBalance.balance.toNum().toString());
        } else {
          setMaxAmount("0");
        }
      } else {
        setMaxAmount("0");
      }
    } else {
      // get from account
      const account = userAccounts.find(
        (account) => account.subAccountId === selectedSubAccountId,
      );
      if (account) {
        const spotBalance = account.spotBalances.find((spotBalance) => {
          return spotBalance.marketIndex === selectedMarketIndex;
        });
        if (spotBalance) {
          setMaxAmount(spotBalance.baseBalance.toNum().toString());
        } else {
          setMaxAmount("0");
        }
      } else {
        setMaxAmount("0");
      }
    }
  }, [
    activeAction,
    selectedMarketIndex,
    selectedSubAccountId,
    userAccounts,
    walletSpotBalances,
    spotMarketConfigs,
  ]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !connected ||
      !drift ||
      !selectedSpotMarketConfig ||
      selectedSubAccountId === undefined
    )
      return;

    setIsLoading(true);

    try {
      const amountBigNum = BigNum.fromPrint(
        amount,
        selectedSpotMarketConfig.precisionExp,
      );

      if (activeAction === "deposit") {
        await drift.deposit({
          subAccountId: selectedSubAccountId,
          amount: amountBigNum,
          spotMarketIndex: selectedMarketIndex,
          isMaxBorrowRepayment: false,
        });
      } else {
        await drift.withdraw({
          subAccountId: selectedSubAccountId,
          amount: amountBigNum,
          spotMarketIndex: selectedMarketIndex,
          isBorrow: false,
          isMax: false,
        });
      }

      const actionText = activeAction === "deposit" ? "deposited" : "withdrawn";
      toast.success(
        `Successfully ${actionText} ${amount} ${selectedSpotMarketSymbol}`,
      );
      setAmount("");
    } catch (error) {
      handleErrorToast(error, `Failed to ${activeAction}. Please try again.`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleMaxAmount = () => {
    setAmount(maxAmount);
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            {activeAction === "deposit" ? (
              <BanknoteArrowUp className="h-5 w-5 text-green-400" />
            ) : (
              <BanknoteArrowDown className="h-5 w-5 text-red-400" />
            )}
            Deposit & Withdraw
          </CardTitle>
          <div className="flex bg-gray-800 rounded-lg p-1">
            <button
              onClick={() => setActiveAction("deposit")}
              className={`flex items-center gap-2 px-3 py-1 rounded text-sm font-medium transition-colors ${
                activeAction === "deposit"
                  ? "bg-green-600 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <ArrowUp className="h-4 w-4" />
              Deposit
            </button>
            <button
              onClick={() => setActiveAction("withdraw")}
              className={`flex items-center gap-2 px-3 py-1 rounded text-sm font-medium transition-colors ${
                activeAction === "withdraw"
                  ? "bg-red-600 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <ArrowDown className="h-4 w-4" />
              Withdraw
            </button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <FormSelect
                label="Token"
                value={selectedMarketIndex.toString()}
                onValueChange={(value) => setSelectedMarketIndex(Number(value))}
                required
                options={spotMarketConfigs.map((marketConfig) => ({
                  value: marketConfig.marketIndex.toString(),
                  label: `${marketConfig.symbol}`,
                }))}
              />

              {userAccounts.length > 0 ? (
                <FormSelect
                  label="Subaccount"
                  value={selectedSubAccountId?.toString() || ""}
                  onValueChange={(value) => {
                    return setSelectedSubAccountId(Number(value));
                  }}
                  required
                  options={userAccounts.map((account) => ({
                    value: account.subAccountId.toString(),
                    label: `${account.name} (#${account.subAccountId})${
                      activeSubAccountId === account.subAccountId
                        ? " (Active)"
                        : ""
                    } (${account.marginInfo.netUsdValue.toNotional()})`,
                  }))}
                />
              ) : (
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-200">
                    Subaccount <span className="text-red-400 ml-1">*</span>
                  </label>
                  <div className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-400">
                    No subaccounts available - create one in User page
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200">
                Amount
              </label>
              <div className="relative">
                <FormInput
                  type="number"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  step="any"
                  min="0"
                  required
                  className="pr-16"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={handleMaxAmount}
                  className="absolute right-1 top-1 h-8 px-2 text-xs"
                >
                  MAX
                </Button>
              </div>
              <p className="text-xs text-gray-400">
                Available: {maxAmount} {selectedSpotMarketSymbol}
              </p>
            </div>
          </div>

          {selectedSpotMarketConfig && amount && (
            <div
              className={`rounded-lg p-4 border ${
                activeAction === "deposit"
                  ? "bg-green-600/10 border-green-600/20"
                  : "bg-red-600/10 border-red-600/20"
              }`}
            >
              <div className="flex items-start gap-3">
                {activeAction === "deposit" ? (
                  <ArrowUp className="h-5 w-5 text-green-400 mt-0.5" />
                ) : (
                  <ArrowDown className="h-5 w-5 text-red-400 mt-0.5" />
                )}
                <div>
                  <h4
                    className={`font-medium mb-1 ${
                      activeAction === "deposit"
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {activeAction === "deposit"
                      ? "Deposit Details"
                      : "Withdrawal Details"}
                  </h4>
                  <div className="text-sm text-gray-300 space-y-1">
                    <p>
                      • Amount: {amount} {selectedSpotMarketSymbol}
                    </p>
                    <p>
                      • {activeAction === "deposit" ? "Increases" : "Decreases"}{" "}
                      your account balance
                    </p>
                    <p>• Transaction will require SOL for gas fees</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <Button
            type="submit"
            className={`w-full ${
              activeAction === "deposit"
                ? "bg-green-600 hover:bg-green-700"
                : "bg-red-600 hover:bg-red-700"
            }`}
            size="lg"
            disabled={
              !amount ||
              isLoading ||
              selectedSubAccountId === undefined ||
              userAccounts.length === 0
            }
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                Processing...
              </div>
            ) : (
              <>
                {activeAction === "deposit" ? (
                  <ArrowUp className="h-4 w-4 mr-2" />
                ) : (
                  <ArrowDown className="h-4 w-4 mr-2" />
                )}
                {activeAction === "deposit" ? "Deposit" : "Withdraw"}{" "}
                {amount || "0"} {selectedSpotMarketSymbol}
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
