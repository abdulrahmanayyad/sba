import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/global-markets")({
  component: GlobalMarketsLayout,
});

function GlobalMarketsLayout() {
  return <Outlet />;
}

