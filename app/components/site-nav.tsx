"use client";

import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 px-6 py-4 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl card px-5 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-musheeOrange shadow-glow grid place-items-center text-white font-black">
            M
          </div>
          <div className="leading-tight">
            <div className="font-extrabold tracking-tight text-lg">Mushee</div>
            <div className="text-xs text-black/60">Network Observatory</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-5 text-sm text-black/70">
          <Link href="/dashboard" className="hover:text-black">Dashboard</Link>
          <Link href="/nodes" className="hover:text-black">Nodes</Link>
          <Link href="/vault" className="hover:text-black">Vault</Link>
          <Link href="/send" className="hover:text-black">Private Send</Link>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <ConnectButton />
          </div>
          <Link href="/dashboard" className="btn-primary">Launch</Link>
        </div>
      </div>
    </header>
  );
}
