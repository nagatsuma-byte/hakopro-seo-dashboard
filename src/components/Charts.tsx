"use client";

import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  ReferenceLine,
} from "recharts";
import type {
  DRHistoryPoint,
  BacklinkGrowth,
  DomainData,
  KeywordDistribution,
  BacklinkChange,
  AnchorText,
} from "@/lib/dummy-data";

const tooltipStyle = {
  borderRadius: "8px",
  border: "1px solid #e2e8f0",
  boxShadow: "0 4px 6px rgba(0,0,0,0.07)",
};

export function DRHistoryChart({ data }: { data: DRHistoryPoint[] }) {
  return (
    <div className="card p-6">
      <h3 className="text-base font-semibold mb-4">DR スコア推移</h3>
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
          <XAxis dataKey="date" tick={{ fontSize: 12 }} stroke="#94a3b8" />
          <YAxis domain={[45, 70]} tick={{ fontSize: 12 }} stroke="#94a3b8" />
          <Tooltip contentStyle={tooltipStyle} />
          <Line
            type="monotone"
            dataKey="dr"
            stroke="#1e40af"
            strokeWidth={3}
            dot={{ fill: "#1e40af", strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6 }}
            name="DR スコア"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export function BacklinkGrowthChart({ data }: { data: BacklinkGrowth[] }) {
  return (
    <div className="card p-6">
      <h3 className="text-base font-semibold mb-4">被リンク増加推移</h3>
      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
          <XAxis dataKey="date" tick={{ fontSize: 12 }} stroke="#94a3b8" />
          <YAxis tick={{ fontSize: 12 }} stroke="#94a3b8" />
          <Tooltip contentStyle={tooltipStyle} />
          <Legend />
          <Area type="monotone" dataKey="backlinks" stroke="#3b82f6" fill="#dbeafe" strokeWidth={2} name="被リンク数" />
          <Area type="monotone" dataKey="referringDomains" stroke="#f97316" fill="#fed7aa" strokeWidth={2} name="参照ドメイン数" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export function CompetitorChart({ main, competitors }: { main: DomainData; competitors: DomainData[] }) {
  const data = [
    { name: main.domain.replace(".co.jp", "").replace(".jp", ""), DR: main.dr, 被リンク: Math.round(main.backlinks / 100) },
    ...competitors.map((c) => ({
      name: c.domain.replace(".co.jp", "").replace(".jp", ""),
      DR: c.dr,
      被リンク: Math.round(c.backlinks / 100),
    })),
  ];

  return (
    <div className="card p-6">
      <h3 className="text-base font-semibold mb-4">競合比較</h3>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data} barGap={4}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
          <XAxis dataKey="name" tick={{ fontSize: 11 }} stroke="#94a3b8" />
          <YAxis tick={{ fontSize: 12 }} stroke="#94a3b8" />
          <Tooltip contentStyle={tooltipStyle} />
          <Legend />
          <Bar dataKey="DR" fill="#1e40af" radius={[4, 4, 0, 0]} name="DR スコア" />
          <Bar dataKey="被リンク" fill="#f97316" radius={[4, 4, 0, 0]} name="被リンク (x100)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

// --- NEW CHARTS ---

export function KeywordDistributionChart({ data }: { data: KeywordDistribution[] }) {
  const total = data.reduce((sum, d) => sum + d.count, 0);

  return (
    <div className="card p-6">
      <h3 className="text-base font-semibold mb-4">キーワード順位分布</h3>
      <div className="flex flex-col lg:flex-row items-center gap-4">
        <ResponsiveContainer width="100%" height={240}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={3}
              dataKey="count"
              nameKey="range"
            >
              {data.map((entry, i) => (
                <Cell key={i} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={tooltipStyle}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              formatter={(value: any, name: any) => [`${Number(value).toLocaleString()} KW`, String(name)]}
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="w-full lg:w-56 shrink-0 space-y-2">
          {data.map((d) => (
            <div key={d.range} className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: d.color }} />
                <span>{d.range}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-semibold">{d.count.toLocaleString()}</span>
                <span className="text-[var(--muted)] text-xs w-12 text-right">
                  {((d.count / total) * 100).toFixed(1)}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function BacklinkChangesChart({ data }: { data: BacklinkChange[] }) {
  return (
    <div className="card p-6">
      <h3 className="text-base font-semibold mb-4">新規・消失バックリンク推移</h3>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data} barGap={0}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
          <XAxis dataKey="date" tick={{ fontSize: 12 }} stroke="#94a3b8" />
          <YAxis tick={{ fontSize: 12 }} stroke="#94a3b8" />
          <Tooltip contentStyle={tooltipStyle} />
          <Legend />
          <ReferenceLine y={0} stroke="#94a3b8" strokeWidth={1} />
          <Bar dataKey="gained" fill="#16a34a" radius={[4, 4, 0, 0]} name="新規リンク" />
          <Bar dataKey="lost" fill="#ef4444" radius={[0, 0, 4, 4]} name="消失リンク" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function AnchorTextChart({ data }: { data: AnchorText[] }) {
  const colors = ["#1e40af", "#3b82f6", "#60a5fa", "#93c5fd", "#f97316", "#fb923c", "#fdba74", "#94a3b8"];

  return (
    <div className="card p-6">
      <h3 className="text-base font-semibold mb-4">アンカーテキスト分析</h3>
      <div className="space-y-3">
        {data.map((item, i) => (
          <div key={item.text}>
            <div className="flex items-center justify-between text-sm mb-1">
              <span className="font-medium truncate max-w-[200px]">{item.text}</span>
              <div className="flex items-center gap-3 shrink-0">
                <span className="text-[var(--muted)]">{item.count.toLocaleString()}</span>
                <span className="font-semibold w-14 text-right">{item.percentage}%</span>
              </div>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="h-2.5 rounded-full transition-all duration-500"
                style={{ width: `${item.percentage}%`, backgroundColor: colors[i % colors.length] }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
