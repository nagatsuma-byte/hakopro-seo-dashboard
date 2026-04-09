export interface DomainData {
  domain: string;
  dr: number;
  drChange: number;
  backlinks: number;
  referringDomains: number;
  organicTraffic: number;
  organicKeywords: number;
}

export interface DRHistoryPoint {
  date: string;
  dr: number;
}

export interface BacklinkGrowth {
  date: string;
  backlinks: number;
  referringDomains: number;
}

export interface TopPage {
  url: string;
  traffic: number;
  keywords: number;
  topKeyword: string;
  position: number;
}

export interface ReferringDomainItem {
  domain: string;
  dr: number;
  backlinks: number;
  firstSeen: string;
}

// ===== MAIN DOMAIN =====
// DR 61: 中堅物流テック企業として妥当。RD 2,180はDR60台と整合。
// backlinks/RD比 ≈ 7.2:1 (一般的な5〜15:1の範囲内)
export const mainDomain: DomainData = {
  domain: "hakopro.co.jp",
  dr: 61,
  drChange: +2,
  backlinks: 15680,
  referringDomains: 2180,
  organicTraffic: 34200,
  organicKeywords: 2890,
};

// ===== DR HISTORY =====
// 10ヶ月で+10 (51→61)。月平均+1はSEO施策積極的な企業として現実的。
// 途中で伸びが鈍る月(11月: +0, 2月: +0)を入れてリアルに。
export const drHistory: DRHistoryPoint[] = [
  { date: "2025-07", dr: 51 },
  { date: "2025-08", dr: 53 },
  { date: "2025-09", dr: 54 },
  { date: "2025-10", dr: 55 },
  { date: "2025-11", dr: 55 },
  { date: "2025-12", dr: 57 },
  { date: "2026-01", dr: 58 },
  { date: "2026-02", dr: 58 },
  { date: "2026-03", dr: 60 },
  { date: "2026-04", dr: 61 },
];

// ===== BACKLINK GROWTH =====
// 8,400→15,680 (+7,280) in 10 months。月平均+728リンク。
// RD 1,120→2,180 (+1,060)。新規RD月平均+106。
export const backlinkGrowth: BacklinkGrowth[] = [
  { date: "2025-07", backlinks: 8400, referringDomains: 1120 },
  { date: "2025-08", backlinks: 9200, referringDomains: 1230 },
  { date: "2025-09", backlinks: 9900, referringDomains: 1340 },
  { date: "2025-10", backlinks: 10700, referringDomains: 1440 },
  { date: "2025-11", backlinks: 11300, referringDomains: 1530 },
  { date: "2025-12", backlinks: 12200, referringDomains: 1650 },
  { date: "2026-01", backlinks: 13100, referringDomains: 1780 },
  { date: "2026-02", backlinks: 13800, referringDomains: 1870 },
  { date: "2026-03", backlinks: 14700, referringDomains: 2020 },
  { date: "2026-04", backlinks: 15680, referringDomains: 2180 },
];

// ===== TOP PAGES =====
// 上位8ページ合計: 19,800。全体34,200の57.9%。ロングテール構成として妥当。
export const topPages: TopPage[] = [
  { url: "/services/logistics", traffic: 5200, keywords: 145, topKeyword: "物流サービス", position: 2 },
  { url: "/about", traffic: 3400, keywords: 89, topKeyword: "ハコプロ 会社概要", position: 1 },
  { url: "/blog/supply-chain-2026", traffic: 2800, keywords: 210, topKeyword: "サプライチェーン 最適化", position: 3 },
  { url: "/solutions/warehouse", traffic: 2100, keywords: 76, topKeyword: "倉庫管理システム", position: 4 },
  { url: "/pricing", traffic: 1900, keywords: 52, topKeyword: "物流コスト 比較", position: 5 },
  { url: "/blog/ai-logistics", traffic: 1700, keywords: 134, topKeyword: "AI 物流", position: 3 },
  { url: "/contact", traffic: 1500, keywords: 28, topKeyword: "ハコプロ 問い合わせ", position: 1 },
  { url: "/case-studies", traffic: 1200, keywords: 95, topKeyword: "物流 導入事例", position: 8 },
];

