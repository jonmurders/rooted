import type { Plant } from "@/types/plant";

const spinach = {
  id: "spinach",
  commonName: "Spinach",
  scientificName: "Spinacia oleracea",
  category: "vegetable",
  zones: { min: 2, max: 9 },
  sun: "partial-sun",
  soil: "Fertile, well-drained soil rich in organic matter",
  spacingInches: 6,
  daysToMaturity: { min: 40, max: 50 },
  water: {
    intervalDays: 2,
    drySpellThresholdIn: 1,
    notes: "Shallow roots need consistent moisture, especially as weather warms.",
  },
  temperature: {
    frostThresholdF: 15,
    heatStressThresholdF: 72,
  },
  plantingWindows: [
    {
      season: "spring",
      earliestWeeksFromFrost: -6,
      latestWeeksFromFrost: -1,
      method: "direct-sow",
    },
    {
      season: "fall",
      earliestWeeksFromFrost: -8,
      latestWeeksFromFrost: -4,
      method: "direct-sow",
    },
  ],
  description:
    "An extremely cold-hardy green best grown in the shoulder seasons; bolts fast once it's hot.",
  careNotes: [
    "Among the most frost-tolerant crops — can overwinter under light cover in many zones.",
    "Bolts rapidly once daytime highs pass the low 70s — true spinach prefers a narrow 40-70°F range.",
    "Harvest outer leaves to extend the picking window.",
    "Heat and water stress cause bitterness independent of bolting — keep soil consistently moist as it warms.",
  ],
  sources: [
    {
      title: "Grow Spinach During Winter",
      publisher: "LSU AgCenter",
      url: "https://www.lsuagcenter.com/portals/our_offices/parishes/st%20charles/features/horticulture/growspinachduringwinter",
    },
  ],
  regionalNotes: [
    {
      region: "Gulf South / Humid Subtropical",
      note: "Plant February-March for strong leaf production ahead of summer heat. LSU recommends switching to Malabar spinach — a heat-loving, unrelated species — as the summer stand-in once it gets too hot for true spinach.",
      source: {
        title: "Grow Spinach During Winter",
        publisher: "LSU AgCenter",
        url: "https://www.lsuagcenter.com/portals/our_offices/parishes/st%20charles/features/horticulture/growspinachduringwinter",
      },
    },
    {
      region: "Cold Continental (Upper Midwest)",
      note: "Direct-seed once soil hits 40-50°F (roughly late April-early May) — spinach tolerates cold soil and light frost well.",
      source: {
        title: "Growing spinach and Swiss chard in home gardens",
        publisher: "University of Minnesota Extension",
        url: "https://extension.umn.edu/vegetables/growing-spinach-and-swiss-chard",
      },
    },
    {
      region: "Subtropical Florida",
      note: "True spinach prefers 40-70°F, making it a narrow winter-only crop even in north Florida; like the Gulf South, growers substitute Malabar or New Zealand \"spinach\" through summer.",
      source: {
        title: "Leafy Greens in Hydroponics and Protected Culture for Florida",
        publisher: "UF/IFAS EDIS",
        url: "https://edis.ifas.ufl.edu/hs1279",
      },
    },
  ],
  varieties: [
    {
      name: "Bloomsdale Long Standing",
      description: "Classic 1800s savoy heirloom; dark green, heavily crumpled/glossy, thick fleshy leaves; semi-upright, spreading habit; rich nutty flavor.",
      daysToMaturity: { min: 39, max: 48 },
      starting: "Standard direct-sow.",
      growing: "More bolt-resistant in hot weather than many other spinach types — the trait behind the \"Long Standing\" name, an upgrade over generic species bolt tolerance.",
      harvesting: "Thick, crumpled savoy leaves; pick individual leaves or cut the whole plant at peak flavor.",
      sources: [
        { tier: "seed-supplier", title: "Spinach, Bloomsdale Long Standing", publisher: "Burpee", url: "https://www.burpee.com/spinach-bloomsdale-long-standing-prod000894.html" },
        { tier: "university-extension", title: "How to grow Bloomsdale Long Standing spinach", publisher: "University of New Hampshire Extension", url: "https://extension.unh.edu/resource/how-grow-bloomsdale-long-standing-spinach-spinacia-oleracea" },
      ],
    },
    {
      name: "Winter Bloomsdale",
      description: "Cold-hardy heirloom selection bred specifically for fall-sowing and overwintering; dark green, deeply savoyed leaves; slower-growing, more spreading habit than hybrid types.",
      daysToMaturity: { min: 45, max: 60 },
      starting: "Sow for a fall/overwinter crop rather than a spring crop — a different timing than generic spinach windows; suited to cold-frame/hoophouse overwintering.",
      growing: "Rated as one of the most cold-hardy spinach types tested; showed the best spring bounce-back after severe winters in hoophouse trials.",
      harvesting: "Becomes noticeably sweeter after frost exposure — cold exposure directly improves flavor at harvest.",
      sources: [
        { tier: "seed-supplier", title: "Winter Bloomsdale Spinach Seeds", publisher: "Row 7 Seeds", url: "https://www.row7seeds.com/products/winter-bloomsdale-spinach-seeds" },
      ],
    },
    {
      name: "Tyee",
      description: "Semi-savoy hybrid; thick, oval, exceptionally dark leaves; upright habit keeps leaves cleaner (less soil-splash) than sprawling types.",
      daysToMaturity: { min: 37, max: 45 },
      starting: "Standard direct-sow.",
      growing: "Resistant to downy mildew races 1, 2, and 3; one of the most bolt-resistant varieties on the market — a clear upgrade over generic species bolt tolerance, useful for later spring sowings.",
      harvesting: "Upright habit gives cleaner leaves and good field-holding ability before bolting.",
      sources: [
        { tier: "seed-supplier", title: "Spinach Tyee Hybrid", publisher: "Seed Kingdom", url: "https://www.seedkingdom.com/product/spinach-tyee-hybrid/" },
        { tier: "blog", title: "37 of the Best Spinach Cultivars to Grow in Your Garden", publisher: "Gardener's Path", url: "https://gardenerspath.com/plants/vegetables/best-spinach-varieties/" },
      ],
    },
    {
      name: "Melody",
      description: "F1 hybrid; deep green, moderately blistered (semi-savoy) leaves that stay tender longer than most savoy types before toughening; plants grow noticeably larger than average.",
      daysToMaturity: { min: 37, max: 50 },
      starting: "Standard direct-sow.",
      growing: "Good resistance to downy mildew and mosaic virus; slow to bolt.",
      harvesting: "Leaves stay tender past the size where most savoy types toughen up, allowing larger individual leaves to be harvested without losing quality.",
      sources: [
        { tier: "seed-supplier", title: "Spinach Melody Seed Hybrid", publisher: "Seed Barn", url: "https://seedbarn.com/products/spinach-melody-seed-hybrid-1-packet" },
      ],
    },
    {
      name: "Space",
      description: "Smooth-to-slightly-savoyed, medium-green leaf hybrid; upright habit for clean leaves; bred as a reliable all-season performer.",
      daysToMaturity: { min: 37, max: 51 },
      starting: "Standard direct-sow; suited to succession planting across seasons.",
      growing: "Downy mildew resistance to races 1-3, 5, 6 (broader in some organic seed lots); some resistance to Cercospora leaf spot — one of the broadest disease packages found among varieties researched.",
      harvesting: "Can be cut at baby-leaf stage (37 days) for salad mix, or grown to full size (51 days) for bunching — a dual-purpose harvest timing beyond generic guidance.",
      sources: [
        { tier: "seed-supplier", title: "Space - (F1) Spinach Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/spinach/smooth-leaf-spinach/space-f1-spinach-seed-644.html" },
      ],
    },
    {
      name: "Corvair",
      description: "Smooth, oval, medium-to-dark green leaf hybrid, upright for easy hand or machine harvest; faster-growing and crisper than Renegade, though less bolt-resistant than Renegade.",
      daysToMaturity: { min: 40, max: 40 },
      starting: "Standard direct-sow; widely adapted for spring or fall.",
      growing: "Exceptional downy mildew resistance (races 1-11, with some sources citing broader coverage) — among the broadest resistance packages identified in this research.",
      harvesting: "Crisper texture than Renegade at harvest; upright leaves stay cleaner for hand-harvest.",
      sources: [
        { tier: "seed-supplier", title: "Variety Spotlight - Organic Spinach!", publisher: "High Mowing Organic Seeds", url: "https://www.highmowingseeds.com/blog/variety-spotlight-organic-spinach-3/" },
        { tier: "university-extension", title: "Disease-resistant spinach varieties", publisher: "Cornell Vegetables (Cornell University)", url: "https://www.vegetables.cornell.edu/pest-management/disease-factsheets/disease-resistant-vegetable-varieties/disease-resistant-spinach-varieties/" },
      ],
    },
    {
      name: "Renegade",
      description: "Smooth, oval, dark-green hybrid, round-leafed, compact heads 8-10in tall; leaves are never brittle or prone to cracking.",
      daysToMaturity: { min: 40, max: 43 },
      starting: "Standard direct-sow; well suited to winter high-tunnel production per suppliers.",
      growing: "Bred specifically for bolt resistance — a clear upgrade over generic species tolerance; resistant to downy mildew races 1-7 and to cucumber mosaic virus.",
      harvesting: "Leaves resist cracking/breaking during harvest and washing, valued for salad-mix processing.",
      sources: [
        { tier: "seed-supplier", title: "Renegade F1 Coated Organic Spinach Seeds", publisher: "West Coast Seeds", url: "https://www.westcoastseeds.com/products/renegade-organic" },
      ],
    },
    {
      name: "Baboon (RZ)",
      description: "Modern hybrid bred primarily for very broad multi-disease resistance rather than a distinctive leaf type. Growing/harvesting specifics beyond disease resistance weren't found in sources reviewed.",
      starting: "No variety-specific note found in sources reviewed.",
      growing: "Resistant to anthracnose, Cladosporium leaf spot, downy mildew (races 1-17 — the broadest downy mildew package identified across all varieties researched), fusarium, stemphylium, and white rust.",
      harvesting: "No variety-specific note found beyond generic guidance.",
      sources: [
        { tier: "university-extension", title: "Disease-resistant spinach varieties", publisher: "Cornell Vegetables (Cornell University)", url: "https://www.vegetables.cornell.edu/pest-management/disease-factsheets/disease-resistant-vegetable-varieties/disease-resistant-spinach-varieties/" },
      ],
    },
    {
      name: "Tasman",
      description: "Hybrid bred for downy mildew resistance, used by Cornell as a reference example of how resistance varies race-by-race between cultivars.",
      starting: "No variety-specific note found in sources reviewed.",
      growing: "Resistant to downy mildew races 1-12 and 14-16, but explicitly not resistant to races 13 or 17 — a reminder that \"downy mildew resistant\" labels are race-specific and can be defeated by newer strains, not an absolute guarantee.",
      harvesting: "No variety-specific note found.",
      sources: [
        { tier: "university-extension", title: "Disease-resistant spinach varieties", publisher: "Cornell Vegetables (Cornell University)", url: "https://www.vegetables.cornell.edu/pest-management/disease-factsheets/disease-resistant-vegetable-varieties/disease-resistant-spinach-varieties/" },
      ],
    },
  ],
} satisfies Plant;

export default spinach;
