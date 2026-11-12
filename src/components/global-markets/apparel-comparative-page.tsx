import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  AlertTriangle,
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
  type ApparelSubRegionId,
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
} from "@/lib/studies/apparel-41-countries";
import { MarketComparisonPanel } from "./market-comparison-panel";

interface ApparelComparativePageProps {
  ar: boolean;
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
  initialSubRegion = "all",
  isGccReport = false,
}: ApparelComparativePageProps) {
  const { studies } = useGlobalMarketsStudies();
  const garmentStudies = useMemo(
    () => studies.filter((s) => s.sector === "garment" && s.status !== "archived"),
    [studies],
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
    return garmentStudies.filter((s) => {
      if (subRegionFilter !== "all" && s.apparelSubRegion !== subRegionFilter) return false;
      if (priorityFilter !== "all" && s.priorityGrade !== priorityFilter) return false;
      if (roleFilter !== "all" && s.marketRole !== roleFilter) return false;
      if (basisFilter !== "all" && s.dataBasis !== basisFilter) return false;
      if (q) {
        const hay = [
          s.countryNameAr,
          s.countryNameEn,
          ...s.productTagsAr,
          ...s.productTagsEn,
          s.sections.potentialBuyers?.summaryEn || "",
        ]
          .join(" ")
          .toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [garmentStudies, subRegionFilter, priorityFilter, roleFilter, basisFilter, searchQuery]);

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

  const countsByStatus = useMemo(() => {
    const hsConfirmed = garmentStudies.filter((s) => s.dataBasis === "hs61_hs62_customs").length;
    const altBasis = garmentStudies.filter(
      (s) =>
        s.dataBasis === "eurostat_sitc84" ||
        s.dataBasis === "tradegov_estimate" ||
        s.dataBasis === "secondary_aggregate",
    ).length;
    const pending = garmentStudies.filter((s) => s.dataBasis === "pending_verification").length;
    return { total: garmentStudies.length, hsConfirmed, altBasis, pending };
  }, [garmentStudies]);

  const pageTitleAr = isGccReport
    ? "التقرير المقارن لأسواق دول مجلس التعاون الخليجي — قطاع الملابس والمنسوجات"
    : activeRegionMeta
    ? `المقارنة الإقليمية: ${activeRegionMeta.titleAr}`
    : "لوحة المقارنة الشاملة للأسواق العالمية — قطاع الملابس والمنسوجات (41 دولة)";

  const pageTitleEn = isGccReport
    ? "GCC Comparative Report — Apparel & Textiles Market Intelligence"
    : activeRegionMeta
    ? `Regional Comparative Analysis: ${activeRegionMeta.titleEn}`
    : "Global Apparel Markets Comparative Dashboard (41 Countries)";

  return (
    <div className="w-full pb-24">
      {/* 1. Breadcrumb */}
      <div className="site-container pt-8 pb-3">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs font-bold text-slate-500">
          <Link to="/global-markets" className="hover:text-slate-900 dark:hover:text-white">
            {ar ? "الأسواق العالمية" : "Global Markets"}
          </Link>
          <ChevronRight className="size-3.5 rtl:rotate-180" />
          <Link
            to="/global-markets/$sector"
            params={{ sector: "garment" }}
            className="hover:text-slate-900 dark:hover:text-white"
          >
            {ar ? "الملابس والمنسوجات" : "Apparel & Textiles"}
          </Link>
          <ChevronRight className="size-3.5 rtl:rotate-180" />
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
              ? "المقارنة الشاملة (41 دولة)"
              : "Global Comparative Dashboard"}
          </span>
        </nav>
      </div>

      {/* 2. Hero & Summary Banner */}
      <section className="site-container pb-6">
        <div className="rounded-3xl border border-white/50 bg-white/80 dark:bg-slate-900/75 p-6 sm:p-10 shadow-xl backdrop-blur-2xl space-y-6 text-start">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-white/15 bg-slate-100 dark:bg-white/10 px-3.5 py-1 text-xs font-bold text-slate-800 dark:text-slate-100">
              <Scale className="size-3.5 text-brand-green" />
              <span>
                {ar
                  ? "مجموعة سامي بن عياد · منظومة المقارنة الإقليمية والعالمية"
                  : "SAMI BIN AYYAD GROUP · Global & Regional Market Comparison"}
              </span>
            </span>

            <Link
              to="/global-markets/$sector"
              params={{ sector: "garment" }}
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/15 bg-white dark:bg-slate-800 px-4 py-1.5 text-xs font-bold text-slate-800 dark:text-white hover:border-brand-green"
            >
              {ar ? <ArrowRight className="size-3.5" /> : <ArrowLeft className="size-3.5" />}
              <span>{ar ? "العودة لدليل دول القطاع" : "Back to Apparel Directory"}</span>
            </Link>
          </div>

          <div className="space-y-2">
            <h1 className="font-head text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
              {ar ? pageTitleAr : pageTitleEn}
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-4xl leading-relaxed">
              {ar
                ? "مقارنة منضبطة منهجيًا للدول الـ41 حسب المناطق الجغرافية، ومستوى الأولوية، ودور السوق، وسنة البيانات، ونطاق القياس الجمركي، مع الفصل التام بين القيم الموثقة والحقول التي ما زالت قيد التحقق."
                : "Methodologically disciplined comparison across all 41 markets by geographic region, priority rating, market role, latest reporting year, and measurement definition — explicitly separating verified HS61+HS62 figures from pending baselines."}
            </p>
          </div>

          {/* Regional Comparative Navigation Bar */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-200/70 dark:border-white/10">
            <Link
              to="/global-markets/$sector/$slug"
              params={{ sector: "garment", slug: "compare" }}
              onClick={() => setSubRegionFilter("all")}
              className={cn(
                "rounded-full border px-3.5 py-1.5 text-xs font-bold transition-colors",
                subRegionFilter === "all" && !isGccReport
                  ? "border-slate-900 bg-slate-900 text-white dark:border-white dark:bg-white dark:text-slate-900"
                  : "border-slate-200 dark:border-white/15 bg-white/80 dark:bg-white/5 text-slate-700 dark:text-slate-200 hover:border-brand-green",
              )}
            >
              {ar ? `جميع الأقاليم (${garmentStudies.length})` : `All Regions (${garmentStudies.length})`}
            </Link>

            {APPAREL_SUBREGIONS_META.map((reg) => {
              const count = garmentStudies.filter((s) => s.apparelSubRegion === reg.id).length;
              const isSelected = subRegionFilter === reg.id;
              return (
                <Link
                  key={reg.id}
                  to="/global-markets/$sector/$slug"
                  params={{ sector: "garment", slug: reg.comparativeSlug }}
                  onClick={() => setSubRegionFilter(reg.id)}
                  className={cn(
                    "rounded-full border px-3.5 py-1.5 text-xs font-bold transition-colors",
                    isSelected
                      ? "border-brand-green bg-brand-green text-white"
                      : "border-slate-200 dark:border-white/15 bg-white/80 dark:bg-white/5 text-slate-700 dark:text-slate-200 hover:border-brand-green",
                  )}
                >
                  {ar ? `${reg.titleAr} (${count})` : `${reg.titleEn} (${count})`}
                </Link>
              );
            })}
          </div>

          {/* Data Completeness Summary Cards */}
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 pt-2">
            <div className="rounded-2xl border border-slate-200/80 dark:border-white/15 bg-slate-50/80 dark:bg-white/5 p-4">
              <div className="text-[11px] font-bold text-slate-500">
                {ar ? "إجمالي الدول المشمولة" : "Total Covered Markets"}
              </div>
              <div className="font-head text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
                {countsByStatus.total}
              </div>
              <div className="text-[11px] text-slate-600 dark:text-slate-400">
                {ar ? "6 أقاليم جغرافية حول العالم" : "Across 6 global regions"}
              </div>
            </div>
            <div className="rounded-2xl border border-brand-green/30 bg-brand-green/5 p-4">
              <div className="text-[11px] font-bold text-brand-green">
                {ar ? "خط أساس HS61+HS62 موثق" : "HS61+HS62 Trade Baseline"}
              </div>
              <div className="font-head text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
                {countsByStatus.hsConfirmed}
              </div>
              <div className="text-[11px] text-slate-600 dark:text-slate-400">
                {ar ? "دولتان بسنة 2025 و19 دولة بسنة 2024" : "2 markets in 2025 · 19 in 2024"}
              </div>
            </div>
            <div className="rounded-2xl border border-sky-500/30 bg-sky-500/5 p-4">
              <div className="text-[11px] font-bold text-sky-700 dark:text-sky-300">
                {ar ? "نطاقات قياس بديلة منفصلة" : "Alternative Scope Baselines"}
              </div>
              <div className="font-head text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
                {countsByStatus.altBasis}
              </div>
              <div className="text-[11px] text-slate-600 dark:text-slate-400">
                {ar ? "بلجيكا (SITC 84) · لبنان (Trade.gov) · تركيا" : "Belgium SITC 84 · Lebanon Est. · Türkiye"}
              </div>
            </div>
            <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-4">
              <div className="text-[11px] font-bold text-amber-700 dark:text-amber-300">
                {ar ? "إجمالي الدولة قيد التحقق" : "Country Baseline Pending"}
              </div>
              <div className="font-head text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
                {countsByStatus.pending}
              </div>
              <div className="text-[11px] text-slate-600 dark:text-slate-400">
                {ar ? "بانتظار استخراج UN Comtrade الرسمي" : "Awaiting formal UN Comtrade extraction"}
              </div>
            </div>
          </div>

          {/* Non-Negotiable Methodological Discipline Notice */}
          <div className="rounded-2xl border border-amber-500/40 bg-amber-500/10 p-4 flex items-start gap-3 text-xs text-amber-950 dark:text-amber-200 leading-relaxed">
            <AlertTriangle className="size-4 shrink-0 mt-0.5 text-amber-600 dark:text-amber-400" />
            <div className="space-y-1">
              <p className="font-bold">
                {ar ? "ضوابط المقارنة المنهجية الصارمة:" : "Strict Methodological Comparison Discipline:"}
              </p>
              <p>
                {ar
                  ? "لا تمثل قيم الواردات الجمركية (HS61+HS62) حجم مبيعات التجزئة أو الطلب المضمون للمصنع. لا يجوز جمع أو ترتيب الدول ذات السنوات المختلفة (2024 مقابل 2025) أو التصنيفات المختلفة (Eurostat SITC 84 في بلجيكا أو تقديرات Trade.gov في لبنان)، وتظهر الدول التي لم يوثق إجمالي وارداتها كـ (قيد التحقق) دون اصطناع أرقام. كما أن جميع المجموعات والشركات المذكورة هي حسابات مستهدفة وليست عملاء متعاقدين."
                  : "Customs import values (HS61+HS62) are NOT retail sales or guaranteed factory demand. Markets with differing years (2024 vs 2025) or non-identical definitions (Belgium SITC 84, Lebanon Trade.gov estimate, Türkiye secondary aggregate) must not be combined or ranked together. Unverified totals remain marked as pending. All named buyers are prospect accounts, not contracted buyers."}
              </p>
            </div>
          </div>
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
              {ar ? `المعروض: ${filteredStudies.length} من ${garmentStudies.length} دولة` : `Showing ${filteredStudies.length} of ${garmentStudies.length} markets`}
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
                      ? "مقارنة جمركية متكافئة: واردات HS 61 + HS 62 لعام 2024 فقط (مليار دولار)"
                      : "Like-for-Like Customs Comparison: 2024 HS61 + HS62 Imports Only (USD Billion)"}
                  </h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    {ar
                      ? "تُستبعد من هذا الرسم دول عام 2025 (السعودية والكويت)، وبلجيكا (SITC 84)، ولبنان، وتركيا، والدول قيد التحقق منعًا للخلط المنهجي."
                      : "Excludes 2025 reporters (KSA, Kuwait), Belgium (SITC 84 EUR), Lebanon estimate, Türkiye aggregate, and pending countries."}
                  </p>
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
                          params={{ sector: "garment", slug: s.slug }}
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
                    <h3 className="font-head text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
                      {ar ? "بيانات HS61+HS62 لعام 2025" : "2025 HS61+HS62 Imports"}
                    </h3>
                    <span className="rounded-full bg-brand-green/10 px-2.5 py-0.5 text-[10px] font-bold text-brand-green">
                      2025 Baseline
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    {ar
                      ? "مجموعة مستقلة للدول التي توفر لها إجمالي عام 2025 ضمن الحزمة."
                      : "Isolated series for markets reporting 2025 totals in this source set."}
                  </p>
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
                            params={{ sector: "garment", slug: s.slug }}
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
                          <div className="h-full rounded-full bg-slate-900 dark:bg-white" style={{ width: `${pct}%` }} />
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
                    ? `السياق المصري العام (2024): $${APPAREL_EGYPT_RMG_CONTEXT.exports2024UsdB} مليار (+${APPAREL_EGYPT_RMG_CONTEXT.growthPct}%)`
                    : `Egypt Sector Exports Context (2024): $${APPAREL_EGYPT_RMG_CONTEXT.exports2024UsdB}B (+${APPAREL_EGYPT_RMG_CONTEXT.growthPct}%)`}
                </div>
                <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                  {ar ? APPAREL_EGYPT_RMG_CONTEXT.noteAr : APPAREL_EGYPT_RMG_CONTEXT.noteEn}
                </p>
                <a
                  href={APPAREL_EGYPT_RMG_CONTEXT.sourceUrl}
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

      {/* 5. Master 41-Country Matrix Table */}
      <section className="site-container pb-8">
        <div className="rounded-3xl border border-slate-200/80 dark:border-white/15 bg-white/80 dark:bg-slate-900/70 p-6 sm:p-8 backdrop-blur-2xl shadow-lg space-y-5 text-start">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/70 dark:border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <Layers className="size-5 text-brand-green" />
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
                  <th className="px-3.5 py-3 font-extrabold">{ar ? "الدولة" : "Country"}</th>
                  <th className="px-3.5 py-3 font-extrabold">{ar ? "الإقليم" : "Region"}</th>
                  <th className="px-3.5 py-3 font-extrabold">{ar ? "الأولوية" : "Priority"}</th>
                  <th className="px-3.5 py-3 font-extrabold">{ar ? "الدور السوقي" : "Market Role"}</th>
                  <th className="px-3.5 py-3 font-extrabold">{ar ? "المؤشر / السنة" : "Indicator / Year"}</th>
                  <th className="px-3.5 py-3 font-extrabold">{ar ? "حالة واكتمال البيانات" : "Data Completeness & Scope"}</th>
                  <th className="px-3.5 py-3 font-extrabold">{ar ? "الجهات المستهدفة (غير مؤكدة)" : "Target Accounts (Unconfirmed)"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/70 dark:divide-white/10">
                {filteredStudies.map((s: GlobalMarketStudy) => {
                  const regionMeta = APPAREL_SUBREGIONS_META.find((r) => r.id === s.apparelSubRegion);
                  const roleCfg = s.marketRole ? ROLE_LABELS[s.marketRole] : null;
                  const prioCls = s.priorityGrade ? PRIORITY_BADGE_MAP[s.priorityGrade] : "";
                  return (
                    <tr key={s.id} className="hover:bg-slate-50/80 dark:hover:bg-white/5 align-top">
                      <td className="px-3.5 py-3 font-bold whitespace-nowrap">
                        <Link
                          to="/global-markets/$sector/$slug"
                          params={{ sector: "garment", slug: s.slug }}
                          className="inline-flex items-center gap-2 text-slate-900 dark:text-white hover:text-brand-green"
                        >
                          {s.countryCode && (
                            <img
                              src={`https://flagcdn.com/w40/${s.countryCode.toLowerCase()}.png`}
                              alt={ar ? s.countryNameAr : s.countryNameEn}
                              className="h-3.5 w-5 rounded-[2px] object-cover border border-slate-300/60 shrink-0"
                              loading="lazy"
                            />
                          )}
                          <span>{ar ? s.countryNameAr : s.countryNameEn}</span>
                        </Link>
                      </td>
                      <td className="px-3.5 py-3 text-slate-600 dark:text-slate-300 whitespace-nowrap">
                        {regionMeta ? (ar ? regionMeta.titleAr : regionMeta.titleEn) : "—"}
                      </td>
                      <td className="px-3.5 py-3 whitespace-nowrap">
                        {s.priorityGrade && (
                          <span className={cn("inline-flex rounded-full border px-2 py-0.5 text-[10px] font-extrabold", prioCls)}>
                            {s.priorityGrade}
                          </span>
                        )}
                      </td>
                      <td className="px-3.5 py-3 whitespace-nowrap">
                        {roleCfg && (
                          <span className={cn("inline-flex rounded-full border px-2 py-0.5 text-[10px] font-bold", roleCfg.badgeClass)}>
                            {ar ? roleCfg.ar : roleCfg.en}
                          </span>
                        )}
                      </td>
                      <td className="px-3.5 py-3 font-mono whitespace-nowrap">
                        {s.dataBasis === "pending_verification" ? (
                          <span className="text-amber-700 dark:text-amber-300 font-semibold font-sans">
                            {ar ? "قيد التحقق" : "Pending Verification"}
                          </span>
                        ) : (
                          <div>
                            <span className="font-bold text-slate-900 dark:text-white">{s.tradeIndicatorDisplay}</span>
                            <span className="text-slate-500 ms-1.5">({s.tradeIndicatorYear})</span>
                          </div>
                        )}
                      </td>
                      <td className="px-3.5 py-3 text-[11px] text-slate-600 dark:text-slate-300 min-w-[220px]">
                        {ar ? s.dataCompletenessAr : s.dataCompletenessEn}
                      </td>
                      <td className="px-3.5 py-3 text-[11px] text-slate-600 dark:text-slate-300 min-w-[220px]">
                        {ar
                          ? s.sections.potentialBuyers?.bulletsAr?.slice(0, 3).map((b) => b.replace(/ \(جهة مستهدفة محتملة\)$/, "")).join(" · ")
                          : s.sections.potentialBuyers?.bulletsEn?.slice(0, 3).map((b) => b.replace(/ \(Prospective Target Account\)$/, "")).join(" · ")}
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
        <MarketComparisonPanel sectorId="garment" studies={filteredStudies} ar={ar} />
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
                  ? "سوريا والسودان معلقان تمامًا لحين استيفاء التخليص القانوني والعقوبات والبنوك والشحن والأمن."
                  : "Syria and Sudan remain strictly on hold pending legal, sanctions, banking, logistics, and security clearance."}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

