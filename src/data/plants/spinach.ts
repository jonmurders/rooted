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
    heatStressThresholdF: 72,
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
    "Bolts rapidly once daytime highs pass the low 70s — true spinach prefers a narrow 40-70°F range.",
    "Harvest outer leaves to extend the picking window.",
    "Heat and water stress cause bitterness independent of bolting — keep soil consistently moist as it warms.",
  ],
  sources: [
    {
      title: "Grow Spinach During Winter",
      publisher: "LSU AgCenter",
      url: "https://www.lsuagcenter.com/portals/our_offices/parishes/st%20charles/features/horticulture/growspinachduringwinter",
    },
  ],
  regionalNotes: [
    {
      region: "Gulf South / Humid Subtropical",
      note: "Plant February-March for strong leaf production ahead of summer heat. LSU recommends switching to Malabar spinach — a heat-loving, unrelated species — as the summer stand-in once it gets too hot for true spinach.",
      source: {
        title: "Grow Spinach During Winter",
        publisher: "LSU AgCenter",
        url: "https://www.lsuagcenter.com/portals/our_offices/parishes/st%20charles/features/horticulture/growspinachduringwinter",
      },
    },
    {
      region: "Cold Continental (Upper Midwest)",
      note: "Direct-seed once soil hits 40-50°F (roughly late April-early May) — spinach tolerates cold soil and light frost well.",
      source: {
        title: "Growing spinach and Swiss chard in home gardens",
        publisher: "University of Minnesota Extension",
        url: "https://extension.umn.edu/vegetables/growing-spinach-and-swiss-chard",
      },
    },
    {
      region: "Subtropical Florida",
      note: "True spinach prefers 40-70°F, making it a narrow winter-only crop even in north Florida; like the Gulf South, growers substitute Malabar or New Zealand \"spinach\" through summer.",
      source: {
        title: "Leafy Greens in Hydroponics and Protected Culture for Florida",
        publisher: "UF/IFAS EDIS",
        url: "https://edis.ifas.ufl.edu/hs1279",
      },
    },
  ],
} satisfies Plant;

export default spinach;
