import {
  EnhancedAccountData,
  UserAccountCache,
  UserAccountLookup,
} from "@drift/common";
import { produce } from "immer";
import { create } from "zustand";
import { useDriftStore } from "./DriftStore";

export interface UserAccountDataStore {
  set: (x: (s: UserAccountDataStore) => void) => void;
  get: () => UserAccountDataStore;
  lookup: UserAccountLookup;
  activeSubAccountId: number | undefined;
  setActiveSubAccountId: (subAccountId: number | undefined) => void;
  getCurrentAccount: () => EnhancedAccountData | undefined;
}

export const useUserAccountDataStore = create<UserAccountDataStore>(
  (set, get) => ({
    set: (fn) => set(produce(fn)),
    get: () => get(),
    lookup: {},
    activeSubAccountId: undefined,
    setActiveSubAccountId: (subAccountId: number | undefined) => {
      get().set((s) => {
        s.activeSubAccountId = subAccountId;
      });
    },
    getCurrentAccount: () => {
      const { activeSubAccountId, lookup } = get();
      const drift = useDriftStore.getState().drift;

      if (drift === undefined) return undefined;

      if (activeSubAccountId === undefined) return undefined;

      return lookup[
        UserAccountCache.getUserAccountKey(activeSubAccountId, drift.authority)
      ];
    },
  }),
);
