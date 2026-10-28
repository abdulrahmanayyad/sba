import { Link } from "@tanstack/react-router";
import { 
  CheckCircle2, 
  Factory, 
  Layers, 
  ShieldCheck, 
  Shirt, 
  SlidersHorizontal, 
  Workflow, 
  ArrowRight,
  TrendingUp,
  Cpu
} from "lucide-react";

import { Reveal } from "@/components/home/reveal";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/language-context";
import { garmentProcessSteps, garmentAboutData } from "../garment-data";
import { cn } from "@/lib/utils";
import { AnimatedStatistic } from "@/components/site/animated-statistic";

import apparelImg from "@/assets/sector-apparel.jpg";
import homeTextile from "@/assets/home-textile.jpg";
import jzraCasual from "@/assets/jzra-summer-casual.jpg";

function SectionBadge({ title }: { title: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
      <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
      {title}
    </span>
  );
}

export function GarmentCapabilitiesTab() {
  const { language } = useLanguage();
  const ar = language === "AR";
  const { capabilities, infrastructure, productionVolume } = garmentAboutData;

  return (
    <div className="space-y-12 py-6">
      {/* Overview & Key Stats */}
      <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-6 md:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
        <Reveal>
          <div className="max-w-3xl">
            <SectionBadge title={ar ? "قدراتنا وإمكانياتنا الصناعية" : "Manufacturing Infrastructure"} />
            <h2 className="section-title mt-3">
              {ar ? "منظومة إنتاج متطورة مصممة للمرونة والنمو" : "Advanced Production Network Built for Scalability & Speed"}
            </h2>
            <p className="section-intro mt-4 text-justify [text-align-last:start]">
              {ar
                ? "تستند إمكاناتنا إلى بنية صناعية تجمع بين مصانع المجموعة وخطوط الإنتاج التخصصية والكوادر الماهرة، لتنفيذ برامج تصنيع دقيقة ومتطابقة مع المعايير الدولية."
                : "Our capabilities leverage an integrated industrial network of dedicated garment factories, specialized machinery, and master craftspeople tailored for demanding global apparel programs."}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.stats.map((stat, idx) => (
              <div 
                key={stat.labelEn} 
                className={cn(
                  "relative overflow-hidden rounded-2xl border border-border bg-card/60 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-brand-orange/40 hover:shadow-lg",
                  ar ? "text-right" : "text-left"
                )}
              >
                <div className="flex items-center justify-between mb-3">
                  <p className={cn(
                    "font-head text-3xl sm:text-4xl font-black text-brand-orange drop-shadow-sm tracking-tight",
                    ar ? "text-right" : "text-left"
                  )}>
                    <AnimatedStatistic value={stat.value} />
                  </p>
                  <span className="font-mono text-xs font-bold text-muted-foreground/70 border border-border/60 rounded-full px-2.5 py-0.5">
                    0{idx + 1}
                  </span>
                </div>
                <div className="mt-2 font-head text-base font-bold text-foreground">
                  {ar ? stat.labelAr : stat.labelEn}
                </div>
                <p className="mt-1 text-xs font-medium text-muted-foreground text-justify [text-align-last:start]">
                  {ar ? stat.descAr : stat.descEn}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* 10-Stage Structured Manufacturing Process */}
      <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-6 md:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
        <Reveal>
          <div>
            <SectionBadge title={ar ? "مراحل التصنيع المنظمة" : "Our Process"} />
            <h2 className="section-title mt-3">
              {ar ? "مسار واضح ومنضبط من الفكرة وحتى التصدير" : "A Disciplined 10-Stage Path From Concept to Global Delivery"}
            </h2>
            <p className="section-intro mt-4 max-w-2xl text-justify [text-align-last:start]">
              {ar
                ? "تتبع كافة طلبياتنا دورة تصنيع قياسية صارمة لضمان الالتزام بالمواصفات الفنية والجداول الزمنية."
                : "Every order follows an established ten-phase protocol ensuring technical compliance and milestone predictability."}
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {garmentProcessSteps.map((step) => (
              <div
                key={step.step}
                className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card/60 p-5 shadow-sm backdrop-blur-md transition hover:border-brand-orange/40 hover:shadow-md"
              >
                <div>
                  <span className="font-mono text-xl font-black text-brand-orange">
                    {step.step}
                  </span>
                  <h3 className="mt-2 font-head text-sm font-bold text-foreground group-hover:text-brand-orange transition">
                    {ar ? step.titleAr : step.titleEn}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground text-justify [text-align-last:start]">
                    {ar ? step.descAr : step.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Quality Control & Standards with Visual Image */}
      <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-6 md:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <SectionBadge title={ar ? "ضمان الجودة" : "Quality Assurance"} />
              <h3 className="section-title mt-3">
                {ar ? "الجودة مدمجة في كل خطوة وليست مجرد فحص أخير" : "Quality Built-In At Every Touchpoint"}
              </h3>
              <p className="section-intro mt-4 text-justify [text-align-last:start]">
                {ar
                  ? "نعتمد على متابعة الجودة خلال كافة المراحل: بدءًا من فحص الأقمشة والمقاسات والباترونات، مرورًا بالقص والخياطة والتشطيب، وصولًا إلى المظهر النهائي والملصقات والتعبئة. تُحدد معايير الفحص لكل مشروع وفق المواصفات الفنية المعتمدة من العميل."
                  : "Quality is monitored continuously: from raw textile and pattern audits to automated cutting, in-line sewing checks, steam finishing, labeling, and final carton packing against approved AQL benchmarks."}
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { en: "4-Point Fabric Inspection", ar: "فحص الأقمشة بنظام النقاط الأربعة" },
                  { en: "In-Line Sewing Tolerances Check", ar: "متابعة دقيقة لحدود السماح بالخياطة" },
                  { en: "Seam Strength & Wash Tests", ar: "اختبارات قوة الحياكة وثبات الغسيل" },
                  { en: "100% Pre-Pack Auditing", ar: "فحص شامل لكافة القطع قبل التعبئة" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 rounded-xl border border-border bg-card/60 p-3 text-xs sm:text-sm font-semibold text-foreground backdrop-blur-sm">
                    <ShieldCheck className="size-4 shrink-0 text-brand-orange" />
                    <span>{ar ? item.ar : item.en}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border shadow-lg lg:col-span-5">
              <img
                src={homeTextile}
                alt="Quality Assurance"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
