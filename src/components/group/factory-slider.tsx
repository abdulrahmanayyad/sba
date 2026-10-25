import { ChevronLeft, ChevronRight, Pause, Play, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

import { Reveal } from "@/components/home/reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FactoryStep {
  step: string;
  image: string;
  titleEn: string;
  titleAr: string;
  descEn: string;
  descAr: string;
  tagEn: string;
  tagAr: string;
}

const factorySteps: FactoryStep[] = [
  {
    step: "01",
    image: "/factory/slide-01.jpg",
    titleEn: "Fabric Inspection & Spreading",
    titleAr: "استلام وفحص الأقمشة وفرز الخامات",
    descEn: "Initial lab testing and rolling of raw fabrics to verify weight, texture, stretch, and colorfastness before production begins.",
    descAr: "فحص الأقمشة المعملي والتأكد من مطابقة الوزن والملمس واللون لمتطلبات الجودة قبل بدء مراحل التشغيل.",
    tagEn: "Preparation Stage",
    tagAr: "مرحلة التجهيز والفرز",
  },
  {
    step: "02",
    image: "/factory/slide-04.jpg",
    titleEn: "CAD Pattern Engineering & Automatic Cutting",
    titleAr: "هندسة الباترون والقص الآلي الدقيق",
    descEn: "Computer-aided marker optimization and high-precision cutting machines ensuring zero waste and exact pattern replication.",
    descAr: "برمجة الباترون هندسيًا عبر الحاسب الآلي واستخدام مقصات آلية عالية الدقة تضمن تطابق المقاسات تمامًا.",
    tagEn: "Cutting Department",
    tagAr: "قسم القص الآلي",
  },
  {
    step: "03",
    image: "/factory/slide-08.jpg",
    titleEn: "Specialized Sewing Lines Assembly",
    titleAr: "خطوط الحياكة والتجميع الآلي المتخصصة",
    descEn: "Multi-line progressive assembly lines equipped with modern Juki & Brother automated sewing stations for consistent seam strength.",
    descAr: "خطوط تجميع متتابعة مجهزة بأحدث ماكينات الخياطة الآلية لضمان متانة الدرزات وسرعة الإنتاج.",
    tagEn: "Sewing Operations",
    tagAr: "عمليات التجميع والحياكة",
  },
  {
    step: "04",
    image: "/factory/slide-12.jpg",
    titleEn: "Collars, Cuffs & Technical Detailing",
    titleAr: "تركيب الياقات والأساور والتفاصيل الدقيقة",
    descEn: "Specialized stations for buttonholing, pocket setting, cuff attachment, and branded embroidery with micro-precision.",
    descAr: "محطات مخصصة لفتح وتركيب الأزرار، والجيوب، والياقات، والأساور، والتطريز الدقيق لشعار العلامة التجارية.",
    tagEn: "Detailing & Trim",
    tagAr: "التركيبات والتشطيب",
  },
  {
    step: "05",
    image: "/factory/slide-18.jpg",
    titleEn: "Industrial Steam Pressing & Thermal Finishing",
    titleAr: "الكي بالبخار والتشطيب الحراري النهائي",
    descEn: "High-pressure boiler steam presses and form finishers to shape the garments perfectly while eliminating any fabric tension.",
    descAr: "مكابس بخار صناعية متطورة تمنح الملابس مظهرها الأنيق النهائي وتزيل أي انكماش أو توتر في النسيج.",
    tagEn: "Pressing & Ironing",
    tagAr: "الكي والتشطيب الحراري",
  },
  {
    step: "06",
    image: "/factory/slide-24.jpg",
    titleEn: "Rigorous In-Line & Final Quality Control (AQL 1.5)",
    titleAr: "الفحص ومراقبة الجودة الشاملة (AQL 1.5)",
    descEn: "100% individual inspection against customer tech packs, verifying measurements, stitching, shade matching, and clean threads.",
    descAr: "فحص قطعي شامل بنسبة 100% لمطابقة القياسات، ونظافة الخياطة، وسلامة المظهر مع جدول المواصفات الفنية.",
    tagEn: "Quality Assurance",
    tagAr: "ضمان الجودة",
  },
  {
    step: "07",
    image: "/factory/slide-30.jpg",
    titleEn: "Folding, Tagging & Polybagging",
    titleAr: "الطي، وضع التيكت، والتعبئة الفردية",
    descEn: "Standardized fold dimensions, barcode label application, silica gel insertion, and individual sealed polybagging.",
    descAr: "طي الموديلات بمقاسات معيارية موحدة، وتثبيت بطاقات الباركود والأسعار، والتعبئة في أكياس حماية معزولة.",
    tagEn: "Packaging Unit",
    tagAr: "وحدة التعبئة والتغليف",
  },
  {
    step: "08",
    image: "/factory/slide-36.jpg",
    titleEn: "Carton Packing & Ready for Global Export",
    titleAr: "التعبئة الكرتونية والجاهزية للتصدير الدولي",
    descEn: "Heavy-duty 5-ply export carton packing, moisture-sealed palletization, and dispatch ready for European and Arab markets.",
    descAr: "رص وتعبئة الكراتين التصديرية المعالجة ضد الرطوبة وتجهيز الطبالي للشحن البري والبحري للأسواق الدولية.",
    tagEn: "Export Logistics",
    tagAr: "اللوجستيات والشحن",
  },
];

