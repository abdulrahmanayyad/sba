import { createFileRoute, notFound } from "@tanstack/react-router";
import { GlobalMarketsStudyPage } from "@/components/global-markets/global-markets-study-page";
import { ApparelComparativePage } from "@/components/global-markets/apparel-comparative-page";
import { useLanguage } from "@/i18n/language-context";
import {
  GLOBAL_MARKET_SECTORS,
  type ApparelSubRegionId,
  type GlobalMarketSectorId,
} from "@/lib/global-markets-data";

const COMPARATIVE_SLUG_MAP: Record<
  string,
  { initialSubRegion: ApparelSubRegionId | "all"; isGccReport?: boolean; titleAr: string }
> = {
  compare: {
    initialSubRegion: "all",
    titleAr: "لوحة المقارنة الشاملة للأسواق العالمية (41 دولة)",
  },
  "gcc-comparative-report": {
    initialSubRegion: "gcc",
    isGccReport: true,
    titleAr: "التقرير المقارن لأسواق دول مجلس التعاون الخليجي",
  },
  "other-arab-comparative-report": {
    initialSubRegion: "other_arab",
    titleAr: "التقرير المقارن لأسواق الدول العربية الأخرى",
  },
  "europe-comparative-report": {
    initialSubRegion: "europe",
    titleAr: "التقرير المقارن للأسواق الأوروبية",
  },
  "africa-comparative-report": {
    initialSubRegion: "africa",
    titleAr: "التقرير المقارن لأسواق إفريقيا",
  },
  "north-america-comparative-report": {
    initialSubRegion: "north_america",
    titleAr: "التقرير المقارن لأسواق أمريكا الشمالية",
  },
  "south-central-america-comparative-report": {
    initialSubRegion: "south_central_america",
    titleAr: "التقرير المقارن لأسواق أمريكا الجنوبية والوسطى",
  },
  "region-gcc": { initialSubRegion: "gcc", titleAr: "مقارنة أسواق دول الخليج" },
  "region-levant": { initialSubRegion: "levant", titleAr: "مقارنة أسواق المشرق العربي" },
  "region-north-africa": { initialSubRegion: "north_africa", titleAr: "مقارنة أسواق شمال أفريقيا" },
  "region-africa": { initialSubRegion: "africa", titleAr: "مقارنة الأسواق الأفريقية" },
  "region-europe": { initialSubRegion: "europe", titleAr: "مقارنة الأسواق الأوروبية" },
  "region-americas": { initialSubRegion: "americas", titleAr: "مقارنة أسواق الأمريكتين" },
  "region-asia-pacific": { initialSubRegion: "asia_pacific", titleAr: "مقارنة أسواق آسيا وأستراليا" },
};

export const Route = createFileRoute("/global-markets/$sector/$slug")({
  loader: ({ params }) => {
    const sector = GLOBAL_MARKET_SECTORS.find((s) => s.id === params.sector);
    if (!sector) {
      throw notFound();
    }
    return { sectorId: sector.id, slug: params.slug };
  },
  head: ({ params }) => {
    const cmp = params.sector === "garment" ? COMPARATIVE_SLUG_MAP[params.slug] : undefined;
    return {
      meta: [
        {
          title: cmp
            ? `${cmp.titleAr} | الأسواق العالمية — Sami Bin Ayyad Group`
            : `${params.slug} | الأسواق العالمية — Sami Bin Ayyad Group`,
        },
      ],
    };
  },
  component: GlobalMarketsStudyRoute,
});

function GlobalMarketsStudyRoute() {
  const { sector, slug } = Route.useParams();
  const { language } = useLanguage();
  const ar = language === "AR";

  const cmp = sector === "garment" ? COMPARATIVE_SLUG_MAP[slug] : undefined;
  if (cmp) {
    return (
      <ApparelComparativePage
        ar={ar}
        initialSubRegion={cmp.initialSubRegion}
        isGccReport={Boolean(cmp.isGccReport)}
      />
    );
  }

  return (
    <GlobalMarketsStudyPage
      sectorId={sector as GlobalMarketSectorId}
      slug={slug}
      ar={ar}
    />
  );
}

