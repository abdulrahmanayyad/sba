import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  FileSpreadsheet,
  FolderCog,
  Globe,
  Layers,
  Leaf,
  MapPin,
  Search,
  ShieldCheck,
  Shirt,
  Wheat,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  GEO_REGIONS_ORDER,
  GLOBAL_MARKET_SECTORS,
  STUDY_SECTION_BLUEPRINT,
  STUDY_STATUS_LABELS,
  type GlobalMarketSectorId,
  type StudyStatus,
} from "@/lib/global-markets-data";
import { getSectorMetrics, useGlobalMarketsStudies } from "@/lib/global-markets-store";

interface GlobalMarketsHomeProps {
  ar: boolean;
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
  const [sectorFilter, setSectorFilter] = useState<"all" | GlobalMarketSectorId>("all");
  const [regionFilter, setRegionFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<"all" | StudyStatus>("all");
  const [yearFilter, setYearFilter] = useState<string>("all");

  const activeStudies = useMemo(
    () => studies.filter((s) => s.status !== "archived"),
    [studies],
  );

  const availableYears = useMemo(() => {
    const yrs = new Set<string>();
    activeStudies.forEach((s) => {
      if (s.lastUpdated) yrs.add(s.lastUpdated.slice(0, 4));
    });
    return Array.from(yrs).sort().reverse();
  }, [activeStudies]);

  const filteredStudies = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return activeStudies.filter((s) => {
      if (sectorFilter !== "all" && s.sector !== sectorFilter) return false;
      if (regionFilter !== "all" && s.region !== regionFilter) return false;
      if (statusFilter !== "all" && s.status !== statusFilter) return false;
      if (yearFilter !== "all" && !s.lastUpdated.startsWith(yearFilter)) return false;
      if (q) {
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
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [activeStudies, sectorFilter, regionFilter, statusFilter, yearFilter, searchQuery]);

  const hasActiveFilter =
    Boolean(searchQuery.trim()) ||
    sectorFilter !== "all" ||
    regionFilter !== "all" ||
    statusFilter !== "all" ||
    yearFilter !== "all";

  return (
    <div className="w-full pb-24">
      {/* 1. Institutional Hero Section */}
      <section className="site-container pt-10 pb-6">
        <div className="interactive-card glass-box-interactive group overflow-hidden rounded-3xl border border-white/50 bg-white/75 dark:bg-slate-900/70 p-8 sm:p-12 shadow-[0_16px_50px_rgba(15,23,42,0.06)] backdrop-blur-2xl ring-1 ring-slate-900/5 text-start">
          <div className="relative z-10 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-white/15 bg-slate-100/90 dark:bg-white/10 px-3.5 py-1 text-xs font-bold tracking-wide text-slate-800 dark:text-slate-100 backdrop-blur-md shadow-xs">
                <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
                <span>SAMI BIN AYYAD GROUP · {ar ? "مركز الأبحاث والدراسات السوقية" : "Market Research & Intelligence Hub"}</span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <Link
                  to="/global-markets/compare"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900 dark:bg-white px-4 py-1.5 text-xs font-bold text-white dark:text-slate-900 hover:bg-brand-green dark:hover:bg-brand-green dark:hover:text-white transition-all shadow-xs"
                >
                  <span>{ar ? "لوحة مقارنة الملابس (41 دولة)" : "Apparel Compare Dashboard (41 Countries)"}</span>
                </Link>
                <Link
                  to="/global-markets/manage"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-white/15 bg-white/90 dark:bg-slate-800/80 px-4 py-1.5 text-xs font-bold text-slate-800 dark:text-slate-100 hover:border-slate-400 hover:bg-slate-100 transition-all shadow-xs"
                >
                  <FolderCog className="size-3.5 text-brand-green" />
                  <span>{ar ? "إدارة الدراسات والتحديثات" : "Studies Registry & CMS"}</span>
                </Link>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex flex-wrap items-baseline gap-3">
                <h1 className="font-head text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight text-start transition-colors duration-300 group-hover:text-brand-green-text">
                  {ar ? "الأسواق العالمية" : "Global Markets"}
                </h1>
                <span className="text-sm sm:text-base font-bold text-slate-500 dark:text-slate-400">
                  {ar ? "Global Markets" : "الأسواق العالمية"}
                </span>
              </div>

              <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-slate-600 dark:text-slate-300 max-w-4xl text-start">
                {ar
                  ? "دراسات تحليلية متخصصة للأسواق المحلية والدولية، تكشف حجم الطلب والفرص التجارية والاستثمارية، وتدعم قرارات التوسع والتصنيع والتوريد وفق بيانات موثقة وتحليلات استراتيجية."
                  : "Comprehensive market research and strategic intelligence covering local and international markets, identifying demand, trade opportunities, and investment potential through verified data and in-depth analysis."}
              </p>
            </div>

            {/* Verified Readiness Summary Bar (No Fake Numbers) */}
            <div className="pt-4 border-t border-slate-200/70 dark:border-white/10 grid gap-3 sm:grid-cols-3 text-xs">
              <div className="rounded-2xl border border-slate-200/70 dark:border-white/10 bg-slate-50/80 dark:bg-white/5 px-4 py-3">
                <span className="text-slate-500 dark:text-slate-400 block font-semibold">
                  {ar ? "القطاعات الاستراتيجية المعتمدة" : "Core Strategic Sectors"}
                </span>
                <span className="font-head text-base font-extrabold text-slate-900 dark:text-white mt-0.5 block">
                  {ar ? "4 قطاعات رئيسية" : "4 Canonical Sectors"}
                </span>
              </div>

              <div className="rounded-2xl border border-slate-200/70 dark:border-white/10 bg-slate-50/80 dark:bg-white/5 px-4 py-3">
                <span className="text-slate-500 dark:text-slate-400 block font-semibold">
                  {ar ? "الدراسات المنشورة فعليًا" : "Published Studies Count"}
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

              <div className="rounded-2xl border border-slate-200/70 dark:border-white/10 bg-slate-50/80 dark:bg-white/5 px-4 py-3">
                <span className="text-slate-500 dark:text-slate-400 block font-semibold">
                  {ar ? "منهجية التوثيق" : "Verification Standard"}
                </span>
                <span className="font-head text-base font-extrabold text-brand-green mt-0.5 block">
                  {ar ? "18 محورًا تحليليًا · مصادر موثقة" : "18 Analytical Axes · Cited Sources"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Global Search & Multi-Facet Filter Engine */}
      <section className="site-container pb-6">
        <div className="rounded-3xl border border-slate-200/80 dark:border-white/15 bg-white/75 dark:bg-slate-900/60 p-5 sm:p-6 backdrop-blur-2xl shadow-md space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="font-head text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
              {ar ? "محرك البحث والتصفية في الدراسات السوقية" : "Market Studies Search & Filter Engine"}
            </h2>
            {hasActiveFilter && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSectorFilter("all");
                  setRegionFilter("all");
                  setStatusFilter("all");
                  setYearFilter("all");
                }}
                className="text-xs font-bold text-brand-orange hover:underline cursor-pointer"
              >
                {ar ? "إعادة ضبط الفلاتر" : "Reset Filters"}
              </button>
            )}
          </div>

          <div className="grid gap-3 md:grid-cols-12">
            <div className="relative md:col-span-4">
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

            <select
              value={sectorFilter}
              onChange={(e) => setSectorFilter(e.target.value as "all" | GlobalMarketSectorId)}
              aria-label={ar ? "القطاع" : "Sector"}
              className="md:col-span-2 rounded-2xl border border-slate-200 dark:border-white/15 bg-white dark:bg-slate-950/60 px-3 py-2.5 text-xs font-semibold text-slate-800 dark:text-slate-100 focus:outline-none"
            >
              <option value="all">{ar ? "كافة القطاعات" : "All Sectors"}</option>
              {GLOBAL_MARKET_SECTORS.map((sec) => (
                <option key={sec.id} value={sec.id}>
                  {ar ? sec.nameAr : sec.nameEn}
                </option>
              ))}
            </select>

            <select
              value={regionFilter}
              onChange={(e) => setRegionFilter(e.target.value)}
              aria-label={ar ? "المنطقة الجغرافية" : "Geographic Region"}
              className="md:col-span-2 rounded-2xl border border-slate-200 dark:border-white/15 bg-white dark:bg-slate-950/60 px-3 py-2.5 text-xs font-semibold text-slate-800 dark:text-slate-100 focus:outline-none"
            >
              <option value="all">{ar ? "كافة المناطق" : "All Regions"}</option>
              {GEO_REGIONS_ORDER.map((reg) => (
                <option key={reg.id} value={reg.id}>
                  {ar ? reg.ar : reg.en}
                </option>
              ))}
            </select>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as "all" | StudyStatus)}
              aria-label={ar ? "حالة الدراسة" : "Study Status"}
              className="md:col-span-2 rounded-2xl border border-slate-200 dark:border-white/15 bg-white dark:bg-slate-950/60 px-3 py-2.5 text-xs font-semibold text-slate-800 dark:text-slate-100 focus:outline-none"
            >
              <option value="all">{ar ? "كافة الحالات" : "All Statuses"}</option>
              {(["in_research", "under_review", "completed", "needs_update"] as StudyStatus[]).map((st) => (
                <option key={st} value={st}>
                  {ar ? STUDY_STATUS_LABELS[st].ar : STUDY_STATUS_LABELS[st].en}
                </option>
              ))}
            </select>

            <select
              value={yearFilter}
              onChange={(e) => setYearFilter(e.target.value)}
              aria-label={ar ? "سنة آخر تحديث" : "Last Updated Year"}
              className="md:col-span-2 rounded-2xl border border-slate-200 dark:border-white/15 bg-white dark:bg-slate-950/60 px-3 py-2.5 text-xs font-semibold text-slate-800 dark:text-slate-100 focus:outline-none"
            >
              <option value="all">{ar ? "سنة التحديث (الكل)" : "Update Year (All)"}</option>
              {availableYears.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>

          {/* Search / Published Studies Results when active or available */}
          {(hasActiveFilter || activeStudies.length > 0) && (
            <div className="pt-3 border-t border-slate-200/70 dark:border-white/10">
              {filteredStudies.length === 0 ? (
                <p className="text-xs text-slate-500 dark:text-slate-400 py-2">
                  {ar
                    ? "لا توجد دراسات منشورة تطابق معايير البحث الحالية. سيتم إدراج الدراسات المعتمدة فور تسليمها ونشرها."
                    : "No published studies match the selected criteria yet. Approved studies will appear here as soon as they are released."}
                </p>
              ) : (
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredStudies.map((study) => {
                    const st = STUDY_STATUS_LABELS[study.status];
                    return (
                      <Link
                        key={study.id}
                        to="/global-markets/$sector/$slug"
                        params={{ sector: study.sector, slug: study.slug }}
                        className="rounded-2xl border border-slate-200/80 dark:border-white/15 bg-white/90 dark:bg-slate-950/50 p-4 hover:border-brand-green/50 hover:-translate-y-0.5 transition-all space-y-2"
                      >
                        <div className="flex items-center justify-between gap-2 text-[11px]">
                          <span className="font-bold text-slate-700 dark:text-slate-300">
                            {ar ? study.countryNameAr : study.countryNameEn}
                          </span>
                          <span className={cn("rounded-full border px-2 py-0.5 font-bold", st.badgeClass)}>
                            {ar ? st.ar : st.en}
                          </span>
                        </div>
                        <h3 className="font-head text-sm font-bold text-slate-900 dark:text-white line-clamp-2">
                          {ar ? study.titleAr : study.titleEn}
                        </h3>
                        <p className="text-[11px] text-slate-500">
                          {ar ? "آخر تحديث:" : "Updated:"} {study.lastUpdated}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* 3. Four Canonical Sector Cards (Strict Order: 1. Construction, 2. Environmental, 3. Garment, 4. Food) */}
      <section className="site-container py-4">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {ar ? "القطاعات الأربعة المعتمدة" : "Four Strategic Sectors"}
            </span>
            <h2 className="font-head text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              {ar ? "استكشف دراسات القطاعات والأسواق" : "Explore Sector & Market Studies"}
            </h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {GLOBAL_MARKET_SECTORS.map((sector) => {
            const Icon = getSectorIcon(sector.id);
            const metrics = getSectorMetrics(sector.id, studies);
            const statusCfg = STUDY_STATUS_LABELS[metrics.status];
            const scopeBadge = ar ? sector.scopeLabelAr : sector.scopeLabelEn;

            return (
              <div
                key={sector.id}
                className="interactive-card glass-box-interactive group flex flex-col overflow-hidden rounded-3xl border border-slate-200/80 dark:border-white/15 bg-white/80 dark:bg-slate-900/70 shadow-lg backdrop-blur-2xl"
              >
                {/* Expressive Sector Image */}
                <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={sector.image}
                    alt={ar ? sector.nameAr : sector.nameEn}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent" />

                  <div className="absolute top-4 start-4 flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/92 dark:bg-slate-900/90 px-3 py-1 text-[11px] font-extrabold text-slate-900 dark:text-white shadow-sm backdrop-blur-md">
                      {sector.scope === "egypt_only" ? (
                        <MapPin className="size-3 text-brand-orange" />
                      ) : (
                        <Globe className="size-3 text-brand-green" />
                      )}
                      <span>
                        {ar ? `نطاق الدراسة: ${scopeBadge}` : `Scope: ${scopeBadge}`}
                      </span>
                    </span>
                  </div>

                  <div className="absolute top-4 end-4">
                    <span
                      className={cn(
                        "inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-bold backdrop-blur-md shadow-xs",
                        statusCfg.badgeClass,
                      )}
                    >
                      {ar ? statusCfg.ar : statusCfg.en}
                    </span>
                  </div>

                  <div className="absolute bottom-4 start-4 end-4 flex items-center gap-3 text-white">
                    <div className="size-10 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center shrink-0">
                      <Icon className="size-5 text-white" />
                    </div>
                    <div className="text-start">
                      <span className="text-[11px] font-semibold text-white/80 block">
                        {ar ? `القطاع 0${sector.order} · ${sector.nameEn}` : `Sector 0${sector.order} · ${sector.nameAr}`}
                      </span>
                      <h3 className="font-head text-lg sm:text-xl font-extrabold !text-white leading-snug">
                        {ar ? sector.nameAr : sector.nameEn}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="flex flex-1 flex-col justify-between p-6 space-y-5 text-start">
                  <div className="space-y-4">
                    <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {ar ? sector.shortDescAr : sector.shortDescEn}
                    </p>

                    {/* Core Coverage Topics Preview */}
                    <div className="flex flex-wrap gap-1.5">
                      {(ar ? sector.topicsAr : sector.topicsEn).slice(0, 6).map((topic, idx) => (
                        <span
                          key={idx}
                          className="rounded-lg border border-slate-200/80 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-2.5 py-1 text-[11px] font-semibold text-slate-700 dark:text-slate-300"
                        >
                          {topic}
                        </span>
                      ))}
                      {sector.topicsAr.length > 6 && (
                        <span className="rounded-lg bg-slate-100 dark:bg-white/10 px-2.5 py-1 text-[11px] font-bold text-slate-600 dark:text-slate-300">
                          +{sector.topicsAr.length - 6} {ar ? "محاور أخرى" : "more topics"}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Metadata & Action Row */}
                  <div className="space-y-4 pt-4 border-t border-slate-200/70 dark:border-white/10">
                    <div className="grid grid-cols-3 gap-2 text-[11px]">
                      <div className="rounded-xl bg-slate-50/90 dark:bg-white/5 p-2.5 border border-slate-200/60 dark:border-white/10">
                        <span className="text-slate-500 dark:text-slate-400 block">
                          {ar ? "الدراسات المنشورة" : "Published"}
                        </span>
                        <span className="font-bold text-slate-900 dark:text-white mt-0.5 block">
                          {metrics.publishedCount > 0
                            ? metrics.publishedCount
                            : ar
                            ? "لم يُنشر بعد"
                            : "None yet"}
                        </span>
                      </div>

                      <div className="rounded-xl bg-slate-50/90 dark:bg-white/5 p-2.5 border border-slate-200/60 dark:border-white/10">
                        <span className="text-slate-500 dark:text-slate-400 block">
                          {ar ? "حالة الدراسات" : "Status"}
                        </span>
                        <span className="font-bold text-slate-900 dark:text-white mt-0.5 block">
                          {ar ? statusCfg.ar : statusCfg.en}
                        </span>
                      </div>

                      <div className="rounded-xl bg-slate-50/90 dark:bg-white/5 p-2.5 border border-slate-200/60 dark:border-white/10">
                        <span className="text-slate-500 dark:text-slate-400 block">
                          {ar ? "آخر تحديث" : "Last Updated"}
                        </span>
                        <span className="font-bold text-slate-900 dark:text-white mt-0.5 block">
                          {metrics.lastUpdatedYear ?? (ar ? "بانتظار النشر" : "Pending")}
                        </span>
                      </div>
                    </div>

                    <Link
                      to="/global-markets/$sector"
                      params={{ sector: sector.id }}
                      className="flex w-full items-center justify-between rounded-2xl bg-slate-900 dark:bg-white px-5 py-3 text-xs sm:text-sm font-bold text-white dark:text-slate-900 transition-all duration-200 hover:bg-brand-green dark:hover:bg-brand-green dark:hover:text-white shadow-sm"
                    >
                      <span>{ar ? "استعراض الدراسات" : "Explore Studies"}</span>
                      {ar ? (
                        <ArrowLeft className="size-4" />
                      ) : (
                        <ArrowRight className="size-4" />
                      )}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Institutional Architecture & 18-Axis Standard Blueprint */}
      <section className="site-container pt-8">
        <div className="rounded-3xl border border-slate-200/80 dark:border-white/15 bg-white/75 dark:bg-slate-900/60 p-6 sm:p-8 backdrop-blur-2xl shadow-md space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200/70 dark:border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-2xl bg-slate-900/5 dark:bg-white/10 text-slate-800 dark:text-slate-100 flex items-center justify-center shrink-0">
                <Layers className="size-5" />
              </div>
              <div>
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

            <div className="flex items-center gap-2">
              <Link
                to="/trade"
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/15 bg-slate-50 dark:bg-white/5 px-3.5 py-1.5 text-xs font-bold text-slate-800 dark:text-slate-100 hover:border-brand-green transition-colors"
              >
                <FileSpreadsheet className="size-3.5 text-brand-green" />
                <span>{ar ? "الانتقال إلى الفرص العالمية" : "Open Global Opportunities"}</span>
              </Link>
              <Link
                to="/global-markets/manage"
                className="inline-flex items-center gap-1.5 rounded-full border border-brand-green/35 bg-brand-green/10 px-3.5 py-1.5 text-xs font-bold text-brand-green hover:bg-brand-green hover:text-white transition-colors"
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
                className="flex items-center gap-2.5 rounded-xl border border-slate-200/70 dark:border-white/10 bg-slate-50/70 dark:bg-white/5 px-3.5 py-2.5 text-xs"
              >
                <span className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-[10px] font-extrabold text-white dark:bg-white dark:text-slate-900">
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

