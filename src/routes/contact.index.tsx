import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/contact/contact-page";

export const Route = createFileRoute("/contact/")({
  head: () => ({
    meta: [
      { title: "تواصل معنا | Contact Us — Sami Bin Ayyad Group" },
      {
        name: "description",
        content: "تواصل مع مجموعة سامي بن عياد للاستفسارات العامة، والتجارة الدولية، والشراكات الاستثمارية.",
      },
    ],
  }),
  component: ContactPage,
});

