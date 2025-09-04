"use client";

import React from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Wallet } from "lucide-react";

const WalletButton: React.FC = () => {
  const { connected } = useWallet();

  return (
    <div>
      <WalletMultiButton className="!rounded-lg !text-white !h-10 !px-4 !font-medium !transition-colors">
        {!connected && (
          <div className="flex items-center gap-2">
            <Wallet className="h-4 w-4" />
            Connect Wallet
          </div>
        )}
      </WalletMultiButton>
    </div>
  );
};

export default WalletButton;
