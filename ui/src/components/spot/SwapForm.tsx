import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { SpotMarketConfig, BigNum, QuoteResponse, BN } from "@drift-labs/sdk";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { FormInput } from "../ui/form-input";
import { FormSelect } from "../ui/form-select";
import { AlertCircle, ArrowUpDown, RefreshCw } from "lucide-react";
import { toast } from "sonner";
import { handleErrorToast } from "@/utils/toastUtils";
import { useDriftStore } from "@/stores/DriftStore";
import { useUserAccountDataStore } from "@/stores/UserAccountDataStore";
import { EnhancedAccountData } from "@drift-labs/common";

interface SwapFormProps {
  spotMarketConfigs: SpotMarketConfig[];
  connected: boolean;
  userAccounts: EnhancedAccountData[];
}

const SLIPPAGE_PRESETS = [
  { label: "0.1%", value: 10 },
  { label: "0.5%", value: 50 },
  { label: "1%", value: 100 },
  { label: "Custom", value: -1 },
];

export function SwapForm({
  spotMarketConfigs,
  connected,
  userAccounts,
}: SwapFormProps) {
  const drift = useDriftStore((s) => s.drift);
  const activeSubAccountId = useUserAccountDataStore(
    (s) => s.activeSubAccountId,
  );

  const [selectedSubAccountId, setSelectedSubAccountId] = useState<
    number | undefined
  >(activeSubAccountId);
  const [fromMarketIndex, setFromMarketIndex] = useState(0);
  const [toMarketIndex, setToMarketIndex] = useState(1);
  const [amount, setAmount] = useState("");
  const [selectedSlippage, setSelectedSlippage] = useState(50); // 0.5%
  const [customSlippage, setCustomSlippage] = useState("");
  const [quote, setQuote] = useState<QuoteResponse | null>(null);
  const [quoteLoading, setQuoteLoading] = useState(false);
  const [quoteError, setQuoteError] = useState<string | null>(null);
  const [isSwapping, setIsSwapping] = useState(false);

  // Debounce timeout ref
  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const fromMarketConfig = spotMarketConfigs.find(
    (config) => config.marketIndex === fromMarketIndex,
  );
  const toMarketConfig = spotMarketConfigs.find(
    (config) => config.marketIndex === toMarketIndex,
  );

  const effectiveSlippage =
    selectedSlippage === -1
      ? parseFloat(customSlippage) * 100 || 50
      : selectedSlippage;

  // Filter out selected from token for to token options
  const toTokenOptions = useMemo(
    () =>
      spotMarketConfigs
        .filter((config) => config.marketIndex !== fromMarketIndex)
        .map((config) => ({
          value: config.marketIndex.toString(),
          label: config.symbol,
        })),
    [spotMarketConfigs, fromMarketIndex],
  );

  // Update selected subaccount when activeSubAccountId changes
  useEffect(() => {
    if (userAccounts.length > 0 && selectedSubAccountId === undefined) {
      setSelectedSubAccountId(userAccounts[0].subAccountId);
    }
  }, [activeSubAccountId, userAccounts, selectedSubAccountId]);

  // Debounced quote fetching
  const fetchQuote = useCallback(async () => {
    if (
      !drift ||
      !amount ||
      parseFloat(amount) <= 0 ||
      !spotMarketConfigs.length
    ) {
      setQuote(null);
      return;
    }

    const fromConfig = spotMarketConfigs.find(
      (config) => config.marketIndex === fromMarketIndex,
    );
    const toConfig = spotMarketConfigs.find(
      (config) => config.marketIndex === toMarketIndex,
    );

    if (!fromConfig || !toConfig) {
      setQuote(null);
      return;
    }

    setQuoteLoading(true);
    setQuoteError(null);

    try {
      const amountBigNum = BigNum.fromPrint(amount, fromConfig.precisionExp);

      const quoteResponse = await drift.getSwapQuote({
        fromMarketIndex,
        toMarketIndex,
        amount: amountBigNum,
        subAccountId: selectedSubAccountId || 0,
        slippageBps: effectiveSlippage,
      } as Parameters<typeof drift.getSwapQuote>[0]);

      setQuote(quoteResponse);
    } catch (error) {
      console.error("Failed to fetch quote:", error);
      setQuoteError("Failed to get swap quote. Please try again.");
    } finally {
      setQuoteLoading(false);
    }
  }, [
    drift,
    amount,
    fromMarketIndex,
    toMarketIndex,
    selectedSubAccountId,
    effectiveSlippage,
    spotMarketConfigs,
  ]);

  // Debounced quote update
  useEffect(() => {
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    const timeout = setTimeout(() => {
      fetchQuote();
    }, 300);

    debounceTimeoutRef.current = timeout;

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [fetchQuote]);

  const handleSwapTokens = () => {
    const tempFrom = fromMarketIndex;
    setFromMarketIndex(toMarketIndex);
    setToMarketIndex(tempFrom);
    setAmount("");
    setQuote(null);
  };

  const handleMaxAmount = () => {
    if (!selectedSubAccountId || !fromMarketConfig) return;

    const account = userAccounts.find(
      (account) => account.subAccountId === selectedSubAccountId,
    );
    if (account) {
      const spotBalance = account.spotBalances.find(
        (balance) => balance.marketIndex === fromMarketIndex,
      );
      if (spotBalance && spotBalance.baseBalance.toNum() > 0) {
        setAmount(spotBalance.baseBalance.toNum().toString());
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !connected ||
      !drift ||
      !quote ||
      !fromMarketConfig ||
      !toMarketConfig ||
      selectedSubAccountId === undefined
    ) {
      return;
    }

    setIsSwapping(true);

    try {
      const amountBigNum = BigNum.fromPrint(
        amount,
        fromMarketConfig.precisionExp,
      );

      await drift.swap({
        fromMarketIndex,
        toMarketIndex,
        amount: amountBigNum,
        subAccountId: selectedSubAccountId,
        jupiterQuote: quote,
      });

      toast.success(
        `Successfully swapped ${amount} ${fromMarketConfig.symbol} to ${toMarketConfig.symbol}`,
      );

      // Reset form
      setAmount("");
      setQuote(null);
    } catch (error) {
      handleErrorToast(error, "Swap failed. Please try again.");
    } finally {
      setIsSwapping(false);
    }
  };

  const formatQuoteAmount = (amount: string, decimals: number | BN) => {
    const decimalCount =
      typeof decimals === "number" ? decimals : decimals.toNumber();
    const num = parseFloat(amount) / Math.pow(10, decimalCount);
    return num.toFixed(6);
  };

  const getPriceImpactColor = (impact: number) => {
    if (impact < 1) return "text-green-400";
    if (impact < 3) return "text-yellow-400";
    return "text-red-400";
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ArrowUpDown className="h-5 w-5 text-purple-400" />
          Swap Tokens
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            {/* Subaccount Selection */}
            {userAccounts.length > 0 ? (
              <FormSelect
                label="Subaccount"
                value={selectedSubAccountId?.toString() || ""}
                onValueChange={(value) =>
                  setSelectedSubAccountId(Number(value))
                }
                required
                options={userAccounts.map((account) => ({
                  value: account.subAccountId.toString(),
                  label: `${account.name} (#${account.subAccountId})${
                    activeSubAccountId === account.subAccountId
                      ? " (Active)"
                      : ""
                  }`,
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

            {/* From Token */}
            <div className="flex items-center gap-4 justify-between">
              <FormSelect
                label="From"
                className="w-full"
                value={fromMarketIndex.toString()}
                onValueChange={(value) => {
                  const newFromIndex = Number(value);
                  setFromMarketIndex(newFromIndex);
                  if (newFromIndex === toMarketIndex) {
                    // Find next available token
                    const nextToken = spotMarketConfigs.find(
                      (config) => config.marketIndex !== newFromIndex,
                    );
                    if (nextToken) {
                      setToMarketIndex(nextToken.marketIndex);
                    }
                  }
                }}
                required
                options={spotMarketConfigs.map((config) => ({
                  value: config.marketIndex.toString(),
                  label: config.symbol,
                }))}
              />
              {/* Swap Direction Button */}
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={handleSwapTokens}
                className="h-8 w-8 p-0 rounded-full bg-gray-800 hover:bg-gray-700 relative top-2.5"
              >
                <ArrowUpDown className="h-4 w-4 rotate-90" />
              </Button>

              <FormSelect
                label="To"
                className="w-full"
                value={toMarketIndex.toString()}
                onValueChange={(value) => setToMarketIndex(Number(value))}
                required
                options={toTokenOptions}
              />
            </div>

            {/* Amount Input */}
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
            </div>

            {/* Slippage Tolerance */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200">
                Slippage Tolerance
              </label>
              <div className="flex gap-2">
                {SLIPPAGE_PRESETS.map((preset) => (
                  <Button
                    key={preset.value}
                    type="button"
                    variant={
                      selectedSlippage === preset.value ? "default" : "ghost"
                    }
                    size="sm"
                    onClick={() => setSelectedSlippage(preset.value)}
                    className="text-xs"
                  >
                    {preset.label}
                  </Button>
                ))}
              </div>
              {selectedSlippage === -1 && (
                <FormInput
                  type="number"
                  placeholder="Enter custom %"
                  value={customSlippage}
                  onChange={(e) => setCustomSlippage(e.target.value)}
                  step="0.1"
                  min="0"
                  max="50"
                  className="mt-2"
                />
              )}
            </div>
          </div>

          {/* Quote Information */}
          {(quoteLoading || quote || quoteError) && (
            <div className="rounded-lg p-4 border bg-gray-800/50 border-gray-700">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-white">Swap Preview</h4>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={fetchQuote}
                  disabled={quoteLoading}
                  className="h-8 w-8 p-0"
                >
                  <RefreshCw
                    className={`h-4 w-4 ${quoteLoading ? "animate-spin" : ""}`}
                  />
                </Button>
              </div>

              {quoteLoading && (
                <div className="space-y-2">
                  <div className="h-4 bg-gray-700 rounded animate-pulse"></div>
                  <div className="h-4 bg-gray-700 rounded animate-pulse w-3/4"></div>
                </div>
              )}

              {quoteError && (
                <div className="flex items-center gap-2 text-red-400">
                  <AlertCircle className="h-4 w-4" />
                  <span className="text-sm">{quoteError}</span>
                </div>
              )}

              {quote && !quoteLoading && toMarketConfig && (
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">You&apos;ll receive:</span>
                    <span className="text-white font-medium">
                      {formatQuoteAmount(
                        quote.outAmount,
                        toMarketConfig.precisionExp,
                      )}{" "}
                      {toMarketConfig.symbol}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Price impact:</span>
                    <span
                      className={getPriceImpactColor(
                        parseFloat(quote.priceImpactPct),
                      )}
                    >
                      {parseFloat(quote.priceImpactPct).toFixed(2)}%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Minimum received:</span>
                    <span className="text-gray-300">
                      {formatQuoteAmount(
                        (
                          parseFloat(quote.outAmount) *
                          (1 - effectiveSlippage / 10000)
                        ).toString(),
                        toMarketConfig.precisionExp,
                      )}{" "}
                      {toMarketConfig.symbol}
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700"
            size="lg"
            disabled={
              !amount ||
              !quote ||
              isSwapping ||
              quoteLoading ||
              selectedSubAccountId === undefined ||
              userAccounts.length === 0
            }
          >
            {isSwapping ? (
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                Swapping...
              </div>
            ) : (
              <>
                <ArrowUpDown className="h-4 w-4 mr-2" />
                Swap {amount || "0"} {fromMarketConfig?.symbol} to{" "}
                {toMarketConfig?.symbol}
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
