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
    labelEn: "Contracting",
    labelAr: "المقاولات",
    headlineEn: "Building Tomorrow's Infrastructure, Today",
    headlineAr: "نبني بنية تحتية المستقبل اليوم",
    bodyEn:
      "From large-scale residential and commercial developments to specialized healthcare facilities and oil & gas civil works — SAMI BIN AYYAD GROUP Contracting delivers end-to-end project execution with documented precision, spanning 57+ completed projects and EGP 400M+ in recorded value.",
    bodyAr:
      "من المشروعات السكنية والتجارية الكبرى إلى المنشآت الصحية المتخصصة وأعمال البترول والغاز المدنية — تنفذ مجموعة سامي بن عياد للمقاولات مشروعاتها بدقة موثقة، بسجل يضم أكثر من 57 مشروعًا مكتملًا وأكثر من 400 مليون جنيه قيمة مسجلة.",
    pillsEn: ["General Contracting", "MEP Systems", "Healthcare Fit-Out", "Real Estate Development", "Oil & Gas Civil Works"],
    pillsAr: ["المقاولات العامة", "أنظمة MEP", "تجهيزات طبية", "التطوير العقاري", "أعمال البترول والغاز المدنية"],
    href: "/sectors/construction",
    ctaEn: "Explore Projects",
    ctaAr: "استكشف المشروعات",
  },
  {
    id: "environment",
    labelEn: "Environment",
    labelAr: "البيئة",
    headlineEn: "Turning Environmental Challenges into Sustainable Opportunities",
    headlineAr: "تحويل التحديات البيئية إلى فرص مستدامة",
    bodyEn:
      "ENVIROTAQA delivers integrated advisory and technical solutions in environmental impact assessment, waste-to-value, water treatment, renewable energy, and HSE compliance — helping businesses meet regulatory standards while driving sustainable performance.",
    bodyAr:
      "تقدم إنفيروتاقة حلولًا متكاملة في تقييم الأثر البيئي، وتحويل المخلفات إلى قيمة، ومعالجة المياه، والطاقة المتجددة، والامتثال لمعايير السلامة — مساعدةً الشركات على تحقيق المتطلبات التنظيمية مع تعزيز الأداء المستدام.",
    pillsEn: ["EIA / ESIA Studies", "Waste-to-Energy", "Water Treatment", "Renewable Energy", "HSE & QHSE"],
    pillsAr: ["دراسات تقييم الأثر البيئي", "الطاقة من المخلفات", "معالجة المياه", "الطاقة المتجددة", "السلامة والامتثال"],
    href: "/sectors/environmental",
    ctaEn: "Explore Solutions",
    ctaAr: "استكشف الحلول",
  },
  {
    id: "garment",
    labelEn: "Garment",
    labelAr: "الملابس",
    headlineEn: "Integrated Garment Manufacturing at Global Scale",
    headlineAr: "تصنيع ملابس متكامل على نطاق عالمي",
    bodyEn:
      "From pattern engineering to export-ready packaging — our garment division operates 15+ production lines, 250+ specialized machines, and 400+ workers producing 100,000+ garments monthly across women's, men's, and children's categories for brands and wholesale buyers worldwide.",
    bodyAr:
      "من هندسة الباترونات إلى التعبئة الجاهزة للتصدير — يضم قطاع الملابس لدينا أكثر من 15 خط إنتاج و250 ماكينة متخصصة و400 عامل ينتجون أكثر من 100,000 قطعة شهريًا في الملابس الحريمي والرجالي والأطفالي للعلامات التجارية ومشتري الجملة عالميًا.",
    pillsEn: ["Private Label & FOB", "Women's & Men's Wear", "Children's Fashion", "Classic Shirts", "Quality Control (AQL)"],
    pillsAr: ["العلامات الخاصة وFOB", "الحريمي والرجالي", "ملابس الأطفال", "القمصان الكلاسيك", "مراقبة الجودة AQL"],
    href: "/sectors/garment",
    ctaEn: "Explore Manufacturing",
    ctaAr: "استكشف التصنيع",
  },
  {
    id: "natural",
    labelEn: "Natural Products",
    labelAr: "المنتجات الطبيعية",
    headlineEn: "From Nature's Finest to Global Markets",
    headlineAr: "من خيرات الطبيعة إلى الأسواق العالمية",
    bodyEn:
      "We source and market a curated portfolio of premium natural foods — pure honey and bee products, extra-virgin olive oil, Sukkari and Medjool dates, aromatic herbs and spices, and natural powdered juice beverages — connecting nature's best with international trade networks.",
    bodyAr:
      "نوفّر ونسوّق مجموعة مختارة من أفضل الأغذية الطبيعية — العسل الخالص ومنتجات النحل، وزيت الزيتون البكر الممتاز، وتمور السكري والمجدول، والأعشاب والتوابل العطرية، وعصائر البودر الطبيعية — ربطًا بين خيرات الطبيعة وشبكات التجارة الدولية.",
    pillsEn: ["Honey & Bee Products", "Olive Oil", "Premium Dates", "Herbs & Spices", "Natural Beverages"],
    pillsAr: ["العسل ومنتجات النحل", "زيت الزيتون", "التمور الفاخرة", "الأعشاب والتوابل", "العصائر الطبيعية"],
    href: "/sectors/food",
    ctaEn: "Discover Products",
    ctaAr: "اكتشف المنتجات",
  },
  {
    id: "sustainability",
    labelEn: "Sustainability",
    labelAr: "الاستدامة",
    headlineEn: "One Vision. Four Sectors. Lasting Value.",
    headlineAr: "رؤية واحدة. أربعة قطاعات. قيمة دائمة.",
    bodyEn:
      "Sustainability is the thread connecting all our divisions. From eco-conscious construction methods and carbon-footprint monitoring, to environmentally responsible manufacturing, regenerative agriculture supply chains, and green energy consulting — we embed responsible practices across every sector we operate in.",
    bodyAr:
      "الاستدامة هي الخيط الجامع لجميع قطاعاتنا. من أساليب البناء الصديقة للبيئة ورصد البصمة الكربونية، إلى التصنيع المسؤول بيئيًا وسلاسل التوريد الزراعية المتجددة والاستشارات في الطاقة الخضراء — نُدرج الممارسات المسؤولة في كل قطاع نعمل فيه.",
    pillsEn: ["Green Construction", "Carbon Monitoring", "Circular Economy", "Responsible Manufacturing", "Regenerative Sourcing"],
    pillsAr: ["البناء الأخضر", "رصد الكربون", "الاقتصاد الدائري", "التصنيع المسؤول", "التوريد التجديدي"],
    href: "/about",
    ctaEn: "Our Commitment",
    ctaAr: "التزامنا",
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
    }, 220);
  };

  const current = tabs[active]!;

  return (
    <section
      id="sectors-showcase"
      aria-label={ar ? "عرض القطاعات" : "Sectors Showcase"}
      className="relative overflow-hidden"
      style={{ background: "oklch(0.115 0.018 175)" }}
    >
      {/* Atmospheric glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 70% 50%, oklch(0.594 0.112 174.5 / 0.07), transparent)",
        }}
      />

      <div className="site-container relative z-10 py-24 md:py-32">
        <div className="grid gap-0 lg:grid-cols-[minmax(260px,340px)_1fr]">

          {/* ── LEFT: Tab Labels + CTA ── */}
          <div className="flex flex-col pb-12 lg:border-e lg:border-white/10 lg:pe-10 lg:pb-0">
            {/* Eyebrow */}
            <p
              className="mb-8 text-[0.6875rem] uppercase tracking-[0.18em] text-white/35"
              style={{
                fontFamily: ar ? "var(--font-body)" : "var(--font-mono)",
                letterSpacing: ar ? 0 : undefined,
                textTransform: ar ? "none" : undefined,
              }}
            >
              {ar ? "قطاعات المجموعة" : "Our Group Sectors"}
            </p>

            {/* Tab list */}
            <nav role="tablist" aria-label={ar ? "قطاعات" : "Sectors"} className="flex flex-col gap-1">
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
                      "group relative flex items-center justify-between gap-4 rounded-none border-b border-white/[0.06] py-4 text-start transition-all duration-300",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
                      isActive ? "text-white" : "text-white/40 hover:text-white/70"
                    )}
                  >
                    {/* Active indicator bar */}
                    <span
                      className={cn(
                        "absolute start-0 top-1/2 h-0 w-0.5 -translate-y-1/2 rounded-full bg-brand-orange transition-all duration-300",
                        isActive ? "h-6" : "h-0"
                      )}
                    />

                    <span
                      className={cn(
                        "ps-4 font-head font-semibold transition-all duration-300",
                        isActive
                          ? "text-[clamp(1.4rem,2.2vw,1.9rem)] leading-tight"
                          : "text-[clamp(1rem,1.6vw,1.3rem)] leading-tight"
                      )}
                    >
                      {ar ? tab.labelAr : tab.labelEn}
                    </span>

                    {/* Arrow — only on active */}
                    <span
                      className={cn(
                        "flex size-7 shrink-0 items-center justify-center rounded-full border border-white/20 transition-all duration-300",
                        isActive ? "border-brand-orange text-brand-orange opacity-100 scale-100" : "opacity-0 scale-75"
                      )}
                    >
                      <ArrowUpRight className="size-3.5 rtl:rotate-90" />
                    </span>
                  </button>
                );
              })}
            </nav>

            {/* CTA */}
            <div className="mt-10">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 font-head text-sm font-bold text-black transition-all duration-300 hover:bg-brand-orange hover:text-white hover:shadow-lg hover:shadow-brand-orange/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                <span>{ar ? "ابدأ مشروعك" : "Start a Project"}</span>
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:rotate-90" />
              </Link>
            </div>
          </div>

          {/* ── RIGHT: Content Panel ── */}
          <div
            id={`showcase-panel-${current.id}`}
            role="tabpanel"
            aria-labelledby={`showcase-tab-${current.id}`}
            ref={contentRef}
            className={cn(
              "flex flex-col justify-center gap-8 transition-all duration-220 lg:ps-12",
              animating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            )}
            style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            {/* Tab number */}
            <span className="font-mono text-[0.625rem] tracking-[0.22em] text-white/25">
              {String(active + 1).padStart(2, "0")} / {String(tabs.length).padStart(2, "0")}
            </span>

            {/* Headline */}
            <h2 className="font-head font-bold leading-tight text-white" style={{ fontSize: "clamp(1.65rem, 3.2vw, 2.8rem)" }}>
              {ar ? current.headlineAr : current.headlineEn}
            </h2>

            {/* Body */}
            <p className="max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
              {ar ? current.bodyAr : current.bodyEn}
            </p>

            {/* Pills */}
            <div className="flex flex-wrap gap-2">
              {(ar ? current.pillsAr : current.pillsEn).map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-white/12 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/70 backdrop-blur-sm transition-colors duration-200 hover:border-white/25 hover:text-white"
                >
                  {pill}
                </span>
              ))}
            </div>

            {/* Explore CTA */}
            <div className="mt-2">
              <Link
                to={current.href as "/sectors/$sector"}
                className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-orange transition-colors duration-200 hover:text-brand-orange/80 focus-visible:outline-none"
              >
                <span className="border-b border-brand-orange/40 pb-0.5 transition-colors duration-200 group-hover:border-brand-orange">
                  {ar ? current.ctaAr : current.ctaEn}
                </span>
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:rotate-90" />
              </Link>
            </div>

            {/* Bottom stats row */}
            <div className="mt-4 grid grid-cols-3 gap-px border-t border-white/[0.08] pt-8">
              {[
                { valEn: "35+", valAr: "+35", labelEn: "Years of Group History", labelAr: "سنة من تاريخ المجموعة" },
                { valEn: "4,500+", valAr: "+4,500", labelEn: "Team Members", labelAr: "عضو في الفريق" },
                { valEn: "50+", valAr: "+50", labelEn: "Countries Served", labelAr: "دولة نخدمها" },
              ].map((stat) => (
                <div key={stat.labelEn} className="pe-6">
                  <p className="font-head text-2xl font-bold text-white sm:text-3xl">{ar ? stat.valAr : stat.valEn}</p>
                  <p className="mt-1 text-xs leading-snug text-white/40">{ar ? stat.labelAr : stat.labelEn}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
