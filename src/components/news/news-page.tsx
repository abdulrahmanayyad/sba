import { useState, useMemo } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Calendar,
  Clock,
  Layers,
  Search,
  Sparkles,
  Building2,
  Shirt,
  Utensils,
  Leaf,
  Briefcase,
  History,
  Filter,
  Check,
  Newspaper,
  BookOpen,
  BarChart3,
  Globe2,
  FileText
} from "lucide-react";
import { Reveal } from "@/components/home/reveal";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/language-context";
import { cn } from "@/lib/utils";
import {
  newsArticles,
  newsCategories,
  ARCHIVE_YEARS,
  type NewsSectorType,
  type NewsArticle,
  type NewsContentType
} from "./news-data";
import { CorporateTimeline } from "./corporate-timeline";
import { EconomicIndicatorsWidget } from "./economic-indicators-widget";

function SectionBadge({ title }: { title: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
      <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
      {title}
    </span>
  );
}

// Icon mapper for sectors
function getSectorIcon(sector: NewsSectorType) {
  switch (sector) {
    case "corporate":
      return <Briefcase className="size-3.5" />;
    case "construction":
      return <Building2 className="size-3.5" />;
    case "garment":
      return <Shirt className="size-3.5" />;
    case "food":
      return <Utensils className="size-3.5" />;
    case "environmental":
      return <Leaf className="size-3.5" />;
    case "heritage":
      return <BookOpen className="size-3.5" />;
    case "exhibitions":
      return <Globe2 className="size-3.5" />;
    case "insights":
      return <BarChart3 className="size-3.5" />;
    default:
      return <Layers className="size-3.5" />;
  }
}

function getContentTypeLabel(type?: NewsContentType, ar?: boolean) {
  switch (type) {
    case "corporate_milestone":
      return ar ? "محطة تاريخية مؤسسية" : "Corporate Milestone";
    case "corporate_news":
      return ar ? "خبر مؤسسي" : "Corporate News";
    case "industry_insight":
      return ar ? "تحليل قطاعي" : "Industry Insight";
    case "historical_review":
      return ar ? "مراجعة تاريخية" : "Historical Review";
    case "exhibition_event":
      return ar ? "معارض وفعاليات" : "Exhibitions & Events";
    case "market_data":
      return ar ? "بيانات اقتصادية" : "Market Data";
    default:
      return ar ? "تقرير موثق" : "Report";
  }
}

