import { createFileRoute } from "@tanstack/react-router";
import { JoinPage } from "@/components/join/join-page";

export const Route = createFileRoute("/join/sustainability")({
  head: () => ({
    meta: [
      { title: "Join Our Sustainability Team — Innovate for a Better Tomorrow | SBA" },
      {
        name: "description",
        content:
          "Recruitment and collaboration with environmental professionals, sustainability experts, renewable energy specialists, water and waste management companies, technology providers, researchers, consultants, and strategic project partners.",
      },
      {
        property: "og:title",
        content: "Join Our Sustainability Team — Innovate for a Better Tomorrow",
      },
      {
        property: "og:description",
        content:
          "Innovate with SBA Environmental & Sustainability Solutions across waste-to-energy, carbon footprint, EIA, and renewable technologies.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: JoinSustainabilityRoute,
});

function JoinSustainabilityRoute() {
  return <JoinPage trackId="sustainability" />;
}
