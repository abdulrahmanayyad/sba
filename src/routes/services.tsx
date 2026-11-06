import { createFileRoute } from "@tanstack/react-router";
import { ServicesCataloguePage } from "@/components/services/services-catalogue-page";

export const Route = createFileRoute("/services")({
  validateSearch: (search: Record<string, unknown>): Record<string, unknown> => search,
  head: () => ({
    meta: [
      { title: "Engineering Services & Solutions — Sami Bin Ayyad Group" },
      {
        name: "description",
        content:
          "Explore Sami Bin Ayyad Group's 39 verified engineering and EPC capabilities across Construction, Environmental Engineering, and Apparel Manufacturing.",
      },
      { property: "og:title", content: "Engineering Services & Solutions — Sami Bin Ayyad Group" },
      {
        property: "og:description",
        content:
          "Discover our turnkey engineering, EPC contracting, and industrial solutions. Request formal technical consultations and explore executed projects.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesCataloguePage,
});
