import { createFileRoute } from "@tanstack/react-router";
import { InvestorRelationsPage } from "@/components/investor-relations/investor-relations-page";

export const Route = createFileRoute("/investor-relations")({
  head: () => ({
    meta: [
      { title: "Investor Relations & Capital Partnerships — Sami Bin Ayyad Group" },
      {
        name: "description",
        content:
          "Institutional partnerships, joint ventures, and capital growth opportunities across Contracting, Apparel Manufacturing, Sustainable Environmental Technologies, and Agri-Food with Sami Bin Ayyad Group.",
      },
      { property: "og:title", content: "Investor Relations — Sami Bin Ayyad Group" },
      {
        property: "og:description",
        content:
          "Institutional co-investment and strategic joint ventures in real operating assets. Request official investor dossiers and confidential meeting.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: InvestorRelationsPage,
});
