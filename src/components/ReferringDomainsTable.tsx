import type { ReferringDomainItem } from "@/lib/dummy-data";

function DRBadge({ dr }: { dr: number }) {
  const bg = dr >= 80 ? "bg-green-100 text-green-700" : dr >= 60 ? "bg-orange-100 text-orange-700" : "bg-yellow-100 text-yellow-700";
  return (
    <span className={`inline-flex items-center justify-center w-10 h-6 rounded text-xs font-bold ${bg}`}>
      {dr}
    </span>
  );
}

export default function ReferringDomainsTable({ domains }: { domains: ReferringDomainItem[] }) {
  return (
    <div className="card p-6">
      <h3 className="text-base font-semibold mb-4">主要参照ドメイン</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[var(--border)]">
              <th className="text-left py-2.5 px-3 text-[var(--muted)] font-medium">ドメイン</th>
              <th className="text-center py-2.5 px-3 text-[var(--muted)] font-medium">DR</th>
              <th className="text-right py-2.5 px-3 text-[var(--muted)] font-medium">被リンク数</th>
              <th className="text-left py-2.5 px-3 text-[var(--muted)] font-medium">初検出日</th>
            </tr>
          </thead>
          <tbody>
            {domains.map((d) => (
              <tr key={d.domain} className="border-b border-[var(--border)] last:border-b-0 table-row-hover transition-colors">
                <td className="py-2.5 px-3 font-medium text-blue-600">{d.domain}</td>
                <td className="py-2.5 px-3 text-center"><DRBadge dr={d.dr} /></td>
                <td className="py-2.5 px-3 text-right font-semibold">{d.backlinks}</td>
                <td className="py-2.5 px-3 text-[var(--muted)]">{d.firstSeen}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
