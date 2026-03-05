import Link from "next/link";
import { FloatingLetters } from "./components/floating-letters";

export default function Home() {
  return (
    <main className="relative px-6">
      <FloatingLetters />
      <section className="mx-auto max-w-6xl pt-14 pb-12">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="pill">Mushee • Network Observatory • gasless + privacy-first</div>
            <h1 className="mt-5 text-5xl md:text-6xl font-black tracking-tight">
              Node intelligence that feels like <span className="text-musheeOrange">heaven</span>.
            </h1>
            <p className="mt-5 text-lg text-black/70 max-w-xl">
              Mushee is a clean, fast dashboard for node health, RPC performance, attack signals, and private send flows —
              built to reduce friction for builders and operators.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/dashboard" className="btn-primary">Open Dashboard</Link>
              <Link href="/send" className="btn-ghost">Try Private Send</Link>
              <Link href="/vault" className="btn-ghost">Vault Demo</Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              <span className="pill">Orange • White • Milky brown</span>
              <span className="pill">Glassless, soft edges</span>
              <span className="pill">Wallet-ready</span>
            </div>
          </div>

          <div className="card p-6 relative overflow-hidden">
            <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-musheeOrange/15" />
            <div className="absolute -left-10 -bottom-10 h-64 w-64 rounded-full bg-musheeBrown/10" />
            <div className="relative">
              <div className="text-sm text-black/60">Live preview</div>
              <div className="mt-2 text-2xl font-extrabold tracking-tight">Network status</div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="card p-4">
                  <div className="text-xs text-black/60">Fastest region</div>
                  <div className="mt-1 text-xl font-extrabold">London</div>
                  <div className="mt-2 text-sm text-black/60">12ms median latency</div>
                </div>
                <div className="card p-4">
                  <div className="text-xs text-black/60">Attack signals</div>
                  <div className="mt-1 text-xl font-extrabold">Low</div>
                  <div className="mt-2 text-sm text-black/60">No active incidents</div>
                </div>
                <div className="card p-4 col-span-2">
                  <div className="text-xs text-black/60">Gasless status</div>
                  <div className="mt-1 text-xl font-extrabold">Enabled</div>
                  <div className="mt-2 text-sm text-black/60">
                    Demo relayer mode — wire to your backend when ready.
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="text-sm text-black/60">Mushee UK Incorporated • mushee.xyz</div>
                <Link href="/dashboard" className="link text-sm font-semibold">See details →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
