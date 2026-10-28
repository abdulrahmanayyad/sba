import { createFileRoute } from "@tanstack/react-router";

import { BrandsPage } from "@/components/brands/brands-page";

export const Route = createFileRoute("/brands")({
  head: () => ({
    meta: [
      { title: "Our Brands — Sami Bin Ayyad" },
      { name: "description", content: "Garment and fashion brands of Sami Bin Ayyad Group for B2B and B2C apparel across international markets." },
      { property: "og:title", content: "Our Brands — Sami Bin Ayyad" },
      { property: "og:description", content: "Sami Bin Ayyad Group Garment & Fashion Brands." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BrandsPage,
});


