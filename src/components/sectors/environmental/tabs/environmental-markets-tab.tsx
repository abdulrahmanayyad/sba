import { useState, useMemo } from "react";
import { Link } from "@tanstack/react-router";
import {
  Search,
  Globe2,
  TrendingUp,
  Award,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Building,
  BarChart3,
  Layers,
  ArrowRight,
  Filter,
  X,
  Flame,
  Leaf,
  Droplets,
  Recycle,
  Zap,
  Info
} from "lucide-react";
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
import { ENVIRONMENTAL_66_MASTER_STUDIES } from "@/lib/studies/environmental-master-studies";
import { getStudyRegionCategory } from "@/components/global-markets/global-markets-home";

interface EnvironmentalMarketsTabProps {
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

// Country definition for pure market intelligence (no study files / no downloads)
export interface MarketCountryItem {
  id: string;
  code: string;
  nameAr: string;
  nameEn: string;
  region: "gcc" | "arab" | "africa" | "global";
  potentialScore: number;
  potentialTierAr: string;
  potentialTierEn: string;
  isTopProminent: boolean; // ابرز الاسواق الكبرى
  marketSizeLabelAr: string;
  marketSizeLabelEn: string;
  activityScopeAr: string;
  activityScopeEn: string;
  servicesProvidedAr: string[];
  servicesProvidedEn: string[];
  marketDriverAr: string;
  marketDriverEn: string;
}

export function EnvironmentalMarketsTab({ ar }: EnvironmentalMarketsTabProps) {
  // Map master dataset into pure market & country items (strictly omitting any study documents/links)
  const countriesData: MarketCountryItem[] = useMemo(() => {
    return ENVIRONMENTAL_66_MASTER_STUDIES.map((s) => {
      const regCat = getStudyRegionCategory(s);
      const score = s.opportunityScore ?? 75;
      const isTop = score >= 86; // Top major markets with huge potential

      let region: "gcc" | "arab" | "africa" | "global" = "global";
      if (regCat === "gcc") region = "gcc";
      else if (regCat === "arab") region = "arab";
      else region = "africa";

      // Tailored market size label
      let sizeLabelAr = "سوق بيئي نامٍ وواعد";
      let sizeLabelEn = "Emerging Environmental Market";
      if (score >= 93) {
        sizeLabelAr = "سوق استراتيجي فائق الحجم";
        sizeLabelEn = "Mega-Scale Strategic Market";
      } else if (score >= 86) {
        sizeLabelAr = "سوق رئيسي ذو فرص كبرى";
        sizeLabelEn = "Major High-Potential Market";
      } else if (score >= 75) {
        sizeLabelAr = "سوق متوسط بفرص متنامية";
        sizeLabelEn = "Mid-Scale Growing Market";
      }

      return {
        id: s.id,
        code: s.countryCode || "UN",
        nameAr: s.countryNameAr,
        nameEn: s.countryNameEn,
        region,
        potentialScore: score,
        potentialTierAr: s.opportunityTierAr || (isTop ? "المستوى الأول – أولوية قصوى" : "سوق نشط"),
        potentialTierEn: s.opportunityTier || (isTop ? "Tier 1 – Major Priority" : "Active Market"),
        isTopProminent: isTop,
        marketSizeLabelAr: sizeLabelAr,
        marketSizeLabelEn: sizeLabelEn,
        activityScopeAr: s.activityTypeAr || "استشارات بيئية، تقييم الأثر البيئي، وإدارة حلول الاستدامة",
        activityScopeEn: s.activityTypeEn || "Environmental Consultancy, EIA Studies & Sustainability Management",
        servicesProvidedAr: s.productTagsAr && s.productTagsAr.length > 0
          ? s.productTagsAr
          : ["دراسات الأثر البيئي EIA", "إدارة ومعالجة المخلفات", "معالجة المياه والصرف", "الطاقة المتجددة", "خفض الانبعاثات"],
        servicesProvidedEn: s.productTagsEn && s.productTagsEn.length > 0
          ? s.productTagsEn
          : ["EIA / ESIA Studies", "Waste Management", "Water Treatment", "Renewable Energy", "Decarbonization"],
        marketDriverAr: s.opportunityRationaleAr || "طلب متزايد على التوافق مع المعايير البيئية ومشاريع البنية التحتية الخضراء.",
        marketDriverEn: s.opportunityRationaleEn || "Growing industrial demand for regulatory compliance and green infrastructure.",
      };
    });
  }, []);

  // Top 10 prominent high-potential markets for spotlight and charts
  const topProminentMarkets = useMemo(() => {
    return [...countriesData]
      .filter((c) => c.isTopProminent)
      .sort((a, b) => b.potentialScore - a.potentialScore)
      .slice(0, 10);
  }, [countriesData]);

  // States
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<"all" | "top" | "gcc" | "arab" | "africa">("all");
  const [selectedService, setSelectedService] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"score" | "name">("score");
  const [activeCountryModal, setActiveCountryModal] = useState<MarketCountryItem | null>(null);
  const [chartView, setChartView] = useState<"ranking" | "services">("ranking");

  // Distinct services across all countries for filter chip selection
  const serviceCategories = useMemo(() => [
    { id: "all", labelAr: "كافة الخدمات", labelEn: "All Services" },
    { id: "eia", labelAr: "دراسات الأثر البيئي EIA", labelEn: "EIA / Compliance" },
    { id: "waste", labelAr: "المخلفات والاقتصاد الدائري", labelEn: "Waste & Circular" },
    { id: "water", labelAr: "معالجة المياه والصرف", labelEn: "Water Treatment" },
    { id: "energy", labelAr: "الطاقة المتجددة والغاز الحيوي", labelEn: "Renewables & Biogas" },
    { id: "carbon", labelAr: "الكربون والرصد البيئي", labelEn: "Carbon & Monitoring" },
  ], []);

  // Filtered countries
  const filteredCountries = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return countriesData.filter((c) => {
      // Region filter
      if (selectedRegion === "top" && !c.isTopProminent) return false;
      if (selectedRegion === "gcc" && c.region !== "gcc") return false;
      if (selectedRegion === "arab" && c.region !== "arab") return false;
      if (selectedRegion === "africa" && c.region !== "africa") return false;

      // Service filter
      if (selectedService !== "all") {
        const servicesStr = (c.servicesProvidedAr.join(" ") + " " + c.servicesProvidedEn.join(" ")).toLowerCase();
        if (selectedService === "eia" && !servicesStr.includes("eia") && !servicesStr.includes("أثر")) return false;
        if (selectedService === "waste" && !servicesStr.includes("مخلفات") && !servicesStr.includes("waste")) return false;
        if (selectedService === "water" && !servicesStr.includes("مياه") && !servicesStr.includes("water")) return false;
        if (selectedService === "energy" && !servicesStr.includes("طاقة") && !servicesStr.includes("energy") && !servicesStr.includes("غاز")) return false;
        if (selectedService === "carbon" && !servicesStr.includes("كربون") && !servicesStr.includes("carbon") && !servicesStr.includes("رصد")) return false;
      }

      // Search query
      if (q) {
        const hay = [
          c.nameAr,
          c.nameEn,
          c.code,
          c.activityScopeAr,
          c.activityScopeEn,
          c.marketDriverAr,
          c.marketDriverEn,
          ...c.servicesProvidedAr,
          ...c.servicesProvidedEn,
        ]
          .join(" ")
          .toLowerCase();
        if (!hay.includes(q)) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === "name") {
        const na = ar ? a.nameAr : a.nameEn;
        const nb = ar ? b.nameAr : b.nameEn;
        return na.localeCompare(nb);
      }
      return b.potentialScore - a.potentialScore;
    });
  }, [countriesData, selectedRegion, selectedService, searchQuery, sortBy, ar]);

  return (
    <div className="w-full space-y-12">
      {/* 1. Header & Intro */}
      <section className="site-container">
        <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-6 md:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center">
              <SectionBadge title={ar ? "أسواقنا وتواجدنا الإقليمي والدولي" : "Our Regional & Global Markets"} />
              <h1 className="mt-4 font-head text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground">
                {ar ? "خريطة الأسواق والخدمات البيئية والاستشارية" : "Global Environmental Markets & Service Footprint"}
              </h1>
              <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                {ar
                  ? "نطاق جغرافي ممتد يغطي 66 دولة وسوقًا إقليميًا ودوليًا؛ يوضح مجالات النشاطات والاستشارات البيئية المتخصصة ونوعية الخدمات الهندسية والتنفيذية المصممة لكل دولة، مع تسليط الضوء على أبرز الأسواق ذات الفرص البيئية الكبرى."
                  : "An extensive geographic footprint across 66 international markets. Highlighting specialized environmental consulting scopes, tailored engineering services per territory, and the most prominent high-potential green anchor markets."}
              </p>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-10 pt-6 border-t border-border/50 max-w-5xl mx-auto justify-center">
              <div className="rounded-2xl border border-border bg-secondary/30 p-5 sm:p-6 backdrop-blur-md flex flex-col items-center justify-center text-center transition-all hover:border-brand-green/40 hover:bg-secondary/40 shadow-xs">
                <span className="text-[11px] sm:text-xs font-bold text-muted-foreground uppercase tracking-wider block text-center mx-auto">
                  {ar ? "إجمالي الدول والأسواق" : "Total Markets"}
                </span>
                <span className="font-head text-3xl sm:text-4xl font-extrabold text-brand-green mt-2 block text-center mx-auto">
                  66
                </span>
                <p className="text-xs text-muted-foreground mt-1.5 text-center mx-auto leading-relaxed">
                  {ar ? "دول الخليج والعرب وإفريقيا" : "GCC, Arab & Global coverage"}
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-secondary/30 p-5 sm:p-6 backdrop-blur-md flex flex-col items-center justify-center text-center transition-all hover:border-brand-green/40 hover:bg-secondary/40 shadow-xs">
                <span className="text-[11px] sm:text-xs font-bold text-muted-foreground uppercase tracking-wider block text-center mx-auto">
                  {ar ? "أبرز الأسواق ذات الفرص الكبرى" : "Major Anchor Markets"}
                </span>
                <span className="font-head text-3xl sm:text-4xl font-extrabold text-brand-green mt-2 block text-center mx-auto">
                  10
                </span>
                <p className="text-xs text-muted-foreground mt-1.5 text-center mx-auto leading-relaxed">
                  {ar ? "أسواق كبرى بإنفاق ومشاريع ضخمة" : "Mega capex & immediate entry"}
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-secondary/30 p-5 sm:p-6 backdrop-blur-md flex flex-col items-center justify-center text-center transition-all hover:border-brand-green/40 hover:bg-secondary/40 shadow-xs">
                <span className="text-[11px] sm:text-xs font-bold text-muted-foreground uppercase tracking-wider block text-center mx-auto">
                  {ar ? "مجالات الأنشطة والاستشارات" : "Consultancy Disciplines"}
                </span>
                <span className="font-head text-3xl sm:text-4xl font-extrabold text-brand-green mt-2 block text-center mx-auto">
                  19+
                </span>
                <p className="text-xs text-muted-foreground mt-1.5 text-center mx-auto leading-relaxed">
                  {ar ? "تخصصات هندسية واستشارية متكاملة" : "Turnkey engineering solutions"}
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-secondary/30 p-5 sm:p-6 backdrop-blur-md flex flex-col items-center justify-center text-center transition-all hover:border-brand-green/40 hover:bg-secondary/40 shadow-xs">
                <span className="text-[11px] sm:text-xs font-bold text-muted-foreground uppercase tracking-wider block text-center mx-auto">
                  {ar ? "نوعية الخدمات المقدمة" : "Services Spectrum"}
                </span>
                <span className="font-head text-3xl sm:text-4xl font-extrabold text-brand-green mt-2 block text-center mx-auto">
                  100%
                </span>
                <p className="text-xs text-muted-foreground mt-1.5 text-center mx-auto leading-relaxed">
                  {ar ? "EIA، غاز حيوي، مياه، وكربون" : "EIA, Biogas, Water & Carbon"}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. SPOTLIGHT: أبرز الأسواق التي تمثل سوقًا كبيرًا (Prominent High-Potential Markets) */}
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
                    {ar ? "أبرز الأسواق ذات الفرص البيئية الكبرى" : "Prominent High-Potential Environmental Markets"}
                  </h2>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                    {ar
                      ? "الدول الرائدة التي تشهد زخمًا استثماريًا وإنفاقًا حكوميًا وصناعيًا ضخمًا في البنية التحتية الخضراء وحلول الاستدامة:"
                      : "Top economies driving massive green capex, environmental compliance mandates, and sustainable infrastructure investments:"}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setSelectedRegion("top");
                  const el = document.getElementById("country-directory");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 rounded-full bg-brand-green hover:bg-brand-orange text-white px-4 py-1.5 text-xs font-bold shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer self-start sm:self-center shrink-0"
              >
                <span className="size-1.5 rounded-full bg-white animate-pulse" />
                <span>{ar ? "أعلى 10 أسواق استراتيجية" : "Top 10 Strategic Anchors"}</span>
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {topProminentMarkets.map((topCountry, tIdx) => (
                <div
                  key={topCountry.id}
                  onClick={() => setActiveCountryModal(topCountry)}
                  className="group relative cursor-pointer rounded-2xl border border-border/80 bg-background/90 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-brand-green hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <img
                          src={`https://flagcdn.com/w40/${topCountry.code.toLowerCase()}.png`}
                          srcSet={`https://flagcdn.com/w80/${topCountry.code.toLowerCase()}.png 2x`}
                          alt={ar ? topCountry.nameAr : topCountry.nameEn}
                          className="h-4 w-6 rounded object-cover border border-border shadow-2xs"
                          loading="lazy"
                        />
                        <span className="font-head text-sm font-bold text-foreground group-hover:text-brand-orange transition-colors">
                          {ar ? topCountry.nameAr : topCountry.nameEn}
                        </span>
                      </div>
                      <span className="font-mono text-xs font-extrabold rounded-md bg-brand-green/10 text-brand-green group-hover:bg-brand-orange group-hover:text-white px-2 py-0.5 transition-all duration-200">
                        {topCountry.potentialScore}/100
                      </span>
                    </div>

                    <p className="text-[11px] text-muted-foreground line-clamp-2 leading-relaxed mt-2">
                      {ar ? topCountry.marketDriverAr : topCountry.marketDriverEn}
                    </p>

                    {/* Visual indicator bar */}
                    <div className="mt-2.5 w-full bg-secondary/80 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-brand-green transition-all duration-500"
                        style={{ width: `${topCountry.potentialScore}%` }}
                      />
                    </div>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-border/40 flex items-center justify-between text-[10px] font-bold text-brand-green group-hover:text-brand-orange transition-colors">
                    <span>{ar ? topCountry.marketSizeLabelAr : topCountry.marketSizeLabelEn}</span>
                    <span className="text-muted-foreground group-hover:text-brand-orange transition-colors">←</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* 3. VISUAL CHART: رسم بياني تفاعلي للدول ومؤشرات السوق (Visual Analytical Chart) */}
      <section className="site-container">
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/85 p-6 sm:p-10 shadow-lg backdrop-blur-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-brand-green/15 text-brand-green">
                  <BarChart3 className="size-5" />
                </span>
                <div>
                  <h2 className="font-head text-lg sm:text-2xl font-extrabold text-foreground">
                    {ar ? "الرسم البياني التحليلي لجاذبية الأسواق والخدمات" : "Comparative Market Potential & Service Capacity"}
                  </h2>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                    {ar
                      ? "مقارنة بصرية بين الدول وفق مؤشر حجم الفرصة والإنفاق وتنوع الخدمات البيئية المطلوبة:"
                      : "Visual comparison of key markets by potential opportunity score and environmental service complexity:"}
                  </p>
                </div>
              </div>

              {/* Chart View Toggle */}
              <div className="inline-flex rounded-full border border-border bg-secondary/80 p-1 shrink-0 self-start sm:self-center">
                <button
                  onClick={() => setChartView("ranking")}
                  className={cn(
                    "rounded-full px-4 py-1.5 text-xs font-bold transition-all",
                    chartView === "ranking"
                      ? "bg-brand-green text-white shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {ar ? "ترتيب الدول الأكثر جاذبية" : "Top Markets Ranking"}
                </button>
                <button
                  onClick={() => setChartView("services")}
                  className={cn(
                    "rounded-full px-4 py-1.5 text-xs font-bold transition-all",
                    chartView === "services"
                      ? "bg-brand-green text-white shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {ar ? "توزيع مجالات الاستشارات" : "Consultancy Distribution"}
                </button>
              </div>
            </div>

            {/* CHART VIEW 1: Bar Ranking of Top Markets */}
            {chartView === "ranking" && (
              <div className="space-y-3.5">
                {topProminentMarkets.map((item, idx) => {
                  const widthPercent = Math.max(item.potentialScore, 20);

                  return (
                    <div
                      key={item.id}
                      onClick={() => setActiveCountryModal(item)}
                      className="group cursor-pointer rounded-2xl border border-border/50 bg-secondary/20 hover:bg-secondary/40 p-3 transition-all duration-200"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1.5">
                        <div className="flex items-center gap-2.5">
                          <span className="font-mono text-xs font-extrabold text-muted-foreground w-5 text-center">
                            #{idx + 1}
                          </span>
                          <img
                            src={`https://flagcdn.com/w40/${item.code.toLowerCase()}.png`}
                            srcSet={`https://flagcdn.com/w80/${item.code.toLowerCase()}.png 2x`}
                            alt={ar ? item.nameAr : item.nameEn}
                            className="h-4 w-6 rounded object-cover border border-border"
                            loading="lazy"
                          />
                          <span className="font-head text-sm font-bold text-foreground group-hover:text-brand-green transition-colors">
                            {ar ? item.nameAr : item.nameEn}
                          </span>
                          <span className="hidden md:inline text-[11px] text-muted-foreground">
                            • {ar ? item.activityScopeAr.slice(0, 45) + "..." : item.activityScopeEn.slice(0, 45) + "..."}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 self-end sm:self-center">
                          <span className="text-[11px] font-semibold text-brand-green">
                            {ar ? item.marketSizeLabelAr : item.marketSizeLabelEn}
                          </span>
                          <span className="rounded-md bg-brand-green px-2 py-0.5 font-mono text-xs font-extrabold text-white">
                            {item.potentialScore}%
                          </span>
                        </div>
                      </div>

                      {/* Bar indicator */}
                      <div className="w-full bg-secondary/70 h-2.5 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-700 bg-brand-green"
                          style={{ width: `${widthPercent}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* CHART VIEW 2: Service Distribution across Territories */}
            {chartView === "services" && (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    titleAr: "دراسات الأثر البيئي والتوافق (EIA & ESIA)",
                    titleEn: "Environmental Impact Assessment (EIA)",
                    icon: ShieldCheck,
                    share: "95%",
                    descAr: "مطلوبة إلزاميًا في كافة المشروعات الصناعية الكبرى ومشاريع الطاقة في السعودية ومصر والإمارات والمغرب.",
                    descEn: "Mandatory prerequisite across industrial & energy developments in SA, EG, AE, and MA.",
                    badge: "خدمة سيادية إلزامية",
                  },
                  {
                    titleAr: "إدارة المخلفات والاقتصاد الدائري",
                    titleEn: "Waste Management & Circular Economy",
                    icon: Recycle,
                    share: "88%",
                    descAr: "معالجة النفايات الصناعية والصلبة، استرجاع الموارد، وإعادة التدوير في أسواق الخليج والمدن الكبرى.",
                    descEn: "Industrial & solid waste valorization, resource recovery, and recycling across GCC and urban hubs.",
                    badge: "طلب تشغيلي مرتفع",
                  },
                  {
                    titleAr: "محطات تحويل المخلفات لطاقة والغاز الحيوي",
                    titleEn: "Waste-to-Energy (WtE) & Biogas",
                    icon: Zap,
                    share: "82%",
                    descAr: "حلول التخمر اللاهوائي والمخلفات الزراعية والصناعية لإنتاج الغاز والكهرباء بمصر والمغرب والخليج.",
                    descEn: "Dry & wet fermentation biogas plants from agri/industrial wastes producing clean power.",
                    badge: "طاقة متجددة مستدامة",
                  },
                  {
                    titleAr: "معالجة المياه والصرف الصناعي وإعادة التدوير",
                    titleEn: "Water & Wastewater Industrial Treatment",
                    icon: Droplets,
                    share: "90%",
                    descAr: "محطات التناضح العكسي RO والصرف الصناعي ZLD للقطاعات الكيماوية والغذائية والنفطية.",
                    descEn: "Advanced RO desalination and Zero Liquid Discharge (ZLD) for heavy industries.",
                    badge: "أمن مائي حرج",
                  },
                  {
                    titleAr: "خفض البصمة الكربونية وتأهيل الأيزو وCBAM",
                    titleEn: "Decarbonization, CBAM & Carbon Credits",
                    icon: Leaf,
                    share: "78%",
                    descAr: "حساب البصمة الكربونية للمصانع المصدرة إلى أوروبا وفق لوائح CBAM، وإصدار شهادات الكربون المعتمدة.",
                    descEn: "Carbon footprint verification, EU CBAM readiness, and certified carbon credit registry.",
                    badge: "تصدير ومعايير دولية",
                  },
                  {
                    titleAr: "محطات الرصد البيئي الذكي وإنترنت الأشياء (IoT)",
                    titleEn: "Smart IoT Environmental Monitoring",
                    icon: Layers,
                    share: "75%",
                    descAr: "شبكات الاستشعار الذكية لجودة الهواء والانبعاثات والربط المباشر مع الوزارات والهيئات البيئية.",
                    descEn: "Real-time IoT air & emissions telemetry directly integrated with national regulators.",
                    badge: "حلول رقمية ذكية",
                  },
                ].map((srv, sIdx) => {
                  const SrvIcon = srv.icon;
                  return (
                    <div key={sIdx} className="rounded-2xl border border-border bg-secondary/30 p-5 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="flex size-9 items-center justify-center rounded-xl bg-brand-green/15 text-brand-green">
                            <SrvIcon className="size-4.5" />
                          </span>
                          <span className="rounded-md bg-brand-green/10 px-2 py-0.5 text-[10px] font-bold text-brand-green border border-brand-green/20">
                            {srv.badge}
                          </span>
                        </div>
                        <h3 className="font-head text-sm font-bold text-foreground">
                          {ar ? srv.titleAr : srv.titleEn}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                          {ar ? srv.descAr : srv.descEn}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-border/40 space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-muted-foreground">{ar ? "نسبة التغطية الجغرافية:" : "Territory Coverage:"}</span>
                          <span className="font-mono font-bold text-brand-green">{srv.share}</span>
                        </div>
                        {/* Visual indicator bar */}
                        <div className="w-full bg-secondary/80 h-1.5 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full bg-brand-green transition-all duration-700"
                            style={{ width: srv.share }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </Reveal>
      </section>

      {/* 4. COUNTRY DIRECTORY: دليل الدول ومجال النشاطات ونوع الخدمات المقدمة لكل دولة */}
      <section id="country-directory" className="site-container scroll-mt-24">
        <div className="rounded-3xl border border-white/40 bg-background/85 p-6 sm:p-8 shadow-sm backdrop-blur-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-border/50">
            <div>
              <h2 className="font-head text-xl font-extrabold text-foreground">
                {ar ? "دليل الدول ومصفوفة الخدمات والاستشارات" : "Territory Directory & Services Matrix"}
              </h2>
              <p className="text-xs text-muted-foreground mt-0.5">
                {ar
                  ? "استعرض تفاصيل النشاط الاستشاري ونوعية الخدمات البيئية المخصصة لكل دولة من الـ 66 دولة:"
                  : "Explore the consultancy scope and specialized green services tailored for each of the 66 markets:"}
              </p>
            </div>

            {/* Region Filter Chips */}
            <div className="flex flex-wrap items-center gap-1.5">
              <button
                onClick={() => setSelectedRegion("all")}
                className={cn(
                  "rounded-full px-3.5 py-1.5 text-xs font-bold transition-all",
                  selectedRegion === "all"
                    ? "bg-brand-green text-white shadow-sm"
                    : "bg-secondary/60 text-muted-foreground hover:bg-secondary hover:text-foreground"
                )}
              >
                {ar ? "كافة الدول (66)" : "All Countries (66)"}
              </button>

              <button
                onClick={() => setSelectedRegion("top")}
                className={cn(
                  "rounded-full px-3.5 py-1.5 text-xs font-bold transition-all flex items-center gap-1",
                  selectedRegion === "top"
                    ? "bg-brand-orange text-white shadow-sm"
                    : "bg-secondary/60 text-muted-foreground hover:bg-secondary hover:text-foreground"
                )}
              >
                <Flame className="size-3" />
                <span>{ar ? "الأسواق الكبرى فقط" : "Major Markets Only"}</span>
              </button>

              <button
                onClick={() => setSelectedRegion("gcc")}
                className={cn(
                  "rounded-full px-3.5 py-1.5 text-xs font-bold transition-all",
                  selectedRegion === "gcc"
                    ? "bg-brand-green text-white shadow-sm"
                    : "bg-secondary/60 text-muted-foreground hover:bg-secondary hover:text-foreground"
                )}
              >
                {ar ? "دول الخليج (6)" : "GCC (6)"}
              </button>

              <button
                onClick={() => setSelectedRegion("arab")}
                className={cn(
                  "rounded-full px-3.5 py-1.5 text-xs font-bold transition-all",
                  selectedRegion === "arab"
                    ? "bg-brand-green text-white shadow-sm"
                    : "bg-secondary/60 text-muted-foreground hover:bg-secondary hover:text-foreground"
                )}
              >
                {ar ? "الدول العربية (16)" : "Arab Countries (16)"}
              </button>

              <button
                onClick={() => setSelectedRegion("africa")}
                className={cn(
                  "rounded-full px-3.5 py-1.5 text-xs font-bold transition-all",
                  selectedRegion === "africa"
                    ? "bg-brand-green text-white shadow-sm"
                    : "bg-secondary/60 text-muted-foreground hover:bg-secondary hover:text-foreground"
                )}
              >
                {ar ? "الأسواق الإفريقية (44)" : "African Markets (44)"}
              </button>
            </div>
          </div>

          {/* Secondary Filter & Search Bar */}
          <div className="pt-4 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-muted-foreground flex items-center gap-1">
                <Filter className="size-3.5" />
                {ar ? "نوع الخدمة:" : "Service Type:"}
              </span>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="rounded-full border border-border bg-background px-3 py-1.5 text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-brand-green/40"
              >
                {serviceCategories.map((s) => (
                  <option key={s.id} value={s.id}>
                    {ar ? s.labelAr : s.labelEn}
                  </option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="rounded-full border border-border bg-background px-3 py-1.5 text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-brand-green/40"
              >
                <option value="score">{ar ? "ترتيب حسب حجم الفرصة" : "Sort by Potential Score"}</option>
                <option value="name">{ar ? "ترتيب أبجدي حسب الاسم" : "Sort Alphabetically"}</option>
              </select>
            </div>

            {/* Search Box */}
            <div className="relative w-full md:w-72">
              <Search className="absolute start-3 top-1/2 -translate-y-1/2 size-3.5 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={ar ? "ابحث عن دولة، نشاط، أو خدمة..." : "Search country, activity or service..."}
                className="w-full rounded-full border border-border bg-background ps-8 pe-3 py-1.5 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-green/40"
              />
            </div>
          </div>

          {/* Counter / Reset */}
          <div className="pt-3 flex items-center justify-between text-xs text-muted-foreground border-t border-border/40 mt-4">
            <span>
              {ar
                ? `عرض ${filteredCountries.length} دولة وسوق بيئي`
                : `Showing ${filteredCountries.length} countries & environmental markets`}
            </span>
            {(searchQuery || selectedRegion !== "all" || selectedService !== "all") && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedRegion("all");
                  setSelectedService("all");
                }}
                className="text-brand-orange hover:underline flex items-center gap-1 font-semibold"
              >
                <X className="size-3" />
                {ar ? "إعادة ضبط الفلاتر" : "Reset Filters"}
              </button>
            )}
          </div>
        </div>
      </section>

      {/* 5. COUNTRY CARDS: بطاقات الدول بنوع الخدمات ومجال النشاطات */}
      <section className="site-container">
        {filteredCountries.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-border p-12 text-center bg-secondary/20">
            <Globe2 className="size-12 mx-auto text-muted-foreground/60 mb-3" />
            <h3 className="font-head text-lg font-bold text-foreground">
              {ar ? "لم يتم العثور على دول مطابقة" : "No Matching Countries Found"}
            </h3>
            <p className="text-xs text-muted-foreground mt-1 max-w-md mx-auto">
              {ar
                ? "يرجى تغيير كلمات البحث أو إعادة تعيين الفلاتر لاستعراض كافة الأسواق والخدمات."
                : "Please modify your search criteria or reset filters to view all environmental markets."}
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCountries.map((country, idx) => (
              <Reveal key={country.id} delay={Math.min(idx * 0.03, 0.25)}>
                <div className="interactive-card rounded-3xl border border-white/40 bg-background/85 p-6 shadow-sm backdrop-blur-xl hover:border-brand-green/80 hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full group">
                  <div>
                    {/* Header: Flag + Country Name + Score */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <img
                          src={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png`}
                          srcSet={`https://flagcdn.com/w80/${country.code.toLowerCase()}.png 2x`}
                          alt={ar ? country.nameAr : country.nameEn}
                          className="h-5 w-7 rounded object-cover border border-border shadow-2xs shrink-0"
                          loading="lazy"
                        />
                        <div className="min-w-0">
                          <h3 className="font-head text-base sm:text-lg font-bold text-foreground truncate group-hover:text-brand-green transition-colors">
                            {ar ? country.nameAr : country.nameEn}
                          </h3>
                          <span className="text-[10px] text-muted-foreground block">
                            {ar ? country.marketSizeLabelAr : country.marketSizeLabelEn}
                          </span>
                        </div>
                      </div>

                      {/* Potential Score Badge */}
                      <span className="rounded-full px-2.5 py-0.5 font-mono text-xs font-extrabold shadow-2xs shrink-0 bg-brand-green/15 text-brand-green border border-brand-green/30">
                        {country.potentialScore}/100
                      </span>
                    </div>

                    {/* Visual indicator bar */}
                    <div className="w-full bg-secondary/80 h-1.5 rounded-full overflow-hidden mb-3.5">
                      <div
                        className="h-full rounded-full bg-brand-green transition-all duration-500"
                        style={{ width: `${country.potentialScore}%` }}
                      />
                    </div>

                    {/* مجال النشاطات والاستشارات لكل دولة (Scope of Activities & Consultations) */}
                    <div className="rounded-2xl border border-border/60 bg-secondary/30 p-3 mb-3.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-brand-green block mb-1">
                        {ar ? "مجال النشاطات والاستشارات البيئية:" : "Consulting & Activity Scope:"}
                      </span>
                      <p className="text-xs text-foreground/90 font-medium leading-relaxed">
                        {ar ? country.activityScopeAr : country.activityScopeEn}
                      </p>
                    </div>

                    {/* نوع الخدمات المقدمة لكل دولة (Tailored Services Offered) */}
                    <div className="mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block mb-1.5">
                        {ar ? "نوع الخدمات المقدمة للدولة:" : "Services Tailored for Territory:"}
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {(ar ? country.servicesProvidedAr : country.servicesProvidedEn).slice(0, 4).map((srv, sIdx) => (
                          <span
                            key={sIdx}
                            className="rounded-lg border border-border/70 bg-secondary/60 px-2 py-0.5 text-[10px] font-medium text-foreground/80"
                          >
                            {srv}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* محرك السوق والفرصة الكبرى (Growth Driver) */}
                    <div className="mb-4">
                      <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                        {ar ? country.marketDriverAr : country.marketDriverEn}
                      </p>
                    </div>
                  </div>

                  {/* Footer Actions */}
                  <div className="pt-3.5 border-t border-border/50 flex items-center justify-between gap-2">
                    <button
                      onClick={() => setActiveCountryModal(country)}
                      className="text-xs font-bold text-foreground/80 hover:text-brand-orange flex items-center gap-1 transition-colors"
                    >
                      <Info className="size-3.5" />
                      <span>{ar ? "تفاصيل السوق" : "Territory Details"}</span>
                    </button>

                    <Button asChild size="sm" className="rounded-full bg-brand-green text-white hover:bg-brand-orange text-xs font-bold shadow-xs">
                      <Link to="/sectors/$sector" params={{ sector: "environmental" }} search={{ tab: "start-consultation" }}>
                        <span>{ar ? "طلب استشارة لهذا السوق" : "Request Consultation"}</span>
                        <ArrowRight className="size-3 ms-1 rtl:rotate-180" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </section>

      {/* 6. MODAL: بطاقة السوق والدولة التفصيلية (خالية تمامًا من أي ملفات دراسات) */}
      <Dialog open={!!activeCountryModal} onOpenChange={(open) => !open && setActiveCountryModal(null)}>
        <DialogContent className="max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/30 bg-background/95 backdrop-blur-2xl p-6 sm:p-8">
          {activeCountryModal && (
            <>
              <DialogHeader>
                <div className="flex items-center justify-between gap-4 mb-2">
                  <div className="flex items-center gap-3">
                    <img
                      src={`https://flagcdn.com/w40/${activeCountryModal.code.toLowerCase()}.png`}
                      srcSet={`https://flagcdn.com/w80/${activeCountryModal.code.toLowerCase()}.png 2x`}
                      alt={ar ? activeCountryModal.nameAr : activeCountryModal.nameEn}
                      className="h-6 w-9 rounded object-cover border border-border shadow-xs"
                    />
                    <div>
                      <DialogTitle className="font-head text-xl font-bold text-foreground">
                        {ar ? activeCountryModal.nameAr : activeCountryModal.nameEn}
                      </DialogTitle>
                      <DialogDescription className="text-xs text-muted-foreground">
                        {ar ? activeCountryModal.marketSizeLabelAr : activeCountryModal.marketSizeLabelEn}
                      </DialogDescription>
                    </div>
                  </div>

                  <span className="rounded-full bg-brand-green px-3 py-1 font-mono text-xs font-bold text-white shadow-xs">
                    {activeCountryModal.potentialScore}/100
                  </span>
                </div>
              </DialogHeader>

              <div className="space-y-4 py-3 text-sm">
                {/* Market Potential Tier & Indicator */}
                <div className="rounded-2xl border border-brand-green/30 bg-brand-green/10 p-3.5 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="size-4 text-brand-green" />
                      <span className="font-head text-xs font-bold text-brand-green">
                        {ar ? activeCountryModal.potentialTierAr : activeCountryModal.potentialTierEn}
                      </span>
                    </div>
                    {activeCountryModal.isTopProminent && (
                      <span className="rounded-full bg-brand-green px-2.5 py-0.5 text-[10px] font-bold text-white">
                        {ar ? "أبرز سوق استراتيجي" : "Anchor Market"}
                      </span>
                    )}
                  </div>
                  {/* Visual indicator bar */}
                  <div className="w-full bg-brand-green/20 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-brand-green"
                      style={{ width: `${activeCountryModal.potentialScore}%` }}
                    />
                  </div>
                </div>

                {/* Scope of Activities & Consultations */}
                <div>
                  <h4 className="font-head text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                    {ar ? "مجال النشاطات والاستشارات البيئية المعتمدة:" : "Accredited Activities & Consultancy Scope:"}
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold text-foreground leading-relaxed bg-secondary/30 p-3 rounded-2xl border border-border/50">
                    {ar ? activeCountryModal.activityScopeAr : activeCountryModal.activityScopeEn}
                  </p>
                </div>

                {/* Services Provided */}
                <div>
                  <h4 className="font-head text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                    {ar ? "نوع الخدمات البيئية والهندسية المقدمة للدولة:" : "Types of Environmental & Engineering Services Offered:"}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {(ar ? activeCountryModal.servicesProvidedAr : activeCountryModal.servicesProvidedEn).map((srv, sIdx) => (
                      <span
                        key={sIdx}
                        className="rounded-lg border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-foreground flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="size-3 text-brand-green" />
                        <span>{srv}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Market Drivers & Growth Rationale */}
                <div>
                  <h4 className="font-head text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                    {ar ? "محركات السوق وفرص التعاقد المتاحة:" : "Market Drivers & Contracting Opportunities:"}
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {ar ? activeCountryModal.marketDriverAr : activeCountryModal.marketDriverEn}
                  </p>
                </div>

                {/* Modal Actions: Direct Consultation Request (No Studies) */}
                <div className="pt-4 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
                  <Button asChild size="default" className="w-full sm:w-auto rounded-full bg-brand-green text-white hover:bg-brand-orange">
                    <Link to="/sectors/$sector" params={{ sector: "environmental" }} search={{ tab: "start-consultation" }}>
                      <span>{ar ? "طلب استشارة لهذا السوق" : "Request Market Consultation"}</span>
                      <ArrowRight className="size-4 ms-2 rtl:rotate-180" />
                    </Link>
                  </Button>

                  <Button asChild variant="outline" size="default" className="w-full sm:w-auto rounded-full">
                    <Link to="/sectors/$sector" params={{ sector: "environmental" }} search={{ tab: "services" }}>
                      <span>{ar ? "استعراض كافة خدماتنا" : "Explore All Services"}</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
