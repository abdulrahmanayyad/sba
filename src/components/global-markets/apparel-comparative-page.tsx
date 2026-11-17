import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  ExternalLink,
  Filter,
  Globe,
  Layers,
  Scale,
  ShieldAlert,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  GLOBAL_MARKET_SECTORS,
  type ApparelSubRegionId,
  type GlobalMarketSectorId,
  type GlobalMarketStudy,
  type MarketRoleCategory,
  type PriorityGrade,
  type TradeDataBasis,
} from "@/lib/global-markets-data";
import { useGlobalMarketsStudies } from "@/lib/global-markets-store";
import {
  APPAREL_EGYPT_RMG_CONTEXT,
  APPAREL_HS_PRODUCT_MAP,
  APPAREL_SUBREGIONS_META,
} from "@/lib/studies/apparel-master-studies";
import { MarketComparisonPanel } from "./market-comparison-panel";

interface ApparelComparativePageProps {
  ar: boolean;
  initialSector?: GlobalMarketSectorId | "all";
  initialSubRegion?: ApparelSubRegionId | "all";
  isGccReport?: boolean;
}

const ROLE_LABELS: Record<MarketRoleCategory, { ar: string; en: string; badgeClass: string }> = {
  consumer_market: {
    ar: "سوق استهلاكي",
    en: "Consumer Market",
    badgeClass: "border-brand-green/40 bg-brand-green/10 text-brand-green",
  },
  re_export_hub: {
    ar: "مركز إعادة تصدير / توزيع",
    en: "Re-Export / Hub",
    badgeClass: "border-sky-500/40 bg-sky-500/10 text-sky-700 dark:text-sky-300",
  },
  hybrid_partner: {
    ar: "سوق مزدوج (طلب + تصنيع)",
    en: "Dual / Partner",
    badgeClass: "border-indigo-500/40 bg-indigo-500/10 text-indigo-700 dark:text-indigo-300",
  },
  competitor_sourcing: {
    ar: "منافس تصنيعي / شريك توريد",
    en: "Competitor / Sourcing",
    badgeClass: "border-amber-500/40 bg-amber-500/10 text-amber-700 dark:text-amber-300",
  },
  high_risk: {
    ar: "سوق عالي المخاطر / مجمّد",
    en: "High-Risk (On Hold)",
    badgeClass: "border-rose-500/40 bg-rose-500/10 text-rose-700 dark:text-rose-300",
  },
};

const PRIORITY_BADGE_MAP: Record<PriorityGrade, string> = {
  A: "border-brand-green/50 bg-brand-green/15 text-brand-green",
  "A-": "border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
  "B+": "border-sky-500/40 bg-sky-500/10 text-sky-700 dark:text-sky-300",
  B: "border-blue-500/40 bg-blue-500/10 text-blue-700 dark:text-blue-300",
  "B-": "border-slate-400/50 bg-slate-500/10 text-slate-700 dark:text-slate-300",
  C: "border-amber-500/40 bg-amber-500/10 text-amber-700 dark:text-amber-300",
  D: "border-rose-500/50 bg-rose-500/15 text-rose-700 dark:text-rose-300",
};

