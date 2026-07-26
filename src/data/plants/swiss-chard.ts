import type { Plant } from "@/types/plant";

const swissChard = {
  id: "swiss-chard",
  commonName: "Swiss Chard",
  scientificName: "Beta vulgaris subsp. cicla",
  category: "vegetable",
  zones: { min: 2, max: 11 },
  sun: "full-sun",
  soil: "Moderately fertile, well-drained soil amended with compost or aged manure; pH 6.0-7.0.",
  spacingInches: 8,
  daysToMaturity: { min: 50, max: 70 },
  water: {
    intervalDays: 7,
    drySpellThresholdIn: 1,
    notes: "Needs consistent moisture — insufficient water slows leaf and stem growth. Mulch conserves soil moisture, especially in hot weather.",
  },
  temperature: {
    frostThresholdF: 20,
    heatStressThresholdF: 80,
  },
  plantingWindows: [
    {
      season: "spring",
      earliestWeeksFromFrost: -4,
      latestWeeksFromFrost: -2,
      method: "direct-sow",
    },
    {
      season: "fall",
      earliestWeeksFromFrost: -7,
      latestWeeksFromFrost: -5,
      method: "direct-sow",
    },
  ],
  description:
    "A cool-season leafy green grown for its glossy, often savoyed leaves and colorful edible stalks. More heat-tolerant than spinach and harvestable nearly year-round in mild climates.",
  careNotes: [
    "Harvest outer leaves continually (cut-and-come-again) rather than the whole plant to prolong the harvest.",
    "Mulch to conserve soil moisture, particularly in hot weather.",
    "A light frost sweetens flavor by reducing bitterness.",
    "Water seedlings lightly and frequently until established; row covers help prevent soil crusting in wet climates.",
  ],
  sources: [
    {
      title: "Growing Swiss Chard in a Home Garden",
      publisher: "University of Maryland Extension",
      url: "https://extension.umd.edu/resource/growing-swiss-chard-home-garden",
    },
    {
      title: "How to Grow Swiss Chard in Your Garden",
      publisher: "Utah State University Extension",
      url: "https://extension.usu.edu/yardandgarden/research/swiss-chard-in-the-garden",
    },
    {
      title: "Swiss Chard",
      publisher: "UF/IFAS Gardening Solutions",
      url: "https://gardeningsolutions.ifas.ufl.edu/plants/edibles/vegetables/swiss-chard/",
    },
  ],
  regionalNotes: [
    {
      region: "Gulf South / Humid Subtropical",
      note: "Grown nearly year-round (October-June as a cool-season crop); planting windows August 15-October 30 (south Louisiana) / August 15-October 15 (north Louisiana); more heat-resistant than spinach.",
      source: {
        title: "Try Swiss chard in your vegetable garden",
        publisher: "LSU AgCenter",
        url: "https://www.lsuagcenter.com/portals/communications/news/news_archive/2013/february/get_it_growing/try-swiss-chard-in-your-vegetable-garden",
      },
    },
    {
      region: "Cold Continental (Upper Midwest)",
      note: "Plant once soil hits 40-50°F (roughly late April-early May); a second planting late June-August gives a fall harvest; use frost cloth for early plantings.",
      source: {
        title: "Planting vegetables in midsummer for fall harvest",
        publisher: "University of Minnesota Extension",
        url: "https://extension.umn.edu/planting-and-growing-guides/planting-vegetables-midsummer-fall-harvest",
      },
    },
    {
      region: "Hot/Arid Southwest",
      note: "In the low desert, plant fall through spring (mid-August-February); aim for 6-8 hrs direct sun (tolerates 4-6 hrs partial shade); harvestable nearly year-round.",
      source: {
        title: "Ten Steps to a Successful Vegetable Garden",
        publisher: "University of Arizona Cooperative Extension",
        url: "https://extension.arizona.edu/publication/ten-steps-successful-vegetable-garden",
      },
    },
    {
      region: "Cool Maritime Pacific NW",
      note: "Germinates at soil temps as low as 40°F; plant late July-September for fall harvest; needs light, frequent watering until established; floating row covers prevent soil crusting.",
      source: {
        title: "Vegetable Gardening in Oregon (EC 871)",
        publisher: "Oregon State University Extension Service",
        url: "https://extension.oregonstate.edu/pub/ec-871-0",
      },
    },
  ],
  varieties: [
    {
      name: "Bright Lights",
      description: "1998 All-America Selections winner; the original multicolor chard, with stems in gold, pink, orange, crimson, purple and white; milder flavor than solid-green types.",
      daysToMaturity: { min: 55, max: 60 },
      starting: "Direct-sow or start indoors, as with standard chard.",
      growing: "Standard chard habit; grown as much for ornamental color as for eating.",
      harvesting: "Harvest outer leaves continuously; colors are most vivid in cool weather.",
      sources: [
        { tier: "seed-supplier", title: "Bright Lights - Swiss Chard Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/swiss-chard/bright-lights-swiss-chard-seed-703D.html" },
        { tier: "blog", title: "9 of the Best Chard Varieties to Grow", publisher: "Gardener's Path", url: "https://gardenerspath.com/plants/vegetables/best-chard-varieties/" },
      ],
    },
    {
      name: "Fordhook Giant",
      description: "The standard green chard: dark-green savoyed leaves, broad white stems, vigorous, heat-resistant, and reportedly never bolts.",
      daysToMaturity: { min: 60, max: 60 },
      starting: "Direct-sow or start indoors.",
      growing: "Vigorous and heat-resistant; a reliable workhorse variety.",
      harvesting: "Cut outer leaves as needed through a long season.",
      sources: [
        { tier: "seed-supplier", title: "Fordhook Giant - Swiss Chard Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/swiss-chard/fordhook-giant-swiss-chard-seed-701.html" },
      ],
    },
    {
      name: "Ruby Red (Rhubarb Chard)",
      description: "Crimson stalks with dark green, savoyed leaves and dark red veins.",
      daysToMaturity: { min: 60, max: 60 },
      starting: "Direct-sow or start indoors.",
      growing: "Grows 20-24 in tall.",
      harvesting: "Harvest outer leaves as needed; stems are as ornamental as they are edible.",
      sources: [
        { tier: "seed-supplier", title: "Ruby Red or Rhubarb Chard Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/swiss-chard/ruby-red-or-rhubarb-chard-swiss-chard-seed-702.html" },
        { tier: "blog", title: "9 of the Best Chard Varieties to Grow", publisher: "Gardener's Path", url: "https://gardenerspath.com/plants/vegetables/best-chard-varieties/" },
      ],
    },
    {
      name: "Lucullus",
      description: "Italian heirloom introduced around 1914; white-stalked with heavily crumpled green leaves and white mid-ribs; non-bolting, productive from spring to first hard freeze.",
      daysToMaturity: { min: 50, max: 60 },
      starting: "Baby leaf harvestable in 25-30 days; direct-sow or transplant.",
      growing: "Non-bolting and highly productive across a long season.",
      harvesting: "Cut leaves continuously; productive until first hard freeze.",
      sources: [
        { tier: "seed-supplier", title: "Chard, Swiss Chard 'Lucullus' Seeds", publisher: "Seedaholic", url: "https://www.seedaholic.com/chard-swiss-chard-lucullus.html" },
        { tier: "seed-supplier", title: "Lucullus, Swiss Chard Seeds", publisher: "Urban Farmer", url: "https://www.ufseeds.com/product/lucullus-swiss-chard-seeds/SCLC.html" },
      ],
    },
    {
      name: "Perpetual Spinach",
      description: "Italian heirloom (\"Bietola a Costa Fine\"); flatter, more pointed leaves and slimmer stems than typical chard; biennial and rarely bolts in its first year — a heat-tolerant, low-maintenance spinach substitute.",
      starting: "Direct-sow; behaves as a biennial rather than annual.",
      growing: "Rarely bolts in year one, unlike true spinach in hot weather.",
      harvesting: "Cut-and-come-again like other chard, used as a spinach substitute.",
      sources: [
        { tier: "seed-supplier", title: "Perpetual Spinach Swiss Chard Seeds", publisher: "Botanical Interests", url: "https://www.botanicalinterests.com/products/perpetual-spinach-swiss-chard-seeds" },
        { tier: "seed-supplier", title: "Perpetual Spinach Swiss Chard Seeds", publisher: "RareSeeds.com (Baker Creek)", url: "https://www.rareseeds.com/swiss-chard-seeds-perpetual-spinach" },
      ],
    },
    {
      name: "Peppermint",
      description: "Distinctive candy-striped white-and-pink petioles with glossy dark green leaves and bright white veins; popular in children's and gourmet gardens.",
      starting: "Direct-sow or start indoors as with standard chard.",
      growing: "Standard chard habit, grown partly for its striking stem pattern.",
      harvesting: "Cut outer leaves as needed.",
      sources: [
        { tier: "blog", title: "Peppermint Swiss Chard Information and Facts", publisher: "Specialty Produce", url: "https://specialtyproduce.com/produce/Peppermint_Swiss_Chard_17323.php" },
        { tier: "seed-supplier", title: "Peppermint - Swiss Chard Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/swiss-chard/peppermint-swiss-chard-seed-3066.html" },
      ],
    },
    {
      name: "Argentata",
      description: "Italian heirloom (\"Bionda a Costa\"); dark green, gently creased leaves with broad whitish-silver, less-fibrous ribs; mild, sweet, sometimes slightly salty flavor; one of the most cold-hardy chard cultivars.",
      starting: "Direct-sow; especially suited to cold-season plantings.",
      growing: "Notably cold-hardy compared to other chard cultivars.",
      harvesting: "Ribs are less fibrous than most chard, good for cooking whole.",
      sources: [
        { tier: "blog", title: "Argentata Swiss Chard Information and Facts", publisher: "Specialty Produce", url: "https://specialtyproduce.com/produce/Argentata_Swiss_Chard_11899.php" },
        { tier: "seed-supplier", title: "Argentata Swiss Chard", publisher: "John Scheepers Kitchen Garden Seeds", url: "https://www.kitchengardenseeds.com/swiss-chard-argentata.html" },
      ],
    },
    {
      name: "Golden (Golden Sunrise)",
      description: "Rare French-origin variety with vibrant golden stems and crinkly emerald leaves; heat-tolerant with a mild, earthy, slightly beet-like flavor.",
      starting: "Direct-sow or start indoors.",
      growing: "Heat-tolerant; harvestable continuously to first frost.",
      harvesting: "Cut outer leaves continuously through the season.",
      sources: [
        { tier: "blog", title: "Golden Swiss Chard Information and Facts", publisher: "Specialty Produce", url: "https://specialtyproduce.com/produce/Golden_Swiss_Chard_4252.php" },
        { tier: "seed-supplier", title: "Golden Sunrise Yellow Swiss Chard", publisher: "John Scheepers Kitchen Garden Seeds", url: "https://www.kitchengardenseeds.com/swiss-chard-golden-sunrise.html" },
      ],
    },
    {
      name: "Neon Glow",
      description: "Selected from multicolored New Zealand heirloom stock; vivid magenta-and-gold stalks against green savoyed leaves; sweeter/milder than ordinary green chard.",
      starting: "Direct-sow or start indoors.",
      growing: "Standard chard habit with especially vivid stem coloring.",
      harvesting: "Cut outer leaves continuously.",
      sources: [
        { tier: "seed-supplier", title: "'Neon Glow' Rainbow Chard", publisher: "Renee's Garden", url: "https://www.reneesgarden.com/products/chard-mixed-neon-glow" },
      ],
    },
    {
      name: "Garden Rainbow",
      description: "Long-standing heirloom rainbow mix; crunchy stalks in red, pink, white, and gold.",
      starting: "Direct-sow or start indoors.",
      growing: "Standard chard habit; grown as a mixed-color planting.",
      harvesting: "Cut outer leaves continuously.",
      sources: [
        { tier: "seed-supplier", title: "'Garden Rainbow' Heirloom Chard", publisher: "Renee's Garden", url: "https://www.reneesgarden.com/products/chard-organic-garden-rainbow" },
      ],
    },
    {
      name: "Silverado",
      description: "Compact plants with heavily savoyed, dark green leaves and bright white stems; very high bolt resistance.",
      daysToMaturity: { min: 25, max: 60 },
      starting: "Baby greens ready in 25-30 days; mature in about 60.",
      growing: "Compact, ~14-16 in tall; strong bolt resistance.",
      harvesting: "Suitable for both baby-leaf and mature harvest.",
      sources: [
        { tier: "seed-supplier", title: "Silverado Swiss Chard Seeds", publisher: "West Coast Seeds", url: "https://www.westcoastseeds.com/products/silverado" },
        { tier: "seed-supplier", title: "Silverado - Swiss Chard Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/swiss-chard/silverado-swiss-chard-seed-5278.html" },
      ],
    },
    {
      name: "Pink Passion",
      description: "Milder flavor with bright pink stalks; more prone to bolting if exposed to cool temperatures early in life.",
      starting: "Avoid exposing young plants to cool temperatures, which can trigger early bolting.",
      growing: "Less bolt-resistant than most named chard cultivars.",
      harvesting: "Cut outer leaves as needed.",
      sources: [
        { tier: "blog", title: "9 of the Best Chard Varieties to Grow", publisher: "Gardener's Path", url: "https://gardenerspath.com/plants/vegetables/best-chard-varieties/" },
      ],
    },
    {
      name: "Celebration",
      description: "Open-pollinated, multicolor stems (red, magenta, orange, pink, yellow, white) with glossy dark green leaves; uniform plants for a bright harvest all summer.",
      starting: "Direct-sow or start indoors.",
      growing: "Uniform, multicolor stem production across summer.",
      harvesting: "Cut outer leaves continuously through summer.",
      sources: [
        { tier: "seed-supplier", title: "Celebration Swiss Chard (Treated Seed)", publisher: "Seedway", url: "https://www.seedway.com/product/celebration-swiss-chard-treated-seed/" },
      ],
    },
    {
      name: "Oriole",
      description: "Heirloom named for the golden oriole bird; golden-orange stems with lustrous, moderately savoyed dark green leaves.",
      daysToMaturity: { min: 60, max: 60 },
      starting: "Direct-sow or start indoors.",
      growing: "Standard chard habit with golden-orange stem color.",
      harvesting: "Cut outer leaves continuously.",
      sources: [
        { tier: "seed-supplier", title: "Oriole - Organic Swiss Chard Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/swiss-chard/oriole-organic-swiss-chard-seed-3122G.html" },
      ],
    },
    {
      name: "Five Color Silverbeet",
      description: "Australian open-pollinated rainbow chard with five distinct stem colors (pink, yellow, orange, red, white), often with deep red-veined leaves.",
      starting: "Direct-sow or start indoors.",
      growing: "Standard chard habit; grown for its distinctive five-color stem mix.",
      harvesting: "Cut outer leaves continuously.",
      sources: [
        { tier: "seed-supplier", title: "Five Color Silverbeet Swiss Chard Seeds", publisher: "Botanical Interests", url: "https://www.botanicalinterests.com/products/five-color-silverbeet-swiss-chard-seeds" },
        { tier: "seed-supplier", title: "Five Color Silverbeet Swiss Seed", publisher: "Territorial Seed", url: "https://territorialseed.com/products/swiss-chard-five-color-silverbeet" },
      ],
    },
    {
      name: "Barese",
      description: "Italian heirloom from the Bari region of Puglia; compact plants, smooth dark green lance-shaped leaves, thick white stems; fast-maturing.",
      daysToMaturity: { min: 25, max: 50 },
      starting: "Baby leaf ready in 25-30 days; full size in 45-50 days.",
      growing: "Compact plants, faster to mature than many chard cultivars.",
      harvesting: "Suitable for both baby-leaf and mature harvest.",
      sources: [
        { tier: "blog", title: "Barese Swiss Chard Information and Facts", publisher: "Specialty Produce", url: "https://specialtyproduce.com/produce/Barese_Swiss_Chard_14856.php" },
      ],
    },
    {
      name: "Verde da Taglio",
      description: "Italian heirloom \"Green Cutting Chard\"; abundant smooth dark green leaves on thin green stems, closer in taste/texture to spinach than most chards; a traditional cut-and-come-again type.",
      starting: "Direct-sow; grown specifically for repeated cut-and-come-again harvest.",
      growing: "Thin green stems, spinach-like leaves.",
      harvesting: "Classic cut-and-come-again harvesting.",
      sources: [
        { tier: "blog", title: "Chard", publisher: "CropNerd", url: "https://cropnerd.com/plants/vegetables/chard" },
      ],
    },
  ],
} satisfies Plant;

export default swissChard;
