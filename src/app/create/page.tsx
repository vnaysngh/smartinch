import Link from "next/link";

const mockTokens = [
  { symbol: "USDC", name: "USD Coin" },
  { symbol: "ETH", name: "Ethereum" },
  { symbol: "DAI", name: "Dai" }
];

const frequencies = ["Weekly", "Monthly", "Quarterly"];

export default function CreateSubscriptionPage() {
  return (
    <div className="max-w-lg mx-auto bg-white rounded-xl shadow-md p-8 border border-gray-100">
      <h1 className="text-2xl font-bold mb-6 text-gray-900">
        Create Subscription
      </h1>
      <form className="space-y-5">
        {/* Token Select */}
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">
            Token
          </label>
          <select className="w-full rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 px-3 py-2 bg-transparent text-gray-900">
            {mockTokens.map((t) => (
              <option key={t.symbol} value={t.symbol}>
                {t.name} ({t.symbol})
              </option>
            ))}
          </select>
        </div>
        {/* Amount */}
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">
            Amount
          </label>
          <input
            type="number"
            min="0"
            step="any"
            placeholder="0.00"
            className="w-full rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 px-3 py-2 bg-transparent text-gray-900 placeholder-gray-500"
          />
        </div>
        {/* Receiver Address */}
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">
            Receiver Address
          </label>
          <input
            type="text"
            placeholder="0x..."
            className="w-full rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 px-3 py-2 bg-transparent text-gray-900 placeholder-gray-500"
          />
        </div>
        {/* Frequency */}
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">
            Frequency
          </label>
          <select className="w-full rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 px-3 py-2 bg-transparent text-gray-900">
            {frequencies.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>
        </div>
        {/* Button */}
        <button
          type="button"
          className="w-full py-3 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition"
        >
          Create Subscription
        </button>
      </form>
    </div>
  );
}
