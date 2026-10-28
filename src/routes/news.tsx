import { createFileRoute } from "@tanstack/react-router";

import { NewsPage } from "@/components/news/news-page";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "Our News — SBA | Sami Bin Ayyad Group" },
      { name: "description", content: "News from the sectors, events and publications of Sami Bin Ayyad Group." },
      { property: "og:title", content: "Our News — SBA" },
      { property: "og:description", content: "Group news, events and publications." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: NewsPage,
});


