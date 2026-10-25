import { createFileRoute } from "@tanstack/react-router";

import { BrandsPage } from "@/components/brands/brands-page";

export const Route = createFileRoute("/brands")({
  head: () => ({
    meta: [
      { title: "Our Brands — SBA | Sami Bin Ayyad Group" },
      { name: "description", content: "JZRA — the own garment brand of Sami Bin Ayyad Group for women's and children's wear, sold in Egypt, Türkiye and Saudi Arabia." },
      { property: "og:title", content: "Our Brands — SBA" },
      { property: "og:description", content: "JZRA — our own garment brand." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BrandsPage,
});
