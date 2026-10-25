import { queryOptions } from "@tanstack/react-query";

import { supabase } from "@/integrations/supabase/client";
import type { Database } from "@/integrations/supabase/types";

export type Model = Database["public"]["Tables"]["models"]["Row"];

export const modelsQueryOptions = queryOptions({
  queryKey: ["models"],
  queryFn: async () => {
    const { data, error } = await supabase.from("models").select("*").order("created_at", { ascending: false });
    if (error) throw error;
    return data ?? [];
  },
});

export const facets = ["segment", "category", "fabric", "colour", "season"] as const;
export type Facet = (typeof facets)[number];

export type Chip = {
  id: string;
  kind: "facet" | "keyword";
  facet?: Facet;
  value: string;
  label: string;
};

/** Everyday words shoppers use, mapped to the value they mean in our catalogue. */
const synonyms: Record<string, string> = {
  ladies: "women",
  lady: "women",
  female: "women",
  womens: "women",
  woman: "women",
  mens: "men",
  man: "men",
  male: "men",
  kids: "children",
  kid: "children",
  child: "children",
  junior: "children",
  girls: "children",
  boys: "children",
  navy: "ink navy",
  white: "optical white",
  grey: "stone grey",
  gray: "stone grey",
  black: "black",
  green: "bottle green",
  blue: "sky blue",
  olive: "olive",
  mint: "mint",
  sand: "sand",
  rose: "rose dust",
  chalk: "chalk white",
  sun: "sun orange",
  dress: "dresses",
  dresses: "dresses",
  gown: "dresses",
  shirt: "tops & shirts",
  shirts: "tops & shirts",
  blouse: "tops & shirts",
  blouses: "tops & shirts",
  top: "tops & shirts",
  tops: "tops & shirts",
  hoodie: "sweats",
  hoodies: "sweats",
  sweatshirt: "sweats",
  sweats: "sweats",
  fleece: "sweats",
  pyjama: "sleepwear",
  pyjamas: "sleepwear",
  pajama: "sleepwear",
  sleepwear: "sleepwear",
  trousers: "bottoms",
  pants: "bottoms",
  chino: "bottoms",
  chinos: "bottoms",
  bottoms: "bottoms",
  set: "sets",
  sets: "sets",
  lounge: "loungewear",
  loungewear: "loungewear",
  abaya: "modest fashion",
  abayas: "modest fashion",
  modest: "modest fashion",
  resort: "resort 2026",
  summer: "spring/summer",
  winter: "autumn/winter",
  autumn: "autumn/winter",
  fall: "autumn/winter",
  viscose: "viscose crepe",
  poplin: "cotton poplin",
  nida: "nida crepe",
  modal: "modal jersey",
  pique: "piqué cotton",
  twill: "cotton twill",
  fleece2: "brushed fleece",
  voile: "cotton voile",
  flannel: "cotton flannel",
  jersey: "single jersey cotton",
};

const STOP_WORDS = new Set([
  "for", "and", "the", "with", "in", "of", "a", "an", "to", "or", "our", "we", "need",
  "want", "looking", "please", "some", "any", "model", "models", "produce", "manufacture",
  "make", "quantity", "quantities", "price", "prices", "pieces", "pcs", "moq", "collection",
  "line", "new", "get", "can", "you", "your", "are", "was", "not", "but", "all", "one",
]);

export function normalize(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9&/]+/g, " ")
    .trim();
}

/** Facet vocabulary built from the live catalogue, so smart search only ever matches real data. */
function buildVocabulary(models: Model[]) {
  const vocabulary = new Map<string, { facet: Facet; value: string }>();

  for (const model of models) {
    for (const facet of facets) {
      const value = model[facet];
      if (!value) continue;
      const key = normalize(value);
      if (key && !vocabulary.has(key)) vocabulary.set(key, { facet, value });
    }
  }

  // Register synonyms that resolve to a real catalogue value, e.g. "navy" → colour "Ink Navy".
  for (const [word, target] of Object.entries(synonyms)) {
    const key = normalize(target);
    const entry = vocabulary.get(key);
    if (entry && !vocabulary.has(word)) vocabulary.set(word, entry);
  }

  return vocabulary;
}

