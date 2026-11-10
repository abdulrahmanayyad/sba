import { createFileRoute } from "@tanstack/react-router";
import { TradePage } from "@/components/trade/trade-page";
import { useLanguage } from "@/i18n/language-context";

function TradeRouteComponent() {
  const { language } = useLanguage();
  const isArabic = language === "AR";
  return <TradePage ar={isArabic} />;
}

export const Route = createFileRoute("/trade")({
  head: () => ({
    meta: [
      { title: "Global Trade Footprint & Market Intelligence — Sami Bin Ayyad Group" },
      { 
        name: "description", 
        content: "Documented 2023–2026 international commercial reach, buyer inquiries for dates, agricultural commodities, and export crops across 84 destination markets." 
      },
      { property: "og:title", content: "Global Trade Footprint — Sami Bin Ayyad Group" },
      { property: "og:description", content: "Connecting global markets, delivering verified international commercial opportunities." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TradeRouteComponent,
});
