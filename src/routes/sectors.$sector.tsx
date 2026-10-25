import { createFileRoute, notFound } from "@tanstack/react-router";

import { SectorPage } from "@/components/sectors/sector-page";
import { sectors, type SectorSlug } from "@/components/sectors/sector-data";
import { ConstructionSectorView, type ConstructionTab } from "@/components/sectors/construction/construction-view";

const validTabs: ConstructionTab[] = ["about", "sectors", "services", "projects"];

export const Route = createFileRoute("/sectors/$sector")({
  validateSearch: (search: Record<string, unknown>): { tab?: ConstructionTab } => ({
    tab: validTabs.includes(search["tab"] as ConstructionTab) ? (search["tab"] as ConstructionTab) : undefined,
  }),
  head: ({ params, search }) => {
    const sector = sectors[params.sector as SectorSlug];
    const name = sector?.name ?? "Sector";
    const tab = search.tab;
    const tabTitles: Record<string, string> = {
      about: "About Contracting & Development",
      sectors: "Sectors We Serve — Healthcare, Residential & Commercial",
      services: "Our Contracting & MEP Services",
      projects: "Our Track Record & Project Portfolio",
    };
    const title = params.sector === "construction" && tab && tabTitles[tab]
      ? `${tabTitles[tab]} — SBA Contracting`
      : `${name} — SBA | Sami Bin Ayyad Group`;

    return {
      meta: [
        { title },
        { name: "description", content: sector?.intro ?? "A sector of Sami Bin Ayyad Group." },
        { property: "og:title", content: title },
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
  const { tab } = Route.useSearch();
  const data = sectors[sector as SectorSlug];
  if (!data) throw notFound();

  if (sector === "construction") {
    return <ConstructionSectorView tab={tab} />;
  }

  return <SectorPage sector={data} />;
}
