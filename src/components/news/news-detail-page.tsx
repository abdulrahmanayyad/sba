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
  Newspaper,
  BookOpen,
} from "lucide-react";
import { Reveal } from "@/components/home/reveal";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/language-context";
import { WHATSAPP_URL } from "@/lib/process-steps";
import { cn } from "@/lib/utils";
import {
  newsArticles,
  newsCategories,
  type NewsArticle,
} from "./news-data";

export function NewsDetailPage({ slug }: { slug: string }) {
  const { language } = useLanguage();
  const ar = language === "AR";
  const [copied, setCopied] = useState(false);

  const article: NewsArticle = newsArticles.find((a) => a.slug === slug) ?? newsArticles[0]!;
  const categoryInfo = newsCategories.find((c) => c.id === article.category);

  const relatedArticles = newsArticles
    .filter((a) => a.id !== article.id && (a.category === article.category || a.featured))
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
    "@type": article.type === "external" ? "NewsArticle" : "Article",
    headline: article.titleEn,
    description: article.excerptEn,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    image: [`https://sami-trade.com${article.image}`],
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
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://sami-trade.com/news/${article.slug}`,
    },
  };

  return (
    <article className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Header Container */}
      <section className="site-container pt-20 sm:pt-28 pb-10">
        <Reveal>
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-muted-foreground mb-6">
            <Link to="/" className="hover:text-foreground transition-colors">
              {ar ? "الرئيسية" : "Home"}
            </Link>
            <span>/</span>
            <Link to="/news" className="hover:text-foreground transition-colors">
              {ar ? "الأخبار والرؤى" : "News & Insights"}
            </Link>
            <span>/</span>
            <span className="text-foreground truncate max-w-[200px] sm:max-w-xs">
              {ar ? categoryInfo?.titleAr : categoryInfo?.titleEn}
            </span>
          </nav>

          {/* Badges & Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-green/10 border border-brand-green/30 px-3.5 py-1 text-xs font-bold text-brand-green-text">
              <Layers className="size-3" />
              <span>{ar ? categoryInfo?.titleAr : categoryInfo?.titleEn}</span>
            </span>

            <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-foreground/80 border border-border">
              {article.type === "external" ? (
                <>
                  <Newspaper className="size-3 text-brand-orange" />
                  <span>{ar ? "خبر موثق" : "Verified News"}</span>
                </>
              ) : (
                <>
                  <BookOpen className="size-3 text-brand-orange" />
                  <span>{ar ? "رؤية تحليلية" : "Editorial Insight"}</span>
                </>
              )}
            </span>

            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
              <Calendar className="size-3.5 text-brand-orange" />
              <span>{ar ? article.dateAr : article.dateEn}</span>
            </span>

            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
              <Clock className="size-3.5 text-brand-green" />
              <span>{ar ? article.readingTimeAr : article.readingTimeEn}</span>
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-head text-2xl sm:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight max-w-4xl">
            {ar ? article.titleAr : article.titleEn}
          </h1>

          {/* Lead / Excerpt */}
          <p className="mt-6 text-base sm:text-xl text-muted-foreground leading-relaxed max-w-3xl border-s-4 border-brand-green ps-4">
            {ar ? article.excerptAr : article.excerptEn}
          </p>
        </Reveal>
      </section>

      {/* Featured Image */}
      <section className="site-container pb-12">
        <Reveal>
          <div className="relative aspect-[21/9] sm:aspect-[24/10] w-full overflow-hidden rounded-3xl border border-white/30 bg-secondary shadow-xl">
            <img
              src={article.image}
              alt={ar ? article.titleAr : article.titleEn}
              className="size-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        </Reveal>
      </section>

      {/* Main Body Content & Social Share Sidebar */}
      <section className="site-container pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Article Text */}
          <div className="lg:col-span-8">
            <div className="rounded-3xl border border-white/20 bg-background/80 p-6 sm:p-10 shadow-lg backdrop-blur-xl">
              <div className="prose prose-lg dark:prose-invert max-w-none space-y-6 text-foreground/90 leading-relaxed font-body text-base sm:text-lg">
                {(ar ? article.bodyAr : article.bodyEn).split("\n\n").map((paragraph, pIdx) => (
                  <p key={pIdx} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Source Verification Box if External News */}
              {article.sourceUrl && (
                <div className="mt-10 rounded-2xl border border-brand-green/30 bg-brand-green/5 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="block text-xs font-bold text-brand-green-text uppercase tracking-wide">
                      {ar ? "مصدر الخبر الموثق" : "Verified Source Attribution"}
                    </span>
                    <span className="font-head text-sm font-bold text-foreground mt-0.5 block">
                      {article.sourceName}
                    </span>
                  </div>
                  <Button asChild size="sm" className="rounded-full bg-brand-green text-white hover:bg-brand-orange transition-colors">
                    <a href={article.sourceUrl} target="_blank" rel="noopener noreferrer">
                      <span>{ar ? "الاطلاع على المصدر الأصلي" : "View Original Source"}</span>
                      <ExternalLink className="size-3.5 ms-2" />
                    </a>
                  </Button>
                </div>
              )}

              {/* Share & Actions Row */}
              <div className="mt-10 pt-6 border-t border-border/60 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-foreground me-1">
                    {ar ? "مشاركة المقال:" : "Share Article:"}
                  </span>
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(`${ar ? article.titleAr : article.titleEn} - https://sami-trade.com/news/${article.slug}`)}`}
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
                  <span>{ar ? "العودة لكافة الأخبار والرؤى" : "Back to All News"}</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar / Related */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-3xl border border-white/20 bg-background/80 p-6 shadow-md backdrop-blur-xl">
              <h3 className="font-head text-lg font-bold text-foreground mb-4">
                {ar ? "مقالات ورؤى ذات صلة" : "Related Insights"}
              </h3>

              <div className="space-y-4">
                {relatedArticles.map((rel) => (
                  <div key={rel.id} className="group border-b border-border/50 pb-4 last:border-0 last:pb-0">
                    <span className="text-[10px] font-mono text-muted-foreground block mb-1">
                      {ar ? rel.dateAr : rel.dateEn}
                    </span>
                    <h4 className="font-head text-sm font-bold text-foreground group-hover:text-brand-orange transition-colors leading-snug">
                      <Link to="/news/$slug" params={{ slug: rel.slug }}>
                        {ar ? rel.titleAr : rel.titleEn}
                      </Link>
                    </h4>
                  </div>
                ))}
              </div>
            </div>

            {/* Inquiries CTA */}
            <div className="rounded-3xl border border-brand-green/30 bg-gradient-to-br from-brand-green/10 via-background/80 to-secondary/40 p-6 shadow-md backdrop-blur-xl">
              <span className="size-1.5 rounded-full bg-brand-orange animate-pulse inline-block mb-3" />
              <h3 className="font-head text-base font-bold text-foreground">
                {ar ? "تواصل مع المكتب الإعلامي والشراكات" : "Media & Commercial Inquiries"}
              </h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                {ar
                  ? "لأي استفسارات صحفية أو مقترحات شراكة مؤسسية عبر قطاعات مجموعة سامي بن عياد."
                  : "For press inquiries, editorial features, or institutional partnership proposals across SAMI BIN AYYAD GROUP."}
              </p>
              <div className="mt-4">
                <Button asChild size="sm" className="w-full rounded-full bg-brand-green text-white hover:bg-brand-orange transition-colors font-bold text-xs">
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

