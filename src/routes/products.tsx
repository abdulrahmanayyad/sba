import { createFileRoute } from "@tanstack/react-router";

import { ProductsPage, type ProductLine } from "@/components/products/products-page";

const valid: ProductLine[] = ["b2c", "b2b"];

export const Route = createFileRoute("/products")({
  validateSearch: (search: Record<string, unknown>): { line: ProductLine } => {
    const raw = String(search["line"] ?? "").toLowerCase();
    const line: ProductLine = raw === "b2b" ? "b2b" : "b2c";
    return { line };
  },
  head: () => ({
    meta: [
      { title: "Our Products — B2C & B2B | Sami Bin Ayyad" },
      { name: "description", content: "Sami Bin Ayyad garment and fashion product lines: B2C collections and B2B commercial lines." },
      { property: "og:title", content: "Our Products — Sami Bin Ayyad" },
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