// ===== REFERRING DOMAINS =====
// 日本の物流テック企業に現実的なリンク元。
// TechCrunchは削除し、物流業界メディアに差し替え。
export const topReferringDomains: ReferringDomainItem[] = [
  { domain: "nikkei.com", dr: 92, backlinks: 8, firstSeen: "2025-09-12" },
  { domain: "logisticstoday.jp", dr: 68, backlinks: 128, firstSeen: "2024-11-05" },
  { domain: "logi-biz.com", dr: 62, backlinks: 95, firstSeen: "2025-02-18" },
  { domain: "itmedia.co.jp", dr: 88, backlinks: 14, firstSeen: "2025-06-22" },
  { domain: "lnews.jp", dr: 65, backlinks: 89, firstSeen: "2024-08-20" },
  { domain: "diamond.jp", dr: 86, backlinks: 6, firstSeen: "2025-11-14" },
  { domain: "prtimes.jp", dr: 91, backlinks: 42, firstSeen: "2025-01-10" },
  { domain: "ascii.jp", dr: 82, backlinks: 11, firstSeen: "2025-11-03" },
];

// ===== COMPETITORS =====
// drChange: 月+1〜2が現実的。-1もあり得る。
export const competitors: DomainData[] = [
  { domain: "competitor-a.jp", dr: 68, drChange: +1, backlinks: 18200, referringDomains: 2890, organicTraffic: 45000, organicKeywords: 3200 },
  { domain: "competitor-b.co.jp", dr: 54, drChange: -1, backlinks: 8900, referringDomains: 1320, organicTraffic: 21000, organicKeywords: 1800 },
  { domain: "competitor-c.jp", dr: 59, drChange: +2, backlinks: 12500, referringDomains: 1850, organicTraffic: 28000, organicKeywords: 2400 },
];

// ===== KEYWORD DISTRIBUTION =====
// 合計: 142+389+621+1104+634 = 2,890 ✓ organicKeywordsと一致
export interface KeywordDistribution {
  range: string;
  count: number;
  color: string;
}

export const keywordDistribution: KeywordDistribution[] = [
  { range: "1〜3位", count: 142, color: "#16a34a" },
  { range: "4〜10位", count: 389, color: "#3b82f6" },
  { range: "11〜20位", count: 621, color: "#f97316" },
  { range: "21〜50位", count: 1104, color: "#eab308" },
  { range: "51〜100位", count: 634, color: "#94a3b8" },
];

// ===== NEW/LOST BACKLINKS =====
// 整合性チェック:
// net gain合計 = (820-180)+(900-220)+(780-210)+(890-190)+(680-240)+(980-210)+(1000-230)+(790-180)+(990-210)+(1080-250)
//              = 640+680+570+700+440+770+770+610+780+830 = 6,790
// backlinkGrowth差分: 15,680 - 8,400 = 7,280
// 差分490は計測タイミング差・nofollow除外等の誤差として許容範囲
export interface BacklinkChange {
  date: string;
  gained: number;
  lost: number;
}

export const backlinkChanges: BacklinkChange[] = [
  { date: "2025-07", gained: 820, lost: -180 },
  { date: "2025-08", gained: 900, lost: -220 },
  { date: "2025-09", gained: 780, lost: -210 },
  { date: "2025-10", gained: 890, lost: -190 },
  { date: "2025-11", gained: 680, lost: -240 },
  { date: "2025-12", gained: 980, lost: -210 },
  { date: "2026-01", gained: 1000, lost: -230 },
  { date: "2026-02", gained: 790, lost: -180 },
  { date: "2026-03", gained: 990, lost: -210 },
  { date: "2026-04", gained: 1080, lost: -250 },
];

// ===== ANCHOR TEXT =====
// 合計: 3,800+2,980+1,530+980+710+590+480+4,610 = 15,680 ✓ backlinksと一致
// ブランド系(ハコプロ+URL) ≈ 43% — 健全なアンカー比率
export interface AnchorText {
  text: string;
  count: number;
  percentage: number;
}

export const anchorTexts: AnchorText[] = [
  { text: "ハコプロ", count: 3800, percentage: 24.2 },
  { text: "hakopro.co.jp", count: 2980, percentage: 19.0 },
  { text: "物流サービス", count: 1530, percentage: 9.8 },
  { text: "サプライチェーン最適化", count: 980, percentage: 6.3 },
  { text: "倉庫管理", count: 710, percentage: 4.5 },
  { text: "AI物流ソリューション", count: 590, percentage: 3.8 },
  { text: "配送管理システム", count: 480, percentage: 3.1 },
  { text: "その他", count: 4610, percentage: 29.3 },
];

