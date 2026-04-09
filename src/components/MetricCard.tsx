interface MetricCardProps {
  label: string;
  value: string | number;
  icon: React.ReactNode;
  subtitle?: string;
}

export default function MetricCard({ label, value, icon, subtitle }: MetricCardProps) {
  return (
    <div className="card p-5 flex items-start gap-4 hover:shadow-md transition-shadow">
      <div className="w-11 h-11 rounded-lg flex items-center justify-center text-blue-500 shrink-0" style={{ background: "rgba(59,130,246,0.1)" }}>
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-sm text-[var(--muted)] mb-0.5">{label}</p>
        <p className="text-2xl font-bold tracking-tight">{typeof value === "number" ? value.toLocaleString() : value}</p>
        {subtitle && <p className="text-xs text-[var(--muted)] mt-0.5">{subtitle}</p>}
      </div>
    </div>
  );
}
