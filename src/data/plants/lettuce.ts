import type { Plant } from "@/types/plant";

const lettuce = {
  id: "lettuce",
  commonName: "Lettuce",
  scientificName: "Lactuca sativa",
  category: "vegetable",
  zones: { min: 2, max: 11 },
  sun: "partial-sun",
  soil: "Moist, fertile, well-drained soil",
  spacingInches: 8,
  daysToMaturity: { min: 30, max: 85 },
  water: {
    intervalDays: 2,
    drySpellThresholdIn: 1,
    notes: "Shallow roots dry out fast — keep soil consistently moist.",
  },
  temperature: {
    frostThresholdF: 28,
    heatStressThresholdF: 75,
  },
  plantingWindows: [
    {
      season: "spring",
      earliestWeeksFromFrost: -4,
      latestWeeksFromFrost: 2,
      method: "direct-sow",
    },
    {
      season: "fall",
      earliestWeeksFromFrost: -10,
      latestWeeksFromFrost: -6,
      method: "direct-sow",
    },
  ],
  description:
    "A cool-season leafy green that tolerates light frost well but bolts and turns bitter in heat.",
  careNotes: [
    "Bolts and turns bitter above ~75-80°F — plant for spring/fall, not midsummer.",
    "Light shade in warm weather extends the harvest window.",
    "Harvest outer leaves for a cut-and-come-again crop.",
    "Grows best around 73°F days / 45°F nights; loose-leaf and Bibb types tolerate heat far better than crisphead (iceberg).",
  ],
  sources: [
    {
      title: "Lettuce",
      publisher: "LSU AgCenter",
      url: "https://www.lsuagcenter.com/topics/lawn_garden/home_gardening/vegetables/individual%20crops/lettuce",
    },
    {
      title: "Cultural Tips for Growing Lettuce",
      publisher: "UC Statewide IPM Program (UC ANR)",
      url: "https://ipm.ucanr.edu/home-and-landscape/cultural-tips-for-growing-lettuce/",
    },
  ],
  regionalNotes: [
    {
      region: "Gulf South / Humid Subtropical",
      note: "Plant mid-August through mid-October, and again in January. Crisphead (iceberg) isn't recommended — it can't tolerate heat and takes 60-85 days. Loose-leaf/Bibb types (Esmeralda, Summer Bibb, Harmony, Red Salad Bowl) do much better.",
      source: {
        title: "Lettuce",
        publisher: "LSU AgCenter",
        url: "https://www.lsuagcenter.com/topics/lawn_garden/home_gardening/vegetables/individual%20crops/lettuce",
      },
    },
    {
      region: "Hot/Arid Southwest",
      note: "Grown strictly as a winter crop outdoors below 5,000ft elevation, planted September-October — Arizona is the #2 lettuce-producing state in the US, entirely on that winter schedule.",
      source: {
        title: "Guidelines for Head Lettuce Production in Arizona",
        publisher: "University of Arizona Cooperative Extension",
        url: "https://cales.arizona.edu/crop/vegetables/cropmgt/az1099.html",
      },
    },
    {
      region: "Cold Continental (Upper Midwest)",
      note: "June-August is too hot for lettuce in most of Minnesota — long days plus heat trigger bolting and bitterness, so growers lean on heat-tolerant/bolt-resistant varieties and stick to a spring or cooled-fall planting window.",
      source: {
        title: "Growing lettuce, endive and radicchio in home gardens",
        publisher: "University of Minnesota Extension",
        url: "https://extension.umn.edu/vegetables/growing-lettuce-endive-and-radicchio",
      },
    },
  ],
} satisfies Plant;

export default lettuce;
