import { createFileRoute } from "@tanstack/react-router";
import { JoinIndexPage } from "@/components/join/join-index";

export const Route = createFileRoute("/join/")({
  head: () => ({
    meta: [
      { title: "Join Us & Strategic Partnerships — SBA | Sami Bin Ayyad Group" },
      {
        name: "description",
        content:
          "Explore career, engineering, sustainability, supplier, and strategic partnership opportunities across SAMI BIN AYYAD GROUP.",
      },
      { property: "og:title", content: "Join Us & Strategic Partnerships — SBA" },
      {
        property: "og:description",
        content:
          "Explore three dedicated pathways: Join Our Group, Join Our Construction Team, and Join Our Sustainability Team.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: JoinIndexPage,
});
