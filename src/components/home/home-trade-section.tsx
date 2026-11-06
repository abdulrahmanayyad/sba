import React from "react";
import { Link } from "@tanstack/react-router";
import { 
  Globe, 
  TrendingUp, 
  ArrowRight, 
  Package, 
  ShieldCheck, 
  Sparkles, 
  Layers,
  MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { TRADE_STATS, COUNTRY_PROFILES } from "@/lib/trade-data";

interface HomeTradeSectionProps {
  ar?: boolean;
}

export function HomeTradeSection({ ar = true }: HomeTradeSectionProps) {
  const featuredCountries = COUNTRY_PROFILES.slice(0, 8);

  return (
    <section className="site-container section-band">
      <div className="group relative overflow-hidden rounded-[36px] border border-white/50 bg-white/40 dark:bg-white/10 p-8 sm:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.05)] backdrop-blur-3xl ring-1 ring-white/30 transition-all duration-500 hover:-translate-y-1.5 hover:scale-[1.01] hover:bg-white/60 dark:hover:bg-white/20 hover:border-brand-orange/50 hover:shadow-[0_25px_60px_rgba(0,0,0,0.1)]">
        <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          {/* Left Column: Heading, Badges, CTA */}
          <div className="max-w-2xl space-y-6 text-start">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-4 py-1.5 text-xs font-bold tracking-wide text-foreground backdrop-blur-md shadow-xs">
              <span className="size-2 rounded-full bg-brand-orange animate-pulse" />
              <span className="font-bold text-brand-green">{ar ? "انتشارنا العالمي" : "Our Global Reach"}</span>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground leading-tight">
                {ar ? "نربط الأسواق ونصنع الفرص التجارية" : "Connecting Markets. Delivering Opportunities."}
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-medium">
                {ar
                  ? "شبكة تجارية عالمية ممتدة عبر 47 دولة حول العالم سجلت 179 استفساراً تجارياً موثقاً للتمور الفاخرة والتوابل والخضروات والمحاصيل الزراعية الاستراتيجية لعام 2025."
                  : "An international commercial network across 47 countries documenting 179 verified buyer inquiries for premium dates, spices, vegetables, and strategic agricultural commodities in 2025."}
              </p>
            </div>

            {/* Quick Country Pills */}
            <div className="space-y-2">
              <span className="text-xs font-semibold text-muted-foreground block">
                {ar ? "أبرز الأسواق الدولية النشطة:" : "Featured Active International Markets:"}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {featuredCountries.map((c) => (
                  <span
                    key={c.code}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/50 bg-white/50 dark:bg-white/15 px-3 py-1 text-xs text-foreground backdrop-blur-md shadow-xs transition-all duration-300 hover:scale-105 hover:bg-white/80 hover:border-brand-orange/50"
                  >
                    <span>{c.flag}</span>
                    <span className="font-semibold">{ar ? c.nameAr : c.nameEn}</span>
                    <span className="font-mono text-[10px] text-brand-orange font-bold">({c.totalInquiries})</span>
                  </span>
                ))}
                <span className="inline-flex items-center rounded-full bg-white/50 dark:bg-white/15 border border-white/50 px-2.5 py-1 text-xs text-muted-foreground font-semibold backdrop-blur-md">
                  +39 {ar ? "دولة أخرى" : "more"}
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Button
                asChild
                size="lg"
                className="rounded-full !bg-brand-green !text-white px-8 py-3.5 font-head text-sm font-bold shadow-xl transition-all duration-300 hover:!bg-brand-orange hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Link to="/trade">
                  <span>{ar ? "استكشف شبكتنا التجارية وخريطة الأسواق" : "Explore Our Global Trade Network"}</span>
                  <ArrowRight className="size-4 rtl:rotate-180" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column: 4 Key Metric Cards */}
          <div className="grid grid-cols-2 gap-3.5 sm:gap-4 lg:w-[420px] shrink-0">
            <div className="rounded-3xl border border-white/50 bg-white/40 dark:bg-white/10 p-5 backdrop-blur-2xl text-start shadow-[0_8px_30px_rgba(0,0,0,0.04)] ring-1 ring-white/30 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-white/60 dark:hover:bg-white/20 hover:border-brand-orange/50 hover:shadow-lg cursor-pointer">
              <span className="font-head text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-500 drop-shadow-sm">47</span>
              <h4 className="text-xs font-bold text-foreground mt-1">
                {ar ? "دولة مسجلة في الاستفسارات" : "Documented Countries"}
              </h4>
              <p className="text-[11px] text-muted-foreground mt-0.5">
                {ar ? "عبر 5 قارات دولية" : "Across 5 continents"}
              </p>
            </div>

            <div className="rounded-3xl border border-white/50 bg-white/40 dark:bg-white/10 p-5 backdrop-blur-2xl text-start shadow-[0_8px_30px_rgba(0,0,0,0.04)] ring-1 ring-white/30 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-white/60 dark:hover:bg-white/20 hover:border-brand-green/50 hover:shadow-lg cursor-pointer">
              <span className="font-head text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-500 drop-shadow-sm">179</span>
              <h4 className="text-xs font-bold text-foreground mt-1">
                {ar ? "سجل استفسار تجاري موثق" : "Recorded Inquiries"}
              </h4>
              <p className="text-[11px] text-muted-foreground mt-0.5">
                {ar ? "بيانات موثقة لعام 2025" : "Verified 2025 dataset"}
              </p>
            </div>

            <div className="rounded-3xl border border-white/50 bg-white/40 dark:bg-white/10 p-5 backdrop-blur-2xl text-start shadow-[0_8px_30px_rgba(0,0,0,0.04)] ring-1 ring-white/30 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-white/60 dark:hover:bg-white/20 hover:border-amber-500/50 hover:shadow-lg cursor-pointer">
              <span className="font-head text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-500 drop-shadow-sm">66</span>
              <h4 className="text-xs font-bold text-foreground mt-1">
                {ar ? "طلبات التمور ومنتجاتها" : "Dates Inquiries"}
              </h4>
              <p className="text-[11px] text-muted-foreground mt-0.5">
                {ar ? "عجوة، مجدول، سكري..." : "Ajwa, Medjool, etc."}
              </p>
            </div>

            <div className="rounded-3xl border border-white/50 bg-white/40 dark:bg-white/10 p-5 backdrop-blur-2xl text-start shadow-[0_8px_30px_rgba(0,0,0,0.04)] ring-1 ring-white/30 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-white/60 dark:hover:bg-white/20 hover:border-teal-500/50 hover:shadow-lg cursor-pointer">
              <span className="font-head text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-500 drop-shadow-sm">113</span>
              <h4 className="text-xs font-bold text-foreground mt-1">
                {ar ? "سلع ومحاصيل متنوعة" : "Diversified Commodities"}
              </h4>
              <p className="text-[11px] text-muted-foreground mt-0.5">
                {ar ? "توابل، خضار، بذور، أعشاب" : "Spices, crops, seeds"}
              </p>
            </div>
          </div>
        </div>

        {/* Footer Disclaimer Strip */}
        <div className="mt-8 pt-4 border-t border-border/40 text-start text-[11px] text-muted-foreground">
          <span className="font-semibold text-brand-orange">{ar ? "تنويه توثيقي: " : "Notice: "}</span>
          {ar ? TRADE_STATS.legalDisclaimerAr : TRADE_STATS.legalDisclaimerEn}
        </div>
      </div>
    </section>
  );
}

