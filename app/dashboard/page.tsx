"use client";

import { useMemo, useState } from "react";
import { MetricCard } from "../components/metric-card";
import { NodeTable, type NodeRow } from "../components/node-table";

function rand(n: number) {
  return Math.max(1, Math.round(n + (Math.random() - 0.5) * n * 0.25));
}

export default function Dashboard() {
  const [seed, setSeed] = useState(0);

  const rows: NodeRow[] = useMemo(() => {
    const base: NodeRow[] = [
      { name: "Mushee Node — London", region: "UK", latencyMs: 12, uptime: "99.98%", status: "Healthy" },
      { name: "Mushee Node — Frankfurt", region: "DE", latencyMs: 18, uptime: "99.96%", status: "Healthy" },
      { name: "Mushee Node — New York", region: "US", latencyMs: 31, uptime: "99.90%", status: "Healthy" },
      { name: "Mushee Node — Singapore", region: "SG", latencyMs: 44, uptime: "99.72%", status: "Caution" },
    ];
    return base.map((r) => ({ ...r, latencyMs: rand(r.latencyMs) }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seed]);

  const incident = rows.some((r) => r.status === "Caution") ? "Caution" : "Clear";

  return (
    <main className="px-6">
      <section className="mx-auto max-w-6xl pt-8 pb-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className="pill">Dashboard • no fluff • operator-ready</div>
            <h1 className="mt-3 text-3xl md:text-4xl font-black tracking-tight">Network Observatory</h1>
            <p className="mt-2 text-black/70 max-w-2xl">
              Live-style readings for nodes, RPC performance, attack signals, and caution beeps (demo).
            </p>
          </div>
          <button onClick={() => setSeed((s) => s + 1)} className="btn-primary w-full md:w-auto">
            Refresh readings
          </button>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <MetricCard
            label="Median latency"
            value={`${Math.round(rows.reduce((a, b) => a + b.latencyMs, 0) / rows.length)} ms`}
            hint="Across active nodes"
          />
          <MetricCard label="RPC reliability" value="99.9%" hint="Success responses (demo)" />
          <MetricCard
            label="Incident status"
            value={incident}
            hint={incident === "Caution" ? "Operator attention advised" : "All clear"}
          />
        </div>

        <div className="mt-6">
          <NodeTable rows={rows} />
        </div>
      </section>
    </main>
  );
}
