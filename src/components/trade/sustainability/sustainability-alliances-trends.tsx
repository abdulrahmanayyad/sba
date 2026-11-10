import React from "react";
import { Handshake, TrendingUp, AlertTriangle, ShieldCheck, Sparkles } from "lucide-react";
import { 
  SUSTAINABILITY_STRATEGIC_ALLIANCES, 
  SUSTAINABILITY_MARKET_TRENDS 
} from "@/lib/sustainability-trade-data";

interface SustainabilityAlliancesTrendsProps {
  ar?: boolean;
}

export function SustainabilityAlliancesTrends({ ar = true }: SustainabilityAlliancesTrendsProps) {
  return (
    <div id="alliances-trends" className="interactive-card glass-box-interactive w-full rounded-3xl p-6 sm:p-8 space-y-8 shadow-xl backdrop-blur-2xl transition-all duration-300">
      {/* 1. Strategic Alliances (Section 11) */}
      <div className="space-y-6">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md shadow-xs">
            <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
            <span>{ar ? "القسم الحادي عشر: الشراكات والتحالفات الاستراتيجية" : "Section 11: Strategic Partnerships & Alliances"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-foreground mt-0.5 leading-snug">
            {ar ? "نماذج التحالفات الاستراتيجية والشراكات التقنية" : "Strategic Alliances & Technical Consortium Frameworks"}
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed max-w-4xl">
            {ar
              ? "نعتمد في تنفيذ المشاريع البيئية الكبرى على هيكلة تحالفات متكاملة تجمع بين الخبرة المحلية الميدانية، والقدرات الهندسية المرخصة، والتقنيات العالمية المتطورة."
              : "We structure strategic consortiums combining ground execution capabilities, certified engineering, and international green technology licensors."}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {SUSTAINABILITY_STRATEGIC_ALLIANCES.map((alliance, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-white/15 bg-background/70 p-5 sm:p-6 backdrop-blur-xl shadow-lg space-y-3.5 hover:border-brand-green/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-2.5">
                <div className="p-3 rounded-2xl bg-brand-green/10 border border-brand-green/30 text-brand-green w-fit">
                  <Handshake className="size-5" />
                </div>
                <h3 className="text-base font-bold text-foreground">
                  {ar ? alliance.categoryAr : alliance.categoryEn}
                </h3>
                <p className="text-xs text-foreground/80 leading-relaxed">
                  {ar ? alliance.descriptionAr : alliance.descriptionEn}
                </p>
              </div>

              <div className="rounded-2xl border border-white/5 bg-secondary/40 p-3 text-xs space-y-1">
                <span className="font-bold text-foreground block text-[11px]">
                  {ar ? "أبرز أطراف التحالف المستهدفين:" : "Target Consortium Partners:"}
                </span>
                <span className="text-muted-foreground">{ar ? alliance.partnerTypesAr : alliance.partnerTypesEn}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-border/40 dark:border-white/10" />

      {/* 2. Market Trends & Environmental Transition (Section 12) */}
      <div className="space-y-6">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md shadow-xs">
            <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
            <span>{ar ? "القسم الثاني عشر: اتجاهات السوق والتحولات البيئية" : "Section 12: Market Trends & Environmental Transition"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-foreground mt-0.5 leading-snug">
            {ar ? "اتجاهات السوق الإقليمية ومتطلبات التحول الأخضر" : "Market Trends & Industrial Environmental Transition"}
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed max-w-4xl">
            {ar
              ? "تحليل العوامل التشريعية والاقتصادية العالمية التي تقود التحول نحو الاستدامة وإدارة المخلفات وترشيد الطاقة والمياه في المنطقة."
              : "Analysis of global legislative and market dynamics accelerating green transition, circular economy, and water optimization across the region."}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {SUSTAINABILITY_MARKET_TRENDS.map((trend, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-white/15 bg-background/70 p-5 sm:p-6 backdrop-blur-xl shadow-lg space-y-3 hover:border-brand-green/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-brand-orange">
                    <TrendingUp className="size-4" />
                    <span className="text-xs font-bold">{ar ? "محرك سوقي مؤثر" : "Key Market Driver"}</span>
                  </div>
                  <span className="rounded-full bg-amber-500/15 border border-amber-500/30 px-2.5 py-0.5 text-[10px] font-bold text-amber-600 dark:text-amber-400">
                    {ar ? trend.urgencyAr : trend.urgencyEn}
                  </span>
                </div>

                <h4 className="text-base font-bold text-foreground leading-snug">
                  {ar ? trend.trendAr : trend.trendEn}
                </h4>

                <p className="text-xs text-foreground/80 leading-relaxed">
                  {ar ? trend.impactAr : trend.impactEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

