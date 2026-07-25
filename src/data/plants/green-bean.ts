import type { Plant } from "@/types/plant";

const greenBean = {
  id: "green-bean",
  commonName: "Green Bean (Bush)",
  scientificName: "Phaseolus vulgaris",
  category: "vegetable",
  zones: { min: 3, max: 10 },
  sun: "full-sun",
  soil: "Well-drained, average fertility — too much nitrogen reduces pods",
  spacingInches: 4,
  daysToMaturity: { min: 50, max: 60 },
  water: {
    intervalDays: 3,
    drySpellThresholdIn: 1,
    notes: "Water at the base; wet foliage encourages fungal disease.",
  },
  temperature: {
    frostThresholdF: 32,
    heatStressThresholdF: 90,
  },
  plantingWindows: [
    {
      season: "spring",
      earliestWeeksFromFrost: 1,
      latestWeeksFromFrost: 8,
      method: "direct-sow",
    },
  ],
  description:
    "A quick, easy warm-season vegetable — direct-sown after frost risk passes.",
  careNotes: [
    "Succession-sow every 2 weeks for a continuous harvest.",
    "Pods toughen quickly once mature — pick every 2-3 days.",
    "Blossom drop is common above 90°F; this usually resolves as temperatures cool.",
  ],
} satisfies Plant;

export default greenBean;
