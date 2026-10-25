import { getMessages } from "@/i18n";
import type { SectorSlug } from "./sector-data";

export const sectionId = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export function getSectorNavigation(slug: SectorSlug, ar: boolean) {
  const messages = getMessages(ar ? "AR" : "EN");
  const copy = messages.sectorNav;
  const standardAbout = [
    { label: copy.whoWeAre, title: "Who We Are" },
    { label: copy.whatWeDo, title: "What We Do" },
    { label: copy.whyUs, title: slug === "construction" ? "Quality & Execution" : "Why Us" },
  ];
  const configurations = {
    construction: { about: standardAbout, links: [
      { label: copy.sectors, title: "Sectors We Serve" },
      { label: copy.services, title: "What We Offer" },
      { label: messages.constructionNav.experience, title: "Track Record" },
    ] },
    environmental: { about: standardAbout, links: [
      { label: copy.services, title: "Our Services" },
      { label: copy.products, title: "Our Products" },
      { label: copy.sectors, title: "Sectors We Serve" },
    ] },
    garment: { about: standardAbout, links: [
      { label: copy.services, title: "Our Services" },
      { label: copy.products, title: "Our Products" },
      { label: copy.capabilities, title: "Manufacturing Capabilities" },
    ] },
    food: { about: [
      { label: copy.vision, title: "Commercial Vision" },
      { label: copy.highlights, title: "Division Highlights" },
      { label: copy.cooperation, title: "Cooperation Opportunities" },
    ], links: [{ label: copy.products, title: "Our Products" }] },
  };
  if (!(slug in configurations)) return null;
  return { ...configurations[slug as keyof typeof configurations], label: copy.about, joinUs: slug === "food" ? copy.joinUs : null };
}