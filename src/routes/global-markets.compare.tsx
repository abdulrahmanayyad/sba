import { createFileRoute } from "@tanstack/react-router";
import { ApparelComparativePage } from "@/components/global-markets/apparel-comparative-page";
import { useLanguage } from "@/i18n/language-context";

export const Route = createFileRoute("/global-markets/compare")({
  head: () => ({
    meta: [
      {
        title: "لوحة المقارنة الشاملة للأسواق العالمية — مجموعة سامي بن عياد",
      },
    ],
  }),
  component: GlobalMarketsCompareRoute,
});

function GlobalMarketsCompareRoute() {
  const { language } = useLanguage();
  return <ApparelComparativePage ar={language === "AR"} initialSector="all" initialSubRegion="all" />;
}
