import React, { useState } from "react";
import { Reveal } from "@/components/home/reveal";
import {
  Building2,
  MapPin,
  ShieldCheck,
  TrendingUp,
  Layers,
  Briefcase,
  CheckCircle2,
  Globe2,
  FileCheck2,
  Award,
  Calendar,
  Users2,
  Landmark,
  Store,
  Factory,
  Hotel,
  ArrowRight,
  Mail,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  REAL_ESTATE_STATS,
  REAL_ESTATE_MARKET_COVERAGE,
  REAL_ESTATE_ASSETS_PORTFOLIO,
  REAL_ESTATE_TRANSACTION_MODELS,
  REAL_ESTATE_ADVISORY_PILLARS,
  PHARMACY_ADVISORY_SECTION,
  REAL_ESTATE_MAJOR_MILESTONES,
  REAL_ESTATE_COMMERCIAL_OPERATIONS,
  REAL_ESTATE_DIPLOMATIC_PARTNERSHIPS,
  REAL_ESTATE_COLLABORATION_FIELDS,
} from "@/lib/real-estate-trade-data";

interface RealEstateTradeViewProps {
  ar?: boolean;
}

export function RealEstateTradeView({ ar = true }: RealEstateTradeViewProps) {
  const [activeAssetTab, setActiveAssetTab] = useState<string>("residential");
  const [activeCoverageRegion, setActiveCoverageRegion] = useState<string>("all");

  const coverageTabs = [
    { id: "all", labelAr: "كافة المناطق", labelEn: "All Regions" },
    { id: "greater-cairo-east", labelAr: "القاهرة الكبرى وشرق القاهرة", labelEn: "Greater Cairo & East" },
    { id: "west-cairo", labelAr: "غرب القاهرة", labelEn: "West Cairo" },
    { id: "coastal-tourism", labelAr: "المدن الساحلية والسياحية", labelEn: "Coastal & Tourism" },
    { id: "international-markets", labelAr: "الأسواق الدولية", labelEn: "International Markets" },
  ];

  const filteredCoverage = REAL_ESTATE_MARKET_COVERAGE.filter(
    (c) => activeCoverageRegion === "all" || c.regionKey === activeCoverageRegion
  );

  return (
    <div className="relative min-h-screen bg-background text-foreground pb-24">
      {/* 1. Hero Section */}
      <section className="relative w-full min-h-[calc(100svh-76px)] overflow-hidden text-white flex flex-col justify-center mb-12">
        <img
          src="/BG/Construction/Construction Home Page.jpg"
          alt={ar ? "الفرص العقارية والاستثمارية الدولية - مجموعة سامي بن عياد" : "Global Real Estate & Investment Opportunities - Sami Bin Ayyad Group"}
          className="absolute inset-0 size-full object-cover object-center pointer-events-none select-none"
          fetchPriority="high"
        />
        <div className="group-hero-overlay absolute inset-0 bg-black/75 backdrop-blur-[1px] pointer-events-none" />

        <div className="site-container relative z-10 flex min-h-[inherit] flex-col justify-between pt-16 sm:pt-24 pb-8 sm:pb-12">
          <div className="my-auto">
            <Reveal>
              <div className="flex items-center justify-start mb-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/50 px-4 py-1.5 text-xs font-bold tracking-wide text-white/95 backdrop-blur-md shadow-md">
                  <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
                  <span>
                    {ar
                      ? "مجموعة سامي بن عياد · الفرص العقارية والاستثمارية الدولية"
                      : "SAMI BIN AYYAD GROUP · Global Real Estate & Investment Opportunities"}
                  </span>
                </div>
              </div>

              <h1 className="font-head text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-snug tracking-tight text-start drop-shadow-md max-w-4xl">
                {ar
                  ? "خبرات مهنية واستثمارية موثوقة في صناعة العقار وإدارة الأصول"
                  : "Trusted Real Estate Advisory, Asset Management & Institutional Alliances"}
              </h1>

              <p className="mt-3.5 max-w-4xl text-sm sm:text-base leading-relaxed text-white/90 text-start drop-shadow-sm">
                {ar
                  ? "مسيرة مهنية متواصلة منذ عام 2018 في السوق المصري والأسواق الإقليمية، تغطي أكثر من 400 مشروع عقاري، وشبكة علاقات مع 200 مطور، وإدارة محافظ بقيمة 5 مليارات جنيه."
                  : "A distinguished track record since 2018 across Egypt and international markets, spanning 400+ projects, 200+ developer partnerships, and 5 Billion EGP in asset portfolios."}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="site-container space-y-20 mt-8 sm:mt-12">
        {/* Core Statistics Cards */}
        <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-4 w-full">
          <div className="interactive-card glass-box-interactive group rounded-3xl p-5 sm:p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-center flex flex-col items-center justify-center">
            <span className="font-head text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-500 drop-shadow-sm">
              +{REAL_ESTATE_STATS.projectsHandled}
            </span>
            <p className="text-xs sm:text-sm font-bold text-foreground mt-1.5 text-center">
              {ar ? "مشروع عقاري تم التعامل معه" : "Real Estate Projects Handled"}
            </p>
            <span className="text-[11px] text-muted-foreground block mt-0.5 text-center">
              {ar ? "سكني، تجاري، سياحي، صناعي" : "Residential, Commercial & Mixed-Use"}
            </span>
          </div>

          <div className="interactive-card glass-box-interactive group rounded-3xl p-5 sm:p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-center flex flex-col items-center justify-center">
            <span className="font-head text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-500 drop-shadow-sm">
              +{REAL_ESTATE_STATS.developersNetwork}
            </span>
            <p className="text-xs sm:text-sm font-bold text-foreground mt-1.5 text-center">
              {ar ? "شركة ومطور عقاري شريك" : "Partner Developers Network"}
            </p>
            <span className="text-[11px] text-muted-foreground block mt-0.5 text-center">
              {ar ? "في مصر والمنطقة الإقليمية" : "In Egypt & Regional Markets"}
            </span>
          </div>

          <div className="interactive-card glass-box-interactive group rounded-3xl p-5 sm:p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-center flex flex-col items-center justify-center">
            <span className="font-head text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-500 drop-shadow-sm">
              5 {ar ? "مليارات" : "Billion"}
            </span>
            <p className="text-xs sm:text-sm font-bold text-foreground mt-1.5 text-center">
              {ar ? "جنيه إجمالي محافظ مسوقة ومقيمة" : "EGP Total Marketed & Valued"}
            </p>
            <span className="text-[11px] text-muted-foreground block mt-0.5 text-center">
              {ar ? "7 مولات وفندق ومجمعات استثمارية" : "7 Malls, Hotel & Mega Complexes"}
            </span>
          </div>

          <div className="interactive-card glass-box-interactive group rounded-3xl p-5 sm:p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-center flex flex-col items-center justify-center">
            <span className="font-head text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-500 drop-shadow-sm">
              +{REAL_ESTATE_STATS.pharmacistsAdvised}
            </span>
            <p className="text-xs sm:text-sm font-bold text-foreground mt-1.5 text-center">
              {ar ? "صيدلي ومستثمر طبي تمت خدمتهم" : "Pharmacists & Healthcare Clients"}
            </p>
            <span className="text-[11px] text-muted-foreground block mt-0.5 text-center">
              {ar ? "في انتقاء المواقع وترخيص الفروع" : "Prime Pharmacy Locations & Licensing"}
            </span>
          </div>
        </div>

        {/* Section 1: Real Estate Market Coverage */}
        <section id="re-coverage" className="scroll-mt-32 space-y-6">
          <div className="interactive-card glass-box-interactive w-full rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl backdrop-blur-2xl">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md shadow-xs">
                <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
                <span>{ar ? "القسم الأول: خريطة الانتشار العقاري" : "Section 1: Market Coverage"}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-foreground mt-0.5 leading-snug">
                {ar ? "خريطة الانتشار الجغرافي والمدن المشمولة" : "Geographical Footprint & Urban Markets"}
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed max-w-4xl">
                {ar
                  ? "تغطية ميدانية وتحليلية واسعة تشمل أهم محاور التنمية العمرانية في القاهرة الكبرى والمدن الجديدة والمناطق الساحلية والأسواق الدولية."
                  : "Extensive market coverage across high-growth urban growth corridors, new master developments, coastal hubs, and regional capitals."}
              </p>
            </div>

            {/* Region Filter */}
            <div className="flex flex-wrap gap-2 border-b border-border/50 pb-3">
              {coverageTabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveCoverageRegion(tab.id)}
                  className={cn(
                    "rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 cursor-pointer border",
                    activeCoverageRegion === tab.id
                      ? "bg-foreground text-background border-foreground shadow-sm"
                      : "bg-background/70 text-muted-foreground border-border hover:border-foreground/30 hover:text-foreground"
                  )}
                >
                  {ar ? tab.labelAr : tab.labelEn}
                </button>
              ))}
            </div>

            {/* Coverage Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {filteredCoverage.map((cov) => (
                <div
                  key={cov.regionKey}
                  className="rounded-2xl border border-border/80 bg-background/70 p-5 backdrop-blur-xl shadow-xs transition-all duration-300 hover:border-brand-orange/50 hover:shadow-md"
                >
                  <div className="flex items-center gap-2 mb-3 border-b border-border/50 pb-2.5">
                    <MapPin className="size-4 text-brand-orange shrink-0" />
                    <h3 className="font-bold text-sm text-foreground">
                      {ar ? cov.regionNameAr : cov.regionNameEn}
                    </h3>
                  </div>

                  <ul className="space-y-1.5">
                    {(ar ? cov.citiesAr : cov.citiesEn).map((city, idx) => (
                      <li key={idx} className="flex items-center gap-1.5 text-xs text-foreground/90 font-medium">
                        <span className="size-1 rounded-full bg-brand-green" />
                        <span>{city}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: Directory of Real Estate Opportunities */}
        <section id="re-portfolio" className="scroll-mt-32 space-y-6">
          <div className="interactive-card glass-box-interactive w-full rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl backdrop-blur-2xl">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md shadow-xs">
                <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
                <span>{ar ? "القسم الثاني: دليل الفرص والأصول العقارية" : "Section 2: Asset Classes Directory"}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-foreground mt-0.5 leading-snug">
                {ar ? "دليل الأصول والمنتجات العقارية والاستثمارية" : "Asset Classes & Real Estate Products Portfolio"}
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed max-w-4xl">
                {ar
                  ? "تغطية متكاملة لـ 5 فئات رئيسية من الأصول العقارية تلبي احتياجات الأفراد والمؤسسات وصناديق الاستثمار."
                  : "Comprehensive execution across 5 core real estate asset classes catering to individuals, corporations, and institutional investors."}
              </p>
            </div>

            {/* Asset Tabs */}
            <div className="flex flex-wrap gap-2 border-b border-border/50 pb-3">
              {REAL_ESTATE_ASSETS_PORTFOLIO.map((cat) => (
                <button
                  key={cat.categoryKey}
                  type="button"
                  onClick={() => setActiveAssetTab(cat.categoryKey)}
                  className={cn(
                    "rounded-xl px-4 py-2 text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer border",
                    activeAssetTab === cat.categoryKey
                      ? "bg-foreground text-background border-foreground shadow-sm"
                      : "bg-background/70 text-muted-foreground border-border hover:border-foreground/30 hover:text-foreground"
                  )}
                >
                  {ar ? cat.titleAr : cat.titleEn}
                </button>
              ))}
            </div>

            {/* Active Asset Class View */}
            {REAL_ESTATE_ASSETS_PORTFOLIO.filter((c) => c.categoryKey === activeAssetTab).map((cat) => (
              <div key={cat.categoryKey} className="space-y-6 animate-in fade-in duration-300">
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {ar ? cat.descriptionAr : cat.descriptionEn}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4.5">
                  {(ar ? cat.itemsAr : cat.itemsEn).map((itemName, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl border border-border/80 bg-background/60 p-5 backdrop-blur-md shadow-xs transition-all duration-300 hover:border-brand-green/60 hover:shadow-md"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="size-4 shrink-0 text-brand-green" />
                        <h4 className="font-bold text-sm text-foreground">
                          {itemName}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Transaction & Collaboration Models */}
        <section id="re-models" className="scroll-mt-32 space-y-6">
          <div className="interactive-card glass-box-interactive w-full rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl backdrop-blur-2xl">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md shadow-xs">
                <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
                <span>{ar ? "القسم الثالث: نماذج وآليات التعامل" : "Section 3: Transaction & Deal Models"}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-foreground mt-0.5 leading-snug">
                {ar ? "10 نماذج تعاقدية واستثمارية مرنة" : "10 Agile Transaction & Investment Frameworks"}
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed max-w-4xl">
                {ar
                  ? "مرونة كاملة في هياكل الصفقات بدءًا من الشراء المباشر والريسييل، وحتى الاستحواذ المؤسسي، وإدارة الأصول بنظام المشاركة بالدخل والفرانشايز."
                  : "Full structural deal flexibility ranging from primary acquisition and secondary resale to institutional takeovers, franchise structuring, and revenue-sharing management."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {REAL_ESTATE_TRANSACTION_MODELS.map((model, idx) => (
                <div
                  key={idx}
                  className="flex flex-col justify-between rounded-2xl border border-border/80 bg-background/70 p-4.5 backdrop-blur-md shadow-xs transition-all duration-300 hover:border-brand-orange/50 hover:shadow-md"
                >
                  <div>
                    <span className="rounded-lg border border-border bg-secondary/80 px-2 py-0.5 text-[10px] font-mono font-bold text-foreground">
                      {`0${idx + 1}`}
                    </span>
                    <h3 className="font-bold text-sm text-foreground mt-2.5">
                      {ar ? model.titleAr : model.titleEn}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                      {ar ? model.descAr : model.descEn}
                    </p>
                  </div>
                  {model.tagEn && (
                    <div className="pt-2 border-t border-border/40 mt-3">
                      <span className="text-[10px] font-semibold text-brand-green block">
                        {model.tagEn}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Real Estate Advisory Services */}
        <section id="re-advisory" className="scroll-mt-32 space-y-6">
          <div className="interactive-card glass-box-interactive w-full rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl backdrop-blur-2xl">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md shadow-xs">
                <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
                <span>{ar ? "القسم الرابع: الاستشارات العقارية" : "Section 4: Strategic Advisory Pillars"}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-foreground mt-0.5 leading-snug">
                {ar ? "خدمات الاستشارات العقارية ودراسات الجدوى" : "Strategic Real Estate Advisory & Feasibility Pillars"}
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed max-w-4xl">
                {ar
                  ? "مساعدة المستثمرين والشركات في دراسة الفرص، واختيار الأصول المناسبة، والتحقق القانوني والتعاقدي لتحقيق أعلى عائد استثماري بأقل مخاطر."
                  : "Guiding institutional investors and private clients through rigorous market intelligence, developer vetting, legal contract audits, and yield optimization."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {REAL_ESTATE_ADVISORY_PILLARS.map((pillar, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-border/80 bg-background/70 p-5 backdrop-blur-md shadow-sm space-y-3 transition-all duration-300 hover:border-brand-green/60 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between border-b border-border/50 pb-2.5">
                    <span className="rounded-lg border border-brand-green/30 bg-brand-green/10 px-2.5 py-0.5 text-[10px] font-bold text-brand-green">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-bold text-base text-foreground">
                    {ar ? pillar.titleAr : pillar.titleEn}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {ar ? pillar.descAr : pillar.descEn}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Specialized Pharmacy Real Estate Advisory */}
        <section id="re-pharmacy" className="scroll-mt-32 space-y-6">
          <div className="interactive-card glass-box-interactive w-full rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl backdrop-blur-2xl border-brand-green/30">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-brand-green/40 bg-brand-green/10 px-3.5 py-1 text-xs font-bold tracking-wide text-brand-green backdrop-blur-md shadow-xs">
                <Sparkles className="size-3.5 text-brand-orange animate-pulse" />
                <span>{ar ? "القسم الخامس: استشارات متخصصة" : "Section 5: Healthcare Real Estate Advisory"}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-foreground mt-0.5 leading-snug">
                {ar ? PHARMACY_ADVISORY_SECTION.headlineAr : PHARMACY_ADVISORY_SECTION.headlineEn}
              </h2>
              <p className="text-xs sm:text-sm text-foreground/90 mt-2 leading-relaxed max-w-4xl font-medium">
                {ar ? PHARMACY_ADVISORY_SECTION.introAr : PHARMACY_ADVISORY_SECTION.introEn}
              </p>
            </div>

            <div className="rounded-2xl border border-border/80 bg-background/80 p-5 shadow-xs">
              <div className="flex items-center gap-2">
                <span className="flex size-7 items-center justify-center rounded-lg bg-brand-green/20 text-brand-green">
                  <Sparkles className="size-4" />
                </span>
                <span className="font-bold text-sm text-foreground">
                  {ar ? PHARMACY_ADVISORY_SECTION.metricBadgeAr : PHARMACY_ADVISORY_SECTION.metricBadgeEn}
                </span>
              </div>
            </div>

            <div className="rounded-2xl border border-border/80 bg-background/60 p-5 space-y-3">
              <h3 className="font-bold text-sm text-foreground uppercase tracking-wider">
                {ar ? "نطاق خدمات استشارات الصيدليات:" : "Scope of Pharmacy Real Estate Services:"}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                {(ar ? PHARMACY_ADVISORY_SECTION.servicesAr || [] : PHARMACY_ADVISORY_SECTION.servicesEn || []).map((srv, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-foreground font-medium">
                    <CheckCircle2 className="size-4 text-brand-green shrink-0" />
                    <span>{srv}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Major Assets & Valuations */}
        <section id="re-milestones" className="scroll-mt-32 space-y-6">
          <div className="interactive-card glass-box-interactive w-full rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl backdrop-blur-2xl">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md shadow-xs">
                <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
                <span>{ar ? "القسم السادس: المشروعات الكبرى والمحافظ المدارة" : "Section 6: Major Assets & Valuations"}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-foreground mt-0.5 leading-snug">
                {ar ? "سجل المشروعات الاستثمارية الكبرى والتقييمات" : "Major Institutional Asset Portfolios & Valuations"}
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed max-w-4xl">
                {ar
                  ? "أمثلة واقعية على المحافظ الاستثمارية الكبرى، والمشروعات التجارية متعددة الاستخدامات، ودراسات التقييم للأصول الصناعية."
                  : "Verified corporate track record encompassing commercial portfolios, multi-use mega complexes, and strategic industrial valuations."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {REAL_ESTATE_MAJOR_MILESTONES.map((mile, idx) => (
                <div
                  key={idx}
                  className="flex flex-col justify-between rounded-2xl border border-border/80 bg-background/70 p-6 backdrop-blur-md shadow-md transition-all duration-300 hover:border-brand-orange/60 hover:shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-border/50 pb-3">
                      <span className="rounded-lg border border-brand-orange/30 bg-brand-orange/10 px-2.5 py-1 text-xs font-bold text-brand-orange">
                        {ar ? mile.valuationAr : mile.valuationEn}
                      </span>
                    </div>

                    <h3 className="font-bold text-base text-foreground mt-4">
                      {ar ? mile.titleAr : mile.titleEn}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                      {ar ? mile.descAr : mile.descEn}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7 & 8: Commercial Property Operations & Strategic Alliances */}
        <section id="re-operations-alliances" className="scroll-mt-32 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Section 7: Commercial Operations */}
            <div className="interactive-card glass-box-interactive rounded-3xl p-6 sm:p-8 space-y-5 shadow-xl backdrop-blur-2xl">
              <div>
                <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3 py-1 text-xs font-bold text-foreground">
                  <span>{ar ? "القسم السابع: التشغيل التجاري" : "Section 7: Operations Ecosystem"}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-foreground">
                  {ar ? REAL_ESTATE_COMMERCIAL_OPERATIONS.headlineAr : REAL_ESTATE_COMMERCIAL_OPERATIONS.headlineEn}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
                  {ar ? REAL_ESTATE_COMMERCIAL_OPERATIONS.descAr : REAL_ESTATE_COMMERCIAL_OPERATIONS.descEn}
                </p>
              </div>

              <div className="space-y-2.5 pt-2">
                <span className="text-xs font-bold text-foreground uppercase tracking-wider block">
                  {ar ? "أبرز شركات الإدارة والتشغيل المعتمدة:" : "Approved Commercial Operators:"}
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {REAL_ESTATE_COMMERCIAL_OPERATIONS.reputablePartners?.map((partnerName, idx) => (
                    <div key={idx} className="rounded-xl border border-border/70 bg-background/70 p-3 text-xs flex items-center justify-center text-center">
                      <span className="font-bold text-foreground">{partnerName}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Section 8: Strategic Alliances */}
            <div className="interactive-card glass-box-interactive rounded-3xl p-6 sm:p-8 space-y-5 shadow-xl backdrop-blur-2xl">
              <div>
                <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3 py-1 text-xs font-bold text-foreground">
                  <span>{ar ? "القسم الثامن: كبار المطورين" : "Section 8: Strategic Alliances"}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-foreground">
                  {ar ? "التحالفات مع كبرى شركات التطوير العالمية" : "Strategic Alliances with Global Developers"}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
                  {ar
                    ? "علاقات عمل وثيقة وشراكات تسويق وتوجيه استثماري مع كبرى المجموعات العقارية الرائدة إقليميًا وعالميًا."
                    : "Strategic collaborative advisory, marketing alliances, and investor placement with premier master developers."}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="rounded-2xl border border-border/70 bg-background/70 p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-sm text-foreground">Emaar Properties (إعمار العقارية)</h4>
                    <span className="text-xs font-semibold text-brand-green">Global Flagship</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {ar
                      ? "تسويق استثماري وتوجيه المشترين الدوليين للمشروعات الفاخرة والمجتمعات المتكاملة في مصر ودبي."
                      : "Investor positioning across luxury integrated master communities in Egypt and the UAE."}
                  </p>
                </div>

                <div className="rounded-2xl border border-border/70 bg-background/70 p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-sm text-foreground">Azizi Developments (عزيزي للتطوير)</h4>
                    <span className="text-xs font-semibold text-brand-orange">Regional Leader</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {ar
                      ? "شراكة تسويقية للمشروعات السكنية والاستثمارية عالية العائد للمستثمرين الباحثين عن دخل دولي منتظم."
                      : "High-yield residential and commercial investment opportunities for overseas income portfolios."}
                  </p>
                </div>

                <div className="rounded-2xl border border-border/70 bg-background/70 p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-sm text-foreground">Binghatti Developers (بن غاطي)</h4>
                    <span className="text-xs font-semibold text-blue-500">Architectural Icons</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {ar
                      ? "عرض الأبراج الأيقونية والشراكات الفاخرة في دبي للمستثمرين الاستراتيجيين وكبار العملاء."
                      : "Architectural branded residences and luxury skyscrapers in Dubai for strategic high-net-worth investors."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 9: International Real Estate Expansion */}
        <section id="re-international" className="scroll-mt-32 space-y-6">
          <div className="interactive-card glass-box-interactive w-full rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl backdrop-blur-2xl">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md shadow-xs">
                <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
                <span>{ar ? "القسم التاسع: التوسع الدولي" : "Section 9: International Expansion"}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-foreground mt-0.5 leading-snug">
                {ar ? "الاستثمار العقاري الدولي والفرص العابرة للحدود" : "Cross-Border Real Estate & International Investments"}
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed max-w-4xl">
                {ar
                  ? "امتداد الخبرات والتعاملات الاستثمارية إلى أسواق المملكة العربية السعودية، والإمارات العربية المتحدة، وسلطنة عُمان، وتركيا."
                  : "Active commercial intelligence, investor networks, and cross-border placement across Saudi Arabia, UAE, Oman, and Turkey."}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="rounded-2xl border border-border/80 bg-background/70 p-5 space-y-2">
                <div className="text-2xl">🇸🇦</div>
                <h4 className="font-bold text-sm text-foreground">{ar ? "المملكة العربية السعودية" : "Saudi Arabia"}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {ar
                    ? "الرياض وجدة والمنطقة الشرقية، مشاريع التطوير الكبرى ورؤية 2030 وفرص التحالفات المؤسسية."
                    : "Riyadh, Jeddah & Eastern Province mega development initiatives aligned with Vision 2030."}
                </p>
              </div>

              <div className="rounded-2xl border border-border/80 bg-background/70 p-5 space-y-2">
                <div className="text-2xl">🇦🇪</div>
                <h4 className="font-bold text-sm text-foreground">{ar ? "الإمارات العربية المتحدة" : "United Arab Emirates"}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {ar
                    ? "دبي وأبوظبي، الأصول الفاخرة والعائد الاستثماري بالعملات الأجنبية والإقامة الذهبية."
                    : "Dubai and Abu Dhabi prime assets, foreign currency yields, and Golden Visa investment placement."}
                </p>
              </div>

              <div className="rounded-2xl border border-border/80 bg-background/70 p-5 space-y-2">
                <div className="text-2xl">🇴🇲</div>
                <h4 className="font-bold text-sm text-foreground">{ar ? "سلطنة عُمان" : "Sultanate of Oman"}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {ar
                    ? "مسقط والمجمعات السياحية المتكاملة، بيئة استثمارية مستقرة وفرص التطوير المشترك."
                    : "Muscat integrated tourism complexes, stable business environment, and co-development opportunities."}
                </p>
              </div>

              <div className="rounded-2xl border border-border/80 bg-background/70 p-5 space-y-2">
                <div className="text-2xl">🇹🇷</div>
                <h4 className="font-bold text-sm text-foreground">{ar ? "تركيا" : "Turkey"}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {ar
                    ? "إسطنبول والمدن الساحلية، الأصول السكنية والتجارية وفرص الاستثمار للمقيمين والدوليين."
                    : "Istanbul and coastal cities residential and commercial assets with international investor pathways."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 10: Diplomatic & High-Level Partnerships */}
        <section id="re-diplomatic" className="scroll-mt-32 space-y-6">
          <div className="interactive-card glass-box-interactive w-full rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl backdrop-blur-2xl">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md shadow-xs">
                <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
                <span>{ar ? "القسم العاشر: شراكات دبلوماسية ووفود رسمية" : "Section 10: Diplomatic Partnerships"}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-foreground mt-0.5 leading-snug">
                {ar ? "شراكات دبلوماسية ومباحثات استثمارية رفيعة المستوى" : "Diplomatic Delegations & Strategic Alliances"}
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed max-w-4xl">
                {ar
                  ? "توثيق لمحطات ومباحثات رسمية جمعت قيادة المجموعة بسفراء ودبلوماسيين ومجموعات استثمارية دولية."
                  : "Documented high-level engagements connecting Group leadership with ambassadors, diplomatic corps, and international sovereign investors."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {REAL_ESTATE_DIPLOMATIC_PARTNERSHIPS.map((dip, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-border/80 bg-background/70 p-6 backdrop-blur-md shadow-md space-y-3"
                >
                  <div className="flex items-center justify-between border-b border-border/50 pb-2.5">
                    <span className="text-xs font-bold text-brand-orange">
                      {ar ? `المحطة الدبلوماسية 0${idx + 1}` : `Diplomatic Milestone 0${idx + 1}`}
                    </span>
                  </div>
                  <h3 className="font-bold text-base text-foreground">
                    {ar ? dip.titleAr : dip.titleEn}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {ar ? dip.descAr : dip.descEn}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 11: Exhibitions & Industry Events */}
        <section id="re-events" className="scroll-mt-32 space-y-6">
          <div className="interactive-card glass-box-interactive w-full rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl backdrop-blur-2xl">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md shadow-xs">
                <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
                <span>{ar ? "القسم الحادي عشر: المعارض والمؤتمرات" : "Section 11: Industry Events & Exhibitions"}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-foreground mt-0.5 leading-snug">
                {ar ? "المشاركة في كبرى المحافل والمعارض العقارية الدولية" : "International Real Estate Exhibitions & Summits"}
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed max-w-4xl">
                {ar
                  ? "حضور وتواجد نشط في أهم المعارض والمؤتمرات العقارية بمصر والمنطقة لمتابعة أحدث توجهات السوق والتحالفات."
                  : "Active participation in leading real estate expos and investment summits across the MENA region."}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="rounded-2xl border border-border/80 bg-background/70 p-5 text-center">
                <span className="font-bold text-base text-foreground block">Cityscape Egypt</span>
                <span className="text-xs text-brand-orange font-semibold block mt-1">{ar ? "سيتي سكيب مصر" : "Annual Flagship"}</span>
                <span className="text-[11px] text-muted-foreground block mt-0.5">{ar ? "القاهرة" : "Cairo"}</span>
              </div>
              <div className="rounded-2xl border border-border/80 bg-background/70 p-5 text-center">
                <span className="font-bold text-base text-foreground block">The Real Gate</span>
                <span className="text-xs text-brand-green font-semibold block mt-1">{ar ? "ذا ريل جيت" : "Investment Expo"}</span>
                <span className="text-[11px] text-muted-foreground block mt-0.5">{ar ? "مصر" : "Egypt"}</span>
              </div>
              <div className="rounded-2xl border border-border/80 bg-background/70 p-5 text-center">
                <span className="font-bold text-base text-foreground block">IPS Dubai</span>
                <span className="text-xs text-blue-500 font-semibold block mt-1">{ar ? "معرض العقارات الدولي" : "International Property"}</span>
                <span className="text-[11px] text-muted-foreground block mt-0.5">{ar ? "دبي" : "Dubai, UAE"}</span>
              </div>
              <div className="rounded-2xl border border-border/80 bg-background/70 p-5 text-center">
                <span className="font-bold text-base text-foreground block">Cityscape Global</span>
                <span className="text-xs text-amber-500 font-semibold block mt-1">{ar ? "سيتي سكيب العالمي" : "Global Summit"}</span>
                <span className="text-[11px] text-muted-foreground block mt-0.5">{ar ? "الرياض" : "Riyadh, KSA"}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 12: Call to Collaborate & Direct Contact */}
        <section id="re-contact" className="scroll-mt-32 space-y-6">
          <div className="rounded-3xl border border-border/80 bg-background/80 p-6 sm:p-10 backdrop-blur-2xl shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-3.5 py-1 text-xs font-bold text-brand-orange">
                  <span>{ar ? "دعوة للتعاون والشراكة" : "Invitation to Collaborate"}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-foreground leading-snug">
                  {ar ? "بناء التحالفات وتطوير الفرص العقارية والاستثمارية" : "Structuring Strategic Real Estate Alliances & Investments"}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {ar
                    ? "نرحب بالتواصل والتعاون مع المستثمرين والمطورين العقاريين، والصناديق الاستثمارية، وأصحاب المشروعات التجارية والسياحية لدراسة الفرص، وبناء التحالفات، وتطوير الأصول ذات القيمة المضافة."
                    : "We welcome dialogue and strategic partnerships with institutional investors, property developers, and corporate asset holders to evaluate high-yield opportunities and co-develop transformative projects."}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {REAL_ESTATE_COLLABORATION_FIELDS.map((field, idx) => (
                    <span
                      key={idx}
                      className="rounded-lg border border-border/80 bg-secondary/80 px-3 py-1 text-xs font-semibold text-foreground"
                    >
                      {ar ? field.labelAr : field.labelEn}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct Official Contact Box */}
              <div className="lg:col-span-5 rounded-2xl border border-border bg-card/90 p-6 shadow-md space-y-4">
                <span className="text-xs font-bold text-foreground uppercase tracking-wider block border-b border-border/60 pb-2">
                  {ar ? "قنوات الاتصال المباشرة لقطاع العقار والاستثمار:" : "Direct Real Estate Advisory Channels:"}
                </span>

                <a
                  href="mailto:info@sami-trade.com"
                  className="flex items-center gap-3 p-3 rounded-xl border border-border/70 bg-background/80 hover:border-brand-orange hover:bg-background transition-all group"
                >
                  <div className="flex size-10 items-center justify-center rounded-lg bg-brand-orange/15 text-brand-orange">
                    <Mail className="size-5" />
                  </div>
                  <div className="text-start">
                    <span className="text-[11px] text-muted-foreground block">{ar ? "البريد المعتمد للاستشارات العقارية" : "Real Estate Advisory Email"}</span>
                    <span className="text-xs sm:text-sm font-bold text-foreground font-mono group-hover:text-brand-orange">
                      info@sami-trade.com
                    </span>
                  </div>
                </a>

                <a
                  href="https://wa.me/201222238072"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl border border-brand-green/30 bg-brand-green/10 hover:border-brand-green hover:bg-brand-green/20 transition-all group"
                >
                  <div className="flex size-10 items-center justify-center rounded-lg bg-brand-green text-white">
                    <MessageSquare className="size-5" />
                  </div>
                  <div className="text-start">
                    <span className="text-[11px] text-brand-green block font-bold">{ar ? "واتساب المباشر للفرص العقارية" : "Direct WhatsApp Hotline"}</span>
                    <span dir="ltr" className="text-xs sm:text-sm font-bold text-foreground font-mono group-hover:text-brand-green">
                      +20 122 223 8072
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

