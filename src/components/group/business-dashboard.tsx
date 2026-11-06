import { useState } from "react";
import { Building2, Leaf, Shirt, Wheat, Globe, CheckCircle2, MapPin, Sparkles, Plus, Minus, Layers, X, Search, Mic, Navigation, Map } from "lucide-react";

import { HomeReveal as Reveal } from "@/components/home/home-motion";
import { AnimatedStatistic } from "@/components/site/animated-statistic";
import { cn } from "@/lib/utils";
import { activities, dashboardSectors, targetMarkets, type SectorId } from "./dashboard-data";

const icons: Record<SectorId, typeof Leaf> = {
  construction: Building2,
  environmental: Leaf,
  garment: Shirt,
  food: Wheat,
};

const aggregateStats = [
  {
    value: "+45",
    labelEn: "Years of Foundational Heritage",
    labelAr: "عامًا من الخبرة المؤسسية الممتدة",
    subEn: "Since 1977 across construction, industry, and international business.",
    subAr: "منذ عام 1977 في قطاعات المقاولات والصناعة والتجارة الدولية.",
    sector: "construction" as SectorId,
  },
  {
    value: "+100",
    labelEn: "Documented Projects & Works Delivered",
    labelAr: "مشروعًا وعملًا موثقًا تم تنفيذه",
    subEn: "Across general contracting, real estate development and environmental systems.",
    subAr: "في المقاولات العامة والتطوير العقاري والأنظمة البيئية.",
    sector: "construction" as SectorId,
  },
  {
    value: "+2,700",
    labelEn: "Apparel Styles & Garment Designs",
    labelAr: "موديل وتصميم ملابس معتمد للإنتاج",
    subEn: "Through specialized product development and ready-to-wear production lines.",
    subAr: "عبر أنشطة تطوير المنتجات المتخصصة وخطوط تصنيع الملابس الجاهزة.",
    sector: "garment" as SectorId,
  },
  {
    value: "4",
    labelEn: "Core Strategic Integrated Sectors",
    labelAr: "قطاعات استراتيجية متكاملة",
    subEn: "Contracting, sustainable environment, garment manufacturing, and natural products.",
    subAr: "المقاولات، والبيئة المستدامة، وتصنيع الملابس، والمنتجات الطبيعية.",
    sector: "food" as SectorId,
  },
  {
    value: "+10M",
    labelEn: "USD Overall Historic Business Volume",
    labelAr: "دولار إجمالي حجم الأعمال التاريخي",
    subEn: "Delivered across construction, environmental services, and industrial manufacturing.",
    subAr: "في المقاولات والخدمات البيئية والتصنيع الصناعي.",
    sector: "environmental" as SectorId,
  },
  {
    value: "4",
    labelEn: "Verified Strategic International Alliances",
    labelAr: "تحالفات استراتيجية دولية معتمدة",
    subEn: "With leading partners across China, Switzerland, and the GCC region.",
    subAr: "مع كبرى الشركات والتحالفات في الصين وسويسرا ودول الخليج.",
    sector: "environmental" as SectorId,
  },
];

// Partner countries list — ONLY the countries SBA operates in
interface PartnerCountry {
  nameEn: string;
  nameAr: string;
  flag: string;
  capitalEn: string;
  capitalAr: string;
  coords: string;
  roleAr: string;
  roleEn: string;
  x: number; // percentage in view (0-100)
  y: number; // percentage in view (0-100)
}

