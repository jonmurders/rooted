import type { Plant } from "@/types/plant";

const bellPepper = {
  id: "bell-pepper",
  commonName: "Bell Pepper",
  scientificName: "Capsicum annuum",
  category: "vegetable",
  zones: { min: 4, max: 11 },
  sun: "full-sun",
  soil: "Fertile, well-drained loam, pH 6.0-6.8",
  spacingInches: 18,
  daysToMaturity: { min: 60, max: 90 },
  water: {
    intervalDays: 3,
    drySpellThresholdIn: 1,
    notes: "Even moisture prevents blossom-end rot; avoid letting soil dry out completely between waterings.",
  },
  temperature: {
    frostThresholdF: 32,
    heatStressThresholdF: 90,
  },
  plantingWindows: [
    {
      season: "spring",
      earliestWeeksFromFrost: 2,
      latestWeeksFromFrost: 6,
      method: "transplant",
    },
  ],
  description:
    "A slow-to-start warm-season crop best started indoors and transplanted once soil has warmed.",
  careNotes: [
    "Soil below 60°F stalls growth — wait for it to warm before transplanting.",
    "Provide light stalking once fruit gets heavy.",
    "Extreme heat can cause blossom drop; afternoon shade helps in hot climates.",
  ],
} satisfies Plant;

export default bellPepper;
