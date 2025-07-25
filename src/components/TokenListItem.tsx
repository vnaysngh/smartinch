import React from "react";

type TokenListItemProps = {
  name: string;
  symbol: string;
  value: string;
  checked?: boolean;
  onCheck?: (checked: boolean) => void;
  showCheckbox?: boolean;
};

export default function TokenListItem({
  name,
  symbol,
  value,
  checked,
  onCheck,
  showCheckbox = false
}: TokenListItemProps) {
  return (
    <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50 border border-gray-100 mb-2">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center font-bold text-sm text-gray-700">
          {symbol}
        </div>
        <div>
          <div className="font-medium text-gray-800">{name}</div>
          <div className="text-xs text-gray-500">{symbol}</div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="font-mono text-gray-700 text-sm">{value}</span>
        {showCheckbox && (
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => onCheck?.(e.target.checked)}
            className="accent-blue-500 w-4 h-4 rounded"
          />
        )}
      </div>
    </div>
  );
}
