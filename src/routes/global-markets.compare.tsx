import { createFileRoute, redirect } from "@tanstack/react-router";
import { ApparelComparativePage } from "@/components/global-markets/apparel-comparative-page";
import { useLanguage } from "@/i18n/language-context";

export const Route = createFileRoute("/global-markets/compare")({
  beforeLoad: () => {
    throw redirect({
      to: "/global-markets/$sector/$slug",
      params: { sector: "garment", slug: "compare" },
    });
  },
  head: () => ({
    meta: [
      {
        title: "لوحة المقارنة الشاملة للأسواق العالمية | Global Comparative Dashboard — Sami Bin Ayyad Group",
      },
    ],
  }),
  component: GlobalMarketsCompareRoute,
});

function GlobalMarketsCompareRoute() {
  const { language } = useLanguage();
  return <ApparelComparativePage ar={language === "AR"} initialSubRegion="all" />;
}

