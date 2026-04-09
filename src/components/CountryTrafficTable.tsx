import type { CountryTraffic } from "@/lib/dummy-data";

export default function CountryTrafficTable({ data }: { data: CountryTraffic[] }) {
  const maxTraffic = Math.max(...data.map((d) => d.traffic));

  return (
    <div className="card p-6">
      <h3 className="text-base font-semibold mb-4">国別トラフィック</h3>
      <div className="space-y-3">
        {data.map((item) => (
          <div key={item.country} className="flex items-center gap-3">
            <span className="text-xl w-8 text-center">{item.flag}</span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium">{item.country}</span>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-[var(--muted)]">{item.keywords.toLocaleString()} KW</span>
                  <span className="font-semibold">{item.traffic.toLocaleString()}</span>
                  <span className="text-[var(--muted)] w-14 text-right">{item.percentage}%</span>
                </div>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2 dark:bg-gray-700">
                <div
                  className="h-2 rounded-full bg-blue-500 transition-all duration-500"
                  style={{ width: `${(item.traffic / maxTraffic) * 100}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
