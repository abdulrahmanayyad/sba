import { createFileRoute } from "@tanstack/react-router";
import { ProductsCataloguePage } from "@/components/products/products-catalogue-page";

export const Route = createFileRoute("/products")({
  validateSearch: (search: Record<string, unknown>): Record<string, unknown> => search,
  head: () => ({
    meta: [
      { title: "Physical Products Catalogue — Sami Bin Ayyad Group" },
      {
        name: "description",
        content:
          "Explore Sami Bin Ayyad Group's verified physical goods catalogue: Apparel & Garment exports, and authentic natural Agri-Food products.",
      },
      { property: "og:title", content: "Physical Products Catalogue — Sami Bin Ayyad Group" },
      {
        property: "og:description",
        content:
          "Explore 24 verified physical products across Apparel & Textiles and Natural Agri-Food. Request official export quotations and technical datasheets.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProductsCataloguePage,
});
