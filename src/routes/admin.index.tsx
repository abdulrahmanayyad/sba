import { createFileRoute } from "@tanstack/react-router";
import { AdminGuard } from "@/components/admin/admin-guard";
import { AdminWorkspaceView } from "@/components/admin/workspace/admin-workspace-view";

export const Route = createFileRoute("/admin/")({
  head: () => ({
    meta: [
      { title: "لوحة الإدارة المؤسسية — مجموعة سامي بن عياد القابضة" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminIndexPage,
});

function AdminIndexPage() {
  return (
    <AdminGuard>
      <AdminWorkspaceView />
    </AdminGuard>
  );
}
