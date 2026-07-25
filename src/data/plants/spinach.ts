import type { Plant } from "@/types/plant";

const spinach = {
  id: "spinach",
  commonName: "Spinach",
  scientificName: "Spinacia oleracea",
  category: "vegetable",
  zones: { min: 2, max: 9 },
  sun: "partial-sun",
  soil: "Fertile, well-drained soil rich in organic matter",
  spacingInches: 6,
  daysToMaturity: { min: 40, max: 50 },
  water: {
    intervalDays: 2,
    drySpellThresholdIn: 1,
    notes: "Shallow roots need consistent moisture, especially as weather warms.",
  },
  temperature: {
    frostThresholdF: 15,
    heatStressThresholdF: 75,
  },
  plantingWindows: [
    {
      season: "spring",
      earliestWeeksFromFrost: -6,
      latestWeeksFromFrost: -1,
      method: "direct-sow",
    },
    {
      season: "fall",
      earliestWeeksFromFrost: -8,
      latestWeeksFromFrost: -4,
      method: "direct-sow",
    },
  ],
  description:
    "An extremely cold-hardy green best grown in the shoulder seasons; bolts fast once it's hot.",
  careNotes: [
    "Among the most frost-tolerant crops — can overwinter under light cover in many zones.",
    "Bolts rapidly once daytime highs pass the mid-70s.",
    "Harvest outer leaves to extend the picking window.",
  ],
} satisfies Plant;

export default spinach;
