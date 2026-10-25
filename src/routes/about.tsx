import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/about/about-page";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — SBA | Sami Bin Ayyad Group" },
      { name: "description", content: "Who we are, our approach, values and leadership at Sami Bin Ayyad Group." },
      { property: "og:title", content: "About Sami Bin Ayyad Group" },
      { property: "og:description", content: "Our story, approach, values and leadership." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});
