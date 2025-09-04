import { useState, useMemo } from "react";
import {
  BigNum,
  PRICE_PRECISION,
  QUOTE_PRECISION_EXP,
  SpotMarketConfig,
} from "@drift-labs/sdk";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
} from "../ui/table";
import {
  Coins,
  Eye,
  EyeOff,
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
} from "lucide-react";
import { useUserAccountDataStore } from "@/stores/UserAccountDataStore";
import { MarketId, UserAccountCache } from "@drift/common";
import { useWallet } from "@solana/wallet-adapter-react";
import { SpotBalanceTableRow } from "./SpotBalanceTableRow";
import { useOraclePriceStore } from "@/stores/OraclePriceStore";
import { useWalletSpotBalances } from "@/hooks/spot/useWalletSpotBalances";

interface BalanceCardProps {
  spotMarketConfigs: SpotMarketConfig[];
}

type SortColumn = "notionalAccountBalance" | "notionalWalletBalance";
type SortDirection = "asc" | "desc" | null;

export function SpotBalanceTable({ spotMarketConfigs }: BalanceCardProps) {
  const [showBalances, setShowBalances] = useState(true);
  const [hideZeroBalances, setHideZeroBalances] = useState(false);
  const [sortColumn, setSortColumn] = useState<SortColumn | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>(null);
  const userAccountLookup = useUserAccountDataStore((s) => s.lookup);
  const activeSubAccountId = useUserAccountDataStore(
    (s) => s.activeSubAccountId,
  );
  const { publicKey } = useWallet();
  const currentAccount = useUserAccountDataStore((s) => s.getCurrentAccount());
  const getOraclePrice = useOraclePriceStore((s) => s.getOraclePrice);
  const { data: walletSpotBalances } = useWalletSpotBalances();

  const handleSort = (column: SortColumn) => {
    if (sortColumn === column) {
      if (sortDirection === "desc") {
        setSortDirection("asc");
      } else if (sortDirection === "asc") {
        setSortColumn(null);
        setSortDirection(null);
      } else {
        setSortDirection("desc");
      }
    } else {
      setSortColumn(column);
      setSortDirection("desc");
    }
  };

  const spotBalancesData = useMemo(() => {
    if (activeSubAccountId === undefined || !publicKey) return [];

    const accountData =
      userAccountLookup[
        UserAccountCache.getUserAccountKey(activeSubAccountId, publicKey)
      ];

    if (!accountData?.spotBalances) return [];

    let data = spotMarketConfigs.map((marketConfig) => {
      const spotBalance = accountData.spotBalances.find(
        (balance) => balance.marketIndex === marketConfig.marketIndex,
      );
      const oraclePrice = getOraclePrice(
        MarketId.createSpotMarket(marketConfig.marketIndex),
      )?.price;
      const spotMarketConfig = spotMarketConfigs.find(
        (config) => config.marketIndex === marketConfig.marketIndex,
      );

      // account base + notional balance
      const accountBalance =
        spotBalance?.baseBalance ??
        BigNum.zero(spotMarketConfig?.precisionExp ?? 0);
      const notionalAccountBalance =
        oraclePrice && spotBalance?.baseBalance && spotMarketConfig
          ? spotBalance.baseBalance.mul(oraclePrice).div(PRICE_PRECISION)
          : BigNum.zero(QUOTE_PRECISION_EXP);

      // wallet base + notional balance
      const walletBalance =
        walletSpotBalances?.find((balance) =>
          balance.marketConfig.mint.equals(marketConfig.mint),
        )?.balance ?? BigNum.zero(spotMarketConfig?.precisionExp ?? 0);
      const notionalWalletBalance =
        oraclePrice && walletBalance && spotMarketConfig
          ? walletBalance.mul(oraclePrice).div(PRICE_PRECISION)
          : BigNum.zero(QUOTE_PRECISION_EXP);

      return {
        marketConfig,
        accountBalance,
        notionalAccountBalance,
        walletBalance,
        notionalWalletBalance,
      };
    });

    // Apply sorting
    if (sortColumn && sortDirection) {
      data = data.sort((a, b) => {
        const valueA = a[sortColumn];
        const valueB = b[sortColumn];

        if (sortDirection === "asc") {
          return valueA.toNum() - valueB.toNum();
        } else {
          return valueB.toNum() - valueA.toNum();
        }
      });
    }

    // Apply zero balance filter
    if (hideZeroBalances) {
      data = data.filter(
        ({ accountBalance, walletBalance }) =>
          !accountBalance.eqZero() || !walletBalance.eqZero(),
      );
    }

    return data;
  }, [
    userAccountLookup,
    activeSubAccountId,
    publicKey,
    spotMarketConfigs,
    sortColumn,
    sortDirection,
    getOraclePrice,
    hideZeroBalances,
    walletSpotBalances,
  ]);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Coins className="h-5 w-5 text-blue-400" />
            Account Balances ({currentAccount?.name} / Pool{" "}
            {currentAccount?.poolId})
          </CardTitle>
          <div className="flex items-center gap-2">
            <label className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors cursor-pointer">
              <input
                type="checkbox"
                checked={hideZeroBalances}
                onChange={(e) => setHideZeroBalances(e.target.checked)}
                className="rounded border-gray-600 bg-gray-800 text-blue-500 focus:ring-blue-500 focus:ring-offset-gray-900"
              />
              Hide zero balances
            </label>
            <button
              onClick={() => setShowBalances(!showBalances)}
              className="p-1 rounded hover:bg-gray-800 transition-colors"
            >
              {showBalances ? (
                <Eye className="h-4 w-4 text-gray-400" />
              ) : (
                <EyeOff className="h-4 w-4 text-gray-400" />
              )}
            </button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {spotBalancesData.length > 0 ? (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Spot Market</TableHead>
                <TableHead>
                  <button
                    onClick={() => handleSort("notionalAccountBalance")}
                    className="flex items-center gap-1 hover:text-white transition-colors"
                  >
                    Account Balance
                    {sortColumn === "notionalAccountBalance" ? (
                      sortDirection === "asc" ? (
                        <ArrowUp className="h-4 w-4" />
                      ) : (
                        <ArrowDown className="h-4 w-4" />
                      )
                    ) : (
                      <ArrowUpDown className="h-4 w-4 opacity-50" />
                    )}
                  </button>
                </TableHead>
                <TableHead>
                  <button
                    onClick={() => handleSort("notionalWalletBalance")}
                    className="flex items-center gap-1 hover:text-white transition-colors"
                  >
                    Wallet Balance
                    {sortColumn === "notionalWalletBalance" ? (
                      sortDirection === "asc" ? (
                        <ArrowUp className="h-4 w-4" />
                      ) : (
                        <ArrowDown className="h-4 w-4" />
                      )
                    ) : (
                      <ArrowUpDown className="h-4 w-4 opacity-50" />
                    )}
                  </button>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {spotBalancesData.map(
                ({
                  marketConfig,
                  accountBalance,
                  notionalAccountBalance,
                  walletBalance,
                  notionalWalletBalance,
                }) => (
                  <SpotBalanceTableRow
                    key={marketConfig.marketIndex}
                    marketConfig={marketConfig}
                    accountBalance={accountBalance}
                    notionalAccountBalance={notionalAccountBalance}
                    walletBalance={walletBalance}
                    notionalWalletBalance={notionalWalletBalance}
                    showBalances={showBalances}
                  />
                ),
              )}
            </TableBody>
          </Table>
        ) : (
          <div className="text-center py-4 text-gray-400">
            <p>No market data available</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
