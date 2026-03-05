export function MetricCard({ label, value, hint }: { label: string; value: string; hint: string }) {
  return (
    <div className="card p-5">
      <div className="text-xs text-black/60">{label}</div>
      <div className="mt-2 text-2xl font-extrabold tracking-tight">{value}</div>
      <div className="mt-2 text-sm text-black/60">{hint}</div>
    </div>
  );
}
