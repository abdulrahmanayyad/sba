import React, { useState } from "react";
import { Reveal } from "@/components/home/reveal";
import { AlertCircle, ShieldCheck } from "lucide-react";
import { ApparelWorldMap } from "./apparel-world-map";
import { ApparelMarketDirectory } from "./apparel-market-directory";
import { ApparelProductDemand } from "./apparel-product-demand";
import { ApparelRequirements } from "./apparel-requirements";
import { ApparelIntelligence } from "./apparel-intelligence";
import { ApparelBusinessNetwork } from "./apparel-business-network";
import { ApparelFactoriesNetwork } from "./apparel-factories-network";
import { ApparelBuyerInquiries } from "./apparel-buyer-inquiries";
import { ApparelReportsDownloads } from "./apparel-reports-downloads";
import { APPAREL_TRADE_STATS, ApparelMarket } from "@/lib/apparel-trade-data";

interface ApparelTradeViewProps {
  ar?: boolean;
}

export function ApparelTradeView({ ar = true }: ApparelTradeViewProps) {
  const [selectedMarketCode, setSelectedMarketCode] = useState<string | undefined>(undefined);

  const handleMarketSelect = (market: ApparelMarket) => {
    setSelectedMarketCode(market.code);
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground pb-24">
      {/* 1. Hero Section (Section 1: Sector Intro & Hero) */}
      <section className="relative w-full min-h-[calc(100svh-76px)] overflow-hidden text-white flex flex-col justify-center mb-12">
        <img
          src="/BG/Apparel & Fashion/Apparel & Fashion Home Page.jpg"
          alt={ar ? "الفرص العالمية | قطاع الملابس والمنسوجات - مجموعة سامي بن عياد" : "Global Apparel & Textile Opportunities - Sami Bin Ayyad Group"}
          className="absolute inset-0 size-full object-cover object-center pointer-events-none select-none"
          fetchPriority="high"
        />
        <div className="group-hero-overlay absolute inset-0 bg-black/70 backdrop-blur-[1px] pointer-events-none" />

        <div className="site-container relative z-10 flex min-h-[inherit] flex-col justify-between pt-16 sm:pt-24 pb-8 sm:pb-12">
          <div className="my-auto">
            <Reveal>
              {/* Small Top Headline */}
              <div className="flex items-center justify-start mb-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/50 px-4 py-1.5 text-xs font-bold tracking-wide text-white/95 backdrop-blur-md shadow-md">
                  <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
                  <span>
                    {ar
                      ? "مجموعة سامي بن عياد · الفرص العالمية | قطاع الملابس والمنسوجات"
                      : "SAMI BIN AYYAD GROUP · Global Apparel & Textile Opportunities"}
                  </span>
                </div>
              </div>

              {/* Main Headline */}
              <h1 className="font-head text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-snug tracking-tight text-start drop-shadow-md max-w-4xl">
                {ar
                  ? "تصنيع تعاقدي، وتوريد مرن، وشراكات تصديرية موثوقة للأسواق العالمية"
                  : "Contract Manufacturing, Agile Sourcing & Trusted Global Export Partnerships"}
              </h1>

              {/* Intro Paragraph */}
              <p className="mt-3.5 max-w-4xl text-sm sm:text-base leading-relaxed text-white/90 text-start drop-shadow-sm">
                {ar
                  ? "استعراض مهني موثق لشبكة التصنيع المصري، والفرص التصديرية، وسجل استفسارات المشترين للملابس والمنسوجات عبر 20 سوقًا إقليميًا ودوليًا."
                  : "A documented corporate showcase of our Egyptian manufacturing network, export opportunities, and verified buyer inquiry registry across 20 regional and global markets."}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="site-container space-y-20 mt-8 sm:mt-12">
        {/* Section 2: Key Indicators (4 Neutral Glass Cards + Disclaimer) */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-4 w-full">
            <div className="interactive-card glass-box-interactive group rounded-3xl p-5 sm:p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-center flex flex-col items-center justify-center">
              <span className="font-head text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-500 drop-shadow-sm">
                {APPAREL_TRADE_STATS.marketsCount}
              </span>
              <p className="text-xs sm:text-sm font-bold text-foreground mt-1.5 text-center">
                {ar ? "دولة وسوق دولي" : "Documented Markets"}
              </p>
              <span className="text-[11px] text-muted-foreground block mt-0.5 text-center">
                {ar ? "عبر 4 أقاليم جغرافية" : "Across 4 Global Regions"}
              </span>
            </div>

            <div className="interactive-card glass-box-interactive group rounded-3xl p-5 sm:p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-center flex flex-col items-center justify-center">
              <span className="font-head text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-500 drop-shadow-sm">
                {APPAREL_TRADE_STATS.historicalInquiriesCount}
              </span>
              <p className="text-xs sm:text-sm font-bold text-foreground mt-1.5 text-center">
                {ar ? "محادثة وسجل تواصلي" : "Historical Communications"}
              </p>
              <span className="text-[11px] text-muted-foreground block mt-0.5 text-center">
                {ar ? "سجلات تفاوضية موثقة" : "Documented Commercial Records"}
              </span>
            </div>

            <div className="interactive-card glass-box-interactive group rounded-3xl p-5 sm:p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-center flex flex-col items-center justify-center">
              <span className="font-head text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-500 drop-shadow-sm">
                {APPAREL_TRADE_STATS.egyptianFactoriesCount}
              </span>
              <p className="text-xs sm:text-sm font-bold text-foreground mt-1.5 text-center">
                {ar ? "مصنع وكيان شريك بمصر" : "Partner Facilities in Egypt"}
              </p>
              <span className="text-[11px] text-muted-foreground block mt-0.5 text-center">
                {ar ? "عبر كبرى القلاع الصناعية" : "Across Leading Industrial Hubs"}
              </span>
            </div>

            <div className="interactive-card glass-box-interactive group rounded-3xl p-5 sm:p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-center flex flex-col items-center justify-center">
              <span className="font-head text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-500 drop-shadow-sm">
                {APPAREL_TRADE_STATS.manufacturingTracksCount}
              </span>
              <p className="text-xs sm:text-sm font-bold text-foreground mt-1.5 text-center">
                {ar ? "مسارات للتصنيع والتوريد" : "Core Sourcing Tracks"}
              </p>
              <span className="text-[11px] text-muted-foreground block mt-0.5 text-center">
                {ar ? "مرونة تلبي كافة الأحجام" : "Scalable Turnkey Capacity"}
              </span>
            </div>
          </div>

          {/* Audit Disclaimer Card */}
          <div className="flex items-center gap-2.5 rounded-2xl border border-border/70 bg-background/60 p-4 text-xs text-muted-foreground backdrop-blur-md">
            <ShieldCheck className="size-4 shrink-0 text-brand-green" />
            <p className="leading-relaxed">
              <strong className="text-foreground">{ar ? "إشعار التدقيق والسرية التجارية:" : "Commercial Verification Notice:"}</strong>{" "}
              {ar
                ? "جميع البيانات والأسواق والطلبات مستندة إلى سجلات تجارية ومحادثات تفاوضية فعلية تم تدقيقها مهنيًا لحماية حقوق الملكية والسرية التجارية لشركائنا."
                : "All market data, inquiries, and technical specifications are grounded in verified commercial records, audited professionally to protect proprietary and client confidentiality."}
            </p>
          </div>
        </div>

        {/* Section 3: World Footprint Map */}
        <section id="apparel-map" className="scroll-mt-32 space-y-6">
          <ApparelWorldMap ar={ar} onSelectMarket={handleMarketSelect} />
        </section>

        {/* Section 4: International Markets Directory */}
        <section id="apparel-directory" className="scroll-mt-32 space-y-6">
          <ApparelMarketDirectory ar={ar} selectedMarketCode={selectedMarketCode} />
        </section>

        {/* Section 5: Products & Collections Portfolio */}
        <section id="apparel-portfolio" className="scroll-mt-32 space-y-6">
          <ApparelProductDemand ar={ar} />
        </section>

        {/* Section 6: Manufacturing & Sourcing Requirements */}
        <section id="apparel-specs" className="scroll-mt-32 space-y-6">
          <ApparelRequirements ar={ar} />
        </section>

        {/* Section 7: Commercial Market Trends */}
        <section id="apparel-trends" className="scroll-mt-32 space-y-6">
          <ApparelIntelligence ar={ar} />
        </section>

        {/* Section 8: Approved Business Partners */}
        <section id="apparel-network" className="scroll-mt-32 space-y-6">
          <ApparelBusinessNetwork ar={ar} />
        </section>

        {/* Section 9: Egyptian Partner Manufacturing Network */}
        <section id="apparel-facilities" className="scroll-mt-32 space-y-6">
          <ApparelFactoriesNetwork ar={ar} />
        </section>

        {/* Section 10: Global Buyers Inquiry Registry */}
        <section id="apparel-registry" className="scroll-mt-32 space-y-6">
          <ApparelBuyerInquiries ar={ar} />
        </section>

        {/* Section 11: Documentation & Technical Downloads */}
        <section id="apparel-docs" className="scroll-mt-32 space-y-6">
          <ApparelReportsDownloads ar={ar} />
        </section>
      </div>
    </div>
  );
}

