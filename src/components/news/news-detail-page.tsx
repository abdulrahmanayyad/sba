import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Check,
  Clock,
  Copy,
  ExternalLink,
  Layers,
  MessageCircle,
  Share2,
  Tag,
  Building2,
  Shirt,
  Utensils,
  Leaf,
  Briefcase,
  History,
  BarChart3,
  ShieldCheck,
  Globe2,
  BookOpen
} from "lucide-react";
import { Reveal } from "@/components/home/reveal";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/language-context";
import { cn } from "@/lib/utils";
import {
  newsArticles,
  newsCategories,
  ECONOMIC_INDICATORS,
  type NewsSectorType,
  type NewsArticle,
  type NewsContentType
} from "./news-data";

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

function getContentTypeBadge(type?: NewsContentType, ar?: boolean) {
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
      return ar ? "معارض وفعاليات" : "Exhibition & Events";
    case "market_data":
      return ar ? "بيانات اقتصادية" : "Market Data";
    default:
      return ar ? "تقرير موثق" : "Documented Report";
  }
}

function getSectorRoute(sector: NewsSectorType): string {
  switch (sector) {
    case "construction":
      return "/sectors/construction";
    case "environmental":
      return "/sectors/environmental";
    case "garment":
      return "/sectors/garment";
    case "food":
      return "/sectors/food";
    default:
      return "/about";
  }
}