export function ApparelComparativePage({
  ar,
  initialSector = "all",
  initialSubRegion = "all",
  isGccReport = false,
}: ApparelComparativePageProps) {
  const { studies } = useGlobalMarketsStudies();
  const [selectedSector, setSelectedSector] = useState<GlobalMarketSectorId | "all">(initialSector);

  const sectorStudies = useMemo(
    () => studies.filter((s) => s.status !== "archived" && (selectedSector === "all" || s.sector === selectedSector)),
    [studies, selectedSector],
  );

  const [subRegionFilter, setSubRegionFilter] = useState<ApparelSubRegionId | "all">(initialSubRegion);
  const [priorityFilter, setPriorityFilter] = useState<PriorityGrade | "all">("all");
  const [roleFilter, setRoleFilter] = useState<MarketRoleCategory | "all">("all");
  const [basisFilter, setBasisFilter] = useState<TradeDataBasis | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const activeRegionMeta = useMemo(
    () =>
      subRegionFilter === "all"
        ? null
        : APPAREL_SUBREGIONS_META.find((r) => r.id === subRegionFilter) ?? null,
    [subRegionFilter],
  );

  const filteredStudies = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return sectorStudies.filter((s) => {
      if (selectedSector === "garment" || selectedSector === "all") {
        if (subRegionFilter !== "all" && s.apparelSubRegion && s.apparelSubRegion !== subRegionFilter) {
          if (subRegionFilter === "levant" && (s.countryCode === "JO" || s.countryCode === "LB" || s.countryCode === "SY")) {
            // match Levant countries under Levant regional view
          } else if (subRegionFilter === "north_africa" && (s.countryCode === "EG" || s.countryCode === "LY" || s.countryCode === "TN" || s.countryCode === "DZ" || s.countryCode === "MA" || s.countryCode === "SD")) {
            // match North Africa countries under North Africa regional view
          } else {
            return false;
          }
        }
      }
      if (priorityFilter !== "all" && s.priorityGrade && s.priorityGrade !== priorityFilter) return false;
      if (roleFilter !== "all" && s.marketRole && s.marketRole !== roleFilter) return false;
      if (basisFilter !== "all" && s.dataBasis && s.dataBasis !== basisFilter) return false;
      if (q) {
        const hay = [
          s.countryNameAr || "",
          s.countryNameEn || "",
          ...(s.productTagsAr || []),
          ...(s.productTagsEn || []),
          s.sections?.potentialBuyers?.summaryEn || "",
          s.sections?.potentialBuyers?.summaryAr || "",
        ]
          .join(" ")
          .toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [sectorStudies, selectedSector, subRegionFilter, priorityFilter, roleFilter, basisFilter, searchQuery]);

  // Like-for-like 2024 HS61+HS62 customs imports strictly (never mix 2025 or SITC 84 or Trade.gov estimates)
  const comparable2024HsStudies = useMemo(
    () =>
      filteredStudies
        .filter(
          (s) =>
            s.dataBasis === "hs61_hs62_customs" &&
            s.tradeIndicatorYear === "2024" &&
            typeof s.tradeIndicatorNumericUsdB === "number",
        )
        .sort((a, b) => (b.tradeIndicatorNumericUsdB ?? 0) - (a.tradeIndicatorNumericUsdB ?? 0)),
    [filteredStudies],
  );

  // Like-for-like 2025 HS61+HS62 subset (Saudi Arabia, Kuwait)
  const comparable2025HsStudies = useMemo(
    () =>
      filteredStudies
        .filter(
          (s) =>
            s.dataBasis === "hs61_hs62_customs" &&
            s.tradeIndicatorYear === "2025" &&
            typeof s.tradeIndicatorNumericUsdB === "number",
        )
        .sort((a, b) => (b.tradeIndicatorNumericUsdB ?? 0) - (a.tradeIndicatorNumericUsdB ?? 0)),
    [filteredStudies],
  );

  const max2024Val = Math.max(
    1,
    ...comparable2024HsStudies.map((s) => s.tradeIndicatorNumericUsdB ?? 0),
  );

  const currentSectorObj = selectedSector === "all" ? null : GLOBAL_MARKET_SECTORS.find((s) => s.id === selectedSector);

  const pageTitleAr = isGccReport
    ? "التقرير المقارن لأسواق دول مجلس التعاون الخليجي"
    : activeRegionMeta
    ? `المقارنة الإقليمية: ${activeRegionMeta.titleAr}`
    : currentSectorObj
    ? currentSectorObj.nameAr
    : "المقارنة الشاملة لكافة القطاعات";

  const pageTitleEn = isGccReport
    ? "GCC Comparative Report — Strategic Market Intelligence"
    : activeRegionMeta
    ? `Regional Comparative Analysis: ${activeRegionMeta.titleEn}`
    : currentSectorObj
    ? currentSectorObj.nameEn
    : "Comprehensive Comparison Across All Sectors";

  return (
    <div className="w-full pb-24">
      {/* 1. Breadcrumb */}
      <div className="site-container pt-8 pb-3">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs font-bold text-slate-500">
          <Link to="/global-markets" className="hover:text-brand-green transition-colors">
            {ar ? "الأسواق العالمية" : "Global Markets"}
          </Link>
          <ChevronRight className="size-3.5 rtl:rotate-180" />
          {selectedSector !== "all" && currentSectorObj ? (
            <>
              <Link
                to="/global-markets/$sector"
                params={{ sector: selectedSector }}
                className="hover:text-brand-green transition-colors"
              >
                {ar ? currentSectorObj.nameAr : currentSectorObj.nameEn}
              </Link>
              <ChevronRight className="size-3.5 rtl:rotate-180" />
            </>
          ) : null}
          <span className="text-slate-900 dark:text-white">
            {isGccReport
              ? ar
                ? "التقرير المقارن للخليج"
                : "GCC Comparative Report"
              : activeRegionMeta
              ? ar
                ? activeRegionMeta.titleAr
                : activeRegionMeta.titleEn
              : ar
              ? "المقارنة الشاملة للأسواق الدولية"
              : "Global Comparative Dashboard"}
          </span>
        </nav>
      </div>

      {/* 2. Hero & Summary Banner */}
      <section className="site-container pb-6">
        <div className="rounded-3xl border border-white/50 bg-white/80 dark:bg-slate-900/75 p-6 sm:p-10 shadow-xl backdrop-blur-2xl space-y-6 text-start">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-white/15 bg-slate-100 dark:bg-white/10 px-3.5 py-1 text-xs font-bold text-slate-800 dark:text-slate-100 shadow-xs">
              <span className="size-2 rounded-full bg-brand-orange shrink-0" />
              <span>
                {ar
                  ? "مجموعة سامي بن عياد · منظومة المقارنة الإقليمية والعالمية"
                  : "SAMI BIN AYYAD GROUP · Global & Regional Market Comparison"}
              </span>
            </span>

            {selectedSector === "all" ? (
              <Link
                to="/global-markets"
                className="inline-flex items-center gap-1.5 rounded-full border border-brand-green/30 bg-brand-green/10 px-4 py-1.5 text-xs font-bold text-brand-green hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all duration-300 shadow-xs cursor-pointer"
              >
                {ar ? <ArrowRight className="size-3.5" /> : <ArrowLeft className="size-3.5" />}
                <span>{ar ? "العودة للأسواق العالمية" : "Back to Global Markets"}</span>
              </Link>
            ) : (
              <Link
                to="/global-markets/$sector"
                params={{ sector: selectedSector }}
                className="inline-flex items-center gap-1.5 rounded-full border border-brand-green/30 bg-brand-green/10 px-4 py-1.5 text-xs font-bold text-brand-green hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all duration-300 shadow-xs cursor-pointer"
              >
                {ar ? <ArrowRight className="size-3.5" /> : <ArrowLeft className="size-3.5" />}
                <span>{ar ? "العودة لدليل دول القطاع" : "Back to Sector Directory"}</span>
              </Link>
            )}
          </div>

          <div className="space-y-2">
            <h1 className="font-head text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
              {ar ? pageTitleAr : pageTitleEn}
            </h1>
          </div>

          {/* Sector Selector Tabs (جميع القطاعات الاستراتيجية) */}
          <div className="space-y-2 pt-2 border-t border-slate-200/70 dark:border-white/10">
            <span className="text-[11px] font-bold text-slate-500 block">
              {ar ? "اختيار القطاع للمقارنة:" : "Select Sector for Comparison:"}
            </span>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => {
                  setSelectedSector("all");
                  setSubRegionFilter("all");
                }}
                className={cn(
                  "rounded-full px-4 py-1.5 text-xs font-bold border transition-all duration-300 cursor-pointer shadow-xs",
                  selectedSector === "all"
                    ? "border-brand-green bg-brand-green text-white hover:bg-brand-orange hover:border-brand-orange"
                    : "border-slate-200 dark:border-white/15 bg-white dark:bg-white/5 text-slate-700 dark:text-slate-200 hover:bg-brand-orange hover:text-white hover:border-brand-orange",
                )}
              >
                {ar ? "جميع القطاعات" : "All Sectors"}
              </button>
              {GLOBAL_MARKET_SECTORS.map((sec) => (
                <button
                  key={sec.id}
                  type="button"
                  onClick={() => {
                    setSelectedSector(sec.id);
                    setSubRegionFilter("all");
                  }}
                  className={cn(
                    "rounded-full px-4 py-1.5 text-xs font-bold border transition-all duration-300 cursor-pointer shadow-xs",
                    selectedSector === sec.id
                      ? "border-brand-green bg-brand-green text-white hover:bg-brand-orange hover:border-brand-orange"
                      : "border-slate-200 dark:border-white/15 bg-white dark:bg-white/5 text-slate-700 dark:text-slate-200 hover:bg-brand-orange hover:text-white hover:border-brand-orange",
                  )}
                >
                  {ar ? sec.nameAr : sec.nameEn}
                </button>
              ))}
            </div>
          </div>

          {/* Regional Comparative Navigation Bar */}
          {(selectedSector === "all" || selectedSector === "garment") && (
            <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-200/70 dark:border-white/10">
              <button
                type="button"
                onClick={() => setSubRegionFilter("all")}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 text-xs font-bold transition-all duration-300 cursor-pointer shadow-xs",
                  subRegionFilter === "all" && !isGccReport
                    ? "border-brand-green bg-brand-green text-white hover:bg-brand-orange hover:border-brand-orange"
                    : "border-slate-200 dark:border-white/15 bg-white/80 dark:bg-white/5 text-slate-700 dark:text-slate-200 hover:bg-brand-orange hover:text-white hover:border-brand-orange",
                )}
              >
                {ar ? `جميع الأقاليم (${sectorStudies.length})` : `All Regions (${sectorStudies.length})`}
              </button>

              {APPAREL_SUBREGIONS_META.map((reg) => {
                const count = sectorStudies.filter((s) => s.apparelSubRegion === reg.id).length;
                const isSelected = subRegionFilter === reg.id;
                return (
                  <button
                    key={reg.id}
                    type="button"
                    onClick={() => setSubRegionFilter(reg.id)}
                    className={cn(
                      "rounded-full border px-3.5 py-1.5 text-xs font-bold transition-all duration-300 cursor-pointer shadow-xs",
                      isSelected
                        ? "border-brand-green bg-brand-green text-white hover:bg-brand-orange hover:border-brand-orange"
                        : "border-slate-200 dark:border-white/15 bg-white/80 dark:bg-white/5 text-slate-700 dark:text-slate-200 hover:bg-brand-orange hover:text-white hover:border-brand-orange",
                    )}
                  >
                    {ar ? `${reg.titleAr} (${count})` : `${reg.titleEn} (${count})`}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* 3. Filter Controls */}
      <section className="site-container pb-6">
        <div className="rounded-3xl border border-slate-200/80 dark:border-white/15 bg-white/75 dark:bg-slate-900/60 p-5 sm:p-6 backdrop-blur-2xl shadow-md space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Filter className="size-4 text-brand-green" />
              <h2 className="font-head text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
                {ar ? "تصفية الأسواق حسب الإقليم والأولوية والدور ونطاق البيانات" : "Filter Markets by Region, Priority, Role & Data Basis"}
              </h2>
            </div>
            <span className="text-xs font-bold text-slate-500">
              {ar ? `المعروض: ${filteredStudies.length} من ${sectorStudies.length} دولة` : `Showing ${filteredStudies.length} of ${sectorStudies.length} markets`}
            </span>
          </div>

          <div className="grid gap-3 md:grid-cols-12">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={ar ? "ابحث بالدولة، المنتج، أو المشتري المستهدف..." : "Search country, product, or target buyer..."}
              className="md:col-span-4 rounded-2xl border border-slate-200 dark:border-white/15 bg-white dark:bg-slate-950/60 px-4 py-2.5 text-xs focus:border-brand-green focus:outline-none"
            />

            <select
              value={subRegionFilter}
              onChange={(e) => setSubRegionFilter(e.target.value as ApparelSubRegionId | "all")}
              aria-label={ar ? "الإقليم" : "Region"}
              className="md:col-span-2 rounded-2xl border border-slate-200 dark:border-white/15 bg-white dark:bg-slate-950/60 px-3 py-2.5 text-xs font-semibold focus:outline-none"
            >
              <option value="all">{ar ? "جميع الأقاليم" : "All Regions"}</option>
              {APPAREL_SUBREGIONS_META.map((r) => (
                <option key={r.id} value={r.id}>
                  {ar ? r.titleAr : r.titleEn}
                </option>
              ))}
            </select>

            <select
              value={priorityFilter}
              onChange={(e) => setPriorityFilter(e.target.value as PriorityGrade | "all")}
              aria-label={ar ? "الأولوية" : "Priority"}
              className="md:col-span-2 rounded-2xl border border-slate-200 dark:border-white/15 bg-white dark:bg-slate-950/60 px-3 py-2.5 text-xs font-semibold focus:outline-none"
            >
              <option value="all">{ar ? "كافة الأولويات" : "All Priorities"}</option>
              {(["A", "A-", "B+", "B", "B-", "C", "D"] as PriorityGrade[]).map((p) => (
                <option key={p} value={p}>
                  {ar ? `الأولوية ${p}` : `Priority ${p}`}
                </option>
              ))}
            </select>

            <select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value as MarketRoleCategory | "all")}
              aria-label={ar ? "دور السوق" : "Market Role"}
              className="md:col-span-2 rounded-2xl border border-slate-200 dark:border-white/15 bg-white dark:bg-slate-950/60 px-3 py-2.5 text-xs font-semibold focus:outline-none"
            >
              <option value="all">{ar ? "كافة الأدوار" : "All Roles"}</option>
              {(Object.keys(ROLE_LABELS) as MarketRoleCategory[]).map((k) => (
                <option key={k} value={k}>
                  {ar ? ROLE_LABELS[k].ar : ROLE_LABELS[k].en}
                </option>
              ))}
            </select>

            <select
              value={basisFilter}
              onChange={(e) => setBasisFilter(e.target.value as TradeDataBasis | "all")}
              aria-label={ar ? "حالة البيانات" : "Data Basis"}
              className="md:col-span-2 rounded-2xl border border-slate-200 dark:border-white/15 bg-white dark:bg-slate-950/60 px-3 py-2.5 text-xs font-semibold focus:outline-none"
            >
              <option value="all">{ar ? "كافة حالات البيانات" : "All Data Bases"}</option>
              <option value="hs61_hs62_customs">{ar ? "HS61+HS62 موثق" : "Verified HS61+HS62"}</option>
              <option value="eurostat_sitc84">{ar ? "Eurostat SITC 84" : "Eurostat SITC 84"}</option>
              <option value="tradegov_estimate">{ar ? "تقدير Trade.gov" : "Trade.gov Estimate"}</option>
              <option value="secondary_aggregate">{ar ? "مؤشر ثانوي مجمّع" : "Secondary Aggregate"}</option>
              <option value="pending_verification">{ar ? "قيد التحقق" : "Pending Verification"}</option>
            </select>
          </div>
        </div>
      </section>

      {/* 4. Like-for-Like Bar Comparison Charts (Strictly Separated by Year & HS Scope) */}
      {(comparable2024HsStudies.length > 0 || comparable2025HsStudies.length > 0) && (
        <section className="site-container pb-6 grid gap-6 lg:grid-cols-12">
          {comparable2024HsStudies.length > 0 && (
            <div
              className={cn(
                "rounded-3xl border border-slate-200/80 dark:border-white/15 bg-white/75 dark:bg-slate-900/60 p-6 backdrop-blur-2xl shadow-md space-y-4 text-start",
                comparable2025HsStudies.length > 0 ? "lg:col-span-8" : "lg:col-span-12",
              )}
            >
              <div className="border-b border-slate-200/70 dark:border-white/10 pb-3 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="font-head text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
                    {ar
                      ? "مقارنة جمركية لعام 2024 (مليار دولار)"
                      : "Customs Comparison 2024 (USD Billion)"}
                  </h3>
                </div>
                <span className="rounded-full bg-slate-100 dark:bg-white/10 px-2.5 py-0.5 text-[10px] font-bold text-slate-600 dark:text-slate-300">
                  UN Comtrade-derived · 2024
                </span>
              </div>

              <div className="space-y-2.5">
                {comparable2024HsStudies.map((s) => {
                  const val = s.tradeIndicatorNumericUsdB ?? 0;
                  const pct = Math.max(2, Math.round((val / max2024Val) * 100));
                  return (
                    <div key={s.id} className="space-y-1">
                      <div className="flex items-center justify-between gap-2 text-xs">
                        <Link
                          to="/global-markets/$sector/$slug"
                          params={{ sector: s.sector || "garment", slug: s.slug }}
                          className="font-bold text-slate-800 dark:text-slate-100 hover:text-brand-green flex items-center gap-2"
                        >
                          {s.countryCode && (
                            <img
                              src={`https://flagcdn.com/w40/${s.countryCode.toLowerCase()}.png`}
                              alt={ar ? s.countryNameAr : s.countryNameEn}
                              className="h-3.5 w-5 rounded-[2px] object-cover border border-slate-300/60"
                              loading="lazy"
                            />
                          )}
                          <span>{ar ? s.countryNameAr : s.countryNameEn}</span>
                          {s.marketRole === "re_export_hub" && (
                            <span className="rounded bg-sky-500/15 px-1.5 py-0.5 text-[9px] font-bold text-sky-700 dark:text-sky-300">
                              {ar ? "يشمل إعادة تصدير" : "Re-export hub"}
                            </span>
                          )}
                        </Link>
                        <span className="font-mono font-bold text-slate-900 dark:text-white">
                          {s.tradeIndicatorDisplay}
                        </span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200/80 dark:bg-slate-800">
                        <div className="h-full rounded-full bg-brand-green" style={{ width: `${pct}%` }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {comparable2025HsStudies.length > 0 && (
            <div
              className={cn(
                "rounded-3xl border border-slate-200/80 dark:border-white/15 bg-white/75 dark:bg-slate-900/60 p-6 backdrop-blur-2xl shadow-md space-y-4 text-start flex flex-col justify-between",
                comparable2024HsStudies.length > 0 ? "lg:col-span-4" : "lg:col-span-12",
              )}
            >
              <div className="space-y-4">
                <div className="border-b border-slate-200/70 dark:border-white/10 pb-3">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-head text-sm sm:text-base font-extrabold text-brand-green">
                      {ar ? "بيانات HS61+HS62 لعام 2025" : "2025 HS61+HS62 Imports"}
                    </h3>
                    <span className="rounded-full bg-brand-green/10 px-2.5 py-0.5 text-[10px] font-bold text-brand-green">
                      2025 Baseline
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  {comparable2025HsStudies.map((s) => {
                    const max25 = Math.max(1, ...comparable2025HsStudies.map((x) => x.tradeIndicatorNumericUsdB ?? 0));
                    const val = s.tradeIndicatorNumericUsdB ?? 0;
                    const pct = Math.max(4, Math.round((val / max25) * 100));
                    return (
                      <div key={s.id} className="space-y-1">
                        <div className="flex items-center justify-between text-xs font-bold">
                          <Link
                            to="/global-markets/$sector/$slug"
                            params={{ sector: s.sector || "garment", slug: s.slug }}
                            className="flex items-center gap-2 text-slate-800 dark:text-slate-100 hover:text-brand-green"
                          >
                            {s.countryCode && (
                              <img
                                src={`https://flagcdn.com/w40/${s.countryCode.toLowerCase()}.png`}
                                alt={ar ? s.countryNameAr : s.countryNameEn}
                                className="h-3.5 w-5 rounded-[2px] object-cover border border-slate-300/60"
                                loading="lazy"
                              />
                            )}
                            <span>{ar ? s.countryNameAr : s.countryNameEn}</span>
                          </Link>
                          <span className="font-mono text-slate-900 dark:text-white">{s.tradeIndicatorDisplay}</span>
                        </div>
                        <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-200/80 dark:bg-slate-800">
                          <div className="h-full rounded-full bg-brand-green" style={{ width: `${pct}%` }} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Egypt Sector-Wide Context Strip */}
              <div className="rounded-2xl border border-slate-200/80 dark:border-white/10 bg-slate-50/80 dark:bg-white/5 p-4 space-y-1.5 text-xs">
                <div className="font-extrabold text-slate-900 dark:text-white">
                  {ar
                    ? `السياق المصري العام (2024): $${APPAREL_EGYPT_RMG_CONTEXT.totalExports2024UsdB} مليار (+${APPAREL_EGYPT_RMG_CONTEXT.growthVs2023Pct}%)`
                    : `Egypt Sector Exports Context (2024): $${APPAREL_EGYPT_RMG_CONTEXT.totalExports2024UsdB}B (+${APPAREL_EGYPT_RMG_CONTEXT.growthVs2023Pct}%)`}
                </div>
                <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                  {ar ? APPAREL_EGYPT_RMG_CONTEXT.noteAr : APPAREL_EGYPT_RMG_CONTEXT.noteEn}
                </p>
                <a
                  href={(APPAREL_EGYPT_RMG_CONTEXT as any).sourceUrl || "https://www.sis.gov.eg"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-green hover:underline"
                >
                  <span>{ar ? "مرجع المجلس التصديري (SIS)" : "Egypt RMG Council Reference (SIS)"}</span>
                  <ExternalLink className="size-3" />
                </a>
              </div>
            </div>
          )}
        </section>
      )}

      {/* 5. Master International Markets Matrix Table */}
      <section className="site-container pb-8">
        <div className="rounded-3xl border border-slate-200/80 dark:border-white/15 bg-white/80 dark:bg-slate-900/70 p-6 sm:p-8 backdrop-blur-2xl shadow-lg space-y-5 text-start">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/70 dark:border-white/10 pb-3">
            <div>
              <h2 className="font-head text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
                {ar ? "مصفوفة المقارنة التفصيلية ونطاق البيانات" : "Detailed Country Matrix & Data Completeness"}
              </h2>
            </div>
            <span className="text-xs font-semibold text-slate-500">
              {ar ? "اضغط على اسم الدولة لفتح الملف الكامل" : "Select any country to open its full study"}
            </span>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200/80 dark:border-white/10">
            <table className="w-full text-xs text-start">
              <thead className="bg-slate-100/90 dark:bg-slate-800/80 text-slate-800 dark:text-slate-100">
                <tr>
                  <th className="px-3 py-3 font-extrabold text-start whitespace-nowrap w-[13%]">{ar ? "الدولة" : "Country"}</th>
                  <th className="px-2 py-3 font-extrabold text-center whitespace-nowrap w-[10%]">{ar ? "الإقليم" : "Region"}</th>
                  <th className="px-1.5 py-3 font-extrabold text-center whitespace-nowrap w-[6%]">{ar ? "الأولوية" : "Priority"}</th>
                  <th className="px-2 py-3 font-extrabold text-center whitespace-nowrap w-[10%]">{ar ? "الدور السوقي" : "Market Role"}</th>
                  <th className="px-2 py-3 font-extrabold text-center whitespace-nowrap w-[9%]">{ar ? "المؤشر / السنة" : "Indicator / Year"}</th>
                  <th className="px-4 py-3 font-extrabold text-center w-[52%] min-w-[350px]">{ar ? "الجهات المستهدفة" : "Target Accounts"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/70 dark:divide-white/10">
                {filteredStudies.map((s: GlobalMarketStudy) => {
                  const regionMeta = APPAREL_SUBREGIONS_META.find((r) => r.id === s.apparelSubRegion);
                  const roleCfg = s.marketRole ? ROLE_LABELS[s.marketRole] : null;
                  const prioCls = s.priorityGrade ? PRIORITY_BADGE_MAP[s.priorityGrade] : "";
                  const buyers = (ar ? s.sections?.potentialBuyers?.bulletsAr : s.sections?.potentialBuyers?.bulletsEn) || [];
                  const cleanBuyers = buyers
                    .slice(0, 3)
                    .map((b) =>
                      ar
                        ? b.replace(/ \(جهة مستهدفة محتملة\)$/, "").trim()
                        : b.replace(/ \(Prospective Target Account\)$/, "").trim()
                    );

                  return (
                    <tr key={s.id} className="hover:bg-slate-50/80 dark:hover:bg-white/5 align-middle">
                      <td className="px-3 py-3 font-bold whitespace-nowrap text-start">
                        <Link
                          to="/global-markets/$sector/$slug"
                          params={{ sector: s.sector || "garment", slug: s.slug }}
                          className="inline-flex items-center justify-start gap-1.5 text-slate-900 dark:text-white hover:text-brand-green"
                        >
                          {s.countryCode && (
                            <img
                              src={`https://flagcdn.com/w40/${s.countryCode.toLowerCase()}.png`}
                              alt={ar ? s.countryNameAr : s.countryNameEn}
                              className="h-3.5 w-5 rounded-[2px] object-cover border border-slate-300/60 shrink-0"
                              loading="lazy"
                            />
                          )}
                          <span className="text-xs">{ar ? s.countryNameAr : s.countryNameEn}</span>
                        </Link>
                      </td>
                      <td className="px-2 py-3 text-slate-600 dark:text-slate-300 whitespace-nowrap text-[11px] text-center">
                        {regionMeta ? (ar ? regionMeta.titleAr : regionMeta.titleEn) : "—"}
                      </td>
                      <td className="px-1.5 py-3 text-center whitespace-nowrap">
                        {s.priorityGrade && (
                          <span className={cn("inline-flex rounded-full border px-2 py-0.5 text-[10px] font-extrabold", prioCls)}>
                            {s.priorityGrade}
                          </span>
                        )}
                      </td>
                      <td className="px-2 py-3 text-center whitespace-nowrap">
                        {roleCfg && (
                          <span className={cn("inline-flex rounded-full border px-2 py-0.5 text-[10px] font-bold", roleCfg.badgeClass)}>
                            {ar ? roleCfg.ar : roleCfg.en}
                          </span>
                        )}
                      </td>
                      <td className="px-2 py-3 font-mono whitespace-nowrap text-center">
                        {s.dataBasis === "pending_verification" ? (
                          <span className="text-amber-700 dark:text-amber-300 font-semibold font-sans text-[11px] block text-center">
                            {ar ? "قيد التحقق" : "Pending Verification"}
                          </span>
                        ) : (
                          <div className="flex flex-col items-center justify-center text-center">
                            <span className="font-bold text-slate-900 dark:text-white leading-tight text-xs">{s.tradeIndicatorDisplay}</span>
                            <span className="text-slate-500 text-[10px] font-sans mt-0.5">({s.tradeIndicatorYear})</span>
                          </div>
                        )}
                      </td>
                      <td className="px-4 py-3 text-xs text-slate-700 dark:text-slate-200 leading-relaxed text-center">
                        {cleanBuyers.length > 0 ? (
                          <div className="space-y-1.5 inline-block text-start w-full">
                            {cleanBuyers.map((buyer, bIdx) => (
                              <div key={bIdx} className="flex items-start gap-1.5">
                                <span className="size-1 rounded-full bg-brand-green mt-1.5 shrink-0" />
                                <span className="leading-relaxed">{buyer}</span>
                              </div>
                            ))}
                          </div>
                        ) : (
                          "—"
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. Interactive Side-by-Side Comparison Matrix */}
      <section className="site-container pb-8">
        <MarketComparisonPanel sectorId={selectedSector === "all" ? "garment" : selectedSector} studies={filteredStudies} ar={ar} />
      </section>

      {/* 7. HS Product Map & Launch Waves Context */}
      <section className="site-container grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-7 rounded-3xl border border-slate-200/80 dark:border-white/15 bg-white/80 dark:bg-slate-900/70 p-6 backdrop-blur-2xl shadow-md space-y-4 text-start">
          <div className="flex items-center gap-2 border-b border-slate-200/70 dark:border-white/10 pb-3">
            <Globe className="size-4 text-brand-green" />
            <h3 className="font-head text-base font-extrabold text-slate-900 dark:text-white">
              {ar ? "خريطة بنود النظام المنسق الموصى بفحصها (HS Product Map)" : "Priority HS Product Headings Map"}
            </h3>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            {APPAREL_HS_PRODUCT_MAP.map((h) => (
              <div
                key={h.hsHeading}
                className="rounded-xl border border-slate-200/70 dark:border-white/10 bg-slate-50/70 dark:bg-white/5 p-3 text-xs space-y-1"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono font-extrabold text-brand-green">HS {h.hsHeading}</span>
                  <span className="text-[10px] font-bold text-slate-500">{ar ? h.relevanceAr : h.relevanceEn}</span>
                </div>
                <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-snug">
                  {ar ? h.descAr : h.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 rounded-3xl border border-slate-200/80 dark:border-white/15 bg-white/80 dark:bg-slate-900/70 p-6 backdrop-blur-2xl shadow-md space-y-4 text-start">
          <div className="flex items-center gap-2 border-b border-slate-200/70 dark:border-white/10 pb-3">
            <ShieldAlert className="size-4 text-brand-orange" />
            <h3 className="font-head text-base font-extrabold text-slate-900 dark:text-white">
              {ar ? "موجات الإطلاق التجاري (Launch Waves)" : "Commercial Launch Phasing"}
            </h3>
          </div>
          <div className="space-y-3 text-xs leading-relaxed">
            <div className="rounded-xl border border-brand-green/30 bg-brand-green/5 p-3">
              <strong className="text-brand-green block">Wave 1 — {ar ? "الأولوية الفورية" : "Immediate Outreach"}</strong>
              <span className="text-slate-700 dark:text-slate-200">
                {ar
                  ? "دول مجلس التعاون الخليجي (GCC) + المملكة المتحدة + ألمانيا + فرنسا + الولايات المتحدة (التركيز على المستوردين المؤهلين)."
                  : "GCC + UK + Germany + France + USA (focused on verified importers and sourcing accounts)."}
              </span>
            </div>
            <div className="rounded-xl border border-sky-500/30 bg-sky-500/5 p-3">
              <strong className="text-sky-700 dark:text-sky-300 block">Wave 2 — {ar ? "التوسع المنظم" : "Structured Expansion"}</strong>
              <span className="text-slate-700 dark:text-slate-200">
                {ar
                  ? "إيطاليا + إسبانيا + هولندا + بلجيكا + بولندا + البرتغال + كندا + أستراليا + اليابان + كوريا الجنوبية."
                  : "Italy + Spain + Netherlands + Belgium + Poland + Portugal + Canada + Australia + Japan + South Korea."}
              </span>
            </div>
            <div className="rounded-xl border border-slate-300/70 dark:border-white/15 bg-slate-50/80 dark:bg-white/5 p-3">
              <strong className="text-slate-800 dark:text-white block">Wave 3 — {ar ? "الأسواق المشروطة والتحقق المسبق" : "Validation-First Markets"}</strong>
              <span className="text-slate-600 dark:text-slate-300">
                {ar
                  ? "المغرب + تونس + الأردن + لبنان + العراق + ليبيا + المكسيك + تشيلي — بعد التحقق من المستوردين والسداد والتعريفات."
                  : "Morocco + Tunisia + Jordan + Lebanon + Iraq + Libya + Mexico + Chile after importer, payment & tariff verification."}
              </span>
            </div>
            <div className="rounded-xl border border-rose-500/30 bg-rose-500/5 p-3">
              <strong className="text-rose-700 dark:text-rose-300 block">
                {ar ? "أسواق عالية المخاطر / مجمّدة مؤقتًا" : "Restricted / High-Risk (On Hold)"}
              </strong>
              <span className="text-slate-600 dark:text-slate-300">
                {ar
                  ? "السودان معلق لحين استيفاء التخليص الأمني والمصرفي؛ وسوريا تخضع لضوابط الامتثال وقوائم الفحص المحددة بعد رفع العقوبات الشاملة."
                  : "Sudan remains on hold pending security and banking clearance; Syria operates under targeted compliance screening following comprehensive sanctions relief."}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

