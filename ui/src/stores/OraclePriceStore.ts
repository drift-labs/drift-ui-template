import { OraclePriceData } from "@drift-labs/sdk";
import { MarketId, OraclePriceLookup } from "@drift-labs/common";
import { produce } from "immer";
import { create } from "zustand";

export interface OraclePriceStore {
  set: (x: (s: OraclePriceStore) => void) => void;
  get: () => OraclePriceStore;
  lookup: OraclePriceLookup;
  getOraclePrice: (marketId: MarketId) => OraclePriceData;
}

export const useOraclePriceStore = create<OraclePriceStore>((set, get) => ({
  set: (fn) => set(produce(fn)),
  get: () => get(),
  lookup: {},
  getOraclePrice: (marketId: MarketId) => {
    const { lookup } = get();

    return lookup[marketId.key];
  },
}));
