import { createFileRoute } from "@tanstack/react-router";
import { GroupPage } from "@/components/group/group-page";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sami Bin Ayyad Group — Six Sectors, One Vision" },
      { name: "description", content: "A multi-sector group across apparel & textiles, construction, sustainability, scientific research, education and food & natural products." },
      { property: "og:title", content: "Sami Bin Ayyad Group — Six Sectors, One Vision" },
      { property: "og:description", content: "From manufacturing to knowledge: apparel, construction, environment, research, education and food & natural products." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GroupPage,
});
