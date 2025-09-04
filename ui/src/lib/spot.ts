import { BigNum, SpotMarketConfig } from "@drift-labs/sdk";
import { TOKEN_PROGRAM_ID } from "@drift/common";
import { PublicKey } from "@solana/web3.js";
import { Connection } from "@solana/web3.js";

export const getWalletSpotBalances = async (
  connection: Connection,
  authority: PublicKey,
  spotMarketConfigs: SpotMarketConfig[],
): Promise<
  {
    marketConfig: SpotMarketConfig;
    balance: BigNum;
  }[]
> => {
  const tokenAccounts = await connection.getParsedTokenAccountsByOwner(
    authority,
    { programId: TOKEN_PROGRAM_ID },
  );

  const balances = spotMarketConfigs.map((marketConfig) => {
    const tokenAccount = tokenAccounts.value.find((tokenAccount) => {
      return (
        marketConfig.mint.toBase58() ===
        tokenAccount.account.data.parsed.info.mint
      );
    });

    if (!tokenAccount) {
      return {
        marketConfig,
        balance: BigNum.zero(marketConfig.precisionExp),
      };
    }

    return {
      marketConfig,
      balance: BigNum.from(
        tokenAccount.account.data.parsed.info.tokenAmount.amount,
        marketConfig.precisionExp,
      ),
    };
  });

  return balances;
};
