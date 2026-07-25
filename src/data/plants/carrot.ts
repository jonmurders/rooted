import type { Plant } from "@/types/plant";

const carrot = {
  id: "carrot",
  commonName: "Carrot",
  scientificName: "Daucus carota subsp. sativus",
  category: "vegetable",
  zones: { min: 3, max: 10 },
  sun: "full-sun",
  soil: "Loose, sandy, stone-free soil for straight roots",
  spacingInches: 3,
  daysToMaturity: { min: 60, max: 80 },
  water: {
    intervalDays: 4,
    drySpellThresholdIn: 1,
    notes: "Consistent moisture prevents splitting; inconsistent watering causes misshapen roots.",
  },
  temperature: {
    frostThresholdF: 20,
    heatStressThresholdF: 85,
  },
  plantingWindows: [
    {
      season: "spring",
      earliestWeeksFromFrost: -3,
      latestWeeksFromFrost: 3,
      method: "direct-sow",
    },
    {
      season: "fall",
      earliestWeeksFromFrost: -12,
      latestWeeksFromFrost: -10,
      method: "direct-sow",
    },
  ],
  description:
    "A cold-hardy root crop that must be direct-sown — carrots do not transplant well.",
  careNotes: [
    "Thin seedlings early to avoid crowded, forked roots.",
    "Cold soil below 45°F slows germination dramatically.",
    "A light frost improves sweetness; roots can overwinter under mulch in mild zones.",
  ],
} satisfies Plant;

export default carrot;
