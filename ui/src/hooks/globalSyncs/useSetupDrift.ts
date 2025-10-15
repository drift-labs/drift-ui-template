import { DriftEnvironment, useDriftStore } from "@/stores/DriftStore";
import { useMarkPriceStore } from "@/stores/MarkPriceStore";
import { useOraclePriceStore } from "@/stores/OraclePriceStore";
import { useUserAccountDataStore } from "@/stores/UserAccountDataStore";
import { IWallet, IWalletV2, MarketType } from "@drift-labs/sdk";
import {
  AuthorityDrift,
  AuthorityDriftConfig,
  COMMON_UI_UTILS,
  MarketId,
  UserAccountCache,
} from "@drift-labs/common";
import { useWallet } from "@solana/wallet-adapter-react";
import { useEffect, useMemo, useRef } from "react";
import { useDebounce, useLatest } from "react-use";

type PartialAuthorityDriftConfig = Omit<AuthorityDriftConfig, "wallet">;

type DriftConfigMap = Record<DriftEnvironment, PartialAuthorityDriftConfig>;

const DRIFT_CONFIGS: DriftConfigMap = {
  devnet: {
    solanaRpcEndpoint: process.env.NEXT_PUBLIC_SOLANA_DEVNET_RPC_ENDPOINT!,
    driftEnv: "devnet",
  },
  "mainnet-beta": {
    solanaRpcEndpoint: process.env.NEXT_PUBLIC_SOLANA_MAINNET_RPC_ENDPOINT!,
    driftEnv: "mainnet-beta",
    tradableMarkets: [
      new MarketId(0, MarketType.SPOT), // USDC
      new MarketId(1, MarketType.SPOT), // SOL
      new MarketId(0, MarketType.PERP), // SOL-PERP
      new MarketId(1, MarketType.PERP), // BTC-PERP
      new MarketId(2, MarketType.PERP), // ETH-PERP
      new MarketId(3, MarketType.PERP), // APT-PERP
    ],
  },
};

// Update AuthorityDrift's authority when the wallet changes
const useSyncDriftAuthority = () => {
  const drift = useDriftStore((s) => s.drift);
  const wallet = useWallet();
  const walletPubkey = wallet.wallet?.adapter.publicKey;

  useEffect(() => {
    if (!walletPubkey || !drift) return;

    drift.updateAuthority(wallet as IWallet);
  }, [walletPubkey, drift, wallet]);
};

export const useSetupDrift = () => {
  const drift = useDriftStore((s) => s.drift);
  const environment = useDriftStore((s) => s.environment);
  const setDriftStore = useDriftStore((s) => s.set);
  const setOraclePriceStore = useOraclePriceStore((s) => s.set);
  const setMarkPriceStore = useMarkPriceStore((s) => s.set);
  const setUserAccountDataStore = useUserAccountDataStore((s) => s.set);
  const wallet = useWallet();
  const isSubscribingToDrift = useRef(false);
  const driftRef = useLatest(drift);

  const isConnected = wallet.wallet?.adapter.connected;
  const driftConfig = useMemo(() => DRIFT_CONFIGS[environment], [environment]);

  useSyncDriftAuthority();

  // teardown and setup AuthorityDrift and zustand stores
  useDebounce(
    () => {
      if (isSubscribingToDrift.current) return;

      const currentDrift = driftRef.current;
      const needsNewDrift =
        !currentDrift || currentDrift.driftClient.env !== driftConfig.driftEnv;

      if (!needsNewDrift) return;

      let cancelled = false;
      let authorityDriftInstance: AuthorityDrift | undefined;

      const walletToUse = isConnected
        ? (wallet as IWalletV2)
        : COMMON_UI_UTILS.createPlaceholderIWallet() as IWalletV2;

      const setup = async () => {
        isSubscribingToDrift.current = true;

        if (currentDrift) {
          try {
            await currentDrift.unsubscribe();
          } catch (error) {
            console.error("Failed to unsubscribe from Drift", error);
          }
        }

        // reset stores
        setDriftStore((s) => {
          if (s.drift === currentDrift) {
            s.drift = undefined;
          }
        });
        setOraclePriceStore((s) => {
          s.lookup = {};
        });
        setMarkPriceStore((s) => {
          s.lookup = {};
        });
        setUserAccountDataStore((s) => {
          s.lookup = {};
          s.activeSubAccountId = undefined;
        });

        authorityDriftInstance = new AuthorityDrift({
          ...driftConfig,
          wallet: walletToUse,
        });

        try {
          await authorityDriftInstance.subscribe();

          if (cancelled) {
            await authorityDriftInstance.unsubscribe().catch(() => undefined);
            return;
          }

          // setup stores
          setDriftStore((s) => {
            s.drift = authorityDriftInstance!;
          });

          setOraclePriceStore((s) => {
            s.lookup = authorityDriftInstance!.oraclePriceCache;
          });
          authorityDriftInstance.onOraclePricesUpdate(
            (newOraclePricesLookup) => {
              setOraclePriceStore((s) => {
                s.lookup = {
                  ...s.lookup,
                  ...newOraclePricesLookup,
                };
              });
            },
          );

          setMarkPriceStore((s) => {
            s.lookup = authorityDriftInstance!.markPriceCache;
          });
          authorityDriftInstance.onMarkPricesUpdate((newMarkPricesLookup) => {
            setMarkPriceStore((s) => {
              s.lookup = { ...s.lookup, ...newMarkPricesLookup };
            });
          });

          setUserAccountDataStore((s) => {
            s.lookup = authorityDriftInstance!.userAccountCache;

            if (
              Object.keys(authorityDriftInstance!.userAccountCache).length > 0
            ) {
              s.activeSubAccountId = Object.values(
                authorityDriftInstance!.userAccountCache,
              )[0].subAccountId;
            }
          });
          authorityDriftInstance.onUserAccountUpdate((newUserAccount) => {
            setUserAccountDataStore((s) => {
              s.lookup[
                UserAccountCache.getUserAccountKey(
                  newUserAccount.subAccountId,
                  newUserAccount.authority,
                )
              ] = newUserAccount;

              if (s.activeSubAccountId === undefined) {
                s.activeSubAccountId = newUserAccount.subAccountId;
              }
            });
          });
        } catch (error) {
          console.error("Failed to set up Drift", error);
        } finally {
          isSubscribingToDrift.current = false;
        }
      };

      setup();

      return () => {
        cancelled = true;
        const driftInStore = useDriftStore.getState().drift;

        if (authorityDriftInstance && driftInStore !== authorityDriftInstance) {
          authorityDriftInstance.unsubscribe().catch(() => undefined);
        }
      };
    },
    500,
    [
      driftRef,
      driftConfig,
      isConnected,
      wallet,
      setDriftStore,
      setOraclePriceStore,
      setMarkPriceStore,
      setUserAccountDataStore,
    ],
  );

  // teardown and reset zustand stores
  useEffect(() => {
    return () => {
      const currentDrift = useDriftStore.getState().drift;

      if (currentDrift) {
        currentDrift.unsubscribe().catch(() => undefined);
        useDriftStore.getState().set((s) => {
          if (s.drift === currentDrift) {
            s.drift = undefined;
          }
        });
      }

      useOraclePriceStore.getState().set((s) => {
        s.lookup = {};
      });
      useMarkPriceStore.getState().set((s) => {
        s.lookup = {};
      });
      useUserAccountDataStore.getState().set((s) => {
        s.lookup = {};
        s.activeSubAccountId = undefined;
      });
    };
  }, []);
};
