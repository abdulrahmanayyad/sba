const fs = require('fs');
const path = require('path');

const backupPath = path.join(__dirname, '..', 'src', 'components', 'news', 'news-data.backup.ts');
const targetPath = path.join(__dirname, '..', 'src', 'components', 'news', 'news-data.ts');

const backupContent = fs.readFileSync(backupPath, 'utf8');

// The 39 real image filenames
const realImages = [
  "sami-trade-news-01-general-contracting-expansion.png",
  "sami-trade-news-02-mep-systems-projects.png",
  "sami-trade-news-03-medical-facilities-expansion.png",
  "sami-trade-news-04-real-estate-development.png",
  "sami-trade-news-05-infrastructure-utilities.png",
  "sami-trade-news-06-industrial-buildings-precast.png",
  "sami-trade-news-07-oil-gas-energy-facilities.png",
  "sami-trade-news-08-commercial-complexes-malls.png",
  "sami-trade-news-09-luxury-interior-decor.png",
  "sami-trade-news-10-engineering-project-management.png",
  "sami-trade-news-11-environmental-impact-assessment.png",
  "sami-trade-news-12-esia-social-assessment.png",
  "sami-trade-news-13-carbon-footprint-reporting.png",
  "sami-trade-news-14-field-environmental-monitoring.png",
  "sami-trade-news-15-integrated-waste-management.png",
  "sami-trade-news-16-hazardous-waste-chemicals.png",
  "sami-trade-news-17-waste-to-energy-projects.png",
  "sami-trade-news-18-biogas-renewable-solutions.png",
  "sami-trade-news-19-esg-sustainability-strategies.png",
  "sami-trade-news-20-iso-environmental-certification.png",
  "sami-trade-news-21-hse-digital-solutions.png",
  "sami-trade-news-22-biotech-applied-research.png",
  "sami-trade-news-23-oem-manufacturing-partnership.png",
  "sami-trade-news-24-odm-design-manufacturing.png",
  "sami-trade-news-25-private-label-garments.png",
  "sami-trade-news-26-fob-export-programs.png",
  "sami-trade-news-27-pattern-engineering-lab.png",
  "sami-trade-news-28-rapid-prototyping-samples.png",
  "sami-trade-news-29-mass-industrial-production.png",
  "sami-trade-news-30-fabrics-dyeing-supply.png",
  "sami-trade-news-31-pure-honey-beekeeping.png",
  "sami-trade-news-32-table-olives-export.png",
  "sami-trade-news-33-cold-pressed-olive-oil.png",
  "sami-trade-news-34-premium-dates-supply.png",
  "sami-trade-news-35-herbs-spices-export.png",
  "sami-trade-news-36-botanical-beverage-powders.png",
  "sami-trade-news-37-agricultural-commodities-trade.png",
  "sami-trade-news-38-corporate-expansion-milestone.png",
  "sami-trade-news-39-international-trade-agreements.png"
];

// Extract the original articles array definition
const startIdx = backupContent.indexOf('export const newsArticles: NewsArticle[] = [');
const endIdx = backupContent.indexOf('export function getLatestNewsArticles()');

if (startIdx === -1 || endIdx === -1) {
  console.error('Could not find start/end of newsArticles');
  process.exit(1);
}

let articlesBlock = backupContent.slice(startIdx, endIdx);

// Replace each image in the 39 articles with its matching real image if exists
realImages.forEach((img, i) => {
  const numStr = (i + 1).toString().padStart(2, '0');
  const targetId = `"id": "sba-news-${numStr}"`;
  const nextTargetId = i < 38 ? `"id": "sba-news-${(i + 2).toString().padStart(2, '0')}"` : '];';
  
  const posA = articlesBlock.indexOf(targetId);
  const posB = articlesBlock.indexOf(nextTargetId, posA + 1);
  
  if (posA !== -1 && posB !== -1) {
    const itemChunk = articlesBlock.slice(posA, posB);
    const updatedChunk = itemChunk.replace(
      /"image":\s*"[^"]+"/,
      `"image": "/sami_trade_real_images/${img}"`
    );
    articlesBlock = articlesBlock.slice(0, posA) + updatedChunk + articlesBlock.slice(posB);
  }
});

