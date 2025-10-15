"use client";

import React, { useMemo } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  Button,
} from "../../ui";
import { useUserAccountDataStore } from "@/stores/UserAccountDataStore";
import { useWallet } from "@solana/wallet-adapter-react";
import { PositionTableRow } from "./PositionTableRow";
import { useDriftStore } from "@/stores/DriftStore";

export function PositionsTable() {
  const drift = useDriftStore((s) => s.drift);
  const currentAccountData = useUserAccountDataStore((s) =>
    s.getCurrentAccount(),
  );
  const { publicKey } = useWallet();

  const positions = useMemo(() => {
    if (!currentAccountData || !publicKey) return [];

    if (!currentAccountData?.openPerpPositions) return [];

    return currentAccountData.openPerpPositions;
  }, [currentAccountData, publicKey]);

  const handleSettleAllPositions = async () => {
    if (!drift || !publicKey || !currentAccountData) return;

    const subAccountId = currentAccountData.subAccountId;

    await drift.settleAccountPnl({
      subAccountId,
    });
  };

  if (positions.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Positions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-gray-400">
            No open positions found
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Positions</span>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleSettleAllPositions}
            >
              Settle All
            </Button>
            <span className="text-sm font-normal text-gray-400">
              {positions.length} position{positions.length !== 1 ? "s" : ""}
            </span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Market</TableHead>
              <TableHead>Size</TableHead>
              <TableHead>Entry Price</TableHead>
              <TableHead>Mark Price</TableHead>
              <TableHead>P&L</TableHead>
              <TableHead>Liq. Price</TableHead>
              <TableHead>Pnl Breakdown</TableHead>
              <TableHead>Close</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {positions.map((position) => (
              <PositionTableRow
                key={position.marketIndex}
                position={position}
              />
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
