import { createFileRoute } from "@tanstack/react-router";
import { AdminLoginView } from "@/components/admin/admin-login-view";

export const Route = createFileRoute("/admin/login")({
  head: () => ({
    meta: [
      { title: "تسجيل دخول لوحة الإدارة — مجموعة سامي بن عياد القابضة" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminLoginView,
});
