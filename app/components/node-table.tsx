export type NodeRow = {
  name: string;
  region: string;
  latencyMs: number;
  uptime: string;
  status: "Healthy" | "Caution" | "Critical";
};

function statusBadge(status: NodeRow["status"]) {
  const base = "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold border";
  if (status === "Healthy") return base + " border-black/10 bg-white text-black";
  if (status === "Caution") return base + " border-musheeOrange/30 bg-white text-musheeOrange";
  return base + " border-red-500/30 bg-white text-red-600";
}

export function NodeTable({ rows }: { rows: NodeRow[] }) {
  return (
    <div className="card overflow-hidden">
      <div className="px-5 py-4 border-b border-black/5 flex items-center justify-between">
        <div className="font-semibold">Node Readings</div>
        <div className="pill">Live demo • refreshes on click</div>
      </div>
      <div className="w-full overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-black/[0.02] text-black/60">
            <tr>
              <th className="text-left px-5 py-3 font-medium">Node</th>
              <th className="text-left px-5 py-3 font-medium">Region</th>
              <th className="text-left px-5 py-3 font-medium">Latency</th>
              <th className="text-left px-5 py-3 font-medium">Uptime</th>
              <th className="text-left px-5 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, idx) => (
              <tr key={idx} className="border-t border-black/5">
                <td className="px-5 py-3 font-semibold">{r.name}</td>
                <td className="px-5 py-3 text-black/70">{r.region}</td>
                <td className="px-5 py-3">{r.latencyMs} ms</td>
                <td className="px-5 py-3 text-black/70">{r.uptime}</td>
                <td className="px-5 py-3"><span className={statusBadge(r.status)}>{r.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
