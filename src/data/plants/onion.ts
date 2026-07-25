import type { Plant } from "@/types/plant";

const onion = {
  id: "onion",
  commonName: "Onion",
  scientificName: "Allium cepa",
  category: "vegetable",
  zones: { min: 3, max: 10 },
  sun: "full-sun",
  soil: "Loose, fertile, well-drained soil",
  spacingInches: 5,
  daysToMaturity: { min: 90, max: 120 },
  water: {
    intervalDays: 4,
    drySpellThresholdIn: 1,
    notes: "Consistent moisture during bulbing; reduce watering as tops begin to yellow and fall over.",
  },
  temperature: {
    frostThresholdF: 20,
    heatStressThresholdF: 85,
  },
  plantingWindows: [
    {
      season: "spring",
      earliestWeeksFromFrost: -4,
      latestWeeksFromFrost: 2,
      method: "transplant",
    },
  ],
  description:
    "A long-season crop grown from sets or transplants; bulbing is triggered by day length, not just temperature.",
  careNotes: [
    "Choose short/long-day varieties matching your latitude for proper bulbing.",
    "Stop watering once tops flop over — this signals bulbs are maturing.",
    "Tolerates light frost well as a young plant.",
  ],
} satisfies Plant;

export default onion;
