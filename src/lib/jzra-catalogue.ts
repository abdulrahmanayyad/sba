export const jzraAgeRanges = ["2-5", "3-6", "6-12", "8-14", "14-18"] as const;
export type JzraAge = (typeof jzraAgeRanges)[number];
export type JzraSeason = "summer" | "winter";
export type JzraAudience = "boys" | "girls";

export interface JzraPhoto {
  id: string;
  season: JzraSeason;
  category: "casual" | "dresses";
  subcategory?: string;
  audiences: JzraAudience[];
  ages: JzraAge[];
  image: string;
  sample: boolean;
}

export interface JzraFilters {
  season: JzraSeason;
  age: JzraAge | "all";
  audience: JzraAudience | "all";
  subcategory?: string | "all";
}

export function filterJzraPhotos(photos: JzraPhoto[], filters: JzraFilters): JzraPhoto[] {
  return photos.filter((photo) =>
    photo.season === filters.season &&
    (filters.age === "all" || photo.ages.includes(filters.age)) &&
    (filters.audience === "all" || photo.audiences.includes(filters.audience)) &&
    (!filters.subcategory || filters.subcategory === "all" || photo.subcategory === filters.subcategory),
  );
}

function makePhotos(
  season: JzraSeason,
  category: "casual" | "dresses",
  subcategory: string | undefined,
  audiences: JzraAudience[],
  ages: JzraAge[],
  basePath: string,
  filenames: string[],
): JzraPhoto[] {
  return filenames.map((filename, i) => ({
    id: `${season}-${category}-${subcategory ?? "flat"}-${ages.join(",")}-${audiences.join(",")}-${i}`,
    season,
    category,
    ...(subcategory !== undefined ? { subcategory } : {}),
    audiences,
    ages,
    image: `${basePath}/${filename}`,
    sample: false,
  } as JzraPhoto));
}

// Summer Casual 2-5
const summerCasual2_5: JzraPhoto[] = makePhotos(
  "summer", "casual", undefined, ["boys", "girls"], ["2-5"],
  "/Summer/Casual/2-5",
  ["Summer - Casual - (2-5) (1).jpg", "Summer - Casual - (2-5) (2).jpg", "Summer - Casual - (2-5) (3).jpg", "Summer - Casual - (2-5) (4).jpg"],
);

// Summer Casual 3-6 Cotton Sets
const summerCasual3_6CottonSets: JzraPhoto[] = makePhotos(
  "summer", "casual", "Cotton Sets", ["boys", "girls"], ["3-6"],
  "/Summer/Casual/3-6/Cotton Sets",
  Array.from({ length: 51 }, (_, i) => { const n = i + 1; return `Summer - Casual - (3-6) (${n}).${n === 1 ? "jpeg" : "jpg"}`; }),
);

// Summer Casual 3-6 Jeans Sets
const summerCasual3_6JeansSets: JzraPhoto[] = makePhotos(
  "summer", "casual", "Jeans Sets", ["boys", "girls"], ["3-6"],
  "/Summer/Casual/3-6/Jeans Sets",
  Array.from({ length: 15 }, (_, i) => { const n = i + 1; return `Summer - Casual - (3-6)  (${n}).${n <= 2 ? "jpeg" : "jpg"}`; }),
);

// Summer Casual 3-6 Jumpsuite
const summerCasual3_6Jumpsuite: JzraPhoto[] = makePhotos(
  "summer", "casual", "Jumpsuite", ["boys", "girls"], ["3-6"],
  "/Summer/Casual/3-6/Jumpsuite",
  Array.from({ length: 6 }, (_, i) => `Summer - Casual - (3-6) (${i + 1}).jpg`),
);

// Summer Casual 3-6 Long Suites
const summerCasual3_6LongSuites: JzraPhoto[] = makePhotos(
  "summer", "casual", "Long Suites", ["boys", "girls"], ["3-6"],
  "/Summer/Casual/3-6/Long Suites",
  Array.from({ length: 24 }, (_, i) => { const n = i + 1; const jpegNums = [1, 2, 3, 4, 5, 6, 24]; return `Summer - Casual - (3-6) (${n}).${jpegNums.includes(n) ? "jpeg" : "jpg"}`; }),
);

