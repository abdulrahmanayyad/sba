import { createFileRoute, notFound } from "@tanstack/react-router";

import { SectorPage } from "@/components/sectors/sector-page";
import { sectors, type SectorSlug } from "@/components/sectors/sector-data";
import { ConstructionSectorView, type ConstructionTab } from "@/components/sectors/construction/construction-view";
import { GarmentSectorView, type GarmentTab } from "@/components/sectors/garment/garment-view";
import { EnvironmentalSectorView, type EnvironmentalTab } from "@/components/sectors/environmental/environmental-view";

const validConstructionTabs: ConstructionTab[] = ["about", "sectors", "services", "projects", "join", "start-project"];
const validGarmentTabs: GarmentTab[] = ["about", "services", "clients", "projects", "partners", "capabilities", "join", "start-project"];
const validEnvironmentalTabs: EnvironmentalTab[] = ["about", "sectors", "services", "products", "join", "start-consultation"];

export const Route = createFileRoute("/sectors/$sector")({
  validateSearch: (search: Record<string, unknown>): { tab?: string | undefined } => {
    const tabStr = search["tab"];
    if (typeof tabStr === "string" && tabStr) {
      if (
        validConstructionTabs.includes(tabStr as ConstructionTab) ||
        validGarmentTabs.includes(tabStr as GarmentTab) ||
        validEnvironmentalTabs.includes(tabStr as EnvironmentalTab)
      ) {
        return { tab: tabStr };
      }
    }
    return { tab: undefined };
  },
  head: ({ params, search }: { params: { sector: string }; search?: { tab?: string } }) => {
    const sector = sectors[params.sector as SectorSlug];
    const name = sector?.name ?? "Sector";
    const tab = search?.tab;

    let title = `${name} — SBA | Sami Bin Ayyad Group`;

    if (params.sector === "construction" && tab) {
      const constructionTabTitles: Record<string, string> = {
        about: "About Contracting & Development",
        sectors: "Sectors We Serve — Healthcare, Residential & Commercial",
        services: "Our Contracting & MEP Services",
        projects: "Our Track Record & Project Portfolio",
      };
      if (constructionTabTitles[tab]) {
        title = `${constructionTabTitles[tab]} — SBA Contracting`;
      }
    } else if (params.sector === "garment" && tab) {
      const garmentTabTitles: Record<string, string> = {
        about: "About Us — Garment Manufacturing & Fashion Development",
        services: "Our Services — Ready-Made Garments & FOB",
        clients: "Our Clients — Global & Regional Fashion Brands",
        projects: "Our Projects — Garment Portfolio",
        partners: "Our Partners — Brand Partners Across Categories",
        capabilities: "Our Capabilities — Advanced Garment Infrastructure",
        join: "Join Us & Request Quotation",
      };
      if (garmentTabTitles[tab]) {
        title = `${garmentTabTitles[tab]} — SBA Garment`;
      }
    } else if (params.sector === "environmental" && tab) {
      const environmentalTabTitles: Record<string, string> = {
        about: "About Us — Sustainable Environment & Renewable Energy",
        sectors: "Sectors We Serve — Environmental & Energy Solutions",
        services: "Our Services — Environmental Consulting & Green Technologies",
      };
      if (environmentalTabTitles[tab]) {
        title = `${environmentalTabTitles[tab]} — SBA Environmental`;
      }
    }

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
    return <ConstructionSectorView tab={tab as ConstructionTab} />;
  }

  if (sector === "garment") {
    return <GarmentSectorView tab={tab as GarmentTab} />;
  }

  if (sector === "environmental") {
    return <EnvironmentalSectorView tab={tab as EnvironmentalTab} />;
  }

  return <SectorPage sector={data} />;
}



