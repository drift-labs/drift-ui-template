import { BigNum, SpotMarketConfig } from "@drift-labs/sdk";
import { TableRow, TableCell } from "../ui/table";
import { cn } from "@/lib/utils";

interface SpotBalanceTableRowProps {
  marketConfig: SpotMarketConfig;
  accountBalance: BigNum;
  notionalAccountBalance: BigNum;
  walletBalance: BigNum;
  notionalWalletBalance: BigNum;
  showBalances: boolean;
}

export function SpotBalanceTableRow({
  marketConfig,
  accountBalance,
  notionalAccountBalance,
  walletBalance,
  notionalWalletBalance,
  showBalances,
}: SpotBalanceTableRowProps) {
  return (
    <TableRow>
      <TableCell>
        <div>
          <p className="font-medium text-white">{marketConfig.symbol}</p>
          <p className="text-xs text-gray-400">
            Market {marketConfig.marketIndex}
          </p>
        </div>
      </TableCell>
      <TableCell>
        <div>
          <p
            className={cn(
              "font-medium",
              accountBalance.eqZero() ? "text-gray-700" : "text-white",
            )}
          >
            {showBalances ? accountBalance.prettyPrint() : "••••••"}
          </p>
          <p
            className={cn(
              "text-xs text-gray-400",
              accountBalance.eqZero() ? "text-gray-700" : "text-white",
            )}
          >
            {showBalances ? notionalAccountBalance.toNotional() : "••••••"}
          </p>
        </div>
      </TableCell>
      <TableCell>
        <div>
          <p
            className={cn(
              "font-medium",
              walletBalance.eqZero() ? "text-gray-700" : "text-white",
            )}
          >
            {showBalances ? walletBalance.toFixed(2) : "••••••"}
          </p>
          <p
            className={cn(
              "text-xs text-gray-400",
              walletBalance.eqZero() ? "text-gray-700" : "text-white",
            )}
          >
            {showBalances ? notionalWalletBalance.toNotional() : "••••••"}
          </p>
        </div>
      </TableCell>
    </TableRow>
  );
}
