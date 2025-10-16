import { PublicKey } from "@solana/web3.js";

const builderAuthorityString = process.env.NEXT_PUBLIC_BUILDER_AUTHORITY;

export const BUILDER_AUTHORITY = builderAuthorityString
  ? new PublicKey(builderAuthorityString)
  : undefined;

export const BUILDER_FEE_TENTH_BPS = process.env
  .NEXT_PUBLIC_BUILDER_FEE_TENTH_BPS
  ? parseInt(process.env.NEXT_PUBLIC_BUILDER_FEE_TENTH_BPS)
  : 20; // 2 bps
