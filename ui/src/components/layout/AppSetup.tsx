"use client";

import { useGlobalSyncs } from "@/hooks/globalSyncs/useGlobalSyncs";
// import { useInspectDrift } from "@/hooks/useInspectDrift";

export const AppSetup = () => {
  useGlobalSyncs();
  // useInspectDrift();

  return null;
};
