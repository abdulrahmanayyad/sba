import { createFileRoute, notFound } from "@tanstack/react-router";
import { GlobalMarketsSectorPage } from "@/components/global-markets/global-markets-sector-page";
import { useLanguage } from "@/i18n/language-context";
import {
  GLOBAL_MARKET_SECTORS,
  type GlobalMarketSectorId,
} from "@/lib/global-markets-data";

export const Route = createFileRoute("/global-markets/$sector/")({
  loader: ({ params }) => {
    const sector = GLOBAL_MARKET_SECTORS.find((s) => s.id === params.sector);
    if (!sector) {
      throw notFound();
    }
    return { sectorId: sector.id, nameAr: sector.nameAr, nameEn: sector.nameEn };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.nameAr} | ${loaderData.nameEn} — الأسواق العالمية`
          : "الأسواق العالمية | Global Markets",
      },
    ],
  }),
  component: GlobalMarketsSectorIndexRoute,
});

function GlobalMarketsSectorIndexRoute() {
  const { sector } = Route.useParams();
  const { language } = useLanguage();
  return (
    <GlobalMarketsSectorPage
      sectorId={sector as GlobalMarketSectorId}
      ar={language === "AR"}
    />
  );
}

