import { createFileRoute } from "@tanstack/react-router";
import { GroupPage } from "@/components/group/group-page";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sami Bin Ayyad Group | Multi-Sector Business, Investment & Industrial Solutions" },
      { name: "description", content: "SAMI BIN AYYAD GROUP operates across construction, apparel manufacturing, sustainability, and natural products, delivering integrated business solutions and international partnership opportunities." },
      { property: "og:title", content: "Sami Bin Ayyad Group | Multi-Sector Business, Investment & Industrial Solutions" },
      { property: "og:description", content: "SAMI BIN AYYAD GROUP operates across construction, apparel manufacturing, sustainability, and natural products, delivering integrated business solutions and international partnership opportunities." },
      { property: "og:url", content: "https://www.sami-trade.com/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Sami Bin Ayyad Group | Multi-Sector Business, Investment & Industrial Solutions" },
      { name: "twitter:description", content: "SAMI BIN AYYAD GROUP operates across construction, apparel manufacturing, sustainability, and natural products." },
    ],
    links: [
      { rel: "canonical", href: "https://www.sami-trade.com/" },
      { rel: "alternate", hrefLang: "ar", href: "https://www.sami-trade.com/" },
      { rel: "alternate", hrefLang: "en", href: "https://www.sami-trade.com/" },
      { rel: "alternate", hrefLang: "x-default", href: "https://www.sami-trade.com/" },
    ],
  }),
  component: GroupPage,
});


