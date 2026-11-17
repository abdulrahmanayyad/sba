import { useMemo } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  ChevronRight,
  Layers,
  Leaf,
  ShieldCheck,
  Shirt,
  Wheat,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  GEO_REGIONS_ORDER,
  GLOBAL_MARKET_SECTORS,
  STUDY_STATUS_LABELS,
  type GlobalMarketSectorId,
  type GlobalMarketStudy,
  type StudyStatus,
} from "@/lib/global-markets-data";
import {
  getSectorMetrics,
  useGlobalMarketsStudies,
} from "@/lib/global-markets-store";

interface GlobalMarketsHomeProps {
  ar: boolean;
}

export type MarketRegionCategory = "all" | "gcc" | "arab" | "africa" | "europe" | "other";

export interface RegionCategoryConfig {
  id: MarketRegionCategory;
  titleAr: string;
  titleEn: string;
}

export const REGION_CATEGORIES: RegionCategoryConfig[] = [
  { id: "all", titleAr: "كافة الدراسات", titleEn: "All Studies" },
  { id: "gcc", titleAr: "دول الخليج", titleEn: "GCC Countries" },
  { id: "arab", titleAr: "الدول العربية", titleEn: "Arab Countries" },
  { id: "africa", titleAr: "الدول الأفريقية", titleEn: "African Countries" },
  { id: "europe", titleAr: "الدول الأوروبية", titleEn: "European Countries" },
];

const GCC_COUNTRY_CODES = new Set(["SA", "AE", "KW", "QA", "OM", "BH", "KSA", "UAE", "KWT", "QAT", "OMN", "BHR"]);

const ARAB_NON_GCC_CODES = new Set([
  "EG", "JO", "LB", "SY", "TN", "SD", "LY", "IQ", "MA", "DZ", "MR", "YE", "PS", "SO", "DJ", "KM"
]);

const EUROPE_COUNTRY_CODES = new Set([
  "DE", "GB", "UK", "FR", "ES", "IT", "NL", "PL", "BE", "SE", "AT", "DK", "CZ", "PT", "RO", "GR", "CH", "TR", "IE", "NO", "FI", "RU", "UA", "HU"
]);

const AMERICAS_COUNTRY_CODES = new Set([
  "US", "USA", "CA", "CAN", "MX", "MEX", "CL", "CHL", "CO", "COL", "PE", "PER", "PA", "PAN", "CR", "CRI", "DO", "DOM", "EC", "ECU", "BR", "BRA", "AR", "ARG"
]);

export type StudyRegionCategory = "gcc" | "arab" | "europe" | "americas" | "other";

export function getStudyRegionCategory(study: {
  countryCode?: string;
  apparelSubRegion?: string;
  region?: string;
}): StudyRegionCategory {
  const code = (study.countryCode || "").toUpperCase();
  const sub = study.apparelSubRegion || "";
  const reg = study.region || "";

  if (sub === "gcc" || GCC_COUNTRY_CODES.has(code)) return "gcc";
  if (
    sub === "other_arab" ||
    ARAB_NON_GCC_CODES.has(code) ||
    (reg === "arab_world" && !GCC_COUNTRY_CODES.has(code))
  ) {
    return "arab";
  }
  if (sub === "europe" || reg === "europe" || EUROPE_COUNTRY_CODES.has(code)) return "europe";
  if (
    sub === "north_america" ||
    sub === "south_central_america" ||
    reg === "americas" ||
    AMERICAS_COUNTRY_CODES.has(code)
  ) {
    return "americas";
  }
  return "other";
}

function getSectorIcon(sectorId: GlobalMarketSectorId) {
  switch (sectorId) {
    case "construction":
      return Building2;
    case "environmental":
      return Leaf;
    case "garment":
      return Shirt;
    case "food":
      return Wheat;
  }
}

