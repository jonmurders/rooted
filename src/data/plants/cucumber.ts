import type { Plant } from "@/types/plant";

const cucumber = {
  id: "cucumber",
  commonName: "Cucumber",
  scientificName: "Cucumis sativus",
  category: "vegetable",
  zones: { min: 4, max: 11 },
  sun: "full-sun",
  soil: "Rich, well-drained soil, consistent moisture",
  spacingInches: 18,
  daysToMaturity: { min: 50, max: 70 },
  water: {
    intervalDays: 2,
    drySpellThresholdIn: 1.5,
    notes: "Needs steady moisture — irregular watering causes bitter fruit.",
  },
  temperature: {
    frostThresholdF: 32,
    heatStressThresholdF: 95,
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
    "A vigorous warm-season vine that climbs or sprawls and produces heavily with steady water.",
  careNotes: [
    "Trellising saves space and keeps fruit straighter and cleaner.",
    "Pick frequently — oversized cucumbers turn bitter and slow new fruit set.",
    "Inconsistent watering is the top cause of bitter-tasting fruit.",
  ],
  sources: [
    {
      title: "LSU AgCenter Pub. 1981: Cucumbers",
      publisher: "LSU AgCenter",
      url: "https://www.lsuagcenter.com/~/media/system/4/3/b/2/43b2782100371590bb90dee63a449fd9/pub%201981%20cucumberspdf.pdf",
    },
  ],
  regionalNotes: [
    {
      region: "Gulf South / Humid Subtropical",
      note: "Downy mildew is common in moderate-to-warm, wet weather (grayish mold on leaf undersides) because the region's humidity keeps foliage wet. Plant resistant varieties (Dasher II, Poinsett 76, General Lee, Thunder) and give full sun with spacing for airflow so leaves dry quickly.",
      source: {
        title: "Louisiana Plant Pathology: Downy Mildew on Cucurbits",
        publisher: "LSU AgCenter",
        url: "https://www.lsuagcenter.com/portals/communications/publications/publications_catalog/crops_livestock/insect_disease_control/vegetables/louisiana-plant-pathology--downy-mildew-on-cucurbits",
      },
    },
    {
      region: "Cold Continental (Northeast)",
      note: "Downy mildew pressure is tracked regionally and varieties are ranked by resistance under trial: DMR 401 gave 75% control under severe pressure vs. 23-37% for several other common cultivars — variety choice matters more here than in milder climates.",
      source: {
        title: "Evaluation of Cucumber Varieties Resistant to Downy Mildew",
        publisher: "Cornell CALS (LIHREC)",
        url: "https://blogs.cornell.edu/livegpath/research/cucurbit-downy-mildew/",
      },
    },
    {
      region: "Mediterranean / California",
      note: "Powdery mildew, not downy mildew, is the dominant cucurbit disease here — it thrives in warm, dry conditions and doesn't need free water on the leaf to spread, so resistant varieties and good airflow matter even without Gulf South-level humidity.",
      source: {
        title: "Powdery Mildew on Vegetables",
        publisher: "UC Statewide IPM Program",
        url: "https://ipm.ucanr.edu/home-and-landscape/powdery-mildew-on-vegetables/",
      },
    },
  ],
} satisfies Plant;

export default cucumber;
