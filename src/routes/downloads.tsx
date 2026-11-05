import { createFileRoute } from "@tanstack/react-router";
import { DownloadsPage } from "@/components/downloads/downloads-page";

export const Route = createFileRoute("/downloads")({
  head: () => ({
    meta: [
      { title: "Corporate Downloads & Documentation Center — SBA | Sami Bin Ayyad Group" },
      { name: "description", content: "Official download center for Sami Bin Ayyad Group. Access certified company profiles, sector capability dossiers, product catalogues, and technical data sheets." },
      { property: "og:title", content: "Corporate Downloads Center — Sami Bin Ayyad Group" },
      { property: "og:description", content: "Download official corporate profiles, product catalogues, and technical data sheets across Construction, Environment, Apparel, and Food sectors." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DownloadsPage,
});
