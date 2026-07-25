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
  daysToMaturity: { min: 45, max: 65 },
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
    "Look for seed labeled resistant to bean common mosaic virus (BCMV) and rust where those are a known regional problem.",
  ],
  sources: [
    {
      title: "Home Garden Green Beans",
      publisher: "LSU AgCenter",
      url: "https://www.lsuagcenter.com/~/media/system/5/5/6/4/55646c0ef9404ad2073c46b006e13b51/green%20beans%20-%20ugapdf.pdf",
    },
  ],
  regionalNotes: [
    {
      region: "Gulf South / Humid Subtropical",
      note: "Direct-sow mid-March through mid-May for spring, then again mid-to-late August for a fall crop (fall quality is usually excellent). Recommended varieties: Contender, Strike, Provider, Bush Blue Lake 274.",
      source: {
        title: "Home Garden Green Beans",
        publisher: "LSU AgCenter",
        url: "https://www.lsuagcenter.com/~/media/system/5/5/6/4/55646c0ef9404ad2073c46b006e13b51/green%20beans%20-%20ugapdf.pdf",
      },
    },
    {
      region: "Hot/Arid Southwest",
      note: "Bush beans stall in true desert summer heat and resume producing once daytime temps drop back under 95°F. Contender is a strong performer here, and its fast 50-55 day maturity lets a crop finish before the first fall frost.",
      source: {
        title: "Vegetable Planting Calendar for Maricopa County",
        publisher: "University of Arizona Cooperative Extension",
        url: "https://extension.arizona.edu/sites/default/files/2024-08/az1005-2018.pdf",
      },
    },
    {
      region: "Cold Continental (Upper Midwest)",
      note: "Even a light frost (30-32°F) kills bean plants outright, so spring planting must wait until frost danger has fully passed.",
      source: {
        title: "Growing beans in home gardens",
        publisher: "University of Minnesota Extension",
        url: "https://extension.umn.edu/vegetables/growing-beans",
      },
    },
  ],
} satisfies Plant;

export default greenBean;
