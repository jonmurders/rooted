import type { Plant } from "@/types/plant";

const kale = {
  id: "kale",
  commonName: "Kale",
  scientificName: "Brassica oleracea var. acephala",
  category: "vegetable",
  zones: { min: 2, max: 11 },
  sun: "full-sun",
  soil: "Fertile, well-drained soil, pH 6.0-7.5",
  spacingInches: 16,
  daysToMaturity: { min: 50, max: 70 },
  water: {
    intervalDays: 3,
    drySpellThresholdIn: 1,
    notes: "Fairly drought tolerant once established, but even moisture improves leaf quality.",
  },
  temperature: {
    frostThresholdF: 15,
    heatStressThresholdF: 75,
  },
  plantingWindows: [
    {
      season: "spring",
      earliestWeeksFromFrost: -3,
      latestWeeksFromFrost: 4,
      method: "direct-sow",
    },
    {
      season: "fall",
      earliestWeeksFromFrost: -8,
      latestWeeksFromFrost: -6,
      method: "direct-sow",
    },
  ],
  description:
    "One of the most cold-hardy garden vegetables — flavor actually improves after a light frost.",
  careNotes: [
    "A light frost sweetens the leaves; no need to cover unless a hard freeze is expected.",
    "Bitter and prone to pests in sustained summer heat.",
    "Harvest outer leaves and let the center keep producing.",
  ],
} satisfies Plant;

export default kale;
