import type { Plant } from "@/types/plant";

const blueberry = {
  id: "blueberry",
  commonName: "Blueberry",
  scientificName: "Vaccinium spp. (highbush, rabbiteye & half-high hybrids)",
  category: "shrub",
  zones: { min: 3, max: 10 },
  sun: "full-sun",
  soil: "Acidic (pH 4.2-5.5), well-drained, high organic matter",
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
    "A long-lived perennial shrub spanning three cultivar groups bred for different climates — northern highbush, cold-hardy half-high hybrids, and heat-tolerant rabbiteye. Pick the group suited to your zone; all need acidic soil and have frost-sensitive spring blossoms even where the plant itself is winter-hardy.",
  careNotes: [
    "Plant at least two varieties for better cross-pollination and yield.",
    "Open spring blossoms can be damaged by a late frost even though the dormant shrub is winter-hardy — cover during a late cold snap.",
    "Mulch with pine bark or needles to help maintain acidic soil.",
    "Match the cultivar group to your climate: rabbiteye for hot/humid zones 8-10, northern highbush for zones 5-7, half-high hybrids for zones 3-4.",
  ],
  sources: [
    {
      title: "Louisiana Super Plants: Rabbiteye Blueberries",
      publisher: "LSU AgCenter",
      url: "https://www.lsuagcenter.com/articles/page1564414086990",
    },
  ],
  regionalNotes: [
    {
      region: "Gulf South / Humid Subtropical",
      note: "Rabbiteye blueberries (not northern highbush) are the recommended type — acidic soil pH 4.2-5.5, zones 8-10, shallow-rooted so raised beds often help in heavy soils. Plant 2-3 different rabbiteye varieties together (Tifblue, Brightwell, Premier) for cross-pollination and an extended harvest.",
      source: {
        title: "Louisiana Super Plants: Rabbiteye Blueberries",
        publisher: "LSU AgCenter",
        url: "https://www.lsuagcenter.com/articles/page1564414086990",
      },
    },
    {
      region: "Cold Continental (Upper Midwest)",
      note: "Standard highbush is too tender — use \"half-high\" cultivars (Northblue, Northsky, Chippewa, Polaris) bred specifically for cold tolerance and low stature so snow cover protects the buds, hardy to zones 3-7.",
      source: {
        title: "Growing blueberries in the home garden",
        publisher: "University of Minnesota Extension",
        url: "https://extension.umn.edu/fruit/growing-blueberries-home-garden",
      },
    },
    {
      region: "Cool Northeast",
      note: "Northern highbush is the standard type here; soil needs to be acidified to roughly pH 5.0 (ideally ~4.5), typically with sulfur or ammonium-sulfate fertilizer applied at planting and monitored periodically.",
      source: {
        title: "Growing Blueberries Q&A",
        publisher: "Cornell Cooperative Extension",
        url: "https://ccetompkins.org/gardening/home-gardening/publications/growing-blueberries-q-a",
      },
    },
  ],
  varieties: [],
} satisfies Plant;

export default blueberry;