export function NewsPage() {
  const { language } = useLanguage();
  const ar = language === "AR";

  const [periodTab, setPeriodTab] = useState<"all" | "historical" | "modern">("all");
  const [selectedSector, setSelectedSector] = useState<NewsSectorType>("all");
  const [selectedYear, setSelectedYear] = useState<"all" | number>("all");
  const [selectedContentType, setSelectedContentType] = useState<"all" | NewsContentType>("all");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
  const [searchQuery, setSearchQuery] = useState("");

  // Handle Sector Change
  const handleSectorChange = (sector: NewsSectorType) => {
    setSelectedSector(sector);
    if (sector !== "all") {
      setSortDirection("asc"); // Chronological order inside specific sector archive
    } else {
      setSortDirection("desc"); // Newest first on main overview
    }
  };

  // Compute counts per sector
  const sectorCounts = useMemo(() => {
    const counts: Record<string, number> = { all: newsArticles.length };
    newsArticles.forEach((a) => {
      counts[a.sector] = (counts[a.sector] || 0) + 1;
    });
    return counts;
  }, []);

  // Compute counts per year
  const yearCounts = useMemo(() => {
    const counts: Record<number, number> = {};
    newsArticles.forEach((a) => {
      if (selectedSector === "all" || a.sector === selectedSector) {
        const y = a.historicalRefYear || a.year;
        counts[y] = (counts[y] || 0) + 1;
      }
    });
    return counts;
  }, [selectedSector]);

  // Filtered and sorted articles
  const filteredArticles = useMemo(() => {
    const list = newsArticles.filter((article) => {
      const artYear = article.historicalRefYear || article.year;

      // Period Tab filter
      if (periodTab === "historical" && (artYear < 2010 || artYear > 2020)) return false;
      if (periodTab === "modern" && artYear < 2020) return false;

      // Sector filter
      if (selectedSector !== "all" && article.sector !== selectedSector) return false;

      // Year filter
      if (selectedYear !== "all" && artYear !== selectedYear) return false;

      // Content Type filter
      if (selectedContentType !== "all" && article.contentType !== selectedContentType) return false;

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const inTitle = (ar ? article.titleAr : article.titleEn).toLowerCase().includes(q);
        const inExcerpt = (ar ? article.excerptAr : article.excerptEn).toLowerCase().includes(q);
        const inBody = (ar ? article.bodyAr : article.bodyEn).toLowerCase().includes(q);
        const inCat = (article.categoryAr + " " + article.categoryEn).toLowerCase().includes(q);
        const inKeywords = article.keywords?.some((k) => k.toLowerCase().includes(q));
        const inYear = artYear.toString().includes(q);

        if (!inTitle && !inExcerpt && !inBody && !inCat && !inKeywords && !inYear) return false;
      }

      return true;
    });

    // Chronological sorting
    return list.sort((a, b) => {
      const yearA = a.historicalRefYear || a.year;
      const yearB = b.historicalRefYear || b.year;
      const timeA = new Date(a.publishedAt).getTime();
      const timeB = new Date(b.publishedAt).getTime();

      if (sortDirection === "asc") {
        return yearA !== yearB ? yearA - yearB : timeA - timeB;
      }
      return yearB !== yearA ? yearB - yearA : timeB - timeA;
    });
  }, [periodTab, selectedSector, selectedYear, selectedContentType, sortDirection, searchQuery, ar]);

  // Featured Lead Article
  const featuredArticle = useMemo(() => {
    return newsArticles.find((a) => a.featured) || newsArticles[0];
  }, []);

  const activeSectorInfo = useMemo(() => {
    return newsCategories.find((c) => c.id === selectedSector);
  }, [selectedSector]);

  return (
    <div className="w-full">
      {/* 1. Newsroom & Archive Hero Header (Clean Full-width Background like Home Page) */}
      <section className="relative w-full overflow-hidden text-white pt-24 sm:pt-32 pb-16 sm:pb-20 mb-12">
        {/* Full-width background image & overlay (identical to Home hero) */}
        <img
          src="/BG/Main Home Page.jpg"
          alt={ar ? "أرشيف مجموعة سامي بن عياد" : "Sami Bin Ayyad Group Archive"}
          className="absolute inset-0 size-full object-cover object-center pointer-events-none select-none"
          fetchPriority="high"
        />
        <div className="group-hero-overlay absolute inset-0 bg-black/60 backdrop-blur-[1px] pointer-events-none" />

        <div className="site-container relative z-10 flex flex-col justify-center">
          <Reveal>
            {/* A. Small Top Headline (Right in Arabic / RTL, Left in English / LTR) */}
            <div className="flex items-center justify-start mb-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/50 px-4 py-1.5 text-xs font-bold tracking-wide text-white/95 backdrop-blur-md shadow-md">
                <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
                <span>
                  {ar
                    ? "مجموعة سامي بن عياد · الأرشيف المؤسسي الشامل"
                    : "Sami Bin Ayyad Group · Comprehensive Institutional Archive"}
                </span>
              </div>
            </div>

            {/* B. Main Headline (Refined, smaller and proportional) */}
            <h1 className="font-head text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-snug tracking-tight text-start drop-shadow-md max-w-4xl">
              {ar
                ? "الأرشيف التاريخي والأنشطة المؤسسية والتحليلات القطاعية"
                : "Corporate Legacy, Historical Archive & Sector Insights"}
            </h1>

            {/* C. Intro Paragraph (Aligned to start) */}
            <p className="mt-3.5 max-w-4xl text-sm sm:text-base leading-relaxed text-white/90 text-start drop-shadow-sm">
              {ar
                ? "منصة توثيقية متكاملة تستعرض الجذور التاريخية لأنشطة المجموعة منذ عام 1977، وتطور الكيانات المتخصصة في مصر والسعودية، والتحليلات القطاعية الموثقة (2010–2020)، وصولًا إلى التأسيس المؤسسي الجامع عام 2023 وأنشطة المجموعة الحديثة حتى 2026."
                : "A unified institutional platform documenting operational roots from 1977, cross-border entity growth in Egypt and Saudi Arabia, sector insights (2010–2020), and unified corporate activities following the 2023 institutional integration."}
            </p>

            {/* D. Archival Lineage Note — In a single line directly on background */}
            <div className="mt-8 w-full text-start">
              <h4 className="text-brand-orange font-bold text-xs sm:text-sm mb-1.5 text-start flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-brand-orange" />
                <span>{ar ? "ملاحظة توثيقية للأرشيف:" : "Archival Lineage Note:"}</span>
              </h4>
              <p className="text-xs sm:text-[12.5px] text-white/90 text-start drop-shadow-sm lg:whitespace-nowrap leading-relaxed">
                {ar
                  ? "التقارير والمراجعات القطاعية المؤرخة قبل عام 2023 توثق أنشطة الكيانات المؤسسة ومشاريعها المتخصصة قبل توحيدها الشامل تحت مظلة مجموعة سامي بن عياد عام 2023 (امتدادًا للجذور المهنية القائمة منذ 1977)."
                  : "Reports and sector reviews dated prior to 2023 document the operational milestones and market engagements of predecessor founding entities prior to their formal unification under Sami Bin Ayyad Group in 2023, building on foundational roots established since 1977."}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. Official Corporate Legacy & Timeline Section */}
      <section className="site-container pb-14">
        <Reveal>
          <CorporateTimeline />
        </Reveal>
      </section>

      {/* 3. Economic Indicators Showcase (OECD / NBE) */}
      <section className="site-container pb-14">
        <Reveal>
          <EconomicIndicatorsWidget />
        </Reveal>
      </section>

      {/* 4. Featured Lead Article (When on 'all', no search) */}
      {selectedSector === "all" && selectedYear === "all" && !searchQuery && featuredArticle && (
        <section className="site-container pb-12">
          <Reveal>
            <div className="group relative overflow-hidden rounded-3xl border border-white/30 bg-background/85 shadow-xl backdrop-blur-2xl transition-all duration-500 hover:-translate-y-0.5 hover:border-white/80 hover:shadow-[0_20px_48px_-12px_rgba(0,0,0,0.1)]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
                <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-[16/11] w-full overflow-hidden bg-secondary">
                  <img
                    src={featuredArticle.image}
                    alt={ar ? featuredArticle.titleAr : featuredArticle.titleEn}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute top-4 start-4 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-brand-orange px-3.5 py-1 text-xs font-bold text-white shadow-md">
                      {ar ? "محطة مؤسسية بارزة" : "Key Corporate Milestone"}
                    </span>
                    <span className="rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white/90 backdrop-blur-md border border-white/20">
                      {featuredArticle.historicalRefYear || featuredArticle.year}
                    </span>
                  </div>
                  <div className="absolute bottom-4 start-4 end-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white/90 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                      <Calendar className="size-3 text-brand-orange" />
                      <span>{ar ? featuredArticle.dateAr : featuredArticle.dateEn}</span>
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground mb-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-green/10 border border-brand-green/30 px-3 py-0.5 font-bold text-brand-green-text">
                        {getSectorIcon(featuredArticle.sector)}
                        <span>{ar ? featuredArticle.categoryAr : featuredArticle.categoryEn}</span>
                      </span>
                      <span>•</span>
                      <span className="inline-flex items-center gap-1 text-[11px]">
                        <Clock className="size-3 text-brand-orange" />
                        <span>{ar ? featuredArticle.readingTimeAr : featuredArticle.readingTimeEn}</span>
                      </span>
                    </div>

                    <h2 className="font-head text-lg sm:text-xl lg:text-2xl font-bold text-foreground group-hover:text-brand-green transition-colors leading-snug text-start">
                      <Link to="/news/$slug" params={{ slug: featuredArticle.slug }}>
                        {ar ? featuredArticle.titleAr : featuredArticle.titleEn}
                      </Link>
                    </h2>

                    <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed line-clamp-3 text-start">
                      {ar ? featuredArticle.excerptAr : featuredArticle.excerptEn}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-border/60 flex items-center justify-between">
                    <Button
                      asChild
                      className="rounded-full bg-brand-green hover:bg-brand-orange text-white font-bold text-xs shadow-md transition-all duration-300"
                    >
                      <Link to="/news/$slug" params={{ slug: featuredArticle.slug }}>
                        <span>{ar ? "قراءة التقرير الكامل" : "Read Full Article"}</span>
                        <ArrowRight className="size-3.5 ms-2 rtl:rotate-180" />
                      </Link>
                    </Button>

                    <span className="text-[11px] text-muted-foreground font-bold">
                      {featuredArticle.historicalRefYear || featuredArticle.year}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      )}

      {/* 5. Archive Controls: Period Tabs, Sector Navigation, Year Timeline, Search & Sort */}
      <section className="site-container pb-8 scroll-mt-24" id="archive-controls">
        <div className="flex flex-col gap-6 rounded-3xl border border-white/20 bg-background/80 p-5 sm:p-7 shadow-lg backdrop-blur-xl">
          {/* A. Period Filter Tabs (All vs Historical 2010-2020 vs Modern 2020-2026) */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pb-4 border-b border-border/60">
            <button
              type="button"
              onClick={() => {
                setPeriodTab("all");
                setSelectedYear("all");
              }}
              className={cn(
                "rounded-full px-5 py-2 text-xs font-bold transition-all duration-300 cursor-pointer shadow-sm",
                periodTab === "all"
                  ? "!bg-brand-green !text-white hover:!bg-brand-orange shadow-md"
                  : "border border-border/80 bg-secondary/80 text-foreground hover:!bg-brand-orange hover:!text-white"
              )}
            >
              {ar ? "كافة الأرشيف والمحتوى" : "Complete Archive"}
            </button>
            <button
              type="button"
              onClick={() => {
                setPeriodTab("historical");
                setSelectedYear("all");
              }}
              className={cn(
                "rounded-full px-5 py-2 text-xs font-bold transition-all cursor-pointer shadow-sm",
                periodTab === "historical"
                  ? "!bg-brand-orange !text-white shadow-md"
                  : "border border-border/80 bg-secondary/80 text-foreground hover:bg-secondary"
              )}
            >
              {ar ? "الأرشيف والتحليلات القطاعية (2010–2020)" : "Historical Sector Archive (2010–2020)"}
            </button>
            <button
              type="button"
              onClick={() => {
                setPeriodTab("modern");
                setSelectedYear("all");
              }}
              className={cn(
                "rounded-full px-5 py-2 text-xs font-bold transition-all cursor-pointer shadow-sm",
                periodTab === "modern"
                  ? "!bg-brand-orange !text-white shadow-md"
                  : "border border-border/80 bg-secondary/80 text-foreground hover:bg-secondary"
              )}
            >
              {ar ? "أخبار وتقارير المجموعة (2020–2026)" : "Corporate News & Reports (2020–2026)"}
            </button>
          </div>

          {/* B. Search Input (Positioned on Left in Arabic / RTL, Right in English / LTR) */}
          <div className="flex justify-end w-full">
            <div className="relative w-full md:w-96">
              <Search className="absolute start-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <input
                type="text"
                placeholder={
                  ar
                    ? "ابحث في عناوين الأخبار، المعارض، التحليلات، والسنوات..."
                    : "Search news archive, sector insights, topics, or years..."
                }
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-border bg-secondary/50 py-2.5 ps-10 pe-4 text-xs font-medium text-foreground placeholder:text-muted-foreground shadow-inner focus:border-brand-green focus:bg-background focus:outline-none focus:ring-1 focus:ring-brand-green transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute end-3.5 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* C. Sector Categories (Exact 8 Categories) */}
          <div>
            <div className="flex flex-wrap items-center gap-2">
              {newsCategories.map((cat) => {
                const isActive = selectedSector === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => handleSectorChange(cat.id)}
                    className={cn(
                      "rounded-full px-4 py-2 text-xs font-bold transition-all duration-200 cursor-pointer shadow-sm",
                      isActive
                        ? "!bg-brand-green !text-white shadow-md border border-brand-green"
                        : "border border-border/80 bg-background/90 text-foreground hover:border-brand-orange/50 hover:bg-secondary"
                    )}
                  >
                    <span>{ar ? cat.titleAr : cat.titleEn}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Dedicated Sector Banner when a specific sector is selected */}
        {activeSectorInfo && activeSectorInfo.id !== "all" && (
          <div className="mt-6 rounded-2xl border border-brand-green/30 bg-brand-green/5 p-5 backdrop-blur-md">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-brand-green/10 text-brand-green">
                  {getSectorIcon(activeSectorInfo.id)}
                </div>
                <div>
                  <h3 className="text-start font-head text-base sm:text-lg font-bold text-foreground">
                    {ar ? activeSectorInfo.titleAr : activeSectorInfo.titleEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 text-start">
                    {ar ? activeSectorInfo.descAr : activeSectorInfo.descEn}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
                <span className="rounded-full bg-brand-green/15 text-brand-green font-bold text-xs px-3 py-1">
                  {ar
                    ? `${filteredArticles.length} مادة في الأرشيف`
                    : `${filteredArticles.length} Archived Entries`}
                </span>
                <span className="rounded-full bg-secondary text-muted-foreground font-bold text-xs px-3 py-1 border border-border">
                  {sortDirection === "asc"
                    ? ar
                      ? "تسلسل تاريخي: الأقدم → الأحدث"
                      : "Timeline: Oldest → Newest"
                    : ar
                    ? "أحدث أولًا: الأحدث → الأقدم"
                    : "Recent First: Newest → Oldest"}
                </span>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* 6. Articles Grid */}
      <section className="site-container pb-24">
        {filteredArticles.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article, idx) => {
              const artYear = article.historicalRefYear || article.year;
              const isHistorical = artYear < 2020;
              return (
                <Reveal key={article.id} delay={Math.min(idx * 0.03, 0.3)}>
                  <article className="group h-full flex flex-col justify-between overflow-hidden rounded-3xl border border-white/25 bg-background/85 shadow-md backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_32px_-8px_rgba(22,135,108,0.22)]">
                    <div>
                      {/* Image Banner with Year Pill */}
                      <Link to="/news/$slug" params={{ slug: article.slug }}>
                        <div className="relative aspect-[16/10] w-full overflow-hidden bg-secondary">
                          <img
                            src={article.image}
                            alt={ar ? article.imageAltAr || article.titleAr : article.imageAltEn || article.titleEn}
                            loading="lazy"
                            className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                          {/* Badges Overlay */}
                          <div className="absolute top-3 start-3 flex flex-wrap items-center gap-1.5">
                            <span className="rounded-full bg-brand-orange px-3 py-0.5 text-[11px] font-bold text-white shadow-md">
                              {artYear}
                            </span>
                            <span className="rounded-full bg-black/60 px-2.5 py-0.5 text-[10px] font-bold text-white/90 backdrop-blur-md border border-white/20">
                              {ar ? article.categoryAr : article.categoryEn}
                            </span>
                          </div>

                          {/* Content Type Pill */}
                          <div className="absolute bottom-3 start-3">
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-white/95 bg-black/55 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/15">
                              {isHistorical ? (
                                <BarChart3 className="size-2.5 text-brand-orange" />
                              ) : (
                                <Calendar className="size-2.5 text-brand-green" />
                              )}
                              <span>{getContentTypeLabel(article.contentType, ar)}</span>
                            </span>
                          </div>
                        </div>
                      </Link>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center justify-between gap-2 text-xs text-muted-foreground mb-3 font-medium">
                          <span className="inline-flex items-center gap-1">
                            <Calendar className="size-3 text-brand-orange" />
                            <span>{ar ? article.dateAr : article.dateEn}</span>
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <Clock className="size-3 text-brand-green" />
                            <span>{ar ? article.readingTimeAr : article.readingTimeEn}</span>
                          </span>
                        </div>

                        <h3 className="text-start font-head text-base sm:text-lg font-bold text-foreground group-hover:text-brand-orange transition-colors leading-snug line-clamp-2">
                          <Link to="/news/$slug" params={{ slug: article.slug }}>
                            {ar ? article.titleAr : article.titleEn}
                          </Link>
                        </h3>

                        <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3 text-start">
                          {ar ? article.excerptAr : article.excerptEn}
                        </p>
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className="p-6 pt-0 border-t border-border/40 mt-4 flex items-center justify-between">
                      <Link
                        to="/news/$slug"
                        params={{ slug: article.slug }}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-green group-hover:text-brand-orange transition-colors"
                      >
                        <span>
                          {isHistorical
                            ? ar
                              ? "قراءة التحليل القطاعي"
                              : "Read Sector Review"
                            : ar
                            ? "قراءة التقرير الكامل"
                            : "Read Full Report"}
                        </span>
                        <ArrowRight className="size-3 rtl:rotate-180" />
                      </Link>

                      <span className="text-[10px] font-bold text-muted-foreground/70">
                        #{article.id.replace("sba-news-", "NEWS ").replace("sba-hist-", "HIST ")}
                      </span>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        ) : (
          <div className="py-20 text-center rounded-3xl border border-dashed border-border bg-secondary/30">
            <History className="mx-auto size-12 text-muted-foreground/50 mb-3" />
            <h3 className="text-center font-head text-lg font-bold text-foreground">
              {ar ? "لا توجد مواد مطابقة لمعايير البحث" : "No matching archive entries"}
            </h3>
            <p className="text-xs text-muted-foreground mt-1 max-w-sm mx-auto">
              {ar
                ? "جرّب إعادة تعيين الفلاتر أو إزالة كلمات البحث للاطلاع على كامل الأرشيف التاريخي."
                : "Try resetting your search query or selecting a different year or sector."}
            </p>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => {
                setPeriodTab("all");
                setSelectedSector("all");
                setSelectedYear("all");
                setSelectedContentType("all");
                setSearchQuery("");
                setSortDirection("desc");
              }}
              className="mt-4 rounded-full text-xs font-bold"
            >
              {ar ? "إعادة تعيين كافة الفلاتر" : "Reset All Filters"}
            </Button>
          </div>
        )}
      </section>
    </div>
  );
}
