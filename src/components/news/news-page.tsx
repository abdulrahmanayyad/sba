import { useState, useMemo, useEffect } from "react";
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
  ArrowUpDown,
  Filter,
  Check,
  Newspaper,
  BookOpen,
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
} from "./news-data";

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
    default:
      return <Layers className="size-3.5" />;
  }
}

export function NewsPage() {
  const { language } = useLanguage();
  const ar = language === "AR";

  const [selectedSector, setSelectedSector] = useState<NewsSectorType>("all");
  const [selectedYear, setSelectedYear] = useState<"all" | number>("all");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
  const [searchQuery, setSearchQuery] = useState("");

  // When changing sector: if sector != 'all', default to oldest first (historical order); if 'all', default to newest first
  const handleSectorChange = (sector: NewsSectorType) => {
    setSelectedSector(sector);
    if (sector !== "all") {
      setSortDirection("asc"); // Oldest to newest inside sector archive
    } else {
      setSortDirection("desc"); // Newest first on main page
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
        counts[a.year] = (counts[a.year] || 0) + 1;
      }
    });
    return counts;
  }, [selectedSector]);

  // Filtered and sorted articles
  const filteredArticles = useMemo(() => {
    const list = newsArticles.filter((article) => {
      // Sector filter
      if (selectedSector !== "all" && article.sector !== selectedSector) return false;

      // Year filter
      if (selectedYear !== "all" && article.year !== selectedYear) return false;

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const inTitle = (ar ? article.titleAr : article.titleEn).toLowerCase().includes(q);
        const inExcerpt = (ar ? article.excerptAr : article.excerptEn).toLowerCase().includes(q);
        const inBody = (ar ? article.bodyAr : article.bodyEn).toLowerCase().includes(q);
        const inCat = (article.categoryAr + " " + article.categoryEn).toLowerCase().includes(q);
        const inKeywords = article.keywords?.some((k) => k.toLowerCase().includes(q));
        const inYear = article.year.toString().includes(q);

        if (!inTitle && !inExcerpt && !inBody && !inCat && !inKeywords && !inYear) return false;
      }

      return true;
    });

    // Chronological sorting
    return list.sort((a, b) => {
      const timeA = new Date(a.publishedAt).getTime();
      const timeB = new Date(b.publishedAt).getTime();
      return sortDirection === "asc" ? timeA - timeB : timeB - timeA;
    });
  }, [selectedSector, selectedYear, sortDirection, searchQuery, ar]);

  // Featured article (only when on 'all' with no active search/year filter)
  const featuredArticle = useMemo(() => {
    return newsArticles.find((a) => a.featured) || newsArticles[0];
  }, []);

  const activeSectorInfo = useMemo(() => {
    return newsCategories.find((c) => c.id === selectedSector);
  }, [selectedSector]);

  return (
    <div className="w-full">
      {/* 1. Newsroom & Archive Hero */}
      <section className="site-container pt-20 sm:pt-28 pb-10 scroll-mt-24">
        <Reveal>
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-3.5 py-1 text-xs font-bold text-brand-orange">
                <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
                <span>{ar ? "مجموعة سامي بن عياد" : "SAMI BIN AYYAD GROUP"}</span>
              </span>
              <SectionBadge title={ar ? "الأرشيف المؤسسي (2020–2026)" : "Corporate Archive (2020–2026)"} />
            </div>

            <h1 className="section-title text-3xl sm:text-5xl font-extrabold text-foreground leading-tight tracking-tight">
              {ar
                ? "الأرشيف التاريخي لأخبار وأنشطة المجموعة"
                : "Corporate News Archive & Sector Insights"}
            </h1>

            <p className="section-intro mt-4 max-w-3xl text-base sm:text-lg leading-relaxed text-muted-foreground">
              {ar
                ? "سجل توثيقي لأنشطة المجموعة، متابعات الأسواق، المعارض المتخصصة، والشراكات الاستراتيجية متعددة القطاعات عبر الفترة من 2020 إلى 2026، موثقًا وفق أعلى معايير الشفافية والدقة المؤسسية."
                : "A structured historical record of business activities, market intelligence, industry exhibitions, and strategic multi-sector alliances spanning 2020 through 2026, maintained with verified corporate accuracy."}
            </p>

            {/* Quick Metrics Bar */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-border/60">
              <div className="rounded-2xl border border-border/80 bg-background/80 p-3.5 backdrop-blur-md">
                <div className="text-xl sm:text-2xl font-black text-brand-orange font-mono">39</div>
                <div className="text-[11px] font-medium text-muted-foreground mt-0.5">
                  {ar ? "تقرير ومقال موثق" : "Documented Reports"}
                </div>
              </div>
              <div className="rounded-2xl border border-border/80 bg-background/80 p-3.5 backdrop-blur-md">
                <div className="text-xl sm:text-2xl font-black text-brand-green font-mono">5</div>
                <div className="text-[11px] font-medium text-muted-foreground mt-0.5">
                  {ar ? "قطاعات اقتصادية رئيسية" : "Core Sectors"}
                </div>
              </div>
              <div className="rounded-2xl border border-border/80 bg-background/80 p-3.5 backdrop-blur-md">
                <div className="text-xl sm:text-2xl font-black text-foreground font-mono">7</div>
                <div className="text-[11px] font-medium text-muted-foreground mt-0.5">
                  {ar ? "سنوات توثيق (2020–2026)" : "Years of Coverage"}
                </div>
              </div>
              <div className="rounded-2xl border border-border/80 bg-background/80 p-3.5 backdrop-blur-md">
                <div className="text-xl sm:text-2xl font-black text-foreground font-mono">100%</div>
                <div className="text-[11px] font-medium text-muted-foreground mt-0.5">
                  {ar ? "بيانات تاريخية محققة" : "Verified Records"}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 2. Featured Lead Article (Only when on 'all', no search, no year filter) */}
      {selectedSector === "all" && selectedYear === "all" && !searchQuery && featuredArticle && (
        <section className="site-container pb-12">
          <Reveal>
            <div className="group relative overflow-hidden rounded-3xl border border-white/30 bg-background/85 shadow-xl backdrop-blur-2xl transition-all duration-300 hover:shadow-2xl hover:border-brand-green/60">
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
                      {featuredArticle.year}
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
                      <span className="inline-flex items-center gap-1 font-mono text-[11px]">
                        <Clock className="size-3 text-brand-orange" />
                        <span>{ar ? featuredArticle.readingTimeAr : featuredArticle.readingTimeEn}</span>
                      </span>
                    </div>

                    <h2 className="font-head text-2xl sm:text-3xl font-extrabold text-foreground group-hover:text-brand-green transition-colors leading-snug">
                      <Link to="/news/$slug" params={{ slug: featuredArticle.slug }}>
                        {ar ? featuredArticle.titleAr : featuredArticle.titleEn}
                      </Link>
                    </h2>

                    <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed line-clamp-3">
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

                    <span className="text-[11px] font-mono text-muted-foreground font-semibold">
                      {featuredArticle.year}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      )}

      {/* 3. Archive Controls: Sector Navigation, Year Timeline, Search & Sort */}
      <section className="site-container pb-8 scroll-mt-24" id="archive-controls">
        <div className="flex flex-col gap-6 rounded-3xl border border-white/20 bg-background/80 p-5 sm:p-7 shadow-lg backdrop-blur-xl">
          {/* A. Search & Sort Row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="absolute start-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <input
                type="text"
                placeholder={
                  ar
                    ? "ابحث في عناوين الأخبار، المعارض، التقارير والسنوات..."
                    : "Search news archive, exhibitions, topics, or years..."
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

            {/* Sort Toggle & Result Count */}
            <div className="flex items-center justify-between md:justify-end gap-3 w-full md:w-auto">
              <span className="text-xs font-mono text-muted-foreground">
                {ar
                  ? `${filteredArticles.length} من أصل ${newsArticles.length} تقرير`
                  : `Showing ${filteredArticles.length} of ${newsArticles.length} reports`}
              </span>

              <button
                type="button"
                onClick={() => setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"))}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/80 px-4 py-2 text-xs font-bold text-foreground hover:border-brand-orange/60 hover:bg-secondary transition-all cursor-pointer shadow-sm"
                title={ar ? "تغيير ترتيب التسلسل الزمني" : "Toggle chronological order"}
              >
                <ArrowUpDown className="size-3.5 text-brand-orange" />
                <span>
                  {sortDirection === "asc"
                    ? ar
                      ? "الترتيب: من الأقدم للأحدث"
                      : "Sort: Oldest to Newest"
                    : ar
                    ? "الترتيب: من الأحدث للأقدم"
                    : "Sort: Newest to Oldest"}
                </span>
              </button>
            </div>
          </div>

          {/* B. Sector Categories (Exact Ordered List) */}
          <div>
            <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <Layers className="size-3 text-brand-green" />
              <span>{ar ? "تصنيف القطاعات الرئيسية" : "Main Sector Categories"}</span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {newsCategories.map((cat) => {
                const isActive = selectedSector === cat.id;
                const count = sectorCounts[cat.id] ?? 0;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => handleSectorChange(cat.id)}
                    className={cn(
                      "inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold transition-all duration-200 cursor-pointer shadow-sm",
                      isActive
                        ? "!bg-brand-green !text-white shadow-md border border-brand-green"
                        : "border border-border/80 bg-background/90 text-foreground hover:border-brand-orange/50 hover:bg-secondary"
                    )}
                  >
                    {getSectorIcon(cat.id)}
                    <span>{ar ? cat.titleAr : cat.titleEn}</span>
                    <span
                      className={cn(
                        "rounded-full px-1.5 py-0.2 text-[10px] font-mono",
                        isActive ? "bg-white/20 text-white" : "bg-secondary text-muted-foreground"
                      )}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* C. Year Timeline Filters (2020 – 2026) */}
          <div className="pt-2 border-t border-border/50">
            <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <History className="size-3 text-brand-orange" />
              <span>{ar ? "التسلسل الزمني للسنوات (2020–2026)" : "Timeline by Year (2020–2026)"}</span>
            </div>
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <button
                type="button"
                onClick={() => setSelectedYear("all")}
                className={cn(
                  "rounded-full px-3.5 py-1 text-xs font-bold transition-all cursor-pointer font-mono",
                  selectedYear === "all"
                    ? "!bg-brand-orange !text-white shadow-sm"
                    : "border border-border/70 bg-secondary/50 text-foreground hover:bg-secondary"
                )}
              >
                {ar ? "كافة الأعوام" : "All Years"}
              </button>

              {ARCHIVE_YEARS.map((yr) => {
                const isActive = selectedYear === yr;
                const yrCount = yearCounts[yr] || 0;
                return (
                  <button
                    key={yr}
                    type="button"
                    onClick={() => setSelectedYear(yr)}
                    disabled={yrCount === 0}
                    className={cn(
                      "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold transition-all cursor-pointer font-mono",
                      isActive
                        ? "!bg-brand-orange !text-white shadow-sm"
                        : yrCount > 0
                        ? "border border-border/70 bg-background text-foreground hover:border-brand-orange/40 hover:bg-secondary"
                        : "opacity-40 border border-border/30 bg-secondary/30 text-muted-foreground cursor-not-allowed"
                    )}
                  >
                    <span>{yr}</span>
                    <span
                      className={cn(
                        "text-[10px] rounded-full px-1 py-0",
                        isActive ? "bg-white/20 text-white" : "text-muted-foreground"
                      )}
                    >
                      ({yrCount})
                    </span>
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
                  <h3 className="font-head text-base sm:text-lg font-bold text-foreground">
                    {ar ? activeSectorInfo.titleAr : activeSectorInfo.titleEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                    {ar ? activeSectorInfo.descAr : activeSectorInfo.descEn}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
                <span className="rounded-full bg-brand-green/15 text-brand-green font-bold font-mono text-xs px-3 py-1">
                  {ar
                    ? `${filteredArticles.length} تقرير في الأرشيف`
                    : `${filteredArticles.length} Archived Reports`}
                </span>
                <span className="rounded-full bg-secondary text-muted-foreground font-mono text-xs px-3 py-1 border border-border">
                  {sortDirection === "asc"
                    ? ar
                      ? "تسلسل تاريخي: 2020 → 2026"
                      : "Timeline: 2020 → 2026"
                    : ar
                    ? "أحدث أولًا: 2026 → 2020"
                    : "Recent First: 2026 → 2020"}
                </span>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* 4. Articles Grid / Timeline View */}
      <section className="site-container pb-24">
        {filteredArticles.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article, idx) => (
              <Reveal key={article.id} delay={Math.min(idx * 0.04, 0.4)}>
                <article className="group h-full flex flex-col justify-between overflow-hidden rounded-3xl border border-white/25 bg-background/85 shadow-md backdrop-blur-xl transition-all duration-300 hover:scale-[1.015] hover:border-brand-green/60 hover:shadow-2xl">
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
                        <div className="absolute top-3 start-3 flex items-center gap-1.5">
                          <span className="rounded-full bg-brand-orange px-3 py-0.5 text-[11px] font-black text-white shadow-md font-mono">
                            {article.year}
                          </span>
                          <span className="rounded-full bg-black/60 px-2.5 py-0.5 text-[10px] font-bold text-white/90 backdrop-blur-md border border-white/20">
                            {ar ? article.categoryAr : article.categoryEn}
                          </span>
                        </div>

                        {/* Event Date Tag if available */}
                        {article.eventDateAr && (
                          <div className="absolute bottom-3 start-3">
                            <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-white/90 bg-black/50 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/10">
                              <Calendar className="size-2.5 text-brand-orange" />
                              <span>{ar ? article.eventDateAr : article.eventDateEn}</span>
                            </span>
                          </div>
                        )}
                      </div>
                    </Link>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between gap-2 text-xs text-muted-foreground mb-3 font-mono">
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="size-3 text-brand-orange" />
                          <span>{ar ? article.dateAr : article.dateEn}</span>
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="size-3 text-brand-green" />
                          <span>{ar ? article.readingTimeAr : article.readingTimeEn}</span>
                        </span>
                      </div>

                      <h3 className="font-head text-base sm:text-lg font-bold text-foreground group-hover:text-brand-orange transition-colors leading-snug line-clamp-2">
                        <Link to="/news/$slug" params={{ slug: article.slug }}>
                          {ar ? article.titleAr : article.titleEn}
                        </Link>
                      </h3>

                      <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
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
                      <span>{ar ? "قراءة التقرير الكامل" : "Read Full Report"}</span>
                      <ArrowRight className="size-3 rtl:rotate-180" />
                    </Link>

                    <span className="text-[10px] font-mono font-bold text-muted-foreground/70">
                      #{article.id.replace("sba-news-", "NEWS ")}
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center rounded-3xl border border-dashed border-border bg-secondary/30">
            <History className="mx-auto size-12 text-muted-foreground/50 mb-3" />
            <h3 className="font-head text-lg font-bold text-foreground">
              {ar ? "لا توجد تقارير مطابقة لمعايير البحث" : "No matching archive entries"}
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
                setSelectedSector("all");
                setSelectedYear("all");
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