const partnerCountries: PartnerCountry[] = [
  {
    nameEn: "Egypt",
    nameAr: "مصر",
    flag: "🇪🇬",
    capitalEn: "Cairo",
    capitalAr: "القاهرة",
    coords: "30.0444° N, 31.2357° E",
    roleAr: "المقر الرئيسي والمصانع ومراكز التطوير والمشروعات الإنشائية الكبرى",
    roleEn: "Group Headquarters, Industrial Facilities & Core Projects",
    x: 58,
    y: 52,
  },
  {
    nameEn: "Turkey",
    nameAr: "تركيا",
    flag: "🇹🇷",
    capitalEn: "Istanbul",
    capitalAr: "إسطنبول",
    coords: "41.0082° N, 28.9784° E",
    roleAr: "شراكات توريد الأقمشة وتطوير الموديلات والتصنيع المشترك",
    roleEn: "Textile Sourcing, Model Development & Sourcing Hub",
    x: 60,
    y: 32,
  },
  {
    nameEn: "France",
    nameAr: "فرنسا",
    flag: "🇫🇷",
    capitalEn: "Paris",
    capitalAr: "باريس",
    coords: "48.8566° N, 2.3522° E",
    roleAr: "سوق تصدير لمنتجات الملابس الفاخرة والعلامات التجارية",
    roleEn: "Export Market for Premium Apparel & Fashion Brands",
    x: 36,
    y: 22,
  },
  {
    nameEn: "Italy",
    nameAr: "إيطاليا",
    flag: "🇮🇹",
    capitalEn: "Rome",
    capitalAr: "روما",
    coords: "41.9028° N, 12.4964° E",
    roleAr: "مركز شراكات التصميم والأزياء والتبادل التجاري الأوروبي",
    roleEn: "European Fashion Design & Commercial Trade Hub",
    x: 44,
    y: 30,
  },
  {
    nameEn: "Kuwait",
    nameAr: "الكويت",
    flag: "🇰🇼",
    capitalEn: "Kuwait City",
    capitalAr: "مدينة الكويت",
    coords: "29.3759° N, 47.9774° E",
    roleAr: "سوق خليجي رئيسي لتوريد وتوزيع المنتجات والشراكات التجارية",
    roleEn: "GCC Supply Chain & Regional Distribution Partner",
    x: 74,
    y: 48,
  },
  {
    nameEn: "Libya",
    nameAr: "ليبيا",
    flag: "🇱🇾",
    capitalEn: "Tripoli",
    capitalAr: "طرابلس",
    coords: "32.8872° N, 13.1913° E",
    roleAr: "شراكات تجارية وإمدادات مشروعات الإعمار والمقاولات",
    roleEn: "Trading Partnerships & Infrastructure Project Supplies",
    x: 48,
    y: 52,
  },
  {
    nameEn: "Algeria",
    nameAr: "الجزائر",
    flag: "🇩🇿",
    capitalEn: "Algiers",
    capitalAr: "الجزائر",
    coords: "36.7538° N, 3.0588° E",
    roleAr: "توزيع وتجارة المنتجات وشراكات إقليمية بشمال أفريقيا",
    roleEn: "North Africa Distribution & Regional Commerce",
    x: 35,
    y: 50,
  },
  {
    nameEn: "Morocco",
    nameAr: "المغرب",
    flag: "🇲🇦",
    capitalEn: "Rabat / Casablanca",
    capitalAr: "الرباط / الدار البيضاء",
    coords: "33.5731° N, -7.5898° E",
    roleAr: "تعاون تصنيعي وتجاري وتبادل منتجات مستدامة",
    roleEn: "Manufacturing Cooperation & Sustainable Product Exchange",
    x: 24,
    y: 46,
  },
  {
    nameEn: "Mauritania",
    nameAr: "موريتانيا",
    flag: "🇲🇷",
    capitalEn: "Nouakchott",
    capitalAr: "نواكشوط",
    coords: "18.0735° N, -15.9582° E",
    roleAr: "منفذ للتجارة الإقليمية وتوريد المنتجات لغرب أفريقيا",
    roleEn: "West African Regional Trade & Product Gateway",
    x: 18,
    y: 64,
  },
];

