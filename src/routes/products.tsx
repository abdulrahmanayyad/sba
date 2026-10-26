import { createFileRoute } from "@tanstack/react-router";

import { ProductsPage, type ProductLine } from "@/components/products/products-page";

const valid: ProductLine[] = ["jzra", "tijari"];

export const Route = createFileRoute("/products")({
  validateSearch: (search: Record<string, unknown>): { line: ProductLine } => ({
    line: valid.includes(search["line"] as ProductLine) ? (search["line"] as ProductLine) : "jzra",
  }),
  head: () => ({
    meta: [
      { title: "Our Products — B2C & B2B | SBA" },
      { name: "description", content: "SBA garment and fashion product lines: B2C collections and B2B commercial lines." },
      { property: "og:title", content: "Our Products — SBA" },
      { property: "og:description", content: "B2C seasonal collections and B2B commercial wholesale lines." },
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