/**
 * Smart search: reads category, gender, fabric, colour, season and tags out of free text and
 * turns them into removable chips. Anything left over becomes a keyword chip.
 */
export function parseQuery(raw: string, models: Model[]): Chip[] {
  const text = normalize(raw);
  if (!text) return [];

  const vocabulary = buildVocabulary(models);
  const phrases = [...vocabulary.keys()]
    .filter((phrase) => phrase.length > 2)
    .sort((a, b) => b.split(" ").length - a.split(" ").length || b.length - a.length);

  const chips: Chip[] = [];
  const taken = new Set<string>();
  let rest = ` ${text} `;

  for (const phrase of phrases) {
    const escaped = phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const pattern = new RegExp(`(^|[^a-z0-9])(${escaped})([^a-z0-9]|$)`);
    if (!pattern.test(rest)) continue;
    const entry = vocabulary.get(phrase)!;
    const id = `${entry.facet}:${entry.value}`;
    if (!taken.has(id)) {
      taken.add(id);
      chips.push({ id, kind: "facet", facet: entry.facet, value: entry.value, label: entry.value });
    }
    rest = rest.replace(pattern, " ");
  }

  for (const word of rest.split(" ")) {
    if (!word || word.length < 3 || STOP_WORDS.has(word)) continue;
    const id = `keyword:${word}`;
    if (chips.some((chip) => chip.id === id)) continue;
    chips.push({ id, kind: "keyword", value: word, label: word });
  }

  return chips;
}

/** Keyword fallback: every remaining word becomes a keyword chip, no facet parsing. */
export function keywordChips(raw: string): Chip[] {
  return normalize(raw)
    .split(" ")
    .filter((word) => word.length > 2 && !STOP_WORDS.has(word))
    .map((word) => ({ id: `keyword:${word}`, kind: "keyword" as const, value: word, label: word }));
}

export function applyChips(models: Model[], chips: Chip[]) {
  return models.filter((model) =>
    chips.every((chip) => {
      if (chip.kind === "facet") {
        return normalize(String(model[chip.facet!] ?? "")) === normalize(chip.value);
      }
      const haystack = [
        model.code,
        model.name,
        model.segment,
        model.category,
        model.fabric,
        model.composition,
        model.colour,
        model.season,
        ...(model.tags ?? []),
      ].join(" ").toLowerCase();
      const singular = chip.value.endsWith("s") ? chip.value.slice(0, -1) : chip.value;
      return haystack.includes(chip.value) || (singular !== chip.value && haystack.includes(singular));
    }),
  );
}

export type SortKey = "newest" | "name" | "moq";

export function sortModels(models: Model[], sort: SortKey) {
  const copy = [...models];
  if (sort === "name") return copy.sort((a, b) => a.name.localeCompare(b.name));
  if (sort === "moq") return copy.sort((a, b) => a.moq - b.moq);
  return copy;
}

/** Similar models, ranked by type, fabric, colour and segment; the top match carries the reason label. */
export function similarModels(models: Model[], current: Model, limit = 4) {
  return models
    .filter((model) => model.code !== current.code)
    .map((model) => {
      const score =
        (model.category === current.category ? 4 : 0) +
        (model.fabric === current.fabric ? 3 : 0) +
        (model.colour === current.colour ? 2 : 0) +
        (model.segment === current.segment ? 1 : 0);
      const reason =
        model.fabric === current.fabric
          ? "fabric"
          : model.category === current.category
            ? "category"
            : model.colour === current.colour
              ? "colour"
              : "segment";
      return { model, score, reason };
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score || a.model.name.localeCompare(b.model.name))
    .slice(0, limit);
}
