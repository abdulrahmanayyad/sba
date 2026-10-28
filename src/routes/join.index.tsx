import { createFileRoute } from "@tanstack/react-router";
import { JoinPage } from "@/components/join/join-page";

export const Route = createFileRoute("/join/")({
  head: () => ({
    meta: [
      { title: "Join Our Group — Build the Future With Us | SBA" },
      {
        name: "description",
        content:
          "We welcome ambitious professionals, strategic partners, investors, and organizations across our business sectors.",
      },
      { property: "og:title", content: "Join Our Group — SAMI BIN AYYAD GROUP" },
      {
        property: "og:description",
        content:
          "Build the Future With Us. Careers, Strategic Partnerships, and Investments.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <JoinPage trackId="group" />,
});
