import React from "react";
import TokenListItem from "./TokenListItem";

type DustToken = {
  name: string;
  symbol: string;
  value: string;
};

type CleanWalletModalProps = {
  open: boolean;
  onClose?: () => void;
  tokens: DustToken[];
};

export default function CleanWalletModal({
  open,
  onClose,
  tokens
}: CleanWalletModalProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md border border-gray-100 relative">
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-xl font-bold"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <h2 className="text-lg font-semibold mb-4">Clean Wallet</h2>
        <div className="mb-4">
          {tokens.map((token, i) => (
            <TokenListItem key={i} {...token} showCheckbox checked={false} />
          ))}
        </div>
        <button className="w-full py-3 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition">
          Swap to USDC
        </button>
      </div>
    </div>
  );
}
