// Sustainability Trade View Orchestrator (Sections 1 to 16)
// SAMI BIN AYYAD GROUP — Global Sustainability & Environmental Opportunities

import React, { useState } from "react";
import { Reveal } from "@/components/home/reveal";
import {
  Leaf,
  Globe2,
  ShieldCheck,
  TrendingUp,
  FileCheck2,
  ExternalLink,
  Zap,
  Recycle,
  Droplets,
  Building2,
  Filter,
  CheckCircle2,
  ChevronDown
} from "lucide-react";
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
        {/* If hideHero is true, show section title and intro card */}
        {hideHero && (
          <div className="mb-8 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-slate-800/90 border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/15 text-brand-green border border-brand-green/30 text-xs font-semibold">
                  <Leaf className="w-3.5 h-3.5" />
                  <span>{ar ? "القسم 1: نظرة عامة على الفرص البيئية العالمية" : "Section 1: Global Sustainability Overview"}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                  {ar
                    ? "قطاع البيئة المستدامة — الشراكات والمشروعات الاستراتيجية"
                    : "Sustainability Sector — Strategic Opportunities & Alliances"}
                </h2>
                <p className="text-slate-300 text-sm max-w-3xl leading-relaxed">
                  {ar
                    ? "نطاق عمل متكامل يغطي استشارات الامتثال البيئي، محطات الطاقة المتجددة الصناعية، إعادة تدوير المخلفات، وإدارة الموارد المائية في مصر، المملكة العربية السعودية، ودول الخليج وأفريقيا، وفق أعلى معايير الشفافية ونماذج التحالفات الدولية."
                    : "Comprehensive operational scope covering industrial environmental compliance, C&I solar PV, circular waste recovery, and water recycling across Egypt, KSA, GCC, and Africa."}
                </p>
              </div>

              {/* Quick Contact Link */}
              <div className="shrink-0 flex items-center gap-3">
                <a
                  href="#sustainability-forms"
                  className="px-4 py-2.5 rounded-xl text-xs font-bold !bg-brand-green !text-white hover:!bg-brand-orange hover:!text-white transition-all shadow-lg flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>{ar ? "تقديم فرصة / استفسار" : "Submit Opportunity"}</span>
                </a>
              </div>
            </div>

            {/* Quick Indicators Grid */}
            <div className="relative z-10 pt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10">
                <div className="text-xs text-slate-300 mb-1">{ar ? "الأسواق المستهدفة" : "Target Markets"}</div>
                <div className="text-2xl font-black text-white">{SUSTAINABILITY_STATS.totalMarkets}</div>
                <div className="text-[10px] text-brand-green mt-0.5">{ar ? "5 أولوية أولى + 8 ثانية" : "5 Tier 1 + 8 Tier 2"}</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10">
                <div className="text-xs text-slate-300 mb-1">{ar ? "محفظة الخدمات" : "Services Portfolio"}</div>
                <div className="text-2xl font-black text-white">{SUSTAINABILITY_STATS.totalServicesCount}</div>
                <div className="text-[10px] text-brand-green mt-0.5">{ar ? "عبر 6 فئات رئيسية" : "Across 6 Categories"}</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10">
                <div className="text-xs text-slate-300 mb-1">{ar ? "المشروعات والفرص" : "Active Projects"}</div>
                <div className="text-2xl font-black text-white">{SUSTAINABILITY_STATS.totalOpportunities}</div>
                <div className="text-[10px] text-brand-green mt-0.5">{ar ? "فرص موثقة ومطروحة" : "Documented Opportunities"}</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10">
                <div className="text-xs text-slate-300 mb-1">{ar ? "المناقصات المطروحة" : "Active Tenders"}</div>
                <div className="text-2xl font-black text-white">{SUSTAINABILITY_STATS.tendersCount}</div>
                <div className="text-[10px] text-amber-400 mt-0.5">{ar ? "برامج وطنية ومناقصات" : "Government Mega-Programs"}</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10">
                <div className="text-xs text-slate-300 mb-1">{ar ? "التحالفات الدولية" : "Strategic Consortia"}</div>
                <div className="text-2xl font-black text-white">3</div>
                <div className="text-[10px] text-sky-400 mt-0.5">{ar ? "EPC، تقنية، وتمويل" : "EPC, Tech, Green Finance"}</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10">
                <div className="text-xs text-slate-300 mb-1">{ar ? "نموذج الشفافية" : "Delivery Model"}</div>
                <div className="text-2xl font-black text-white">100%</div>
                <div className="text-[10px] text-brand-green mt-0.5">{ar ? "إفصاح كامل عن النطاق" : "Disclosed Execution"}</div>
              </div>
            </div>
          </div>
        )}

        {/* Quick Anchor Navigation Links */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs">
          <span className="text-slate-300 font-semibold shrink-0 flex items-center gap-1.5 ml-2">
            <Filter className="w-3.5 h-3.5" />
            <span>{ar ? "الانتقال السريع:" : "Jump to:"}</span>
          </span>
          <a
            href="#sustainability-target-markets"
            className="shrink-0 px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white border border-white/10 transition-colors"
          >
            {ar ? "الأسواق المستهدفة (2-3)" : "Target Markets (2-3)"}
          </a>
          <a
            href="#sustainability-solutions"
            className="shrink-0 px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white border border-white/10 transition-colors"
          >
            {ar ? "محفظة الخدمات (4)" : "Solutions Portfolio (4)"}
          </a>
          <a
            href="#sustainability-subsectors"
            className="shrink-0 px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white border border-white/10 transition-colors"
          >
            {ar ? "القطاعات الفرعية (5-9)" : "Subsectors (5-9)"}
          </a>
          <a
            href="#sustainability-opportunities"
            className="shrink-0 px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white border border-white/10 transition-colors"
          >
            {ar ? "بنك الفرص والمناقصات (10)" : "Opportunities & Tenders (10)"}
          </a>
          <a
            href="#sustainability-alliances-trends"
            className="shrink-0 px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white border border-white/10 transition-colors"
          >
            {ar ? "التحالفات والاتجاهات (11-12)" : "Consortia & Trends (11-12)"}
          </a>
          <a
            href="#sustainability-forms"
            className="shrink-0 px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white border border-white/10 transition-colors"
          >
            {ar ? "نماذج التقديم والطلب (13-14)" : "Submission Forms (13-14)"}
          </a>
          <a
            href="#sustainability-documents"
            className="shrink-0 px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white border border-white/10 transition-colors"
          >
            {ar ? "الوثائق والتواصل (15-16)" : "Docs & Contact (15-16)"}
          </a>
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

