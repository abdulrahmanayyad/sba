import { createFileRoute } from "@tanstack/react-router";
import { GroupPage } from "@/components/group/group-page";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "سامي عياد" },
      { name: "description", content: "مجموعة سامي عياد — ستة قطاعات، رؤية واحدة: الملابس والمنسوجات، المقاولات، البيئة، البحث العلمي، التعليم، والمنتجات الطبيعية." },
      { property: "og:title", content: "سامي عياد" },
      { property: "og:description", content: "مجموعة سامي عياد — ستة قطاعات، رؤية واحدة: من التصنيع إلى المعرفة." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GroupPage,
});
