"use client";

import React from "react";
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
import { OpenOrderRow } from "./OpenOrderRow";
import { UISerializableOrder } from "@drift/common";
import { useDriftStore } from "@/stores/DriftStore";

const DEFAULT_OPEN_ORDERS: UISerializableOrder[] = [];

export function OpenOrdersTable() {
  const currentAccountData = useUserAccountDataStore((s) =>
    s.getCurrentAccount(),
  );
  const drift = useDriftStore((s) => s.drift);

  const openOrders = currentAccountData?.openOrders ?? DEFAULT_OPEN_ORDERS;

  const handleCancelAllOrders = async () => {
    if (!drift || !currentAccountData) return;

    await drift.cancelOrders({
      subAccountId: currentAccountData.subAccountId,
      orderIds: openOrders.map((order) => order.orderId),
    });
  };

  if (openOrders.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Open Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-gray-400">
            No open orders found
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Open Orders</span>
          <div className="flex items-center gap-3">
            <span className="text-sm font-normal text-gray-400">
              {openOrders.length} order{openOrders.length !== 1 ? "s" : ""}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={handleCancelAllOrders}
              className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
            >
              Cancel All
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Market</TableHead>
              <TableHead>Order Type</TableHead>
              <TableHead>Size</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Trigger</TableHead>
              <TableHead>Flags</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {openOrders.map((order) => (
              <OpenOrderRow
                key={`${order.marketIndex}-${order.orderId}`}
                order={order}
              />
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
