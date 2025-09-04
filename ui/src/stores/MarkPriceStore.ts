import { MarkPriceLookup } from "@drift/common";
import { produce } from "immer";
import { create } from "zustand";

export interface MarkPriceStore {
  set: (x: (s: MarkPriceStore) => void) => void;
  get: () => MarkPriceStore;
  lookup: MarkPriceLookup;
}

export const useMarkPriceStore = create<MarkPriceStore>((set, get) => ({
  set: (fn) => set(produce(fn)),
  get: () => get(),
  lookup: {},
}));
