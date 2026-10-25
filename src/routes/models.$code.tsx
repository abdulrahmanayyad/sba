import { createFileRoute, notFound } from "@tanstack/react-router";

import { ModelDetailPage } from "@/components/models/model-detail-page";
import { modelsQueryOptions } from "@/lib/models";

export const Route = createFileRoute("/models/$code")({
  loader: async ({ context, params }) => {
    const models = await context.queryClient.ensureQueryData(modelsQueryOptions);
    if (!models.some((model) => model.code.toLowerCase() === params.code.toLowerCase())) throw notFound();
    return { code: params.code };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Model not found — SBA" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    return {
      meta: [
        { title: `${loaderData.code} — Model Library — SBA | Sami Bin Ayyad Group` },
        { name: "description", content: "Production-ready model specifications, technical sheet, available customizations and similar models from SBA." },
        { property: "og:title", content: `${loaderData.code} — SBA Model Library` },
        { property: "og:description", content: "Production-ready model specifications, technical sheet and available customizations." },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ModelDetailRoute,
});

function ModelDetailRoute() {
  const { code } = Route.useParams();
  return <ModelDetailPage code={code} />;
}
