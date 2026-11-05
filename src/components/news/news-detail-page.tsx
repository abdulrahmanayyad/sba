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
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/home/reveal";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/language-context";
import { cn } from "@/lib/utils";
import {
  newsArticles,
  newsCategories,
  type NewsSectorType,
  type NewsArticle,
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
    default:
      return <Layers className="size-3.5" />;
  }
}

export function NewsDetailPage({ slug }: { slug: string }) {
  const { language } = useLanguage();
  const ar = language === "AR";
  const [copied, setCopied] = useState(false);

  const article: NewsArticle = newsArticles.find((a) => a.slug === slug) ?? newsArticles[0]!;
  const sectorInfo = newsCategories.find((c) => c.id === article.sector);

  const relatedArticles = newsArticles
    .filter((a) => a.id !== article.id && a.sector === article.sector)
    .slice(0, 3);

  const copyUrl = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
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
      name: "Sami Bin Ayyad Group",
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
              {ar ? "الأرشيف المؤسسي للأخبار" : "Corporate News Archive"}
            </Link>
            <span>/</span>
            <span className="text-muted-foreground">
              {ar ? sectorInfo?.titleAr : sectorInfo?.titleEn}
            </span>
            <span>/</span>
            <span className="text-foreground truncate max-w-[200px] sm:max-w-xs font-bold">
              {ar ? article.titleAr : article.titleEn}
            </span>
          </nav>

          {/* Badges & Meta */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-4">
            {/* Year Badge */}
            <span className="inline-flex items-center gap-1 rounded-full bg-brand-orange px-3.5 py-1 text-xs font-black text-white shadow-sm font-mono">
              <History className="size-3" />
              <span>{article.year}</span>
            </span>

            {/* Sector Badge */}
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-green/10 border border-brand-green/30 px-3.5 py-1 text-xs font-bold text-brand-green-text">
              {getSectorIcon(article.sector)}
              <span>{ar ? sectorInfo?.titleAr : sectorInfo?.titleEn}</span>
            </span>

            {/* Category Sub-badge */}
            <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-foreground/85 border border-border">
              <Tag className="size-3 text-brand-orange" />
              <span>{ar ? article.categoryAr : article.categoryEn}</span>
            </span>

            {/* Publication Date */}
            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground font-mono">
              <Calendar className="size-3.5 text-brand-orange" />
              <span>{ar ? `تاريخ النشر: ${article.dateAr}` : `Published: ${article.dateEn}`}</span>
            </span>

            {/* Event Date where available */}
            {article.eventDateAr && (
              <span className="inline-flex items-center gap-1 text-xs text-muted-foreground font-mono bg-secondary/60 px-2.5 py-0.5 rounded-full border border-border/60">
                <Calendar className="size-3 text-brand-green" />
                <span>{ar ? `تاريخ الفعالية: ${article.eventDateAr}` : `Event Date: ${article.eventDateEn}`}</span>
              </span>
            )}

            {/* Reading Time */}
            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground font-mono">
              <Clock className="size-3 text-brand-green" />
              <span>{ar ? article.readingTimeAr : article.readingTimeEn}</span>
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-head text-2xl sm:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight max-w-4xl tracking-tight">
            {ar ? article.titleAr : article.titleEn}
          </h1>

          {/* Lead / Excerpt */}
          <p className="mt-6 text-base sm:text-xl text-muted-foreground leading-relaxed max-w-3xl border-s-4 border-brand-green ps-4">
            {ar ? article.excerptAr : article.excerptEn}
          </p>
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
              <span className="font-mono bg-black/50 px-3 py-1 rounded-full backdrop-blur-md border border-white/10">
                {article.year}
              </span>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Main Body Content & Social Share Sidebar */}
      <section className="site-container pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Article Text */}
          <div className="lg:col-span-8">
            <div className="rounded-3xl border border-white/20 bg-background/85 p-6 sm:p-10 shadow-lg backdrop-blur-xl">
              <div className="space-y-6 text-foreground/90 leading-relaxed font-body text-base sm:text-lg">
                {(ar ? article.bodyAr : article.bodyEn).split("\n\n").map((paragraph, pIdx) => (
                  <p key={pIdx} className="leading-relaxed text-justify">
                    {paragraph}
                  </p>
                ))}
              </div>

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
                    {ar ? "مشاركة التقرير:" : "Share Article:"}
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
                  <button
                    type="button"
                    onClick={copyUrl}
                    className="h-8 px-3 rounded-full bg-secondary flex items-center gap-1.5 text-xs font-semibold text-foreground hover:bg-brand-green hover:text-white transition-colors cursor-pointer"
                  >
                    {copied ? <Check className="size-3.5 text-brand-green" /> : <Copy className="size-3.5" />}
                    <span>{copied ? (ar ? "تم النسخ!" : "Copied!") : (ar ? "نسخ الرابط" : "Copy Link")}</span>
                  </button>
                </div>

                <Link
                  to="/news"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-green hover:text-brand-orange transition-colors"
                >
                  <ArrowLeft className="size-3.5 rtl:rotate-180" />
                  <span>{ar ? "العودة لكافة أخبار الأرشيف" : "Back to Archive"}</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar / Related Sector Articles */}
          <div className="lg:col-span-4 space-y-6">
            {/* Sector Badge Box */}
            <div className="rounded-3xl border border-white/20 bg-background/85 p-6 shadow-md backdrop-blur-xl">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="p-2 rounded-xl bg-brand-green/10 text-brand-green">
                  {getSectorIcon(article.sector)}
                </div>
                <div>
                  <h3 className="font-head text-base font-bold text-foreground">
                    {ar ? sectorInfo?.titleAr : sectorInfo?.titleEn}
                  </h3>
                  <span className="text-[11px] font-mono text-muted-foreground">
                    {ar ? "أرشيف القطاع" : "Sector Archive"}
                  </span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {ar ? sectorInfo?.descAr : sectorInfo?.descEn}
              </p>
            </div>

            {/* Related Sector Articles */}
            {relatedArticles.length > 0 && (
              <div className="rounded-3xl border border-white/20 bg-background/85 p-6 shadow-md backdrop-blur-xl">
                <h3 className="font-head text-base font-bold text-foreground mb-4">
                  {ar ? "تقارير أخرى من نفس القطاع" : "Related Sector Reports"}
                </h3>

                <div className="space-y-4">
                  {relatedArticles.map((rel) => (
                    <div key={rel.id} className="group border-b border-border/50 pb-4 last:border-0 last:pb-0">
                      <div className="flex items-center justify-between text-[10px] font-mono text-muted-foreground mb-1">
                        <span>{ar ? rel.dateAr : rel.dateEn}</span>
                        <span className="font-bold text-brand-orange">{rel.year}</span>
                      </div>
                      <h4 className="font-head text-xs sm:text-sm font-bold text-foreground group-hover:text-brand-orange transition-colors leading-snug">
                        <Link to="/news/$slug" params={{ slug: rel.slug }}>
                          {ar ? rel.titleAr : rel.titleEn}
                        </Link>
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Media & Communications Desk */}
            <div className="rounded-3xl border border-brand-green/30 bg-gradient-to-br from-brand-green/10 via-background/80 to-secondary/40 p-6 shadow-md backdrop-blur-xl">
              <span className="size-1.5 rounded-full bg-brand-orange animate-pulse inline-block mb-3" />
              <h3 className="font-head text-base font-bold text-foreground">
                {ar ? "المكتب الإعلامي والتواصل المؤسسي" : "Media & Corporate Inquiries"}
              </h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                {ar ? (
                  <>
                    لأي استفسارات صحفية أو مقترحات شراكة مؤسسية متعلقة بأنشطة{" "}
                    <span className="text-brand-orange font-bold">مجموعة سامي بن عياد</span>.
                  </>
                ) : (
                  <>
                    For press inquiries, editorial features, or institutional partnership proposals across{" "}
                    <span className="text-brand-orange font-bold">SAMI BIN AYYAD GROUP</span>.
                  </>
                )}
              </p>
              <div className="mt-4">
                <Button
                  asChild
                  size="sm"
                  className="w-full rounded-full !bg-brand-green text-white hover:!bg-brand-orange transition-all duration-300 font-bold text-xs"
                >
                  <a href="mailto:info@sami-trade.com">
                    <span>{ar ? "مراسلة الفريق الإعلامي" : "Contact Media Desk"}</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
