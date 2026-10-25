import { createFileRoute } from "@tanstack/react-router";

import { ProductsPage, type ProductLine } from "@/components/products/products-page";

const valid: ProductLine[] = ["jzra", "tijari", "azra"];

export const Route = createFileRoute("/products")({
  validateSearch: (search: Record<string, unknown>): { line: ProductLine } => ({
    line: valid.includes(search["line"] as ProductLine) ? (search["line"] as ProductLine) : "jzra",
  }),
  head: () => ({
    meta: [
      { title: "Our Products — JZRA, TIJARI, AZRA | SBA" },
      { name: "description", content: "SBA product lines: JZRA summer and winter collections, TIJARI and AZRA." },
      { property: "og:title", content: "Our Products — SBA" },
      { property: "og:description", content: "JZRA seasonal collections, TIJARI and AZRA product lines." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProductsRoute,
});

function ProductsRoute() {
  const { line } = Route.useSearch();
  return <ProductsPage line={line} />;
}
