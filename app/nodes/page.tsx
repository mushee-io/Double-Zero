"use client";

import { useState } from "react";

type Alert = { time: string; title: string; severity: "info" | "warn" | "critical" };

export default function Nodes() {
  const [alerts, setAlerts] = useState<Alert[]>([
    { time: "12:03", title: "Latency spike detected — Singapore", severity: "warn" },
    { time: "11:41", title: "RPC error burst — New York", severity: "info" },
    { time: "10:22", title: "Packet loss — Frankfurt", severity: "info" },
  ]);

  const push = () => {
    const pool: Alert[] = [
      { time: "now", title: "Caution beep — transient congestion", severity: "warn" },
      { time: "now", title: "All clear — nodes stabilized", severity: "info" },
      { time: "now", title: "Critical — sustained errors (demo)", severity: "critical" },
    ];
    const a = pool[Math.floor(Math.random() * pool.length)];
    setAlerts((x) => [a, ...x].slice(0, 8));
  };

  const badge = (s: Alert["severity"]) => {
    if (s === "critical") return "border-red-500/30 text-red-600";
    if (s === "warn") return "border-musheeOrange/30 text-musheeOrange";
    return "border-black/10 text-black/70";
  };

  return (
    <main className="px-6">
      <section className="mx-auto max-w-6xl pt-8 pb-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className="pill">Nodes • readings • incidents</div>
            <h1 className="mt-3 text-3xl md:text-4xl font-black tracking-tight">Node Monitor</h1>
            <p className="mt-2 text-black/70 max-w-2xl">
              A clean incident stream for operators. Tap “Simulate beep” to see alerts update (demo).
            </p>
          </div>
          <button onClick={push} className="btn-primary w-full md:w-auto">Simulate beep</button>
        </div>

        <div className="mt-6 card overflow-hidden">
          <div className="px-5 py-4 border-b border-black/5 flex items-center justify-between">
            <div className="font-semibold">Alerts</div>
            <div className="pill">last 8</div>
          </div>
          <div className="divide-y divide-black/5">
            {alerts.map((a, i) => (
              <div key={i} className="px-5 py-4 flex items-center justify-between gap-4">
                <div className="min-w-16 text-sm text-black/50">{a.time}</div>
                <div className="flex-1 font-medium">{a.title}</div>
                <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold border bg-white ${badge(a.severity)}`}>
                  {a.severity}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
