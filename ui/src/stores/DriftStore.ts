import { produce } from "immer";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { AuthorityDrift } from "@drift-labs/common";
import {
  SpotMarketConfig,
  PerpMarketConfig,
  BigNum,
  DriftEnv,
} from "@drift-labs/sdk";

export type DriftEnvironment = Extract<DriftEnv, "devnet" | "mainnet-beta">;

export interface DriftStore {
  set: (x: (s: DriftStore) => void) => void;
  get: () => DriftStore;
  drift: AuthorityDrift | undefined;
  isSwiftClientHealthy: boolean;
  walletSpotBalances: {
    marketConfig: SpotMarketConfig;
    balance: BigNum;
  }[];
  getSpotMarketConfigs: (poolId?: number) => SpotMarketConfig[];
  getPerpMarketConfigs: () => PerpMarketConfig[];
  environment: DriftEnvironment;
  setEnvironment: (env: DriftEnvironment) => void;
}

const DEFAULT_SPOT_MARKET_CONFIGS: SpotMarketConfig[] = [];
const DEFAULT_PERP_MARKET_CONFIGS: PerpMarketConfig[] = [];

const createPersistStorage = () =>
  typeof window === "undefined"
    ? {
        getItem: (_key: string) => null,
        setItem: (_key: string, _value: string) => undefined,
        removeItem: (_key: string) => undefined,
      }
    : window.localStorage;

export const useDriftStore = create<DriftStore>()(
  persist(
    (set, get) => ({
      set: (fn) => set(produce(fn)),
      get: () => get(),
      drift: undefined,
      isSwiftClientHealthy: false,
      walletSpotBalances: [],
      environment: "devnet",
      setEnvironment: (env) =>
        set(
          produce((state: DriftStore) => {
            state.environment = env;
          }),
        ),
      getSpotMarketConfigs: () => {
        if (!get().drift) return DEFAULT_SPOT_MARKET_CONFIGS;

        return get().drift!.spotMarketConfigs;
      },
      getPerpMarketConfigs: () => {
        if (!get().drift) return DEFAULT_PERP_MARKET_CONFIGS;

        return get().drift!.perpMarketConfigs;
      },
    }),
    {
      name: "drift-environment",
      storage: createJSONStorage(createPersistStorage),
      partialize: (state) => ({ environment: state.environment }),
    },
  ),
);
