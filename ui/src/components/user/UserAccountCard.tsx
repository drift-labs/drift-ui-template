"use client";

import React from "react";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Trash2, CheckCircle2 } from "lucide-react";
import { EnhancedAccountData } from "@drift/common";

interface UserAccountCardProps {
  account: EnhancedAccountData;
  isActive: boolean;
  onDelete: (subAccountId: number) => void;
  onSetActive: (subAccountId: number) => void;
}

export const UserAccountCard = ({
  account,
  isActive,
  onDelete,
  onSetActive,
}: UserAccountCardProps) => {
  const subAccountId = account.subAccountId;

  // Check if account can be deleted (no open positions or balances)
  const canDeleteAccount = (account: EnhancedAccountData) => {
    const hasOpenPerpPositions =
      account.openPerpPositions && account.openPerpPositions.length > 0;
    const hasSpotBalances =
      account.spotBalances &&
      account.spotBalances.some(
        (balance) => balance.baseBalance && !balance.baseBalance.eqZero(),
      );

    return !hasOpenPerpPositions && !hasSpotBalances;
  };

  // Get reason why account cannot be deleted
  const getDeletionBlockedReason = (account: EnhancedAccountData) => {
    const hasOpenPerpPositions =
      account.openPerpPositions && account.openPerpPositions.length > 0;
    const hasSpotBalances =
      account.spotBalances &&
      account.spotBalances.some(
        (balance) => balance.baseBalance && !balance.baseBalance.eqZero(),
      );

    const reasons = [];
    if (hasOpenPerpPositions) {
      reasons.push(
        `${account.openPerpPositions.length} open perpetual position(s)`,
      );
    }
    if (hasSpotBalances) {
      const nonZeroBalances = account.spotBalances.filter(
        (balance) => balance.baseBalance && !balance.baseBalance.eqZero(),
      );
      reasons.push(`${nonZeroBalances.length} non-zero spot balance(s)`);
    }

    return `Cannot delete account with: ${reasons.join(" and ")}`;
  };

  return (
    <div
      className={`border rounded-lg p-4 ${
        isActive
          ? "border-blue-600/50 bg-blue-600/10"
          : "border-gray-700 bg-gray-800/50"
      }`}
    >
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <p className="text-white font-medium">
              {account.name} (#{subAccountId})
            </p>
            {isActive && (
              <span className="px-2 py-1 text-xs bg-blue-600 text-white rounded-full">
                Active
              </span>
            )}
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Total Collateral: {account.marginInfo.netUsdValue.toNotional()}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {!isActive && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => onSetActive(subAccountId)}
              className="flex items-center gap-1 border-blue-600/30 text-blue-400 hover:bg-blue-600/20"
            >
              <CheckCircle2 className="h-4 w-4" />
              Set Active
            </Button>
          )}

          {!canDeleteAccount(account) ? (
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="cursor-not-allowed">
                  <Button
                    variant="destructive"
                    size="sm"
                    disabled={true}
                    className="flex items-center gap-1 pointer-events-none"
                  >
                    <Trash2 className="h-4 w-4" />
                    Delete
                  </Button>
                </span>
              </TooltipTrigger>
              <TooltipContent>
                <p>{getDeletionBlockedReason(account)}</p>
              </TooltipContent>
            </Tooltip>
          ) : (
            <Button
              variant="destructive"
              size="sm"
              onClick={() => onDelete(subAccountId)}
              className="flex items-center gap-1"
            >
              <Trash2 className="h-4 w-4" />
              Delete
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
