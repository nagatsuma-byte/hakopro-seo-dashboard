import type { TopPage } from "@/lib/dummy-data";

export default function TopPagesTable({ pages }: { pages: TopPage[] }) {
  return (
    <div className="card p-6">
      <h3 className="text-base font-semibold mb-4">トップページ</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[var(--border)]">
              <th className="text-left py-2.5 px-3 text-[var(--muted)] font-medium">URL</th>
              <th className="text-right py-2.5 px-3 text-[var(--muted)] font-medium">トラフィック</th>
              <th className="text-right py-2.5 px-3 text-[var(--muted)] font-medium">キーワード</th>
              <th className="text-left py-2.5 px-3 text-[var(--muted)] font-medium">トップキーワード</th>
              <th className="text-center py-2.5 px-3 text-[var(--muted)] font-medium">順位</th>
            </tr>
          </thead>
          <tbody>
            {pages.map((page) => (
              <tr key={page.url} className="border-b border-[var(--border)] last:border-b-0 table-row-hover transition-colors">
                <td className="py-2.5 px-3 font-mono text-xs text-blue-600">{page.url}</td>
                <td className="py-2.5 px-3 text-right font-semibold">{page.traffic.toLocaleString()}</td>
                <td className="py-2.5 px-3 text-right">{page.keywords}</td>
                <td className="py-2.5 px-3">{page.topKeyword}</td>
                <td className="py-2.5 px-3 text-center">
                  <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold ${
                    page.position <= 3 ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"
                  }`}>
                    {page.position}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
