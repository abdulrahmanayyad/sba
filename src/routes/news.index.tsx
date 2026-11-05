import { createFileRoute } from "@tanstack/react-router";
import { NewsPage } from "@/components/news/news-page";

export const Route = createFileRoute("/news/")({
  head: () => ({
    links: [
      { rel: "canonical", href: "https://sami-trade.com/news" },
    ],
    meta: [
      { title: "Corporate News Archive & Multi-Sector Updates (2020–2026) — Sami Bin Ayyad Group" },
      {
        name: "description",
        content: "Explore the verified corporate news archive, market intelligence reports, industry exhibitions, and multi-sector developments of Sami Bin Ayyad Group spanning 2020 through 2026.",
      },
      { property: "og:title", content: "Corporate News Archive (2020–2026) — Sami Bin Ayyad Group" },
      {
        property: "og:description",
        content: "Verified historical news archive, specialized trade fairs, and multi-sector business activities of Sami Bin Ayyad Group across contracting, environment, garments, and natural products.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://sami-trade.com/news" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: NewsPage,
});
