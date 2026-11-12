import { createFileRoute } from "@tanstack/react-router";
import { GlobalMarketsHome } from "@/components/global-markets/global-markets-home";
import { useLanguage } from "@/i18n/language-context";

export const Route = createFileRoute("/global-markets/")({
  head: () => ({
    meta: [
      { title: "الأسواق العالمية | Global Markets — Sami Bin Ayyad Group" },
      {
        name: "description",
        content:
          "دراسات تحليلية متخصصة للأسواق المحلية والدولية، تكشف حجم الطلب والفرص التجارية والاستثمارية لقطاعات مجموعة سامي بن عياد.",
      },
      { property: "og:title", content: "Global Markets | الأسواق العالمية — Sami Bin Ayyad Group" },
      {
        property: "og:description",
        content:
          "Comprehensive market research and strategic intelligence covering local and international markets across SAMI BIN AYYAD GROUP sectors.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: GlobalMarketsIndexRoute,
});

function GlobalMarketsIndexRoute() {
  const { language } = useLanguage();
  return <GlobalMarketsHome ar={language === "AR"} />;
}

