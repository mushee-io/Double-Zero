"use client";

import { useMemo, useState } from "react";
import { useAccount, useBalance } from "wagmi";

export default function Vault() {
  const { address, isConnected } = useAccount();
  const [amount, setAmount] = useState("0.05");
  const [pair, setPair] = useState("ETH");

  const balanceQuery = useBalance({ address });
  const demoVaultBal = useMemo(() => 1280 + Math.round(Math.random() * 40), []);
  const can = isConnected && amount && Number(amount) > 0;

  return (
    <main className="px-6">
      <section className="mx-auto max-w-6xl pt-8 pb-10">
        <div className="pill">Vault • balances • pairing</div>
        <h1 className="mt-3 text-3xl md:text-4xl font-black tracking-tight">Vault</h1>
        <p className="mt-2 text-black/70 max-w-2xl">
          Connect your wallet to view on-chain balance. Pairing is a demo flow you can wire to real contracts later.
        </p>

        <div className="mt-6 grid lg:grid-cols-2 gap-6">
          <div className="card p-6">
            <div className="font-semibold">Vault balance</div>
            <div className="mt-3 text-4xl font-black tracking-tight">{demoVaultBal} TEN</div>
            <div className="mt-2 text-sm text-black/60">Demo vault number. Replace with real vault accounting.</div>

            <div className="mt-6 card p-4">
              <div className="text-xs text-black/60">Wallet balance</div>
              <div className="mt-1 text-lg font-bold">
                {isConnected
                  ? balanceQuery.data
                    ? `${balanceQuery.data.formatted.slice(0, 8)} ${balanceQuery.data.symbol}`
                    : "Loading…"
                  : "Connect wallet to view"}
              </div>
              {isConnected && address ? (
                <div className="mt-1 text-xs text-black/50">
                  Address: {address.slice(0, 6)}…{address.slice(-4)}
                </div>
              ) : null}
            </div>
          </div>

          <div className="card p-6">
            <div className="font-semibold">Pair TEN + Token</div>
            <p className="mt-2 text-sm text-black/70">
              Demo LP action: choose token, enter amount, simulate pairing.
            </p>

            <div className="mt-5 grid gap-3">
              <label className="text-sm text-black/70">Token</label>
              <select value={pair} onChange={(e) => setPair(e.target.value)} className="w-full rounded-xl border border-black/10 bg-white px-4 py-3">
                <option value="ETH">ETH</option>
              </select>

              <label className="text-sm text-black/70 mt-2">Amount</label>
              <input value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="0.05" className="w-full rounded-xl border border-black/10 bg-white px-4 py-3" />

              <button className={`btn-primary mt-3 ${!can ? "opacity-60 cursor-not-allowed" : ""}`} disabled={!can}
                onClick={() => alert(`Demo: Paired TEN + ${pair} with amount ${amount}. Wire this to your contracts.`)}>
                Pair now (demo)
              </button>

              <div className="text-xs text-black/60">Tip: connect a relayer to enable gasless LP actions.</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
