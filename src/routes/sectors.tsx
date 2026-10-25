import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sectors")({
  head: () => ({
    meta: [
      { title: "Our Sectors — SBA | Sami Bin Ayyad Group" },
      { name: "description", content: "The sectors of Sami Bin Ayyad Group: garment manufacturing, contracting, environment, research, education and food & natural products." },
      { property: "og:title", content: "Our Sectors — SBA" },
      { property: "og:description", content: "Six specialised sectors. One integrated vision." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <Outlet />,
});

