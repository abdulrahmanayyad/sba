import { createFileRoute } from "@tanstack/react-router";
import { JoinPage } from "@/components/join/join-page";

export const Route = createFileRoute("/join/group")({
  head: () => ({
    meta: [
      { title: "Join Our Group — Build the Future With Us | Sami Bin Ayyad Group" },
      {
        name: "description",
        content:
          "We welcome ambitious professionals, strategic partners, investors, and organizations that share our vision for sustainable growth, operational excellence, and long-term value creation.",
      },
      { property: "og:title", content: "Join Our Group — Build the Future With Us" },
      {
        property: "og:description",
        content:
          "Group-level recruitment, strategic partnerships, investment and business development across SAMI BIN AYYAD GROUP.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: JoinGroupRoute,
});

function JoinGroupRoute() {
  return <JoinPage trackId="group" />;
}
