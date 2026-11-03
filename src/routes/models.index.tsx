import { createFileRoute } from "@tanstack/react-router";

import { ModelsPage } from "@/components/models/models-page";

export const Route = createFileRoute("/models/")({
  head: () => ({
    meta: [
      { title: "Apparel Catalogue — SBA | Sami Bin Ayyad Group" },
      { name: "description", content: "Browse production-ready women’s, men’s and children’s apparel models. Filter by collection, category and age range, then request any design as-is or customized for private label manufacturing." },
      { property: "og:title", content: "Model Library — SBA" },
      { property: "og:description", content: "Browse production-ready private label and OEM models across seasons, categories and age groups. Request instant quotation for any design." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ModelsPage,
});


