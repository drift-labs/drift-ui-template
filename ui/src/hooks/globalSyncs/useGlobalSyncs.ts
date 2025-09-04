import { useSetupDrift } from "./useSetupDrift";
import { useSyncSwiftClientHealth } from "./useSyncSwiftClientHealth";

export const useGlobalSyncs = () => {
  useSetupDrift();
  useSyncSwiftClientHealth();
};
