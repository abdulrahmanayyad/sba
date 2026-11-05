import { createFileRoute } from "@tanstack/react-router";
import { NewsDetailPage } from "@/components/news/news-detail-page";
import { newsArticles } from "@/components/news/news-data";

export const Route = createFileRoute("/news/$slug")({
  head: ({ params }) => {
    const article = newsArticles.find((a) => a.slug === params.slug);
    const title = article ? `${article.seoTitleEn || article.titleEn} — SBA Corporate Archive` : "Article — SBA News";
    const desc = article?.seoDescEn ?? article?.excerptEn ?? "Sami Bin Ayyad Group historical news archive and corporate insights.";
    const canonical = `https://sami-trade.com/news/${params.slug}`;
    const imageUrl = article?.image ? (article.image.startsWith("http") ? article.image : `https://sami-trade.com${article.image}`) : "https://sami-trade.com/brand/logo.png";

    const articleSchema = article
      ? {
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": canonical,
          },
          headline: article.titleEn,
          description: article.excerptEn,
          image: [imageUrl],
          datePublished: article.publishedAt,
          dateModified: article.publishedAt,
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
          keywords: article.keywords ? article.keywords.join(", ") : undefined,
          articleSection: article.categoryEn || article.sector,
        }
      : null;

    return {
      links: [
        { rel: "canonical", href: canonical },
      ],
      meta: [
        { title },
        { name: "description", content: desc },
        { name: "keywords", content: article?.keywords?.join(", ") ?? "Sami Bin Ayyad Group, Corporate News, Industry Archive" },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { property: "og:url", content: canonical },
        { property: "og:image", content: imageUrl },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: desc },
        { name: "twitter:image", content: imageUrl },
      ],
      scripts: articleSchema
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify(articleSchema),
            },
          ]
        : [],
    };
  },
  component: NewsDetailRoute,
});

function NewsDetailRoute() {
  const { slug } = Route.useParams();
  return <NewsDetailPage slug={slug} />;
}