const headerContent = `// ============================================================================
// SAMI BIN AYYAD GROUP — HISTORICAL CORPORATE ARCHIVE & NEWS (1977–2026)
// Complete verified database of 50 multi-sector records:
//   - 7 Official Historical Milestones (1977–2023)
//   - 3 Official Economic Indicators (OECD, NBE, IDSC)
//   - 11 Historical Sector Insights & Market Reviews (2010–2020)
//   - 39 Verified Corporate News & Sector Reports (2020–2026)
// ============================================================================

import {
  HISTORICAL_ARTICLES_2010_2020,
  OFFICIAL_TIMELINE_MILESTONES,
  ECONOMIC_INDICATORS,
  type LegacyMilestone,
  type EconomicIndicator,
  type HistoricalArticle
} from "./legacy-data";

export {
  OFFICIAL_TIMELINE_MILESTONES,
  ECONOMIC_INDICATORS,
  HISTORICAL_ARTICLES_2010_2020,
  type LegacyMilestone,
  type EconomicIndicator,
  type HistoricalArticle
};

export type NewsSectorType =
  | "all"
  | "corporate"
  | "construction"
  | "environmental"
  | "garment"
  | "food"
  | "heritage"
  | "exhibitions"
  | "insights";

export type NewsCategoryType = NewsSectorType;

export type NewsContentType =
  | "corporate_milestone"
  | "corporate_news"
  | "industry_insight"
  | "historical_review"
  | "exhibition_event"
  | "market_data";

export interface NewsCategory {
  id: NewsSectorType;
  titleEn: string;
  titleAr: string;
  descEn: string;
  descAr: string;
}

export const newsCategories: NewsCategory[] = [
  {
    id: "all",
    titleEn: "All News & Historical Archive",
    titleAr: "كافة الأخبار والأرشيف الشامل",
    descEn: "Complete historical timeline of corporate milestones, sector insights, and market reviews (2010–2026).",
    descAr: "الأرشيف التوثيقي الشامل للمحطات المؤسسية، التحليلات القطاعية، ومتابعات الأسواق (2010–2026)."
  },
  {
    id: "corporate",
    titleEn: "Corporate News & Activities",
    titleAr: "أخبار المجموعة والأنشطة المؤسسية",
    descEn: "Strategic corporate developments, institutional milestones, market outreach, and multi-sector expansion under Sami Bin Ayyad Group.",
    descAr: "التطورات الاستراتيجية، المحطات المؤسسية، والتواصل مع الأسواق لأنشطة مجموعة سامي بن عياد وتطور منظومتها."
  },
  {
    id: "construction",
    titleEn: "Construction & Real Estate",
    titleAr: "المقاولات والتطوير العقاري",
    descEn: "Market observations, real estate exhibitions, urban developments, and contracting opportunities across commercial and civil works.",
    descAr: "متابعة السوق العقاري، مشروعات البنية التحتية، المشروعات العمرانية الكبرى، وفرص أعمال المقاولات العامة والتشطيبات."
  },
  {
    id: "environmental",
    titleEn: "Environment & Sustainability",
    titleAr: "البيئة والاستدامة",
    descEn: "Environmental engineering, water treatment technologies, industrial sustainability studies, and clean energy transition.",
    descAr: "الاستشارات والحلول البيئية، تكنولوجيا معالجة المياه والصرف الصناعي، والتحول نحو الطاقة النظيفة وخفض الانبعاثات."
  },
  {
    id: "garment",
    titleEn: "Manufacturing & Textiles",
    titleAr: "التصنيع والملابس والمنسوجات",
    descEn: "Textile machinery technologies, ready-made garment manufacturing lines, fashion trends, and supply chain expansion.",
    descAr: "تكنولوجيا صناعة الغزل والنسيج، خطوط تصنيع الملابس الجاهزة، اتجاهات الموضة العالمية، وسلاسل إمداد الأقمشة والتصدير."
  },
  {
    id: "food",
    titleEn: "Food & Trade",
    titleAr: "الأغذية والتجارة",
    descEn: "Agri-food export supply, natural honey, dates, olive oil, and regional commercial trade across African and Arab markets.",
    descAr: "توريد وتصدير المنتجات الزراعية والغذائية الطبيعية، العسل، التمور، زيت الزيتون، والأعشاب، والتجارة الإقليمية."
  },
  {
    id: "heritage",
    titleEn: "Research & Heritage",
    titleAr: "البحث العلمي وتطوير التراث",
    descEn: "Applied research programs, heritage documentation, and cultural preservation initiatives.",
    descAr: "برامج البحث العلمي التطبيقي، توثيق التراث، ومبادرات الحفاظ على الموروث الثقافي والتاريخي."
  },
  {
    id: "exhibitions",
    titleEn: "Exhibitions & Events",
    titleAr: "المعارض والفعاليات",
    descEn: "Specialized international expos, trade fairs, and industrial networking across MENA and global forums.",
    descAr: "المعارض الدولية المتخصصة، الملتقيات الاقتصادية، والفعاليات الصناعية والتجارية."
  },
  {
    id: "insights",
    titleEn: "Market Insights & Historical Reviews",
    titleAr: "رؤى وتحليلات السوق والأرشيف",
    descEn: "In-depth sector analyses, historical market evolution, and macroeconomic supply chain studies.",
    descAr: "دراسات تحليلية متعمقة لتطور الأسواق والقطاعات والتحولات الاقتصادية الكبرى (2010–2020)."
  }
];

export interface NewsArticle {
  id: string;
  slug: string;
  sector: NewsSectorType;
  category: string;
  categoryAr: string;
  categoryEn: string;
  year: number;
  historicalRefYear?: number;
  publishedAt: string;
  actualPublishDate?: string;
  dateEn: string;
  dateAr: string;
  eventDateEn?: string;
  eventDateAr?: string;
  readingTimeEn: string;
  readingTimeAr: string;
  titleEn: string;
  titleAr: string;
  excerptEn: string;
  excerptAr: string;
  bodyEn: string;
  bodyAr: string;
  image: string;
  imageAltEn: string;
  imageAltAr: string;
  seoTitleEn: string;
  seoTitleAr: string;
  seoDescEn: string;
  seoDescAr: string;
  keywords: string[];
  featured?: boolean;
  type?: "external" | "insight";
  contentType?: NewsContentType;
  indicatorId?: string;
  countryTagAr?: string;
  countryTagEn?: string;
  sourceName?: string;
  sourceUrl?: string;
}

// Convert 11 Historical Analysis Articles (2010–2020) into NewsArticle format
const historicalNewsArticles: NewsArticle[] = HISTORICAL_ARTICLES_2010_2020.map((h) => ({
  id: h.id,
  slug: h.slug,
  sector: h.sector as NewsSectorType,
  category: h.categoryEn,
  categoryAr: h.categoryAr,
  categoryEn: h.categoryEn,
  year: h.historicalYear,
  historicalRefYear: h.historicalYear,
  publishedAt: h.publishedAt,
  actualPublishDate: h.publishedAt,
  dateAr: h.dateAr,
  dateEn: h.dateEn,
  readingTimeAr: h.readingTimeAr,
  readingTimeEn: h.readingTimeEn,
  titleAr: h.titleAr,
  titleEn: h.titleEn,
  excerptAr: h.excerptAr,
  excerptEn: h.excerptEn,
  bodyAr: h.bodyAr,
  bodyEn: h.bodyEn,
  image: h.image,
  imageAltAr: h.imageAltAr,
  imageAltEn: h.imageAltEn,
  seoTitleAr: h.seoTitleAr,
  seoTitleEn: h.seoTitleEn,
  seoDescAr: h.seoDescAr,
  seoDescEn: h.seoDescEn,
  keywords: h.keywords,
  type: "insight",
  contentType: h.contentType,
  indicatorId: h.indicatorId,
  countryTagAr: "مصر",
  countryTagEn: "Egypt",
  sourceName: h.indicatorId ? "OECD / NBE Economic Data" : undefined
}));

// Base 39 Verified Corporate News & Sector Articles (2020–2026)
const modernCorporateArticles: NewsArticle[] = ${articlesBlock.replace('export const newsArticles: NewsArticle[] = ', '')};

// Unified Archive: Historical Sector Insights (2010–2020) + Modern Corporate News (2020–2026)
export const newsArticles: NewsArticle[] = [
  ...modernCorporateArticles,
  ...historicalNewsArticles
];

/**
 * Returns articles sorted from latest to oldest (default for global newsroom).
 */
export function getLatestNewsArticles(): NewsArticle[] {
  return [...newsArticles].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

/**
 * Returns articles sorted from oldest to newest (for historical sector archive).
 */
export function getHistoricalNewsArticles(sector?: NewsSectorType): NewsArticle[] {
  const filtered = sector && sector !== "all" 
    ? newsArticles.filter((a) => a.sector === sector)
    : [...newsArticles];
  return filtered.sort((a, b) => (a.historicalRefYear || a.year) - (b.historicalRefYear || b.year));
}

/**
 * Returns exclusively the 11 historical analysis articles (2010–2020).
 */
export function getHistoricalAnalysisArticles(): NewsArticle[] {
  return [...historicalNewsArticles].sort((a, b) => (a.historicalRefYear || a.year) - (b.historicalRefYear || b.year));
}

/**
 * Returns exclusively the 39 corporate news articles (2020–2026).
 */
export function getModernCorporateArticles(): NewsArticle[] {
  return [...modernCorporateArticles].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

/**
 * Available archive years spanning 2010 through 2026
 */
export const ARCHIVE_YEARS = [
  2026, 2025, 2024, 2023, 2022, 2021, 2020,
  2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010
] as const;

export type ArchiveYear = typeof ARCHIVE_YEARS[number];
`;

fs.writeFileSync(targetPath, headerContent, 'utf8');
console.log('Successfully updated src/components/news/news-data.ts!');

