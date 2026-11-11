// Request Free Consultation Route
// SAMI BIN AYYAD GROUP — Centralized Consultation Portal

import { createFileRoute } from "@tanstack/react-router";
import { ConsultationPage } from "@/components/consultation/consultation-page";

export const Route = createFileRoute("/request-consultation")({
  validateSearch: (search: Record<string, unknown>): { sector?: string } => {
    return {
      sector: typeof search["sector"] === "string" ? search["sector"] : undefined,
    };
  },
  head: () => ({
    meta: [
      { title: "طلب استشارة مجانية | Request a Free Consultation — Sami Bin Ayyad Group" },
      {
        name: "description",
        content: "احجز استشارة أعمال مجانية 100% مع خبراء مجموعة سامي بن عياد في قطاعات المقاولات، تصنيع الملابس، البيئة والاستدامة، والمنتجات الغذائية.",
      },
      { property: "og:title", content: "طلب استشارة مجانية | Free Consultation — Sami Bin Ayyad Group" },
      {
        property: "og:description",
        content: "Complimentary business and technical consultations across Construction, Apparel Manufacturing, Sustainable Clean Energy, and Agri-Food supply.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.sami-trade.com/request-consultation" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://www.sami-trade.com/request-consultation" },
      { rel: "alternate", hrefLang: "ar", href: "https://www.sami-trade.com/request-consultation" },
      { rel: "alternate", hrefLang: "en", href: "https://www.sami-trade.com/request-consultation" },
      { rel: "alternate", hrefLang: "x-default", href: "https://www.sami-trade.com/request-consultation" },
    ],
  }),
  component: ConsultationPage,
});

