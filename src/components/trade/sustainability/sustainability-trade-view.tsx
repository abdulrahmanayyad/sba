// Sustainability Trade View Orchestrator (Sections 1 to 16)
// SAMI BIN AYYAD GROUP — Global Sustainability & Environmental Opportunities

import React, { useState } from "react";
import { Reveal } from "@/components/home/reveal";
import { cn } from "@/lib/utils";
import { SUSTAINABILITY_STATS } from "@/lib/sustainability-trade-data";

// Sub-components
import { SustainabilityTargetMarkets } from "./sustainability-target-markets";
import { SustainabilitySolutionsPortfolio } from "./sustainability-solutions-portfolio";
import { SustainabilitySubsectorsShowcase } from "./sustainability-subsectors-showcase";
import { SustainabilityOpportunityDatabase } from "./sustainability-opportunity-database";
import { SustainabilityAlliancesTrends } from "./sustainability-alliances-trends";
import { SustainabilityFormsSection } from "./sustainability-forms-section";
import { SustainabilityDocumentsContact } from "./sustainability-documents-contact";

interface SustainabilityTradeViewProps {
  ar?: boolean;
  hideHero?: boolean;
}

export function SustainabilityTradeView({ ar = true, hideHero = false }: SustainabilityTradeViewProps) {
  return (
    <div className={cn("relative min-h-screen bg-background text-foreground pb-24", hideHero && "min-h-0 pb-12")}>
      {/* ======================================================== */}
      {/* 1. HERO SECTION (Only shown if hideHero is false) */}
      {/* ======================================================== */}
      {!hideHero && (
        <section className="relative w-full min-h-[calc(100svh-76px)] overflow-hidden text-white flex flex-col justify-center mb-12">
          <img
            src="/BG/Environment & Sustainability/Sustainable Environmental Home Page.jpg"
            alt={
              ar
                ? "الفرص العالمية | قطاع البيئة المستدامة - مجموعة سامي بن عياد"
                : "Global Sustainability & Environmental Opportunities - Sami Bin Ayyad Group"
            }
            className="absolute inset-0 size-full object-cover object-center pointer-events-none select-none"
            fetchPriority="high"
          />
          <div className="group-hero-overlay absolute inset-0 bg-black/75 backdrop-blur-[2px] pointer-events-none" />

          <div className="site-container relative z-10 flex min-h-[inherit] flex-col justify-between pt-16 sm:pt-24 pb-8 sm:pb-12">
            <div className="my-auto">
              <Reveal>
                <div className="flex items-center justify-start mb-6">
                  <div className="inline-flex items-center gap-2 rounded-full border border-brand-green/30 bg-black/60 px-4 py-1.5 text-xs font-bold tracking-wide text-white/95 backdrop-blur-md shadow-lg">
                    <span className="size-2 rounded-full bg-brand-green animate-pulse" />
                    <span>
                      {ar
                        ? "مجموعة سامي بن عياد · الفرص العالمية | قطاع البيئة المستدامة"
                        : "SAMI BIN AYYAD GROUP · Global Sustainability Opportunities"}
                    </span>
                  </div>
                </div>

                <h1 className="font-head text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight text-start drop-shadow-md max-w-4xl">
                  {ar
                    ? "حلول بيئية متكاملة، واستشارات امتثال صناعي، وشراكات في الطاقة النظيفة والاقتصاد الدائري"
                    : "Integrated Environmental Solutions, Industrial Compliance, Clean Energy & Circular Economy Alliances"}
                </h1>

                <p className="mt-4 max-w-3xl text-sm sm:text-base text-slate-200 leading-relaxed font-sans text-start">
                  {ar
                    ? "بوابة استثمارية وشراكات تشغيلية تربط المبادرات الوطنية الكبرى والمصانع الإقليمية بأحدث التقنيات والحلول المستدامة، مع إفصاح كامل وموثق عن نطاق التنفيذ المباشر وعبر التحالفات الاستراتيجية المعتمدة."
                    : "A business gateway connecting national green mega-programs and industrial facilities with advanced sustainability solutions, featuring transparent disclosure of direct scope and certified consortium alliances."}
                </p>
              </Reveal>
            </div>
          </div>
        </section>
      )}

      {/* ======================================================== */}
      {/* SECTION 1: GLOBAL ENVIRONMENTAL OVERVIEW & INDICATORS STRIP */}
      {/* ======================================================== */}
      <section id="sustainability-overview" className="site-container relative z-10 mb-12">
        <div className="interactive-card glass-box-interactive w-full rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl backdrop-blur-2xl transition-all duration-300">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md shadow-xs">
              <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
              <span>{ar ? "نظرة عامة على الفرص البيئية العالمية" : "Global Sustainability Overview"}</span>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-foreground mt-0.5 leading-snug">
                  {ar
                    ? "قطاع البيئة المستدامة — الشراكات والمشروعات الاستراتيجية"
                    : "Sustainability Sector — Strategic Opportunities & Alliances"}
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed max-w-4xl">
                  {ar
                    ? "نطاق عمل متكامل يغطي استشارات الامتثال البيئي، محطات الطاقة المتجددة الصناعية، إعادة تدوير المخلفات، وإدارة الموارد المائية في مصر، المملكة العربية السعودية، ودول الخليج وأفريقيا، وفق أعلى معايير الشفافية ونماذج التحالفات الدولية."
                    : "Comprehensive operational scope covering industrial environmental compliance, C&I solar PV, circular waste recovery, and water recycling across Egypt, KSA, GCC, and Africa."}
                </p>
              </div>

              {/* Quick Contact Link */}
              <div className="shrink-0 flex items-center gap-3">
                <a
                  href="#sustainability-forms"
                  className="px-4 py-2.5 rounded-xl text-xs font-bold !bg-brand-green !text-white hover:!bg-brand-orange hover:!text-white transition-all shadow-lg flex items-center gap-2 cursor-pointer"
                >
                  <span>{ar ? "تقديم فرصة / استفسار" : "Submit Opportunity"}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Indicators Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 pt-2">
            <div className="p-3.5 rounded-2xl bg-secondary/40 border border-border/80">
              <div className="text-xs text-muted-foreground mb-1">{ar ? "الأسواق المستهدفة" : "Target Markets"}</div>
              <div className="text-2xl font-black text-foreground">{SUSTAINABILITY_STATS.totalMarkets}</div>
              <div className="text-[10px] text-brand-green font-semibold mt-0.5">{ar ? "5 أولوية أولى + 8 ثانية" : "5 Tier 1 + 8 Tier 2"}</div>
            </div>

            <div className="p-3.5 rounded-2xl bg-secondary/40 border border-border/80">
              <div className="text-xs text-muted-foreground mb-1">{ar ? "محفظة الخدمات" : "Services Portfolio"}</div>
              <div className="text-2xl font-black text-foreground">{SUSTAINABILITY_STATS.totalServicesCount}</div>
              <div className="text-[10px] text-brand-green font-semibold mt-0.5">{ar ? "عبر 6 فئات رئيسية" : "Across 6 Categories"}</div>
            </div>

            <div className="p-3.5 rounded-2xl bg-secondary/40 border border-border/80">
              <div className="text-xs text-muted-foreground mb-1">{ar ? "المشروعات والفرص" : "Active Projects"}</div>
              <div className="text-2xl font-black text-foreground">{SUSTAINABILITY_STATS.totalOpportunities}</div>
              <div className="text-[10px] text-brand-green font-semibold mt-0.5">{ar ? "فرص موثقة ومطروحة" : "Documented Opportunities"}</div>
            </div>

            <div className="p-3.5 rounded-2xl bg-secondary/40 border border-border/80">
              <div className="text-xs text-muted-foreground mb-1">{ar ? "المناقصات المطروحة" : "Active Tenders"}</div>
              <div className="text-2xl font-black text-foreground">{SUSTAINABILITY_STATS.tendersCount}</div>
              <div className="text-[10px] text-amber-500 font-semibold mt-0.5">{ar ? "برامج وطنية ومناقصات" : "Government Mega-Programs"}</div>
            </div>

            <div className="p-3.5 rounded-2xl bg-secondary/40 border border-border/80">
              <div className="text-xs text-muted-foreground mb-1">{ar ? "التحالفات الدولية" : "Strategic Consortia"}</div>
              <div className="text-2xl font-black text-foreground">3</div>
              <div className="text-[10px] text-sky-500 font-semibold mt-0.5">{ar ? "EPC، تقنية، وتمويل" : "EPC, Tech, Green Finance"}</div>
            </div>

            <div className="p-3.5 rounded-2xl bg-secondary/40 border border-border/80">
              <div className="text-xs text-muted-foreground mb-1">{ar ? "نموذج الشفافية" : "Delivery Model"}</div>
              <div className="text-2xl font-black text-foreground">100%</div>
              <div className="text-[10px] text-brand-green font-semibold mt-0.5">{ar ? "إفصاح كامل عن النطاق" : "Disclosed Execution"}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTIONS 2 & 3: TARGET MARKETS & MARKET NEEDS */}
      {/* ======================================================== */}
      <div className="site-container relative z-10 mb-16">
        <SustainabilityTargetMarkets ar={ar} />
      </div>

      {/* ======================================================== */}
      {/* SECTION 4: ENVIRONMENTAL SERVICES & SOLUTIONS PORTFOLIO */}
      {/* ======================================================== */}
      <div className="site-container relative z-10 mb-16">
        <SustainabilitySolutionsPortfolio ar={ar} />
      </div>

      {/* ======================================================== */}
      {/* SECTIONS 5 TO 9: SUBSECTORS SHOWCASE (Energy, Waste, Water, Industrial) */}
      {/* ======================================================== */}
      <div className="site-container relative z-10 mb-16">
        <SustainabilitySubsectorsShowcase ar={ar} />
      </div>

      {/* ======================================================== */}
      {/* SECTION 10: OPPORTUNITY & TENDERS DATABASE (Interactive filters) */}
      {/* ======================================================== */}
      <div className="site-container relative z-10 mb-16">
        <SustainabilityOpportunityDatabase ar={ar} />
      </div>

      {/* ======================================================== */}
      {/* SECTIONS 11 & 12: STRATEGIC ALLIANCES & MARKET DRIVERS/CBAM */}
      {/* ======================================================== */}
      <div className="site-container relative z-10 mb-16">
        <SustainabilityAlliancesTrends ar={ar} />
      </div>

      {/* ======================================================== */}
      {/* SECTIONS 13 & 14: INTERACTIVE FORMS (Submission & Inquiry) */}
      {/* ======================================================== */}
      <div className="site-container relative z-10 mb-16">
        <SustainabilityFormsSection ar={ar} />
      </div>

      {/* ======================================================== */}
      {/* SECTIONS 15 & 16: DOCUMENTS CENTER & SECTOR CONTACT */}
      {/* ======================================================== */}
      <div className="site-container relative z-10">
        <SustainabilityDocumentsContact ar={ar} />
      </div>
    </div>
  );
}

