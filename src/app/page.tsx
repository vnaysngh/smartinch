"use client";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <main className="max-w-3xl mx-auto px-4 py-16 w-full flex flex-col items-center text-center gap-10">
        <Image
          src="/next.svg"
          alt="SmartInch Logo"
          width={120}
          height={40}
          className="mb-2"
        />
        <h1 className="text-4xl font-extrabold tracking-tight mb-2">
          SmartInch
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mb-6">
          The crypto-native subscription manager. Automate recurring payments,
          clean wallet dust, and seamlessly swap assets using classic and
          cross-chain swaps powered by 1inch.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/dashboard"
            className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition"
          >
            Go to Dashboard
          </Link>
          <Link
            href="/create"
            className="px-6 py-3 rounded-lg bg-gray-100 text-gray-900 font-semibold shadow hover:bg-gray-200 transition"
          >
            Create Subscription
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
          <div className="bg-white rounded-xl shadow p-6 border border-gray-100">
            <h3 className="font-bold text-lg mb-2">Automate Payments</h3>
            <p className="text-gray-600 text-sm">
              Set up recurring crypto payments for any token, any frequency, any
              wallet.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 border border-gray-100">
            <h3 className="font-bold text-lg mb-2">Clean Wallet Dust</h3>
            <p className="text-gray-600 text-sm">
              Identify and swap small token balances ("dust") into USDC with one
              click.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 border border-gray-100">
            <h3 className="font-bold text-lg mb-2">Cross-Chain Swaps</h3>
            <p className="text-gray-600 text-sm">
              Seamlessly swap assets across chains, powered by 1inch's advanced
              routing.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
