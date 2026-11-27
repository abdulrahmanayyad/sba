import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  ChevronRight,
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
  STUDY_STATUS_LABELS,
  type GlobalMarketSectorId,
  type StudyStatus,
} from "@/lib/global-markets-data";
import {
  getSectorMetrics,
  useGlobalMarketsStudies,
} from "@/lib/global-markets-store";
import { MarketComparisonPanel } from "./market-comparison-panel";
import { getStudyRegionCategory } from "./global-markets-home";

interface GlobalMarketsSectorPageProps {
  sectorId: GlobalMarketSectorId;
  ar: boolean;
}

const CLASSIFICATION_TABS = [
  { id: "all", labelAr: "كافة الدراسات", labelEn: "All Studies" },
  { id: "gcc", labelAr: "الدول الخليجية", labelEn: "GCC Countries" },
  { id: "arab", labelAr: "الدول العربية", labelEn: "Arab Countries" },
  { id: "europe", labelAr: "الدول الأوروبية", labelEn: "European Countries" },
  { id: "americas", labelAr: "الدول الأمريكية", labelEn: "American Countries" },
  { id: "other", labelAr: "بقية الدول", labelEn: "Rest of Countries" },
] as const;

export const CONSTRUCTION_CITY_TABS = [
  { id: "all", labelAr: "كافة مدن مصر (12 مدينة)", labelEn: "All Egyptian Cities (12)" },
  { id: "established", labelAr: "مدن ناضجة وقائمة", labelEn: "Mature & Established Cities" },
  { id: "capital", labelAr: "العاصمة والمدن الذكية", labelEn: "Capital & Smart Cities" },
  { id: "private", labelAr: "مجتمعات خاصة ومخططة", labelEn: "Private Planned Communities" },
  { id: "extension", labelAr: "امتدادات عمرانية واعدة", labelEn: "Urban Growth Corridors" },
  { id: "industrial", labelAr: "القطب الصناعي واللوجستي", labelEn: "Industrial Logistic Hubs" },
] as const;

export function getConstructionCityCategory(slug: string): string {
  if (slug === "new-capital" || slug === "capital-gardens") return "capital";
  if (slug === "new-cairo" || slug === "obour-old" || slug === "el-shorouk") return "established";
  if (slug === "mostakbal-city" || slug === "madinaty" || slug === "al-rehab") return "private";
  if (slug === "obour-new" || slug === "badr" || slug === "new-heliopolis") return "extension";
  if (slug === "tenth-of-ramadan") return "industrial";
  return "all";
}

