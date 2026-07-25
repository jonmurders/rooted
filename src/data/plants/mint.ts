import type { Plant } from "@/types/plant";

const mint = {
  id: "mint",
  commonName: "Mint",
  scientificName: "Mentha spp.",
  category: "herb",
  zones: { min: 3, max: 9 },
  sun: "partial-sun",
  soil: "Moist, rich soil — tolerates a wide range",
  spacingInches: 18,
  daysToMaturity: { min: 60, max: 90 },
  water: {
    intervalDays: 2,
    drySpellThresholdIn: 1,
    notes: "Prefers consistently moist soil; wilts visibly when dry but recovers quickly once watered.",
  },
  temperature: {
    frostThresholdF: 20,
    heatStressThresholdF: 90,
  },
  plantingWindows: [
    {
      season: "spring",
      earliestWeeksFromFrost: -1,
      latestWeeksFromFrost: 10,
      method: "transplant",
    },
  ],
  description:
    "A vigorous, spreading perennial herb — strongly recommended for container growing to prevent it taking over a bed.",
  careNotes: [
    "Grow in a container or sunken barrier — mint spreads aggressively by runners.",
    "Foliage dies back at the frost threshold above, but the root/crown survives far colder winters than that number suggests — expect it back reliably each spring within its zone range.",
    "Cut back hard mid-season to refresh growth and flavor.",
  ],
  sources: [
    {
      title: "Plant Mint This Summer",
      publisher: "LSU AgCenter",
      url: "https://www.lsuagcenter.com/profiles/lfields/articles/page1564587316320",
    },
  ],
  regionalNotes: [
    {
      region: "Gulf South / Humid Subtropical",
      note: "Spearmint, peppermint, and orange mint are all hardy perennials here; in partial shade, mint keeps growing until November/December in north Louisiana since shade buffers it from early frosts. Pot culture is recommended unless garden space is large.",
      source: {
        title: "Plant Mint This Summer",
        publisher: "LSU AgCenter",
        url: "https://www.lsuagcenter.com/profiles/lfields/articles/page1564587316320",
      },
    },
    {
      region: "Cold Continental (Upper Midwest)",
      note: "Mint is quite winter hardy here — a sunken, bottomless bucket or unglazed clay pot left in the ground over winter is the standard way to contain its spread while it persists as a garden perennial.",
      source: {
        title: "Growing herbs in home gardens",
        publisher: "University of Minnesota Extension",
        url: "https://extension.umn.edu/yard-and-garden/growing-herbs",
      },
    },
    {
      region: "Cool Maritime Pacific NW",
      note: "Rust (Puccinia spp.) is a recurring mint disease in the damp maritime Northwest — manage by removing affected stems/leaves rather than relying on fungicide.",
      source: {
        title: "Growing Herbs",
        publisher: "Oregon State University Extension",
        url: "https://extension.oregonstate.edu/sites/extd8/files/documents/12281/growingherbs.pdf",
      },
    },
  ],
  varieties: [],
} satisfies Plant;

export default mint;
