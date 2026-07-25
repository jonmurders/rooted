import type { Plant } from "@/types/plant";

const rosemary = {
  id: "rosemary",
  commonName: "Rosemary",
  scientificName: "Salvia rosmarinus",
  category: "herb",
  zones: { min: 7, max: 10 },
  sun: "full-sun",
  soil: "Sandy, well-drained, slightly alkaline soil",
  spacingInches: 24,
  daysToMaturity: { min: 80, max: 100 },
  water: {
    intervalDays: 7,
    drySpellThresholdIn: 0.5,
    notes: "Drought tolerant once established — overwatering is the main risk, especially in containers.",
  },
  temperature: {
    frostThresholdF: 10,
    heatStressThresholdF: 100,
  },
  plantingWindows: [
    {
      season: "spring",
      earliestWeeksFromFrost: 2,
      latestWeeksFromFrost: 10,
      method: "transplant",
    },
  ],
  description:
    "A woody, drought-loving Mediterranean herb. Perennial in its zone range; grown in containers and overwintered indoors elsewhere.",
  careNotes: [
    "Let soil dry between waterings — root rot from overwatering is more common than drought stress.",
    "Outside zones 7-10, grow in a pot and bring indoors before the first hard freeze.",
    "Thrives in heat; rarely needs summer intervention.",
    "Water every 3-5 days only while establishing a new plant; cut back sharply once it's rooted in.",
  ],
  sources: [
    {
      title: "A Guide to Growing a School Herb Garden",
      publisher: "LSU AgCenter",
      url: "https://www.lsuagcenter.com/~/media/system/8/4/8/f/848fcac92cdce23acb0ffc9760858d13/pub3424schoolherbgarden.pdf",
    },
  ],
  regionalNotes: [
    {
      region: "Gulf South / Humid Subtropical",
      note: "Grown as a woody evergreen perennial year-round in the ground, easily propagated from cuttings.",
      source: {
        title: "A Guide to Growing a School Herb Garden",
        publisher: "LSU AgCenter",
        url: "https://www.lsuagcenter.com/~/media/system/8/4/8/f/848fcac92cdce23acb0ffc9760858d13/pub3424schoolherbgarden.pdf",
      },
    },
    {
      region: "Hot/Arid Southwest",
      note: "Standard rosemary is hardy to about 10°F if allowed to harden off slowly in fall; the 'Arp' cultivar tolerates down to 5°F. Water every 3-5 days only during establishment, then very little — overwatering causes excessive woodiness.",
      source: {
        title: "Rosemary",
        publisher: "University of Arizona Cooperative Extension",
        url: "https://extension.arizona.edu/sites/default/files/2024-10/Rosemary_0.pdf",
      },
    },
    {
      region: "Cool Maritime Pacific NW",
      note: "Reliably overwinters outdoors in western Oregon in a sunny, south-facing, sharply-drained spot — \"wet feet is death\" for rosemary here, and established plants are notably hardier than young ones.",
      source: {
        title: "Five cold-hardy herbs to grow",
        publisher: "Oregon State University Extension",
        url: "https://extension.oregonstate.edu/gardening/vegetables/five-cold-hardy-herbs-grow-home",
      },
    },
    {
      region: "Cold Continental (Upper Midwest)",
      note: "Winters are too cold for rosemary to survive outdoors — grow it in an unglazed clay pot and bring it indoors for winter rather than treating it as a garden perennial.",
      source: {
        title: "Growing herbs in home gardens",
        publisher: "University of Minnesota Extension",
        url: "https://extension.umn.edu/yard-and-garden/growing-herbs",
      },
    },
  ],
  varieties: [],
} satisfies Plant;

export default rosemary;
