"use client";

import { useState } from "react";
import { useAccount, useSendTransaction } from "wagmi";
import { parseEther, isAddress } from "viem";

export default function PrivateSend() {
  const { isConnected } = useAccount();
  const [to, setTo] = useState("0x0000000000000000000000000000000000000000");
  const [amt, setAmt] = useState("0.001");
  const [mode, setMode] = useState<"gasless" | "standard">("gasless");

  const { sendTransactionAsync, isPending } = useSendTransaction();
  const valid = isConnected && isAddress(to) && Number(amt) > 0;

  async function submit() {
    if (!valid) return;
    if (mode === "gasless") {
      alert("Demo gasless send: In production, POST this payload to your relayer, then broadcast privately.");
      return;
    }
    await sendTransactionAsync({ to: to as `0x${string}`, value: parseEther(amt) });
  }

  return (
    <main className="px-6">
      <section className="mx-auto max-w-6xl pt-8 pb-10">
        <div className="pill">Private Send • anonymous-style UX (demo)</div>
        <h1 className="mt-3 text-3xl md:text-4xl font-black tracking-tight">Private Send</h1>
        <p className="mt-2 text-black/70 max-w-2xl">
          Gasless mode is a demo relay placeholder. Standard mode can broadcast a normal transaction.
        </p>

        <div className="mt-6 grid lg:grid-cols-2 gap-6">
          <div className="card p-6">
            <div className="font-semibold">Send details</div>

            <div className="mt-4 grid gap-3">
              <label className="text-sm text-black/70">Mode</label>
              <div className="flex gap-2">
                <button className={mode === "gasless" ? "btn-primary" : "btn-ghost"} onClick={() => setMode("gasless")} type="button">
                  Gasless (demo)
                </button>
                <button className={mode === "standard" ? "btn-primary" : "btn-ghost"} onClick={() => setMode("standard")} type="button">
                  Standard
                </button>
              </div>

              <label className="text-sm text-black/70 mt-2">Recipient</label>
              <input value={to} onChange={(e) => setTo(e.target.value)} className="w-full rounded-xl border border-black/10 bg-white px-4 py-3" />

              <label className="text-sm text-black/70 mt-2">Amount (ETH)</label>
              <input value={amt} onChange={(e) => setAmt(e.target.value)} className="w-full rounded-xl border border-black/10 bg-white px-4 py-3" />

              <button className={`btn-primary mt-3 ${!valid || isPending ? "opacity-60 cursor-not-allowed" : ""}`} disabled={!valid || isPending} onClick={submit}>
                {mode === "gasless" ? "Send privately (demo)" : isPending ? "Sending…" : "Send transaction"}
              </button>

              <div className="text-xs text-black/60">Safety cues: invalid addresses are blocked • gasless sends require a relayer service.</div>
            </div>
          </div>

          <div className="card p-6">
            <div className="font-semibold">Privacy notes</div>
            <p className="mt-2 text-sm text-black/70">
              This is a UI demo. Real anonymous transfers require privacy tech (ZK/shielded pools) + compliance review.
            </p>
            <div className="mt-4 card p-4">
              <div className="text-xs text-black/60">Relay payload (example)</div>
              <pre className="mt-2 text-xs whitespace-pre-wrap text-black/70">{`{
  "to": "${to.slice(0, 10)}…",
  "amount": "${amt}",
  "mode": "gasless",
  "note": "signed by user, broadcast by relayer"
}`}</pre>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
