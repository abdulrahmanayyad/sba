import { createFileRoute } from "@tanstack/react-router";
import { GroupPage } from "@/components/group/group-page";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sami Bin Ayyad" },
      { name: "description", content: "SAMI BIN AYYAD GROUP — Six sectors, one vision: Garments, Contracting, Environment, Natural Products, Research & Education." },
      { property: "og:title", content: "Sami Bin Ayyad" },
      { property: "og:description", content: "SAMI BIN AYYAD GROUP — Driving progress across strategic sectors." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GroupPage,
});


