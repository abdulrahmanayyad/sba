import { useState, useMemo } from "react";
import { Link } from "@tanstack/react-router";
import {
  Search,
  Building2,
  TrendingUp,
  Award,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Building,
  BarChart3,
  Layers,
  ArrowRight,
  ArrowLeft,
  Filter,
  X,
  Flame,
  Home,
  Briefcase,
  Store,
  Compass,
  FileSpreadsheet,
  Download,
  Info,
  ExternalLink,
  ChevronRight,
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
  Legend,
} from "recharts";
import { Reveal } from "@/components/home/reveal";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import {
  EAST_CAIRO_CITIES,
  type EastCairoCityBenchmark,
} from "@/lib/studies/east-cairo-master-study";

interface ConstructionMarketsTabProps {
  ar: boolean;
}

function SectionBadge({ title }: { title: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
      <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
      {title}
    </span>
  );
}

export type ConstructionCityCategory =
  | "all"
  | "mature_established"
  | "capital_extension"
  | "private_master_planned"
  | "urban_growth_corridor"
  | "industrial_logistic_hub";

export function ConstructionMarketsTab({ ar }: ConstructionMarketsTabProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<ConstructionCityCategory>("all");
  const [selectedCityModal, setSelectedCityModal] = useState<EastCairoCityBenchmark | null>(null);
  const [chartView, setChartView] = useState<"prices" | "yields_maturity">("prices");
  const [sortBy, setSortBy] = useState<"rank" | "flatPrice" | "yield" | "name">("rank");

  // Category definitions with counts
  const categoriesConfig = useMemo(() => [
    { id: "all" as const, labelAr: "كافة مدن مصر (12 مدينة)", labelEn: "All Egyptian Cities (12)" },
    { id: "mature_established" as const, labelAr: "مدن ناضجة وقائمة", labelEn: "Mature & Established Cities" },
    { id: "capital_extension" as const, labelAr: "العاصمة والمدن الذكية", labelEn: "Capital & Smart Cities" },
    { id: "private_master_planned" as const, labelAr: "مجتمعات خاصة ومخططة", labelEn: "Private Planned Communities" },
    { id: "urban_growth_corridor" as const, labelAr: "امتدادات عمرانية واعدة", labelEn: "Urban Growth Corridors" },
    { id: "industrial_logistic_hub" as const, labelAr: "القطب الصناعي واللوجستي", labelEn: "Industrial Logistic Hubs" },
  ], []);

  // Top 5 anchor spotlight cities
  const topAnchorCities = useMemo(() => {
    return [...EAST_CAIRO_CITIES]
      .sort((a, b) => (a.investmentRank ?? 99) - (b.investmentRank ?? 99))
      .slice(0, 5);
  }, []);

  // Filtered and sorted cities
  const filteredCities = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return EAST_CAIRO_CITIES.filter((city) => {
      if (selectedCategory !== "all" && city.category !== selectedCategory) {
        return false;
      }
      if (q) {
        const subNames = city.submarkets.map((s) => `${s.nameAr} ${s.nameEn}`).join(" ");
        const sectors = `${city.promisingSectorsAr.join(" ")} ${city.promisingSectorsEn.join(" ")}`;
        const hay = `${city.nameAr} ${city.nameEn} ${city.locationAndBoundariesAr} ${city.investmentHypothesisAr} ${subNames} ${sectors}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === "flatPrice") {
        return (b.avgFlatPriceEgpSqm ?? 0) - (a.avgFlatPriceEgpSqm ?? 0);
      }
      if (sortBy === "yield") {
        return (b.expectedRentalYieldPct ?? 0) - (a.expectedRentalYieldPct ?? 0);
      }
      if (sortBy === "name") {
        const na = ar ? a.nameAr : a.nameEn;
        const nb = ar ? b.nameAr : b.nameEn;
        return na.localeCompare(nb);
      }
      return (a.investmentRank ?? 99) - (b.investmentRank ?? 99);
    });
  }, [searchQuery, selectedCategory, sortBy, ar]);

  // Chart Data preparation
  const chartData = useMemo(() => {
    return EAST_CAIRO_CITIES.map((c) => ({
      name: ar ? c.nameAr.replace("مدينة ", "") : c.nameEn,
      fullName: ar ? c.nameAr : c.nameEn,
      flatPrice: c.avgFlatPriceEgpSqm,
      villaPrice: c.avgVillaPriceEgpSqm,
      yieldPct: c.expectedRentalYieldPct,
      maturity: c.overallMaturityScore,
      rank: c.investmentRank,
    })).sort((a, b) => (a.rank ?? 99) - (b.rank ?? 99));
  }, [ar]);

  return (
    <div className="w-full space-y-12">
      {/* 1. Header & Intro */}
      <section className="site-container">
        <Reveal>
          <div className="glass-box-interactive group mx-auto w-full rounded-3xl p-8 sm:p-12 text-center cursor-pointer">
            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
              <div className="mb-3">
                <SectionBadge
                  title={ar ? "قطاع المقاولات والتطوير العقاري — جمهورية مصر العربية" : "Contracting & Real Estate Intelligence — Egypt"}
                />
              </div>
              <h1 className="font-head text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground text-center w-full mx-auto">
                {ar ? "خريطة دراسات الأسواق والمدن العقارية — مصر" : "Egypt Real Estate & City Markets Intelligence"}
              </h1>
              <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed text-center w-full max-w-3xl mx-auto">
                {ar
                  ? "منظومة بحثية واستثمارية متكاملة تعامل كل مدينة داخل مصر كوحدة دراسة مستقلة ومقارنة؛ تغطي 12 مدينة رئيسية في شرق القاهرة ومحاور التنمية الكبرى، مع فحص تفصيلي لـ 45+ حياً ومنطقة ومؤشرات الأسعار والعوائد ونماذج الجدوى الاستثمارية."
                  : "An institutional intelligence framework treating each Egyptian city as a dedicated comparable market. Covering 12 anchor cities across East Cairo with 45+ granular submarket profiles, pricing spreads, rental yields and feasibility metrics."}
              </p>

              {/* Master Study Quick Action Link */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <Link
                  to="/global-markets/$sector/$slug"
                  params={{ sector: "construction", slug: "east-cairo-real-estate-study" }}
                  className="inline-flex items-center gap-2 rounded-full bg-brand-green px-6 py-2.5 text-xs font-bold text-white hover:bg-brand-orange transition-all duration-300 shadow-md hover:scale-105 active:scale-95"
                >
                  <Building2 className="size-4" />
                  <span>{ar ? "دراسة شرق القاهرة الشاملة (لوحة مقارنة كافة المدن والـ 45 حياً)" : "East Cairo Regional Study (All 12 Cities & 45 Submarkets)"}</span>
                  {ar ? <ArrowLeft className="size-3.5 rtl:rotate-0" /> : <ArrowRight className="size-3.5" />}
                </Link>
                <Link
                  to="/global-markets/$sector"
                  params={{ sector: "construction" }}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-5 py-2.5 text-xs font-bold text-foreground hover:border-brand-green transition-all duration-300 shadow-xs"
                >
                  <Layers className="size-4 text-brand-green" />
                  <span>{ar ? "بوابة دراسات الأسواق بالقطاع" : "Sector Markets Portal"}</span>
                </Link>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="relative z-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-10 pt-6 border-t border-border/50 max-w-5xl mx-auto justify-center">
              <div className="rounded-2xl border border-border bg-secondary/30 p-5 sm:p-6 backdrop-blur-md flex flex-col items-center justify-center text-center transition-all hover:border-brand-green/40 hover:bg-secondary/40 shadow-xs">
                <span className="text-[11px] sm:text-xs font-bold text-muted-foreground uppercase tracking-wider block text-center mx-auto">
                  {ar ? "إجمالي المدن المدروسة" : "Tracked Anchor Cities"}
                </span>
                <span className="font-head text-3xl sm:text-4xl font-extrabold text-brand-green mt-2 block text-center mx-auto">
                  12
                </span>
                <p className="text-xs text-muted-foreground mt-1.5 text-center mx-auto leading-relaxed">
                  {ar ? "مدن ناضجة، جديدة وعاصمة" : "Mature, extension & capital"}
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-secondary/30 p-5 sm:p-6 backdrop-blur-md flex flex-col items-center justify-center text-center transition-all hover:border-brand-green/40 hover:bg-secondary/40 shadow-xs">
                <span className="text-[11px] sm:text-xs font-bold text-muted-foreground uppercase tracking-wider block text-center mx-auto">
                  {ar ? "الأحياء والمناطق المحللة" : "Detailed Submarkets"}
                </span>
                <span className="font-head text-3xl sm:text-4xl font-extrabold text-brand-green mt-2 block text-center mx-auto">
                  45+
                </span>
                <p className="text-xs text-muted-foreground mt-1.5 text-center mx-auto leading-relaxed">
                  {ar ? "مقارنات تفصيلية داخل كل مدينة" : "Intra-city district comparators"}
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-secondary/30 p-5 sm:p-6 backdrop-blur-md flex flex-col items-center justify-center text-center transition-all hover:border-brand-green/40 hover:bg-secondary/40 shadow-xs">
                <span className="text-[11px] sm:text-xs font-bold text-muted-foreground uppercase tracking-wider block text-center mx-auto">
                  {ar ? "حجم المبيعات التعاقدية" : "Regional Sales 9M 2024"}
                </span>
                <span className="font-head text-3xl sm:text-4xl font-extrabold text-brand-green mt-2 block text-center mx-auto">
                  499.6
                </span>
                <p className="text-xs text-muted-foreground mt-1.5 text-center mx-auto leading-relaxed">
                  {ar ? "مليار جنيه لأكبر 10 مطورين" : "Billion EGP Top 10 Developers"}
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-secondary/30 p-5 sm:p-6 backdrop-blur-md flex flex-col items-center justify-center text-center transition-all hover:border-brand-green/40 hover:bg-secondary/40 shadow-xs">
                <span className="text-[11px] sm:text-xs font-bold text-muted-foreground uppercase tracking-wider block text-center mx-auto">
                  {ar ? "التغطية السعرية والجدوى" : "Pricing & Feasibility"}
                </span>
                <span className="font-head text-3xl sm:text-4xl font-extrabold text-brand-green mt-2 block text-center mx-auto">
                  100%
                </span>
                <p className="text-xs text-muted-foreground mt-1.5 text-center mx-auto leading-relaxed">
                  {ar ? "شقق، فيلات، عوائد ونماذج DCF" : "Flats, villas, yields & DCF"}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 2. SPOTLIGHT: أبرز المدن الاستثمارية الرائدة (Prominent High-Potential Cities) */}
      <section className="site-container">
        <Reveal>
          <div className="rounded-3xl border border-brand-orange/30 bg-gradient-to-br from-brand-orange/5 via-background/90 to-brand-green/5 p-6 sm:p-10 shadow-lg backdrop-blur-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-border/50">
              <div className="flex items-center gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-brand-orange/15 text-brand-orange">
                  <Flame className="size-5" />
                </span>
                <div>
                  <h2 className="font-head text-xl sm:text-2xl font-extrabold text-foreground">
                    {ar ? "أبرز المدن العقارية ذات الثقل الاستثماري" : "Top Institutional Strategic Anchor Cities"}
                  </h2>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                    {ar
                      ? "المدن الخمس الأولى التي تقود قاطرة التطوير العقاري وأعلى أحجام التداول والطلب المؤسسي:"
                      : "The leading 5 anchor hubs driving capital allocation, sales velocity, and institutional demand in Egypt:"}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("all");
                  const el = document.getElementById("cities-directory");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 rounded-full bg-brand-green hover:bg-brand-orange text-white px-4 py-1.5 text-xs font-bold shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer self-start sm:self-center shrink-0"
              >
                <span className="size-1.5 rounded-full bg-white animate-pulse" />
                <span>{ar ? "استعراض كافة الـ 12 مدينة" : "Browse All 12 Cities"}</span>
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {topAnchorCities.map((city) => (
                <div
                  key={city.id}
                  onClick={() => setSelectedCityModal(city)}
                  className="group relative cursor-pointer rounded-2xl border border-border/80 bg-background/90 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-brand-green hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <img
                          src="https://flagcdn.com/w40/eg.png"
                          srcSet="https://flagcdn.com/w80/eg.png 2x"
                          alt="Egypt"
                          className="h-4 w-6 rounded object-cover border border-border shadow-2xs"
                          loading="lazy"
                        />
                        <span className="text-[10px] font-bold text-muted-foreground">
                          {ar ? `الترتيب #${city.investmentRank}` : `Rank #${city.investmentRank}`}
                        </span>
                      </div>
                      <span className="rounded-full bg-brand-green/15 text-brand-green px-2 py-0.5 text-[10px] font-extrabold">
                        {city.overallMaturityScore}/100
                      </span>
                    </div>

                    <h3 className="font-head text-base font-extrabold text-foreground group-hover:text-brand-green transition-colors">
                      {ar ? city.nameAr : city.nameEn}
                    </h3>

                    <div className="mt-3 space-y-1.5 text-xs">
                      <div className="flex items-center justify-between text-muted-foreground">
                        <span>{ar ? "سعر متر الشقق:" : "Flat Price:"}</span>
                        <span className="font-mono font-bold text-brand-green">
                          {city.avgFlatPriceEgpSqm?.toLocaleString()} ج.م
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-muted-foreground">
                        <span>{ar ? "العائد الإيجاري:" : "Rental Yield:"}</span>
                        <span className="font-mono font-bold text-brand-orange">
                          {city.expectedRentalYieldPct}%
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-muted-foreground">
                        <span>{ar ? "الأحياء المحللة:" : "Submarkets:"}</span>
                        <span className="font-bold text-foreground">
                          {city.submarkets.length} {ar ? "أحياء" : "districts"}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-[11px] font-bold text-brand-green group-hover:text-brand-orange transition-colors">
                    <span>{ar ? "نظرة سريعة والدراسة" : "Quick View & Study"}</span>
                    {ar ? <ArrowLeft className="size-3 rtl:rotate-0" /> : <ArrowRight className="size-3" />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* 3. VISUAL COMPARATIVE CHART: مقارنة الأسعار والعوائد والنضج */}
      <section className="site-container">
        <Reveal>
          <div className="rounded-3xl border border-border bg-card/75 p-6 sm:p-8 backdrop-blur-xl shadow-md space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="font-head text-lg sm:text-xl font-extrabold text-foreground flex items-center gap-2">
                  <BarChart3 className="size-5 text-brand-green" />
                  <span>{ar ? "الرسم البياني التحليلي المقارن للمدن (12 مدينة)" : "Comparative Analytics Chart Across 12 Cities"}</span>
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                  {ar
                    ? "مقارنة معيارية مباشرة لمتوسطات الأسعار للمتر المربع، والعوائد الإيجارية ومؤشرات النضج العمراني:"
                    : "Benchmark price per sqm, expected rental yields and maturity scores across all analyzed territories:"}
                </p>
              </div>

              <div className="flex items-center gap-1.5 rounded-2xl border border-border bg-secondary/50 p-1 self-start sm:self-auto">
                <button
                  type="button"
                  onClick={() => setChartView("prices")}
                  className={cn(
                    "rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all cursor-pointer",
                    chartView === "prices"
                      ? "bg-brand-green text-white shadow-xs"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {ar ? "مقارنة أسعار المتر (شقق وفيلات)" : "Price/sqm (Flats & Villas)"}
                </button>
                <button
                  type="button"
                  onClick={() => setChartView("yields_maturity")}
                  className={cn(
                    "rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all cursor-pointer",
                    chartView === "yields_maturity"
                      ? "bg-brand-green text-white shadow-xs"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {ar ? "العائد الإيجاري ومؤشر النضج" : "Rental Yields & Maturity"}
                </button>
              </div>
            </div>

            <div className="h-[340px] sm:h-[400px] w-full pt-4">
              <ResponsiveContainer width="100%" height="100%">
                {chartView === "prices" ? (
                  <BarChart data={chartData} margin={{ top: 10, right: 10, left: 10, bottom: 60 }}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
                    <XAxis
                      dataKey="name"
                      angle={-35}
                      textAnchor="end"
                      interval={0}
                      tick={{ fontSize: 11, fill: "currentColor" }}
                      height={65}
                    />
                    <YAxis tick={{ fontSize: 11, fill: "currentColor" }} />
                    <Tooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload;
                          return (
                            <div className="rounded-xl border border-border bg-popover/95 p-3 text-xs shadow-lg backdrop-blur-md space-y-1">
                              <p className="font-extrabold text-foreground">{data.fullName}</p>
                              <p className="text-brand-green font-mono font-bold">
                                {ar ? "متوسط الشقق: " : "Flats Avg: "}
                                {data.flatPrice?.toLocaleString()} ج.م/م²
                              </p>
                              {data.villaPrice && (
                                <p className="text-brand-orange font-mono font-bold">
                                  {ar ? "متوسط الفيلات: " : "Villas Avg: "}
                                  {data.villaPrice?.toLocaleString()} ج.م/م²
                                </p>
                              )}
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Legend wrapperStyle={{ paddingTop: "10px", fontSize: "12px" }} />
                    <Bar
                      dataKey="flatPrice"
                      name={ar ? "سعر متر الشقق (ج.م/م²)" : "Flat Price (EGP/sqm)"}
                      fill="#0F8B7A"
                      radius={[6, 6, 0, 0]}
                    />
                    <Bar
                      dataKey="villaPrice"
                      name={ar ? "سعر متر الفيلات (ج.م/م²)" : "Villa Price (EGP/sqm)"}
                      fill="#F28C00"
                      radius={[6, 6, 0, 0]}
                    />
                  </BarChart>
                ) : (
                  <BarChart data={chartData} margin={{ top: 10, right: 10, left: 10, bottom: 60 }}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
                    <XAxis
                      dataKey="name"
                      angle={-35}
                      textAnchor="end"
                      interval={0}
                      tick={{ fontSize: 11, fill: "currentColor" }}
                      height={65}
                    />
                    <YAxis tick={{ fontSize: 11, fill: "currentColor" }} />
                    <Tooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload;
                          return (
                            <div className="rounded-xl border border-border bg-popover/95 p-3 text-xs shadow-lg backdrop-blur-md space-y-1">
                              <p className="font-extrabold text-foreground">{data.fullName}</p>
                              <p className="text-brand-orange font-mono font-bold">
                                {ar ? "العائد الإيجاري: " : "Rental Yield: "}
                                {data.yieldPct}% سنوياً
                              </p>
                              <p className="text-brand-green font-mono font-bold">
                                {ar ? "مؤشر النضج العمراني: " : "Maturity Score: "}
                                {data.maturity}/100
                              </p>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Legend wrapperStyle={{ paddingTop: "10px", fontSize: "12px" }} />
                    <Bar
                      dataKey="yieldPct"
                      name={ar ? "العائد الإيجاري (%)" : "Rental Yield (%)"}
                      fill="#F28C00"
                      radius={[6, 6, 0, 0]}
                    />
                    <Bar
                      dataKey="maturity"
                      name={ar ? "مؤشر النضج العمراني (/100)" : "Maturity Score (/100)"}
                      fill="#0F8B7A"
                      radius={[6, 6, 0, 0]}
                    />
                  </BarChart>
                )}
              </ResponsiveContainer>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 4. CITY MARKETS DIRECTORY (دليل المدن والمجتمعات العمرانية) */}
      <section id="cities-directory" className="site-container">
        <div className="space-y-6">
          {/* Controls Bar: Search, Category Filters, Sort */}
          <div className="rounded-3xl border border-border bg-card/85 p-6 backdrop-blur-xl shadow-md space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="font-head text-xl font-extrabold text-foreground">
                  {ar ? "دليل مدن ومجتمعات شرق القاهرة العقارية" : "East Cairo Cities & Communities Directory"}
                </h2>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {ar
                    ? `عرض ${filteredCities.length} مدينة مدروسة موثقة ببيانات الأحياء والأسعار والعوائد`
                    : `Showing ${filteredCities.length} verified city dossiers with intra-city district breakdowns`}
                </p>
              </div>

              {/* Search input & Sort */}
              <div className="flex flex-wrap items-center gap-2">
                <div className="relative min-w-[220px]">
                  <Search className="absolute start-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={ar ? "ابحث باسم المدينة، الحي أو النشاط..." : "Search city, district or sector..."}
                    className="w-full rounded-2xl border border-border bg-background ps-9 pe-4 py-2 text-xs font-medium focus:border-brand-green focus:outline-none"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="absolute end-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      <X className="size-3.5" />
                    </button>
                  )}
                </div>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  aria-label={ar ? "ترتيب المدن" : "Sort Cities"}
                  className="rounded-2xl border border-border bg-background px-3 py-2 text-xs font-bold focus:outline-none"
                >
                  <option value="rank">{ar ? "ترتيب: الأولوية الاستثمارية" : "Sort: Investment Rank"}</option>
                  <option value="flatPrice">{ar ? "ترتيب: أعلى سعر شقق" : "Sort: Highest Flat Price"}</option>
                  <option value="yield">{ar ? "ترتيب: أعلى عائد إيجاري" : "Sort: Highest Rental Yield"}</option>
                  <option value="name">{ar ? "ترتيب: اسم المدينة" : "Sort: City Name"}</option>
                </select>
              </div>
            </div>

            {/* Category Filter Chips */}
            <div className="pt-3 border-t border-border/50 flex flex-wrap items-center gap-1.5">
              {categoriesConfig.map((cat) => {
                const active = selectedCategory === cat.id;
                const count =
                  cat.id === "all"
                    ? EAST_CAIRO_CITIES.length
                    : EAST_CAIRO_CITIES.filter((c) => c.category === cat.id).length;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={cn(
                      "rounded-full border px-3.5 py-1 text-xs font-bold transition-all duration-300 cursor-pointer shadow-xs",
                      active
                        ? "border-brand-green bg-brand-green text-white hover:bg-brand-orange"
                        : "border-border bg-background text-muted-foreground hover:text-foreground hover:border-brand-green/50"
                    )}
                  >
                    {ar ? `${cat.labelAr} (${count})` : `${cat.labelEn} (${count})`}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grid of City Cards */}
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredCities.map((city) => (
              <div
                key={city.id}
                className="interactive-card glass-box-interactive group flex flex-col justify-between rounded-3xl border border-border/80 bg-card/80 p-6 backdrop-blur-2xl shadow-md text-start relative overflow-hidden transition-all duration-300 hover:border-brand-green/80 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="space-y-4">
                  {/* Top Bar: Flag, Investment Rank, Maturity Score */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <img
                        src="https://flagcdn.com/w40/eg.png"
                        srcSet="https://flagcdn.com/w80/eg.png 2x"
                        alt="Egypt"
                        className="h-4.5 w-7 rounded-[3px] object-cover border border-border shadow-xs"
                        loading="lazy"
                      />
                      <span className="rounded-full bg-brand-green/15 text-brand-green px-2.5 py-0.5 text-xs font-extrabold">
                        {ar ? `الترتيب الاستثماري #${city.investmentRank}` : `Rank #${city.investmentRank}`}
                      </span>
                    </div>

                    <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-bold text-foreground">
                      {ar ? `النضج: ${city.overallMaturityScore}/100` : `Maturity: ${city.overallMaturityScore}/100`}
                    </span>
                  </div>

                  {/* City Name & Category */}
                  <div>
                    <h3 className="font-head text-xl font-black text-foreground group-hover:text-brand-green transition-colors">
                      {ar ? city.nameAr : city.nameEn}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
                      {ar ? city.locationAndBoundariesAr : city.locationAndBoundariesEn}
                    </p>
                  </div>

                  {/* 2x2 Metric Highlights Grid */}
                  <div className="grid grid-cols-2 gap-2 text-start">
                    <div className="rounded-xl border border-border bg-secondary/40 p-2.5">
                      <span className="text-[10px] font-semibold text-muted-foreground block">
                        {ar ? "سعر متر الشقق" : "Avg Flat Price"}
                      </span>
                      <span className="text-xs font-black font-mono text-brand-green">
                        {city.avgFlatPriceEgpSqm?.toLocaleString()} ج.م
                      </span>
                    </div>
                    <div className="rounded-xl border border-border bg-secondary/40 p-2.5">
                      <span className="text-[10px] font-semibold text-muted-foreground block">
                        {ar ? "سعر متر الفيلات" : "Avg Villa Price"}
                      </span>
                      <span className="text-xs font-black font-mono text-brand-orange">
                        {city.avgVillaPriceEgpSqm ? `${city.avgVillaPriceEgpSqm.toLocaleString()} ج.م` : "—"}
                      </span>
                    </div>
                    <div className="rounded-xl border border-border bg-secondary/40 p-2.5">
                      <span className="text-[10px] font-semibold text-muted-foreground block">
                        {ar ? "العائد الإيجاري" : "Rental Yield"}
                      </span>
                      <span className="text-xs font-black font-mono text-brand-orange">
                        {city.expectedRentalYieldPct}% سنوياً
                      </span>
                    </div>
                    <div className="rounded-xl border border-border bg-secondary/40 p-2.5">
                      <span className="text-[10px] font-semibold text-muted-foreground block">
                        {ar ? "نسبة الإشغال" : "Occupancy Rate"}
                      </span>
                      <span className="text-xs font-black font-mono text-foreground">
                        {city.currentEstimatedOccupancyPct}%
                      </span>
                    </div>
                  </div>

                  {/* Submarkets List Badge */}
                  <div className="rounded-xl border border-border/80 bg-secondary/20 p-2.5 text-xs">
                    <span className="font-extrabold text-foreground flex items-center justify-between mb-1">
                      <span>{ar ? `الأحياء المحللة (${city.submarkets.length} أحياء):` : `Submarkets (${city.submarkets.length}):`}</span>
                    </span>
                    <p className="line-clamp-2 text-muted-foreground text-[11px] leading-relaxed">
                      {city.submarkets.map((s) => (ar ? s.nameAr : s.nameEn)).join(" · ")}
                    </p>
                  </div>

                  {/* Promising Sectors Tags */}
                  <div className="flex flex-wrap gap-1">
                    {(ar ? city.promisingSectorsAr : city.promisingSectorsEn).slice(0, 3).map((sec, sIdx) => (
                      <span
                        key={sIdx}
                        className="rounded-lg border border-border bg-background px-2 py-0.5 text-[10px] font-semibold text-muted-foreground"
                      >
                        {sec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions: View Full Study & Quick View Modal */}
                <div className="mt-5 pt-3 border-t border-border/60 flex items-center gap-2">
                  <Link
                    to="/global-markets/$sector/$slug"
                    params={{ sector: "construction", slug: city.id }}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-brand-green px-3 py-2 text-xs font-bold text-white hover:bg-brand-orange transition-all duration-300 shadow-xs cursor-pointer"
                  >
                    <span>{ar ? "عرض دراسة المدينة والأحياء" : "View City & Districts Study"}</span>
                    {ar ? <ArrowLeft className="size-3.5 rtl:rotate-0" /> : <ArrowRight className="size-3.5" />}
                  </Link>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedCityModal(city)}
                    className="rounded-xl text-xs font-bold px-3 py-2 cursor-pointer"
                  >
                    {ar ? "نظرة سريعة" : "Quick View"}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INSTITUTIONAL MASTER REPORT BANNER: تقرير شرق القاهرة الشامل */}
      <section className="site-container">
        <div className="rounded-3xl border border-brand-green/30 bg-gradient-to-r from-brand-green/10 via-background to-brand-orange/10 p-8 sm:p-10 backdrop-blur-xl shadow-lg">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8 space-y-3 text-start">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-green/40 bg-brand-green/10 px-3 py-1 text-xs font-bold text-brand-green">
                <Award className="size-3.5" />
                <span>{ar ? "تقرير استشاري متكامل — الإصدار 2.0 المعتمد" : "Comprehensive Institutional Intelligence — Version 2.0"}</span>
              </span>
              <h2 className="font-head text-2xl sm:text-3xl font-extrabold text-foreground">
                {ar
                  ? "دراسة سوق التطوير العقاري والاستثمار — شرق القاهرة الشاملة"
                  : "East Cairo Real Estate Development & Investment Master Intelligence"}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
                {ar
                  ? "دراسة شاملة تجمع كافة مؤشرات العرض والطلب، وتسعير الأراضي، وتحليل المطورين المنافسين، ومحاور المونوريل والقطار الكهربائي السريع LRT، ونماذج التدفقات النقدية المخصومة DCF، وقائمة التحقق الاستثماري (Due Diligence)."
                  : "Complete regional intelligence combining demand aggregates, land dynamics, developer benchmarking, monorail/LRT transit corridors, DCF calculators and institutional due diligence checklists."}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-2.5 justify-end">
              <Link
                to="/global-markets/$sector/$slug"
                params={{ sector: "construction", slug: "east-cairo-real-estate-study" }}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-green px-5 py-3 text-xs font-extrabold text-white hover:bg-brand-orange transition-all duration-300 shadow-md"
              >
                <Compass className="size-4" />
                <span>{ar ? "فتح الدراسة الإقليمية التفاعلية الكاملة" : "Open Full Interactive Regional Study"}</span>
              </Link>
              <div className="flex gap-2">
                <a
                  href="/studies/east-cairo/SBA_East_Cairo_Real_Estate_Study_v2_AR.docx"
                  download
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-border bg-background/90 px-3 py-2 text-[11px] font-bold text-foreground hover:border-brand-green transition-colors"
                >
                  <Download className="size-3.5 text-brand-green" />
                  <span>{ar ? "تحميل التقرير (Word)" : "Report (Word)"}</span>
                </a>
                <a
                  href="/studies/east-cairo/SBA_East_Cairo_Real_Estate_Database_v2.xlsx"
                  download
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-border bg-background/90 px-3 py-2 text-[11px] font-bold text-foreground hover:border-brand-green transition-colors"
                >
                  <FileSpreadsheet className="size-3.5 text-brand-orange" />
                  <span>{ar ? "قاعدة البيانات (Excel)" : "Database (Excel)"}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. MODAL: نظرة سريعة على تفاصيل المدينة وأحيائها */}
      {selectedCityModal && (
        <Dialog open={Boolean(selectedCityModal)} onOpenChange={(open) => !open && setSelectedCityModal(null)}>
          <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
            <DialogHeader className="text-start space-y-2">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <img
                    src="https://flagcdn.com/w40/eg.png"
                    alt="Egypt"
                    className="h-4.5 w-7 rounded object-cover border border-border shadow-xs"
                  />
                  <span className="text-xs font-bold text-brand-green">
                    {ar ? `الترتيب الاستثماري #${selectedCityModal.investmentRank}` : `Investment Rank #${selectedCityModal.investmentRank}`}
                  </span>
                </div>
                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-bold text-foreground">
                  {ar ? `مؤشر النضج: ${selectedCityModal.overallMaturityScore}/100` : `Maturity: ${selectedCityModal.overallMaturityScore}/100`}
                </span>
              </div>
              <DialogTitle className="font-head text-2xl font-black text-foreground">
                {ar ? selectedCityModal.nameAr : selectedCityModal.nameEn}
              </DialogTitle>
              <DialogDescription className="text-xs text-muted-foreground">
                {ar ? selectedCityModal.locationAndBoundariesAr : selectedCityModal.locationAndBoundariesEn}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6 pt-3 text-start">
              {/* KPIs Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <div className="rounded-xl border border-border bg-secondary/30 p-3 text-center">
                  <span className="text-[11px] text-muted-foreground block">{ar ? "متوسط الشقق" : "Avg Flats"}</span>
                  <span className="font-mono font-extrabold text-sm text-brand-green">
                    {selectedCityModal.avgFlatPriceEgpSqm?.toLocaleString()} ج.م/م²
                  </span>
                </div>
                <div className="rounded-xl border border-border bg-secondary/30 p-3 text-center">
                  <span className="text-[11px] text-muted-foreground block">{ar ? "متوسط الفيلات" : "Avg Villas"}</span>
                  <span className="font-mono font-extrabold text-sm text-brand-orange">
                    {selectedCityModal.avgVillaPriceEgpSqm ? `${selectedCityModal.avgVillaPriceEgpSqm.toLocaleString()} ج.م/م²` : "—"}
                  </span>
                </div>
                <div className="rounded-xl border border-border bg-secondary/30 p-3 text-center">
                  <span className="text-[11px] text-muted-foreground block">{ar ? "العائد الإيجاري" : "Rental Yield"}</span>
                  <span className="font-mono font-extrabold text-sm text-brand-orange">
                    {selectedCityModal.expectedRentalYieldPct}% سنوياً
                  </span>
                </div>
                <div className="rounded-xl border border-border bg-secondary/30 p-3 text-center">
                  <span className="text-[11px] text-muted-foreground block">{ar ? "الإشغال الفعلي" : "Occupancy"}</span>
                  <span className="font-mono font-extrabold text-sm text-foreground">
                    {selectedCityModal.currentEstimatedOccupancyPct}%
                  </span>
                </div>
              </div>

              {/* Investment Hypothesis */}
              <div className="rounded-2xl border border-brand-green/20 bg-brand-green/5 p-4 text-xs space-y-1.5">
                <span className="font-extrabold text-brand-green block">
                  {ar ? "الأطروحة والفرصة الاستثمارية الأساسية:" : "Core Investment Thesis:"}
                </span>
                <p className="text-muted-foreground leading-relaxed">
                  {ar ? selectedCityModal.investmentHypothesisAr : selectedCityModal.investmentHypothesisEn}
                </p>
              </div>

              {/* Submarkets List */}
              <div className="space-y-3">
                <h4 className="font-head text-sm font-extrabold text-foreground flex items-center justify-between">
                  <span>{ar ? `الأحياء والمناطق المحللة داخل ${selectedCityModal.nameAr}:` : `Analyzed Submarkets inside ${selectedCityModal.nameEn}:`}</span>
                  <span className="text-xs text-muted-foreground font-normal">
                    {selectedCityModal.submarkets.length} {ar ? "أحياء" : "districts"}
                  </span>
                </h4>

                <div className="space-y-2 max-h-56 overflow-y-auto pe-1">
                  {selectedCityModal.submarkets.map((sub, idx) => (
                    <div
                      key={sub.id || idx}
                      className="rounded-xl border border-border/80 bg-card p-3 text-xs space-y-1"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-bold text-foreground">{ar ? sub.nameAr : sub.nameEn}</span>
                        <span className="font-mono text-brand-green font-bold text-[11px]">
                          {ar ? sub.priceRangeEgpSqmAr : sub.priceRangeEgpSqmEn}
                        </span>
                      </div>
                      <p className="text-[11px] text-muted-foreground">
                        {ar ? sub.typologyAr : sub.typologyEn}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer CTA */}
              <div className="pt-3 border-t border-border flex flex-wrap items-center justify-between gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedCityModal(null)}
                  className="rounded-xl text-xs font-bold"
                >
                  {ar ? "إغلاق" : "Close"}
                </Button>
                <Link
                  to="/global-markets/$sector/$slug"
                  params={{ sector: "construction", slug: selectedCityModal.id }}
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-green px-5 py-2.5 text-xs font-bold text-white hover:bg-brand-orange transition-all shadow-xs"
                  onClick={() => setSelectedCityModal(null)}
                >
                  <span>{ar ? `الانتقال للدراسة الكاملة لـ ${selectedCityModal.nameAr}` : `Open Full Study for ${selectedCityModal.nameEn}`}</span>
                  {ar ? <ArrowLeft className="size-3.5 rtl:rotate-0" /> : <ArrowRight className="size-3.5" />}
                </Link>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
