const mockTokenData = {
  ETH: {
    chainId: 1,
    symbol: "ETH",
    name: "Ethereum",
    address: "0x0000000000000000000000000000000000000000",
    decimals: 18,
    logoURI: "🔷",
    rating: 4.8,
    price: "$2,847.23",
    marketCap: "$342.5B",
    volume24h: "$12.3B",
    description:
      "Ethereum is a decentralized, open-source blockchain with smart contract functionality. ETH is the native cryptocurrency of the platform."
  },
  USDC: {
    chainId: 1,
    symbol: "USDC",
    name: "USD Coin",
    address: "0xA0b86a33E6441b8C4C8C8C8C8C8C8C8C8C8C8C8",
    decimals: 6,
    logoURI: "💙",
    rating: 4.9,
    price: "$1.00",
    marketCap: "$32.1B",
    volume24h: "$5.2B",
    description:
      "USD Coin (USDC) is a digital stablecoin pegged to the United States dollar. USDC is issued by regulated financial institutions."
  },
  DAI: {
    chainId: 1,
    symbol: "DAI",
    name: "Dai",
    address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
    decimals: 18,
    logoURI: "🟡",
    rating: 4.7,
    price: "$1.00",
    marketCap: "$5.2B",
    volume24h: "$1.8B",
    description:
      "Dai is a decentralized, collateral-backed cryptocurrency soft-pegged to the US Dollar. It is created by the Maker Protocol."
  }
};

export default function TokenPage({ params }: { params: { symbol: string } }) {
  const token = mockTokenData[params.symbol as keyof typeof mockTokenData];

  if (!token) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Token Not Found
        </h1>
        <p className="text-gray-600">The requested token could not be found.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Token Header */}
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-3xl">
            {token.logoURI}
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{token.name}</h1>
            <p className="text-lg text-gray-500">{token.symbol}</p>
          </div>
          <div className="ml-auto text-right">
            <div className="text-2xl font-bold text-blue-600">
              {token.price}
            </div>
            <div className="text-sm text-gray-500">Current Price</div>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`text-lg ${
                  i < Math.floor(token.rating)
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
              >
                ★
              </span>
            ))}
          </div>
          <span className="text-sm text-gray-600">{token.rating}/5</span>
        </div>
      </div>

      {/* Token Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Token Information */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">
            Token Information
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Chain ID:</span>
              <span className="font-medium text-gray-900">{token.chainId}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Symbol:</span>
              <span className="font-medium text-gray-900">{token.symbol}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Decimals:</span>
              <span className="font-medium text-gray-900">
                {token.decimals}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Address:</span>
              <span className="font-mono text-sm text-blue-600 truncate max-w-32">
                {token.address}
              </span>
            </div>
          </div>
        </div>

        {/* Market Data */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">
            Market Data
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Market Cap:</span>
              <span className="font-medium text-gray-900">
                {token.marketCap}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">24h Volume:</span>
              <span className="font-medium text-gray-900">
                {token.volume24h}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Current Price:</span>
              <span className="font-medium text-gray-900">{token.price}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">
          About {token.name}
        </h2>
        <p className="text-gray-700 leading-relaxed">{token.description}</p>
      </div>
    </div>
  );
}
