import { useDriftStore } from "@/stores/DriftStore";
import { useMarkPriceStore } from "@/stores/MarkPriceStore";
import { useOraclePriceStore } from "@/stores/OraclePriceStore";
import { useUserAccountDataStore } from "@/stores/UserAccountDataStore";
import { DriftEnv, IWallet } from "@drift-labs/sdk";
import {
  AuthorityDrift,
  AuthorityDriftConfig,
  COMMON_UI_UTILS,
  UserAccountCache,
} from "@drift/common";
import { useWallet } from "@solana/wallet-adapter-react";
import { useEffect, useRef } from "react";

type PartialAuthorityDriftConfig = Omit<AuthorityDriftConfig, "wallet">;

const _DEVNET_DRIFT_CONFIG: PartialAuthorityDriftConfig = {
  solanaRpcEndpoint: process.env.NEXT_PUBLIC_SOLANA_DEVNET_RPC_ENDPOINT!,
  driftEnv: "devnet",

  // You can find out more about all Drift supported markets here
  // - Perps: https://github.com/drift-labs/protocol-v2/blob/master/sdk/src/constants/perpMarkets.ts
  // - Spot: https://github.com/drift-labs/protocol-v2/blob/master/sdk/src/constants/spotMarkets.ts
  // tradableMarkets: [
  //   new MarketId(0, MarketType.SPOT), // USDC
  //   new MarketId(1, MarketType.SPOT), // SOL
  //   new MarketId(0, MarketType.PERP), // SOL-PERP
  //   new MarketId(1, MarketType.PERP), // BTC-PERP
  // ],
};

const MAINNET_DRIFT_CONFIG: AuthorityDriftConfig = {
  solanaRpcEndpoint: process.env.NEXT_PUBLIC_SOLANA_MAINNET_RPC_ENDPOINT!,
  driftEnv: "mainnet-beta" as DriftEnv,
  // tradableMarkets: [
  //   new MarketId(0, MarketType.SPOT), // USDC
  //   new MarketId(1, MarketType.SPOT), // SOL
  //   new MarketId(0, MarketType.PERP), // SOL-PERP
  //   new MarketId(1, MarketType.PERP), // BTC-PERP
  // ],
};

export const useSetupDrift = () => {
  const drift = useDriftStore((s) => s.drift);
  const setDriftStore = useDriftStore((s) => s.set);
  const setOraclePriceStore = useOraclePriceStore((s) => s.set);
  const setMarkPriceStore = useMarkPriceStore((s) => s.set);
  const setUserAccountDataStore = useUserAccountDataStore((s) => s.set);
  const wallet = useWallet();
  const isSubscribingToDrift = useRef(false);

  const isConnected = wallet.wallet?.adapter.connected;
  const driftConfig = MAINNET_DRIFT_CONFIG;
  const walletPubkey = wallet.wallet?.adapter.publicKey;

  useEffect(() => {
    if (drift || isSubscribingToDrift.current) return; // Drift has been set up in the store

    const walletToUse = isConnected
      ? (wallet as IWallet)
      : COMMON_UI_UTILS.createPlaceholderIWallet(); // random wallet as placeholder if user is not connected

    const authorityDrift = new AuthorityDrift({
      ...driftConfig,
      wallet: walletToUse,
    });

    isSubscribingToDrift.current = true;
    authorityDrift
      .subscribe()
      .then(() => {
        // set up Drift instance in the store
        setDriftStore((s) => {
          s.drift = authorityDrift;
        });

        // set up and subscribe to oracle price store
        setOraclePriceStore((s) => {
          s.lookup = authorityDrift.oraclePriceCache;
        });
        authorityDrift.onOraclePricesUpdate((newOraclePricesLookup) => {
          setOraclePriceStore((s) => {
            s.lookup = {
              ...s.lookup,
              ...newOraclePricesLookup,
            };
          });
        });

        // set up and subscribe to mark price store
        setMarkPriceStore((s) => {
          s.lookup = authorityDrift.markPriceCache;
        });
        authorityDrift.onMarkPricesUpdate((newMarkPricesLookup) => {
          setMarkPriceStore((s) => {
            s.lookup = { ...s.lookup, ...newMarkPricesLookup };
          });
        });

        // set up and subscribe to user account data store
        setUserAccountDataStore((s) => {
          s.lookup = authorityDrift.userAccountCache;

          if (Object.keys(authorityDrift.userAccountCache).length > 0) {
            s.activeSubAccountId = Object.values(
              authorityDrift.userAccountCache,
            )[0].subAccountId;
          }
        });
        authorityDrift.onUserAccountUpdate((newUserAccount) => {
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
      })
      .finally(() => {
        isSubscribingToDrift.current = false;
      });
  }, [
    drift,
    isConnected,
    wallet,
    driftConfig,
    setDriftStore,
    setOraclePriceStore,
    setMarkPriceStore,
    setUserAccountDataStore,
  ]);

  useEffect(() => {
    if (!walletPubkey || !drift) return;

    drift.updateAuthority(wallet as IWallet);
  }, [walletPubkey, drift, wallet]);
};
