import { createFileRoute } from "@tanstack/react-router";
import { NewsDetailPage } from "@/components/news/news-detail-page";
import { newsArticles } from "@/components/news/news-data";

export const Route = createFileRoute("/news/$slug")({
  head: ({ params }) => {
    const article = newsArticles.find((a) => a.slug === params.slug);
    const title = article ? `${article.titleEn} — SBA News` : "Article — SBA News";
    const desc = article?.excerptEn ?? "Sami Bin Ayyad Group news and insights.";
    const articleSchema = article
      ? {
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          headline: article.titleEn,
          description: article.excerptEn,
          image: article.image ? [`https://sami-trade.com${article.image}`] : undefined,
          datePublished: article.publishedAt,
          dateModified: article.publishedAt,
          author: {
            "@type": "Organization",
            name: "Sami Bin Ayyad Group Editorial Team",
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
        }
      : null;

    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
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

