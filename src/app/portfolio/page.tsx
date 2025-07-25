import Link from "next/link";

const mockPortfolioData = {
  totalValue: "$12,847.23",
  chains: [
    {
      name: "Ethereum",
      icon: "🔷",
      tokens: [
        {
          name: "Ethereum",
          symbol: "ETH",
          balance: "2.53",
          usdValue: "$7,200.45",
          logo: "🔷"
        },
        {
          name: "USD Coin",
          symbol: "USDC",
          balance: "3,500.00",
          usdValue: "$3,500.00",
          logo: "💙"
        },
        {
          name: "Dai",
          symbol: "DAI",
          balance: "1,200.00",
          usdValue: "$1,200.00",
          logo: "🟡"
        }
      ]
    },
    {
      name: "Arbitrum",
      icon: "🔵",
      tokens: [
        {
          name: "Ethereum",
          symbol: "ETH",
          balance: "0.85",
          usdValue: "$2,420.78",
          logo: "🔷"
        },
        {
          name: "USD Coin",
          symbol: "USDC",
          balance: "500.00",
          usdValue: "$500.00",
          logo: "💙"
        }
      ]
    },
    {
      name: "Base",
      icon: "🔷",
      tokens: [
        {
          name: "Ethereum",
          symbol: "ETH",
          balance: "0.12",
          usdValue: "$341.00",
          logo: "🔷"
        }
      ]
    }
  ]
};

export default function PortfolioPage() {
  return (
    <div className="space-y-8">
      {/* Portfolio Header */}
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
        <h1 className="text-2xl font-bold mb-2 text-gray-900">Portfolio</h1>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-blue-600">
            {mockPortfolioData.totalValue}
          </span>
          <span className="text-sm text-gray-500">Total Value</span>
        </div>
      </div>

      {/* Blockchain Groups */}
      <div className="space-y-6">
        {mockPortfolioData.chains.map((chain, chainIndex) => (
          <div
            key={chainIndex}
            className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden"
          >
            {/* Chain Header */}
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{chain.icon}</span>
                <h2 className="text-lg font-semibold text-gray-900">
                  {chain.name}
                </h2>
                <span className="text-sm text-gray-500">
                  {chain.tokens.length} token
                  {chain.tokens.length !== 1 ? "s" : ""}
                </span>
              </div>
            </div>

            {/* Token List */}
            <div className="divide-y divide-gray-100">
              {chain.tokens.map((token, tokenIndex) => (
                <Link
                  key={tokenIndex}
                  href={`/token/${token.symbol}`}
                  className="block px-6 py-4 hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-lg">
                        {token.logo}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">
                          {token.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {token.symbol}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-gray-900">
                        {token.balance} {token.symbol}
                      </div>
                      <div className="text-sm text-gray-500">
                        {token.usdValue}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
