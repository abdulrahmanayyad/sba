import { createFileRoute } from "@tanstack/react-router";

import { ModelsPage } from "@/components/models/models-page";

export const Route = createFileRoute("/models/")({
  head: () => ({
    meta: [
      { title: "Model Library — SBA | Sami Bin Ayyad Group" },
      { name: "description", content: "Browse production-ready women’s, men’s and children’s models. Search by category, fabric, colour and season, then request any model as-is or customized." },
      { property: "og:title", content: "Model Library — SBA" },
      { property: "og:description", content: "Production-ready private label and OEM models. Request any model as-is, or customize fabric, color, sizes and details." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ModelsPage,
});


