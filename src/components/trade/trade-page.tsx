import React, { useState, useEffect } from "react";
import { Reveal } from "@/components/home/reveal";
import { cn } from "@/lib/utils";
import { TradeWorldMap } from "./trade-world-map";
import { MarketDirectory } from "./market-directory";
import { GlobalProductDemand } from "./global-product-demand";
import { TradeIntelligenceDashboard } from "./trade-intelligence-dashboard";
import { BusinessNetworkSection } from "./business-network-section";
import { BuyerInquiriesSection } from "./buyer-inquiries-section";
import { TradeOpportunitiesSection } from "./trade-opportunities-section";
import { TradeReportsDownloads } from "./trade-reports-downloads";
import { ApparelTradeView } from "./apparel/apparel-trade-view";
import { RealEstateTradeView } from "./real-estate/real-estate-trade-view";
import { SustainabilityTradeView } from "./sustainability/sustainability-trade-view";
import { TRADE_STATS, COUNTRY_PROFILES, CountryTradeProfile } from "@/lib/trade-data";

interface TradePageProps {
  ar?: boolean;
}

export function TradePage({ ar = true }: TradePageProps) {
  const [activeSector, setActiveSector] = useState<"food" | "apparel" | "sustainability" | "real-estate">("real-estate");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const s = params.get("sector");
      if (s === "apparel" || s === "sustainability" || s === "real-estate" || s === "food") {
        setActiveSector(s);
      }

      const onPopState = () => {
        const p = new URLSearchParams(window.location.search);
        const cur = p.get("sector");
        if (cur === "apparel" || cur === "sustainability" || cur === "real-estate" || cur === "food") {
          setActiveSector(cur);
        } else {
          setActiveSector("real-estate");
        }
      };
      window.addEventListener("popstate", onPopState);
      return () => window.removeEventListener("popstate", onPopState);
    }
  }, []);

  const [selectedCountryCode, setSelectedCountryCode] = useState<string | undefined>(undefined);

  const handleCountrySelect = (country: CountryTradeProfile) => {
    setSelectedCountryCode(country.code);
  };

  const handleSectorChange = (sector: "food" | "apparel" | "sustainability" | "real-estate") => {
    setActiveSector(sector);
    if (typeof window !== "undefined") {
      try {
        const url = new URL(window.location.href);
        url.searchParams.set("sector", sector);
        window.history.pushState({}, "", url.toString());
      } catch {
        // Safe fallback
      }
    }
  };

  const sectorTabs = [
    {
      id: "real-estate" as const,
      titleAr: "قطاع المقاولات",
      titleEn: "Construction Sector",
    },
    {
      id: "sustainability" as const,
      titleAr: "قطاع البيئة والاستدامة",
      titleEn: "Environment & Sustainability",
    },
    {
      id: "apparel" as const,
      titleAr: "قطاع الملابس والمنسوجات",
      titleEn: "Apparel & Textiles",
    },
    {
      id: "food" as const,
      titleAr: "قطاع الأغذية والمنتجات الطبيعية",
      titleEn: "Food & Natural Products",
    },
  ];

  const GLOBAL_OPPORTUNITIES_BG = encodeURI("/Background/Main Background - SAMI BIN AYYAD GROUP · Global Opportunities.jpg");

  const heroContent = {
    food: {
      bg: GLOBAL_OPPORTUNITIES_BG,
      badgeAr: "مجموعة سامي بن عياد · الفرص العالمية",
      badgeEn: "SAMI BIN AYYAD GROUP · Global Opportunities",
      titleAr: "نربط الأسواق العالمية، ونصنع الفرص التجارية الموثوقة",
      titleEn: "Connecting Global Markets, Delivering Real Trade Opportunities",
      descAr: "استعراض مهني موثق لشبكة الطلبات التجارية وقاعدة متطلبات المشترين عبر 84 دولة حول العالم",
      descEn: "A documented corporate showcase of our commercial inquiry network and buyer demand registry across 84 countries worldwide."
    },
    apparel: {
      bg: GLOBAL_OPPORTUNITIES_BG,
      badgeAr: "مجموعة سامي بن عياد · الفرص العالمية",
      badgeEn: "SAMI BIN AYYAD GROUP · Global Opportunities",
      titleAr: "تصنيع تعاقدي وتوريد مرن وشراكات موثوقة",
      titleEn: "Contract Manufacturing, Agile Sourcing & Trusted Partnerships",
      descAr: "استعراض مهني موثق لشبكة التصنيع المصري، والفرص التصديرية، وسجل طلبات الشراء للملابس والمنسوجات",
      descEn: "A documented corporate showcase of our Egyptian manufacturing network, export opportunities, and verified buyer inquiry registry for apparel and textiles."
    },
    sustainability: {
      bg: GLOBAL_OPPORTUNITIES_BG,
      badgeAr: "مجموعة سامي بن عياد · الفرص العالمية",
      badgeEn: "SAMI BIN AYYAD GROUP · Global Opportunities",
      titleAr: "حلول واستشارات بيئية متكاملة",
      titleEn: "Integrated Environmental Solutions & Advisory",
      descAr: "بوابة استثمارية وشراكات تشغيلية تربط الشركات الكبرى بأحدث التقنيات والحلول المستدامة",
      descEn: "A business gateway connecting leading enterprises with advanced sustainability technologies and solutions."
    },
    "real-estate": {
      bg: GLOBAL_OPPORTUNITIES_BG,
      badgeAr: "مجموعة سامي بن عياد · الفرص العالمية",
      badgeEn: "SAMI BIN AYYAD GROUP · Global Opportunities",
      titleAr: "خبرات مهنية واستثمارية موثوقة",
      titleEn: "Trusted Professional & Investment Advisory",
      descAr: "مسيرة متواصلة منذ عام 2018 في السوق المصري، تغطي أكثر من 400 مشروع عقاري، وشبكة علاقات مع 200 مطور عقاري",
      descEn: "A continuous track record since 2018 in the Egyptian market, covering 400+ real estate projects, and a relationship network with 200 real estate developers."
    }
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground pb-24">
      {/* 1. Hero Section (خلفية صفحة الفرص العالمية) */}
      <section className="relative w-full min-h-[calc(70svh-76px)] sm:min-h-[calc(75svh-76px)] overflow-hidden text-white flex flex-col justify-center mb-6 sm:mb-10">
        {/* Full-width & Full-height background image & overlay */}
        <img
          src={heroContent[activeSector].bg}
          alt={ar ? heroContent[activeSector].titleAr : heroContent[activeSector].titleEn}
          className="absolute inset-0 size-full object-cover object-center pointer-events-none select-none transition-all duration-700"
          fetchPriority="high"
        />
        <div className="group-hero-overlay absolute inset-0 bg-slate-950/45 backdrop-blur-[0.5px] pointer-events-none" />

        <div className="site-container relative z-10 flex min-h-[inherit] flex-col justify-center py-16 sm:py-20">
          <Reveal>
            {/* A. Small Top Headline */}
            <div className="flex items-center justify-start mb-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/50 px-4 py-1.5 text-xs font-bold tracking-wide text-white/95 backdrop-blur-md shadow-md">
                <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
                <span>
                  {ar ? heroContent[activeSector].badgeAr : heroContent[activeSector].badgeEn}
                </span>
              </div>
            </div>

            {/* B. Main Headline */}
            <h1 className="font-head text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-snug tracking-tight text-start drop-shadow-md max-w-4xl">
              {ar ? heroContent[activeSector].titleAr : heroContent[activeSector].titleEn}
            </h1>

            {/* C. Intro Paragraph */}
            <p className="mt-3.5 max-w-4xl text-sm sm:text-base leading-relaxed text-white/90 text-start drop-shadow-sm">
              {ar ? heroContent[activeSector].descAr : heroContent[activeSector].descEn}
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. Global Opportunities Sector Selection Box */}
      <div className="site-container mb-12 sm:mb-16">
        <div className="interactive-card glass-box-interactive w-full rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl backdrop-blur-2xl transition-all duration-300">
          {/* Box Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-border/60 pb-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs sm:text-sm font-bold tracking-wide text-foreground backdrop-blur-md shadow-xs">
              <span className="size-1.5 rounded-full bg-brand-orange animate-pulse shrink-0" />
              <span className="font-head">{ar ? "بوابة الفرص العالمية" : "Global Opportunities"}</span>
            </div>
            <p className="text-xs text-muted-foreground font-medium">
              {ar ? "انقر على أي قطاع لعرض البيانات والمؤشرات المعتمدة أدناه" : "Click any sector to view verified indicators and database below"}
            </p>
          </div>

          {/* The Sectors Side-by-Side in Responsive Grid - Sized to Title */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {sectorTabs.map((tab) => {
              const isActive = activeSector === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleSectorChange(tab.id)}
                  className={cn(
                    "group relative flex items-center justify-center rounded-2xl px-4 py-3.5 sm:px-5 sm:py-4 text-center transition-all duration-300 cursor-pointer border shadow-sm active:scale-98",
                    isActive
                      ? "!border-brand-green !bg-brand-green !text-white shadow-md shadow-brand-green/20"
                      : "border-border/80 bg-secondary/80 text-foreground hover:border-brand-orange/60 hover:text-brand-orange hover:bg-secondary/90 hover:-translate-y-0.5"
                  )}
                >
                  <span className={cn(
                    "text-sm sm:text-base font-bold leading-snug transition-colors",
                    isActive ? "text-white font-extrabold" : "text-foreground group-hover:text-brand-orange"
                  )}>
                    {ar ? tab.titleAr : tab.titleEn}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. RENDER DATA ACCORDING TO SELECTED SECTOR */}
      {activeSector === "apparel" && <ApparelTradeView ar={ar} hideHero={true} />}
      {activeSector === "sustainability" && <SustainabilityTradeView ar={ar} hideHero={true} />}
      {activeSector === "real-estate" && <RealEstateTradeView ar={ar} hideHero={true} />}

      {activeSector === "food" && (
        <div className="site-container space-y-20">
          {/* Section 1: Interactive World Map */}
          <section id="world-map" className="scroll-mt-32 space-y-6">
              <TradeWorldMap ar={ar} onSelectCountry={handleCountrySelect} />
            </section>

            {/* Section 2: International Market Directory */}
            <section id="market-directory" className="scroll-mt-32 space-y-6 [content-visibility:auto] [contain-intrinsic-size:auto_750px]">
              <MarketDirectory ar={ar} selectedCountryCode={selectedCountryCode} />
            </section>

            {/* Section 3: Global Product Demand */}
            <section id="product-demand" className="scroll-mt-32 space-y-6 [content-visibility:auto] [contain-intrinsic-size:auto_750px]">
              <GlobalProductDemand ar={ar} />
            </section>

            {/* Section 4: International Trade Opportunities */}
            <section id="trade-opportunities" className="scroll-mt-32 space-y-6 [content-visibility:auto] [contain-intrinsic-size:auto_750px]">
              <TradeOpportunitiesSection ar={ar} />
            </section>

            {/* Section 5: Trade Intelligence & Documented Quantities */}
            <section id="trade-intelligence" className="scroll-mt-32 space-y-6 [content-visibility:auto] [contain-intrinsic-size:auto_750px]">
              <TradeIntelligenceDashboard ar={ar} />
            </section>

            {/* Section 6: Our International Business Network */}
            <section id="business-network" className="scroll-mt-32 space-y-6 [content-visibility:auto] [contain-intrinsic-size:auto_750px]">
              <BusinessNetworkSection ar={ar} />
            </section>

            {/* Section 7: International Buyer Inquiries Log */}
            <section id="buyer-inquiries" className="scroll-mt-32 space-y-6 [content-visibility:auto] [contain-intrinsic-size:auto_750px]">
              <BuyerInquiriesSection ar={ar} />
            </section>

            {/* Section 8: Downloadable Reports */}
            <section id="trade-reports" className="scroll-mt-32 space-y-6 [content-visibility:auto] [contain-intrinsic-size:auto_750px]">
              <TradeReportsDownloads ar={ar} />
            </section>
          </div>
      )}
    </div>
  );
}
