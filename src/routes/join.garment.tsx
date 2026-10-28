import { createFileRoute } from "@tanstack/react-router";
import { JoinPage } from "@/components/join/join-page";

export const Route = createFileRoute("/join/garment")({
  head: () => ({
    meta: [
      { title: "Join Our Garment Manufacturing Team — Crafting Excellence | SBA" },
      {
        name: "description",
        content:
          "Recruitment and collaboration for fashion brands, international buyers, textile mills, fashion designers, pattern makers, production managers, and QA specialists.",
      },
      {
        property: "og:title",
        content: "Join Our Garment Manufacturing Team — Crafting Excellence. Dressing the World.",
      },
      {
        property: "og:description",
        content:
          "Join SBA Ready-Made Garment Manufacturing across fashion brands, international buyers, and specialized production lines.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: JoinGarmentRoute,
});

function JoinGarmentRoute() {
  return <JoinPage trackId="garment" />;
}

