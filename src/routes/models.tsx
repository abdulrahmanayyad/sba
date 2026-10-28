import { Outlet, createFileRoute } from "@tanstack/react-router";

import { modelsQueryOptions } from "@/lib/models";

export const Route = createFileRoute("/models")({
  loader: ({ context }) => context.queryClient.ensureQueryData(modelsQueryOptions),
  component: ModelsLayout,
});

function ModelsLayout() {
  return <Outlet />;
}


