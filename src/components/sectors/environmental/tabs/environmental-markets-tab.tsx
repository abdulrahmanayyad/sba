import { useState, useMemo } from "react";
import { Link } from "@tanstack/react-router";
import {
  Search,
  Globe2,
  FileText,
  Download,
  ArrowRight,
  TrendingUp,
  Award,
  CheckCircle2,
  Layers,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Building,
  Filter,
  X,
  ChevronRight
} from "lucide-react";
import { Reveal } from "@/components/home/reveal";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { ENVIRONMENTAL_66_MASTER_STUDIES } from "@/lib/studies/environmental-master-studies";
import { type GlobalMarketStudy } from "@/lib/global-markets-data";
import { useGlobalMarketsStudies } from "@/lib/global-markets-store";
import { getStudyRegionCategory } from "@/components/global-markets/global-markets-home";

interface EnvironmentalMarketsTabProps {
  ar: boolean;
}

function SectionBadge({ title }: { title: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
      <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
      {title}
    </span>
  );
}

function getStudyOrder(study: GlobalMarketStudy): number {
  if (typeof study.regionalRank === "number" && study.regionalRank > 0) {
    return study.regionalRank;
  }
  const match = study.subRegionOrProjectAr?.match(/الدراسة رقم\s*(\d+)/);
  if (match) return parseInt(match[1], 10);
  const codeMatch = study.slug?.match(/-(\d+)$/) || study.id?.match(/-(\d+)$/);
  if (codeMatch) return parseInt(codeMatch[1], 10);
  return 999;
}

