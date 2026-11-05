import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/submit-opportunity")({
  beforeLoad: () => {
    throw redirect({ to: "/contact/opportunities" });
  },
  component: () => null,
});

