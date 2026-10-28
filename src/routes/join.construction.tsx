import { createFileRoute } from "@tanstack/react-router";
import { JoinPage } from "@/components/join/join-page";

export const Route = createFileRoute("/join/construction")({
  head: () => ({
    meta: [
      { title: "Join Our Construction Team — Engineering Excellence. Building Tomorrow | SBA" },
      {
        name: "description",
        content:
          "Recruitment and collaboration with engineers, project managers, technical teams, contractors, subcontractors, consultants, engineering offices, and construction material suppliers.",
      },
      {
        property: "og:title",
        content: "Join Our Construction Team — Engineering Excellence. Building Tomorrow.",
      },
      {
        property: "og:description",
        content:
          "Join SBA Contracting & Real Estate Development across healthcare, residential, commercial, and infrastructure projects.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: JoinConstructionRoute,
});

function JoinConstructionRoute() {
  return <JoinPage trackId="construction" />;
}