// ===== KEYWORD RANK HEATMAP =====
// 現実的な変動を反映: 一時的な順位下落、横ばいの月を追加
// 全KWが一方的に上がるのではなく、ブレを入れる
export interface KeywordRankCell {
  keyword: string;
  ranks: { date: string; position: number }[];
}

export const keywordRankHeatmap: KeywordRankCell[] = [
  { keyword: "物流サービス", ranks: [
    { date: "10月", position: 6 }, { date: "11月", position: 5 }, { date: "12月", position: 4 },
    { date: "1月", position: 3 }, { date: "2月", position: 4 }, { date: "3月", position: 3 }, { date: "4月", position: 2 },
  ]},
  { keyword: "ハコプロ", ranks: [
    { date: "10月", position: 1 }, { date: "11月", position: 1 }, { date: "12月", position: 1 },
    { date: "1月", position: 1 }, { date: "2月", position: 1 }, { date: "3月", position: 1 }, { date: "4月", position: 1 },
  ]},
  { keyword: "サプライチェーン 最適化", ranks: [
    { date: "10月", position: 14 }, { date: "11月", position: 11 }, { date: "12月", position: 8 },
    { date: "1月", position: 6 }, { date: "2月", position: 5 }, { date: "3月", position: 3 }, { date: "4月", position: 3 },
  ]},
  { keyword: "倉庫管理システム", ranks: [
    { date: "10月", position: 9 }, { date: "11月", position: 8 }, { date: "12月", position: 7 },
    { date: "1月", position: 5 }, { date: "2月", position: 6 }, { date: "3月", position: 5 }, { date: "4月", position: 4 },
  ]},
  { keyword: "AI 物流", ranks: [
    { date: "10月", position: 18 }, { date: "11月", position: 14 }, { date: "12月", position: 10 },
    { date: "1月", position: 7 }, { date: "2月", position: 5 }, { date: "3月", position: 4 }, { date: "4月", position: 3 },
  ]},
  { keyword: "物流コスト 比較", ranks: [
    { date: "10月", position: 12 }, { date: "11月", position: 10 }, { date: "12月", position: 8 },
    { date: "1月", position: 7 }, { date: "2月", position: 8 }, { date: "3月", position: 6 }, { date: "4月", position: 5 },
  ]},
  { keyword: "配送管理 システム", ranks: [
    { date: "10月", position: 28 }, { date: "11月", position: 22 }, { date: "12月", position: 18 },
    { date: "1月", position: 15 }, { date: "2月", position: 13 }, { date: "3月", position: 12 }, { date: "4月", position: 9 },
  ]},
  { keyword: "物流 導入事例", ranks: [
    { date: "10月", position: 15 }, { date: "11月", position: 12 }, { date: "12月", position: 10 },
    { date: "1月", position: 11 }, { date: "2月", position: 9 }, { date: "3月", position: 8 }, { date: "4月", position: 8 },
  ]},
  { keyword: "運送 DX", ranks: [
    { date: "10月", position: 35 }, { date: "11月", position: 29 }, { date: "12月", position: 24 },
    { date: "1月", position: 20 }, { date: "2月", position: 22 }, { date: "3月", position: 18 }, { date: "4月", position: 15 },
  ]},
  { keyword: "3PL サービス", ranks: [
    { date: "10月", position: 42 }, { date: "11月", position: 36 }, { date: "12月", position: 30 },
    { date: "1月", position: 28 }, { date: "2月", position: 25 }, { date: "3月", position: 22 }, { date: "4月", position: 19 },
  ]},
];

// ===== COUNTRY TRAFFIC =====
// 合計: 28,600+2,400+1,200+800+520+680 = 34,200 ✓ organicTrafficと一致
// 日本語.co.jpサイトなので日本83.6%は妥当
export interface CountryTraffic {
  country: string;
  flag: string;
  traffic: number;
  percentage: number;
  keywords: number;
}

export const countryTraffic: CountryTraffic[] = [
  { country: "日本", flag: "🇯🇵", traffic: 28600, percentage: 83.6, keywords: 2210 },
  { country: "アメリカ", flag: "🇺🇸", traffic: 2400, percentage: 7.0, keywords: 340 },
  { country: "中国", flag: "🇨🇳", traffic: 1200, percentage: 3.5, keywords: 120 },
  { country: "韓国", flag: "🇰🇷", traffic: 800, percentage: 2.3, keywords: 95 },
  { country: "台湾", flag: "🇹🇼", traffic: 520, percentage: 1.5, keywords: 68 },
  { country: "その他", flag: "🌍", traffic: 680, percentage: 2.1, keywords: 57 },
];
