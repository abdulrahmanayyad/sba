import ar from "./ar.json";
import en from "./en.json";

export const languages = ["EN", "AR"] as const;
export type Language = (typeof languages)[number];
export type Messages = typeof en; // Includes shared sector navigation labels.

export function getMessages(language: Language): Messages {
  return language === "AR" ? ar : en;
}

export function isFallbackLanguage(language: Language) {
  return !["EN", "AR"].includes(language);
}

