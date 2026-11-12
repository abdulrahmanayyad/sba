import { Link, createFileRoute } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { GlobalMarketsCmsTab } from "@/components/admin/global-markets-cms-tab";
import { useLanguage } from "@/i18n/language-context";

export const Route = createFileRoute("/global-markets/manage")({
  head: () => ({
    meta: [
      { title: "إدارة الدراسات والتحديثات | Global Markets Registry — Sami Bin Ayyad Group" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: GlobalMarketsManageRoute,
});

function GlobalMarketsManageRoute() {
  const { language } = useLanguage();
  const ar = language === "AR";
  return (
    <div className="site-container py-10 space-y-5">
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-bold text-slate-500">
        <Link to="/global-markets" className="hover:text-slate-900 dark:hover:text-white">
          {ar ? "الأسواق العالمية" : "Global Markets"}
        </Link>
        <ChevronRight className="size-3.5 rtl:rotate-180" />
        <span className="text-slate-900 dark:text-white">
          {ar ? "إدارة الدراسات والتحديثات" : "Studies Management"}
        </span>
      </nav>
      <GlobalMarketsCmsTab ar={ar} />
    </div>
  );
}

