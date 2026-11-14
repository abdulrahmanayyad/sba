import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  ChevronRight,
  Download,
  FolderCog,
  Globe,
  Layers,
  Leaf,
  Lock,
  MapPin,
  Scale,
  Search,
  Shirt,
  Wheat,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { APPAREL_6_SUBREGIONS_META, APPAREL_SUBREGIONS_META } from "@/lib/studies/apparel-master-studies";
import {
  GEO_REGIONS_ORDER,
  GLOBAL_MARKET_SECTORS,
  SECTOR_ALLOWED_REGIONS,
  STUDY_SECTION_BLUEPRINT,
  STUDY_STATUS_LABELS,
  type GlobalMarketSectorId,
  type StudyStatus,
} from "@/lib/global-markets-data";
import {
  getSectorMetrics,
  isStudyDownloadAllowed,
  openApprovedStudyPdfReport,
  useGlobalMarketsStudies,
} from "@/lib/global-markets-store";
import { MarketComparisonPanel } from "./market-comparison-panel";

interface GlobalMarketsSectorPageProps {
  sectorId: GlobalMarketSectorId;
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

export function GlobalMarketsSectorPage({ sectorId, ar }: GlobalMarketsSectorPageProps) {
  const sector = useMemo(
    () => GLOBAL_MARKET_SECTORS.find((s) => s.id === sectorId) ?? GLOBAL_MARKET_SECTORS[0]!,
    [sectorId],
  );
  const { studies } = useGlobalMarketsStudies();

  const [searchQuery, setSearchQuery] = useState("");
  const [regionFilter, setRegionFilter] = useState<string>("all");
  const [subRegionFilter, setSubRegionFilter] = useState<string>("all");
  const [priorityFilter, setPriorityFilter] = useState<string>("all");
  const [activityFilter, setActivityFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<"all" | StudyStatus>("all");
  const [yearFilter, setYearFilter] = useState<string>("all");
  const [tierFilter, setTierFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"score" | "name" | "imports">("score");

  const sectorStudies = useMemo(() => {
    const list = studies.filter((s) => s.sector === sector.id && s.status !== "archived");
    return [...list].sort((a, b) => {
      // Default sort by Opportunity Score descending
      const sa = a.opportunityScore ?? 0;
      const sb = b.opportunityScore ?? 0;
      if (sb !== sa) return sb - sa;
      return (a.countryNameEn || "").localeCompare(b.countryNameEn || "");
    });
  }, [studies, sector.id]);

  const metrics = useMemo(() => getSectorMetrics(sector.id, studies), [sector.id, studies]);
  const allowedRegionConfigs = useMemo(
    () => GEO_REGIONS_ORDER.filter((r) => SECTOR_ALLOWED_REGIONS[sector.id].includes(r.id)),
    [sector.id],
  );

  const availableActivities = useMemo(() => {
    const set = new Set<string>();
    sectorStudies.forEach((s) => {
      const act = ar ? s.activityTypeAr : s.activityTypeEn;
      if (act) set.add(act);
    });
    return Array.from(set);
  }, [sectorStudies, ar]);

  const availableYears = useMemo(() => {
    const set = new Set<string>();
    sectorStudies.forEach((s) => {
      if (s.lastUpdated) set.add(s.lastUpdated.slice(0, 4));
    });
    return Array.from(set).sort().reverse();
  }, [sectorStudies]);

  const filteredStudies = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    const result = sectorStudies.filter((s) => {
      if (regionFilter !== "all" && s.region !== regionFilter) return false;
      if (subRegionFilter !== "all" && s.apparelSubRegion !== subRegionFilter) return false;
      if (priorityFilter !== "all" && s.priorityGrade !== priorityFilter) return false;
      if (statusFilter !== "all" && s.status !== statusFilter) return false;
      if (yearFilter !== "all" && !s.lastUpdated.startsWith(yearFilter)) return false;
      if (tierFilter !== "all") {
        if (tierFilter === "tier1" && !(s.opportunityScore && s.opportunityScore >= 80)) return false;
        if (tierFilter === "tier2" && !(s.opportunityScore && s.opportunityScore >= 65 && s.opportunityScore < 80)) return false;
        if (tierFilter === "tier3" && !(s.opportunityScore && s.opportunityScore >= 50 && s.opportunityScore < 65)) return false;
        if (tierFilter === "tier4" && !(s.opportunityScore && s.opportunityScore < 50)) return false;
      }
      if (activityFilter !== "all") {
        const act = ar ? s.activityTypeAr : s.activityTypeEn;
        if (act !== activityFilter) return false;
      }
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
          s.opportunityTier || "",
          s.opportunityTierAr || "",
          ...s.productTagsAr,
          ...s.productTagsEn,
        ]
          .join(" ")
          .toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });

    return result.sort((a, b) => {
      if (sortBy === "score") {
        const sa = a.opportunityScore ?? 0;
        const sb = b.opportunityScore ?? 0;
        if (sb !== sa) return sb - sa;
      } else if (sortBy === "imports") {
        const ia = a.tradeIndicatorNumericUsdB ?? 0;
        const ib = b.tradeIndicatorNumericUsdB ?? 0;
        if (ib !== ia) return ib - ia;
      } else if (sortBy === "name") {
        const na = ar ? a.countryNameAr : a.countryNameEn;
        const nb = ar ? b.countryNameAr : b.countryNameEn;
        return na.localeCompare(nb);
      }
      return 0;
    });
  }, [sectorStudies, regionFilter, subRegionFilter, priorityFilter, statusFilter, yearFilter, tierFilter, sortBy, activityFilter, searchQuery, ar]);