export function GlobalMarketsHome({ ar }: GlobalMarketsHomeProps) {
  const navigate = useNavigate();
  const { studies } = useGlobalMarketsStudies();

  const activeStudies = useMemo(
    () => studies.filter((s) => s.status !== "archived"),
    [studies],
  );

  return (
    <div className="w-full pb-24">
      {/* 1. Institutional Hero Section */}
      <section className="site-container pt-10 pb-6">
        <div className="interactive-card glass-box-interactive group overflow-hidden rounded-3xl border border-white/50 bg-white/75 dark:bg-slate-900/70 p-8 sm:p-12 shadow-[0_16px_50px_rgba(15,23,42,0.06)] backdrop-blur-2xl ring-1 ring-slate-900/5 text-start space-y-7">
          <div className="relative z-10 space-y-5">
            {/* Header Badge */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-white/15 bg-slate-100/90 dark:bg-white/10 px-4 py-1.5 text-xs font-bold tracking-wide text-slate-800 dark:text-slate-100 backdrop-blur-md shadow-xs">
                <span className="size-2 rounded-full bg-brand-orange animate-pulse" />
                <span>
                  {ar
                    ? "مجموعة سامي بن عياد · مركز الأبحاث والدراسات السوقية"
                    : "SAMI BIN AYYAD GROUP · Market Research & Intelligence Center"}
                </span>
              </div>
            </div>

            {/* Title & Introductory Text */}
            <div className="space-y-3">
              <h1 className="font-head text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight text-start transition-colors duration-300 group-hover:text-brand-green-text">
                {ar ? "الأسواق العالمية" : "Global Markets"}
              </h1>

              <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-slate-600 dark:text-slate-300 max-w-4xl text-start">
                {ar
                  ? "دراسات تحليلية متخصصة للأسواق المحلية والدولية، تكشف حجم الطلب والفرص التجارية والاستثمارية، وتدعم قرارات التوسع والتصنيع والتوريد وفق بيانات موثقة وتحليلات استراتيجية."
                  : "Comprehensive market research and strategic intelligence covering local and international markets, identifying demand, trade opportunities, and investment potential through verified data and in-depth analysis."}
              </p>
            </div>

            {/* The Two Dedicated Action Boxes Under the Title */}
            <div className="grid gap-5 sm:grid-cols-2 pt-2">
              {/* Box 1: لوحة مقارنة الأسواق الدولية */}
              <div className="interactive-card glass-box-interactive group/card flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 dark:border-white/15 bg-white/85 dark:bg-slate-900/75 p-6 sm:p-7 shadow-lg backdrop-blur-2xl hover:border-brand-green/50 hover:-translate-y-1 transition-all">
                <div className="space-y-4 text-start">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 rounded-full bg-brand-green/10 px-3 py-1 text-[11px] font-extrabold text-brand-green border border-brand-green/20">
                      {ar ? "مقارنات تفاعلية معتمدة" : "Verified Benchmarks"}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-head text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white group-hover/card:text-brand-green-text transition-colors">
                      {ar ? "لوحة مقارنة الأسواق الدولية" : "Global Markets Comparative Dashboard"}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {ar
                        ? "مقارنة تفاعلية شاملة بين الأسواق والفرص الاستثمارية ومؤشرات الطلب والتجارة وسلاسل الإمداد عبر الرسوم البيانية والجداول التحليلية المعتمدة."
                        : "Interactive comprehensive comparison across international markets, trade indicators, and investment opportunities through verified analytical tables."}
                    </p>
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-200/70 dark:border-white/10">
                  <Link
                    to="/global-markets/$sector/$slug"
                    params={{ sector: "garment", slug: "compare" }}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-green px-5 py-3 text-xs sm:text-sm font-bold text-white hover:bg-brand-orange transition-all duration-300 shadow-sm cursor-pointer"
                  >
                    <span>{ar ? "فتح لوحة مقارنة الأسواق الدولية" : "Open Comparative Dashboard"}</span>
                  </Link>
                </div>
              </div>

              {/* Box 2: إدارة الدراسات والتحديثات */}
              <div className="interactive-card glass-box-interactive group/card flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 dark:border-white/15 bg-white/85 dark:bg-slate-900/75 p-6 sm:p-7 shadow-lg backdrop-blur-2xl hover:border-brand-green/50 hover:-translate-y-1 transition-all">
                <div className="space-y-4 text-start">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 rounded-full bg-brand-green/10 px-3 py-1 text-[11px] font-extrabold text-brand-green border border-brand-green/20">
                      {ar ? "منظومة التحكم المركزي" : "Central CMS Hub"}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-head text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white group-hover/card:text-brand-green-text transition-colors">
                      {ar ? "إدارة الدراسات والتحديثات" : "Studies Registry & CMS"}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {ar
                        ? "لوحة التحكم لإدارة سجل الدراسات السوقية، ومتابعة تواريخ التحديث، والتحقق من المعايير، واستيراد أو نشر وتحديث بيانات القطاعات."
                        : "Administrative dashboard to manage market studies registry, monitor update cycles, verify compliance, and import or publish sector intelligence."}
                    </p>
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-200/70 dark:border-white/10">
                  <Link
                    to="/global-markets/manage"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-green px-5 py-3 text-xs sm:text-sm font-bold text-white hover:bg-brand-orange transition-all duration-300 shadow-sm cursor-pointer"
                  >
                    <span>{ar ? "الدخول إلى إدارة الدراسات والتحديثات" : "Access Studies Registry & CMS"}</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Verified Readiness Summary Bar */}
            <div className="pt-4 border-t border-slate-200/70 dark:border-white/10 grid gap-3 sm:grid-cols-3 text-xs">
              <div className="rounded-2xl border border-slate-200/70 dark:border-white/10 bg-slate-50/80 dark:bg-white/5 px-4 py-3 text-start">
                <span className="text-slate-500 dark:text-slate-400 block font-semibold">
                  {ar ? "القطاعات الاستراتيجية" : "Core Strategic Sectors"}
                </span>
                <span className="font-head text-base font-extrabold text-slate-900 dark:text-white mt-0.5 block">
                  {ar ? "4 قطاعات" : "4 Sectors"}
                </span>
              </div>

              <div className="rounded-2xl border border-slate-200/70 dark:border-white/10 bg-slate-50/80 dark:bg-white/5 px-4 py-3 text-start">
                <span className="text-slate-500 dark:text-slate-400 block font-semibold">
                  {ar ? "الدراسات المنشورة" : "Published Studies Count"}
                </span>
                <span className="font-head text-base font-extrabold text-slate-900 dark:text-white mt-0.5 block">
                  {activeStudies.length > 0
                    ? ar
                      ? `${activeStudies.length} دراسة موثقة`
                      : `${activeStudies.length} Verified Studies`
                    : ar
                      ? "0 (جاهز لاستقبال الدراسات المعتمدة)"
                      : "0 (Ready to Receive Approved Studies)"}
                </span>
              </div>

              <div className="rounded-2xl border border-slate-200/70 dark:border-white/10 bg-slate-50/80 dark:bg-white/5 px-4 py-3 text-start">
                <span className="text-slate-500 dark:text-slate-400 block font-semibold">
                  {ar ? "منهجية التوثيق" : "Verification Standard"}
                </span>
                <span className="font-head text-base font-extrabold text-brand-green mt-0.5 block">
                  {ar ? "18 محور تحليلي · مصادر موثقة" : "18 Analytical Axes · Cited Sources"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Sectors Container — 4 Core Strategic Sectors */}
      <section className="site-container space-y-8">
        {GLOBAL_MARKET_SECTORS.map((sector) => {
          const Icon = getSectorIcon(sector.id);
          const metrics = getSectorMetrics(sector.id, studies);
          const statusCfg = STUDY_STATUS_LABELS[metrics.status];
          const sectorStudies = activeStudies.filter((s) => s.sector === sector.id);

          return (
            <div
              key={sector.id}
              role="button"
              tabIndex={0}
              onClick={() => navigate({ to: "/global-markets/$sector", params: { sector: sector.id } })}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  navigate({ to: "/global-markets/$sector", params: { sector: sector.id } });
                }
              }}
              className="interactive-card glass-box-interactive group overflow-hidden rounded-3xl border border-slate-200/80 dark:border-white/15 bg-white/85 dark:bg-slate-900/75 shadow-xl backdrop-blur-2xl transition-all duration-300 hover:border-brand-green/50 hover:shadow-2xl cursor-pointer"
            >
              {/* Sector Header Banner */}
              <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={sector.image}
                  alt={ar ? sector.nameAr : sector.nameEn}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

                {/* Bottom Title Area */}
                <div className="absolute bottom-5 start-5 end-5 flex items-center justify-between text-white">
                  <Link
                    to="/global-markets/$sector"
                    params={{ sector: sector.id }}
                    className="flex items-center gap-3.5 text-start group/title hover:opacity-95 transition-opacity"
                  >
                    <div className="size-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shrink-0 shadow-sm group-hover/title:bg-brand-green/40 transition-colors">
                      <Icon className="size-6 text-white" />
                    </div>
                    <div>
                      <h2 className="font-head text-2xl sm:text-3xl font-extrabold !text-white leading-tight group-hover/title:text-brand-orange transition-colors">
                        {ar ? sector.nameAr : sector.nameEn}
                      </h2>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Sector Overview & Metrics Bar */}
              <div className="p-6 sm:p-8 space-y-6 text-start">
                <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
                  <div className="lg:col-span-8 space-y-3">
                    {(ar ? sector.shortDescAr : sector.shortDescEn) && (
                      <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                        {ar ? sector.shortDescAr : sector.shortDescEn}
                      </p>
                    )}

                    {(ar ? sector.topicsAr : sector.topicsEn).length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {(ar ? sector.topicsAr : sector.topicsEn).slice(0, 8).map((topic, idx) => (
                          <span
                            key={idx}
                            className="rounded-lg border border-slate-200/80 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-2.5 py-1 text-[11px] font-semibold text-slate-700 dark:text-slate-300"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="lg:col-span-4 grid grid-cols-3 gap-2 text-[11px]">
                    <div className="rounded-2xl bg-slate-50/90 dark:bg-white/5 p-3 border border-slate-200/60 dark:border-white/10 flex flex-col items-center justify-center text-center">
                      <span className="text-slate-500 dark:text-slate-400 block text-[10px] text-center w-full">
                        {ar ? "الدراسات المنشورة" : "Published"}
                      </span>
                      <span className="font-head text-base font-extrabold text-slate-900 dark:text-white mt-1 block text-center w-full">
                        {metrics.publishedCount > 0
                          ? metrics.publishedCount
                          : ar
                            ? "لم يُنشر بعد"
                            : "None yet"}
                      </span>
                    </div>

                    <div className="rounded-2xl bg-slate-50/90 dark:bg-white/5 p-3 border border-slate-200/60 dark:border-white/10 flex flex-col items-center justify-center text-center">
                      <span className="text-slate-500 dark:text-slate-400 block text-[10px] text-center w-full">
                        {ar ? "حالة القطاع" : "Status"}
                      </span>
                      <span className="font-bold text-slate-900 dark:text-white mt-1 block text-xs text-center w-full">
                        {ar ? statusCfg.ar : statusCfg.en}
                      </span>
                    </div>

                    <div className="rounded-2xl bg-slate-50/90 dark:bg-white/5 p-3 border border-slate-200/60 dark:border-white/10 flex flex-col items-center justify-center text-center">
                      <span className="text-slate-500 dark:text-slate-400 block text-[10px] text-center w-full">
                        {ar ? "آخر تحديث" : "Updated"}
                      </span>
                      <span className="font-bold text-slate-900 dark:text-white mt-1 block text-xs text-center w-full">
                        {metrics.lastUpdatedYear ?? (ar ? "قيد البحث" : "In Progress")}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Sector Footer Action */}
                <div className="pt-4 border-t border-slate-200/70 dark:border-white/10 flex flex-wrap items-center justify-end gap-3">
                  <Link
                    to="/global-markets/$sector"
                    params={{ sector: sector.id }}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-green px-5 py-2.5 text-xs sm:text-sm font-bold text-white hover:bg-brand-orange transition-all duration-300 shadow-sm cursor-pointer"
                  >
                    <span>{ar ? "استعراض كافة دراسات وتحليلات القطاع" : "Explore All Sector Studies & Analysis"}</span>
                    {ar ? <ArrowLeft className="size-4" /> : <ArrowRight className="size-4" />}
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
