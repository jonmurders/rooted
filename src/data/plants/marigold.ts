import type { Plant } from "@/types/plant";

const marigold = {
  id: "marigold",
  commonName: "Marigold",
  scientificName: "Tagetes spp.",
  category: "flower",
  zones: { min: 2, max: 11 },
  sun: "full-sun",
  soil: "Average, well-drained soil — tolerates poor soil",
  spacingInches: 10,
  daysToMaturity: { min: 45, max: 60 },
  water: {
    intervalDays: 4,
    drySpellThresholdIn: 1,
    notes: "Fairly drought tolerant once established; avoid overwatering.",
  },
  temperature: {
    frostThresholdF: 32,
    heatStressThresholdF: 95,
  },
  plantingWindows: [
    {
      season: "spring",
      earliestWeeksFromFrost: 0,
      latestWeeksFromFrost: 10,
      method: "direct-sow",
    },
  ],
  description:
    "A tough, heat-loving annual flower often companion-planted to deter pests in vegetable beds.",
  careNotes: [
    "Deadhead spent blooms to keep flowers coming all season.",
    "Very tolerant of heat and drought once established.",
    "Killed outright by the season's first frost.",
  ],
} satisfies Plant;

export default marigold;