function getStudyOrderNumber(study: GlobalMarketStudy): number {
  if (typeof study.regionalRank === "number" && study.regionalRank > 0) {
    return study.regionalRank;
  }
  const arMatch = study.subRegionOrProjectAr?.match(/الدراسة رقم\s*(\d+)/);
  if (arMatch) return parseInt(arMatch[1], 10);
  const enMatch = study.subRegionOrProjectEn?.match(/Study #(\d+)/i);
  if (enMatch) return parseInt(enMatch[1], 10);
  const codeMatch = study.slug?.match(/-(\d+)$/) || study.id?.match(/-(\d+)$/);
  if (codeMatch) return parseInt(codeMatch[1], 10);
  return 999;
}

function getCategoryPriority(cat: string): number {
  switch (cat) {
    case "gcc": return 1;
    case "arab": return 2;
    case "europe": return 3;
    case "americas": return 4;
    case "other": return 5;
    default: return 99;
  }
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
  const [regionCategory, setRegionCategory] = useState<string>("all");
  const [subRegionFilter, setSubRegionFilter] = useState<string>("all");
  const [priorityFilter, setPriorityFilter] = useState<string>("all");
  const [activityFilter, setActivityFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<"all" | StudyStatus>("all");
  const [yearFilter, setYearFilter] = useState<string>("all");
  const [tierFilter, setTierFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"order" | "score" | "name" | "imports">(() =>
    sector.id === "garment" || sector.id === "environmental" ? "score" : "order"
  );

  const sectorStudies = useMemo(() => {
    const list = studies.filter((s) => s.sector === sector.id && s.status !== "archived");
    return [...list].sort((a, b) => {
      if (sector.id === "garment" || sector.id === "environmental") {
        const sa = a.opportunityScore ?? 0;
        const sb = b.opportunityScore ?? 0;
        if (sb !== sa) return sb - sa;
      }
      const catA = getStudyRegionCategory(a);
      const catB = getStudyRegionCategory(b);
      const prioA = getCategoryPriority(catA);
      const prioB = getCategoryPriority(catB);
      if (prioA !== prioB) return prioA - prioB;
      return getStudyOrderNumber(a) - getStudyOrderNumber(b);
    });
  }, [studies, sector.id]);

  const metrics = useMemo(() => getSectorMetrics(sector.id, studies), [sector.id, studies]);
  const allowedRegionConfigs = useMemo(
    () =>
      GEO_REGIONS_ORDER.filter((r) => {
        if (!SECTOR_ALLOWED_REGIONS[sector.id].includes(r.id)) return false;
        if (sector.id === "environmental" && r.id === "europe") return false;
        return true;
      }),
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

  const categoryCounts = useMemo(() => {
    if (sector.id === "construction" || sector.scope === "egypt_only") {
      const counts: Record<string, number> = {
        all: sectorStudies.length,
        established: 0,
        capital: 0,
        private: 0,
        extension: 0,
        industrial: 0,
      };
      sectorStudies.forEach((s) => {
        const cat = getConstructionCityCategory(s.slug);
        if (counts[cat] !== undefined) {
          counts[cat] = (counts[cat] || 0) + 1;
        }
      });
      return counts;
    }
    const counts: Record<string, number> = {
      all: sectorStudies.length,
      gcc: 0,
      arab: 0,
      europe: 0,
      americas: 0,
      other: 0,
    };
    sectorStudies.forEach((s) => {
      const cat = getStudyRegionCategory(s);
      counts[cat] = (counts[cat] || 0) + 1;
    });
    return counts;
  }, [sectorStudies, sector.id, sector.scope]);

  const filteredStudies = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    const result = sectorStudies.filter((s) => {
      if (regionCategory !== "all") {
        if (sector.id === "construction" || sector.scope === "egypt_only") {
          if (getConstructionCityCategory(s.slug) !== regionCategory) return false;
        } else {
          if (getStudyRegionCategory(s) !== regionCategory) return false;
        }
      }
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
      } else {
        if (sector.id === "garment" || sector.id === "environmental") {
          const sa = a.opportunityScore ?? 0;
          const sb = b.opportunityScore ?? 0;
          if (sb !== sa) return sb - sa;
        }
        const catA = getStudyRegionCategory(a);
        const catB = getStudyRegionCategory(b);
        const prioA = getCategoryPriority(catA);
        const prioB = getCategoryPriority(catB);
        if (prioA !== prioB) return prioA - prioB;
        return getStudyOrderNumber(a) - getStudyOrderNumber(b);
      }
      return 0;
    });
  }, [sectorStudies, regionCategory, regionFilter, subRegionFilter, priorityFilter, statusFilter, yearFilter, tierFilter, sortBy, activityFilter, searchQuery, ar]);

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
              <h1 className="font-head text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight transition-colors duration-300 group-hover:text-brand-green-text">
                {ar ? sector.nameAr : sector.nameEn}
              </h1>

              {(ar ? sector.shortDescAr : sector.shortDescEn) && (
                <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                  {ar ? sector.shortDescAr : sector.shortDescEn}
                </p>
              )}

              {(ar ? sector.regionNoteAr : sector.regionNoteEn) && (
                <div className="rounded-2xl border border-slate-200/80 dark:border-white/15 bg-slate-50/80 dark:bg-white/5 px-4 py-3 text-xs font-semibold text-slate-700 dark:text-slate-200">
                  {ar ? sector.regionNoteAr : sector.regionNoteEn}
                </div>
              )}

              {(ar ? sector.topicsAr : sector.topicsEn).length > 0 && (
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
              )}
            </div>

            <div className="lg:col-span-4 space-y-3">
              <div className="relative h-48 overflow-hidden rounded-2xl border border-slate-200/80 dark:border-white/15">
                <img
                  src={sector.image}
                  alt={ar ? sector.nameAr : sector.nameEn}
                  className="size-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                {(ar ? sector.classificationHintAr : sector.classificationHintEn) ? (
                  <div className="absolute bottom-3 start-3 flex items-center gap-2 text-white text-xs font-bold">
                    <Icon className="size-4" />
                    <span>{ar ? sector.classificationHintAr : sector.classificationHintEn}</span>
                  </div>
                ) : null}
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
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-brand-green px-3.5 py-2 text-xs font-bold text-white hover:bg-brand-orange transition-all duration-300 shadow-xs cursor-pointer"
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
              onChange={(e) => setSortBy(e.target.value as "order" | "score" | "name" | "imports")}
              aria-label={ar ? "الترتيب" : "Sort By"}
              className="md:col-span-2 rounded-2xl border border-slate-200 dark:border-white/15 bg-white dark:bg-slate-950/60 px-3 py-2.5 text-xs font-semibold focus:outline-none"
            >
              <option value="order">{ar ? "ترتيب: التسلسل المعتمد للدراسات" : "Sort: Official Study Sequence"}</option>
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

          {sectorStudies.length > 0 && (
            <div className="pt-4 border-t border-slate-200/70 dark:border-white/10 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap items-center gap-1.5">
                  {(isEgyptOnly ? CONSTRUCTION_CITY_TABS : CLASSIFICATION_TABS)
                    .filter((tab) => tab.id === "all" || (categoryCounts[tab.id] ?? 0) > 0)
                    .map((tab) => {
                      const count = categoryCounts[tab.id] ?? 0;
                      const active = regionCategory === tab.id;
                      return (
                        <button
                          key={tab.id}
                          type="button"
                          onClick={() => {
                            setRegionCategory(tab.id);
                            setSubRegionFilter("all");
                          }}
                          className={cn(
                            "rounded-full border px-3 py-1 text-[11px] font-bold transition-all duration-300 cursor-pointer shadow-xs",
                            active
                              ? "border-brand-green bg-brand-green text-white hover:bg-brand-orange"
                              : "border-slate-200 dark:border-white/15 bg-white dark:bg-white/5 text-slate-700 dark:text-slate-200 hover:bg-brand-orange hover:text-white hover:border-brand-orange",
                          )}
                        >
                          {ar ? `${tab.labelAr} (${count})` : `${tab.labelEn} (${count})`}
                        </button>
                      );
                    })}
                </div>

                {sector.id === "construction" && (
                  <Link
                    to="/global-markets/$sector/$slug"
                    params={{ sector: "construction", slug: "east-cairo-real-estate-study" }}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-brand-green px-4 py-2 text-xs font-extrabold text-white hover:bg-brand-orange transition-all duration-300 shadow-xs cursor-pointer"
                  >
                    <Building2 className="size-3.5" />
                    <span>{ar ? "دراسة شرق القاهرة الشاملة (لوحة مقارنة 12 مدينة و45 حياً)" : "East Cairo Regional Study (All 12 Cities & 45 Submarkets)"}</span>
                  </Link>
                )}

                {sector.id === "garment" && (
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
                )}
              </div>

              {sector.id === "garment" && (
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <Link
                    to="/global-markets/$sector/$slug"
                    params={{ sector: "garment", slug: "compare" }}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-brand-green px-4 py-2 text-xs font-extrabold text-white hover:bg-brand-orange transition-all duration-300 shadow-xs cursor-pointer"
                  >
                    <Scale className="size-3.5" />
                    <span>{ar ? "لوحة المقارنة الشاملة للأسواق الدولية" : "Global Comparative Dashboard (Verified Markets)"}</span>
                  </Link>
                  <Link
                    to="/global-markets/$sector/$slug"
                    params={{ sector: "garment", slug: "gcc-comparative-report" }}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-brand-green px-4 py-2 text-xs font-extrabold text-white hover:bg-brand-orange transition-all duration-300 shadow-xs cursor-pointer"
                  >
                    <span>{ar ? "التقرير المقارن لدول الخليج (GCC)" : "GCC Comparative Report"}</span>
                  </Link>
                  {APPAREL_6_SUBREGIONS_META.filter((r) => r.id !== "gcc").map((reg) => (
                    <Link
                      key={reg.id}
                      to="/global-markets/$sector/$slug"
                      params={{ sector: "garment", slug: reg.comparativeSlug }}
                      className="rounded-xl border border-slate-200 dark:border-white/15 bg-white/80 dark:bg-white/5 px-3 py-2 text-[11px] font-bold text-slate-700 dark:text-slate-200 hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all duration-300 cursor-pointer"
                    >
                      {ar ? `مقارنة ${reg.titleAr}` : `${reg.titleEn} Compare`}
                    </Link>
                  ))}
                </div>
              )}
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
              </div>

              <Link
                to="/global-markets/manage"
                className="inline-flex items-center gap-2 rounded-full bg-brand-green px-5 py-2.5 text-xs font-bold text-white hover:bg-brand-orange transition-all duration-300 shadow-xs cursor-pointer"
              >
                <FolderCog className="size-4" />
                <span>{ar ? "إضافة أو استيراد دراسة جديدة" : "Import or Add Study"}</span>
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Layers className="size-4 text-brand-green" />
                <h2 className="font-head text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
                  {ar ? "جميع الدراسات" : "All Studies"}
                </h2>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredStudies.map((study) => {
              const st = STUDY_STATUS_LABELS[study.status];
              const regionLabel = GEO_REGIONS_ORDER.find((r) => r.id === study.region);

              return (
                <Link
                  key={study.id}
                  to="/global-markets/$sector/$slug"
                  params={{ sector: study.sector, slug: study.slug }}
                  className="interactive-card glass-box-interactive group flex flex-col justify-between rounded-3xl border border-slate-200/80 dark:border-white/15 bg-white/80 dark:bg-slate-900/70 p-6 backdrop-blur-2xl shadow-md space-y-4 text-start relative overflow-hidden cursor-pointer hover:border-brand-green/80 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 no-underline block"
                >
                  <div className="space-y-3">
                    {/* Top Row: Subregion, Opportunity Score & Regional Rank */}
                    <div className="flex flex-wrap items-center justify-between gap-1.5 text-[11px]">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 dark:bg-white/10 px-2.5 py-0.5 font-bold text-slate-700 dark:text-slate-200">
                          {regionLabel ? (ar ? regionLabel.ar : regionLabel.en) : study.region}
                        </span>
                        {study.sector !== "garment" && study.sector !== "environmental" && typeof study.regionalRank === "number" && (
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
                              ? "bg-brand-green text-white"
                              : study.opportunityScore >= 65
                                ? "bg-brand-orange text-white"
                                : "bg-red-500 text-white"
                          )}>
                            {study.opportunityScore}/100
                          </span>
                        </div>
                      ) : null}
                    </div>

                    {/* Country Header */}
                    <div>
                      <div className="flex items-center gap-2">
                        {study.countryCode && (
                          <img
                            src={`https://flagcdn.com/w40/${study.countryCode.toLowerCase()}.png`}
                            srcSet={`https://flagcdn.com/w80/${study.countryCode.toLowerCase()}.png 2x`}
                            alt={ar ? study.countryNameAr : study.countryNameEn}
                            className="h-4.5 w-7 rounded-[3px] object-cover border border-slate-300/60 dark:border-white/20 shrink-0 shadow-xs"
                            loading="lazy"
                          />
                        )}
                        <h3 className="font-head text-xl sm:text-2xl font-black text-slate-900 dark:text-white leading-snug group-hover:text-brand-green-text transition-colors">
                          {ar ? study.countryNameAr : study.countryNameEn}
                        </h3>
                      </div>

                      {(study.sector === "garment" || study.sector === "environmental") ? (
                        <h4 className="font-head text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200 mt-1.5">
                          {ar ? "دراسة شاملة للسوق" : "Comprehensive Market Study"}
                        </h4>
                      ) : (
                        study.titleAr && (
                          <h4 className="font-head text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200 mt-1.5">
                            {ar ? study.titleAr : study.titleEn}
                          </h4>
                        )
                      )}

                      {study.sector === "construction" ? (
                        <>
                          <div className="mt-2.5 flex flex-wrap items-center gap-2">
                            {study.opportunityTierAr && (
                              <span className="rounded-lg border border-brand-green/30 bg-brand-green/10 px-2.5 py-1 text-xs font-bold text-brand-green shadow-xs">
                                {ar ? study.opportunityTierAr : study.opportunityTier}
                              </span>
                            )}
                            <span className="rounded-lg border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 px-2.5 py-1 text-xs font-semibold text-slate-600 dark:text-slate-300">
                              {ar ? study.subRegionOrProjectAr : study.subRegionOrProjectEn}
                            </span>
                          </div>

                          <div className="mt-3 grid grid-cols-2 gap-2 text-start">
                            <div className="rounded-xl border border-slate-200/80 dark:border-white/10 bg-slate-50/80 dark:bg-white/5 p-2.5">
                              <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block">
                                {ar ? "متوسط سعر الشقق" : "Avg Flat Price"}
                              </span>
                              <span className="text-sm font-black font-mono text-brand-green">
                                {study.tradeIndicatorDisplay || "—"}
                              </span>
                            </div>
                            <div className="rounded-xl border border-slate-200/80 dark:border-white/10 bg-slate-50/80 dark:bg-white/5 p-2.5">
                              <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block">
                                {ar ? "العائد الإيجاري السنوي" : "Expected Rental Yield"}
                              </span>
                              <span className="text-sm font-black font-mono text-brand-orange">
                                {study.kpis.find((k) => k.id === "rental-yield")?.valueDisplay ?? "8.5%"}
                              </span>
                            </div>
                          </div>

                          <div className="mt-2.5 rounded-xl border border-slate-200/80 dark:border-white/10 bg-slate-50/60 dark:bg-white/5 p-2.5 text-xs text-slate-700 dark:text-slate-200">
                            <span className="font-bold text-brand-green block mb-1">
                              {ar ? study.dataCompletenessAr : study.dataCompletenessEn}
                            </span>
                            <p className="line-clamp-2 leading-relaxed text-slate-600 dark:text-slate-300 text-[11px]">
                              {ar ? study.subtitleAr : study.subtitleEn}
                            </p>
                          </div>
                        </>
                      ) : study.sector === "garment" ? (
                        <>
                          <div className="mt-2.5 flex flex-wrap items-center gap-2">
                            {/* خانة المؤشر التجاري */}
                            <div className="inline-flex items-center gap-1.5 rounded-lg border border-brand-green/30 bg-brand-green/10 px-3 py-1.5 text-xs sm:text-sm font-bold text-brand-green shadow-xs">
                              <span className="text-slate-600 dark:text-slate-300 font-semibold">{ar ? "المؤشر التجاري:" : "Trade Indicator:"}</span>
                              <span className="font-mono font-extrabold">{study.tradeIndicatorDisplay || "—"}</span>
                              {study.tradeIndicatorYear && (
                                <span className="text-xs text-slate-500 font-normal">({study.tradeIndicatorYear})</span>
                              )}
                            </div>

                            {/* خانة تحليل استراتيجي متكامل */}
                            <div className="inline-flex items-center gap-1.5 rounded-lg border border-brand-orange/30 bg-brand-orange/10 px-3 py-1.5 text-xs sm:text-sm font-bold text-brand-orange shadow-xs">
                              <span>{ar ? "تحليل استراتيجي متكامل" : "Integrated Strategic Analysis"}</span>
                            </div>
                          </div>

                          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 mt-2.5 line-clamp-2 leading-relaxed">
                            {ar
                              ? study.subtitleAr.replace(/^تحليل استراتيجي متكامل:\s*/, "")
                              : study.subtitleEn.replace(/^Integrated Strategic Analysis:\s*/, "")}
                          </p>
                        </>
                      ) : (
                        <>
                          {/* Opportunity Tier Badge */}
                          {study.opportunityTierAr && (
                            <div className="mt-2 flex items-center gap-1.5 text-xs sm:text-sm font-extrabold">
                              <span className={cn(
                                "rounded-lg px-2.5 py-1",
                                (study.opportunityScore ?? 0) >= 80
                                  ? "bg-brand-green/10 text-brand-green border border-brand-green/30"
                                  : (study.opportunityScore ?? 0) >= 65
                                    ? "bg-brand-orange/10 text-brand-orange border border-brand-orange/30"
                                    : "bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/30"
                              )}>
                                {ar ? study.opportunityTierAr : study.opportunityTier}
                              </span>
                            </div>
                          )}

                          {/* Trade Indicator */}
                          {study.tradeIndicatorDisplay && (
                            <p className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 mt-2.5 flex items-center gap-1.5">
                              <span className="text-slate-500 dark:text-slate-400">{ar ? "المؤشر التجاري:" : "Trade Indicator:"}</span>
                              <span className="text-brand-green font-mono font-extrabold">{study.tradeIndicatorDisplay}</span>
                              <span className="text-xs text-slate-500">({study.tradeIndicatorYear})</span>
                            </p>
                          )}

                          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 mt-2.5 line-clamp-2 leading-relaxed">
                            {ar ? study.subtitleAr : study.subtitleEn}
                          </p>
                        </>
                      )}
                    </div>

                    {/* Prospective Target Accounts Note */}
                    {study.sections.potentialBuyers?.summaryAr && (
                      <div className="rounded-xl border border-slate-200/80 dark:border-white/10 bg-slate-50/70 dark:bg-white/5 p-3 text-xs sm:text-sm text-slate-700 dark:text-slate-200 space-y-1">
                        <div className="font-extrabold text-slate-800 dark:text-slate-100 flex items-center justify-between">
                          <span>{ar ? "حسابات مستهدفة" : "Target Accounts"}</span>
                        </div>
                        <p className="line-clamp-2 text-slate-600 dark:text-slate-300 text-xs sm:text-[13px] leading-relaxed">
                          {ar
                            ? study.sections.potentialBuyers.summaryAr.replace(/^.*?:\s*/, "")
                            : study.sections.potentialBuyers.summaryEn.replace(/^.*?:\s*/, "")}
                        </p>
                      </div>
                    )}

                    {/* Product Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {(ar ? study.productTagsAr : study.productTagsEn).slice(0, 4).map((tag, i) => (
                        <span
                          key={i}
                          className="rounded-lg border border-slate-200/70 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-2.5 py-1 text-xs font-semibold text-slate-700 dark:text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions: View Study */}
                  <div className="space-y-2 pt-3 border-t border-slate-200/70 dark:border-white/10">
                    <div className="flex flex-wrap items-center gap-2">
                      <div
                        className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-brand-green px-3 py-2 text-xs font-bold text-white group-hover:bg-brand-orange transition-all duration-300 shadow-xs"
                      >
                        <span>
                          {study.sector === "construction"
                            ? (ar ? "عرض دراسة المدينة والأحياء" : "View City & Districts Study")
                            : (ar ? "عرض الدراسة الكاملة" : "View Full Study")}
                        </span>
                        {ar ? <ArrowLeft className="size-3.5 rtl:rotate-0" /> : <ArrowRight className="size-3.5" />}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
            </div>
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

