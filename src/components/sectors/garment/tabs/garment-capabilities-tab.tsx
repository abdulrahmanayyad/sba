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

export function GarmentCapabilitiesTab() {
  const { language } = useLanguage();
  const ar = language === "AR";
  const { capabilities, infrastructure, productionVolume } = garmentAboutData;

  return (
    <div className="space-y-20 py-8">
      {/* Overview & Key Stats */}
      <Reveal>
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
            {ar ? "قدراتنا وإمكانياتنا الصناعية" : "Manufacturing Infrastructure & Capabilities"}
          </span>
          <h2 className="mt-2 font-head text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {ar ? "منظومة إنتاج متطورة مصممة للمرونة والنمو" : "Advanced Production Network Built for Scalability & Speed"}
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed sm:text-lg">
            {ar
              ? "تستند إمكاناتنا إلى بنية صناعية تجمع بين مصانع المجموعة وخطوط الإنتاج التخصصية والكوادر الماهرة، لتنفيذ برامج تصنيع دقيقة ومتطابقة مع المعايير الدولية."
              : "Our capabilities leverage an integrated industrial network of dedicated garment factories, specialized machinery, and master craftspeople tailored for demanding global apparel programs."}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.stats.map((stat) => (
            <div key={stat.labelEn} className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="font-mono text-3xl font-black text-brand-orange sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-2 font-head text-lg font-bold text-foreground">
                {ar ? stat.labelAr : stat.labelEn}
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                {ar ? stat.descAr : stat.descEn}
              </p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Dedicated Classic Shirt Facility Showcase */}
      <section className="rounded-3xl border-2 border-brand-orange/30 bg-card p-6 md:p-10 shadow-sm">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-brand-orange/10 text-brand-orange">
                  <Shirt className="size-6" />
                </div>
                <div>
                  <span className="font-mono text-xs font-bold text-brand-orange">
                    {ar ? "مصنع تخصصي للقمصان" : "DEDICATED SHIRTMAKING FACILITY"}
                  </span>
                  <h3 className="font-head text-2xl font-bold text-foreground sm:text-3xl">
                    {ar ? productionVolume.classicShirtUnit.titleAr : productionVolume.classicShirtUnit.title}
                  </h3>
                </div>
              </div>

              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {ar ? productionVolume.classicShirtUnit.descAr : productionVolume.classicShirtUnit.desc}
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {productionVolume.classicShirtUnit.features.map((feat) => (
                  <div key={feat.en} className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <CheckCircle2 className="size-4 shrink-0 text-brand-orange" />
                    <span>{ar ? feat.ar : feat.en}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-secondary/60 p-6 text-center lg:w-72 shrink-0">
              <span className="font-mono text-4xl font-extrabold text-brand-orange">
                30,000
              </span>
              <span className="mt-1 font-head text-sm font-bold text-foreground">
                {ar ? "قميص شهريًا" : "Classic Shirts / Mo"}
              </span>
              <p className="mt-2 text-xs text-muted-foreground">
                {ar ? "100 ماكينة متخصصة وخط إنتاج مخصص للقمصان الكلاسيك" : "100 dedicated machines & specialized production line"}
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 10-Stage Structured Manufacturing Process */}
      <section className="space-y-8">
        <Reveal>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
              {ar ? "مراحل التصنيع المنظمة" : "Our Structured Manufacturing Process"}
            </span>
            <h2 className="mt-2 font-head text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {ar ? "مسار واضح ومنضبط من الفكرة وحتى التصدير" : "A Disciplined 10-Stage Path From Concept to Global Delivery"}
            </h2>
            <p className="mt-3 max-w-2xl text-base text-muted-foreground">
              {ar
                ? "تتبع كافة طلبياتنا دورة تصنيع قياسية صارمة لضمان الالتزام بالمواصفات الفنية والجداول الزمنية."
                : "Every order follows an established ten-phase protocol ensuring technical compliance and milestone predictability."}
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {garmentProcessSteps.map((step) => (
              <div
                key={step.step}
                className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-5 shadow-sm transition hover:border-brand-orange/40 hover:shadow-md"
              >
                <div>
                  <span className="font-mono text-xl font-black text-brand-orange/80">
                    {step.step}
                  </span>
                  <h3 className="mt-2 font-head text-base font-bold text-foreground group-hover:text-brand-orange transition">
                    {ar ? step.titleAr : step.titleEn}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {ar ? step.descAr : step.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Quality Control & Standards */}
      <section className="rounded-3xl border border-border bg-secondary/50 p-6 md:p-10">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                {ar ? "ضمان الجودة" : "Quality Assurance"}
              </span>
              <h3 className="mt-2 font-head text-3xl font-bold text-foreground">
                {ar ? "الجودة مدمجة في كل خطوة وليست مجرد فحص أخير" : "Quality Built-In At Every Touchpoint"}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
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
                  <div key={idx} className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <ShieldCheck className="size-4 shrink-0 text-brand-orange" />
                    <span>{ar ? item.ar : item.en}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm lg:col-span-5">
              <h4 className="font-head text-lg font-bold text-foreground">
                {ar ? "مرونة الحد الأدنى للطلب (MOQ)" : "Flexible Order Quantities (MOQ)"}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {ar
                  ? "نحن نؤمن بأن الحد الأدنى للطلب يجب أن يتحدد وفق طبيعة المنتج ونوع القماش والمواصفات الفنية، وليس برقم جامد. يتيح نموذجنا المرن دعم العلامات التجارية الصاعدة والطلبيات التجريبية بجانب الإنتاج الكمي الضخم."
                  : "We believe minimum order quantities should adapt to garment complexity and fabric availability rather than rigid universal numbers. Our flexible model supports both emerging capsules and high-volume rollouts."}
              </p>

              <div className="mt-6 border-t border-border pt-4">
                <Button asChild variant="primary" size="lg" className="w-full">
                  <Link to="/sectors/$sector" params={{ sector: "garment" }} search={{ tab: "join" }}>
                    {ar ? "اطلب دراسة لتشغيلتك القادمة" : "Inquire About Your Production Run"}
                    <ArrowRight className="size-4 ms-2 rtl:rotate-180" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
