import { useState, useMemo } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Calendar,
  Clock,
  ExternalLink,
  Layers,
  Search,
  Sparkles,
  Tag,
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
  type NewsCategoryType,
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

export function NewsPage() {
  const { language } = useLanguage();
  const ar = language === "AR";

  const [selectedCategory, setSelectedCategory] = useState<NewsCategoryType>("all");
  const [selectedType, setSelectedType] = useState<"all" | "external" | "insight">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = useMemo(() => {
    return newsArticles.filter((article) => {
      if (selectedCategory !== "all" && article.category !== selectedCategory) return false;
      if (selectedType !== "all" && article.type !== selectedType) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const inTitle = (ar ? article.titleAr : article.titleEn).toLowerCase().includes(q);
        const inExcerpt = (ar ? article.excerptAr : article.excerptEn).toLowerCase().includes(q);
        const inBody = (ar ? article.bodyAr : article.bodyEn).toLowerCase().includes(q);
        if (!inTitle && !inExcerpt && !inBody) return false;
      }
      return true;
    });
  }, [selectedCategory, selectedType, searchQuery, ar]);

  const featuredArticle = useMemo(() => {
    return newsArticles.find((a) => a.featured) || newsArticles[0];
  }, []);

  return (
    <div className="w-full">
      {/* 1. Newsroom Hero */}
      <section className="site-container pt-20 sm:pt-28 pb-12 scroll-mt-24">
        <Reveal>
          <div className="max-w-3xl">
            <SectionBadge title={ar ? "أخبار وتحديثات" : "News & Updates"} />
            <h1 className="section-title mt-3 text-3xl sm:text-5xl font-extrabold text-foreground leading-tight">
              {ar ? "أخبار المجموعة والكيانات المشاركة" : "News and business updates"}
            </h1>
            <p className="section-intro mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground">
              {ar
                ? "تابع أخبار المشروعات والأنشطة واتفاقات التعاون، مع بيان الجهة المعنية وتاريخ كل إعلان."
                : "Read updates on projects, activities and cooperation agreements, with the relevant organisation and announcement date clearly identified."}
            </p>
          </div>
        </Reveal>
      </section>

      {/* 2. Featured Lead Article (Only when no search/filter active) */}
      {selectedCategory === "all" && selectedType === "all" && !searchQuery && featuredArticle && (
        <section className="site-container pb-14">
          <Reveal>
            <div className="group relative overflow-hidden rounded-3xl border border-white/30 bg-background/80 shadow-xl backdrop-blur-2xl transition-all duration-300 hover:shadow-2xl hover:border-brand-green/50">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
                <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-[16/11] w-full overflow-hidden bg-secondary">
                  <img
                    src={featuredArticle.image}
                    alt={ar ? featuredArticle.titleAr : featuredArticle.titleEn}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 start-4 flex items-center gap-2">
                    <span className="rounded-full bg-brand-orange px-3.5 py-1 text-xs font-bold text-white shadow-md">
                      {ar ? "مقال مميز" : "Featured Lead"}
                    </span>
                    <span className="rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white/90 backdrop-blur-md border border-white/20">
                      {featuredArticle.type === "external"
                        ? ar ? "خبر موثق" : "Verified News"
                        : ar ? "رؤية تحليلية" : "Editorial Insight"}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-4">
                      <span className="inline-flex items-center gap-1.5 font-mono">
                        <Calendar className="size-3.5 text-brand-orange" />
                        <span>{ar ? featuredArticle.dateAr : featuredArticle.dateEn}</span>
                      </span>
                      <span>•</span>
                      <span className="inline-flex items-center gap-1.5 font-mono">
                        <Clock className="size-3.5 text-brand-green" />
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
                    <Button asChild className="rounded-full bg-brand-green hover:bg-brand-orange text-white font-bold text-xs shadow-md transition-all">
                      <Link to="/news/$slug" params={{ slug: featuredArticle.slug }}>
                        <span>{ar ? "قراءة التقرير الكامل" : "Read Full Article"}</span>
                        <ArrowRight className="size-3.5 ms-2 rtl:rotate-180" />
                      </Link>
                    </Button>

                    {featuredArticle.sourceName && (
                      <span className="text-[11px] font-mono text-muted-foreground">
                        {ar ? `المصدر: ${featuredArticle.sourceName}` : `Source: ${featuredArticle.sourceName}`}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      )}

      {/* 3. Category Filters & Search */}
      <section className="site-container pb-8">
        <div className="flex flex-col gap-5 border-b border-border/60 pb-8">
          {/* Top Controls: Search and Type Pills */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Box */}
            <div className="relative w-full md:w-80">
              <Search className="absolute start-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <input
                type="text"
                placeholder={ar ? "ابحث في المقالات والأخبار..." : "Search articles and news..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-border bg-background/80 py-2.5 ps-10 pe-4 text-xs font-medium text-foreground placeholder:text-muted-foreground shadow-sm focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
              />
            </div>

            {/* Type Filters */}
            <div className="flex items-center gap-2 w-full md:w-auto">
              <button
                type="button"
                onClick={() => setSelectedType("all")}
                className={cn(
                  "rounded-full px-4 py-1.5 text-xs font-bold transition-all duration-200 cursor-pointer",
                  selectedType === "all"
                    ? "bg-brand-green text-white shadow-sm"
                    : "border border-border bg-secondary/70 text-foreground hover:bg-secondary"
                )}
              >
                {ar ? "الكل" : "All Types"}
              </button>
              <button
                type="button"
                onClick={() => setSelectedType("external")}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-bold transition-all duration-200 cursor-pointer",
                  selectedType === "external"
                    ? "bg-brand-green text-white shadow-sm"
                    : "border border-border bg-secondary/70 text-foreground hover:bg-secondary"
                )}
              >
                <Newspaper className="size-3.5" />
                <span>{ar ? "أخبار موثقة" : "Verified News"}</span>
              </button>
              <button
                type="button"
                onClick={() => setSelectedType("insight")}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-bold transition-all duration-200 cursor-pointer",
                  selectedType === "insight"
                    ? "bg-brand-green text-white shadow-sm"
                    : "border border-border bg-secondary/70 text-foreground hover:bg-secondary"
                )}
              >
                <BookOpen className="size-3.5" />
                <span>{ar ? "رؤى تحليلية" : "Editorial Insights"}</span>
              </button>
            </div>
          </div>

          {/* Categories Horizontal Scroll / Wrap */}
          <div className="flex flex-wrap items-center gap-2">
            {newsCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={cn(
                  "rounded-full px-4 py-2 text-xs font-bold transition-all duration-300 cursor-pointer",
                  selectedCategory === cat.id
                    ? "bg-brand-green text-white shadow-md border border-brand-green"
                    : "border border-border/80 bg-background/80 text-foreground hover:border-brand-orange/40 hover:bg-secondary"
                )}
              >
                {ar ? cat.titleAr : cat.titleEn}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Articles Grid */}
      <section className="site-container pb-24">
        {filteredArticles.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article, idx) => (
              <Reveal key={article.id} delay={idx * 0.04}>
                <article className="group h-full flex flex-col justify-between overflow-hidden rounded-3xl border border-white/25 bg-background/85 shadow-md backdrop-blur-xl transition-all duration-300 hover:scale-[1.015] hover:border-brand-green/60 hover:shadow-2xl">
                  <div>
                    {/* Image Banner */}
                    <Link to="/news/$slug" params={{ slug: article.slug }}>
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-secondary">
                        <img
                          src={article.image}
                          alt={ar ? article.titleAr : article.titleEn}
                          loading="lazy"
                          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                        <div className="absolute top-3 start-3">
                          <span className="rounded-full bg-black/60 px-3 py-0.5 text-[10px] font-bold text-white backdrop-blur-md border border-white/20">
                            {article.type === "external"
                              ? ar ? "خبر موثق" : "Verified News"
                              : ar ? "رؤية تحليلية" : "Editorial"}
                          </span>
                        </div>
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

                      <h3 className="font-head text-lg font-bold text-foreground group-hover:text-brand-orange transition-colors leading-snug line-clamp-2">
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
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-green hover:text-brand-orange transition-colors"
                    >
                      <span>{ar ? "اقرأ الإعلان" : "Read the announcement"}</span>
                      <ArrowRight className="size-3 rtl:rotate-180" />
                    </Link>

                    {article.sourceName && (
                      <span className="text-[10px] font-mono text-muted-foreground/80 truncate max-w-[130px]">
                        {article.sourceName}
                      </span>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center rounded-3xl border border-dashed border-border bg-secondary/30">
            <Newspaper className="mx-auto size-10 text-muted-foreground/60 mb-3" />
            <h3 className="font-head text-lg font-bold text-foreground">
              {ar ? "لا توجد نتائج مطابقة" : "No matching articles"}
            </h3>
            <p className="text-xs text-muted-foreground mt-1">
              {ar ? "جرّب استخدام كلمات بحث أخرى أو تغيير الفلاتر." : "Try adjusting your search query or filters."}
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
