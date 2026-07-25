import type { Plant } from "@/types/plant";

const blueberry = {
  id: "blueberry",
  commonName: "Blueberry",
  scientificName: "Vaccinium corymbosum",
  category: "shrub",
  zones: { min: 3, max: 7 },
  sun: "full-sun",
  soil: "Acidic (pH 4.5-5.5), well-drained, high organic matter",
  spacingInches: 60,
  daysToMaturity: { min: 730, max: 1095 },
  water: {
    intervalDays: 3,
    drySpellThresholdIn: 1,
    notes: "Shallow roots need consistent moisture; mulch heavily to retain it.",
  },
  temperature: {
    frostThresholdF: 28,
    heatStressThresholdF: 90,
  },
  plantingWindows: [
    {
      season: "spring",
      earliestWeeksFromFrost: -2,
      latestWeeksFromFrost: 4,
      method: "transplant",
    },
  ],
  description:
    "A long-lived perennial shrub that is fully winter-hardy in its zone range but has frost-sensitive spring blossoms.",
  careNotes: [
    "Plant at least two varieties for better cross-pollination and yield.",
    "Open spring blossoms can be damaged by a late frost even though the dormant shrub is winter-hardy — cover during a late cold snap.",
    "Mulch with pine bark or needles to help maintain acidic soil.",
  ],
} satisfies Plant;

export default blueberry;
