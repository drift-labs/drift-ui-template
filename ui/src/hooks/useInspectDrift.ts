import { useMarkPriceStore } from "@/stores/MarkPriceStore";
import { useOraclePriceStore } from "@/stores/OraclePriceStore";
import { useUserAccountDataStore } from "@/stores/UserAccountDataStore";
import { useEffect } from "react";

/**
 * This hook is mainly for test purposes, to inspect the Drift instance and see what data is available.
 */
export const useInspectDrift = () => {
  const oraclePriceStore = useOraclePriceStore((s) => s.lookup);
  const markPriceStore = useMarkPriceStore((s) => s.lookup);
  const userAccountDataStore = useUserAccountDataStore((s) => s.lookup);

  useEffect(() => {
    console.log(
      "🚀 ~ useInspectDrift ~ userAccountDataStore:",
      userAccountDataStore,
    );
  }, [userAccountDataStore]);

  useEffect(() => {
    console.log("🚀 ~ useInspectDrift ~ oraclePriceStore:", oraclePriceStore);
  }, [oraclePriceStore]);

  useEffect(() => {
    console.log("🚀 ~ useInspectDrift ~ markPriceStore:", markPriceStore);
  }, [markPriceStore]);
};
