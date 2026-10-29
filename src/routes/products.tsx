import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/products")({
  validateSearch: (search: Record<string, unknown>): Record<string, unknown> => search,
  beforeLoad: () => {
    throw redirect({ to: "/models" });
  },
  component: () => null,
});
