import { useState } from "react";
import {
  Building2,
  Gem,
  Utensils,
  BookOpen,
  Leaf,
  Layers,
  Calendar,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  MapPin,
  Clock,
  ArrowRight
} from "lucide-react";
import { Reveal } from "@/components/home/reveal";
import { useLanguage } from "@/i18n/language-context";
import { cn } from "@/lib/utils";
import {
  OFFICIAL_TIMELINE_MILESTONES,
  type LegacyMilestone
} from "./legacy-data";

function getMilestoneIcon(type: LegacyMilestone["iconType"], isActive: boolean) {
  const iconClass = cn("size-5 transition-transform duration-300", isActive && "scale-110");
  switch (type) {
    case "construction":
      return <Building2 className={iconClass} />;
    case "real_estate":
      return <Building2 className={iconClass} />;
    case "gold":
      return <Gem className={iconClass} />;
    case "food":
      return <Utensils className={iconClass} />;
    case "heritage":
      return <BookOpen className={iconClass} />;
    case "environment":
      return <Leaf className={iconClass} />;
    case "integration":
      return <Layers className={iconClass} />;
    default:
      return <Sparkles className={iconClass} />;
  }
}

export function CorporateTimeline() {
  const { language } = useLanguage();
  const ar = language === "AR";
  const [activeYear, setActiveYear] = useState<number>(2023);

  const activeMilestone =
    OFFICIAL_TIMELINE_MILESTONES.find((m) => m.year === activeYear) ||
    OFFICIAL_TIMELINE_MILESTONES[OFFICIAL_TIMELINE_MILESTONES.length - 1];

  const activeIndex = OFFICIAL_TIMELINE_MILESTONES.findIndex((m) => m.year === activeYear);

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveYear(OFFICIAL_TIMELINE_MILESTONES[activeIndex - 1].year);
    }
  };

  const handleNext = () => {
    if (activeIndex < OFFICIAL_TIMELINE_MILESTONES.length - 1) {
      setActiveYear(OFFICIAL_TIMELINE_MILESTONES[activeIndex + 1].year);
    }
  };

  return (
    <div className="w-full">
      {/* 1. Legacy Heritage Intro Hero */}
      <div className="relative overflow-hidden rounded-3xl border border-white/50 dark:border-white/15 bg-white/50 dark:bg-white/10 p-6 sm:p-10 lg:p-12 shadow-lg backdrop-blur-xl transition-all duration-300 hover:border-white/80 dark:hover:border-white/20 hover:bg-white/70 dark:hover:bg-white/15 hover:shadow-xl">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md mb-4">
            <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
            <span>{ar ? "إرثنا وتطور أعمالنا" : "OUR LEGACY & BUSINESS EVOLUTION"}</span>
          </div>

          <h2 className="text-center font-head text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
            {ar ? "من الجذور الأولى إلى التكامل المؤسسي" : "From Business Foundations to Institutional Integration"}
          </h2>

          <p className="mt-6 text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed text-justify sm:text-center">
            {ar
              ? "تمتد جذور أنشطة مجموعة سامي بن عياد إلى عام 1977، عبر مسيرة من تأسيس وتطوير كيانات متخصصة في قطاعات اقتصادية متنوعة داخل مصر والمملكة العربية السعودية. بدأت المسيرة في مجالات العقارات والمقاولات والتشطيبات المعمارية، ثم امتدت إلى السوق السعودي من خلال تأسيس كيان متخصص في المقاولات والتطوير العقاري والتشطيبات الكبرى. وتواصلت مسيرة التوسع بتأسيس كيانات متخصصة في تجارة الذهب والمجوهرات، وتجارة المواد الغذائية بالجملة، والبحث العلمي وتطوير التراث، وصولًا إلى تأسيس شركة البيئة المستدامة عام 2018."
              : "The operational roots of Sami Bin Ayyad Group trace back to 1977, through a sustained journey of establishing and developing specialized business entities across diverse economic sectors in Egypt and Saudi Arabia. The journey commenced in real estate, general contracting, and architectural finishing, subsequently expanding into the Saudi market through the foundation of an enterprise dedicated to contracting, real estate development, and major turnkey finishing projects. Expansion continued through specialized ventures in gold and jewelry trading, wholesale food commodities, and scientific research and heritage development, culminating in the establishment of the Sustainable Environment company in 2018."}
          </p>

          <p className="mt-4 text-sm sm:text-base text-foreground/90 leading-relaxed font-medium text-justify sm:text-center">
            {ar
              ? "وفي عام 2023، شهدت هذه المسيرة مرحلة التكامل المؤسسي من خلال تأسيس الكيان الجامع الذي وحد الأنشطة والكيانات المختلفة تحت مظلة مؤسسية واحدة، لتقديم منظومة أعمال متعددة القطاعات والخدمات. ومن خلال هذا التطور، تجمع المجموعة بين إرث ممتد من الخبرة والتنوع، ورؤية مؤسسية تستهدف بناء فرص جديدة للتوسع والاستثمار."
              : "In 2023, this multi-decade evolution reached full institutional integration with the founding of the unified holding group, consolidating previously established entities and activities under a single corporate umbrella to deliver a multi-sector, multi-service enterprise system. Through this strategic evolution, the Group bridges decades of operational expertise with forward-looking corporate governance aimed at unlocking international investment and partnership opportunities."}
          </p>

          {/* Closing Motto Tag */}
          <div className="mt-8 pt-6 border-t border-border/60 flex items-center justify-center">
            <span className="inline-flex items-center justify-center rounded-2xl bg-brand-green text-white hover:bg-brand-orange px-6 py-3 text-xs sm:text-sm font-bold tracking-wide shadow-md transition-all duration-300 cursor-default select-none">
              <span>
                {ar
                  ? "من عقود من الخبرة إلى مجموعة أعمال متكاملة."
                  : "FROM DECADES OF EXPERIENCE TO AN INTEGRATED BUSINESS GROUP."}
              </span>
            </span>
          </div>

          {/* Documentary Compliance Note */}
          <div className="mt-4 p-3 rounded-xl bg-background/60 border border-dashed border-border/80 text-[11px] text-muted-foreground">
            <span className="font-bold text-foreground">
              {ar ? "ملاحظة توثيقية هامة: " : "Documentary Clarification: "}
            </span>
            {ar
              ? "يوضح السجل التاريخي أن عام 1977 يمثل انطلاق جذور الأنشطة المهنية والتنفيذية الأولى، بينما يمثل عام 2023 تأسيس الكيان المؤسسي الجامع الموحد للمجموعة."
              : "1977 marks the operational inception of foundational contracting activities; 2023 marks the legal founding and institutional integration of the unified holding group."}
          </div>
        </div>
      </div>

      {/* 2. Interactive Historical Timeline (1977–2023) */}
      <div className="mt-12 rounded-3xl border border-white/20 bg-background/85 p-6 sm:p-10 shadow-lg backdrop-blur-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md mb-2">
              <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
              <span>{ar ? "التسلسل الزمني الرسمي (1977–2023)" : "Official Historical Timeline (1977–2023)"}</span>
            </div>
            <h3 className="text-center sm:text-start font-head text-xl sm:text-2xl font-extrabold text-foreground">
              {ar ? "محطات التطور المؤسسي والامتداد الجغرافي" : "Institutional Evolution & Geographic Expansion"}
            </h3>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              type="button"
              onClick={handlePrev}
              disabled={activeIndex === 0}
              className="size-9 rounded-full border border-border bg-secondary flex items-center justify-center text-foreground hover:bg-brand-green hover:text-white disabled:opacity-40 disabled:pointer-events-none transition-all cursor-pointer"
              aria-label="Previous milestone"
            >
              <ChevronLeft className="size-4 rtl:rotate-180" />
            </button>
            <span className="text-xs font-mono font-bold text-muted-foreground px-2">
              {activeIndex + 1} / {OFFICIAL_TIMELINE_MILESTONES.length}
            </span>
            <button
              type="button"
              onClick={handleNext}
              disabled={activeIndex === OFFICIAL_TIMELINE_MILESTONES.length - 1}
              className="size-9 rounded-full border border-border bg-secondary flex items-center justify-center text-foreground hover:bg-brand-green hover:text-white disabled:opacity-40 disabled:pointer-events-none transition-all cursor-pointer"
              aria-label="Next milestone"
            >
              <ChevronRight className="size-4 rtl:rotate-180" />
            </button>
          </div>
        </div>

        {/* Milestone Steps Selector: Horizontal on desktop, scrollable/wrapped on mobile */}
        <div className="relative mb-10 pb-4 overflow-x-auto no-scrollbar">
          {/* Track line behind nodes */}
          <div className="hidden lg:block absolute top-7 start-8 end-8 h-1 bg-border/60 -z-0" />

          <div className="flex items-center justify-between min-w-[700px] lg:min-w-0 gap-3 px-2">
            {OFFICIAL_TIMELINE_MILESTONES.map((m, idx) => {
              const isSelected = m.year === activeYear;
              const isPast = idx <= activeIndex;
              return (
                <button
                  key={m.year}
                  type="button"
                  onClick={() => setActiveYear(m.year)}
                  className="group relative z-10 flex flex-col items-center flex-1 transition-all cursor-pointer focus:outline-none"
                >
                  {/* Circle Node */}
                  <div
                    className={cn(
                      "size-14 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-md",
                      isSelected
                        ? "!bg-brand-orange text-white shadow-brand-orange/40 scale-110 ring-4 ring-brand-orange/20"
                        : isPast
                        ? "!bg-brand-green text-white hover:bg-brand-orange hover:scale-105"
                        : "border border-border/80 bg-secondary/80 text-muted-foreground hover:bg-secondary hover:text-foreground"
                    )}
                  >
                    {getMilestoneIcon(m.iconType, isSelected)}
                  </div>

                  {/* Year Tag */}
                  <span
                    className={cn(
                      "mt-2 text-xs font-black font-mono tracking-tight transition-colors",
                      isSelected
                        ? "text-brand-orange font-bold text-sm scale-105"
                        : "text-foreground group-hover:text-brand-orange"
                    )}
                  >
                    {m.year}
                  </span>

                  {/* Country Pill */}
                  <span
                    className={cn(
                      "mt-0.5 text-[10px] font-bold px-2 py-0.5 rounded-full transition-colors",
                      isSelected
                        ? "bg-brand-orange/15 text-brand-orange"
                        : "bg-secondary text-muted-foreground"
                    )}
                  >
                    {ar ? m.countryAr : m.countryEn}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. Active Milestone Detail Card */}
        <div className="relative overflow-hidden rounded-2xl border border-brand-green/30 bg-gradient-to-br from-brand-green/5 via-background to-secondary/30 p-6 sm:p-8 backdrop-blur-md transition-all duration-500">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
            <div className="space-y-3 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-brand-orange px-3.5 py-1 text-xs font-black font-mono text-white shadow-sm">
                  {activeMilestone.year}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-secondary border border-border px-3 py-1 text-xs font-bold text-foreground">
                  <MapPin className="size-3 text-brand-green" />
                  <span>{ar ? activeMilestone.countryAr : activeMilestone.countryEn}</span>
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-brand-green/10 text-brand-green border border-brand-green/30 px-3 py-1 text-xs font-bold">
                  <span>{ar ? activeMilestone.sectorTagAr : activeMilestone.sectorTagEn}</span>
                </span>
                {activeMilestone.isIntegrationMilestone && (
                  <span className="rounded-full bg-brand-green px-3 py-1 text-xs font-black text-white shadow-sm">
                    {ar ? "محطة التكامل المؤسسي الموحد" : "Institutional Integration"}
                  </span>
                )}
              </div>

              <h4 className="font-head text-xl sm:text-2xl font-black text-foreground leading-snug">
                {ar ? activeMilestone.titleAr : activeMilestone.titleEn}
              </h4>

              <p className="text-sm sm:text-base text-foreground/85 leading-relaxed text-justify">
                {ar ? activeMilestone.detailAr : activeMilestone.detailEn}
              </p>
            </div>

            {/* Quick Context Card */}
            <div className="lg:w-80 rounded-xl border border-border/80 bg-background/90 p-4 shrink-0 space-y-2.5">
              <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
                <Clock className="size-3 text-brand-orange" />
                <span>{ar ? "الموقع والدلالة الاستراتيجية" : "Strategic Significance"}</span>
              </div>
              <div className="text-xs text-foreground/90 font-medium leading-relaxed">
                {ar ? activeMilestone.summaryAr : activeMilestone.summaryEn}
              </div>
              <div className="pt-2 border-t border-border/50 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                <span>{ar ? "النطاق الجغرافي:" : "Scope:"}</span>
                <span className="font-bold text-foreground">
                  {ar ? activeMilestone.countryAr : activeMilestone.countryEn}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

