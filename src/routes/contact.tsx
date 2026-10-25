import { createFileRoute } from "@tanstack/react-router";

import { ContactPage } from "@/components/contact/contact-page";
import { modelsQueryOptions } from "@/lib/models";

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): { model?: string | undefined } => ({
    model: typeof search["model"] === "string" && search["model"] ? search["model"] : undefined,
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(modelsQueryOptions),
  head: () => ({
    meta: [
      { title: "Manufacturing Inquiry — SBA | Sami Bin Ayyad Group" },
      { name: "description", content: "Tell us what you want to manufacture. Send your requirements, tech pack or reference and our team will reply with feasibility, MOQ and a production timeline." },
      { property: "og:title", content: "Manufacturing Inquiry — SBA" },
      { property: "og:description", content: "Start a manufacturing inquiry — private label, OEM, contract or textile manufacturing." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactRoute,
});

function ContactRoute() {
  const { model } = Route.useSearch();
  return <ContactPage modelCode={model ?? ""} />;
}