// Summer Casual 3-6 Shirts & Blouses
const summerCasual3_6ShirtsBlouses: JzraPhoto[] = makePhotos(
  "summer", "casual", "Shirts & Blouses", ["boys", "girls"], ["3-6"],
  "/Summer/Casual/3-6/Shirts & Blouses",
  Array.from({ length: 6 }, (_, i) => `Summer - Casual - (3-6) (${i + 1}).jpg`),
);

// Summer Casual 3-6 Short Suites
const summerCasual3_6ShortSuites: JzraPhoto[] = makePhotos(
  "summer", "casual", "Short Suites", ["boys", "girls"], ["3-6"],
  "/Summer/Casual/3-6/Short Suites",
  Array.from({ length: 27 }, (_, i) => { const n = i + 1; const jpegNums = [1, 2, 25, 26, 27]; return `Summer - Casual - (3-6) (${n}).${jpegNums.includes(n) ? "jpeg" : "jpg"}`; }),
);

// Summer Casual 6-12
const summerCasual6_12: JzraPhoto[] = makePhotos(
  "summer", "casual", undefined, ["boys", "girls"], ["6-12"],
  "/Summer/Casual/6-12",
  Array.from({ length: 13 }, (_, i) => `Summer - Casual - (6-12) (${i + 1}).jpeg`),
);

// Summer Casual 8-14 Blouses
const summerCasual8_14Blouses: JzraPhoto[] = makePhotos(
  "summer", "casual", "Blouses", ["boys", "girls"], ["8-14"],
  "/Summer/Casual/8-14/Blouses",
  Array.from({ length: 33 }, (_, i) => `Summer - Casual - (8-14) (${i + 1}).jpg`),
);

// Summer Casual 8-14 Jumpsuite
const summerCasual8_14Jumpsuite: JzraPhoto[] = makePhotos(
  "summer", "casual", "Jumpsuite", ["boys", "girls"], ["8-14"],
  "/Summer/Casual/8-14/Jumpsuite",
  Array.from({ length: 10 }, (_, i) => `Summer - Casual - (8-14) (${i + 1}).jpg`),
);

// Summer Casual 8-14 Suites
const summerCasual8_14Suites: JzraPhoto[] = makePhotos(
  "summer", "casual", "Suites", ["boys", "girls"], ["8-14"],
  "/Summer/Casual/8-14/Suites",
  Array.from({ length: 12 }, (_, i) => { const n = i + 1; return `Summer - Casual - (8-14) (${n}).${n === 1 ? "jpeg" : "jpg"}`; }),
);

// Summer Casual 8-14 T-Shirts
const summerCasual8_14TShirts: JzraPhoto[] = makePhotos(
  "summer", "casual", "T-Shirts", ["boys", "girls"], ["8-14"],
  "/Summer/Casual/8-14/T-Shirts",
  Array.from({ length: 14 }, (_, i) => `Summer - Casual - (8-14) (${i + 1}).jpg`),
);

// Summer Dresses 2-5
const summerDresses2_5: JzraPhoto[] = makePhotos(
  "summer", "dresses", undefined, ["girls"], ["2-5"],
  "/Summer/Dresses/2-5",
  Array.from({ length: 93 }, (_, i) => { const n = i + 1; const jpegNums = [1,2,3,4,5,6,8,9,10,11,12,13,79,80,93]; return `Summer - Dresses - (2-5) (${n}).${jpegNums.includes(n) ? "jpeg" : "jpg"}`; }),
);

// Summer Dresses 3-6
const summerDresses3_6: JzraPhoto[] = makePhotos(
  "summer", "dresses", undefined, ["girls"], ["3-6"],
  "/Summer/Dresses/3-6",
  Array.from({ length: 30 }, (_, i) => { const n = i + 1; const jpegNums = [1, 2, 3, 4]; return `Summer - Dresses - (3-6) (${n}).${jpegNums.includes(n) ? "jpeg" : "jpg"}`; }),
);

