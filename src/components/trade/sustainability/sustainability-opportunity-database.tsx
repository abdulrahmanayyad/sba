import React, { useState, useMemo } from "react";
import { 
  Database, 
  Search, 
  Filter, 
  ExternalLink, 
  Building2, 
  Calendar, 
  Coins, 
  FileCheck2, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp,
  Tag,
  Clock,
  Sparkles
} from "lucide-react";
import { 
  SUSTAINABILITY_OPPORTUNITY_RECORDS, 
  SustainabilityOpportunity,
  SustainabilitySubsectorKey,
  ProjectStage
} from "@/lib/sustainability-trade-data";
import { cn } from "@/lib/utils";

interface SustainabilityOpportunityDatabaseProps {
  ar?: boolean;
}

export function SustainabilityOpportunityDatabase({ ar = true }: SustainabilityOpportunityDatabaseProps) {
  const [subsectorFilter, setSubsectorFilter] = useState<"all" | SustainabilitySubsectorKey>("all");
  const [stageFilter, setStageFilter] = useState<"all" | ProjectStage>("all");
  const [countryFilter, setCountryFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Available countries
  const countries = useMemo(() => {
    const list = Array.from(new Set(SUSTAINABILITY_OPPORTUNITY_RECORDS.map((r) => r.countryAr)));
    return list;
  }, []);

  const filteredOpportunities = useMemo(() => {
    return SUSTAINABILITY_OPPORTUNITY_RECORDS.filter((opp) => {
      const matchSub = subsectorFilter === "all" || opp.subsector === subsectorFilter;
      const matchStage = stageFilter === "all" || opp.projectStage === stageFilter;
      const matchCountry = countryFilter === "all" || opp.countryAr === countryFilter;
      const matchSearch =
        !searchQuery ||
        opp.projectNameAr.includes(searchQuery) ||
        opp.projectNameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        opp.countryAr.includes(searchQuery) ||
        opp.countryEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        opp.announcingEntityAr.includes(searchQuery) ||
        opp.announcingEntityEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        opp.requiredServicesAr.includes(searchQuery) ||
        opp.requiredServicesEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        opp.id.toLowerCase().includes(searchQuery.toLowerCase());

      return matchSub && matchStage && matchCountry && matchSearch;
    });
  }, [subsectorFilter, stageFilter, countryFilter, searchQuery]);

  const getStageBadge = (stage: ProjectStage, stageAr: string) => {
    switch (stage) {
      case "Tender Open":
        return "bg-brand-green/20 text-brand-green border-brand-green/40";
      case "Prequalification":
      case "Expression of Interest":
        return "bg-amber-500/20 text-amber-500 border-amber-500/40";
      case "Announced":
        return "bg-sky-500/20 text-sky-500 border-sky-500/40";
      case "Under Implementation":
        return "bg-indigo-500/20 text-indigo-500 border-indigo-500/40";
      default:
        return "bg-secondary text-muted-foreground border-border";
    }
  };

  return (
    <div id="opportunities-database" className="interactive-card glass-box-interactive w-full rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl backdrop-blur-2xl transition-all duration-300">
      {/* Header */}
      <div>
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md shadow-xs">
          <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
          <span>{ar ? "القسم العاشر: المناقصات والمشاريع المطروحة وقاعدة الفرص" : "Section 10: Active Tenders, Projects & Opportunities Registry"}</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-foreground mt-0.5 leading-snug">
              {ar ? "سجل الفرص والمشروعات والمناقصات البيئية المعتمدة" : "Verified Environmental Projects & Opportunities Registry"}
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed max-w-4xl">
              {ar
                ? "قاعدة بيانات منظومة الفرص البيئية الموثقة، تدعم التصفية حسب القطاع الفرعي، الدولة، مرحلة المشروع، ونموذج التعاقد، مع الشفافية الصارمة في عرض المواعيد وروابط المصادر الرسمية."
                : "Structured database of documented environmental projects and tenders across MENA, featuring controlled stage tracking, contracting models, and verified sources."}
            </p>
          </div>

          <span className="inline-flex items-center gap-1.5 rounded-2xl border border-brand-green/30 bg-brand-green/10 px-4 py-2 text-xs font-bold text-brand-green shrink-0 self-start">
            <Database className="size-4" />
            <span>{ar ? `${filteredOpportunities.length} فرصة مطابقة` : `${filteredOpportunities.length} Filtered Records`}</span>
          </span>
        </div>
      </div>

      {/* Multi-Filters & Search Bar */}
      <div className="flex flex-wrap items-center gap-3 border-y border-white/10 py-4">
        {/* Subsector Filter */}
        <div className="relative">
          <select
            value={subsectorFilter}
            onChange={(e) => setSubsectorFilter(e.target.value as any)}
            className="rounded-xl border border-foreground/25 bg-background/95 px-3 py-2 text-xs font-semibold text-foreground shadow-sm hover:border-brand-orange focus:border-brand-orange focus:outline-none transition-all cursor-pointer"
          >
            <option value="all">{ar ? "كافة القطاعات الفرعية" : "All Subsectors"}</option>
            <option value="waste_circular">{ar ? "إدارة المخلفات والاقتصاد الدائري" : "Waste & Circular Economy"}</option>
            <option value="renewable_energy">{ar ? "الطاقة المتجددة والحلول النظيفة" : "Renewable Energy & Clean Solutions"}</option>
            <option value="water_resources">{ar ? "المياه وإدارة الموارد" : "Water & Resources"}</option>
          </select>
        </div>

        {/* Project Stage Filter */}
        <div className="relative">
          <select
            value={stageFilter}
            onChange={(e) => setStageFilter(e.target.value as any)}
            className="rounded-xl border border-foreground/25 bg-background/95 px-3 py-2 text-xs font-semibold text-foreground shadow-sm hover:border-brand-orange focus:border-brand-orange focus:outline-none transition-all cursor-pointer"
          >
            <option value="all">{ar ? "كافة المراحل التعاقدية" : "All Project Stages"}</option>
            <option value="Tender Open">{ar ? "طرح مناقصة عامة (Tender Open)" : "Tender Open"}</option>
            <option value="Prequalification">{ar ? "تأهيل مسبق (Prequalification)" : "Prequalification"}</option>
            <option value="Expression of Interest">{ar ? "إبداء رغبة (EOI)" : "Expression of Interest"}</option>
            <option value="Announced">{ar ? "فرصة معلنة (Announced)" : "Announced"}</option>
            <option value="Under Implementation">{ar ? "قيد التنفيذ والتوسع" : "Under Implementation"}</option>
          </select>
        </div>

        {/* Country Filter */}
        <div className="relative">
          <select
            value={countryFilter}
            onChange={(e) => setCountryFilter(e.target.value)}
            className="rounded-xl border border-foreground/25 bg-background/95 px-3 py-2 text-xs font-semibold text-foreground shadow-sm hover:border-brand-orange focus:border-brand-orange focus:outline-none transition-all cursor-pointer"
          >
            <option value="all">{ar ? "كافة الدول" : "All Countries"}</option>
            {countries.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        {/* Search Input */}
        <div className="relative flex-1 min-w-[220px]">
          <Search className="absolute start-3 top-1/2 -translate-y-1/2 size-3.5 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={ar ? "ابحث باسم المشروع، الجهة، الكود أو الخدمات..." : "Search project, entity, code, or service..."}
            className="w-full rounded-xl border border-foreground/25 bg-background/95 ps-8 pe-4 py-2 text-xs text-foreground placeholder:text-muted-foreground shadow-sm focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/30 transition-all"
          />
        </div>
      </div>

      {/* Database Opportunities Grid */}
      <div className="space-y-4">
        {filteredOpportunities.length === 0 ? (
          <div className="rounded-2xl border border-white/10 bg-background/50 p-8 text-center space-y-2">
            <p className="text-sm font-bold text-foreground">
              {ar ? "لم يتم العثور على أي مشاريع تطابق شروط التصفية" : "No Matching Environmental Opportunities Found"}
            </p>
            <p className="text-xs text-muted-foreground">
              {ar ? "يرجى تعديل خيارات التصفية أو مصطلح البحث لاستعراض المشاريع المسجلة." : "Please adjust filter criteria or search keyword to view records."}
            </p>
          </div>
        ) : (
          filteredOpportunities.map((opp) => {
            const isExpanded = expandedId === opp.id;

            return (
              <div
                key={opp.id}
                className="rounded-3xl border border-white/15 bg-background/70 p-5 sm:p-6 backdrop-blur-xl shadow-lg space-y-4 hover:border-brand-green/40 transition-all duration-300"
              >
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs font-bold bg-secondary/90 border border-border px-2.5 py-0.5 rounded-lg text-foreground">
                        {opp.id}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground">
                        <span>{opp.flag}</span>
                        <span>{ar ? opp.countryAr : opp.countryEn}</span>
                      </span>
                      <span className="text-muted-foreground text-[10px]">•</span>
                      <span className="text-xs text-muted-foreground">
                        {ar ? opp.cityRegionAr : opp.cityRegionEn}
                      </span>
                      <span className="text-muted-foreground text-[10px]">•</span>
                      <span className="text-xs font-medium text-brand-orange">
                        {ar ? opp.subsectorAr : opp.subsectorEn}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-foreground leading-snug">
                      {ar ? opp.projectNameAr : opp.projectNameEn}
                    </h3>

                    <p className="text-xs text-muted-foreground flex items-center gap-2">
                      <span className="font-semibold text-foreground">{ar ? "الجهة الطارحة:" : "Announcing Entity:"}</span>
                      <span>{ar ? opp.announcingEntityAr : opp.announcingEntityEn}</span>
                    </p>
                  </div>

                  {/* Stage & Value Column */}
                  <div className="flex flex-wrap sm:flex-col items-end gap-2 shrink-0">
                    <span className={cn(
                      "rounded-full px-3 py-1 text-[11px] font-bold border shadow-2xs",
                      getStageBadge(opp.projectStage, opp.projectStageAr)
                    )}>
                      {ar ? opp.projectStageAr : opp.projectStage}
                    </span>

                    <div className="text-end">
                      <span className="text-[10px] text-muted-foreground block">
                        {ar ? "القيمة الاستثمارية / النموذج:" : "Investment Value / Model:"}
                      </span>
                      <span className="font-mono text-xs font-bold text-foreground">
                        {opp.investmentValue} {opp.currency} ({opp.contractingModel})
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed bg-secondary/30 p-3.5 rounded-2xl border border-white/5">
                  {ar ? opp.projectDescriptionAr : opp.projectDescriptionEn}
                </p>

                {/* Key metadata strip */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs text-muted-foreground pt-1">
                  <div className="flex items-center gap-1.5">
                    <Tag className="size-3.5 text-brand-green shrink-0" />
                    <span className="truncate">
                      <strong className="text-foreground font-semibold">{ar ? "الخدمات:" : "Services:"}</strong> {ar ? opp.requiredServicesAr : opp.requiredServicesEn}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <Clock className="size-3.5 text-amber-500 shrink-0" />
                    <span>
                      <strong className="text-foreground font-semibold">{ar ? "الموعد النهائي:" : "Deadline:"}</strong> {opp.submissionDeadline}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 sm:justify-end">
                    <a
                      href={opp.officialSourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-orange hover:underline"
                    >
                      <span>{ar ? "رابط المصدر الرسمي" : "Official Source Link"}</span>
                      <ExternalLink className="size-3" />
                    </a>
                  </div>
                </div>

                {/* Expand / Details Toggle */}
                <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setExpandedId(isExpanded ? null : opp.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-green hover:text-brand-orange transition-colors cursor-pointer"
                  >
                    <span>{isExpanded ? (ar ? "إخفاء التفاصيل والشروط" : "Hide Requirements") : (ar ? "عرض اشتراطات التأهيل والشراكة" : "View Qualification & Alliance Requirements")}</span>
                    {isExpanded ? <ChevronUp className="size-3.5" /> : <ChevronDown className="size-3.5" />}
                  </button>

                  <span className="text-[10px] text-muted-foreground">
                    {ar ? `آخر تحديث: ${opp.lastUpdatedDate}` : `Updated: ${opp.lastUpdatedDate}`}
                  </span>
                </div>

                {/* Expanded Drawer */}
                {isExpanded && (
                  <div className="pt-3 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs animate-in fade-in duration-200">
                    <div className="rounded-2xl border border-white/10 bg-secondary/50 p-3.5 space-y-1">
                      <span className="font-bold text-foreground block text-[11px]">
                        {ar ? "اشتراطات التأهيل والخبرة الفنية:" : "Technical Qualification Requirements:"}
                      </span>
                      <p className="text-muted-foreground leading-relaxed">
                        {ar ? opp.qualificationRequirementsAr : opp.qualificationRequirementsEn}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-secondary/50 p-3.5 space-y-1">
                      <span className="font-bold text-foreground block text-[11px]">
                        {ar ? "متطلبات الشراكة والتحالف:" : "Consortium & Partnership Framework:"}
                      </span>
                      <p className="text-muted-foreground leading-relaxed">
                        {ar ? opp.partnershipRequirementsAr : opp.partnershipRequirementsEn}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

