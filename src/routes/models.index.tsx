import { createFileRoute } from "@tanstack/react-router";

import { ModelsPage } from "@/components/models/models-page";

export const Route = createFileRoute("/models/")({
  head: () => ({
    meta: [
      { title: "Apparel Model Library & Manufacturing Catalogue — Sami Bin Ayyad Group" },
      { name: "description", content: "Browse over 2,700 production-ready apparel models across seasons, categories, and age ranges. Request custom private-label B2B manufacturing and export quotation." },
      { property: "og:title", content: "Apparel Model Library (+2,700 Models) — SBA" },
      { property: "og:description", content: "Explore 2,700+ ready-to-produce apparel styles across seasonal collections, categories, and age ranges with full B2B export specifications." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ModelsPage,
});