export function NewsDetailPage({ slug }: { slug: string }) {
  const { language } = useLanguage();
  const ar = language === "AR";
  const [copied, setCopied] = useState(false);

  const article: NewsArticle = newsArticles.find((a) => a.slug === slug) ?? newsArticles[0]!;
  const sectorInfo = newsCategories.find((c) => c.id === article.sector);
  const isHistoricalInsight =
    article.contentType === "industry_insight" || article.contentType === "historical_review";

  // Linked economic indicator if any
  const indicator = article.indicatorId
    ? ECONOMIC_INDICATORS.find((ind) => ind.id === article.indicatorId)
    : null;

  const relatedArticles = newsArticles
    .filter((a) => a.id !== article.id && (a.sector === article.sector || a.contentType === article.contentType))
    .slice(0, 3);

  const copyUrl = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const schemaType = isHistoricalInsight ? "Article" : "NewsArticle";

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": schemaType,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://sami-trade.com/news/${article.slug}`,
    },
    headline: article.titleEn,
    description: article.excerptEn,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    image: [
      article.image.startsWith("http")
        ? article.image
        : `https://sami-trade.com${article.image}`,
    ],
    author: {
      "@type": "Organization",
      name: "Sami Bin Ayyad Group Corporate Communications",
      url: "https://sami-trade.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Sami Bin Ayyad Group",
      logo: {
        "@type": "ImageObject",
        url: "https://sami-trade.com/favicon.png",
      },
    },
    keywords: article.keywords?.join(", "),
    articleSection: article.categoryEn || article.sector,
  };

  const refYear = article.historicalRefYear || article.year;

  return (
    <article className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Header Container */}
      <section className="site-container pt-20 sm:pt-28 pb-8">
        <Reveal>
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs font-semibold text-muted-foreground mb-6">
            <Link to="/" className="hover:text-brand-orange transition-colors">
              {ar ? "الرئيسية" : "Home"}
            </Link>
            <span>/</span>
            <Link to="/news" className="hover:text-brand-orange transition-colors">
              {ar ? "الأرشيف التاريخي والأخبار" : "Corporate Legacy & Archive"}
            </Link>
            <span>/</span>
            <Link to={getSectorRoute(article.sector)} className="hover:text-brand-orange transition-colors">
              {ar ? sectorInfo?.titleAr : sectorInfo?.titleEn}
            </Link>
            <span>/</span>
            <span className="text-foreground truncate max-w-[200px] sm:max-w-xs font-bold">
              {ar ? article.titleAr : article.titleEn}
            </span>
          </nav>

          {/* Badges & Meta */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-4">
            {/* Reference Year Badge */}
            <span className="inline-flex items-center gap-1 rounded-full bg-brand-orange px-3.5 py-1 text-xs font-bold text-white shadow-sm">
              <History className="size-3" />
              <span>{refYear}</span>
            </span>

            {/* Content Type Badge */}
            <span className="inline-flex items-center rounded-full bg-secondary border border-border px-3 py-1 text-xs font-bold text-foreground">
              <span>{getContentTypeBadge(article.contentType, ar)}</span>
            </span>

            {/* Sector Badge */}
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-green/10 border border-brand-green/30 px-3.5 py-1 text-xs font-bold text-brand-green-text">
              {getSectorIcon(article.sector)}
              <span>{ar ? sectorInfo?.titleAr : sectorInfo?.titleEn}</span>
            </span>

            {/* Category Sub-badge */}
            <span className="inline-flex items-center gap-1 rounded-full bg-secondary/80 px-3 py-1 text-xs font-semibold text-foreground/85 border border-border">
              <Tag className="size-3 text-brand-orange" />
              <span>{ar ? article.categoryAr : article.categoryEn}</span>
            </span>

            {/* Publication Date */}
            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground font-medium">
              <Calendar className="size-3.5 text-brand-orange" />
              <span>{ar ? `تاريخ النشر: ${article.dateAr}` : `Published: ${article.dateEn}`}</span>
            </span>

            {/* Event Date where available */}
            {article.eventDateAr && (
              <span className="inline-flex items-center gap-1 text-xs text-muted-foreground font-medium bg-secondary/60 px-2.5 py-0.5 rounded-full border border-border/60">
                <Calendar className="size-3 text-brand-green" />
                <span>{ar ? `تاريخ الفعالية: ${article.eventDateAr}` : `Event Date: ${article.eventDateEn}`}</span>
              </span>
            )}

            {/* Reading Time */}
            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground font-medium">
              <Clock className="size-3 text-brand-green" />
              <span>{ar ? article.readingTimeAr : article.readingTimeEn}</span>
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-start font-head text-xl sm:text-2xl lg:text-3xl font-bold text-foreground leading-snug sm:leading-snug lg:leading-normal max-w-4xl tracking-tight">
            {ar ? article.titleAr : article.titleEn}
          </h1>

          {/* Lead / Excerpt */}
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl border-s-4 border-brand-green ps-4 text-start">
            {ar ? article.excerptAr : article.excerptEn}
          </p>

          {/* Editorial Notice for Pre-2023 Articles */}
          {article.year < 2023 && (
            <div className="mt-6 p-4 rounded-2xl bg-brand-orange/5 border border-brand-orange/30 flex items-start gap-3 max-w-3xl text-xs text-muted-foreground text-start">
              <History className="size-4 text-brand-orange shrink-0 mt-0.5" />
              <span>
                {ar
                  ? "ملاحظة توثيقية للأرشيف: هذه المادة مؤرخة قبل عام 2023 وتوثق أنشطة ومتابعات الكيانات المؤسسة ومشاريعها قبل التوحيد الشامل تحت مظلة مجموعة سامي بن عياد عام 2023 (امتدادًا للجذور المهنية القائمة منذ 1977)."
                  : "Archival Note: This record predates 2023 and documents the operations and market engagements of predecessor founding entities prior to their formal unification under Sami Bin Ayyad Group in 2023, building on foundational roots established since 1977."}
              </span>
            </div>
          )}
        </Reveal>
      </section>

      {/* Featured Image */}
      <section className="site-container pb-10">
        <Reveal>
          <div className="relative aspect-[21/9] sm:aspect-[24/10] w-full overflow-hidden rounded-3xl border border-white/30 bg-secondary shadow-xl">
            <img
              src={article.image}
              alt={ar ? article.imageAltAr || article.titleAr : article.imageAltEn || article.titleEn}
              className="size-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-4 start-4 end-4 flex items-center justify-between text-white/90 text-xs">
              <span className="font-semibold bg-black/50 px-3 py-1 rounded-full backdrop-blur-md border border-white/10">
                {ar ? article.categoryAr : article.categoryEn}
              </span>
              <span className="font-bold bg-black/50 px-3 py-1 rounded-full backdrop-blur-md border border-white/10">
                {refYear}
              </span>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Main Body Content & Sidebar */}
      <section className="site-container pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Article Text Column */}
          <div className="lg:col-span-8">
            <div className="rounded-3xl border border-white/20 bg-background/85 p-6 sm:p-10 shadow-lg backdrop-blur-xl">
              <div className="space-y-6 text-foreground/90 leading-relaxed font-body text-base sm:text-lg">
                {(ar ? article.bodyAr : article.bodyEn).split("\n\n").map((paragraph, pIdx) => (
                  <p key={pIdx} className="leading-relaxed text-start">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Embedded Economic Indicator Card (When Linked) */}
              {indicator && (
                <div className="mt-8 p-6 rounded-2xl border border-brand-green/40 bg-brand-green/5 backdrop-blur-md space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-green">
                      <BarChart3 className="size-4" />
                      <span>{ar ? "مؤشر اقتصادي موثق مرتبط بالموضوع" : "Verified Economic Benchmark"}</span>
                    </span>
                    <span className="rounded-full bg-brand-orange/15 text-brand-orange border border-brand-orange/30 text-[10px] font-bold px-2.5 py-0.5">
                      {ar ? indicator.changeLabelAr : indicator.changeLabelEn}
                    </span>
                  </div>

                  <h4 className="font-head text-base sm:text-lg font-bold text-foreground text-start">
                    {ar ? indicator.titleAr : indicator.titleEn}
                  </h4>

                  <div className="grid grid-cols-2 gap-3 p-3 rounded-xl bg-background/80 border border-border/60">
                    <div>
                      <span className="text-[10px] text-muted-foreground block font-medium">{ar ? "القيمة (2010)" : "Value (2010)"}</span>
                      <span className="text-lg font-bold text-foreground">{indicator.metric2010}</span>
                    </div>
                    <div className="border-s border-border ps-3">
                      <span className="text-[10px] text-brand-green block font-medium">{ar ? "القيمة (2020)" : "Value (2020)"}</span>
                      <span className="text-lg font-bold text-brand-green">{indicator.metric2020}</span>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed text-start">
                    {ar ? indicator.significanceAr : indicator.significanceEn}
                  </p>

                  <div className="pt-2 border-t border-border/50 flex flex-wrap items-center justify-between gap-2 text-[11px] text-muted-foreground">
                    <span>
                      {ar ? `المصدر المرجعي: ${indicator.sourceReportAr}` : `Source: ${indicator.sourceReportEn}`}
                    </span>
                    {indicator.sourceUrl && (
                      <a
                        href={indicator.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-brand-green font-bold hover:text-brand-orange transition-colors"
                      >
                        <span>{ar ? "زيارة التقرير الأصلي" : "View Official Report"}</span>
                        <ExternalLink className="size-3" />
                      </a>
                    )}
                  </div>
                </div>
              )}

              {/* Keywords Tag Cloud */}
              {article.keywords && article.keywords.length > 0 && (
                <div className="mt-8 pt-6 border-t border-border/60">
                  <span className="text-xs font-bold text-muted-foreground block mb-2.5">
                    {ar ? "الكلمات المفتاحية والمواضيع المرتبطة:" : "Topics & Keywords:"}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {article.keywords.map((kw, kIdx) => (
                      <span
                        key={kIdx}
                        className="rounded-full bg-secondary/80 border border-border px-3 py-1 text-xs font-medium text-foreground/80"
                      >
                        #{kw}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Share & Actions Row */}
              <div className="mt-8 pt-6 border-t border-border/60 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-foreground me-1">
                    {ar ? "مشاركة المقال:" : "Share Article:"}
                  </span>
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(
                      `${ar ? article.titleAr : article.titleEn} - https://sami-trade.com/news/${article.slug}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="size-8 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-brand-green hover:text-white transition-colors"
                    aria-label="Share on WhatsApp"
                  >
                    <MessageCircle className="size-4" />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                      `https://sami-trade.com/news/${article.slug}`
                    )}&text=${encodeURIComponent(ar ? article.titleAr : article.titleEn)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="size-8 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-brand-green hover:text-white transition-colors"
                    aria-label="Share on X"
                  >
                    <Share2 className="size-4" />
                  </a>
                  <button
                    type="button"
                    onClick={copyUrl}
                    className="size-8 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-brand-green hover:text-white transition-colors cursor-pointer"
                    aria-label="Copy Link"
                  >
                    {copied ? <Check className="size-4 text-brand-green" /> : <Copy className="size-4" />}
                  </button>
                  {copied && (
                    <span className="text-xs text-brand-green font-bold animate-in fade-in">
                      {ar ? "تم نسخ الرابط!" : "Link copied!"}
                    </span>
                  )}
                </div>

                <Button
                  asChild
                  variant="outline"
                  className="rounded-full text-xs font-bold hover:bg-brand-orange hover:text-white"
                >
                  <Link to="/news">
                    <ArrowLeft className="size-3.5 me-1.5 rtl:rotate-180" />
                    <span>{ar ? "العودة للأرشيف الشامل" : "Back to Archive"}</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Sidebar: Sector Highlights & Related Articles */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Sector Navigation Card */}
            <div className="rounded-3xl border border-white/20 bg-background/85 p-6 shadow-md backdrop-blur-xl">
              <span className="text-xs font-bold text-brand-green uppercase tracking-wider block mb-2">
                {ar ? "القطاع المرتبط" : "Associated Sector"}
              </span>
              <h3 className="text-start font-head text-lg font-bold text-foreground mb-2">
                {ar ? sectorInfo?.titleAr : sectorInfo?.titleEn}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4 text-start">
                {ar ? sectorInfo?.descAr : sectorInfo?.descEn}
              </p>
              <Button
                asChild
                className="w-full rounded-full bg-brand-green hover:bg-brand-orange text-white text-xs font-bold shadow-md transition-all"
              >
                <Link to={getSectorRoute(article.sector)}>
                  <span>{ar ? "استكشاف قدرات القطاع" : "Explore Sector Capabilities"}</span>
                  <ArrowRight className="size-3.5 ms-2 rtl:rotate-180" />
                </Link>
              </Button>
            </div>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <div className="rounded-3xl border border-white/20 bg-background/85 p-6 shadow-md backdrop-blur-xl">
                <span className="text-xs font-bold text-brand-orange uppercase tracking-wider block mb-4">
                  {ar ? "مقالات وتقارير ذات صلة" : "Related Archive Entries"}
                </span>
                <div className="space-y-4">
                  {relatedArticles.map((rel) => (
                    <Link
                      key={rel.id}
                      to="/news/$slug"
                      params={{ slug: rel.slug }}
                      className="group block p-3 rounded-2xl hover:bg-secondary/70 border border-transparent hover:border-border transition-all"
                    >
                      <div className="flex items-center gap-2 text-[10px] text-muted-foreground mb-1">
                        <span className="font-bold text-brand-orange">{rel.historicalRefYear || rel.year}</span>
                        <span>•</span>
                        <span>{ar ? rel.categoryAr : rel.categoryEn}</span>
                      </div>
                      <h4 className="font-head text-xs font-bold text-foreground group-hover:text-brand-green transition-colors leading-snug line-clamp-2">
                        {ar ? rel.titleAr : rel.titleEn}
                      </h4>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </section>
    </article>
  );
}
