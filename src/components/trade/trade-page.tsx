import React, { useState } from "react";
import { AlertCircle } from "lucide-react";
import { TradeWorldMap } from "./trade-world-map";
import { MarketDirectory } from "./market-directory";
import { GlobalProductDemand } from "./global-product-demand";
import { TradeIntelligenceDashboard } from "./trade-intelligence-dashboard";
import { BusinessNetworkSection } from "./business-network-section";
import { TradeOpportunitiesSection } from "./trade-opportunities-section";
import { TradeReportsDownloads } from "./trade-reports-downloads";
import { TRADE_STATS, COUNTRY_PROFILES, CountryTradeProfile } from "@/lib/trade-data";

interface TradePageProps {
  ar?: boolean;
}

export function TradePage({ ar = true }: TradePageProps) {
  const [selectedCountryCode, setSelectedCountryCode] = useState<string | undefined>(undefined);

  const handleCountrySelect = (country: CountryTradeProfile) => {
    setSelectedCountryCode(country.code);
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground pb-24">
      {/* 1. Hero Section (Full-width and Full-height Background like Home & News) */}
      <section className="relative w-full min-h-[calc(100svh-76px)] overflow-hidden text-white flex flex-col justify-center">
        {/* Full-width & Full-height background image & overlay */}
        <img
          src="/BG/Main Home Page.jpg"
          alt={ar ? "التجارة والفرص الدولية - مجموعة سامي بن عياد" : "Global Trade & Opportunities - Sami Bin Ayyad Group"}
          className="absolute inset-0 size-full object-cover object-center pointer-events-none select-none"
          fetchPriority="high"
        />
        <div className="group-hero-overlay absolute inset-0 bg-black/65 backdrop-blur-[1px] pointer-events-none" />

        <div className="relative z-10 w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="space-y-6 text-start max-w-4xl">
            {/* Top Pill - at the start of the line matching homepage style */}
            <div className="flex justify-start">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/50 px-4 py-1.5 text-xs font-bold tracking-wide text-white/95 backdrop-blur-md shadow-md">
                <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
                <span>{ar ? "مجموعة سامي بن عياد · انتشارنا التجاري العالمي" : "SAMI BIN AYYAD GROUP · Global Trade Footprint"}</span>
              </div>
            </div>

            {/* Main Headings */}
            <div className="space-y-3">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight drop-shadow-md">
                {ar ? "نربط الأسواق العالمية، ونصنع الفرص التجارية الموثوقة" : "Connecting Global Markets, Delivering Real Trade Opportunities"}
              </h1>

              <p className="max-w-4xl text-sm sm:text-base text-white/90 leading-relaxed drop-shadow-sm">
                {ar
                  ? "استعراض مهني موثق لشبكة الطلبات التجارية الدولية لعام 2025، وقاعدة متطلبات المشترين للتمور والسلع الزراعية والمحاصيل الاستراتيجية عبر 47 دولة حول العالم."
                  : "A documented corporate showcase of our 2025 international commercial inquiry network, covering product demand for dates, agricultural commodities, and export crops across 47 countries."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 space-y-20 mt-8 sm:mt-12">
        {/* Key Trade Statistics & Documentary Compliance (Positioned Below Hero Background) */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-4 w-full">
            <div className="interactive-card glass-box-interactive group rounded-3xl p-5 sm:p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer">
              <span className="font-head text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-500 drop-shadow-sm">47</span>
              <p className="text-xs sm:text-sm font-bold text-foreground mt-1.5">
                {ar ? "دولة مسجلة في الطلبات" : "Documented Destination Markets"}
              </p>
              <span className="text-[11px] text-muted-foreground block mt-0.5">
                {ar ? "عبر 5 قارات حول العالم" : "Across 5 Global Continents"}
              </span>
            </div>

            <div className="interactive-card glass-box-interactive group rounded-3xl p-5 sm:p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer">
              <span className="font-head text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-500 drop-shadow-sm">179</span>
              <p className="text-xs sm:text-sm font-bold text-foreground mt-1.5">
                {ar ? "سجل طلبات شرائية موثقة" : "Recorded Purchase Inquiries"}
              </p>
              <span className="text-[11px] text-muted-foreground block mt-0.5">
                {ar ? "سجلات أصلية لعام 2025" : "2025 Original Verified Records"}
              </span>
            </div>

            <div className="interactive-card glass-box-interactive group rounded-3xl p-5 sm:p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer">
              <span className="font-head text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-500 drop-shadow-sm">66</span>
              <p className="text-xs sm:text-sm font-bold text-foreground mt-1.5">
                {ar ? "طلبات شراء التمور ومنتجاتها" : "Date Purchase Inquiries"}
              </p>
              <span className="text-[11px] text-muted-foreground block mt-0.5">
                {ar ? "عجوة، مجدول، سكري، دبس" : "Ajwa, Medjool, Sukkari, Paste"}
              </span>
            </div>

            <div className="interactive-card glass-box-interactive group rounded-3xl p-5 sm:p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer">
              <span className="font-head text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-500 drop-shadow-sm">113</span>
              <p className="text-xs sm:text-sm font-bold text-foreground mt-1.5">
                {ar ? "طلبات شراء السلع المتنوعة" : "Diversified Purchase Inquiries"}
              </p>
              <span className="text-[11px] text-muted-foreground block mt-0.5">
                {ar ? "توابل، خضار، بذور، أعشاب" : "Spices, Produce, Seeds, Herbs"}
              </span>
            </div>
          </div>

          {/* Documentary Compliance Alert as Transparent Glass Interactive Card */}
          <div className="interactive-card glass-box-interactive w-full rounded-2xl p-4 sm:p-5 text-xs text-foreground/85 leading-relaxed text-start flex items-start gap-3.5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md cursor-pointer border-brand-orange/30">
            <AlertCircle className="size-5 shrink-0 text-brand-orange mt-0.5" />
            <div>
              <strong className="font-bold text-foreground">
                {ar ? "إقرار الحوكمة والامتثال التوثيقي: " : "Documentary Compliance Statement: "}
              </strong>
              <span>
                {ar
                  ? "تمثل هذه الأرقام طلبات شراء واردة ومسجلة ضمن متطلبات المشترين الدوليين، ولا تعني بالضرورة صدور أوامر شراء مؤكدة أو إبرام عقود تجارية أو إتمام عمليات توريد وشحن."
                  : "These figures represent purchase requests received and recorded within international buyer requirements, and do not necessarily imply confirmed purchase orders, executed commercial contracts, or completed supply and shipping operations."}
              </span>
            </div>
          </div>
        </div>
        {/* Section 1: Interactive World Map */}
        <section id="world-map" className="scroll-mt-32 space-y-6">
          <TradeWorldMap ar={ar} onSelectCountry={handleCountrySelect} />
        </section>

        {/* Section 2: International Market Directory */}
        <section id="market-directory" className="scroll-mt-32 space-y-6">
          <MarketDirectory ar={ar} selectedCountryCode={selectedCountryCode} />
        </section>

        {/* Section 3: Global Product Demand */}
        <section id="product-demand" className="scroll-mt-32 space-y-6">
          <div className="interactive-card glass-box-interactive rounded-3xl p-6 sm:p-8 shadow-md backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md shadow-xs">
              <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
              <span>{ar ? "القسم الثالث: محفظة السلع" : "Section 3: Product Portfolio"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-foreground mt-0.5 leading-snug">
              {ar ? "المنتجات المطلوبة في الأسواق العالمية" : "Global Product Demand Portfolio"}
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2.5 sm:mt-3 leading-relaxed">
              {ar
                ? "استعراض تصنيفي متكامل لـ 7 فئات رئيسية تغطي التمور، التوابل، الخضروات، الفواكه، الحبوب، الأعشاب، والسلع الاستراتيجية."
                : "Comprehensive product taxonomy covering seven core categories documented in international buyer inquiries."}
            </p>
          </div>

          <GlobalProductDemand ar={ar} />
        </section>

        {/* Section 4: Trade Intelligence & Documented Quantities */}
        <section id="trade-intelligence" className="scroll-mt-32 space-y-6">
          <div className="interactive-card glass-box-interactive rounded-3xl p-6 sm:p-8 shadow-md backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md shadow-xs">
              <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
              <span>{ar ? "القسم الرابع: ذكاء السوق والكميات" : "Section 4: Market Intelligence"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-foreground mt-0.5 leading-snug">
              {ar ? "ذكاء السوق ومتطلبات المشترين الموثقة" : "Market Demand & Trade Intelligence"}
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2.5 sm:mt-3 leading-relaxed">
              {ar
                ? "لوحة بيانات تحليلية للمسار الشهري، وحصر حصري للطلبات الـ 12 المحددة كميًا بدقة في سجلات عام 2025."
                : "Analytics dashboard covering monthly trends and 12 explicitly quantified buyer requirement orders."}
            </p>
          </div>

          <TradeIntelligenceDashboard ar={ar} />
        </section>

        {/* Section 5: Our International Business Network */}
        <section id="business-network" className="scroll-mt-32 space-y-6">
          <div className="interactive-card glass-box-interactive rounded-3xl p-6 sm:p-8 shadow-md backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md shadow-xs">
              <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
              <span>{ar ? "القسم الخامس: شبكة الأعمال" : "Section 5: Business Network"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-foreground mt-0.5 leading-snug">
              {ar ? "شبكتنا التجارية الدولية" : "Our International Business Network"}
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2.5 sm:mt-3 leading-relaxed">
              {ar
                ? "فصل كامل وصارم بين الشركاء والعملاء المتعاقد معهم فعليًا، وبين استفسارات المشترين قيد التفاوض والتدقيق."
                : "Strict separation between verified contracted clients/partners and privacy-protected buyer inquiries."}
            </p>
          </div>

          <BusinessNetworkSection ar={ar} />
        </section>

        {/* Section 6: International Trade Opportunities */}
        <section id="trade-opportunities" className="scroll-mt-32 space-y-6">
          <div className="interactive-card glass-box-interactive rounded-3xl p-6 sm:p-8 shadow-md backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md shadow-xs">
              <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
              <span>{ar ? "القسم السادس: الفرص التجارية" : "Section 6: Trade Opportunities"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-foreground mt-0.5 leading-snug">
              {ar ? "الفرص التجارية وعروض التوريد المفتوحة" : "International Trade Opportunities"}
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2.5 sm:mt-3 leading-relaxed">
              {ar
                ? "بوابة تقديم العروض التنافسية أمام المنتجين والموردين المؤهلين للتعاقد على كميات التصدير المطلوبة."
                : "Open bidding opportunities allowing qualified producers and suppliers to submit competitive supply quotes."}
            </p>
          </div>

          <TradeOpportunitiesSection ar={ar} />
        </section>

        {/* Section 7: Downloadable Reports */}
        <section id="trade-reports" className="scroll-mt-32 space-y-6">
          <div className="interactive-card glass-box-interactive rounded-3xl p-6 sm:p-8 shadow-md backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md shadow-xs">
              <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
              <span>{ar ? "القسم السابع: التوثيق والتحميلات" : "Section 7: Reports & Documentation"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-foreground mt-0.5 leading-snug">
              {ar ? "تقارير ودراسات التجارة الدولية الرسمية (PDF)" : "Official Trade Reports & PDFs"}
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2.5 sm:mt-3 leading-relaxed">
              {ar
                ? "مكتبة التقارير التنفيذية الخمسة الموثقة، مهيأة للتحميل والطباعة وفق الهوية البصرية للمجموعة."
                : "Comprehensive library of five executive trade reports, ready for PDF export and high-resolution printing."}
            </p>
          </div>

          <TradeReportsDownloads ar={ar} />
        </section>
      </div>
    </div>
  );
}

