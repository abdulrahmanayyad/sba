import { createFileRoute } from "@tanstack/react-router";
import { AdminGuard } from "@/components/admin/admin-guard";
import { CrmDashboard } from "@/components/admin/crm-dashboard";

export const Route = createFileRoute("/admin/inquiries")({
  head: () => ({
    meta: [
      { title: "Business Inquiries CRM & Compliance Portal — Sami Bin Ayyad Group" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminInquiriesPage,
});

function AdminInquiriesPage() {
  return (
    <AdminGuard>
      <CrmDashboard />
    </AdminGuard>
  );
}
