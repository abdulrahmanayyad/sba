import { createFileRoute } from "@tanstack/react-router";
import { ProductsCataloguePage } from "@/components/products/products-catalogue-page";

export const Route = createFileRoute("/products")({
  validateSearch: (search: Record<string, unknown>): Record<string, unknown> => search,
  head: () => ({
    meta: [
      { title: "Products & Solutions Catalogue — Sami Bin Ayyad Group" },
      {
        name: "description",
        content:
          "Explore Sami Bin Ayyad Group's multi-sector products catalogue: Apparel & Garment OEM manufacturing, Sustainable Environmental Technologies, Authentic Egyptian Agri-Food, and Industrial Measurement & Water Solutions.",
      },
      { property: "og:title", content: "Products Catalogue — Sami Bin Ayyad Group" },
      {
        property: "og:description",
        content:
          "Comprehensive multi-sector catalogue spanning Garments, Environmental Solutions, Agri-Food, and Industrial Technologies. Request official quotation and technical datasheets.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProductsCataloguePage,
});
