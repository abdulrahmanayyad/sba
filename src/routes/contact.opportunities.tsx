import { createFileRoute } from "@tanstack/react-router";
import { SubmitOpportunityPage } from "@/components/contact/opportunities-page";

export const Route = createFileRoute("/contact/opportunities")({
  head: () => ({
    meta: [
      { title: "اعرض فرصتك | Submit Your Opportunity — Sami Bin Ayyad Group" },
      {
        name: "description",
        content: "بوابة استقبال الفرص الاستثمارية والمشروعات المشتركة لمجموعة سامي بن عياد.",
      },
    ],
  }),
  component: SubmitOpportunityPage,
});

