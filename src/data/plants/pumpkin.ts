import type { Plant } from "@/types/plant";

const pumpkin = {
  id: "pumpkin",
  commonName: "Pumpkin",
  scientificName: "Cucurbita pepo / C. maxima",
  category: "vegetable",
  zones: { min: 3, max: 9 },
  sun: "full-sun",
  soil: "Rich, well-drained soil, heavy feeder",
  spacingInches: 48,
  daysToMaturity: { min: 90, max: 120 },
  water: {
    intervalDays: 3,
    drySpellThresholdIn: 1.5,
    notes: "Deep, infrequent watering encourages strong roots; water at the base to limit mildew.",
  },
  temperature: {
    frostThresholdF: 32,
    heatStressThresholdF: 95,
  },
  plantingWindows: [
    {
      season: "spring",
      earliestWeeksFromFrost: 1,
      latestWeeksFromFrost: 4,
      method: "direct-sow",
    },
  ],
  description:
    "A sprawling, long-season vine — time planting so fruit matures before fall frost, not before.",
  careNotes: [
    "Needs a long, warm season — count backward from your first fall frost to time planting.",
    "Give vines plenty of room or trellis smaller varieties.",
    "A killing frost ends the season abruptly; harvest mature fruit beforehand.",
  ],
} satisfies Plant;

export default pumpkin;
