import { createFileRoute } from "@tanstack/react-router";
import { NewsPage } from "@/components/news/news-page";

export const Route = createFileRoute("/news/")({
  head: () => ({
    meta: [
      { title: "News & Business Updates — SBA | Sami Bin Ayyad Group" },
      { name: "description", content: "News from the sectors, verified updates, and industry insights of Sami Bin Ayyad Group." },
      { property: "og:title", content: "News & Business Updates — SBA" },
      { property: "og:description", content: "Group news, verified updates and publications." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: NewsPage,
});