export function BusinessDashboard({ ar }: { ar: boolean }) {
  const [selectedCountry, setSelectedCountry] = useState<PartnerCountry | null>(partnerCountries[0]);
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  const t = (v: { en: string; ar: string }) => (ar ? v.ar : v.en);

  const card = "group/card relative rounded-3xl border border-white/50 bg-white/40 dark:bg-white/10 p-6 md:p-8 backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.04)] ring-1 ring-white/30 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.015] hover:bg-white/60 dark:hover:bg-white/20 hover:shadow-[0_24px_60px_rgba(0,0,0,0.08)] hover:border-brand-orange/50 active:translate-y-0 cursor-pointer";

  const activeCountry = (hoveredCountry ? partnerCountries.find((c) => c.nameEn === hoveredCountry) ?? null : null) ?? selectedCountry ?? partnerCountries[0];

  return (
    <section id="business-numbers" aria-labelledby="dash-heading" className="relative py-16 scroll-mt-24 overflow-hidden">
      <div className="site-container relative z-10">
        {/* Unified Group Performance & Business Numbers Box */}
        <Reveal>
          <div className="group relative mx-auto overflow-hidden rounded-[36px] border border-white/50 bg-white/40 dark:bg-white/10 p-8 sm:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.05)] backdrop-blur-3xl ring-1 ring-white/30 transition-all duration-500 hover:-translate-y-1.5 hover:scale-[1.008] hover:bg-white/60 dark:hover:bg-white/20 hover:shadow-[0_25px_60px_rgba(0,0,0,0.1)] hover:border-brand-orange/50 text-start">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/40 dark:bg-white/10 px-4 py-1.5 text-xs font-bold tracking-wide text-foreground backdrop-blur-md mb-3 shadow-xs">
                <span className="size-2 rounded-full bg-brand-orange animate-pulse" />
                <span className="font-bold text-brand-green">{ar ? "أداء المجموعة ورؤى الأعمال" : "Group Performance & Business Insights"}</span>
              </div>
              <h2 id="dash-heading" className="font-head text-xl sm:text-2xl lg:text-3xl font-extrabold text-foreground leading-snug">
                {ar ? "أعمالنا في أرقام" : "Our Business in Numbers"}
              </h2>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed text-start max-w-3xl">
                {ar ? (
                  <span>تعرّف على حجم عملياتنا المتكاملة، والمشروعات الموثقة التي ننفذها، والأسواق التي نخدمها عبر قطاعات <span className="text-brand-orange font-bold">مجموعة سامي بن عياد</span>.</span>
                ) : (
                  <span>Explore the scale of our integrated operations, documented projects delivered, and markets served across <span className="text-brand-orange font-bold">SAMI BIN AYYAD GROUP</span>.</span>
                )}
              </p>
            </div>

            {/* Aggregated Group Statistics Grid inside the same unified glass card */}
            <div className="mt-8 pt-8 border-t border-border/50 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {aggregateStats.map((stat, idx) => {
                const Icon = icons[stat.sector];
                return (
                  <div
                    key={idx}
                    className="group/stat relative rounded-2xl border border-white/50 bg-white/50 dark:bg-white/15 p-5 backdrop-blur-xl shadow-xs transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-white/80 dark:hover:bg-white/25 hover:border-brand-orange/50 hover:shadow-md cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="flex size-9 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green-text transition-transform duration-300 group-hover/stat:scale-110">
                          <Icon className="size-4.5" />
                        </span>
                        <span className="font-mono text-[11px] font-bold text-muted-foreground/70 border border-border/60 rounded-full px-2 py-0.5">
                          0{idx + 1}
                        </span>
                      </div>
                      {/* Milestones-style gradient and font size matching Our Journey */}
                      <div
                        className="font-head text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-500 drop-shadow-sm flex items-center gap-1 text-start"
                        dir={ar ? "rtl" : "ltr"}
                      >
                        <AnimatedStatistic value={stat.value} />
                      </div>
                      <h3 className="mt-2.5 text-xs sm:text-sm font-bold text-foreground">
                        {ar ? stat.labelAr : stat.labelEn}
                      </h3>
                    </div>
                    <p className="mt-3 text-[11px] leading-relaxed text-muted-foreground border-t border-border/40 pt-2.5">
                      {ar ? stat.subAr : stat.subEn}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Geographic Presence: Countries-First Interactive Glass Showcase */}
        <div className={cn(card, "mt-10 !p-8 sm:!p-10")}>
          <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/40 dark:bg-white/10 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md shadow-xs">
                <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
                <span className="font-bold text-brand-green">{ar ? "انتشارنا العالمي" : "Our Global Reach"}</span>
              </span>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-head text-foreground">
                {ar ? "الدول الشريكة والأسواق النشطة" : "Partner Countries & Active Markets"}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {ar
                  ? "أشر على أي دولة لعرض تفاصيل ونوع التعامل التجاري، ورؤية موقعها مباشرة على الخريطة التفاعلية."
                  : "Hover or select any country to inspect partnership nature and visualize its geographic location."}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold bg-brand-green/10 text-brand-green border border-brand-green/30 px-3 py-1.5 rounded-full">
                {partnerCountries.length} {ar ? "دول استراتيجية" : "Strategic Countries"}
              </span>
            </div>
          </div>

          {/* Interactive Layout: Side 1 (Interactive Countries Matrix) + Side 2 (Interactive Focused Map + Role Inspector) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Countries Matrix: Professional Glass Cards */}
            <div className="lg:col-span-7 flex flex-col gap-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {partnerCountries.map((c) => {
                  const isCurrent = activeCountry?.nameEn === c.nameEn;
                  return (
                    <div
                      key={c.nameEn}
                      onMouseEnter={() => setHoveredCountry(c.nameEn)}
                      onMouseLeave={() => setHoveredCountry(null)}
                      onClick={() => setSelectedCountry(c)}
                      className={cn(
                        "group relative flex flex-col justify-between rounded-2xl border p-4 transition-all duration-300 cursor-pointer backdrop-blur-xl select-none",
                        isCurrent
                          ? "border-brand-orange bg-brand-orange/15 shadow-[0_8px_25px_rgba(249,115,22,0.2)] ring-1 ring-brand-orange scale-[1.02]"
                          : "border-white/50 bg-white/40 dark:bg-white/10 hover:border-brand-orange/50 hover:bg-white/60 dark:hover:bg-white/20 hover:scale-[1.02] hover:-translate-y-0.5 shadow-sm hover:shadow-md"
                      )}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <span className="text-3xl drop-shadow-sm">{c.flag}</span>
                          <div className="text-start">
                            <h4 className={cn("font-bold text-base", isCurrent ? "text-brand-orange" : "text-foreground group-hover:text-brand-orange")}>
                              {ar ? c.nameAr : c.nameEn}
                            </h4>
                            <p className="text-xs text-muted-foreground">
                              {ar ? c.capitalAr : c.capitalEn}
                            </p>
                          </div>
                        </div>

                        {c.nameEn === "Egypt" ? (
                          <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-brand-green/15 text-brand-green border border-brand-green/30">
                            {ar ? "المقر الرئيسي" : "Global HQ"}
                          </span>
                        ) : (
                          <span className="size-2 rounded-full bg-brand-orange/70 group-hover:scale-125 transition-transform" />
                        )}
                      </div>

                      {/* Role Preview on Card */}
                      <p className="mt-3 text-xs text-muted-foreground leading-relaxed line-clamp-2 pt-2.5 border-t border-border/40 text-start">
                        {ar ? c.roleAr : c.roleEn}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Verified international trade network statement */}
              <div className="mt-2 rounded-2xl border border-white/50 bg-white/40 dark:bg-white/10 p-4 backdrop-blur-2xl ring-1 ring-white/30 text-start transition-all duration-300 hover:bg-white/60 dark:hover:bg-white/20">
                <div className="flex items-center gap-2 text-xs font-bold text-brand-orange">
                  <CheckCircle2 className="size-4" />
                  <span>{ar ? "معايير التجارة الدولية المعتمدة" : "Verified International Trade Standards"}</span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  {ar
                    ? "تدير مجموعة سامي بن عياد سلاسل إمداد وتصدير وشراكات تصنيع موثقة مع هذه الأسواق وفق أعلى مواصفات الجودة وشهادات المنشأ الرسمية."
                    : "Sami Bin Ayyad Group manages certified supply chains, export programs, and manufacturing alliances across these markets conforming to global quality standards."}
                </p>
              </div>
            </div>

            {/* Focused Visual Map & Country Inspector */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {/* Highlight Details Box */}
              <div className="rounded-2xl border border-brand-orange/40 bg-white/50 dark:bg-white/10 p-5 shadow-lg backdrop-blur-2xl ring-1 ring-brand-orange/20 text-start transition-all duration-300 hover:scale-[1.01] hover:bg-white/70 dark:hover:bg-white/20">
                <div className="flex items-center justify-between mb-3 pb-3 border-b border-border/50">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{activeCountry.flag}</span>
                    <div>
                      <h4 className="font-head font-extrabold text-lg text-foreground">
                        {ar ? activeCountry.nameAr : activeCountry.nameEn}
                      </h4>
                      <p className="text-xs text-muted-foreground font-mono">
                        {ar ? activeCountry.capitalAr : activeCountry.capitalEn} · {activeCountry.coords}
                      </p>
                    </div>
                  </div>
                  <span className="size-2.5 rounded-full bg-brand-orange animate-ping" />
                </div>

                <div className="space-y-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-orange block">
                    {ar ? "نوع التعامل ونطاق الشراكة:" : "Partnership Scope & Trade Activity:"}
                  </span>
                  <p className="text-xs sm:text-sm text-foreground/90 font-medium leading-relaxed">
                    {ar ? activeCountry.roleAr : activeCountry.roleEn}
                  </p>
                </div>
              </div>

              {/* Dynamic Map Display Highlighting Selected Country */}
              <div className="relative aspect-[16/11] w-full overflow-hidden rounded-2xl border border-white/20 bg-[#090D16] shadow-xl">
                <svg viewBox="0 0 1000 600" className="size-full">
                  <defs>
                    <pattern id="matrix-map-grid" width="36" height="36" patternUnits="userSpaceOnUse">
                      <circle cx="18" cy="18" r="0.8" fill="#38BDF8" opacity="0.18" />
                    </pattern>
                    <radialGradient id="ocean-glow-2" cx="58%" cy="45%" r="65%">
                      <stop offset="0%" stopColor="#0F172A" />
                      <stop offset="70%" stopColor="#090D16" />
                      <stop offset="100%" stopColor="#040711" />
                    </radialGradient>
                  </defs>

                  <rect width="1000" height="600" fill="url(#ocean-glow-2)" />
                  <rect width="1000" height="600" fill="url(#matrix-map-grid)" />

                  {/* Europe / Balkans */}
                  <path
                    d="M260,110 Q320,60 410,70 Q490,50 560,90 Q620,120 590,170 Q540,200 500,190 Q460,225 430,215 Q390,200 360,170 Q300,180 260,140 Z"
                    fill="#131B2E"
                    stroke="#1E293B"
                    strokeWidth="1.2"
                  />

                  {/* France */}
                  <path
                    d="M360,130 Q420,120 435,160 Q410,200 375,185 Q350,160 360,130 Z"
                    fill={activeCountry?.nameEn === "France" ? "rgba(249, 115, 22, 0.45)" : "#1E293B"}
                    stroke={activeCountry?.nameEn === "France" ? "#F97316" : "#334155"}
                    strokeWidth={activeCountry?.nameEn === "France" ? 3 : 1}
                    className="transition-colors duration-300"
                  />

                  {/* Italy */}
                  <path
                    d="M455,165 Q485,180 475,230 Q455,240 450,210 Q450,175 455,165 Z"
                    fill={activeCountry?.nameEn === "Italy" ? "rgba(249, 115, 22, 0.45)" : "#1E293B"}
                    stroke={activeCountry?.nameEn === "Italy" ? "#F97316" : "#334155"}
                    strokeWidth={activeCountry?.nameEn === "Italy" ? 3 : 1}
                    className="transition-colors duration-300"
                  />

                  {/* Turkey */}
                  <path
                    d="M540,165 Q625,150 670,175 Q650,215 550,205 Q530,185 540,165 Z"
                    fill={activeCountry?.nameEn === "Turkey" ? "rgba(249, 115, 22, 0.45)" : "#1E293B"}
                    stroke={activeCountry?.nameEn === "Turkey" ? "#F97316" : "#334155"}
                    strokeWidth={activeCountry?.nameEn === "Turkey" ? 3 : 1.2}
                    className="transition-colors duration-300"
                  />

                  {/* North Africa Base */}
                  <path
                    d="M170,230 Q330,210 470,230 Q540,240 580,280 Q560,370 480,430 Q330,460 210,410 Q160,320 170,230 Z"
                    fill="#101726"
                    stroke="#1E293B"
                    strokeWidth="1.2"
                  />

                  {/* Morocco */}
                  <path
                    d="M200,240 Q260,235 270,280 Q230,310 200,280 Z"
                    fill={activeCountry?.nameEn === "Morocco" ? "rgba(249, 115, 22, 0.45)" : "#1E293B"}
                    stroke={activeCountry?.nameEn === "Morocco" ? "#F97316" : "#334155"}
                    strokeWidth={activeCountry?.nameEn === "Morocco" ? 3 : 1}
                    className="transition-colors duration-300"
                  />

                  {/* Algeria */}
                  <path
                    d="M275,240 Q380,235 385,320 Q330,350 275,310 Z"
                    fill={activeCountry?.nameEn === "Algeria" ? "rgba(249, 115, 22, 0.45)" : "#1E293B"}
                    stroke={activeCountry?.nameEn === "Algeria" ? "#F97316" : "#334155"}
                    strokeWidth={activeCountry?.nameEn === "Algeria" ? 3 : 1}
                    className="transition-colors duration-300"
                  />

                  {/* Libya */}
                  <path
                    d="M390,240 Q495,240 495,330 Q440,350 390,320 Z"
                    fill={activeCountry?.nameEn === "Libya" ? "rgba(249, 115, 22, 0.45)" : "#1E293B"}
                    stroke={activeCountry?.nameEn === "Libya" ? "#F97316" : "#334155"}
                    strokeWidth={activeCountry?.nameEn === "Libya" ? 3 : 1}
                    className="transition-colors duration-300"
                  />

                  {/* Egypt */}
                  <path
                    d="M500,250 Q600,250 605,330 Q540,360 500,335 Z"
                    fill={activeCountry?.nameEn === "Egypt" ? "rgba(249, 115, 22, 0.45)" : "#1E293B"}
                    stroke={activeCountry?.nameEn === "Egypt" ? "#F97316" : "#10B981"}
                    strokeWidth={activeCountry?.nameEn === "Egypt" ? 3 : 1.5}
                    className="transition-colors duration-300"
                  />

                  {/* Arabian Peninsula */}
                  <path
                    d="M620,260 Q690,230 750,270 Q770,360 690,410 Q640,360 620,260 Z"
                    fill="#101726"
                    stroke="#1E293B"
                    strokeWidth="1.2"
                  />

                  {/* Kuwait Region */}
                  <circle
                    cx="735"
                    cy="255"
                    r="16"
                    fill={activeCountry?.nameEn === "Kuwait" ? "rgba(249, 115, 22, 0.45)" : "#1E293B"}
                    stroke={activeCountry?.nameEn === "Kuwait" ? "#F97316" : "#334155"}
                    strokeWidth={activeCountry?.nameEn === "Kuwait" ? 3 : 1}
                    className="transition-colors duration-300"
                  />

                  {/* Mauritania */}
                  <path
                    d="M160,350 Q210,340 215,400 Q170,420 150,380 Z"
                    fill={activeCountry?.nameEn === "Mauritania" ? "rgba(249, 115, 22, 0.45)" : "#1E293B"}
                    stroke={activeCountry?.nameEn === "Mauritania" ? "#F97316" : "#334155"}
                    strokeWidth={activeCountry?.nameEn === "Mauritania" ? 3 : 1}
                    className="transition-colors duration-300"
                  />

                  {/* Nile Delta & River (Egypt HQ) */}
                  <path
                    d="M555,260 Q575,250 590,260 Q585,275 575,275 Q565,275 555,260 Z"
                    fill="#10B981"
                  />
                  <path
                    d="M575,275 Q570,300 575,315 Q578,335 585,348 Q590,365 588,380 L590,410"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                  />

                  {/* Connectors */}
                  <g stroke="#38BDF8" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.35" fill="none">
                    <path d="M575,275 L475,230" />
                    <path d="M575,275 L435,160" />
                    <path d="M575,275 L570,155" />
                    <path d="M575,275 L735,255" />
                    <path d="M575,275 L495,330" />
                  </g>

                  {/* Dynamic Active Country Highlight Dot */}
                  {partnerCountries.map((c) => {
                    const isTarget = activeCountry?.nameEn === c.nameEn;
                    if (!isTarget) return null;
                    const cx = (c.x / 100) * 1000;
                    const cy = (c.y / 100) * 600;
                    return (
                      <g key={c.nameEn}>
                        <circle cx={cx} cy={cy} r="24" fill="#F97316" opacity="0.3" className="animate-ping" />
                        <circle cx={cx} cy={cy} r="14" fill="#F97316" opacity="0.4" />
                        <circle cx={cx} cy={cy} r="7" fill="#FFFFFF" stroke="#F97316" strokeWidth="3" />
                      </g>
                    );
                  })}
                </svg>

                {/* Country Location Pin Label on Map */}
                <div
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none transition-all duration-300"
                  style={{ left: `${activeCountry.x}%`, top: `${activeCountry.y}%` }}
                >
                  <div className="flex items-center gap-1.5 rounded-full bg-brand-orange text-white px-3 py-1 text-xs font-bold shadow-xl border border-white/40 ring-4 ring-brand-orange/30 whitespace-nowrap">
                    <span>{activeCountry.flag}</span>
                    <span>{ar ? activeCountry.nameAr : activeCountry.nameEn}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhatWeOfferSection({ ar }: { ar: boolean }) {
  const t = (v: { en: string; ar: string }) => (ar ? v.ar : v.en);

  return (
    <section id="what-we-offer" className="site-container py-12 scroll-mt-24">
      <div className="mb-8">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/40 dark:bg-white/10 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md shadow-xs">
          <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
          <span>{ar ? "نظرة عامة على الخدمات" : "Services Overview"}</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold font-head">
          {ar ? "نظرة عامة على الخدمات" : "Services Overview"}
        </h3>
        <p className="mt-1.5 text-sm text-muted-foreground max-w-2xl">
          {ar
            ? "نقدم حلولًا ومنتجات متكاملة تلبي احتياجات مختلف القطاعات، ونحوّل الخبرة إلى قيمة مستدامة."
            : "We deliver integrated solutions and products that meet the needs of diverse sectors, transforming expertise into sustainable value."}
        </p>
      </div>

      <div className="grid gap-6">
        {dashboardSectors.map((s) => {
          const data = activities[s.id];
          return (
            <div
              key={s.id}
              className="rounded-3xl border border-white/50 bg-white/40 dark:bg-white/10 p-6 sm:p-8 backdrop-blur-3xl shadow-[0_12px_40px_rgba(0,0,0,0.04)] ring-1 ring-white/30 transition-all duration-500 hover:-translate-y-1.5 hover:scale-[1.01] hover:bg-white/60 dark:hover:bg-white/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:border-brand-green/50"
            >
              <div className="w-full text-start border-b border-border/60 pb-5 mb-6">
                <div>
                  <h4 className="text-start font-head text-lg sm:text-xl font-bold text-foreground">
                    {t(s.name)}
                  </h4>
                  <span className={cn("text-xs font-bold text-brand-orange block mt-1 text-start", ar ? "font-sans" : "font-mono")}>
                    {data.items.length} {ar ? "خدمات ومشروعات رئيسية" : "Specialized Capabilities"}
                  </span>
                </div>
              </div>

              {/* Horizontal Flex Wrap of Services in Curved Glass Boxes */}
              <div className="flex flex-wrap gap-3">
                {data.items.map((item) => (
                  <div
                    key={item.en}
                    className="group flex items-center gap-2.5 rounded-2xl border border-white/50 bg-white/50 dark:bg-white/15 px-4 py-2.5 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-brand-green hover:bg-white/80 hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    <CheckCircle2 className="size-4 shrink-0 text-brand-green-text transition-transform group-hover:scale-110" />
                    <span className="text-xs sm:text-sm font-semibold text-foreground/90 leading-snug">
                      {t(item)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}


