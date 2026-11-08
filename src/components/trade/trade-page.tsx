import React, { useState } from "react";
import { Reveal } from "@/components/home/reveal";
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
      <section className="relative w-full min-h-[calc(100svh-76px)] overflow-hidden text-white flex flex-col justify-center mb-12">
        {/* Full-width & Full-height background image & overlay */}
        <img
          src="/BG/Main Home Page.jpg"
          alt={ar ? "التجارة والفرص الدولية - مجموعة سامي بن عياد" : "Global Trade & Opportunities - Sami Bin Ayyad Group"}
          className="absolute inset-0 size-full object-cover object-center pointer-events-none select-none"
          fetchPriority="high"
        />
        <div className="group-hero-overlay absolute inset-0 bg-black/65 backdrop-blur-[1px] pointer-events-none" />

        <div className="site-container relative z-10 flex min-h-[inherit] flex-col justify-between pt-16 sm:pt-24 pb-8 sm:pb-12">
          <div className="my-auto">
            <Reveal>
              {/* A. Small Top Headline */}
              <div className="flex items-center justify-start mb-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/50 px-4 py-1.5 text-xs font-bold tracking-wide text-white/95 backdrop-blur-md shadow-md">
                  <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
                  <span>
                    {ar
                      ? "مجموعة سامي بن عياد · انتشارنا التجاري العالمي"
                      : "SAMI BIN AYYAD GROUP · Global Trade Footprint"}
                  </span>
                </div>
              </div>

              {/* B. Main Headline */}
              <h1 className="font-head text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-snug tracking-tight text-start drop-shadow-md max-w-4xl">
                {ar
                  ? "نربط الأسواق العالمية، ونصنع الفرص التجارية الموثوقة"
                  : "Connecting Global Markets, Delivering Real Trade Opportunities"}
              </h1>

              {/* C. Intro Paragraph */}
              <p className="mt-3.5 max-w-4xl text-sm sm:text-base leading-relaxed text-white/90 text-start drop-shadow-sm">
                {ar
                  ? "استعراض مهني موثق لشبكة الطلبات التجارية لعام 2025، وقاعدة متطلبات المشترين للتمور والسلع الغذائية عبر 47 دولة حول العالم."
                  : "A documented corporate showcase of our 2025 commercial inquiry network, covering buyer demand for dates and food commodities across 47 countries."}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="site-container space-y-20 mt-8 sm:mt-12">
        {/* Key Trade Statistics (Positioned Below Hero Background) */}
        <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-4 w-full">
          <div className="interactive-card glass-box-interactive group rounded-3xl p-5 sm:p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer text-center flex flex-col items-center justify-center">
            <span className="font-head text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-500 drop-shadow-sm">47</span>
            <p className="text-xs sm:text-sm font-bold text-foreground mt-1.5 text-center">
              {ar ? "دولة مسجلة في الطلبات" : "Documented Destination Markets"}
            </p>
            <span className="text-[11px] text-muted-foreground block mt-0.5 text-center">
              {ar ? "عبر 5 قارات حول العالم" : "Across 5 Global Continents"}
            </span>
          </div>

          <div className="interactive-card glass-box-interactive group rounded-3xl p-5 sm:p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer text-center flex flex-col items-center justify-center">
            <span className="font-head text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-500 drop-shadow-sm">179</span>
            <p className="text-xs sm:text-sm font-bold text-foreground mt-1.5 text-center">
              {ar ? "سجل طلبات شرائية موثقة" : "Recorded Purchase Inquiries"}
            </p>
            <span className="text-[11px] text-muted-foreground block mt-0.5 text-center">
              {ar ? "سجلات أصلية لعام 2025" : "2025 Original Verified Records"}
            </span>
          </div>

          <div className="interactive-card glass-box-interactive group rounded-3xl p-5 sm:p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer text-center flex flex-col items-center justify-center">
            <span className="font-head text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-500 drop-shadow-sm">66</span>
            <p className="text-xs sm:text-sm font-bold text-foreground mt-1.5 text-center">
              {ar ? "طلبات شراء التمور ومنتجاتها" : "Date Purchase Inquiries"}
            </p>
            <span className="text-[11px] text-muted-foreground block mt-0.5 text-center">
              {ar ? "عجوة، مجدول، سكري، دبس" : "Ajwa, Medjool, Sukkari, Paste"}
            </span>
          </div>

          <div className="interactive-card glass-box-interactive group rounded-3xl p-5 sm:p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer text-center flex flex-col items-center justify-center">
            <span className="font-head text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-500 drop-shadow-sm">113</span>
            <p className="text-xs sm:text-sm font-bold text-foreground mt-1.5 text-center">
              {ar ? "طلبات شراء السلع المتنوعة" : "Diversified Purchase Inquiries"}
            </p>
            <span className="text-[11px] text-muted-foreground block mt-0.5 text-center">
              {ar ? "توابل، خضار، بذور، أعشاب" : "Spices, Produce, Seeds, Herbs"}
            </span>
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
          <GlobalProductDemand ar={ar} />
        </section>

        {/* Section 4: International Trade Opportunities */}
        <section id="trade-opportunities" className="scroll-mt-32 space-y-6">
          <TradeOpportunitiesSection ar={ar} />
        </section>

        {/* Section 5: Trade Intelligence & Documented Quantities */}
        <section id="trade-intelligence" className="scroll-mt-32 space-y-6">
          <TradeIntelligenceDashboard ar={ar} />
        </section>

        {/* Section 6: Our International Business Network */}
        <section id="business-network" className="scroll-mt-32 space-y-6">
          <BusinessNetworkSection ar={ar} />
        </section>

        {/* Section 7: Downloadable Reports */}
        <section id="trade-reports" className="scroll-mt-32 space-y-6">
          <TradeReportsDownloads ar={ar} />
        </section>
      </div>
    </div>
  );
}

