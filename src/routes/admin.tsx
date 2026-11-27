import { createFileRoute, Outlet } from "@tanstack/react-router";
import { AdminAuthProvider } from "@/lib/admin-auth-context";

export const Route = createFileRoute("/admin")({
  component: AdminLayout,
});

function AdminLayout() {
  return (
    <AdminAuthProvider>
      <Outlet />
    </AdminAuthProvider>
  );
}
