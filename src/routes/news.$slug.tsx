import { createFileRoute } from "@tanstack/react-router";
import { NewsDetailPage } from "@/components/news/news-detail-page";
import { newsArticles } from "@/components/news/news-data";

export const Route = createFileRoute("/news/$slug")({
  head: ({ params }) => {
    const article = newsArticles.find((a) => a.slug === params.slug);
    const title = article ? `${article.titleEn} — SBA News` : "Article — SBA News";
    const desc = article?.excerptEn ?? "Sami Bin Ayyad Group news and insights.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: NewsDetailRoute,
});

function NewsDetailRoute() {
  const { slug } = Route.useParams();
  return <NewsDetailPage slug={slug} />;
}

