import { produce } from "immer";
import { create } from "zustand";
import { AuthorityDrift } from "@drift-labs/common";
import { SpotMarketConfig, PerpMarketConfig, BigNum } from "@drift-labs/sdk";

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
}

const DEFAULT_SPOT_MARKET_CONFIGS: SpotMarketConfig[] = [];
const DEFAULT_PERP_MARKET_CONFIGS: PerpMarketConfig[] = [];

export const useDriftStore = create<DriftStore>((set, get) => ({
  set: (fn) => set(produce(fn)),
  get: () => get(),
  drift: undefined,
  isSwiftClientHealthy: false,
  walletSpotBalances: [],
  getSpotMarketConfigs: () => {
    if (!get().drift) return DEFAULT_SPOT_MARKET_CONFIGS;

    return get().drift!.spotMarketConfigs;
  },
  getPerpMarketConfigs: () => {
    if (!get().drift) return DEFAULT_PERP_MARKET_CONFIGS;

    return get().drift!.perpMarketConfigs;
  },
}));
