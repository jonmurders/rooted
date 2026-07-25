import type { Plant } from "@/types/plant";

const basil = {
  id: "basil",
  commonName: "Basil",
  scientificName: "Ocimum basilicum",
  category: "herb",
  zones: { min: 4, max: 11 },
  sun: "full-sun",
  soil: "Moist, well-drained, fertile soil",
  spacingInches: 12,
  daysToMaturity: { min: 50, max: 75 },
  water: {
    intervalDays: 2,
    drySpellThresholdIn: 1,
    notes: "Keep soil consistently moist; wilts quickly in dry heat.",
  },
  temperature: {
    frostThresholdF: 40,
    heatStressThresholdF: 100,
  },
  plantingWindows: [
    {
      season: "spring",
      earliestWeeksFromFrost: 2,
      latestWeeksFromFrost: 8,
      method: "transplant",
    },
  ],
  description:
    "A fast-growing, heat-loving herb that is damaged by cold well before an actual frost.",
  careNotes: [
    "Pinch flower spikes to keep leaves productive.",
    "Chills below 40°F can blacken leaves even without frost.",
    "Harvest regularly — cutting encourages bushier growth.",
  ],
  sources: [
    {
      title: "Basil is a warm-season herb that loves the heat",
      publisher: "LSU AgCenter",
      url: "https://apps.lsuagcenter.com/news_archive/2014/July/get-it-growing/Basilisawarmseasonherbthatlovestheheat.htm",
    },
  ],
  regionalNotes: [
    {
      region: "Gulf South / Humid Subtropical",
      note: "One of the few herbs that thrives through Louisiana's full summer heat — LSU recommends it specifically as a hot-season planting rather than a shoulder-season one.",
      source: {
        title: "Basil is a warm-season herb that loves the heat",
        publisher: "LSU AgCenter",
        url: "https://apps.lsuagcenter.com/news_archive/2014/July/get-it-growing/Basilisawarmseasonherbthatlovestheheat.htm",
      },
    },
    {
      region: "Hot/Arid Southwest",
      note: "In desert summer heat (100°F+), an eastern exposure with morning sun and afternoon shade works better than all-day full sun; soil here is often alkaline, so amend with compost.",
      source: {
        title: "Growing Herbs in Tucson",
        publisher: "University of Arizona Cooperative Extension",
        url: "https://extension.arizona.edu/publication/growing-herbs-tucson",
      },
    },
    {
      region: "Subtropical Florida",
      note: "Downy mildew, first reported in south Florida in 2007, is now the most devastating basil disease in the humid Southeast — plant resistant cultivars and disease-free seed rather than relying on fungicides alone.",
      source: {
        title: "Florida Plant Disease Management Guide: Sweet Basil",
        publisher: "UF/IFAS EDIS",
        url: "https://edis.ifas.ufl.edu/publication/pp113",
      },
    },
  ],
} satisfies Plant;

export default basil;
