import { Link } from "@tanstack/react-router";
import {
  TrendingUp,
  BarChart3,
  ExternalLink,
  ShieldCheck,
  Building2,
  Utensils,
  Factory,
  ArrowUpRight,
  FileText
} from "lucide-react";
import { Reveal } from "@/components/home/reveal";
import { useLanguage } from "@/i18n/language-context";
import { ECONOMIC_INDICATORS, type EconomicIndicator } from "./legacy-data";

function getIndicatorIcon(id: string) {
  if (id.includes("exports")) {
    return <Factory className="size-5 text-brand-green" />;
  }
  if (id.includes("food")) {
    return <Utensils className="size-5 text-brand-orange" />;
  }
  return <Building2 className="size-5 text-brand-green" />;
}

export function EconomicIndicatorsWidget() {
  const { language } = useLanguage();
  const ar = language === "AR";

  return (
    <section className="w-full">
      <div className="rounded-3xl border border-white/20 bg-background/85 p-6 sm:p-10 shadow-lg backdrop-blur-xl">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8 pb-6 border-b border-border/60">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-green/30 bg-brand-green/10 px-3.5 py-1 text-xs font-bold text-brand-green-text mb-3">
              <BarChart3 className="size-3.5" />
              <span>{ar ? "مؤشرات السوق وتطور القطاعات" : "MARKET DATA & INDUSTRY INDICATORS"}</span>
            </div>
            <h3 className="text-center font-head text-2xl sm:text-3xl font-extrabold text-foreground leading-snug">
              {ar
                ? "مؤشرات نمو القطاعات الاقتصادية الموثقة (2010–2020)"
                : "Verified Economic & Sectoral Benchmarks (2010–2020)"}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {ar
                ? "بيانات اقتصادية وإحصائية موثقة استنادًا إلى تقارير منظمة التعاون الاقتصادي والتنمية (OECD) والبنك الأهلي المصري ومركز المعلومات ودعم اتخاذ القرار (IDSC)، تعكس التحولات الهيكلية للقطاعات المرتبطة بأنشطة المجموعة."
                : "Documented economic metrics from the OECD, National Bank of Egypt (NBE), and Egyptian Cabinet IDSC, tracking structural shifts across industrial sectors."}
            </p>
          </div>

          <div className="flex items-center gap-2 self-start lg:self-auto shrink-0 text-[11px] font-medium text-muted-foreground bg-secondary/60 px-3.5 py-2 rounded-xl border border-border">
            <ShieldCheck className="size-4 text-brand-green shrink-0" />
            <span>{ar ? "بيانات مرجعية خارجية محققة" : "Verified Third-Party Data"}</span>
          </div>
        </div>

        {/* 3 Indicator Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ECONOMIC_INDICATORS.map((ind) => (
            <div
              key={ind.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-background/90 p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:bg-background"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="size-10 rounded-xl bg-secondary flex items-center justify-center">
                    {getIndicatorIcon(ind.id)}
                  </div>
                  <span className="rounded-full bg-brand-orange/10 text-brand-orange border border-brand-orange/20 text-[10px] font-bold font-mono px-2.5 py-0.5">
                    {ar ? ind.changeLabelAr : ind.changeLabelEn}
                  </span>
                </div>

                <h4 className="font-head text-base font-bold text-foreground leading-snug group-hover:text-brand-green transition-colors">
                  {ar ? ind.titleAr : ind.titleEn}
                </h4>

                {/* Metrics Comparison Box */}
                <div className="mt-5 grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-secondary/60 border border-border/50">
                  <div>
                    <span className="text-[10px] font-mono font-medium text-muted-foreground block">
                      {ar ? "القيمة (2010)" : "Value (2010)"}
                    </span>
                    <span className="text-lg sm:text-xl font-black font-mono text-foreground mt-0.5 block">
                      {ind.metric2010}
                    </span>
                  </div>
                  <div className="border-s border-border/60 ps-3">
                    <span className="text-[10px] font-mono font-medium text-brand-green block">
                      {ar ? "القيمة (2020)" : "Value (2020)"}
                    </span>
                    <span className="text-lg sm:text-xl font-black font-mono text-brand-green mt-0.5 block">
                      {ind.metric2020}
                    </span>
                  </div>
                </div>

                {/* Significance Text */}
                <p className="mt-4 text-xs text-muted-foreground leading-relaxed text-justify">
                  <span className="font-semibold text-foreground">
                    {ar ? "الدلالة الاقتصادية: " : "Significance: "}
                  </span>
                  {ar ? ind.significanceAr : ind.significanceEn}
                </p>
              </div>

              {/* Source & Related Articles Footer */}
              <div className="mt-6 pt-4 border-t border-border/60 space-y-2">
                <div className="flex items-center justify-between gap-2 text-[11px] text-muted-foreground">
                  <span className="truncate font-medium">
                    {ar ? ind.sourceNameAr : ind.sourceNameEn}
                  </span>
                  {ind.sourceUrl && (
                    <a
                      href={ind.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-brand-green hover:text-brand-orange transition-colors shrink-0 font-bold"
                      title={ar ? "المصدر الأصلي" : "Original Source"}
                    >
                      <span>{ar ? "المصدر" : "Source"}</span>
                      <ExternalLink className="size-3" />
                    </a>
                  )}
                </div>

                {/* Linked Historical Articles */}
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  <span className="text-[10px] text-muted-foreground">
                    {ar ? "تحليلات ذات صلة:" : "Related Insights:"}
                  </span>
                  {ind.relatedArticleIds.map((artId) => (
                    <span
                      key={artId}
                      className="rounded bg-secondary px-1.5 py-0.5 text-[10px] font-mono text-foreground/80 font-bold"
                    >
                      #{artId.toUpperCase()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote on Data Responsibility */}
        <div className="mt-6 p-3 rounded-xl bg-secondary/40 border border-border/60 flex items-center gap-2 text-[11px] text-muted-foreground">
          <ShieldCheck className="size-4 text-brand-green shrink-0" />
          <span>
            {ar
              ? "تنويه توثيقي: هذه المؤشرات مأخوذة من مراجعات رسمية لمنظمة OECD والبنك الأهلي المصري ومركز المعلومات، ولا تمثل إحصاءات داخلية خاصة بمجموعة سامي بن عياد."
              : "Documentation Notice: These indicators are cited from official OECD, NBE, and IDSC reports and do not constitute proprietary data of Sami Bin Ayyad Group."}
          </span>
        </div>
      </div>
    </section>
  );
}

