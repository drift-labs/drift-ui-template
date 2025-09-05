"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/cardd";
import { Button } from "../ui/buttonn";
import { FormInput } from "../ui/form-input";
import { FormSelect } from "../ui/form-select";
import { Plus } from "lucide-react";
import { toast } from "sonner";
import { handleErrorToast } from "@/utils/toastUtils";
import { SpotMarketConfig } from "@drift-labs/sdk";

interface CreateUserFormProps {
  spotMarketConfigs: SpotMarketConfig[];
  onSubmit: (params: {
    selectedMarketIndex: number;
    amount: string;
  }) => Promise<void>;
}

export const CreateUserForm = ({
  spotMarketConfigs,
  onSubmit,
}: CreateUserFormProps) => {
  const [selectedMarketIndex, setSelectedMarketIndex] = useState(0);
  const [amount, setAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const selectedSpotMarketConfig = spotMarketConfigs.find(
    (marketConfig) => marketConfig.marketIndex === selectedMarketIndex,
  );
  const selectedSpotMarketSymbol = selectedSpotMarketConfig?.symbol ?? "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      await onSubmit({ selectedMarketIndex, amount });

      toast.success(
        `Successfully created account and deposited ${amount} ${selectedSpotMarketSymbol}`,
      );
      setAmount("");
    } catch (error) {
      handleErrorToast(
        error,
        "Failed to create account and deposit. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Plus className="h-5 w-5 text-blue-400" />
          Create Account & Deposit
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
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

            <FormInput
              type="number"
              label="Amount"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              step="any"
              min="0"
              required
              helperText={`Deposit ${selectedSpotMarketSymbol} to your new Drift account`}
            />
          </div>

          {selectedSpotMarketSymbol && (
            <div className="bg-blue-600/10 border border-blue-600/20 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Plus className="h-5 w-5 text-blue-400 mt-0.5" />
                <div>
                  <h4 className="font-medium text-blue-400 mb-1">
                    What happens next?
                  </h4>
                  <div className="text-sm text-gray-300 space-y-1">
                    <p>• A new Drift account will be created for you</p>
                    <p>
                      • {amount || "0"} {selectedSpotMarketSymbol} will be
                      deposited as collateral
                    </p>
                    <p>• You&apos;ll be able to trade spots and perpetuals</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <Button
            type="submit"
            className="w-full"
            size="lg"
            disabled={!amount || isLoading}
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                Creating Account...
              </div>
            ) : (
              `Create Account & Deposit ${
                amount || "0"
              } ${selectedSpotMarketSymbol}`
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
