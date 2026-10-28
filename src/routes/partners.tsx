import { createFileRoute } from "@tanstack/react-router";

import { PartnersPage } from "@/components/partners/partners-page";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Our Partners — SBA | Sami Bin Ayyad Group" },
      { name: "description", content: "Partners and clients of Sami Bin Ayyad Group across its five sectors — published after formal verification and approval." },
      { property: "og:title", content: "Our Partners — SBA" },
      { property: "og:description", content: "Partners who build with us." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PartnersPage,
});


