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
    "Properly hardened-off plants can take freezes down to the low teens without much damage.",
  ],
  sources: [
    {
      title: "Louisiana Super Plants: Redbor Kale",
      publisher: "LSU AgCenter",
      url: "https://www.lsuagcenter.com/articles/page1586187354904",
    },
  ],
  regionalNotes: [
    {
      region: "Gulf South / Humid Subtropical",
      note: "Seed or transplant mid-July through early November, and again late January through early May. Redbor kale (an LSU Louisiana Super Plant pick) is especially cold-tolerant and sweetens further in cool weather.",
      source: {
        title: "Louisiana Super Plants: Redbor Kale",
        publisher: "LSU AgCenter",
        url: "https://www.lsuagcenter.com/articles/page1586187354904",
      },
    },
    {
      region: "Cool Maritime Pacific NW",
      note: "West of the Cascades, kale can be planted in summer for a fall/winter harvest and left standing in the ground to overwinter, yielding an early spring crop as soon as March.",
      source: {
        title: "Winter vegetable production on small farms and gardens west of the Cascades",
        publisher: "Oregon State University Extension",
        url: "https://extension.oregonstate.edu/catalog/pnw-548-winter-vegetable-production-small-farms-gardens-west-cascades",
      },
    },
    {
      region: "Subtropical Florida",
      note: "Unlike everywhere else, kale performs well nearly year-round here (up to ~10 months even in south Florida) — the tradeoff is much higher summer disease and insect pressure requiring active management.",
      source: {
        title: "South Florida Gardening Calendar",
        publisher: "UF/IFAS EDIS",
        url: "https://edis.ifas.ufl.edu/ep452",
      },
    },
  ],
} satisfies Plant;

export default kale;
