import { createFileRoute, notFound } from "@tanstack/react-router";

import { SectorPage } from "@/components/sectors/sector-page";
import { sectors, type SectorSlug } from "@/components/sectors/sector-data";
import { ConstructionSectorView, type ConstructionTab } from "@/components/sectors/construction/construction-view";
import { GarmentSectorView, type GarmentTab } from "@/components/sectors/garment/garment-view";
import { EnvironmentalSectorView, type EnvironmentalTab } from "@/components/sectors/environmental/environmental-view";
import { FoodSectorView, type FoodTab } from "@/components/sectors/food/food-view";

const validConstructionTabs: ConstructionTab[] = ["about", "sectors", "services", "projects", "join", "start-project", "verify-portal", "verification-admin"];
const validGarmentTabs: GarmentTab[] = ["about", "services", "clients", "projects", "partners", "capabilities", "join", "start-project"];
const validEnvironmentalTabs: EnvironmentalTab[] = ["about", "sectors", "services", "products", "join", "start-consultation"];
const validFoodTabs: FoodTab[] = ["about", "sectors", "products", "markets", "order-product", "join"];

export const Route = createFileRoute("/sectors/$sector")({
  validateSearch: (search: Record<string, unknown>): { tab?: string | undefined; service?: string | undefined; token?: string | undefined } => {
    const tabStr = search["tab"];
    const serviceStr = typeof search["service"] === "string" ? search["service"] : undefined;
    const tokenStr = typeof search["token"] === "string" ? search["token"] : undefined;
    let validatedTab: string | undefined = undefined;
    if (typeof tabStr === "string" && tabStr) {
      if (
        validConstructionTabs.includes(tabStr as ConstructionTab) ||
        validGarmentTabs.includes(tabStr as GarmentTab) ||
        validEnvironmentalTabs.includes(tabStr as EnvironmentalTab) ||
        validFoodTabs.includes(tabStr as FoodTab)
      ) {
        validatedTab = tabStr;
      }
    }
    return { tab: validatedTab, service: serviceStr, token: tokenStr };
  },
  head: ({ params, search }: { params: { sector: string }; search?: { tab?: string; service?: string } }) => {
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
    } else if (params.sector === "food" && tab) {
      const foodTabTitles: Record<string, string> = {
        about: "About Us — Natural & Agri-Food Products",
        sectors: "Our Product Categories — Honey, Olives, Dates & Herbs",
        products: "Our Products & Export Specifications",
        markets: "Our Global Markets & 2024 Trade Indicators",
        "order-product": "Request for Quotation (RFQ) — Order Natural Products",
        join: "Join Us & Commercial Agri-Food Partnership",
      };
      if (foodTabTitles[tab]) {
        title = `${foodTabTitles[tab]} — SBA Natural Products`;
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
  const { tab, token } = Route.useSearch();
  const data = sectors[sector as SectorSlug];
  if (!data) throw notFound();

  if (sector === "construction") {
    return <ConstructionSectorView tab={tab as ConstructionTab} token={token} />;
  }

  if (sector === "garment") {
    return <GarmentSectorView tab={tab as GarmentTab} />;
  }

  if (sector === "environmental") {
    return <EnvironmentalSectorView tab={tab as EnvironmentalTab} />;
  }

  if (sector === "food") {
    return <FoodSectorView tab={tab as FoodTab} />;
  }

  return <SectorPage sector={data} />;
}



