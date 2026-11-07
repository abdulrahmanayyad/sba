import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Compass,
  Download,
  FileCheck2,
  Handshake,
  HeartHandshake,
  Layers,
  Leaf,
  Lightbulb,
  Scale,
  Settings,
  ShieldCheck,
  Shirt,
  Sparkles,
  TrendingUp,
  User,
  Users2,
  Wheat,
} from "lucide-react";

import { HomeMotion, HomeReveal as Reveal } from "@/components/home/home-motion";
import { AnimatedStatistic } from "@/components/site/animated-statistic";
import { useLanguage } from "@/i18n/language-context";
import { cn } from "@/lib/utils";
import { highlightBrand } from "@/components/site/brand-text";
import { divisions, founders } from "@/components/group/group-data";
import {
  governanceData,
  ourApproachData,
  ourValuesData,
  policiesData,
  whatWeDoData,
  whoWeAreData,
  whySbaData,
} from "./about-data";

function SectionBadge({ title }: { title: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
      <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
      {title}
    </span>
  );
}

export function AboutPage() {
  const { language } = useLanguage();
  const ar = language === "AR";

  const sectorIcons = [Building2, Leaf, Shirt, Wheat];
  const valueIcons = [
    BadgeCheck,
    ShieldCheck,
    Scale,
    Award,
    Lightbulb,
    Handshake,
    Leaf,
    TrendingUp,
  ];

  return (
    <HomeMotion key={language} variant="group">
      {/* 1. Who We Are / من نحن */}
      <section id="whoWeAre" className="site-container py-12 scroll-mt-24">
        <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-8 sm:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
            <Reveal>
              <SectionBadge title={ar ? "من نحن" : "About Us"} />
              <h1 className="section-title mt-3 text-xl sm:text-2xl lg:text-3xl">
                {ar ? whoWeAreData.titleAr : whoWeAreData.title}
              </h1>
              <div className="mt-6 space-y-4 text-base leading-8 text-muted-foreground">
                {whoWeAreData.paragraphs.map((p, idx) => (
                  <p key={idx}>{highlightBrand(ar ? p.ar : p.en)}</p>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6">
                {whoWeAreData.stats.map((stat) => (
                  <div key={stat.value} className={ar ? "text-right" : "text-left"}>
                    <p className={cn(
                      "font-head text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-500 drop-shadow-sm",
                      ar ? "text-right" : "text-left"
                    )}>
                      <AnimatedStatistic value={stat.value} />
                    </p>
                    <p className="mt-1 text-xs font-semibold text-muted-foreground sm:text-sm">
                      {ar ? stat.labelAr : stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Company Profile Download CTA */}
              <div className="mt-8 flex flex-wrap items-center gap-3 pt-6 border-t border-border/60">
                <Button asChild size="default" className="rounded-full !bg-brand-green !text-white text-xs sm:text-sm font-bold shadow-md hover:!bg-brand-orange transition-all duration-300 cursor-pointer">
                  <a
                    href={ar ? "/downloads/SBA_Complete_Corporate_Profile_AR.pdf" : "/downloads/SBA_Complete_Corporate_Profile_EN.pdf"}
                    download={ar ? "SBA_Complete_Corporate_Profile_AR.pdf" : "SBA_Complete_Corporate_Profile_EN.pdf"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="size-4" />
                    <span>{ar ? "تحميل الملف التعريفي الشامل (PDF)" : "Download Company Profile"}</span>
                  </a>
                </Button>
                <Button asChild size="default" className="rounded-full bg-brand-green text-white text-xs sm:text-sm font-bold shadow-md hover:bg-brand-orange transition-all duration-300 cursor-pointer">
                  <Link to="/downloads">
                    <span>{ar ? "مركز الوثائق والتحميلات" : "Downloads Center"}</span>
                  </Link>
                </Button>
                <Button asChild size="default" className="rounded-full bg-brand-green text-white text-xs sm:text-sm font-bold shadow-md hover:bg-brand-orange transition-all duration-300 cursor-pointer">
                  <Link to="/join/group">
                    {ar ? "فرص التعاون والشراكة" : "Cooperation Pathways"}
                  </Link>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card/40 shadow-sm">
                <img
                  src={divisions.find((d) => d.slug === "construction")?.image}
                  alt="SAMI BIN AYYAD GROUP Corporate"
                  loading="lazy"
                  width={944}
                  height={704}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. What We Do / ماذا نفعل */}
      <section id="whatWeDo" className="site-container py-12 scroll-mt-24">
        <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-8 sm:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
          <Reveal className="mx-auto max-w-3xl text-center">
            <SectionBadge title={ar ? "ماذا نفعل" : "What We Do"} />
            <h2 className="section-title mt-3 text-center mx-auto">{ar ? whatWeDoData.titleAr : whatWeDoData.title}</h2>
            <p className="section-intro mx-auto mt-4">{highlightBrand(ar ? whatWeDoData.leadAr : whatWeDoData.lead)}</p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whatWeDoData.sectors.map((sector, index) => {
              const Icon = sectorIcons[index] ?? Layers;
              return (
                <Reveal key={sector.title} delay={index * 0.08}>
                  <div className="group flex h-full flex-col justify-between rounded-3xl border border-white/50 bg-white/40 dark:bg-white/10 p-6 sm:p-7 backdrop-blur-2xl shadow-[0_10px_35px_rgba(0,0,0,0.04)] ring-1 ring-white/30 transition-all duration-300 hover:-translate-y-1 hover:bg-white/60 dark:hover:bg-white/20 hover:shadow-[0_14px_32px_-8px_rgba(22,135,108,0.22)] hover:border-brand-green/50 cursor-pointer">
                    <div>
                      <div className="flex items-center justify-center text-center">
                        <span className="rounded-full border border-white/50 bg-white/50 dark:bg-white/15 px-3.5 py-1 text-[11px] font-bold text-brand-orange shadow-xs backdrop-blur-md">
                          {ar ? sector.tagAr : sector.tag}
                        </span>
                      </div>
                      <h3 className="mt-3 text-center font-head text-xl font-bold text-foreground group-hover:text-brand-green transition-colors">
                        {ar ? sector.titleAr : sector.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-center font-sans">
                        {ar ? sector.bodyAr : sector.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2.5 Corporate Structure & Architecture Diagram */}
      <section id="structure" className="site-container py-12 scroll-mt-24">
        <div className="overflow-hidden rounded-3xl border border-white/50 bg-white/40 dark:bg-white/10 p-8 sm:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.05)] backdrop-blur-3xl ring-1 ring-white/30">
          <Reveal className="mx-auto max-w-3xl text-center">
            <SectionBadge title={ar ? "الهيكل المؤسسي والحوكمة" : "Corporate Structure & Architecture"} />
            <h2 className="section-title mt-3 text-center mx-auto text-xl sm:text-2xl lg:text-3xl">
              {ar ? "الهيكل المؤسسي للمجموعة والقطاعات التابعة" : "Group Institutional Structure & Subsidiary Operating Units"}
            </h2>
            <p className="section-intro mx-auto mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
              {ar
                ? "تعتمد مجموعة سامي بن عياد نموذجًا مؤسسيًا موحدًا يجمع بين حوكمة الشركة القابضة المركزية والكيانات التشغيلية المتخصصة عبر أربعة قطاعات أعمال استراتيجية لضمان كفاءة الإدارة وجودة الالتزامات."
                : "Sami Bin Ayyad Group operates a cohesive corporate model integrating centralized corporate governance with specialized operating subsidiaries across four strategic sectors."}
            </p>
          </Reveal>

          {/* Interactive Corporate Structure Diagram */}
          <Reveal delay={0.15}>
            <div className="mt-12 max-w-6xl mx-auto">
              {/* Parent Holding Node — Glassmorphic, Larger & Prominent */}
              <div className="group relative mx-auto max-w-2xl rounded-3xl border border-white/50 bg-white/40 dark:bg-white/10 p-8 sm:p-10 text-center shadow-[0_16px_50px_rgba(0,0,0,0.05)] backdrop-blur-3xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/60 dark:hover:bg-white/20 hover:border-brand-green/50 hover:shadow-[0_18px_45px_-12px_rgba(22,135,108,0.22)] ring-1 ring-white/30">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/50 dark:bg-white/15 px-4 py-1.5 text-xs font-bold tracking-wide text-foreground backdrop-blur-md shadow-xs">
                  <span className="size-2 rounded-full bg-brand-orange animate-pulse" />
                  <span className="font-bold text-black dark:text-white">{ar ? "الكيان المؤسسي الموحد (الشركة الأم)" : "Unified Parent Holding Entity"}</span>
                </div>
                <h3 className="font-head text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-orange text-center mt-2 leading-tight">
                  {ar ? "مجموعة سامي بن عياد" : "SAMI BIN AYYAD GROUP"}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed text-center font-sans max-w-xl mx-auto">
                  {ar
                    ? "التوجيه الاستراتيجي، الحوكمة المؤسسية، إدارة رؤوس الأموال والتحالفات الدولية الكبرى"
                    : "Strategic Leadership, Group Governance, Capital Allocation & International Alliances"}
                </p>
                <div className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-brand-green/10 border border-brand-green/25 px-4 py-1.5 text-xs sm:text-sm font-bold text-brand-green">
                  <BadgeCheck className="size-4.5 text-brand-green shrink-0" />
                  <span>{ar ? "تأسست رسميًا 2023 · جذور الخبرة منذ 1977" : "Formally Unified 2023 · Heritage Roots 1977"}</span>
                </div>
              </div>

              {/* Connecting Branch Line */}
              <div className="my-8 flex justify-center items-center flex-col">
                <div className="h-10 w-0.5 bg-gradient-to-b from-brand-green via-brand-orange to-brand-green/60" />
                <div className="size-2 rounded-full bg-brand-orange shadow-sm -mt-0.5" />
              </div>

              {/* Four Subsidiary Sectors — Larger, Clearer, High-Visibility Cards */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    nameAr: "قطاع المقاولات والتطوير العقاري",
                    nameEn: "Construction & Real Estate",
                    descAr: "المقاولات العامة، المنشآت الطبية، التطوير العقاري، وشبكات البنية التحتية.",
                    descEn: "General contracting, healthcare facilities, real estate, and structural engineering.",
                    link: "/sectors/construction",
                  },
                  {
                    nameAr: "قطاع البيئة والاستدامة",
                    nameEn: "Environment & Sustainability",
                    descAr: "تقييم الأثر البيئي، محطات الغاز الحيوي، معالجة المياه، والامتثال البيئي.",
                    descEn: "EIA studies, dry fermentation biogas, water filtration, and ESG compliance.",
                    link: "/sectors/environmental",
                  },
                  {
                    nameAr: "قطاع تصنيع الملابس وتطوير الأزياء",
                    nameEn: "Garment Manufacturing",
                    descAr: "تصنيع الملابس الجاهزة، هندسة الباترون، برامج التصدير، وخطوط القميص الكلاسيكي.",
                    descEn: "Ready-made garment manufacturing, pattern engineering, and international FOB programs.",
                    link: "/sectors/garment",
                  },
                  {
                    nameAr: "قطاع المنتجات الطبيعية والغذائية",
                    nameEn: "Food & Agri-Products",
                    descAr: "عسل طبيعي، زيتون، زيت زيتون بكر، تمور فاخرة، وأعشاب وتوابل موثقة معمليًا.",
                    descEn: "Natural honey, table olives, extra virgin olive oil, premium dates, and certified herbs.",
                    link: "/sectors/food",
                  },
                ].map((sec, sIdx) => {
                  return (
                    <div
                      key={sIdx}
                      className="group relative flex flex-col justify-between rounded-3xl border border-white/50 bg-white/40 dark:bg-white/10 p-7 sm:p-8 min-h-[260px] shadow-[0_12px_36px_rgba(0,0,0,0.05)] backdrop-blur-3xl ring-1 ring-white/30 transition-all duration-300 hover:-translate-y-1 hover:bg-white/60 dark:hover:bg-white/20 hover:border-brand-green/50 hover:shadow-[0_14px_32px_-8px_rgba(22,135,108,0.22)]"
                    >
                      <div>
                        <h4 className="font-head text-lg sm:text-xl font-bold text-foreground leading-snug group-hover:text-brand-green transition-colors">
                          {ar ? sec.nameAr : sec.nameEn}
                        </h4>

                        <p className="mt-4 text-xs sm:text-sm text-muted-foreground leading-relaxed font-sans">
                          {ar ? sec.descAr : sec.descEn}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-border/50 flex justify-between items-center">
                        <Link
                          to={sec.link}
                          className="group/link inline-flex items-center gap-2 text-xs sm:text-sm font-bold !text-brand-green hover:!text-brand-orange transition-colors"
                        >
                          <span>{ar ? "استكشف تفاصيل القطاع" : "View Division Details"}</span>
                          <ArrowRight className="size-4 transition-transform duration-200 group-hover/link:translate-x-1 rtl:rotate-180 rtl:group-hover/link:-translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. Our Approach / نهجنا */}
      <section id="ourApproach" className="site-container py-12 scroll-mt-24">
        <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-8 sm:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <Reveal className="lg:col-span-5">
              <SectionBadge title={ar ? "نهجنا" : "Our Approach"} />
              <h2 className="section-title mt-3 text-lg sm:text-xl lg:text-2xl">
                {ar ? ourApproachData.titleAr : ourApproachData.title}
              </h2>
              <div className="mt-6 space-y-4 text-base leading-7 text-muted-foreground">
                {ourApproachData.paragraphs.map((p, idx) => (
                  <p key={idx}>{highlightBrand(ar ? p.ar : p.en)}</p>
                ))}
              </div>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
              {ourApproachData.steps.map((step, idx) => (
                <Reveal key={step.num} delay={idx * 0.08}>
                  <div className="h-full rounded-2xl border border-white/20 bg-background/60 p-6 backdrop-blur-xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-green/40 hover:shadow-md">
                    <span className="font-mono text-xs font-bold text-brand-orange">
                      {ar ? step.num : `STEP ${step.num}`}
                    </span>
                    <h3 className="mt-2 font-head text-lg font-bold">
                      {ar ? step.titleAr : step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {ar ? step.bodyAr : step.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Values / قيمنا */}
      <section id="ourValues" className="site-container py-12 scroll-mt-24">
        <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-8 sm:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
          <Reveal className="mx-auto max-w-3xl text-center">
            <SectionBadge title={ar ? "قيمنا" : "Our Values"} />
            <h2 className="section-title mt-3 text-center mx-auto">{ar ? ourValuesData.titleAr : ourValuesData.title}</h2>
            <p className="section-intro mx-auto mt-4">{highlightBrand(ar ? ourValuesData.leadAr : ourValuesData.lead)}</p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ourValuesData.values.map((item, index) => {
              const Icon = valueIcons[index] ?? CheckCircle2;
              return (
                <Reveal key={item.title} delay={index * 0.05}>
                  <div className="group flex h-full flex-col justify-between rounded-2xl border border-white/20 bg-background/60 p-6 backdrop-blur-xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-green/40 hover:shadow-md">
                    <div>
                      <h3 className="text-center font-head text-lg font-bold">
                        {ar ? item.titleAr : item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-center font-sans">
                        {ar ? item.bodyAr : item.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Why Sami Bin Ayyad / لماذا سامي بن عياد */}
      <section id="whySba" className="site-container py-12 scroll-mt-24">
        <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-8 sm:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
          <Reveal className="mx-auto max-w-3xl text-center">
            <SectionBadge title={ar ? "لماذا سامي بن عياد" : "Why Sami Bin Ayyad"} />
            <h2 className="section-title mt-3 text-center mx-auto">{ar ? whySbaData.titleAr : whySbaData.title}</h2>
            <p className="section-intro mx-auto mt-4">{highlightBrand(ar ? whySbaData.leadAr : whySbaData.lead)}</p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whySbaData.pillars.map((pillar, idx) => (
              <Reveal key={pillar.title} delay={idx * 0.06}>
                <div className="flex h-full flex-col justify-between rounded-2xl border border-white/20 bg-background/60 p-6 backdrop-blur-xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-green/40 hover:shadow-md">
                  <div>
                    <div className="flex items-center justify-center gap-3">
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand-orange/10 font-mono text-xs font-bold text-brand-orange">
                        0{idx + 1}
                      </span>
                      <h3 className="text-center font-head text-lg font-bold">
                        {ar ? pillar.titleAr : pillar.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground text-center font-sans">
                      {ar ? pillar.bodyAr : pillar.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}

            {/* Conclusion card */}
            <Reveal delay={0.45} className="sm:col-span-2 lg:col-span-1">
              <div className="flex h-full flex-col justify-center items-center text-center rounded-2xl border border-brand-green/30 bg-gradient-to-br from-brand-green/10 via-background/60 to-background/80 p-6 backdrop-blur-xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-green/50 hover:shadow-lg">
                <h3 className="font-head text-lg sm:text-xl font-extrabold text-foreground">
                  {ar ? "تواصل معنا لبدء الشراكة" : "Connect with Us to Partner"}
                </h3>
                <div className="mt-5 w-full">
                  <Button asChild size="default" className="rounded-full bg-brand-green hover:bg-brand-orange text-white font-head font-bold shadow-md transition-all px-6 py-2.5">
                    <Link to="/contact">
                      {ar ? "تواصل معنا" : "Contact Us"}
                    </Link>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. Company Leadership / قيادة الشركة */}
      <section id="leadership" className="site-container py-12 scroll-mt-24">
        <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-8 sm:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
          <Reveal className="mx-auto max-w-3xl text-center">
            <SectionBadge title={ar ? "قيادة الشركة" : "Company Leadership"} />
            <h2 className="section-title mt-3 text-center mx-auto">{ar ? "قيادات تصنع الرؤية" : "The People Behind the Vision"}</h2>
            <p className="section-intro mx-auto mt-3">
              {ar
                ? "تقود المجموعة نخبة من المؤسسين والقياديين بخبرات متراكمة في إدارة الاستثمارات والتصنيع والخدمات البيئية والتطوير الأكاديمي."
                : "The group is led by experienced founders bringing decades of leadership across contracting, manufacturing, sustainability, and education."}
            </p>
          </Reveal>

          <div className="mt-12 space-y-6 max-w-5xl mx-auto">
            {founders.map((founder, index) => (
              <Reveal key={founder.role} delay={index * 0.08}>
                <LeaderCard founder={founder} ar={ar} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Company Governance / حوكمة الشركة */}
      <section id="governance" className="site-container py-12 scroll-mt-24">
        <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-8 sm:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
          <Reveal className="mx-auto max-w-3xl text-center">
            <SectionBadge title={ar ? "حوكمة الشركة" : "Company Governance"} />
            <h2 className="section-title mt-3 text-center mx-auto">{ar ? governanceData.titleAr : governanceData.title}</h2>
            <p className="section-intro mx-auto mt-4">{highlightBrand(ar ? governanceData.leadAr : governanceData.lead)}</p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {governanceData.principles.map((principle, idx) => (
              <Reveal key={principle.title} delay={idx * 0.05}>
                <div className="flex h-full flex-col justify-between rounded-2xl border border-white/20 bg-background/60 p-6 backdrop-blur-xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-green/40 hover:shadow-md">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex size-9 items-center justify-center rounded-lg bg-secondary text-xs font-bold text-brand-green">
                        {idx + 1}
                      </span>
                      <Compass className="size-4 text-muted-foreground/60" />
                    </div>
                    <h3 className="mt-4 font-head text-base font-bold">
                      {ar ? principle.titleAr : principle.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground font-sans">
                      {ar ? principle.bodyAr : principle.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4} className="mx-auto mt-10 max-w-3xl">
            <div className="rounded-2xl border border-white/20 bg-background/60 p-5 text-center text-sm font-medium leading-relaxed text-muted-foreground backdrop-blur-md font-sans">
              {ar ? governanceData.conclusionAr : governanceData.conclusion}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8. Policies / السياسات */}
      <section id="policies" className="site-container py-12 scroll-mt-24">
        <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-8 sm:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
          <Reveal className="mx-auto max-w-3xl text-center">
            <SectionBadge title={ar ? "سياسات المجموعة" : "Group Policies"} />
            <h2 className="section-title mt-3 text-center mx-auto">{ar ? policiesData.titleAr : policiesData.title}</h2>
            <p className="section-intro mx-auto mt-4">{highlightBrand(ar ? policiesData.leadAr : policiesData.lead)}</p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {policiesData.items.map((policy, idx) => (
              <Reveal key={policy.title} delay={idx * 0.04}>
                <div className="flex h-full flex-col justify-between rounded-2xl border border-white/20 bg-background/60 p-6 backdrop-blur-xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-green/40 hover:shadow-md">
                  <div>
                    <h3 className="font-head text-base font-bold">
                      {ar ? policy.titleAr : policy.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground font-sans">
                      {ar ? policy.bodyAr : policy.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3} className="mx-auto mt-12 max-w-3xl">
            <div className="rounded-2xl border border-dashed border-border/80 bg-background/40 p-5 text-center text-xs font-medium leading-relaxed text-muted-foreground sm:text-sm backdrop-blur-md font-sans">
              {ar ? policiesData.disclaimerAr : policiesData.disclaimer}
            </div>
          </Reveal>
        </div>
      </section>
    </HomeMotion>
  );
}

function LeaderCard({
  founder,
  ar,
}: {
  founder: (typeof founders)[number];
  ar: boolean;
}) {
  const bio = ar ? founder.bioAr : founder.bio;

  return (
    <div className="glass-card group rounded-3xl border border-white/30 bg-background/85 p-6 sm:p-8 shadow-md backdrop-blur-xl transition-all duration-300 hover:shadow-xl hover:border-brand-green/40">
      <div className="grid gap-6 sm:grid-cols-[180px_1fr] md:grid-cols-[220px_1fr] lg:grid-cols-[240px_1fr] items-start">
        {/* Photo container */}
        <div className="relative aspect-[3/4] w-full max-w-[240px] mx-auto sm:mx-0 overflow-hidden rounded-2xl border border-brand-green/20 bg-gradient-to-br from-brand-green/10 via-background to-brand-orange/10 shadow-sm">
          {"image" in founder && founder.image ? (
            <img
              src={founder.image as string}
              alt={ar ? founder.nameAr : founder.name}
              className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-brand-green">
              <User className="size-16 opacity-40" />
            </div>
          )}
        </div>

        {/* Info & Detailed Bio */}
        <div className="flex flex-col justify-start text-start items-start w-full">
          <div className="mb-3 text-start">
            <span
              className={cn(
                "inline-block rounded-full bg-secondary/80 px-3.5 py-1 text-xs font-bold text-brand-orange border border-border backdrop-blur-md mb-2 text-start",
                ar ? "font-sans font-bold" : "font-mono uppercase tracking-wider text-[11px]"
              )}
            >
              {ar ? founder.roleAr : founder.role}
            </span>
            <h3 className="font-head text-xl sm:text-2xl font-bold text-foreground text-start">
              {ar ? founder.nameAr : founder.name}
            </h3>
          </div>

          <div className="border-t border-border/50 pt-4 text-start w-full">
            <p className="whitespace-pre-line text-sm sm:text-base leading-relaxed text-muted-foreground/95 text-start font-sans">
              {bio}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


