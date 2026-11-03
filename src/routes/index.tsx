import { createFileRoute } from "@tanstack/react-router";
import { GroupPage } from "@/components/group/group-page";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sami Bin Ayyad Group | Construction Manufacturing and Supply" },
      { name: "description", content: "Explore Sami Bin Ayyad Group's construction, environmental, apparel manufacturing and food supply capabilities. Discuss your project or order." },
      { property: "og:title", content: "Sami Bin Ayyad Group | Construction Manufacturing and Supply" },
      { property: "og:description", content: "Explore Sami Bin Ayyad Group's construction, environmental, apparel manufacturing and food supply capabilities." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GroupPage,
});


