import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Data                                                                */
/* ------------------------------------------------------------------ */

interface ShowcaseTab {
  id: string;
  labelEn: string;
  labelAr: string;
  headlineEn: string;
  headlineAr: string;
  subtitleEn: string;
  subtitleAr: string;
  bodyEn: string;
  bodyAr: string;
  pillsEn: string[];
  pillsAr: string[];
  href: string;
  ctaEn: string;
  ctaAr: string;
}

const tabs: ShowcaseTab[] = [
  {
    id: "contracting",
    labelEn: "Contracting & Construction",
    labelAr: "المقاولات والإنشاءات",
    headlineEn: "Contracting, Construction & Real Estate Development",
    headlineAr: "المقاولات والإنشاءات والتطوير العقاري",
    subtitleEn: "Integrated Solutions for Construction & Property Development",
    subtitleAr: "حلول متكاملة لتنفيذ المشروعات وتطوير المباني",
    bodyEn:
      "Delivering turnkey solutions across general contracting, infrastructure, finishing works, electromechanical systems, and healthcare installations with a documented execution track record.",
    bodyAr:
      "تنفيذ متكامل لمشروعات المقاولات العامة والإنشاءات والتطوير العقاري والتشطيبات، مدعومة بسجل مشروعات موثق يغطي المنشآت الطبية والسكنية والتجارية والصناعية والبترولية.",
    pillsEn: ["General Contracting", "MEP Engineering", "Healthcare Fit-Out", "Real Estate Development", "Civil Works"],
    pillsAr: ["المقاولات العامة", "أنظمة MEP الهندسية", "تجهيزات طبية", "التطوير العقاري", "الأعمال المدنية"],
    href: "/sectors/construction",
    ctaEn: "Explore Our Projects",
    ctaAr: "استكشف المشروعات",
  },
  {
    id: "environment",
    labelEn: "Environment & Sustainability",
    labelAr: "البيئة والاستدامة",
    headlineEn: "Sustainable Environment",
    headlineAr: "البيئة المستدامة",
    subtitleEn: "Integrated environmental solutions that turn challenges into sustainable opportunities.",
    subtitleAr: "حلول بيئية متكاملة تحول التحديات إلى فرص مستدامة",
    bodyEn:
      "Integrated advisory and engineering solutions in environmental impact assessments (EIA/ESIA), waste management, resource recovery, water and wastewater treatment, renewable energy, and sustainability compliance.",
    bodyAr:
      "حلول واستشارات هندسية متكاملة في تقييم الأثر البيئي، وإدارة المخلفات وتحويلها إلى قيمة، ومعالجة المياه والصرف، والطاقة المتجددة، ومعايير الاستدامة والامتثال البيئي.",
    pillsEn: ["EIA / ESIA Studies", "Resource Recovery", "Water Treatment", "Renewable Energy", "Circular Economy"],
    pillsAr: ["دراسات الأثر البيئي", "استرداد الموارد", "معالجة المياه والصرف", "الطاقة المتجددة", "الاقتصاد الدائري"],
    href: "/sectors/environmental",
    ctaEn: "Explore Environmental Solutions",
    ctaAr: "استكشف الحلول البيئية",
  },
  {
    id: "garment",
    labelEn: "Garment Manufacturing",
    labelAr: "تصنيع الملابس",
    headlineEn: "Garment Manufacturing & Fashion Development",
    headlineAr: "تصنيع الملابس وتطوير الأزياء",
    subtitleEn: "Integrated Manufacturing for Brands & Global Markets",
    subtitleAr: "حلول تصنيع متكاملة للعلامات التجارية والأسواق العالمية",
    bodyEn:
      "Integrated garment manufacturing spanning pattern engineering, sampling, modern production lines, classic shirt specialization, private label, and global FOB export programs.",
    bodyAr:
      "حلول تصنيع متكاملة للملابس الجاهزة تشمل تطوير المنتجات والباترونات، والإنتاج على خطوط متقدمة، وتصنيع القمصان الكلاسيك، وبرامج العلامات الخاصة والتصدير بنظام FOB.",
    pillsEn: ["Private Label & FOB", "Women's & Men's Apparel", "Children's Wear", "Classic Shirts", "AQL Quality Control"],
    pillsAr: ["العلامات الخاصة وFOB", "ملابس حريمي ورجالي", "ملابس الأطفال", "القمصان الكلاسيك", "مراقبة الجودة AQL"],
    href: "/sectors/garment",
    ctaEn: "Explore Manufacturing",
    ctaAr: "استكشف التصنيع",
  },
  {
    id: "natural",
    labelEn: "Food & Natural Products",
    labelAr: "الأغذية والمنتجات الطبيعية",
    headlineEn: "Food & Natural Products",
    headlineAr: "الأغذية والمنتجات الطبيعية",
    subtitleEn: "From Nature’s Finest to Global Markets",
    subtitleAr: "من خيرات الطبيعة إلى الأسواق العالمية",
    bodyEn:
      "Curating and marketing premium natural food products: pure bee honey, extra-virgin olive oil, premium date selections, aromatic herbs, spices, and natural beverage products.",
    bodyAr:
      "توفير وتسويق منتجات غذائية طبيعية مختارة بعناية: عسل النحل النقي، زيت الزيتون البكر، أصناف التمور الفاخرة، الأعشاب والتوابل العطرية، ومشروبات العصائر البودر الطبيعية.",
    pillsEn: ["Pure Honey & Royal Jelly", "Extra-Virgin Olive Oil", "Premium Dates", "Herbs & Spices", "Natural Beverages"],
    pillsAr: ["عسل النحل وغذاء الملكات", "زيت الزيتون البكر", "التمور الفاخرة", "الأعشاب والتوابل", "المشروبات الطبيعية"],
    href: "/sectors/food",
    ctaEn: "Discover Natural Products",
    ctaAr: "استكشف المنتجات الطبيعية",
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                           */
/* ------------------------------------------------------------------ */

export function SectorsShowcase({ ar }: { ar: boolean }) {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const switchTab = (idx: number) => {
    if (idx === active) return;
    setAnimating(true);
    setTimeout(() => {
      setActive(idx);
      setAnimating(false);
    }, 200);
  };

  const current = tabs[active]!;

  return (
    <section
      id="sectors-showcase"
      aria-label={ar ? "نظرة عامة على القطاعات" : "Sectors Overview"}
      className="relative px-4 py-12 text-foreground"
    >
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-6 md:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
        <div className="grid gap-10 lg:grid-cols-[minmax(280px,360px)_1fr] lg:gap-16">

          {/* ── LEFT: Tab Navigation + CTA ── */}
          <div className="flex flex-col lg:border-e lg:border-border/60 lg:pe-10">
            {/* Title / Eyebrow */}
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
                <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
                {ar ? "نظرة عامة على القطاعات" : "Sectors Overview"}
              </span>
            </div>

            {/* Tab list */}
            <nav role="tablist" aria-label={ar ? "القطاعات" : "Sectors"} className="flex flex-col gap-2">
              {tabs.map((tab, idx) => {
                const isActive = idx === active;
                return (
                  <button
                    key={tab.id}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`showcase-panel-${tab.id}`}
                    id={`showcase-tab-${tab.id}`}
                    type="button"
                    onClick={() => switchTab(idx)}
                    className={cn(
                      "group relative flex items-center justify-between gap-4 rounded-xl px-4 py-4 text-start transition-all duration-300",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/50",
                      isActive
                        ? "bg-brand-green/10 text-brand-green shadow-sm backdrop-blur-md border border-brand-green/30"
                        : "text-foreground/75 hover:bg-secondary hover:text-foreground border border-transparent"
                    )}
                  >
                    <span
                      className={cn(
                        "font-head transition-all duration-300",
                        isActive
                          ? "text-lg text-brand-green font-bold"
                          : "text-base text-foreground/80 font-semibold"
                      )}
                    >
                      {ar ? tab.labelAr : tab.labelEn}
                    </span>

                    <span
                      className={cn(
                        "flex size-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                        isActive
                          ? "border-brand-orange/80 bg-brand-orange text-white opacity-100 scale-100"
                          : "border-border text-foreground/40 opacity-0 group-hover:opacity-80 scale-90"
                      )}
                    >
                      <ArrowUpRight className="size-3.5 rtl:rotate-90" />
                    </span>
                  </button>
                );
              })}
            </nav>

            {/* Contact CTA */}
            <div className="mt-10 pt-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-brand-green px-6 py-3 font-head text-sm font-bold text-white shadow-lg transition-all duration-300 hover:bg-brand-orange hover:shadow-brand-orange/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                <span>{ar ? "تواصل معنا" : "Contact Us"}</span>
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:rotate-90" />
              </Link>
            </div>
          </div>

          {/* ── RIGHT: Active Sector Liquid Glass Card ── */}
          <div
            id={`showcase-panel-${current.id}`}
            role="tabpanel"
            aria-labelledby={`showcase-tab-${current.id}`}
            ref={contentRef}
            className={cn(
              "flex flex-col justify-between rounded-2xl border border-border/80 bg-secondary/40 p-8 md:p-12 shadow-sm backdrop-blur-xl transition-all duration-300",
              animating ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
            )}
            style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            <div className="space-y-5">
              {/* Main Headline */}
              <h2 className="font-head font-bold leading-tight text-foreground text-2xl sm:text-3xl md:text-4xl">
                {ar ? current.headlineAr : current.headlineEn}
              </h2>

              {/* Subtitle */}
              <p className="text-base md:text-lg font-bold text-brand-orange">
                {ar ? current.subtitleAr : current.subtitleEn}
              </p>

              {/* Body */}
              <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground font-medium sm:text-base text-justify [text-align-last:start]">
                {ar ? current.bodyAr : current.bodyEn}
              </p>

              {/* Pills / Capabilities */}
              <div className="flex flex-wrap gap-2 pt-2">
                {(ar ? current.pillsAr : current.pillsEn).map((pill) => (
                  <span
                    key={pill}
                    className="rounded-full border border-border/70 bg-background/80 px-4 py-1.5 text-xs font-semibold text-foreground backdrop-blur-md shadow-xs transition-colors duration-200 hover:border-brand-orange/50 hover:text-brand-orange"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            {/* Explore CTA */}
            <div className="mt-8 pt-6 border-t border-border/60 flex items-center justify-start">
              <Link
                to={current.href}
                className="group relative inline-flex items-center justify-center gap-2 rounded-full !bg-brand-green !text-white px-6 py-2.5 font-head text-sm font-bold shadow-lg transition-all duration-300 hover:!bg-brand-orange hover:shadow-brand-orange/30 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/50 cursor-pointer"
              >
                <span>{ar ? current.ctaAr : current.ctaEn}</span>
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:rotate-90 rtl:group-hover:-translate-x-0.5" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
