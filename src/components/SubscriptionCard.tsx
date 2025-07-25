import React from "react";

type SubscriptionCardProps = {
  token: string;
  amount: string;
  receiver: string;
  frequency: string;
  status: string;
  onEdit?: () => void;
  onCancel?: () => void;
};

export default function SubscriptionCard({
  token,
  amount,
  receiver,
  frequency,
  status,
  onEdit,
  onCancel
}: SubscriptionCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 flex flex-col gap-3 border border-gray-100">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center font-bold text-lg text-gray-700">
          {token}
        </div>
        <div className="flex-1">
          <div className="font-semibold text-gray-900">
            {amount} {token}
          </div>
          <div className="text-xs text-gray-500 truncate">To: {receiver}</div>
        </div>
        <div className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded font-medium">
          {frequency}
        </div>
      </div>
      <div className="flex items-center justify-between mt-2">
        <span className="text-sm text-gray-600">{status}</span>
        <div className="flex gap-2">
          <button
            className="px-3 py-1 rounded bg-gray-100 text-gray-700 hover:bg-gray-200 text-xs font-medium transition"
            onClick={onEdit}
          >
            Edit
          </button>
          <button
            className="px-3 py-1 rounded bg-red-100 text-red-700 hover:bg-red-200 text-xs font-medium transition"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
