import type { Plant } from "@/types/plant";

const sunflower = {
  id: "sunflower",
  commonName: "Sunflower",
  scientificName: "Helianthus annuus",
  category: "flower",
  zones: { min: 2, max: 11 },
  sun: "full-sun",
  soil: "Average, well-drained soil",
  spacingInches: 18,
  daysToMaturity: { min: 70, max: 100 },
  water: {
    intervalDays: 5,
    drySpellThresholdIn: 1,
    notes: "Deep-rooted and drought tolerant once established; water more while seedlings establish.",
  },
  temperature: {
    frostThresholdF: 32,
    heatStressThresholdF: 100,
  },
  plantingWindows: [
    {
      season: "spring",
      earliestWeeksFromFrost: 0,
      latestWeeksFromFrost: 8,
      method: "direct-sow",
    },
  ],
  description:
    "A tall, fast-growing, heat-loving annual that thrives in full sun with minimal fuss.",
  careNotes: [
    "Stake tall varieties in windy sites.",
    "Very heat and drought tolerant once roots are established.",
    "Frost kills top growth; seed heads can still be harvested if mature.",
    "Seeds germinate from 42°F but 50°F+ gives a more uniform stand; cotyledon-stage seedlings tolerate down to ~23°F, but that tolerance disappears once true leaves emerge.",
  ],
  sources: [
    {
      title: "Sunflowers always face the sun",
      publisher: "LSU AgCenter",
      url: "https://www.lsuagcenter.com/articles/page1633093893388",
    },
  ],
  regionalNotes: [
    {
      region: "Gulf South / Humid Subtropical",
      note: "'Suncredible Saturn'/'Suncredible Yellow' (LSU Louisiana Super Plant picks) are ever-blooming, branched, heat-tolerant selections that keep flowering all summer without deadheading — bred to handle Gulf South heat and humidity better than single-bloom field types.",
      source: {
        title: "Suncredible Saturn sunflower named summer 2023 Louisiana Super Plant",
        publisher: "LSU AgCenter",
        url: "https://www.lsuagcenter.com/articles/page1689945551975",
      },
    },
    {
      region: "Subtropical Florida",
      note: "Seeded late winter to early spring, blooms mid-spring, then declines quickly once summer heat sets in — a much shorter, earlier-shifted bloom window than the Gulf South's summer-long Super Plant selections.",
      source: {
        title: "Sunflowers",
        publisher: "UF/IFAS Gardening Solutions",
        url: "https://gardeningsolutions.ifas.ufl.edu/plants/ornamentals/sunflowers/",
      },
    },
    {
      region: "Cool Maritime Pacific NW",
      note: "Plant only after last frost; needs deep watering 1-2 times a week, tapering off after flowering, and a balanced fertilizer added after the first month of growth.",
      source: {
        title: "Grow your own sunflowers (EM 9866)",
        publisher: "Oregon State University Extension",
        url: "https://extension.oregonstate.edu/catalog/em-9866-grow-your-own-sunflowers",
      },
    },
  ],
} satisfies Plant;

export default sunflower;
