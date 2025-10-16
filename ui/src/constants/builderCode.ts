import { PublicKey } from "@solana/web3.js";

const builderAuthorityString = process.env.NEXT_PUBLIC_BUILDER_AUTHORITY;

export const BUILDER_AUTHORITY = builderAuthorityString
  ? new PublicKey(builderAuthorityString)
  : undefined;
