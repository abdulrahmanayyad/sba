import { createFileRoute } from "@tanstack/react-router";
import { ComplaintsPage } from "@/components/contact/complaints-page";

export const Route = createFileRoute("/contact/complaints")({
  head: () => ({
    meta: [
      { title: "الشكاوى والمقترحات | Complaints & Suggestions — Sami Bin Ayyad Group" },
      {
        name: "description",
        content: "بوابة الشكاوى والمقترحات ونظام متابعة الشكاوى الموثق لمجموعة سامي بن عياد.",
      },
    ],
  }),
  component: ComplaintsPage,
});

