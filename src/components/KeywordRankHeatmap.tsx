"use client";

import type { KeywordRankCell } from "@/lib/dummy-data";

function getPositionColor(pos: number): string {
  if (pos <= 3) return "var(--hm-top3, #16a34a)";
  if (pos <= 10) return "var(--hm-top10, #22c55e)";
  if (pos <= 20) return "var(--hm-top20, #facc15)";
  if (pos <= 50) return "var(--hm-top50, #f97316)";
  return "var(--hm-rest, #ef4444)";
}

function getPositionBg(pos: number): string {
  if (pos <= 3) return "rgba(22,163,74,0.18)";
  if (pos <= 10) return "rgba(34,197,94,0.15)";
  if (pos <= 20) return "rgba(250,204,21,0.18)";
  if (pos <= 50) return "rgba(249,115,22,0.15)";
  return "rgba(239,68,68,0.15)";
}

function getTextColor(pos: number): string {
  if (pos <= 3) return "#15803d";
  if (pos <= 10) return "#16a34a";
  if (pos <= 20) return "#a16207";
  if (pos <= 50) return "#c2410c";
  return "#dc2626";
}

function TrendArrow({ current, previous }: { current: number; previous: number }) {
  const diff = previous - current; // positive = improved
  if (diff === 0) return <span className="text-[var(--muted)] text-[10px]">-</span>;
  if (diff > 0) {
    return (
      <span className="text-green-600 text-[10px] font-semibold flex items-center gap-0.5">
        <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor"><path d="M5 2L8 6H2L5 2Z"/></svg>
        {diff}
      </span>
    );
  }
  return (
    <span className="text-red-500 text-[10px] font-semibold flex items-center gap-0.5">
      <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor"><path d="M5 8L2 4H8L5 8Z"/></svg>
      {Math.abs(diff)}
    </span>
  );
}

export default function KeywordRankHeatmap({ data }: { data: KeywordRankCell[] }) {
  const months = data[0]?.ranks.map((r) => r.date) ?? [];

  return (
    <div className="card p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-semibold">キーワード順位ヒートマップ</h3>
        <div className="flex items-center gap-3 text-[10px]">
          <span className="flex items-center gap-1"><span className="w-3 h-3 rounded" style={{ background: "rgba(22,163,74,0.3)" }} /> 1-3位</span>
          <span className="flex items-center gap-1"><span className="w-3 h-3 rounded" style={{ background: "rgba(34,197,94,0.25)" }} /> 4-10位</span>
          <span className="flex items-center gap-1"><span className="w-3 h-3 rounded" style={{ background: "rgba(250,204,21,0.3)" }} /> 11-20位</span>
          <span className="flex items-center gap-1"><span className="w-3 h-3 rounded" style={{ background: "rgba(249,115,22,0.25)" }} /> 21-50位</span>
          <span className="flex items-center gap-1"><span className="w-3 h-3 rounded" style={{ background: "rgba(239,68,68,0.25)" }} /> 51+位</span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm border-separate" style={{ borderSpacing: "3px" }}>
          <thead>
            <tr>
              <th className="text-left py-2 px-3 text-[var(--muted)] font-medium text-xs w-48">キーワード</th>
              {months.map((m) => (
                <th key={m} className="text-center py-2 px-1 text-[var(--muted)] font-medium text-xs min-w-[60px]">
                  {m}
                </th>
              ))}
              <th className="text-center py-2 px-2 text-[var(--muted)] font-medium text-xs">変動</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => {
              const lastPos = row.ranks[row.ranks.length - 1].position;
              const prevPos = row.ranks[row.ranks.length - 2]?.position ?? lastPos;
              return (
                <tr key={row.keyword}>
                  <td className="py-1.5 px-3 font-medium text-xs truncate max-w-[200px]">{row.keyword}</td>
                  {row.ranks.map((cell, i) => (
                    <td key={cell.date} className="text-center py-1.5 px-1">
                      <div
                        className="rounded-md py-1.5 font-bold text-xs transition-all hover:scale-110 cursor-default"
                        style={{
                          backgroundColor: getPositionBg(cell.position),
                          color: getTextColor(cell.position),
                          borderLeft: `3px solid ${getPositionColor(cell.position)}`,
                        }}
                        title={`${row.keyword}: ${cell.date} - ${cell.position}位`}
                      >
                        {cell.position}
                      </div>
                    </td>
                  ))}
                  <td className="text-center py-1.5 px-2">
                    <TrendArrow current={lastPos} previous={prevPos} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
