import React, { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Building2,
  Calendar,
  Download,
  ExternalLink,
  FileText,
  Layers,
  MapPin,
  TrendingUp,
  ShieldAlert,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Info,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  BarChart3,
  Percent,
  Compass,
  Activity,
  Stethoscope,
  Briefcase,
  Store,
  Home,
  Sliders,
  Award,
  BookOpen,
  FileSpreadsheet,
  Package,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import {
  EAST_CAIRO_MASTER_STUDY,
  REGIONAL_DEMAND_KPI,
  REGIONAL_SALES_COMPARISON_CHART,
  CITY_AREAS_COMPARISON_CHART,
  CAIRO_STOCK_INDICATORS_CHART,
  PRICE_INTELLIGENCE_RECORDS,
  JLL_RENT_PRICE_DYNAMICS,
  CORE_RISKS_REGISTER,
  AUTHORITATIVE_RESEARCH_SOURCES,
} from "@/lib/studies/east-cairo-master-study";
import { FeasibilityCalculator } from "./feasibility-calculator";
import { ScorecardCalculator } from "./scorecard-calculator";
import { CityProfilesBrowser } from "./city-profiles-browser";
import { DataGapsRegisterView } from "./data-gaps-register-view";
import { DevelopersPipelineView } from "./developers-pipeline-view";
import { Button } from "@/components/ui/button";

interface EastCairoStudyViewProps {
  ar: boolean;
  initialCityId?: string;
}

export function EastCairoStudyView({
  ar,
  initialCityId = "new-cairo",
}: EastCairoStudyViewProps) {
  const [checkedDueDiligence, setCheckedDueDiligence] = useState<Record<number, boolean>>({});

  const toggleCheck = (idx: number) => {
    setCheckedDueDiligence((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const dueDiligenceItemsAr = [
    "تعداد السكان الفعلي المقيم وعدد الأسر في الحي ومحيط 2 كم",
    "فحص الوحدات المسلمة والمشغولة ونسب الشغور الفعلية ليلًا ونهارًا",
    "سند الملكية وقرار التخصيص الرسمي الصادر من هيئة المجتمعات العمرانية / المطور الرئيسي",
    "تاريخ توصيل وإطلاق الجهد الكهربائي ومحطات الصرف ومياه الشرب رسميًا",
    "مراجعة الاشتراطات التخطيطية (الارتفاع المصرح، معامل البناء FAR، الردود، مواقف السيارات)",
    "رصد صفقات البيع والإيجار المنفذة فعليًا واستبعاد أسعار الإعلانات غير الموثقة",
    "فحص خط المعروض المنافس تحت الإنشاء والصادر له تراخيص خلال السنوات الثلاث القادمة",
    "حساب زمن الوصول المروري في ساعات الذروة الصباحية والمسائية",
    "التأكد من التراخيص البيئية والدفاع المدني وكود الحريق لنوع النشاط المقترح",
    "خصم خطط السداد الطويلة إلى القيمة الحالية النقدية (Present Value) بمعدل خصم معلن",
    "التأكد من نسب التأجير المسبق (Pre-leasing) للمشروعات التجارية والإدارية",
    "مطابقة النموذج المالي مع عروض المقاولين الميدانية وBOQ معتمد مع تحوط 20% لتضخم التكلفة",
  ];

  const dueDiligenceItemsEn = [
    "Verify current resident headcount and households within a strict 2-km radius",
    "Audit delivered and occupied units vs. actual physical vacancy day & night",
    "Examine cadastral deed, official NUCA allotment decree or master-developer contract",
    "Confirm official energized electricity substation capacity, potable water & sewerage",
    "Review municipal zoning stipulations (allowable height, FAR, setbacks, parking ratios)",
    "Document verified completed transaction prices; discard unverified asking list prices",
    "Map competing supply pipeline under construction and permitted over the next 36 months",
    "Measure empirical vehicular travel times and choke points during peak traffic hours",
    "Verify civil protection, fire code approvals, and environmental permits for designated asset",
    "Discount long-term installment receivables to Net Present Value at audited cost of capital",
    "Secure binding pre-leasing commitments prior to breaking ground on commercial assets",
    "Reconcile financial pro-forma against verified contractor BOQs with 20% cost contingency",
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full bg-slate-50/60 dark:bg-slate-950/70 text-slate-800 dark:text-slate-100 min-h-screen">
      {/* 1. Header / Breadcrumb & Meta Bar */}
      <div className="border-b border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/80 backdrop-blur-md">
        <div className="site-container py-4 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-500 font-medium">
            <Link to="/" className="hover:text-[#0F8B7A] transition-colors">
              {ar ? "الرئيسية" : "Home"}
            </Link>
            <ChevronRight className="size-3.5 rtl:rotate-180" />
            <Link to="/sectors/$sector" params={{ sector: "construction" }} className="hover:text-[#0F8B7A] transition-colors">
              {ar ? "المقاولات والتطوير العقاري" : "Construction & Development"}
            </Link>
            <ChevronRight className="size-3.5 rtl:rotate-180" />
            <Link to="/global-markets/$sector" params={{ sector: "construction" }} className="hover:text-[#0F8B7A] transition-colors">
              {ar ? "دراسات السوق" : "Market Intelligence"}
            </Link>
            <ChevronRight className="size-3.5 rtl:rotate-180" />
            <span className="font-bold text-[#0F8B7A]">
              {ar ? "ذكاء السوق العقاري – شرق القاهرة (الإصدار 2.0)" : "East Cairo Intelligence v2.0"}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-emerald-700 dark:text-emerald-300 font-bold">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              {ar ? "الإصدار المؤسسي الشامل 2.0" : "Institutional Edition 2.0"}
            </span>
            <span className="text-slate-500 font-mono">
              {ar ? "تاريخ القطع: 21 نوفمبر 2026" : "Cut-off: 21 Nov 2026"}
            </span>
          </div>
        </div>
      </div>

      {/* 2. Hero Section */}
      <section className="relative overflow-hidden border-b border-slate-200 dark:border-white/10 bg-gradient-to-b from-white via-slate-50/70 to-slate-100/50 dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-950 py-12 md:py-16">
        <div className="site-container relative z-10">
          <div className="max-w-4xl space-y-4">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0F8B7A]/15 border border-[#0F8B7A]/30 px-3.5 py-1 text-xs font-bold text-[#0F8B7A]">
                <Building2 className="size-3.5" />
                {ar ? "SBA Group — قطاع المقاولات والتطوير العقاري" : "SBA Group — Construction & Real Estate"}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-xs font-bold text-emerald-700 dark:text-emerald-300">
                <ShieldCheck className="size-3.5" />
                {ar ? "منظومة بحثية مؤسسية مكتملة – الإصدار 2.0" : "Complete Institutional Research System v2.0"}
              </span>
            </div>

            <h1 className="font-head text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              {ar
                ? "دراسة سوق التطوير العقاري والاستثمار – شرق القاهرة"
                : "East Cairo Real Estate Development & Investment Intelligence"}
            </h1>

            <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
              {ar
                ? "منظومة بحثية واستثمارية متكاملة تغطي 12 مدينة ونطاقًا جغرافيًا بشرق القاهرة: مؤشرات الطلب الكلية (499.6 مليار جنيه مبيعات و37.1% حصة)، وتحليل تفصيلي للأحياء والمطورين، ونماذج الجدوى المخصومة، وسجل فجوات البيانات الميدانية، وقاعدة بيانات إكسل شاملة."
                : "Comprehensive institutional intelligence benchmarking East Cairo's macro demand (EGP 499.6bn sales, 37.1% share), profiling 12 geographic zones, district submarkets, active developer pipelines, discounted DCF models, and a 17-sheet Excel master database."}
            </p>

            {/* CTAs & Download Bar */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="/studies/east-cairo/SBA_East_Cairo_Real_Estate_Study_v2_AR.docx"
                download
                className="inline-flex items-center gap-2 rounded-xl bg-[#0F8B7A] px-4 py-2.5 text-xs md:text-sm font-bold text-white shadow-lg shadow-[#0F8B7A]/25 hover:bg-[#0a6357] transition-all"
              >
                <Download className="size-4" />
                <span>{ar ? "تقرير عربي v2.0 (DOCX)" : "Arabic Report v2.0"}</span>
              </a>

              <a
                href="/studies/east-cairo/SBA_East_Cairo_Real_Estate_Study_v2_EN.docx"
                download
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 dark:border-white/20 bg-white dark:bg-slate-800 px-4 py-2.5 text-xs md:text-sm font-bold text-slate-800 dark:text-slate-100 hover:border-[#0F8B7A] hover:text-[#0F8B7A] transition-all"
              >
                <Download className="size-4" />
                <span>{ar ? "تقرير إنجليزي v2.0 (DOCX)" : "English Report v2.0"}</span>
              </a>

              <a
                href="/studies/east-cairo/SBA_East_Cairo_Real_Estate_Database_v2.xlsx"
                download
                className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-50 dark:bg-emerald-950/30 px-4 py-2.5 text-xs md:text-sm font-bold text-emerald-800 dark:text-emerald-200 hover:bg-emerald-600 hover:text-white transition-all"
              >
                <FileSpreadsheet className="size-4" />
                <span>{ar ? "قاعدة البيانات (17 ورقة Excel)" : "Master Database (.xlsx)"}</span>
              </a>

              <a
                href="/studies/east-cairo/SBA_East_Cairo_Intelligence_v2_Full_Package.zip"
                download
                className="inline-flex items-center gap-2 rounded-xl bg-[#F28C00] px-4 py-2.5 text-xs md:text-sm font-bold text-white shadow-lg shadow-[#F28C00]/25 hover:bg-[#d97d00] transition-all"
              >
                <Package className="size-4" />
                <span>{ar ? "الحزمة الكاملة (ZIP)" : "Complete ZIP Package"}</span>
              </a>

              <Link
                to="/request-consultation"
                search={{ sector: "construction", topic: "east-cairo-land-feasibility" }}
                className="inline-flex items-center gap-2 rounded-xl border border-dashed border-slate-300 dark:border-white/20 px-4 py-2.5 text-xs md:text-sm font-bold text-slate-700 dark:text-slate-200 hover:border-[#0F8B7A] hover:text-[#0F8B7A] transition-all"
              >
                <Sparkles className="size-4 text-[#F28C00]" />
                <span>{ar ? "طلب دراسة جدوى موقعية" : "Site Diligence Inquiry"}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. In-page Section Navigation Bar */}
      <div className="sticky top-0 z-30 border-b border-slate-200 dark:border-white/10 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md">
        <div className="site-container flex items-center gap-2 overflow-x-auto py-2.5 scrollbar-none text-xs font-bold">
          <button
            type="button"
            onClick={() => scrollToSection("executive-dashboard")}
            className="shrink-0 px-3 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"
          >
            {ar ? "المؤشرات الكلية" : "Macro Indicators"}
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("city-profiles")}
            className="shrink-0 px-3 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"
          >
            {ar ? "الـ 12 مدينة وحي" : "12 Cities & Zones"}
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("real-estate-sectors")}
            className="shrink-0 px-3 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"
          >
            {ar ? "القطاعات الأربعة" : "4 Sectors"}
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("price-intelligence")}
            className="shrink-0 px-3 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"
          >
            {ar ? "استخبارات الأسعار" : "Pricing Benchmarks"}
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("developers-pipeline")}
            className="shrink-0 px-3 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"
          >
            {ar ? "سجل المطورين والمشروعات" : "Developers Pipeline"}
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("data-gaps-register")}
            className="shrink-0 px-3 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-rose-600 dark:text-rose-400"
          >
            {ar ? "سجل فجوات البيانات" : "Data Gaps Register"}
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("scorecard-matrix")}
            className="shrink-0 px-3 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"
          >
            {ar ? "مصفوفة الـ 100 نقطة" : "100-Point Scorecard"}
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("feasibility-engine")}
            className="shrink-0 px-3 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-[#0F8B7A]"
          >
            {ar ? "محرك الجدوى المالية" : "Feasibility Engine"}
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("risks-due-diligence")}
            className="shrink-0 px-3 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"
          >
            {ar ? "المخاطر والفحص" : "Risks & Diligence"}
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("sources-references")}
            className="shrink-0 px-3 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"
          >
            {ar ? "المصادر المعتمدة" : "Sources"}
          </button>
        </div>
      </div>

      {/* 4. Mandatory Professional Disclaimer Alert Box */}
      <section className="site-container pt-8 pb-4">
        <div className="rounded-2xl border border-amber-300 dark:border-amber-700/50 bg-amber-500/10 p-5 md:p-6 text-amber-950 dark:text-amber-100 space-y-2">
          <div className="flex items-center gap-2 font-bold text-sm md:text-base text-amber-800 dark:text-amber-300">
            <ShieldAlert className="size-5 shrink-0" />
            <span>{ar ? "تنبيه مهني وحوكمة استخدام الإصدار 2.0" : "Professional Governance & Boundaries of Use (v2.0)"}</span>
          </div>
          <p className="text-xs md:text-sm leading-relaxed text-amber-900/90 dark:text-amber-200">
            {ar
              ? "هذا التقرير هو إصدار بحثي تأسيسي قائم على المصادر العامة التي أمكن التحقق منها حتى تاريخ القطع (21 نوفمبر 2026). وهو ليس تقييمًا عقاريًا معتمدًا لأرض بعينها، ولا بديلًا عن تقرير مثمن مقيد أو دراسة جدوى موقعية أو فحص قانوني/هندسي. البيانات المتاحة علنًا لا توفر سلسلة موحدة لعدد السكان المقيمين فعليًا، أو أسعار الصفقات المنفذة، أو معدلات الشغور لكل حي في جميع المدن. لذلك تم تدوين المؤشرات غير المتاحة صراحة في 'سجل فجوات البيانات' لمنع اختلاقها أو استبدالها بأسعار إعلانات أو أعداد مستهدفة."
              : "This intelligence dossier is a foundational desk-researched publication compiled from public datasets verified up to 21 November 2026. It does not constitute a certified appraisal of any specific plot, nor does it replace a certified valuation report, site-specific feasibility study, or legal/engineering audit. Missing localized metrics are strictly cataloged in the 'Data Gaps Register' to preclude synthetic guesswork."}
          </p>
          <div className="pt-1 flex flex-wrap items-center gap-3 text-[11px] font-semibold text-amber-800 dark:text-amber-300">
            <span>{ar ? "تصنيف جودة البيانات المعتمد:" : "Data Quality Classification:"}</span>
            <span className="bg-emerald-500/15 text-emerald-800 dark:text-emerald-200 px-2 py-0.5 rounded border border-emerald-500/30">
              {ar ? "الفئة A: رسمية معتمدة" : "Tier A: Official"}
            </span>
            <span className="bg-blue-500/15 text-blue-800 dark:text-blue-200 px-2 py-0.5 rounded border border-blue-500/30">
              {ar ? "الفئة B: مؤسسية رصينة" : "Tier B: Institutional"}
            </span>
            <span className="bg-amber-500/15 text-amber-800 dark:text-amber-200 px-2 py-0.5 rounded border border-amber-500/30">
              {ar ? "الفئة C: رصد قوائم مطورين" : "Tier C: List Prices"}
            </span>
            <span className="bg-purple-500/15 text-purple-800 dark:text-purple-200 px-2 py-0.5 rounded border border-purple-500/30">
              {ar ? "الفئة D: نماذج وتقديرات" : "Tier D: Modelled DCF"}
            </span>
            <span className="bg-rose-500/15 text-rose-800 dark:text-rose-200 px-2 py-0.5 rounded border border-rose-500/30">
              {ar ? "الفئة E: فجوات مسجلة للمسح الميداني" : "Tier E: Data Gap Register"}
            </span>
          </div>
        </div>
      </section>

      {/* 5. Module A: Executive KPI Dashboard */}
      <section id="executive-dashboard" className="site-container py-6">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0F8B7A] block">
              {ar ? "الموديول (أ): لوحة المؤشرات القيادية" : "Module A: Executive Dashboard"}
            </span>
            <h2 className="font-head text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white">
              {ar ? "أبرز المؤشرات الكلية الموثقة (الربع الثالث 2026)" : "Verified Macro Headline Indicators (Q3 2026)"}
            </h2>
          </div>
          <span className="text-xs text-slate-500 font-medium hidden sm:block">
            {ar ? "المصادر: KW Egypt × Gateway Financials وJLL" : "Sources: KW Egypt × Gateway & JLL"}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {EAST_CAIRO_MASTER_STUDY.kpis.map((kpi) => (
            <div
              key={kpi.id}
              className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 p-5 shadow-sm hover:border-[#0F8B7A]/40 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold text-slate-500 block mb-1">
                  {ar ? kpi.labelAr : kpi.labelEn}
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl md:text-3xl font-black text-[#0F8B7A] tracking-tight">
                    {kpi.value}
                  </span>
                  <span className="text-xs font-bold text-slate-600 dark:text-slate-400">
                    {kpi.unit}
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/5 space-y-1">
                <p className="text-xs text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                  {ar ? kpi.growthNoteAr : kpi.growthNoteEn}
                </p>
                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                  <span>{kpi.source}</span>
                  <span>{kpi.referenceYear}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Module B: Regional Demand & Sales Comparison Chart */}
      <section id="regional-demand" className="site-container py-8">
        <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 p-6 md:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-white/10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0F8B7A] block">
                {ar ? "الموديول (ب): تحليل الطلب الإقليمي" : "Module B: Regional Demand Distribution"}
              </span>
              <h2 className="font-head text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white">
                {ar
                  ? "المبيعات التعاقدية المقدرة حسب المناطق (يناير–سبتمبر 2026)"
                  : "Report-Estimated Contracted Sales by Region (Jan–Sep 2026)"}
              </h2>
              <p className="text-xs md:text-sm text-slate-500 mt-1 max-w-2xl">
                {ar
                  ? "إجمالي مبيعات السوق المرصودة في مصر: 1,348.1 مليار جنيه عبر 103,643 وحدة (متوسط التذكرة 13 مليون جنيه). شرق القاهرة يستحوذ منفردًا على 37.1%."
                  : "Total tracked national market sales: EGP 1,348.1bn across 103,643 units (avg ticket EGP 13M). East Cairo captures 37.1% on its own."}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <a
                href="/studies/east-cairo/east_cairo_sales_q3_2026.png"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-800 px-3 py-1.5 text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-[#0F8B7A]"
              >
                <span>{ar ? "مخطط التقرير الأصلي" : "Source Chart Diagram"}</span>
                <ExternalLink className="size-3.5" />
              </a>
            </div>
          </div>

          {/* Interactive Recharts Visualization */}
          <div className="mt-6 h-80 w-full" dir="ltr">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={REGIONAL_SALES_COMPARISON_CHART.items}
                margin={{ top: 20, right: 30, left: 10, bottom: 25 }}
              >
                <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
                <XAxis
                  dataKey={ar ? "labelAr" : "labelEn"}
                  tick={{ fontSize: 12, fill: "#64748b" }}
                  interval={0}
                  tickMargin={8}
                />
                <YAxis
                  tick={{ fontSize: 12, fill: "#64748b" }}
                  unit=" B"
                />
                <Tooltip
                  formatter={(value: any, name: any, item: any) => [
                    `${value} ${ar ? "مليار جنيه" : "B EGP"} (${item.payload.noteAr || ""})`,
                    ar ? "المبيعات المقدرة" : "Estimated Sales",
                  ]}
                  contentStyle={{
                    backgroundColor: "rgba(15, 23, 42, 0.95)",
                    borderColor: "rgba(255, 255, 255, 0.1)",
                    borderRadius: "12px",
                    color: "#fff",
                    fontSize: "12px",
                  }}
                />
                <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                  {REGIONAL_SALES_COMPARISON_CHART.items.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={index === 0 ? "#0F8B7A" : index === 1 ? "#F28C00" : "#64748b"}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Strict Caveat Disclosure */}
          <div className="mt-4 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-800/40 p-3.5 text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2">
            <Info className="size-4 text-[#0F8B7A] shrink-0 mt-0.5" />
            <p>
              {ar
                ? "ملاحظة منهجية صارمة: الأرقام تمثل مبيعات تعاقدية مقدرة للمطورين المشمولين في تقرير KW Egypt × Gateway Financials (تاريخ الرصد 1 نوفمبر 2026). وهي لا تعادل صفقات بيع الأراضي أو إجمالي تداول السوق الثانوي أو حصرًا لكافة العمليات العقارية بمصر."
                : "Strict methodological disclosure: Figures represent report-estimated developer contracted sales from the KW Egypt × Gateway universe (baseline 1 Nov 2026). They do NOT represent land deal volumes, secondary trading turnover, or an exhaustive national real estate census."}
            </p>
          </div>
        </div>
      </section>

      {/* 7. Modules C, D, E: The 12 Cities, Districts and Communities Profiles */}
      <section id="city-profiles" className="site-container py-8">
        <div className="mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0F8B7A] block">
            {ar ? "الموديولات (ج، د، هـ): خريطة المدن والأحياء الـ 12" : "Modules C, D, E: 12 Cities, Districts & Communities"}
          </span>
          <h2 className="font-head text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white">
            {ar ? "الملفات التفصيلية للمدن والأحياء والمجتمعات الخاصة" : "Comprehensive City & District Intelligence Profiles"}
          </h2>
          <p className="text-xs md:text-sm text-slate-500 mt-1 max-w-3xl">
            {ar
              ? "تحليل دقيق لـ 12 نطاقًا جغرافيًا مع تقسيم أحياء القاهرة الجديدة (التجمع الأول، الثالث، الخامس، السادس، بيت الوطن، اللوتس، النرجس)، وفصل الكردون التخطيطي عن الكتلة المأهولة."
              : "Granular intelligence across 12 geographic entities including New Cairo submarket segmentation (Settlements 1, 3, 5, 6, Beit Al-Watan, Lotus, Narges) and strict separation of zoned acreage from active mass."}
          </p>
        </div>

        {/* City Profiles Interactive Browser */}
        <CityProfilesBrowser ar={ar} initialCityId={initialCityId} />

        {/* Planning Area Comparison Chart Box */}
        <div className="mt-8 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 p-6 md:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-white/10">
            <div>
              <h3 className="font-head text-lg font-bold text-slate-900 dark:text-white">
                {ar ? "مقارنة المساحات التخطيطية الإجمالية للمدن (بالفدان)" : "Gross Master Planning Acreage by City (Feddans)"}
              </h3>
              <span className="text-xs text-rose-600 dark:text-rose-400 font-semibold block mt-0.5">
                {ar
                  ? "* تحذير: المساحة التخطيطية تمثل زمام الكردون الصادر به قرار وليست كتلة مبنية أو مأهولة؛ تم استبعاد مدينة بدر لعدم توفر رقم موحد مكافئ."
                  : "* Warning: Planning area reflects legal zoned decree limits, NOT built or occupied mass. Badr is excluded per prompt due to absence of compatible single area figure."}
              </span>
            </div>
            <a
              href="/studies/east-cairo/east_cairo_city_areas.png"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F8B7A] hover:underline shrink-0"
            >
              <span>{ar ? "عرض صورة المخطط" : "View Chart Image"}</span>
              <ExternalLink className="size-3.5" />
            </a>
          </div>

          <div className="mt-6 h-80 w-full" dir="ltr">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={CITY_AREAS_COMPARISON_CHART.items}
                layout="vertical"
                margin={{ top: 10, right: 30, left: 70, bottom: 10 }}
              >
                <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
                <XAxis type="number" tick={{ fontSize: 11, fill: "#64748b" }} />
                <YAxis
                  type="category"
                  dataKey={ar ? "labelAr" : "labelEn"}
                  tick={{ fontSize: 11, fill: "#64748b" }}
                  width={100}
                />
                <Tooltip
                  formatter={(value: any, name: any, item: any) => [
                    `${new Intl.NumberFormat().format(value)} ${ar ? "فدان" : "Feddans"} (${item.payload.noteAr || ""})`,
                    ar ? "المساحة التخطيطية" : "Planning Area",
                  ]}
                  contentStyle={{
                    backgroundColor: "rgba(15, 23, 42, 0.95)",
                    borderColor: "rgba(255, 255, 255, 0.1)",
                    borderRadius: "12px",
                    color: "#fff",
                    fontSize: "12px",
                  }}
                />
                <Bar dataKey="value" fill="#0F8B7A" radius={[0, 8, 8, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* 8. Modules F, G, H, I: The 4 Real Estate Sectors Analysis */}
      <section id="real-estate-sectors" className="site-container py-8">
        <div className="mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0F8B7A] block">
            {ar ? "الموديولات (و، ز، ح، ط): القطاعات العقارية الأربعة" : "Modules F, G, H, I: Four Real Estate Sectors"}
          </span>
          <h2 className="font-head text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white">
            {ar ? "تحليل المخزون والطلب: السكني، الإداري، التجاري، والطبي" : "Sector Dynamics: Residential, Office, Retail & Healthcare"}
          </h2>
          <p className="text-xs md:text-sm text-slate-500 mt-1 max-w-3xl">
            {ar
              ? "بيانات السوق الصادرة عن JLL للربع الثالث 2026 وSavills 2025 مع كشف صريح لفجوات البيانات الطبية."
              : "Market dynamics from JLL Q3 2026 & Savills 2025 with explicit healthcare research gap disclosure."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Residential Sector */}
          <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 p-6 space-y-4 shadow-sm">
            <div className="flex items-center justify-between border-b pb-3 border-slate-100 dark:border-white/5">
              <div className="flex items-center gap-2.5">
                <span className="flex size-9 items-center justify-center rounded-xl bg-teal-500/15 text-[#0F8B7A]">
                  <Home className="size-5" />
                </span>
                <div>
                  <span className="text-[11px] font-bold text-[#0F8B7A] block">
                    {ar ? "الموديول (و): القطاع السكني" : "Module F: Residential Sector"}
                  </span>
                  <h3 className="font-head text-lg font-bold text-slate-900 dark:text-white">
                    {ar ? "المخزون والطلب وديناميكية الإيجار" : "Stock, Absorption & Rental Dynamics"}
                  </h3>
                </div>
              </div>
              <span className="text-xs font-bold text-slate-400">JLL Q3 2026</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-slate-50 dark:bg-slate-800/60 p-3">
                <span className="text-[11px] text-slate-500 block">{ar ? "المخزون بالقاهرة:" : "Cairo Stock:"}</span>
                <strong className="text-lg font-extrabold text-[#0F8B7A]">362,600</strong>
                <span className="text-[10px] text-slate-400 block">{ar ? "وحدة سكنية (+5,600 في Q3)" : "Units (+5.6k in Q3)"}</span>
              </div>
              <div className="rounded-xl bg-slate-50 dark:bg-slate-800/60 p-3">
                <span className="text-[11px] text-slate-500 block">{ar ? "نمو إيجار القاهرة الجديدة:" : "New Cairo Rent Growth:"}</span>
                <strong className="text-lg font-extrabold text-emerald-600">+15.5%</strong>
                <span className="text-[10px] text-slate-400 block">{ar ? "سنويًا (مقابل +3.6% للبيع)" : "YoY (vs +3.6% Sale)"}</span>
              </div>
            </div>

            <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {ar
                ? "الفارق الكبير بين نمو الإيجارات (15.5%) ونمو أسعار البيع (3.6%) بالقاهرة الجديدة يعكس ضغط القدرة الشرائية وتحول شريحة واسعة نحو الإيجار. الفرص تكمن في الإسكان متوسط السعر القريب من الخدمات والوظائف."
                : "The substantial divergence between rent growth (+15.5%) and sales price growth (+3.6%) in New Cairo signals homeownership affordability pressures and an accelerating shift toward rentals."}
            </p>
          </div>

          {/* Administrative / Office Sector */}
          <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 p-6 space-y-4 shadow-sm">
            <div className="flex items-center justify-between border-b pb-3 border-slate-100 dark:border-white/5">
              <div className="flex items-center gap-2.5">
                <span className="flex size-9 items-center justify-center rounded-xl bg-blue-500/15 text-blue-600">
                  <Briefcase className="size-5" />
                </span>
                <div>
                  <span className="text-[11px] font-bold text-blue-600 block">
                    {ar ? "الموديول (ح): القطاع الإداري" : "Module H: Office Sector"}
                  </span>
                  <h3 className="font-head text-lg font-bold text-slate-900 dark:text-white">
                    {ar ? "مخزون المكاتب والشغور والإمدادات" : "Office Stock, Vacancy & Pipeline"}
                  </h3>
                </div>
              </div>
              <span className="text-xs font-bold text-slate-400">JLL Q3 2026</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-slate-50 dark:bg-slate-800/60 p-3">
                <span className="text-[11px] text-slate-500 block">{ar ? "المخزون الإداري القائم:" : "Office Stock:"}</span>
                <strong className="text-lg font-extrabold text-blue-600">3.1M م²</strong>
                <span className="text-[10px] text-slate-400 block">{ar ? "شغور 9.4% (+116.8k م² في Q3)" : "9.4% Vacancy (+116.8k sqm Q3)"}</span>
              </div>
              <div className="rounded-xl bg-slate-50 dark:bg-slate-800/60 p-3">
                <span className="text-[11px] text-slate-500 block">{ar ? "نمو إيجار مساحات Grade A:" : "Grade A Rent Growth:"}</span>
                <strong className="text-lg font-extrabold text-emerald-600">+5.5%</strong>
                <span className="text-[10px] text-slate-400 block">{ar ? "سنويًا (Prime نمت +2.7%)" : "YoY (Prime grew +2.7%)"}</span>
              </div>
            </div>

            <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {ar
                ? "تسليمات ضخمة متوقعة تتركز شرق القاهرة ترفع مخاطر تطوير مبانٍ غير متميزة. الطلب المؤسسي ينحصر في المباني المجهزة ذات الشهادات الخضراء ومواقف السيارات العميقة."
                : "Heavy upcoming pipeline concentrated in East Cairo elevates vacancy risks for generic assets. Demand is strictly polarized toward certified Grade A buildings with deep parking ratios."}
            </p>
          </div>

          {/* Commercial / Retail Sector */}
          <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 p-6 space-y-4 shadow-sm">
            <div className="flex items-center justify-between border-b pb-3 border-slate-100 dark:border-white/5">
              <div className="flex items-center gap-2.5">
                <span className="flex size-9 items-center justify-center rounded-xl bg-amber-500/15 text-amber-600">
                  <Store className="size-5" />
                </span>
                <div>
                  <span className="text-[11px] font-bold text-amber-600 block">
                    {ar ? "الموديول (ز): قطاع التجزئة والمولات" : "Module G: Retail & Shopping Centers"}
                  </span>
                  <h3 className="font-head text-lg font-bold text-slate-900 dark:text-white">
                    {ar ? "مخزون التجزئة والمراكز فائقة الإقليمية" : "Retail Stock & Super-Regional Malls"}
                  </h3>
                </div>
              </div>
              <span className="text-xs font-bold text-slate-400">JLL Q3 2026</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-slate-50 dark:bg-slate-800/60 p-3">
                <span className="text-[11px] text-slate-500 block">{ar ? "المخزون التجاري الكلي:" : "Total Retail Stock:"}</span>
                <strong className="text-lg font-extrabold text-amber-600">3.6M م²</strong>
                <span className="text-[10px] text-slate-400 block">{ar ? "تسليم 191,200 م² متوقع بـ Q4" : "191.2k sqm expected in Q4"}</span>
              </div>
              <div className="rounded-xl bg-slate-50 dark:bg-slate-800/60 p-3">
                <span className="text-[11px] text-slate-500 block">{ar ? "شغور المولات فائقة الإقليمية:" : "Super-Regional Vacancy:"}</span>
                <strong className="text-lg font-extrabold text-emerald-600">4.1%</strong>
                <span className="text-[10px] text-slate-400 block">{ar ? "تراجع من 6.0% (إيجار +7.9%)" : "Down from 6.0% (Rent +7.9%)"}</span>
              </div>
            </div>

            <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {ar
                ? "أداء المولات الإقليمية الكبرى ممتاز ولا يعكس بالضرورة أداء المحلات الشريطية الصغيرة. دراسة الموقع التجاري تتطلب حصر الكثافة السكانية الحقيقية والمنافسين ونسب الإشغال المجاورة."
                : "Super-regional mall resilience does not guarantee success for unanchored strip retail. Commercial development requires verified resident density, visibility, and co-tenancy synergy."}
            </p>
          </div>

          {/* Medical & Healthcare Sector */}
          <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 p-6 space-y-4 shadow-sm">
            <div className="flex items-center justify-between border-b pb-3 border-slate-100 dark:border-white/5">
              <div className="flex items-center gap-2.5">
                <span className="flex size-9 items-center justify-center rounded-xl bg-rose-500/15 text-rose-600">
                  <Stethoscope className="size-5" />
                </span>
                <div>
                  <span className="text-[11px] font-bold text-rose-600 block">
                    {ar ? "الموديول (ط): القطاع الطبي والرعاية الصحية" : "Module I: Healthcare & Clinics"}
                  </span>
                  <h3 className="font-head text-lg font-bold text-slate-900 dark:text-white">
                    {ar ? "العيادات والمراكز التخصصية" : "Polyclinics & Specialized Hospitals"}
                  </h3>
                </div>
              </div>
              <span className="text-xs font-bold text-slate-400">Savills 2025</span>
            </div>

            <div className="rounded-xl border border-rose-300/40 bg-rose-50/50 dark:bg-rose-950/20 p-3 text-xs text-rose-900 dark:text-rose-200 flex items-start gap-2">
              <AlertTriangle className="size-4 text-rose-600 shrink-0 mt-0.5" />
              <p>
                {ar
                  ? "إفصاح إلزامي عن فجوة بحثية: لا تتوافر في المصادر العامة قاعدة حديثة موحدة تقيس مخزون العيادات والشغور والإيجار لكل حي. يجب إجراء مسح ميداني مباشر للأسرة والتراخيص."
                  : "Mandatory research gap disclosure: No verified public database tracks clinical stock, vacancy, and rent per micro-district. Field surveys of licensed beds and physician ratios are mandatory."}
              </p>
            </div>

            <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {ar
                ? "تقرير Savills يؤكد أن التعليم والرعاية الصحية قطاعان واعدان طويلًا، لكنهما كثيفا رأس المال ويتطلبان مشغلين متخصصين. قرار إنشاء مجمع طبي يجب ألا يُبنى على التعداد السكاني فقط، بل على نسبة التغطية التأمينية والمسافة للمستشفيات القائمة."
                : "Savills highlights healthcare as an enduring defensive sector, yet highly capital-intensive requiring specialized medical operators and health insurance coverage mapping."}
            </p>
          </div>
        </div>
      </section>

      {/* 9. Module L: Price Intelligence Benchmarks */}
      <section id="price-intelligence" className="site-container py-8">
        <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 p-6 md:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-white/10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0F8B7A] block">
                {ar ? "الموديول (ل): استخبارات الأسعار وقوائم المطورين" : "Module L: Price Intelligence & Developer Lists"}
              </span>
              <h2 className="font-head text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white">
                {ar ? "مؤشرات الأسعار المنشورة وقواعد استخدامها دون خلط" : "Reported Pricing Benchmarks & Strict Usage Rules"}
              </h2>
            </div>
            <span className="text-xs text-amber-700 dark:text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full font-bold">
              {ar ? "أسعار طلب وقوائم مطورين – وليست صفقات منفذة" : "Asking Prices / Lists — NOT Completed Deeds"}
            </span>
          </div>

          {/* Pricing Table */}
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-xs text-start border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-800/50">
                  {(ar ? PRICE_INTELLIGENCE_RECORDS.columnsAr : PRICE_INTELLIGENCE_RECORDS.columnsEn).map((col, idx) => (
                    <th key={idx} className="p-3.5 font-bold text-slate-700 dark:text-slate-200 text-start">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                {PRICE_INTELLIGENCE_RECORDS.rows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors">
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white whitespace-nowrap">{row[0]}</td>
                    <td className="p-3.5 text-slate-600 dark:text-slate-300 whitespace-nowrap">{row[1]}</td>
                    <td className="p-3.5 font-extrabold text-[#0F8B7A] whitespace-nowrap text-sm">{row[2]} {ar ? "جنيه" : "EGP"}</td>
                    <td className="p-3.5 text-slate-600 dark:text-slate-400 max-w-xs">{row[3]}</td>
                    <td className="p-3.5 text-slate-500 dark:text-slate-400 max-w-sm text-[11px] leading-relaxed">{row[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Present Value (PV) Warning Rule */}
          <div className="mt-6 rounded-xl border border-[#0F8B7A]/30 bg-[#0F8B7A]/5 p-4 text-xs text-slate-700 dark:text-slate-200 leading-relaxed flex items-start gap-2.5">
            <Info className="size-4 text-[#0F8B7A] shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold text-[#0F8B7A] block mb-0.5">
                {ar ? "قاعدة مالية إلزامية لتحليل الأسعار:" : "Mandatory Underwriting Price Rule:"}
              </strong>
              <span>
                {ar
                  ? "أسعار الإعلانات وقوائم المطورين تتضمن خطط سداد على 7–10 سنوات وخصومات نقدية تصل إلى 30–40%. لا يجوز استخدامها لمقارنة العائد الاستثماري إلا بعد تحويلها إلى قيمة حالية نقدية (Present Value) على أساس جدول سداد ومعدل خصم سنوي معلن."
                  : "Developer list prices bundle 7–10 year payment plans with implicit cash discounts of up to 30–40%. Never utilize nominal list prices for yield benchmarking without discounting receivables into Net Present Value (NPV) using a disclosed WACC hurdle rate."}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Developer Projects Pipeline */}
      <section id="developers-pipeline" className="site-container py-8">
        <DevelopersPipelineView ar={ar} />
      </section>

      {/* 11. Data Gaps Register */}
      <section id="data-gaps-register" className="site-container py-8">
        <DataGapsRegisterView ar={ar} />
      </section>

      {/* 12. Module M: 100-Point Investment Scorecard */}
      <section id="scorecard-matrix" className="site-container py-8">
        <div className="mb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0F8B7A] block">
            {ar ? "الموديول (م): مصفوفة النقاط الـ 100" : "Module M: 100-Point Investment Scorecard"}
          </span>
          <h2 className="font-head text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white">
            {ar ? "إطار القياس العلمي لجاذبية الأراضي الاستثمارية" : "100-Point Land Investment Attractiveness Matrix"}
          </h2>
        </div>
        <ScorecardCalculator ar={ar} />
      </section>

      {/* 13. Module N: Interactive Feasibility Engine */}
      <section id="feasibility-engine" className="site-container py-8">
        <div className="mb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0F8B7A] block">
            {ar ? "الموديول (ن): أداة الجدوى المالية التفاعلية" : "Module N: Interactive Financial Feasibility Engine"}
          </span>
          <h2 className="font-head text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white">
            {ar ? "نمذجة التدفقات واختبار الحساسية (GDV, TDC, Margin, NPV, IRR)" : "Financial Underwriting & Sensitivity Engine: GDV, TDC, Margin, NPV, IRR"}
          </h2>
        </div>
        <FeasibilityCalculator ar={ar} />
      </section>

      {/* 14. Module O: Risk Register & Due Diligence Checklist */}
      <section id="risks-due-diligence" className="site-container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Risks Register (6 core risks) */}
          <div className="lg:col-span-7 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 p-6 md:p-8 shadow-sm space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0F8B7A] block">
                {ar ? "الموديول (س): سجل المخاطر الأساسية" : "Module O: Key Risk Register"}
              </span>
              <h3 className="font-head text-xl font-bold text-slate-900 dark:text-white">
                {ar ? "المخاطر الستة الجوهرية وإجراءات التخفيف" : "6 Core Real Estate Investment Risks & Mitigations"}
              </h3>
            </div>

            <div className="space-y-3.5 mt-4">
              {CORE_RISKS_REGISTER.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/70 dark:bg-slate-800/40 p-4 space-y-1.5"
                >
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-rose-500" />
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      {ar ? item.riskAr : item.riskEn}
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
                    <div className="text-slate-600 dark:text-slate-400">
                      <strong className="text-rose-600 font-semibold block">{ar ? "الأثر المحتمل:" : "Impact:"}</strong>
                      <span>{ar ? item.impactAr : item.impactEn}</span>
                    </div>
                    <div className="text-slate-600 dark:text-slate-400">
                      <strong className="text-emerald-600 font-semibold block">{ar ? "إجراء التخفيف:" : "Mitigation:"}</strong>
                      <span>{ar ? item.mitigationAr : item.mitigationEn}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Due Diligence Checklist (12 items) */}
          <div className="lg:col-span-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 p-6 md:p-8 shadow-sm space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block">
                {ar ? "قائمة التحقق الميداني الإلزامية" : "Mandatory Due Diligence Checklist"}
              </span>
              <h3 className="font-head text-xl font-bold text-slate-900 dark:text-white">
                {ar ? "فحص الـ 12 بندًا قبل الاستحواذ على الأرض" : "12-Point Pre-Acquisition Site Checklist"}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {ar
                  ? "تحقق تفاعلي من استيفاء شروط الأرض قبل تقديم أي عرض شراء ملزم."
                  : "Interactive checklist to track parcel verification before submitting binding bids."}
              </p>
            </div>

            <div className="space-y-2.5 mt-4">
              {(ar ? dueDiligenceItemsAr : dueDiligenceItemsEn).map((text, idx) => {
                const isChecked = Boolean(checkedDueDiligence[idx]);
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => toggleCheck(idx)}
                    className={`w-full text-start rounded-xl p-3 text-xs transition-all flex items-start gap-2.5 border ${
                      isChecked
                        ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-950 dark:text-emerald-200"
                        : "bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-slate-300"
                    }`}
                  >
                    <span
                      className={`size-4 rounded-md border flex items-center justify-center shrink-0 mt-0.5 ${
                        isChecked
                          ? "bg-emerald-600 border-emerald-600 text-white"
                          : "border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900"
                      }`}
                    >
                      {isChecked && <CheckCircle2 className="size-3" />}
                    </span>
                    <span className="leading-relaxed">{text}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 15. Module P: Complete Sources & Official Citations */}
      <section id="sources-references" className="site-container py-8 pb-16">
        <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 p-6 md:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-200 dark:border-white/10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0F8B7A] block">
                {ar ? "الموديول (ع): المراجع والمصادر الرسمية" : "Module P: Sources & Methodology Register"}
              </span>
              <h2 className="font-head text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white">
                {ar ? "سجل المصادر والبيانات المعتمدة وروابط التحقق" : "Authoritative Sources Directory & Verification Links"}
              </h2>
            </div>
            <span className="text-xs font-bold text-slate-500">
              {ar ? "14 مرجعًا رسميًا موثقًا" : "14 Verified Citations"}
            </span>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {AUTHORITATIVE_RESEARCH_SOURCES.map((src) => (
              <div
                key={src.id}
                className="rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/70 dark:bg-slate-800/40 p-4 space-y-2 hover:border-[#0F8B7A]/40 transition-colors"
              >
                <div className="flex items-start justify-between gap-3">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white leading-snug">
                    {src.name}
                  </h4>
                  {src.url && (
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0F8B7A] hover:text-[#0a6357] shrink-0"
                    >
                      <ExternalLink className="size-4" />
                    </a>
                  )}
                </div>

                <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                  {ar ? src.methodologyNoteAr : src.methodologyNoteEn}
                </p>

                <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-slate-200/60 dark:border-white/5">
                  <span>{ar ? `سنة البيانات: ${src.dataYear}` : `Data Year: ${src.dataYear}`}</span>
                  <span>{ar ? `تاريخ الرصد: ${src.accessedAt}` : `Verified: ${src.accessedAt}`}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Concluding Attribution Footer */}
          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-500">
            <div>
              <span>{ar ? "إصدار وإعداد:" : "Published by:"} </span>
              <strong className="text-slate-800 dark:text-slate-200">
                {ar ? "مجموعة سامي بن عياد (SBA Group) — قطاع المقاولات والتطوير العقاري" : "SBA Group — Construction & Real Estate Development Sector"}
              </strong>
            </div>
            <div>
              <span>{ar ? "تاريخ المراجعة التالية:" : "Next Review Cycle:"} </span>
              <span className="font-semibold text-slate-700 dark:text-slate-300">
                {ar ? "عند صدور مؤشرات Q4 2026" : "Upon Q4 2026 release"}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