  const Icon = getSectorIcon(sector.id);
  const statusCfg = STUDY_STATUS_LABELS[metrics.status];
  const isEgyptOnly = sector.scope === "egypt_only";

  return (
    <div className="w-full pb-24">
      {/* 1. Breadcrumb */}
      <div className="site-container pt-8 pb-3">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs font-bold text-slate-500">
          <Link to="/global-markets" className="hover:text-slate-900 dark:hover:text-white transition-colors">
            {ar ? "الأسواق العالمية" : "Global Markets"}
          </Link>
          <ChevronRight className="size-3.5 rtl:rotate-180" />
          <span className="text-slate-900 dark:text-white">{ar ? sector.nameAr : sector.nameEn}</span>
        </nav>
      </div>

      {/* 2. Sector Glassmorphic Header */}
      <section className="site-container pb-6">
        <div className="interactive-card glass-box-interactive group overflow-hidden rounded-3xl border border-white/50 bg-white/75 dark:bg-slate-900/70 p-6 sm:p-10 shadow-lg backdrop-blur-2xl text-start">
          <div className="relative z-10 grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/15 bg-slate-100/90 dark:bg-white/10 px-3.5 py-1 text-xs font-bold text-slate-800 dark:text-slate-100">
                  <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
                  <span>{ar ? `القطاع 0${sector.order} · ${sector.nameEn}` : `Sector 0${sector.order} · ${sector.nameAr}`}</span>
                </span>

                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/15 bg-white/90 dark:bg-slate-800 px-3.5 py-1 text-xs font-bold text-slate-900 dark:text-white">
                  {isEgyptOnly ? <MapPin className="size-3.5 text-brand-orange" /> : <Globe className="size-3.5 text-brand-green" />}
                  <span>{ar ? `نطاق الدراسة: ${sector.scopeLabelAr}` : `Scope: ${sector.scopeLabelEn}`}</span>
                </span>

                <span className={cn("inline-flex items-center rounded-full border px-3 py-1 text-xs font-bold", statusCfg.badgeClass)}>
                  {ar ? statusCfg.ar : statusCfg.en}
                </span>
              </div>

              <h1 className="font-head text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight transition-colors duration-300 group-hover:text-brand-green-text">
                {ar ? sector.nameAr : sector.nameEn}
              </h1>

              <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                {ar ? sector.shortDescAr : sector.shortDescEn}
              </p>

              {(ar ? sector.regionNoteAr : sector.regionNoteEn) && (
                <div className="rounded-2xl border border-slate-200/80 dark:border-white/15 bg-slate-50/80 dark:bg-white/5 px-4 py-3 text-xs font-semibold text-slate-700 dark:text-slate-200">
                  {ar ? sector.regionNoteAr : sector.regionNoteEn}
                </div>
              )}

              <div className="flex flex-wrap gap-1.5 pt-1">
                {(ar ? sector.topicsAr : sector.topicsEn).map((t, i) => (
                  <span
                    key={i}
                    className="rounded-lg border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-white/5 px-2.5 py-1 text-[11px] font-semibold text-slate-700 dark:text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 space-y-3">
              <div className="relative h-48 overflow-hidden rounded-2xl border border-slate-200/80 dark:border-white/15">
                <img
                  src={sector.image}
                  alt={ar ? sector.nameAr : sector.nameEn}
                  className="size-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 start-3 flex items-center gap-2 text-white text-xs font-bold">
                  <Icon className="size-4" />
                  <span>{ar ? sector.classificationHintAr : sector.classificationHintEn}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <Link
                  to={sector.sectorRoute}
                  className="flex-1 text-center rounded-xl border border-slate-200 dark:border-white/15 bg-white dark:bg-slate-800 px-3 py-2 text-xs font-bold text-slate-800 dark:text-white hover:border-brand-green transition-colors"
                >
                  {ar ? "صفحة القطاع بالمجموعة" : "Group Sector Page"}
                </Link>
                <Link
                  to="/global-markets/manage"
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-slate-900 dark:bg-white px-3.5 py-2 text-xs font-bold text-white dark:text-slate-900 hover:bg-brand-green dark:hover:bg-brand-green dark:hover:text-white transition-colors"
                >
                  <FolderCog className="size-3.5" />
                  <span>{ar ? "إضافة دراسة" : "Add Study"}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Sector Search & Filter Bar */}
      <section className="site-container pb-6">
        <div className="rounded-3xl border border-slate-200/80 dark:border-white/15 bg-white/75 dark:bg-slate-900/60 p-5 sm:p-6 backdrop-blur-2xl shadow-md space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="font-head text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
              {ar
                ? isEgyptOnly
                  ? "البحث والتصفية حسب المنطقة والنشاط ونوع المشروع داخل مصر"
                  : "البحث والتصفية حسب الدولة والمنطقة الجغرافية والمنتج"
                : isEgyptOnly
                ? "Filter by Region, Activity & Project Type inside Egypt"
                : "Filter by Country, Geographic Region, Product & Status"}
            </h2>
            <span className="text-xs font-bold text-slate-500">
              {ar ? `${filteredStudies.length} دراسة` : `${filteredStudies.length} Studies`}
            </span>
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
                    ? isEgyptOnly
                      ? "ابحث بالمنطقة، المحافظة، نوع المشروع أو النشاط..."
                      : "ابحث باسم الدولة، المنتج، أو النشاط..."
                    : isEgyptOnly
                    ? "Search city, project type, or activity in Egypt..."
                    : "Search country, product, or activity..."
                }
                className="w-full rounded-2xl border border-slate-200 dark:border-white/15 bg-white dark:bg-slate-950/60 ps-10 pe-4 py-2.5 text-xs font-medium focus:border-slate-500 focus:outline-none"
              />
            </div>

            {!isEgyptOnly && (
              <select
                value={regionFilter}
                onChange={(e) => setRegionFilter(e.target.value)}
                aria-label={ar ? "المنطقة الجغرافية" : "Geographic Region"}
                className="md:col-span-3 rounded-2xl border border-slate-200 dark:border-white/15 bg-white dark:bg-slate-950/60 px-3 py-2.5 text-xs font-semibold focus:outline-none"
              >
                <option value="all">{ar ? "كافة المناطق الجغرافية" : "All Geographic Regions"}</option>
                {allowedRegionConfigs.map((reg) => (
                  <option key={reg.id} value={reg.id}>
                    {ar ? reg.ar : reg.en}
                  </option>
                ))}
              </select>
            )}

            <select
              value={activityFilter}
              onChange={(e) => setActivityFilter(e.target.value)}
              aria-label={ar ? "النشاط أو المنتج" : "Activity or Product"}
              className={cn(
                "rounded-2xl border border-slate-200 dark:border-white/15 bg-white dark:bg-slate-950/60 px-3 py-2.5 text-xs font-semibold focus:outline-none",
                isEgyptOnly ? "md:col-span-3" : "md:col-span-2",
              )}
            >
              <option value="all">
                {ar
                  ? isEgyptOnly
                    ? "كافة الأنشطة والمشروعات"
                    : "كافة المنتجات والأنشطة"
                  : "All Activities & Products"}
              </option>
              {availableActivities.map((act) => (
                <option key={act} value={act}>
                  {act}
                </option>
              ))}
            </select>

            <select
              value={tierFilter}
              onChange={(e) => setTierFilter(e.target.value)}
              aria-label={ar ? "مستوى الفرصة" : "Opportunity Tier"}
              className="md:col-span-2 rounded-2xl border border-slate-200 dark:border-white/15 bg-white dark:bg-slate-950/60 px-3 py-2.5 text-xs font-semibold focus:outline-none"
            >
              <option value="all">{ar ? "كافة مستويات الفرص" : "All Opportunity Tiers"}</option>
              <option value="tier1">{ar ? "المستوى الأول (80+ فرصة قصوى)" : "Tier 1 (80+ Very High)"}</option>
              <option value="tier2">{ar ? "المستوى الثاني (65–79 فرصة مرتفعة)" : "Tier 2 (65-79 High)"}</option>
              <option value="tier3">{ar ? "المستوى الثالث (50–64 فرصة واعدة)" : "Tier 3 (50-64 Moderate)"}</option>
              <option value="tier4">{ar ? "المستوى الرابع (<50 فرصة ناشئة)" : "Tier 4 (<50 Emerging)"}</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "score" | "name" | "imports")}
              aria-label={ar ? "الترتيب" : "Sort By"}
              className="md:col-span-2 rounded-2xl border border-slate-200 dark:border-white/15 bg-white dark:bg-slate-950/60 px-3 py-2.5 text-xs font-semibold focus:outline-none"
            >
              <option value="score">{ar ? "ترتيب: أعلى تقييم فرصة" : "Sort: Opportunity Score"}</option>
              <option value="imports">{ar ? "ترتيب: حجم الواردات" : "Sort: Total Imports"}</option>
              <option value="name">{ar ? "ترتيب: اسم الدولة" : "Sort: Country Name"}</option>
            </select>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as "all" | StudyStatus)}
              aria-label={ar ? "حالة الدراسة" : "Study Status"}
              className="md:col-span-1 rounded-2xl border border-slate-200 dark:border-white/15 bg-white dark:bg-slate-950/60 px-2 py-2.5 text-xs font-semibold focus:outline-none"
            >
              <option value="all">{ar ? "الحالة" : "Status"}</option>
              {(["in_research", "under_review", "completed", "needs_update"] as StudyStatus[]).map((st) => (
                <option key={st} value={st}>
                  {ar ? STUDY_STATUS_LABELS[st].ar : STUDY_STATUS_LABELS[st].en}
                </option>
              ))}
            </select>
          </div>

          {sector.id === "garment" && sectorStudies.length > 0 && (
            <div className="pt-4 border-t border-slate-200/70 dark:border-white/10 space-y-3">
              {/* Sub-region Quick Filter & Comparative Pages Navigation */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setSubRegionFilter("all")}
                    className={cn(
                      "rounded-full border px-3 py-1 text-[11px] font-bold transition-colors cursor-pointer",
                      subRegionFilter === "all"
                        ? "border-slate-900 bg-slate-900 text-white dark:border-white dark:bg-white dark:text-slate-900"
                        : "border-slate-200 dark:border-white/15 bg-white dark:bg-white/5 text-slate-700 dark:text-slate-200 hover:border-brand-green",
                    )}
                  >
                    {ar ? `كافة الأقاليم (${sectorStudies.length})` : `All Regions (${sectorStudies.length})`}
                  </button>
                  {APPAREL_6_SUBREGIONS_META.map((reg) => {
                    const cnt = sectorStudies.filter((s) => s.apparelSubRegion === reg.id).length;
                    return (
                      <button
                        key={reg.id}
                        type="button"
                        onClick={() => setSubRegionFilter(reg.id)}
                        className={cn(
                          "rounded-full border px-3 py-1 text-[11px] font-bold transition-colors cursor-pointer",
                          subRegionFilter === reg.id
                            ? "border-brand-green bg-brand-green text-white"
                            : "border-slate-200 dark:border-white/15 bg-white dark:bg-white/5 text-slate-700 dark:text-slate-200 hover:border-brand-green",
                        )}
                      >
                        {ar ? `${reg.titleAr} (${cnt})` : `${reg.titleEn} (${cnt})`}
                      </button>
                    );
                  })}
                </div>

                <select
                  value={priorityFilter}
                  onChange={(e) => setPriorityFilter(e.target.value)}
                  aria-label={ar ? "الأولوية" : "Priority"}
                  className="rounded-xl border border-slate-200 dark:border-white/15 bg-white dark:bg-slate-950/60 px-3 py-1 text-[11px] font-bold focus:outline-none"
                >
                  <option value="all">{ar ? "كافة الأولويات (A–D)" : "All Priorities (A–D)"}</option>
                  {["A", "A-", "B+", "B", "B-", "C", "D"].map((p) => (
                    <option key={p} value={p}>
                      {ar ? `الأولوية ${p}` : `Priority ${p}`}
                    </option>
                  ))}
                </select>
              </div>

              {/* Comparative Dashboards Quick Access Bar */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <Link
                  to="/global-markets/$sector/$slug"
                  params={{ sector: "garment", slug: "compare" }}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-slate-900 dark:bg-white px-4 py-2 text-xs font-extrabold text-white dark:text-slate-900 hover:bg-brand-green dark:hover:bg-brand-green dark:hover:text-white transition-colors shadow-xs"
                >
                  <Scale className="size-3.5" />
                  <span>{ar ? "لوحة المقارنة الشاملة للأسواق الدولية" : "Global Comparative Dashboard (Verified Markets)"}</span>
                </Link>
                <Link
                  to="/global-markets/$sector/$slug"
                  params={{ sector: "garment", slug: "gcc-comparative-report" }}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-brand-green/40 bg-brand-green/10 px-4 py-2 text-xs font-extrabold text-brand-green hover:bg-brand-green hover:text-white transition-colors"
                >
                  <span>{ar ? "التقرير المقارن لدول الخليج (GCC)" : "GCC Comparative Report"}</span>
                </Link>
                {APPAREL_6_SUBREGIONS_META.filter((r) => r.id !== "gcc").map((reg) => (
                  <Link
                    key={reg.id}
                    to="/global-markets/$sector/$slug"
                    params={{ sector: "garment", slug: reg.comparativeSlug }}
                    className="rounded-xl border border-slate-200 dark:border-white/15 bg-white/80 dark:bg-white/5 px-3 py-2 text-[11px] font-bold text-slate-700 dark:text-slate-200 hover:border-brand-green hover:text-brand-green transition-colors"
                  >
                    {ar ? `مقارنة ${reg.titleAr}` : `${reg.titleEn} Compare`}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 4. Sector Studies List OR Institutional Ready State */}
      <section className="site-container pb-8">
        {filteredStudies.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-300 dark:border-white/15 bg-white/65 dark:bg-slate-900/50 p-8 sm:p-10 backdrop-blur-xl text-start space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-1.5">
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-white/15 bg-slate-100 dark:bg-white/10 px-3 py-1 text-xs font-bold text-slate-700 dark:text-slate-200">
                  <Layers className="size-3.5 text-brand-green" />
                  <span>{ar ? "حالة القطاع: قيد البحث وتجهيز النشر" : "Sector Status: In Research & Ready for Ingestion"}</span>
                </span>
                <h2 className="font-head text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white pt-1">
                  {ar
                    ? "لم تُنشر دراسات سوقية لهذا القطاع حتى الآن"
                    : "No Market Studies Published in This Sector Yet"}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
                  {ar
                    ? "تم تجهيز البنية الكاملة لعرض دراسات هذا القطاع وفق المحاور الـ 18 المعتمدة، بما يشمل المؤشرات الموثقة والمصادر وجداول المقارنة والتنزيل بصيغة PDF فور اعتماد الدراسات وتسليمها."
                    : "The full 18-axis study presentation architecture, cited KPIs, comparison matrix, and approved PDF export pipeline are ready to receive finalized studies once delivered."}
                </p>
              </div>

              <Link
                to="/global-markets/manage"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 dark:bg-white px-5 py-2.5 text-xs font-bold text-white dark:text-slate-900 hover:bg-brand-green dark:hover:bg-brand-green dark:hover:text-white transition-colors"
              >
                <FolderCog className="size-4" />
                <span>{ar ? "إضافة أو استيراد دراسة جديدة" : "Import or Add Study"}</span>
              </Link>
            </div>

            <div className="pt-4 border-t border-slate-200/70 dark:border-white/10">
              <p className="text-xs font-bold text-slate-700 dark:text-slate-200 mb-3">
                {ar ? "المحاور المدعومة عند نشر كل دراسة:" : "Supported Analytical Structure Per Study:"}
              </p>
              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {STUDY_SECTION_BLUEPRINT.map((bp) => (
                  <div
                    key={bp.key}
                    className="flex items-center gap-2 rounded-xl border border-slate-200/70 dark:border-white/10 bg-white/80 dark:bg-white/5 px-3 py-2 text-xs text-slate-700 dark:text-slate-300"
                  >
                    <span className="font-mono text-[10px] font-extrabold text-slate-500">{String(bp.order).padStart(2, "0")}</span>
                    <span className="font-semibold">{ar ? bp.titleAr : bp.titleEn}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredStudies.map((study) => {
              const st = STUDY_STATUS_LABELS[study.status];
              const downloadAllowed = isStudyDownloadAllowed(study);
              const regionLabel = GEO_REGIONS_ORDER.find((r) => r.id === study.region);

              return (
                <div
                  key={study.id}
                  className="interactive-card glass-box-interactive flex flex-col justify-between rounded-3xl border border-slate-200/80 dark:border-white/15 bg-white/80 dark:bg-slate-900/70 p-6 backdrop-blur-2xl shadow-md space-y-4 text-start relative overflow-hidden"
                >
                  <div className="space-y-3">
                    {/* Top Row: Subregion, Opportunity Score & Regional Rank */}
                    <div className="flex flex-wrap items-center justify-between gap-1.5 text-[11px]">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 dark:bg-white/10 px-2.5 py-0.5 font-bold text-slate-700 dark:text-slate-200">
                          {regionLabel ? (ar ? regionLabel.ar : regionLabel.en) : study.region}
                        </span>
                        {typeof study.regionalRank === "number" && (
                          <span className="rounded-full bg-brand-green/15 text-brand-green px-2 py-0.5 font-extrabold text-[10px]">
                            {ar ? `الترتيب #${study.regionalRank}` : `Rank #${study.regionalRank}`}
                          </span>
                        )}
                      </div>

                      {typeof study.opportunityScore === "number" ? (
                        <div className="flex items-center gap-1.5">
                          <span className={cn(
                            "rounded-full px-2.5 py-0.5 font-mono font-extrabold text-xs shadow-xs",
                            study.opportunityScore >= 80
                              ? "bg-emerald-500 text-white"
                              : study.opportunityScore >= 65
                              ? "bg-blue-600 text-white"
                              : "bg-amber-600 text-white"
                          )}>
                            {study.opportunityScore}/100
                          </span>
                        </div>
                      ) : (
                        <span className={cn("rounded-full border px-2.5 py-0.5 font-bold", st.badgeClass)}>
                          {ar ? st.ar : st.en}
                        </span>
                      )}
                    </div>

                    {/* Country Header */}
                    <div>
                      <div className="flex items-center gap-2">
                        {study.countryCode && (
                          <img
                            src={`https://flagcdn.com/w40/${study.countryCode.toLowerCase()}.png`}
                            srcSet={`https://flagcdn.com/w80/${study.countryCode.toLowerCase()}.png 2x`}
                            alt={ar ? study.countryNameAr : study.countryNameEn}
                            className="h-4 w-6 rounded-[3px] object-cover border border-slate-300/60 dark:border-white/20 shrink-0 shadow-xs"
                            loading="lazy"
                          />
                        )}
                        <h3 className="font-head text-lg font-extrabold text-slate-900 dark:text-white leading-snug">
                          {ar ? study.countryNameAr : study.countryNameEn}
                        </h3>
                      </div>

                      {/* Opportunity Tier Badge */}
                      {study.opportunityTierAr && (
                        <div className="mt-1.5 flex items-center gap-1.5 text-[11px] font-extrabold">
                          <span className={cn(
                            "rounded-lg px-2 py-0.5",
                            (study.opportunityScore ?? 0) >= 80
                              ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30"
                              : (study.opportunityScore ?? 0) >= 65
                              ? "bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/30"
                              : "bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/30"
                          )}>
                            {ar ? study.opportunityTierAr : study.opportunityTier}
                          </span>
                        </div>
                      )}

                      {/* Trade Indicator */}
                      <p className="text-xs font-bold text-slate-700 dark:text-slate-200 mt-2 flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">{ar ? "واردات الملابس:" : "Apparel Imports:"}</span>
                        <span className="text-brand-green font-mono font-extrabold">{study.tradeIndicatorDisplay}</span>
                        <span className="text-[10px] text-slate-500">({study.tradeIndicatorYear})</span>
                      </p>

                      <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                        {ar ? study.subtitleAr : study.subtitleEn}
                      </p>
                    </div>

                    {/* Prospective Target Accounts Note */}
                    {study.sections.potentialBuyers?.summaryAr && (
                      <div className="rounded-xl border border-slate-200/80 dark:border-white/10 bg-slate-50/70 dark:bg-white/5 p-2.5 text-[11px] text-slate-600 dark:text-slate-300 space-y-1">
                        <div className="font-extrabold text-slate-700 dark:text-slate-200 flex items-center justify-between">
                          <span>{ar ? "حسابات مستهدفة محتملة (غير مؤكدة):" : "Target Accounts (Prospective / Unconfirmed):"}</span>
                        </div>
                        <p className="line-clamp-2 text-slate-600 dark:text-slate-400">
                          {ar
                            ? study.sections.potentialBuyers.summaryAr.replace(/^.*?:\s*/, "")
                            : study.sections.potentialBuyers.summaryEn.replace(/^.*?:\s*/, "")}
                        </p>
                      </div>
                    )}

                    {/* Product Tags */}
                    <div className="flex flex-wrap gap-1">
                      {(ar ? study.productTagsAr : study.productTagsEn).slice(0, 4).map((tag, i) => (
                        <span
                          key={i}
                          className="rounded-lg border border-slate-200/70 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-2 py-0.5 text-[10px] font-semibold text-slate-600 dark:text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions: View Study & Download Study */}
                  <div className="space-y-2 pt-3 border-t border-slate-200/70 dark:border-white/10">
                    <div className="flex flex-wrap items-center gap-2">
                      <Link
                        to="/global-markets/$sector/$slug"
                        params={{ sector: study.sector, slug: study.slug }}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-slate-900 dark:bg-white px-3 py-2 text-xs font-bold text-white dark:text-slate-900 hover:bg-brand-green dark:hover:bg-brand-green dark:hover:text-white transition-colors"
                      >
                        <span>{ar ? "عرض الدراسة الكاملة" : "View Full Study"}</span>
                        {ar ? <ArrowLeft className="size-3.5" /> : <ArrowRight className="size-3.5" />}
                      </Link>

                      {study.downloadDocxUrl || study.downloadZipUrl ? (
                        <a
                          href={study.downloadDocxUrl || study.downloadZipUrl}
                          download
                          title={ar ? "تحميل وثيقة الدراسة المعتمدة" : "Download Official Study Document"}
                          className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-brand-green/40 bg-brand-green/10 px-3 py-2 text-xs font-bold text-brand-green hover:bg-brand-green hover:text-white transition-colors cursor-pointer"
                        >
                          <Download className="size-3.5" />
                          <span>{ar ? "تحميل الدراسة" : "Download"}</span>
                        </a>
                      ) : downloadAllowed ? (
                        <button
                          type="button"
                          onClick={() => openApprovedStudyPdfReport(study, ar)}
                          title={ar ? "تنزيل PDF معتمد" : "Download Approved PDF"}
                          className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-brand-green/40 bg-brand-green/10 px-3 py-2 text-xs font-bold text-brand-green hover:bg-brand-green hover:text-white transition-colors cursor-pointer"
                        >
                          <Download className="size-3.5" />
                          <span>{ar ? "تحميل PDF" : "Download PDF"}</span>
                        </button>
                      ) : null}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* 5. Cross-Market Comparison System */}
      <section className="site-container">
        <MarketComparisonPanel sectorId={sector.id} studies={sectorStudies} ar={ar} />
      </section>
    </div>
  );
}

