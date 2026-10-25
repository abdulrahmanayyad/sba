export const jzraAgeRanges = ["2-5", "3-6", "6-12", "8-14", "14-18"] as const;
export type JzraAge = (typeof jzraAgeRanges)[number];
export type JzraSeason = "summer" | "winter";
export type JzraAudience = "boys" | "girls";

export interface JzraPhoto {
  id: string;
  season: JzraSeason;
  category: "casual" | "dresses";
  audiences: JzraAudience[];
  ages: JzraAge[];
  image: string;
  sample: boolean;
}

export interface JzraFilters {
  season: JzraSeason;
  age: JzraAge | "all";
  audience: JzraAudience | "all";
}

export function filterJzraPhotos(photos: JzraPhoto[], filters: JzraFilters): JzraPhoto[] {
  return photos.filter((photo) =>
    photo.season === filters.season &&
    (filters.age === "all" || photo.ages.includes(filters.age)) &&
    (filters.audience === "all" || photo.audiences.includes(filters.audience)),
  );
}