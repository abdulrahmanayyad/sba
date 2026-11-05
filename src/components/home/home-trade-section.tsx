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
      <div className="relative overflow-hidden rounded-[36px] border border-white/20 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950/40 p-8 sm:p-12 shadow-2xl backdrop-blur-2xl ring-1 ring-white/10">
        {/* Decorative Grid & Lights */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:28px_28px] opacity-40" />
        <div className="pointer-events-none absolute -top-24 -end-24 size-80 rounded-full bg-brand-orange/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -start-24 size-80 rounded-full bg-emerald-500/15 blur-3xl" />

        <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          {/* Left Column: Heading, Badges, CTA */}
          <div className="max-w-2xl space-y-6 text-start">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold text-brand-orange backdrop-blur-md">
              <Globe className="size-4 animate-spin-slow" />
              <span>GLOBAL TRADE FOOTPRINT | 2025</span>
              <span className="size-1 rounded-full bg-brand-orange" />
              <span>{ar ? "انتشارنا التجاري الدولي" : "International Market Presence"}</span>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                {ar ? "نربط الأسواق ونصنع الفرص التجارية" : "Connecting Markets. Delivering Opportunities."}
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
                {ar
                  ? "شبكة تجارية عالمية ممتدة عبر 47 دولة حول العالم سجلت 179 استفساراً تجارياً موثقاً للتمور الفاخرة والتوابل والخضروات والمحاصيل الزراعية الاستراتيجية لعام 2025."
                  : "An international commercial network across 47 countries documenting 179 verified buyer inquiries for premium dates, spices, vegetables, and strategic agricultural commodities in 2025."}
              </p>
            </div>

            {/* Quick Country Pills */}
            <div className="space-y-2">
              <span className="text-xs font-semibold text-slate-400 block">
                {ar ? "أبرز الأسواق الدولية النشطة:" : "Featured Active International Markets:"}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {featuredCountries.map((c) => (
                  <span
                    key={c.code}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                  >
                    <span>{c.flag}</span>
                    <span>{ar ? c.nameAr : c.nameEn}</span>
                    <span className="font-mono text-[10px] text-brand-orange font-bold">({c.totalInquiries})</span>
                  </span>
                ))}
                <span className="inline-flex items-center rounded-full bg-white/10 px-2.5 py-1 text-xs text-slate-300">
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
            <div className="rounded-3xl border border-white/15 bg-white/5 p-5 backdrop-blur-md text-start">
              <span className="text-3xl sm:text-4xl font-black text-brand-orange font-mono">47</span>
              <h4 className="text-xs font-bold text-white mt-1">
                {ar ? "دولة مسجلة في الاستفسارات" : "Documented Countries"}
              </h4>
              <p className="text-[11px] text-slate-400 mt-0.5">
                {ar ? "عبر 5 قارات دولية" : "Across 5 continents"}
              </p>
            </div>

            <div className="rounded-3xl border border-white/15 bg-white/5 p-5 backdrop-blur-md text-start">
              <span className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono">179</span>
              <h4 className="text-xs font-bold text-white mt-1">
                {ar ? "سجل استفسار تجاري موثق" : "Recorded Inquiries"}
              </h4>
              <p className="text-[11px] text-slate-400 mt-0.5">
                {ar ? "بيانات موثقة لعام 2025" : "Verified 2025 dataset"}
              </p>
            </div>

            <div className="rounded-3xl border border-white/15 bg-white/5 p-5 backdrop-blur-md text-start">
              <span className="text-3xl sm:text-4xl font-black text-amber-400 font-mono">66</span>
              <h4 className="text-xs font-bold text-white mt-1">
                {ar ? "طلبات التمور ومنتجاتها" : "Dates Inquiries"}
              </h4>
              <p className="text-[11px] text-slate-400 mt-0.5">
                {ar ? "عجوة، مجدول، سكري..." : "Ajwa, Medjool, etc."}
              </p>
            </div>

            <div className="rounded-3xl border border-white/15 bg-white/5 p-5 backdrop-blur-md text-start">
              <span className="text-3xl sm:text-4xl font-black text-teal-400 font-mono">113</span>
              <h4 className="text-xs font-bold text-white mt-1">
                {ar ? "سلع ومحاصيل متنوعة" : "Diversified Commodities"}
              </h4>
              <p className="text-[11px] text-slate-400 mt-0.5">
                {ar ? "توابل، خضار، بذور، أعشاب" : "Spices, crops, seeds"}
              </p>
            </div>
          </div>
        </div>

        {/* Footer Disclaimer Strip */}
        <div className="mt-8 pt-4 border-t border-white/10 text-start text-[11px] text-slate-400">
          <span className="font-semibold text-amber-400">{ar ? "تنويه توثيقي: " : "Notice: "}</span>
          {ar ? TRADE_STATS.legalDisclaimerAr : TRADE_STATS.legalDisclaimerEn}
        </div>
      </div>
    </section>
  );
}

