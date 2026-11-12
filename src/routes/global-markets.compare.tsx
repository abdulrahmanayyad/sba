import { createFileRoute } from "@tanstack/react-router";
import { ApparelComparativePage } from "@/components/global-markets/apparel-comparative-page";
import { useLanguage } from "@/i18n/language-context";

export const Route = createFileRoute("/global-markets/compare")({
  head: () => ({
    meta: [
      {
        title: "لوحة المقارنة الشاملة للأسواق العالمية (41 دولة) | Global Comparative Dashboard — Sami Bin Ayyad Group",
      },
    ],
  }),
  component: GlobalMarketsCompareRoute,
});

function GlobalMarketsCompareRoute() {
  const { language } = useLanguage();
  return <ApparelComparativePage ar={language === "AR"} initialSubRegion="all" />;
}