export function FactorySlider({ ar }: { ar: boolean }) {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % factorySteps.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? factorySteps.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % factorySteps.length);
  };

  const active = factorySteps[current]!;


  return (
    <section className="site-container section-band">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="eyebrow">{ar ? "مصنع الملابس الجاهزة · مراحل الإنتاج" : "Garment Manufacturing Facility"}</p>
        <h2 className="section-title mt-2">{ar ? "نظرة عامة على المصنع — Factory Overview" : "Factory Overview"}</h2>
        <p className="section-intro mx-auto mt-4 max-w-2xl">
          {ar
            ? "جولة مرئية تسلسلية داخل خطوط إنتاج مصنعنا، من مرحلة قص وفحص الأقمشة إلى الحياكة المتطورة ومراقبة الجودة والتعبئة للتصدير."
            : "A sequential visual walkthrough across our apparel production lines, from precision cutting to high-speed sewing, quality auditing, and export packing."}
        </p>
      </Reveal>

      {/* Main Slider Container */}
      <div
        className="mt-10 overflow-hidden rounded-3xl border border-border bg-secondary/50 shadow-xl"
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
      >
        <div className="grid lg:grid-cols-12 lg:items-stretch">
          {/* Uniform Aspect Ratio Photo (16:9) */}
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/30 lg:col-span-7 xl:col-span-8">
            <img
              src={active.image}
              alt={ar ? active.titleAr : active.titleEn}
              className="size-full object-cover transition-all duration-700 hover:scale-105"
            />
            {/* Step badge overlay */}
            <div className="absolute start-4 top-4 flex items-center gap-2 rounded-full bg-black/60 px-3.5 py-1.5 backdrop-blur-md">
              <span className="font-mono text-xs font-bold text-brand-orange-text">
                {ar ? `المرحلة ${active.step} / 08` : `Step ${active.step} / 08`}
              </span>
            </div>

            {/* Department tag overlay */}
            <div className="absolute bottom-4 start-4 flex items-center gap-2 rounded-full bg-black/60 px-3.5 py-1.5 backdrop-blur-md">
              <Sparkles className="size-3.5 text-brand-green-text" />
              <span className="font-mono text-xs text-white/90">
                {ar ? active.tagAr : active.tagEn}
              </span>
            </div>
          </div>

          {/* Step Information & Controls */}
          <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-5 xl:col-span-4 bg-background">
            <div>
              <div className="flex items-center justify-between border-b border-border pb-4">
                <span className="font-mono text-2xl font-bold text-brand-orange-text">{active.step}</span>
                <span className="rounded-full bg-brand-green/10 px-3 py-1 font-mono text-[11px] font-semibold text-brand-green-text">
                  {ar ? active.tagAr : active.tagEn}
                </span>
              </div>

              <h3 className="mt-5 font-head text-xl font-bold leading-snug sm:text-2xl text-foreground">
                {ar ? active.titleAr : active.titleEn}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {ar ? active.descAr : active.descEn}
              </p>
            </div>

            {/* Controls */}
            <div className="mt-8 border-t border-border pt-6">
              <div className="flex items-center justify-between">
                {/* Progress Indicators */}
                <div className="flex items-center gap-1.5">
                  {factorySteps.map((s, idx) => (
                    <button
                      key={s.step}
                      type="button"
                      aria-label={`Go to slide ${idx + 1}`}
                      onClick={() => setCurrent(idx)}
                      className={cn(
                        "h-2 rounded-full transition-all",
                        idx === current ? "w-7 bg-primary" : "w-2 bg-border hover:bg-muted-foreground"
                      )}
                    />
                  ))}
                </div>

                {/* Arrows and Play/Pause */}
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="size-9 rounded-full"
                    aria-label={isPlaying ? "Pause autoplay" : "Resume autoplay"}
                    onClick={() => setIsPlaying((p) => !p)}
                  >
                    {isPlaying ? <Pause className="size-4" /> : <Play className="size-4" />}
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="size-9 rounded-full"
                    aria-label="Previous step"
                    onClick={prevSlide}
                  >
                    <ChevronLeft className="size-4 rtl:rotate-180" />
                  </Button>
                  <Button
                    variant="default"
                    size="icon"
                    className="size-9 rounded-full"
                    aria-label="Next step"
                    onClick={nextSlide}
                  >
                    <ChevronRight className="size-4 rtl:rotate-180" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Step Selector Strip */}
      <div className="no-scrollbar mt-4 flex gap-2 overflow-x-auto pb-2">
        {factorySteps.map((step, idx) => {
          const isSelected = idx === current;
          return (
            <button
              key={step.step}
              type="button"
              onClick={() => setCurrent(idx)}
              className={cn(
                "flex shrink-0 items-center gap-2 rounded-xl border px-3.5 py-2 text-xs font-semibold transition-all",
                isSelected
                  ? "border-primary bg-primary text-primary-foreground shadow-sm"
                  : "border-border bg-card text-muted-foreground hover:bg-secondary hover:text-foreground"
              )}
            >
              <span className="font-mono">{step.step}.</span>
              <span>{ar ? step.titleAr.split(" ")[0] + " " + (step.titleAr.split(" ")[1] || "") : step.titleEn}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
