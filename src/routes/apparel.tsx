import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/home/home-page";

export const Route = createFileRoute("/apparel")({
  head: () => ({
    meta: [
      { title: "Apparel & Textiles — Sami Bin Ayyad Group" },
      { name: "description", content: "Private label, OEM, contract and textile manufacturing for international fashion businesses." },
      { property: "og:title", content: "Apparel & Textiles — Sami Bin Ayyad Group" },
      { property: "og:description", content: "Garment and fabric manufacturing from product development to export." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});
