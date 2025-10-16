import { useSetupDrift } from "./useSetupDrift";
import { useSyncRevenueShareAccts } from "./useSyncRevenueShareAccts";
import { useSyncSwiftClientHealth } from "./useSyncSwiftClientHealth";

export const useGlobalSyncs = () => {
  useSetupDrift();
  useSyncSwiftClientHealth();
  useSyncRevenueShareAccts();
};
