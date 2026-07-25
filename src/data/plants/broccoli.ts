import type { Plant } from "@/types/plant";

const broccoli = {
  id: "broccoli",
  commonName: "Broccoli",
  scientificName: "Brassica oleracea var. italica",
  category: "vegetable",
  zones: { min: 2, max: 11 },
  sun: "full-sun",
  soil: "Fertile, well-drained soil, pH 6.0-7.0",
  spacingInches: 18,
  daysToMaturity: { min: 55, max: 90 },
  water: {
    intervalDays: 3,
    drySpellThresholdIn: 1.25,
    notes: "Consistent moisture is critical while heads are forming.",
  },
  temperature: {
    frostThresholdF: 25,
    heatStressThresholdF: 80,
  },
  plantingWindows: [
    {
      season: "spring",
      earliestWeeksFromFrost: -2,
      latestWeeksFromFrost: 2,
      method: "transplant",
    },
    {
      season: "fall",
      earliestWeeksFromFrost: -12,
      latestWeeksFromFrost: -10,
      method: "transplant",
    },
  ],
  description:
    "A cool-season brassica that tolerates light frost well but bolts to flower in sustained heat.",
  careNotes: [
    "Harvest the central head before flower buds open (yellowing means it's past its best).",
    "Side shoots keep producing after the main head is cut.",
    "Heat above 80°F causes small, loose, bitter heads.",
    "The first month of growth needs to stay cool (50s-60s°F) or the crop turns bitter or fails outright.",
  ],
  sources: [
    {
      title: "Sustainable Gardening for School and Home Gardens: Broccoli & Cauliflower",
      publisher: "LSU AgCenter",
      url: "https://www.lsuagcenter.com/~/media/system/e/7/5/3/e7533093b8e178e510c498d76bba47d4/p3761i_sustgardbroccauli_rh0721pdf.pdf",
    },
  ],
  regionalNotes: [
    {
      region: "Gulf South / Humid Subtropical",
      note: "Transplant-to-harvest runs 75-90 days. Fall (October planting) is the emphasized season; spring planting only after frost danger passes (mid-March south LA, April 1 north LA). Varieties: Packman, Everest, Premium Crop (early); Marathon, Gypsy, Patriot (late).",
      source: {
        title: "Sustainable Gardening for School and Home Gardens: Broccoli & Cauliflower",
        publisher: "LSU AgCenter",
        url: "https://www.lsuagcenter.com/~/media/system/e/7/5/3/e7533093b8e178e510c498d76bba47d4/p3761i_sustgardbroccauli_rh0721pdf.pdf",
      },
    },
    {
      region: "Hot/Arid Southwest",
      note: "Planted September-October specifically to mature through the mild winter for a spring/early-summer harvest — a much longer fall-to-spring window than the Gulf South's spring-only option. Floating row cover helps keep aphids and cabbage loopers off.",
      source: {
        title: "Fall Vegetable Gardening",
        publisher: "University of Arizona Cooperative Extension",
        url: "https://extension.arizona.edu/sites/default/files/attachment/FallVegetableGardening.pdf",
      },
    },
    {
      region: "Cold Continental (Upper Midwest)",
      note: "Direct-seed or transplant in April with succession plantings through spring, plus a mid-July planting for fall harvest. University of Minnesota's own variety trials rank Wolfman, Green Magic, and Eastern Crown highest overall for the region.",
      source: {
        title: "Broccoli trials test which varieties can stand up to disease and heat stress",
        publisher: "University of Minnesota Extension",
        url: "https://extension.umn.edu/yard-and-garden-news/which-varieties-broccoli-can-stand-disease-and-heat-stress",
      },
    },
  ],
  varieties: [],
} satisfies Plant;

export default broccoli;
