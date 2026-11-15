import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  ChevronRight,
  Download,
  FileSpreadsheet,
  FolderCog,
  Globe,
  Layers,
  Leaf,
  MapPin,
  Scale,
  Search,
  ShieldCheck,
  Shirt,
  Sparkles,
  Wheat,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  GEO_REGIONS_ORDER,
  GLOBAL_MARKET_SECTORS,

  STUDY_SECTION_BLUEPRINT,
  STUDY_STATUS_LABELS,
  type GlobalMarketSectorId,
  type GlobalMarketStudy,
  type StudyStatus,
} from "@/lib/global-markets-data";
import {
  getSectorMetrics,
  isStudyDownloadAllowed,
  openApprovedStudyPdfReport,
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

export function getStudyRegionCategory(study: {
  countryCode?: string;
  apparelSubRegion?: string;
  region?: string;
}): "gcc" | "arab" | "africa" | "europe" | "other" {
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
  if (sub === "africa" || reg === "africa") return "africa";
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
  const { studies } = useGlobalMarketsStudies();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSector, setSelectedSector] = useState<"all" | GlobalMarketSectorId>("all");
  const [sectorCategoryFilters, setSectorCategoryFilters] = useState<Record<string, MarketRegionCategory>>({
    garment: "all",
    environmental: "all",
    construction: "all",
    food: "all",
  });

  const activeStudies = useMemo(
    () => studies.filter((s) => s.status !== "archived"),
    [studies],
  );

  const setCategoryForSector = (sectorId: string, cat: MarketRegionCategory) => {
    setSectorCategoryFilters((prev) => ({
      ...prev,
      [sectorId]: cat,
    }));
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedSector("all");
    setSectorCategoryFilters({
      garment: "all",
      environmental: "all",
      construction: "all",
      food: "all",
    });
  };

  const hasActiveSearch = Boolean(searchQuery.trim());

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
                    <div className="size-12 rounded-2xl bg-brand-green/10 border border-brand-green/20 flex items-center justify-center text-brand-green group-hover/card:scale-105 transition-transform shadow-xs">
                      <Scale className="size-6 text-brand-green" />
                    </div>
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
                    {ar ? <ArrowLeft className="size-4" /> : <ArrowRight className="size-4" />}
                  </Link>
                </div>
              </div>

              {/* Box 2: إدارة الدراسات والتحديثات */}
              <div className="interactive-card glass-box-interactive group/card flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 dark:border-white/15 bg-white/85 dark:bg-slate-900/75 p-6 sm:p-7 shadow-lg backdrop-blur-2xl hover:border-brand-green/50 hover:-translate-y-1 transition-all">
                <div className="space-y-4 text-start">
                  <div className="flex items-center justify-between">
                    <div className="size-12 rounded-2xl bg-brand-green/10 border border-brand-green/20 flex items-center justify-center text-brand-green group-hover/card:scale-105 transition-transform shadow-xs">
                      <FolderCog className="size-6 text-brand-green" />
                    </div>
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
                    {ar ? <ArrowLeft className="size-4" /> : <ArrowRight className="size-4" />}
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

      {/* 2. Interactive Global Search Bar & Sector Quick Switcher */}
      <section className="site-container pb-6">
        <div className="rounded-3xl border border-slate-200/80 dark:border-white/15 bg-white/75 dark:bg-slate-900/60 p-5 sm:p-6 backdrop-blur-2xl shadow-md space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="font-head text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
              {ar ? "البحث والتصفية في دراسات الأسواق" : "Market Studies Search & Navigation"}
            </h2>
            {(hasActiveSearch || selectedSector !== "all") && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="inline-flex items-center gap-1.5 rounded-full bg-brand-green px-3.5 py-1 text-xs font-bold text-white hover:bg-brand-orange transition-all duration-300 cursor-pointer shadow-xs"
              >
                <span>{ar ? "إعادة ضبط البحث" : "Reset Filters"}</span>
              </button>
            )}
          </div>

          <div className="grid gap-3 md:grid-cols-12 items-center">
            <div className="relative md:col-span-5">
              <Search className="absolute start-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  ar
                    ? "ابحث باسم الدولة، النشاط، المنتج، أو عنوان الدراسة..."
                    : "Search by country, product, activity, or study title..."
                }
                className="w-full rounded-2xl border border-slate-200 dark:border-white/15 bg-white dark:bg-slate-950/60 ps-10 pe-4 py-2.5 text-xs font-medium text-slate-900 dark:text-white focus:border-slate-500 focus:outline-none"
              />
            </div>

            {/* Sector Quick Selector Pills */}
            <div className="md:col-span-7 flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setSelectedSector("all")}
                className={cn(
                  "rounded-full px-3.5 py-1.5 text-xs font-bold transition-all duration-300 cursor-pointer shadow-xs",
                  selectedSector === "all"
                    ? "bg-brand-green text-white hover:bg-brand-orange"
                    : "border border-slate-200 dark:border-white/15 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-brand-orange hover:text-white hover:border-brand-orange",
                )}
              >
                {ar ? "كافة القطاعات (4)" : "All Sectors (4)"}
              </button>
              {GLOBAL_MARKET_SECTORS.map((sec) => {
                const count = activeStudies.filter((s) => s.sector === sec.id).length;
                return (
                  <Link
                    key={sec.id}
                    to="/global-markets/$sector"
                    params={{ sector: sec.id }}
                    className={cn(
                      "rounded-full px-3.5 py-1.5 text-xs font-bold transition-all duration-300 cursor-pointer shadow-xs",
                      selectedSector === sec.id
                        ? "bg-brand-green text-white hover:bg-brand-orange"
                        : "border border-slate-200 dark:border-white/15 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-brand-orange hover:text-white hover:border-brand-orange",
                    )}
                  >
                    <span>{ar ? sec.nameAr : sec.nameEn}</span>
                    <span className="ms-1.5 text-[10px] opacity-80">({count})</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Sectors Container — Studies are Housed Inside Each Sector */}
      <section className="site-container space-y-10">
        {GLOBAL_MARKET_SECTORS.filter((sector) => selectedSector === "all" || sector.id === selectedSector).map(
          (sector) => {
            const Icon = getSectorIcon(sector.id);
            const metrics = getSectorMetrics(sector.id, studies);
            const statusCfg = STUDY_STATUS_LABELS[metrics.status];
            const scopeBadge = ar ? sector.scopeLabelAr : sector.scopeLabelEn;

            // Studies strictly belonging to this sector
            const sectorStudies = activeStudies.filter((s) => s.sector === sector.id);

            // Filter sector studies by search query if present
            const q = searchQuery.trim().toLowerCase();
            const searchedSectorStudies = sectorStudies.filter((s) => {
              if (!q) return true;
              const hay = [
                s.titleAr,
                s.titleEn,
                s.countryNameAr,
                s.countryNameEn,
                s.subRegionOrProjectAr || "",
                s.subRegionOrProjectEn || "",
                s.activityTypeAr,
                s.activityTypeEn,
                ...s.productTagsAr,
                ...s.productTagsEn,
              ]
                .join(" ")
                .toLowerCase();
              return hay.includes(q);
            });

            // Group studies by the 4 required regional classifications:
            // 1. دول الخليج (GCC)
            // 2. الدول العربية (Arab Countries)
            // 3. الدول الأفريقية (African Countries)
            // 4. الدول الأوروبية (European Countries)
            // + دول أخرى (Other)
            const gccStudies = searchedSectorStudies.filter((s) => getStudyRegionCategory(s) === "gcc");
            const arabStudies = searchedSectorStudies.filter((s) => getStudyRegionCategory(s) === "arab");
            const africaStudies = searchedSectorStudies.filter((s) => getStudyRegionCategory(s) === "africa");
            const europeStudies = searchedSectorStudies.filter((s) => getStudyRegionCategory(s) === "europe");
            const otherStudies = searchedSectorStudies.filter((s) => getStudyRegionCategory(s) === "other");

            const currentCategory = sectorCategoryFilters[sector.id] || "all";

            // Determine visible studies based on selected classification tab inside this sector
            let displayStudies: GlobalMarketStudy[] = [];
            if (currentCategory === "all") {
              displayStudies = searchedSectorStudies;
            } else if (currentCategory === "gcc") {
              displayStudies = gccStudies;
            } else if (currentCategory === "arab") {
              displayStudies = arabStudies;
            } else if (currentCategory === "africa") {
              displayStudies = africaStudies;
            } else if (currentCategory === "europe") {
              displayStudies = europeStudies;
            } else if (currentCategory === "other") {
              displayStudies = otherStudies;
            }

            return (
              <div
                key={sector.id}
                className="interactive-card glass-box-interactive group overflow-hidden rounded-3xl border border-slate-200/80 dark:border-white/15 bg-white/85 dark:bg-slate-900/75 shadow-xl backdrop-blur-2xl"
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
                  <div className="absolute bottom-5 start-5 end-5 flex flex-wrap items-end justify-between gap-4 text-white">
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

                    <Link
                      to="/global-markets/$sector"
                      params={{ sector: sector.id }}
                      className="inline-flex items-center gap-2 rounded-2xl bg-brand-green px-5 py-2.5 text-xs sm:text-sm font-bold text-white hover:bg-brand-orange transition-all duration-300 shadow-md cursor-pointer"
                    >
                      <span>{ar ? "الدخول إلى صفحة دراسات القطاع" : "Access Sector Studies Page"}</span>
                      {ar ? <ArrowLeft className="size-4" /> : <ArrowRight className="size-4" />}
                    </Link>
                  </div>
                </div>

                {/* Sector Overview & Metrics Bar */}
                <div className="p-6 sm:p-8 space-y-6 text-start">
                  <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
                    <div className="lg:col-span-8 space-y-3">
                      <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                        {ar ? sector.shortDescAr : sector.shortDescEn}
                      </p>

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
                    </div>

                    <div className="lg:col-span-4 grid grid-cols-3 gap-2 text-[11px]">
                      <div className="rounded-2xl bg-slate-50/90 dark:bg-white/5 p-3 border border-slate-200/60 dark:border-white/10 text-center">
                        <span className="text-slate-500 dark:text-slate-400 block text-[10px]">
                          {ar ? "الدراسات المنشورة" : "Published"}
                        </span>
                        <span className="font-head text-base font-extrabold text-slate-900 dark:text-white mt-0.5 block">
                          {metrics.publishedCount > 0
                            ? metrics.publishedCount
                            : ar
                              ? "لم يُنشر بعد"
                              : "None yet"}
                        </span>
                      </div>

                      <div className="rounded-2xl bg-slate-50/90 dark:bg-white/5 p-3 border border-slate-200/60 dark:border-white/10 text-center">
                        <span className="text-slate-500 dark:text-slate-400 block text-[10px]">
                          {ar ? "حالة القطاع" : "Status"}
                        </span>
                        <span className="font-bold text-slate-900 dark:text-white mt-1 block text-xs">
                          {ar ? statusCfg.ar : statusCfg.en}
                        </span>
                      </div>

                      <div className="rounded-2xl bg-slate-50/90 dark:bg-white/5 p-3 border border-slate-200/60 dark:border-white/10 text-center">
                        <span className="text-slate-500 dark:text-slate-400 block text-[10px]">
                          {ar ? "آخر تحديث" : "Updated"}
                        </span>
                        <span className="font-bold text-slate-900 dark:text-white mt-1 block text-xs">
                          {metrics.lastUpdatedYear ?? (ar ? "قيد البحث" : "In Progress")}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Section Divider: Studies Inside this Sector */}
                  <div className="pt-6 border-t border-slate-200/80 dark:border-white/10 space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <Layers className="size-4 text-brand-green" />
                        <h3 className="font-head text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
                          {ar ? "الدراسات الشاملة" : "Comprehensive Studies"}
                        </h3>
                        <span className="rounded-full bg-brand-green/10 text-brand-green px-2.5 py-0.5 text-xs font-extrabold">
                          {searchedSectorStudies.length}
                        </span>
                      </div>
                    </div>

                    {/* Regional Classification Tabs Inside the Sector:
                        1. دول الخليج (GCC)
                        2. الدول العربية (Arab Countries)
                        3. الدول الأفريقية (African Countries)
                        4. الدول الأوروبية (European Countries)
                    */}
                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      {/* All Studies Tab */}
                      <button
                        type="button"
                        onClick={() => setCategoryForSector(sector.id, "all")}
                        className={cn(
                          "rounded-full px-3.5 py-1.5 text-xs font-bold transition-all duration-300 cursor-pointer shadow-xs",
                          currentCategory === "all"
                            ? "bg-brand-green text-white hover:bg-brand-orange"
                            : "border border-slate-200 dark:border-white/15 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-brand-orange hover:text-white hover:border-brand-orange",
                        )}
                      >
                        <span>{ar ? "كافة الدراسات" : "All Studies"}</span>
                        <span className="ms-1.5 text-[10px] opacity-80">({searchedSectorStudies.length})</span>
                      </button>

                      {/* 1. دول الخليج (GCC) */}
                      <button
                        type="button"
                        onClick={() => setCategoryForSector(sector.id, "gcc")}
                        className={cn(
                          "rounded-full px-3.5 py-1.5 text-xs font-bold transition-all duration-300 cursor-pointer shadow-xs",
                          currentCategory === "gcc"
                            ? "bg-brand-green text-white hover:bg-brand-orange"
                            : "border border-slate-200 dark:border-white/15 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-brand-orange hover:text-white hover:border-brand-orange",
                        )}
                      >
                        <span>{ar ? "دول الخليج" : "GCC Countries"}</span>
                        <span className="ms-1.5 text-[10px] opacity-80">({gccStudies.length})</span>
                      </button>

                      {/* 2. الدول العربية (Arab Countries) */}
                      <button
                        type="button"
                        onClick={() => setCategoryForSector(sector.id, "arab")}
                        className={cn(
                          "rounded-full px-3.5 py-1.5 text-xs font-bold transition-all duration-300 cursor-pointer shadow-xs",
                          currentCategory === "arab"
                            ? "bg-brand-green text-white hover:bg-brand-orange"
                            : "border border-slate-200 dark:border-white/15 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-brand-orange hover:text-white hover:border-brand-orange",
                        )}
                      >
                        <span>{ar ? "الدول العربية" : "Arab Countries"}</span>
                        <span className="ms-1.5 text-[10px] opacity-80">({arabStudies.length})</span>
                      </button>

                      {/* 3. الدول الأفريقية (African Countries) */}
                      <button
                        type="button"
                        onClick={() => setCategoryForSector(sector.id, "africa")}
                        className={cn(
                          "rounded-full px-3.5 py-1.5 text-xs font-bold transition-all duration-300 cursor-pointer shadow-xs",
                          currentCategory === "africa"
                            ? "bg-brand-green text-white hover:bg-brand-orange"
                            : "border border-slate-200 dark:border-white/15 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-brand-orange hover:text-white hover:border-brand-orange",
                        )}
                      >
                        <span>{ar ? "الدول الأفريقية" : "African Countries"}</span>
                        <span className="ms-1.5 text-[10px] opacity-80">({africaStudies.length})</span>
                      </button>

                      {/* 4. الدول الأوروبية (European Countries) */}
                      {europeStudies.length > 0 && sector.id !== "environmental" && (
                        <button
                          type="button"
                          onClick={() => setCategoryForSector(sector.id, "europe")}
                          className={cn(
                            "rounded-full px-3.5 py-1.5 text-xs font-bold transition-all duration-300 cursor-pointer shadow-xs",
                            currentCategory === "europe"
                              ? "bg-brand-green text-white hover:bg-brand-orange"
                              : "border border-slate-200 dark:border-white/15 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-brand-orange hover:text-white hover:border-brand-orange",
                          )}
                        >
                          <span>{ar ? "الدول الأوروبية" : "European Countries"}</span>
                          <span className="ms-1.5 text-[10px] opacity-80">({europeStudies.length})</span>
                        </button>
                      )}

                      {/* Other Countries (if present, e.g. Americas) */}
                      {otherStudies.length > 0 && (
                        <button
                          type="button"
                          onClick={() => setCategoryForSector(sector.id, "other")}
                          className={cn(
                            "rounded-full px-3.5 py-1.5 text-xs font-bold transition-all duration-300 cursor-pointer shadow-xs",
                            currentCategory === "other"
                              ? "bg-brand-green text-white hover:bg-brand-orange"
                              : "border border-slate-200 dark:border-white/15 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-brand-orange hover:text-white hover:border-brand-orange",
                          )}
                        >
                          <span>{ar ? "دول أخرى" : "Other Markets"}</span>
                          <span className="ms-1.5 text-[10px] opacity-80">({otherStudies.length})</span>
                        </button>
                      )}
                    </div>

                    {/* Studies Display Grid Inside This Sector */}
                    <div className="pt-2">
                      {displayStudies.length === 0 ? (
                        <div className="rounded-2xl border border-dashed border-slate-300 dark:border-white/15 bg-slate-50/60 dark:bg-white/5 p-6 text-center space-y-2">
                          <p className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300">
                            {hasActiveSearch
                              ? ar
                                ? "لا توجد دراسات في هذا التصنيف تطابق عبارة البحث الحالية."
                                : "No studies in this classification match your search query."
                              : ar
                                ? "يتم حاليًا إعداد وتجهيز دراسات هذا التصنيف الإقليمي."
                                : "Studies in this regional classification are currently being prepared."}
                          </p>
                        </div>
                      ) : (
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                          {displayStudies.map((study) => {
                            const st = STUDY_STATUS_LABELS[study.status];
                            const downloadAllowed = isStudyDownloadAllowed(study);

                            return (
                              <div
                                key={study.id}
                                className="interactive-card glass-box-interactive flex flex-col justify-between rounded-2xl border border-slate-200/80 dark:border-white/15 bg-white/90 dark:bg-slate-950/60 p-4 sm:p-5 hover:border-brand-green/50 hover:-translate-y-1 transition-all space-y-3 text-start relative overflow-hidden shadow-sm"
                              >
                                <div className="space-y-2.5">
                                  {/* Country Flag & Header */}
                                  <div className="flex items-center justify-between gap-2">
                                    <div className="flex items-center gap-2">
                                      {study.countryCode && (
                                        <img
                                          src={`https://flagcdn.com/w40/${study.countryCode.toLowerCase()}.png`}
                                          srcSet={`https://flagcdn.com/w80/${study.countryCode.toLowerCase()}.png 2x`}
                                          alt={ar ? study.countryNameAr : study.countryNameEn}
                                          className="h-3.5 w-5.5 rounded-[2px] object-cover border border-slate-300/60 dark:border-white/20 shrink-0 shadow-xs"
                                          loading="lazy"
                                        />
                                      )}
                                      <span className="font-head text-sm font-extrabold text-slate-900 dark:text-white">
                                        {ar ? study.countryNameAr : study.countryNameEn}
                                      </span>
                                    </div>

                                    {typeof study.opportunityScore === "number" && (
                                      <span
                                        className={cn(
                                          "rounded-full px-2 py-0.5 font-mono font-extrabold text-[10px] text-white shadow-xs",
                                          study.opportunityScore >= 80
                                            ? "bg-brand-green"
                                            : study.opportunityScore >= 65
                                              ? "bg-brand-orange"
                                              : "bg-red-500",
                                        )}
                                      >
                                        {study.opportunityScore}/100
                                      </span>
                                    )}
                                  </div>

                                  {/* Study Title & Subtitle */}
                                  <h4 className="font-head text-xs sm:text-sm font-bold text-slate-900 dark:text-white line-clamp-2 leading-snug">
                                    {ar ? study.titleAr : study.titleEn}
                                  </h4>

                                  {study.tradeIndicatorDisplay && (
                                    <p className="text-[11px] font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                                      <span className="text-slate-500">{ar ? "المؤشر التجاري:" : "Trade Indicator:"}</span>
                                      <span className="text-brand-green font-mono">{study.tradeIndicatorDisplay}</span>
                                    </p>
                                  )}

                                  <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                                    {ar ? study.subtitleAr : study.subtitleEn}
                                  </p>
                                </div>

                                {/* Study Card Actions */}
                                <div className="space-y-2 pt-3 border-t border-slate-200/70 dark:border-white/10">
                                  <div className="flex flex-wrap items-center gap-1.5">
                                    <Link
                                      to="/global-markets/$sector/$slug"
                                      params={{ sector: study.sector, slug: study.slug }}
                                      className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-brand-green px-3 py-2 text-xs font-bold text-white hover:bg-brand-orange transition-all duration-300 cursor-pointer shadow-xs"
                                    >
                                      <span>{ar ? "عرض الدراسة الكاملة" : "View Full Study"}</span>
                                      {ar ? <ArrowLeft className="size-3.5" /> : <ArrowRight className="size-3.5" />}
                                    </Link>

                                    {downloadAllowed && (
                                      <button
                                        type="button"
                                        onClick={() => openApprovedStudyPdfReport(study, ar)}
                                        title={ar ? "تحميل الدراسة المعتمدة PDF" : "Download Approved PDF Report"}
                                        className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-brand-green px-3 py-2 text-xs font-bold text-white hover:bg-brand-orange transition-all duration-300 cursor-pointer shadow-xs"
                                      >
                                        <Download className="size-3.5" />
                                        <span>PDF</span>
                                      </button>
                                    )}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Sector Footer Link Button */}
                  <div className="pt-4 border-t border-slate-200/70 dark:border-white/10 flex justify-end">
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
          },
        )}
      </section>

      {/* 4. Institutional Architecture & 18-Axis Standard Blueprint */}
      <section className="site-container pt-12">
        <div className="rounded-3xl border border-slate-200/80 dark:border-white/15 bg-white/75 dark:bg-slate-900/60 p-6 sm:p-8 backdrop-blur-2xl shadow-md space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200/70 dark:border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-2xl bg-slate-900/5 dark:bg-white/10 text-slate-800 dark:text-slate-100 flex items-center justify-center shrink-0">
                <Layers className="size-5" />
              </div>
              <div className="text-start">
                <h2 className="font-head text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
                  {ar ? "الهيكل المؤسسي الموحد للدراسات السوقية (18 محورًا)" : "Unified 18-Axis Market Study Framework"}
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {ar
                    ? "نظام مرن لاستقبال وعرض الدراسات المعتمدة، مع التخصيص حسب طبيعة كل قطاع ونوع السوق."
                    : "Flexible, standardized presentation structure tailored to each sector and market scope."}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <Link
                to="/trade"
                className="inline-flex items-center gap-1.5 rounded-full bg-brand-green px-4 py-2 text-xs font-bold text-white hover:bg-brand-orange transition-all duration-300 shadow-xs cursor-pointer"
              >
                <FileSpreadsheet className="size-3.5" />
                <span>{ar ? "الانتقال إلى الفرص العالمية" : "Open Global Opportunities"}</span>
              </Link>
              <Link
                to="/global-markets/manage"
                className="inline-flex items-center gap-1.5 rounded-full bg-brand-green px-4 py-2 text-xs font-bold text-white hover:bg-brand-orange transition-all duration-300 shadow-xs cursor-pointer"
              >
                <ShieldCheck className="size-3.5" />
                <span>{ar ? "استيراد أو نشر دراسة معتمدة" : "Publish / Import Study"}</span>
              </Link>
            </div>
          </div>

          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {STUDY_SECTION_BLUEPRINT.map((bp) => (
              <div
                key={bp.key}
                className="flex items-center gap-2.5 rounded-xl border border-slate-200/70 dark:border-white/10 bg-slate-50/70 dark:bg-white/5 px-3.5 py-2.5 text-xs text-start"
              >
                <span className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-brand-green text-[10px] font-extrabold text-white">
                  {bp.order}
                </span>
                <span className="font-bold text-slate-800 dark:text-slate-200">
                  {ar ? bp.titleAr : bp.titleEn}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
