import SubscriptionCard from "../../components/SubscriptionCard";
import TokenListItem from "../../components/TokenListItem";

const mockSubscriptions = [
  {
    token: "USDC",
    amount: "25.00",
    receiver: "0xA1b2...C3d4",
    frequency: "Monthly",
    status: "Next payment in 5 days"
  },
  {
    token: "ETH",
    amount: "0.05",
    receiver: "0xB5c6...D7e8",
    frequency: "Weekly",
    status: "Next payment in 2 days"
  }
];

const mockPayments = [
  { date: "2024-07-10", amount: "25.00 USDC" },
  { date: "2024-07-12", amount: "0.05 ETH" }
];

const mockDustTokens = [
  { name: "Shiba Inu", symbol: "SHIB", value: "$1.23" },
  { name: "Basic Attention Token", symbol: "BAT", value: "$2.10" }
];

const mockPortfolio = [
  { name: "USD Coin", symbol: "USDC", value: "$1,000.00" },
  { name: "Ethereum", symbol: "ETH", value: "$2,500.00" }
];

export default function DashboardPage() {
  return (
    <div className="mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Left/Main Column: Active Subscriptions */}
      <div className="md:col-span-2 space-y-8">
        <section>
          <h2 className="text-lg font-semibold mb-3">Active Subscriptions</h2>
          <div className="grid gap-4">
            {mockSubscriptions.map((sub, i) => (
              <SubscriptionCard key={i} {...sub} />
            ))}
          </div>
        </section>
      </div>

      {/* Right/Side Column: Upcoming Payments, Portfolio, Dust Tokens */}
      <div className="space-y-8">
        <section>
          <h2 className="text-lg font-semibold mb-3">Upcoming Payments</h2>
          <ul className="space-y-2">
            {mockPayments.map((p, i) => (
              <li
                key={i}
                className="flex justify-between bg-gray-50 rounded-lg px-4 py-2 border border-gray-100"
              >
                <span className="text-gray-700 font-medium">{p.date}</span>
                <span className="text-gray-600">{p.amount}</span>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="text-lg font-semibold mb-3">Portfolio</h2>
          <div className="mb-3">
            {mockPortfolio.map((token, i) => (
              <TokenListItem key={i} {...token} />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-lg font-semibold mb-3">Dust Tokens</h2>
          <div className="mb-3">
            {mockDustTokens.map((token, i) => (
              <TokenListItem key={i} {...token} />
            ))}
          </div>
          <button className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition">
            Clean Wallet
          </button>
        </section>
      </div>
    </div>
  );
}