export function EnvironmentalMarketsTab({ ar }: EnvironmentalMarketsTabProps) {
  const { studies } = useGlobalMarketsStudies();

  // Combine studies from store or master definition
  const allEnvStudies = useMemo(() => {
    const list = studies.filter((s) => s.sector === "environmental" && s.status !== "archived");
    if (list.length > 0) return list;
    return ENVIRONMENTAL_66_MASTER_STUDIES;
  }, [studies]);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"all" | "gcc" | "arab" | "africa" | "other">("all");
  const [selectedTier, setSelectedTier] = useState<"all" | "tier1" | "tier2" | "tier3">("all");
  const [sortBy, setSortBy] = useState<"order" | "score" | "name">("order");
  const [activeStudyModal, setActiveStudyModal] = useState<GlobalMarketStudy | null>(null);

  // Compute category counts
  const categoryCounts = useMemo(() => {
    const counts = { all: allEnvStudies.length, gcc: 0, arab: 0, africa: 0, other: 0 };
    allEnvStudies.forEach((s) => {
      const cat = getStudyRegionCategory(s);
      if (cat === "gcc") counts.gcc++;
      else if (cat === "arab") counts.arab++;
      else counts.africa++;
    });
    return counts;
  }, [allEnvStudies]);

  // Filtered & sorted studies
  const filteredStudies = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    const result = allEnvStudies.filter((s) => {
      // Category filter
      if (selectedCategory !== "all") {
        const cat = getStudyRegionCategory(s);
        if (selectedCategory === "gcc" && cat !== "gcc") return false;
        if (selectedCategory === "arab" && cat !== "arab") return false;
        if (selectedCategory === "africa" && (cat === "gcc" || cat === "arab")) return false;
      }

      // Tier filter
      if (selectedTier !== "all") {
        const score = s.opportunityScore ?? 0;
        if (selectedTier === "tier1" && score < 80) return false;
        if (selectedTier === "tier2" && (score < 65 || score >= 80)) return false;
        if (selectedTier === "tier3" && score >= 65) return false;
      }

      // Search query
      if (q) {
        const hay = [
          s.countryNameAr,
          s.countryNameEn,
          s.countryCode || "",
          s.titleAr,
          s.titleEn,
          s.activityTypeAr,
          s.activityTypeEn,
          s.opportunityRationaleAr,
          s.opportunityRationaleEn,
          ...(s.productTagsAr || []),
          ...(s.productTagsEn || []),
        ]
          .join(" ")
          .toLowerCase();
        if (!hay.includes(q)) return false;
      }

      return true;
    });

    return result.sort((a, b) => {
      if (sortBy === "score") {
        return (b.opportunityScore ?? 0) - (a.opportunityScore ?? 0);
      }
      if (sortBy === "name") {
        const nameA = ar ? a.countryNameAr : a.countryNameEn;
        const nameB = ar ? b.countryNameAr : b.countryNameEn;
        return nameA.localeCompare(nameB);
      }
      return getStudyOrder(a) - getStudyOrder(b);
    });
  }, [allEnvStudies, selectedCategory, selectedTier, searchQuery, sortBy, ar]);

  const tier1Count = useMemo(() => {
    return allEnvStudies.filter((s) => (s.opportunityScore ?? 0) >= 80).length;
  }, [allEnvStudies]);

  return (
    <div className="w-full space-y-12">
      {/* 1. Header & Hero Intro */}
      <section className="site-container">
        <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-6 md:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
          <Reveal>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
              <div className="flex-1 min-w-0">
                <SectionBadge title={ar ? "أسواقنا والدراسات البيئية الدولية" : "Our Global Environmental Markets"} />
                <h1 className="mt-3 font-head text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground">
                  {ar ? "خريطة الأسواق والدراسات البيئية المعتمدة (66 دولة)" : "Verified Environmental Market Studies (66 Countries)"}
                </h1>
                <p className="mt-3 max-w-3xl text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {ar
                    ? "سجل استراتيجي متكامل يغطي 66 سوقًا ودولة عبر الخليج العربي والشرق الأوسط وإفريقيا والأسواق الدولية؛ يشمل رصد المشروعات البيئية المعلنة والممولة دوليًا، متطلبات التراخيص والاعتماد، وحسابات المستهدفين وفق بنك دراسات مؤسسي موثق."
                    : "A comprehensive institutional register covering 66 markets across the GCC, MENA, Africa, and global territories. Detailing announced and multilaterally funded environmental projects, licensing frameworks, and qualified target accounts."}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <Button asChild size="default" className="rounded-full bg-brand-green text-white hover:bg-brand-orange transition-all duration-300 shadow-md">
                  <Link to="/global-markets/$sector" params={{ sector: "environmental" }}>
                    <span>{ar ? "بوابة الأبحاث المقارنة" : "Comparative Research Hub"}</span>
                    <ExternalLink className="size-4 ms-2 rtl:rotate-180" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* 2. Key Metrics Highlights */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 pt-4 border-t border-border/50">
              <div className="rounded-2xl border border-border bg-secondary/30 p-4 backdrop-blur-md">
                <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider block">
                  {ar ? "إجمالي الأسواق المدروسة" : "Studied Markets"}
                </span>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="font-head text-2xl font-extrabold text-brand-green">66</span>
                  <span className="text-xs text-muted-foreground">{ar ? "دولة وسوق دولي" : "Countries & Markets"}</span>
                </div>
                <p className="mt-1 text-[11px] text-muted-foreground">
                  {ar ? "تغطية شاملة للخليج وإفريقيا والعرب" : "GCC, Arab & Global coverage"}
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-secondary/30 p-4 backdrop-blur-md">
                <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider block">
                  {ar ? "أسواق المستوى الأول (Tier 1)" : "Tier 1 Priority Markets"}
                </span>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="font-head text-2xl font-extrabold text-brand-orange">{tier1Count}</span>
                  <span className="text-xs text-muted-foreground">{ar ? "سوق فائق الأولوية" : "High Priority"}</span>
                </div>
                <p className="mt-1 text-[11px] text-muted-foreground">
                  {ar ? "فرص فورية ومناقصات قائمة" : "Active tenders & immediate entry"}
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-secondary/30 p-4 backdrop-blur-md">
                <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider block">
                  {ar ? "قواعد البيانات التخصصية" : "Verified Databases"}
                </span>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="font-head text-2xl font-extrabold text-foreground">7–10</span>
                  <span className="text-xs text-muted-foreground">{ar ? "أوراق عمل لكل سوق" : "Worksheets / Study"}</span>
                </div>
                <p className="mt-1 text-[11px] text-muted-foreground">
                  {ar ? "حسابات، تراخيص، ومخاطر ومشاريع" : "Projects, licenses & risk logs"}
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-secondary/30 p-4 backdrop-blur-md">
                <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider block">
                  {ar ? "جاهزية التحالف والتشغيل" : "Partnership Readiness"}
                </span>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="font-head text-2xl font-extrabold text-brand-green">100%</span>
                  <span className="text-xs text-muted-foreground">{ar ? "موثق ومعتمد" : "Verified & Ready"}</span>
                </div>
                <p className="mt-1 text-[11px] text-muted-foreground">
                  {ar ? "تقارير Word وقواعد بيانات Excel" : "DOCX & XLSX Available"}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. Interactive Filters & Search Controls */}
      <section className="site-container">
        <div className="rounded-3xl border border-white/40 bg-background/80 p-6 shadow-sm backdrop-blur-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-border/50">
            {/* Category Filter Chips */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setSelectedCategory("all")}
                className={cn(
                  "rounded-full px-4 py-1.5 text-xs font-bold transition-all",
                  selectedCategory === "all"
                    ? "bg-brand-green text-white shadow-sm"
                    : "bg-secondary/60 text-muted-foreground hover:bg-secondary hover:text-foreground"
                )}
              >
                {ar ? `كافة الأسواق (${categoryCounts.all})` : `All Markets (${categoryCounts.all})`}
              </button>

              <button
                onClick={() => setSelectedCategory("gcc")}
                className={cn(
                  "rounded-full px-4 py-1.5 text-xs font-bold transition-all",
                  selectedCategory === "gcc"
                    ? "bg-brand-green text-white shadow-sm"
                    : "bg-secondary/60 text-muted-foreground hover:bg-secondary hover:text-foreground"
                )}
              >
                {ar ? `الدول الخليجية (${categoryCounts.gcc})` : `GCC Markets (${categoryCounts.gcc})`}
              </button>

              <button
                onClick={() => setSelectedCategory("arab")}
                className={cn(
                  "rounded-full px-4 py-1.5 text-xs font-bold transition-all",
                  selectedCategory === "arab"
                    ? "bg-brand-green text-white shadow-sm"
                    : "bg-secondary/60 text-muted-foreground hover:bg-secondary hover:text-foreground"
                )}
              >
                {ar ? `الدول العربية (${categoryCounts.arab})` : `Arab Markets (${categoryCounts.arab})`}
              </button>

              <button
                onClick={() => setSelectedCategory("africa")}
                className={cn(
                  "rounded-full px-4 py-1.5 text-xs font-bold transition-all",
                  selectedCategory === "africa"
                    ? "bg-brand-green text-white shadow-sm"
                    : "bg-secondary/60 text-muted-foreground hover:bg-secondary hover:text-foreground"
                )}
              >
                {ar ? `الأسواق الإفريقية والدولية (${categoryCounts.africa})` : `African & Global (${categoryCounts.africa})`}
              </button>
            </div>

            {/* Sort & Search */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {/* Tier Filter */}
              <select
                value={selectedTier}
                onChange={(e) => setSelectedTier(e.target.value as any)}
                className="rounded-full border border-border bg-background px-3 py-1.5 text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-brand-green/40"
              >
                <option value="all">{ar ? "كافة المستويات" : "All Tiers"}</option>
                <option value="tier1">{ar ? "المستوى الأول (Score ≥ 80)" : "Tier 1 (Score ≥ 80)"}</option>
                <option value="tier2">{ar ? "المستوى الثاني (Score 65–79)" : "Tier 2 (Score 65–79)"}</option>
                <option value="tier3">{ar ? "المستوى الثالث (Score < 65)" : "Tier 3 (Score < 65)"}</option>
              </select>

              {/* Sort by */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="rounded-full border border-border bg-background px-3 py-1.5 text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-brand-green/40"
              >
                <option value="order">{ar ? "الترتيب المعتمد بالسجل" : "Default Portfolio Order"}</option>
                <option value="score">{ar ? "أعلى تقييم للفرصة" : "Highest Opportunity Score"}</option>
                <option value="name">{ar ? "أبجديًا حسب الدولة" : "Country Name (A-Z)"}</option>
              </select>

              {/* Search input */}
              <div className="relative w-full sm:w-56">
                <Search className="absolute start-3 top-1/2 -translate-y-1/2 size-3.5 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={ar ? "ابحث عن دولة أو تخصص..." : "Search country or spec..."}
                  className="w-full rounded-full border border-border bg-background ps-8 pe-3 py-1.5 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-green/40"
                />
              </div>
            </div>
          </div>

          {/* Active Results Counter */}
          <div className="pt-3 flex items-center justify-between text-xs text-muted-foreground">
            <span>
              {ar
                ? `عرض ${filteredStudies.length} من إجمالي ${allEnvStudies.length} سوق بيئي موثق`
                : `Showing ${filteredStudies.length} of ${allEnvStudies.length} verified environmental market studies`}
            </span>
            {(searchQuery || selectedCategory !== "all" || selectedTier !== "all") && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                  setSelectedTier("all");
                }}
                className="text-brand-orange hover:underline flex items-center gap-1 font-semibold"
              >
                <X className="size-3" />
                {ar ? "إعادة الضبط" : "Reset Filters"}
              </button>
            )}
          </div>
        </div>
      </section>

      {/* 4. Market Studies Cards Grid */}
      <section className="site-container">
        {filteredStudies.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-border p-12 text-center bg-secondary/20">
            <Globe2 className="size-12 mx-auto text-muted-foreground/60 mb-3" />
            <h3 className="font-head text-lg font-bold text-foreground">
              {ar ? "لم يتم العثور على نتائج مطابقة" : "No Matching Markets Found"}
            </h3>
            <p className="text-xs text-muted-foreground mt-1 max-w-md mx-auto">
              {ar
                ? "يرجى تجربة كلمات بحث أخرى أو إزالة الفلاتر المحددة لاستعراض كافة أسواق ودراسات قطاع البيئة."
                : "Try adjusting your search criteria or resetting filters to explore the complete environmental intelligence directory."}
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredStudies.map((study, idx) => {
              const score = study.opportunityScore ?? 0;
              const isTier1 = score >= 80;
              const isTier2 = score >= 65 && score < 80;

              return (
                <Reveal key={study.id} delay={Math.min(idx * 0.03, 0.3)}>
                  <div className="interactive-card rounded-3xl border border-white/40 bg-background/85 p-6 shadow-sm backdrop-blur-xl hover:border-brand-green/70 hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full group">
                    <div>
                      {/* Top Header: Flag + Name + Score Badge */}
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex items-center gap-2.5 min-w-0">
                          {study.countryCode && (
                            <img
                              src={`https://flagcdn.com/w40/${study.countryCode.toLowerCase()}.png`}
                              srcSet={`https://flagcdn.com/w80/${study.countryCode.toLowerCase()}.png 2x`}
                              alt={ar ? study.countryNameAr : study.countryNameEn}
                              className="h-5 w-7 rounded object-cover border border-border shadow-xs shrink-0"
                              loading="lazy"
                            />
                          )}
                          <div className="min-w-0">
                            <h3 className="font-head text-base sm:text-lg font-bold text-foreground truncate group-hover:text-brand-green transition-colors">
                              {ar ? study.countryNameAr : study.countryNameEn}
                            </h3>
                            <span className="text-[10px] text-muted-foreground block truncate">
                              {ar ? study.subRegionOrProjectAr : study.subRegionOrProjectEn}
                            </span>
                          </div>
                        </div>

                        {/* Opportunity Score Pill */}
                        <div className="shrink-0 text-end">
                          <span
                            className={cn(
                              "rounded-full px-2.5 py-0.5 font-mono text-xs font-extrabold shadow-xs inline-block",
                              isTier1
                                ? "bg-brand-green text-white"
                                : isTier2
                                  ? "bg-brand-orange text-white"
                                  : "bg-secondary text-foreground border border-border"
                            )}
                          >
                            {score}/100
                          </span>
                        </div>
                      </div>

                      {/* Tier Badge */}
                      <div className="mb-3">
                        <span
                          className={cn(
                            "inline-flex items-center gap-1 rounded-lg px-2.5 py-1 text-[11px] font-bold border",
                            isTier1
                              ? "bg-brand-green/10 text-brand-green border-brand-green/30"
                              : isTier2
                                ? "bg-brand-orange/10 text-brand-orange border-brand-orange/30"
                                : "bg-secondary/70 text-muted-foreground border-border"
                          )}
                        >
                          <ShieldCheck className="size-3.5" />
                          <span>{ar ? study.opportunityTierAr : study.opportunityTier}</span>
                        </span>
                      </div>

                      {/* Activity Focus */}
                      <div className="mb-3">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block mb-0.5">
                          {ar ? "مجال النشاط والاستشارات:" : "Activity Focus:"}
                        </span>
                        <p className="text-xs text-foreground/90 font-medium line-clamp-2 leading-relaxed">
                          {ar ? study.activityTypeAr : study.activityTypeEn}
                        </p>
                      </div>

                      {/* Opportunity Rationale */}
                      <div className="mb-4">
                        <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                          {ar ? study.opportunityRationaleAr : study.opportunityRationaleEn}
                        </p>
                      </div>

                      {/* Product Tags */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {(ar ? study.productTagsAr : study.productTagsEn).slice(0, 3).map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="rounded-md border border-border/60 bg-secondary/50 px-2 py-0.5 text-[10px] font-medium text-foreground/80"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Meta & Action Buttons */}
                    <div className="pt-4 border-t border-border/50 space-y-3">
                      <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Layers className="size-3.5 text-brand-green" />
                          <span>{ar ? "قاعدة بيانات 7–10 أوراق عمل" : "7–10 Worksheets Database"}</span>
                        </span>
                        <span className="font-semibold text-brand-orange">
                          {ar ? "جاهز للتحالف" : "Verified"}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => setActiveStudyModal(study)}
                          className="rounded-xl border border-border bg-secondary/50 hover:bg-secondary px-3 py-2 text-xs font-bold text-foreground transition-all flex items-center justify-center gap-1.5"
                        >
                          <FileText className="size-3.5 text-brand-orange" />
                          <span>{ar ? "معاينة سريعة" : "Quick View"}</span>
                        </button>

                        <Button asChild size="sm" className="rounded-xl bg-brand-green text-white hover:bg-brand-orange transition-all duration-300">
                          <Link to="/global-markets/$sector/$slug" params={{ sector: "environmental", slug: study.slug }}>
                            <span>{ar ? "ملف الدراسة" : "Full Dossier"}</span>
                            <ArrowRight className="size-3.5 ms-1 rtl:rotate-180" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        )}
      </section>

      {/* 5. Detailed Quick View Modal (Dialog) */}
      <Dialog open={!!activeStudyModal} onOpenChange={(open) => !open && setActiveStudyModal(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/30 bg-background/95 backdrop-blur-2xl p-6 sm:p-8">
          {activeStudyModal && (
            <>
              <DialogHeader>
                <div className="flex items-center justify-between gap-4 mb-2">
                  <div className="flex items-center gap-3">
                    {activeStudyModal.countryCode && (
                      <img
                        src={`https://flagcdn.com/w40/${activeStudyModal.countryCode.toLowerCase()}.png`}
                        srcSet={`https://flagcdn.com/w80/${activeStudyModal.countryCode.toLowerCase()}.png 2x`}
                        alt={ar ? activeStudyModal.countryNameAr : activeStudyModal.countryNameEn}
                        className="h-6 w-9 rounded object-cover border border-border shadow-xs"
                      />
                    )}
                    <div>
                      <DialogTitle className="font-head text-xl font-bold text-foreground">
                        {ar ? activeStudyModal.countryNameAr : activeStudyModal.countryNameEn}
                      </DialogTitle>
                      <DialogDescription className="text-xs text-muted-foreground">
                        {ar ? activeStudyModal.subRegionOrProjectAr : activeStudyModal.subRegionOrProjectEn}
                      </DialogDescription>
                    </div>
                  </div>

                  <span className="rounded-full bg-brand-green px-3 py-1 font-mono text-xs font-bold text-white shadow-xs">
                    {activeStudyModal.opportunityScore}/100
                  </span>
                </div>
              </DialogHeader>

              <div className="space-y-4 py-3 text-sm">
                {/* Tier */}
                <div className="rounded-2xl border border-brand-green/30 bg-brand-green/10 p-3 flex items-center justify-between">
                  <span className="font-head text-xs font-bold text-brand-green">
                    {ar ? activeStudyModal.opportunityTierAr : activeStudyModal.opportunityTier}
                  </span>
                  <span className="text-[11px] font-semibold text-muted-foreground">
                    {ar ? `تصنيف الأولوية: ${activeStudyModal.priorityGrade}` : `Priority Grade: ${activeStudyModal.priorityGrade}`}
                  </span>
                </div>

                {/* Activity & Rationale */}
                <div>
                  <h4 className="font-head text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                    {ar ? "مجال النشاط والاستشارات البيئية:" : "Activity & Scope:"}
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold text-foreground leading-relaxed">
                    {ar ? activeStudyModal.activityTypeAr : activeStudyModal.activityTypeEn}
                  </p>
                </div>

                <div>
                  <h4 className="font-head text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                    {ar ? "ملخص الفرصة والجاهزية السوقية:" : "Opportunity Summary:"}
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {ar ? activeStudyModal.opportunityRationaleAr : activeStudyModal.opportunityRationaleEn}
                  </p>
                </div>

                {/* Product Tags */}
                <div>
                  <h4 className="font-head text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                    {ar ? "المحاور البيئية وحلول الاستدامة:" : "Environmental Pillars & Solutions:"}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {(ar ? activeStudyModal.productTagsAr : activeStudyModal.productTagsEn).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="rounded-lg border border-border bg-secondary/60 px-2.5 py-1 text-xs font-medium text-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* KPIs & Specs */}
                {activeStudyModal.kpis && activeStudyModal.kpis.length > 0 && (
                  <div className="grid gap-2 sm:grid-cols-2 pt-2">
                    {activeStudyModal.kpis.map((kpi, kIdx) => (
                      <div key={kIdx} className="rounded-xl border border-border/60 bg-secondary/30 p-2.5">
                        <span className="text-[10px] text-muted-foreground block">{ar ? kpi.labelAr : kpi.labelEn}</span>
                        <span className="font-head text-sm font-bold text-foreground block mt-0.5">{kpi.value}</span>
                        {kpi.unit && <span className="text-[10px] text-muted-foreground block">{kpi.unit}</span>}
                      </div>
                    ))}
                  </div>
                )}

                {/* Official Downloads if available */}
                {(activeStudyModal.downloadDocxUrl || activeStudyModal.downloadXlsxUrl) && (
                  <div className="rounded-2xl border border-border bg-secondary/40 p-4 space-y-2">
                    <span className="font-head text-xs font-bold text-foreground block">
                      {ar ? "وثائق الدراسة المعتمدة للتحميل المؤسسي:" : "Official Study Documents for Download:"}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {activeStudyModal.downloadDocxUrl && (
                        <a
                          href={activeStudyModal.downloadDocxUrl}
                          download
                          className="inline-flex items-center gap-1.5 rounded-full border border-brand-green bg-brand-green/10 px-3.5 py-1.5 text-xs font-bold text-brand-green hover:bg-brand-green hover:text-white transition-all"
                        >
                          <Download className="size-3.5" />
                          <span>{ar ? "تقرير الدراسة الشامل (Word)" : "Word Report (.docx)"}</span>
                        </a>
                      )}
                      {activeStudyModal.downloadXlsxUrl && (
                        <a
                          href={activeStudyModal.downloadXlsxUrl}
                          download
                          className="inline-flex items-center gap-1.5 rounded-full border border-brand-orange bg-brand-orange/10 px-3.5 py-1.5 text-xs font-bold text-brand-orange hover:bg-brand-orange hover:text-white transition-all"
                        >
                          <Download className="size-3.5" />
                          <span>{ar ? "قاعدة البيانات والمشاريع (Excel)" : "Excel Database (.xlsx)"}</span>
                        </a>
                      )}
                    </div>
                  </div>
                )}

                {/* Modal Footer Actions */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-border">
                  <Button asChild size="default" className="w-full sm:w-auto rounded-full bg-brand-green text-white hover:bg-brand-orange">
                    <Link to="/global-markets/$sector/$slug" params={{ sector: "environmental", slug: activeStudyModal.slug }}>
                      <span>{ar ? "فتح صفحة الدراسة الكاملة" : "Open Full Study Dossier"}</span>
                      <ArrowRight className="size-4 ms-2 rtl:rotate-180" />
                    </Link>
                  </Button>

                  <Button asChild variant="outline" size="default" className="w-full sm:w-auto rounded-full">
                    <Link to="/sectors/$sector" params={{ sector: "environmental" }} search={{ tab: "start-consultation" }}>
                      <span>{ar ? "طلب استشارة لهذا السوق" : "Request Market Consultation"}</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
