import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/global-markets/$sector")({
  component: GlobalMarketsSectorLayout,
});

function GlobalMarketsSectorLayout() {
  return <Outlet />;
}

