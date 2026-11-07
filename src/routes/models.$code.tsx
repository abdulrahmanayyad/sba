import { createFileRoute, notFound } from "@tanstack/react-router";

import { ModelDetailPage } from "@/components/models/model-detail-page";
import { allProducts } from "@/lib/all-products-data";
import { modelsQueryOptions } from "@/lib/models";

export const Route = createFileRoute("/models/$code")({
  loader: async ({ context, params }) => {
    // 1. Check verified production models library
    const inAll = allProducts.some(
      (p) =>
        p.code.toLowerCase() === params.code.toLowerCase() ||
        p.originalCode?.toLowerCase() === params.code.toLowerCase()
    );
    if (inAll) {
      return { code: params.code };
    }

    // 2. Fallback to mock query
    try {
      const models = await context.queryClient.ensureQueryData(modelsQueryOptions);
      if (models.some((model) => model.code.toLowerCase() === params.code.toLowerCase())) {
        return { code: params.code };
      }
    } catch {
      // Continue to notFound
    }

    throw notFound();
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
        { title: `Quote Request for Model ${loaderData.code} — SBA Apparel Manufacturing` },
        { name: "description", content: `Request official B2B manufacturing quotation, tech pack grading, and export FOB/OEM terms for style ${loaderData.code} from Sami Bin Ayyad Group.` },
        { property: "og:title", content: `Model ${loaderData.code} — SBA Manufacturing Quotation` },
        { property: "og:description", content: `Request official custom private-label manufacturing quotation for model ${loaderData.code}.` },
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


