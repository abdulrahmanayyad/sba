import { createFileRoute } from "@tanstack/react-router";

import { ManufacturePage } from "@/components/manufacture/manufacture-page";

export const Route = createFileRoute("/how-we-manufacture")({
  head: () => ({
    meta: [
      { title: "How We Manufacture — SBA | Sami Bin Ayyad Group" },
      { name: "description", content: "The SBA manufacturing process in ten stages, from product brief and fabric development through sampling, bulk production, quality control and export." },
      { property: "og:title", content: "How We Manufacture — SBA" },
      { property: "og:description", content: "From idea to export in ten controlled stages — private label manufacturing to your specification." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ManufacturePage,
});
