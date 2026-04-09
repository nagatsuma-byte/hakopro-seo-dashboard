import DRScoreCircle from "@/components/DRScoreCircle";
import MetricCard from "@/components/MetricCard";
import {
  DRHistoryChart,
  BacklinkGrowthChart,
  CompetitorChart,
  KeywordDistributionChart,
  BacklinkChangesChart,
  AnchorTextChart,
} from "@/components/Charts";
import TopPagesTable from "@/components/TopPagesTable";
import ReferringDomainsTable from "@/components/ReferringDomainsTable";
import CountryTrafficTable from "@/components/CountryTrafficTable";
import KeywordRankHeatmap from "@/components/KeywordRankHeatmap";
import DarkModeToggle from "@/components/DarkModeToggle";
import {
  mainDomain,
  drHistory,
  backlinkGrowth,
  topPages,
  topReferringDomains,
  competitors,
  keywordDistribution,
  backlinkChanges,
  anchorTexts,
  countryTraffic,
  keywordRankHeatmap,
} from "@/lib/dummy-data";

function LinkIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function TrendIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-4">
      <h2 className="text-lg font-bold">{title}</h2>
      {subtitle && <p className="text-sm text-[var(--muted)]">{subtitle}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "var(--background)", color: "var(--foreground)" }}>
      {/* Header */}
      <header className="header-bg sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">HP</span>
              </div>
              <h1 className="text-lg font-bold">ハコプロ SEO Dashboard</h1>
            </div>
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 rounded-lg px-3 py-2 border border-[var(--border)]" style={{ background: "var(--card-bg)" }}>
                <SearchIcon />
                <input
                  type="text"
                  placeholder="ドメインを入力..."
                  defaultValue={mainDomain.domain}
                  className="bg-transparent text-sm outline-none w-48"
                />
              </div>
              <DarkModeToggle />
              <span className="text-xs text-[var(--muted)] hidden sm:block">最終更新: 2026-04-04</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* ===== SECTION 1: Domain Overview ===== */}
        <div className="card p-6">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="shrink-0">
              <DRScoreCircle score={mainDomain.dr} change={mainDomain.drChange} />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-2xl font-bold mb-1">{mainDomain.domain}</h2>
              <p className="text-[var(--muted)] text-sm mb-4">ドメインレーティング概要</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <MetricCard label="被リンク数" value={mainDomain.backlinks} icon={<LinkIcon />} subtitle="Total Backlinks" />
                <MetricCard label="参照ドメイン数" value={mainDomain.referringDomains} icon={<GlobeIcon />} subtitle="Referring Domains" />
                <MetricCard label="オーガニックトラフィック" value={mainDomain.organicTraffic} icon={<TrendIcon />} subtitle="月間推定流入" />
                <MetricCard label="オーガニックキーワード" value={mainDomain.organicKeywords} icon={<SearchIcon />} subtitle="ランクインKW数" />
              </div>
            </div>
          </div>
        </div>

        {/* ===== SECTION 2: DR & Backlink Trends ===== */}
        <div>
          <SectionHeader title="トレンド分析" subtitle="DR・被リンクの推移" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <DRHistoryChart data={drHistory} />
            <BacklinkGrowthChart data={backlinkGrowth} />
          </div>
        </div>

        {/* ===== SECTION 3: Keyword & Backlink Changes ===== */}
        <div>
          <SectionHeader title="キーワード & リンク分析" subtitle="順位分布と新規・消失リンク" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <KeywordDistributionChart data={keywordDistribution} />
            <BacklinkChangesChart data={backlinkChanges} />
          </div>
        </div>

        {/* ===== SECTION 3.5: Keyword Rank Heatmap ===== */}
        <div>
          <SectionHeader title="順位変動ヒートマップ" subtitle="主要キーワードの月別順位推移をカラーで可視化" />
          <KeywordRankHeatmap data={keywordRankHeatmap} />
        </div>

        {/* ===== SECTION 4: Anchor Text & Country Traffic ===== */}
        <div>
          <SectionHeader title="アンカーテキスト & 国別分析" subtitle="リンクのアンカーテキスト構成と地域別トラフィック" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <AnchorTextChart data={anchorTexts} />
            <CountryTrafficTable data={countryTraffic} />
          </div>
        </div>

        {/* ===== SECTION 5: Competitor Comparison ===== */}
        <div>
          <SectionHeader title="競合比較" subtitle="主要競合サイトとのパフォーマンス比較" />
          <CompetitorChart main={mainDomain} competitors={competitors} />
        </div>

        {/* ===== SECTION 6: Tables ===== */}
        <div>
          <SectionHeader title="詳細データ" subtitle="トップページと参照ドメイン" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <TopPagesTable pages={topPages} />
            <ReferringDomainsTable domains={topReferringDomains} />
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-xs text-[var(--muted)] py-4 border-t border-[var(--border)]">
          <p>ハコプロ SEO Dashboard - ドメインレーティングスコア可視化ツール</p>
          <p className="mt-1">データはダミーデータです。実際のSEOデータではありません。</p>
        </footer>
      </main>
    </div>
  );
}
