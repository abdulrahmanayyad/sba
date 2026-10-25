import { createFileRoute, notFound } from "@tanstack/react-router";

import { SectorPage } from "@/components/sectors/sector-page";
import { sectors, type SectorSlug } from "@/components/sectors/sector-data";

export const Route = createFileRoute("/sectors/$sector")({
  head: ({ params }) => {
    const sector = sectors[params.sector as SectorSlug];
    const name = sector?.name ?? "Sector";
    return {
      meta: [
        { title: `${name} — SBA | Sami Bin Ayyad Group` },
        { name: "description", content: sector?.intro ?? "A sector of Sami Bin Ayyad Group." },
        { property: "og:title", content: `${name} — SBA` },
        { property: "og:description", content: sector?.tagline ?? "A sector of Sami Bin Ayyad Group." },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: SectorRoute,
});

function SectorRoute() {
  const { sector } = Route.useParams();
  const data = sectors[sector as SectorSlug];
  if (!data) throw notFound();
  return <SectorPage sector={data} />;
}
