import type { Plant } from "@/types/plant";

const broccoli = {
  id: "broccoli",
  commonName: "Broccoli",
  scientificName: "Brassica oleracea var. italica",
  category: "vegetable",
  zones: { min: 2, max: 11 },
  sun: "full-sun",
  soil: "Fertile, well-drained soil, pH 6.0-7.0",
  spacingInches: 18,
  daysToMaturity: { min: 55, max: 80 },
  water: {
    intervalDays: 3,
    drySpellThresholdIn: 1.25,
    notes: "Consistent moisture is critical while heads are forming.",
  },
  temperature: {
    frostThresholdF: 25,
    heatStressThresholdF: 80,
  },
  plantingWindows: [
    {
      season: "spring",
      earliestWeeksFromFrost: -2,
      latestWeeksFromFrost: 2,
      method: "transplant",
    },
    {
      season: "fall",
      earliestWeeksFromFrost: -12,
      latestWeeksFromFrost: -10,
      method: "transplant",
    },
  ],
  description:
    "A cool-season brassica that tolerates light frost well but bolts to flower in sustained heat.",
  careNotes: [
    "Harvest the central head before flower buds open (yellowing means it's past its best).",
    "Side shoots keep producing after the main head is cut.",
    "Heat above 80°F causes small, loose, bitter heads.",
  ],
} satisfies Plant;

export default broccoli;