// Summer Dresses 6-12
const summerDresses6_12: JzraPhoto[] = makePhotos(
  "summer", "dresses", undefined, ["girls"], ["6-12"],
  "/Summer/Dresses/6-12",
  Array.from({ length: 25 }, (_, i) => { const n = i + 1; return `Summer - Dresses - (6-12) (${n}).${n === 1 ? "jpeg" : "jpg"}`; }),
);

// Summer Dresses 8-14
const summerDresses8_14: JzraPhoto[] = makePhotos(
  "summer", "dresses", undefined, ["girls"], ["8-14"],
  "/Summer/Dresses/8-14",
  Array.from({ length: 25 }, (_, i) => `Summer - Dresses - (8-14) (${i + 1}).jpg`),
);

// Winter Casual Boys 3-6
const winterCasualBoys3_6: JzraPhoto[] = makePhotos(
  "winter", "casual", undefined, ["boys"], ["3-6"],
  "/Winter/Casual/Boys/3-6",
  Array.from({ length: 10 }, (_, i) => `Winter - Casual - (3-6) (${i + 1}).jpg`),
);

// Winter Casual Boys 8-14
const winterCasualBoys8_14: JzraPhoto[] = makePhotos(
  "winter", "casual", undefined, ["boys"], ["8-14"],
  "/Winter/Casual/Boys/8-14",
  Array.from({ length: 9 }, (_, i) => { const n = i + 1; return `Winter - Casual - (8-14) (${n}).${n <= 3 ? "jpeg" : "jpg"}`; }),
);

// Winter Casual Girls 3-6
const winterCasualGirls3_6: JzraPhoto[] = makePhotos(
  "winter", "casual", undefined, ["girls"], ["3-6"],
  "/Winter/Casual/Girls/3-6",
  Array.from({ length: 13 }, (_, i) => `Winter - Casual - (3-6) (${i + 1}).jpg`),
);

// Winter Casual Girls 6-12
const winterCasualGirls6_12: JzraPhoto[] = makePhotos(
  "winter", "casual", undefined, ["girls"], ["6-12"],
  "/Winter/Casual/Girls/6-12",
  Array.from({ length: 26 }, (_, i) => `Winter - Casual - (6-12) (${i + 1}).jpg`),
);

// Winter Casual Girls 8-14
const winterCasualGirls8_14: JzraPhoto[] = makePhotos(
  "winter", "casual", undefined, ["girls"], ["8-14"],
  "/Winter/Casual/Girls/8-14",
  Array.from({ length: 39 }, (_, i) => `Winter - Casual - (8-14) (${i + 1}).jpg`),
);

// Winter Dresses 3-6
const winterDresses3_6: JzraPhoto[] = makePhotos(
  "winter", "dresses", undefined, ["girls"], ["3-6"],
  "/Winter/Dresses/3-6",
  Array.from({ length: 27 }, (_, i) => `Winter - Dresses - (3-6) (${i + 1}).jpg`),
);

// Winter Dresses 8-14
const winterDresses8_14: JzraPhoto[] = makePhotos(
  "winter", "dresses", undefined, ["girls"], ["8-14"],
  "/Winter/Dresses/8-14",
  Array.from({ length: 2 }, (_, i) => `Winter - Dresses - (8-14) (${i + 1}).jpg`),
);

export const jzraCatalogue: JzraPhoto[] = [
  ...summerCasual2_5,
  ...summerCasual3_6CottonSets,
  ...summerCasual3_6JeansSets,
  ...summerCasual3_6Jumpsuite,
  ...summerCasual3_6LongSuites,
  ...summerCasual3_6ShirtsBlouses,
  ...summerCasual3_6ShortSuites,
  ...summerCasual6_12,
  ...summerCasual8_14Blouses,
  ...summerCasual8_14Jumpsuite,
  ...summerCasual8_14Suites,
  ...summerCasual8_14TShirts,
  ...summerDresses2_5,
  ...summerDresses3_6,
  ...summerDresses6_12,
  ...summerDresses8_14,
  ...winterCasualBoys3_6,
  ...winterCasualBoys8_14,
  ...winterCasualGirls3_6,
  ...winterCasualGirls6_12,
  ...winterCasualGirls8_14,
  ...winterDresses3_6,
  ...winterDresses8_14,
];