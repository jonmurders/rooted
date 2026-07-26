import type { Plant } from "@/types/plant";

const brusselsSprouts = {
  id: "brussels-sprouts",
  commonName: "Brussels Sprouts",
  scientificName: "Brassica oleracea var. gemmifera",
  category: "vegetable",
  zones: { min: 2, max: 9 },
  sun: "full-sun",
  soil: "Fertile, well-drained soil high in organic matter; pH 6.2-6.8.",
  spacingInches: 24,
  daysToMaturity: { min: 80, max: 110 },
  water: {
    intervalDays: 7,
    drySpellThresholdIn: 1,
    notes: "Needs consistent moisture (1-1.5 in/week, up to 2 in in hot/dry weather) from transplant through harvest. Not drought-tolerant — moisture stress or fluctuation causes loose, bitter, or split sprouts.",
  },
  temperature: {
    frostThresholdF: 20,
    heatStressThresholdF: 80,
  },
  plantingWindows: [
    {
      season: "spring",
      earliestWeeksFromFrost: -6,
      latestWeeksFromFrost: -4,
      method: "transplant",
    },
    {
      season: "fall",
      earliestWeeksFromFrost: -16,
      latestWeeksFromFrost: -13,
      method: "transplant",
    },
    {
      season: "fall",
      earliestWeeksFromFrost: -12,
      latestWeeksFromFrost: -10,
      method: "direct-sow",
    },
  ],
  description:
    "Brussels sprouts are a slow-growing, long-season cool-weather brassica grown for the small cabbage-like buds that form in leaf axils along a tall central stalk. They are primarily a fall/winter crop, since cool maturation weather is essential for dense, mild-flavored sprouts.",
  careNotes: [
    "Water consistently; drought stress produces loose, bitter sprouts.",
    "\"Top\" the plant (cut the growing tip) 3-4 weeks before final harvest to force uniform sizing.",
    "Harvest from the bottom of the stalk upward as sprouts firm to about 1-1.5 in.",
    "Stake or hill tall plants for wind support; strip yellowing lower leaves as sprouts mature.",
    "Flavor sweetens noticeably after a light frost (28-32°F).",
  ],
  sources: [
    {
      title: "Growing Brussels sprouts in home gardens",
      publisher: "University of Minnesota Extension",
      url: "https://extension.umn.edu/vegetables/growing-brussels-sprouts",
    },
    {
      title: "Growing Brussels Sprouts in a Home Garden",
      publisher: "University of Maryland Extension",
      url: "https://extension.umd.edu/resource/growing-brussels-sprouts-home-garden",
    },
    {
      title: "Brussels Sprouts | Home Vegetable Gardening",
      publisher: "University of Illinois Extension",
      url: "https://extension.illinois.edu/gardening/brussels-sprouts",
    },
  ],
  regionalNotes: [
    {
      region: "Gulf South / Humid Subtropical",
      note: "Plant transplants in late summer (August 15-October 15) for a fall/winter harvest — Louisiana's summer heat rules out a spring crop entirely.",
      source: {
        title: "Cole Crops (Pub. 2310)",
        publisher: "LSU AgCenter",
        url: "https://www.lsuagcenter.com/~/media/system/5/5/6/4/55646c0ef9404ad2073c46b006e13b51/cole%20crops%20rev%204-17%20lsupdf.pdf",
      },
    },
    {
      region: "Hot/Arid Southwest",
      note: "In Arizona's low desert, start seed indoors August-December and set transplants outdoors September 15-January to skip the long hot summer window entirely.",
      source: {
        title: "Crop Profile for Brussels Sprouts in Arizona",
        publisher: "University of Arizona CALS",
        url: "https://cales.arizona.edu/crop/public/docs/azbrusselsprouts.pdf",
      },
    },
    {
      region: "Cold Continental (Upper Midwest)",
      note: "Plant on the early side of the recommended window since a hard freeze can arrive as early as mid-October in zone 4; if a hard freeze threatens, cut whole stalks and hang/stack them upright in a cool garage or basement to keep sprouts fresh.",
      source: {
        title: "A Minnesota guide to garden timing",
        publisher: "University of Minnesota Extension",
        url: "https://extension.umn.edu/yard-and-garden-news/minnesota-guide-garden-timing",
      },
    },
    {
      region: "Cool Maritime Pacific NW",
      note: "West of the Cascades, sprouts can be planted in summer for fall/winter harvest, and some plantings can overwinter for an early spring crop; keep soil pH above 6.8 to manage clubroot.",
      source: {
        title: "Winter vegetable production on small farms and gardens west of the Cascades",
        publisher: "Oregon State University Extension Service",
        url: "https://extension.oregonstate.edu/catalog/pnw-548-winter-vegetable-production-small-farms-gardens-west-cascades",
      },
    },
  ],
  varieties: [
    {
      name: "Long Island Improved",
      description: "The classic 1890s heirloom that established the modern Brussels sprouts type; semi-dwarf, compact plants with closely spaced sprouts.",
      daysToMaturity: { min: 90, max: 100 },
      starting: "Open-pollinated seed, sow 4-6 weeks before transplanting.",
      growing: "Compact 20-24 in stalks, heavy producer (50-100 sprouts/plant).",
      harvesting: "Pick from the bottom up at ~1 in firmness; sweetens after frost.",
      sources: [
        { tier: "seed-supplier", title: "Long Island Improved Brussels Sprouts Seeds", publisher: "Burpee", url: "https://www.burpee.com/brussels-sprouts-long-island-improved-prod001111.html" },
      ],
    },
    {
      name: "Jade Cross",
      description: "Popular mid-20th-century-derived F1 hybrid known for consistent yields and disease resistance.",
      daysToMaturity: { min: 90, max: 100 },
      starting: "F1 hybrid seed, spring or fall.",
      growing: "Vigorous, uniform, widely grown commercially and at home.",
      harvesting: "Large, easy-to-harvest sprouts, pick base-up.",
      sources: [
        { tier: "blog", title: "Jade Cross Brussels Sprouts", publisher: "CropNerd", url: "https://cropnerd.com/plants/vegetables/brussels-sprouts/jade-cross" },
      ],
    },
    {
      name: "Royal Marvel",
      description: "Extra-early hybrid with tight, uniform, wingless dark-green sprouts evenly spaced for easy picking.",
      daysToMaturity: { min: 85, max: 85 },
      starting: "F1 hybrid seed, benefits from an early start.",
      growing: "Compact, productive, resistant to bottom rot and tip burn.",
      harvesting: "Uniform 1 in sprouts ready ~85 days from transplant.",
      sources: [
        { tier: "university-extension", title: "Home Garden Brussels Sprouts", publisher: "UGA Cooperative Extension", url: "https://extension.uga.edu/publications/detail.html?number=C1069&title=home-garden-brussels-sprouts" },
      ],
    },
    {
      name: "Hestia",
      description: "AAS Winner (2015), only the second Brussels sprouts variety ever to win that award; erect plants yield up to 100 sprouts per stem.",
      daysToMaturity: { min: 90, max: 100 },
      starting: "F1 hybrid seed.",
      growing: "Erect 30 in plants, tolerates cool temps well, flavor improves in the 30s°F.",
      harvesting: "Very high per-plant yield, harvest bottom-up.",
      sources: [
        { tier: "seed-supplier", title: "Brussels Sprouts Hestia F1", publisher: "All-America Selections", url: "https://all-americaselections.org/product/brussels-sprouts-hestia/" },
      ],
    },
    {
      name: "Falstaff",
      description: "Ornamental red/purple-stalked variety, one of the first red Brussels sprouts bred to ripen reliably; sprouts keep bluish-purple pigment even cooked.",
      starting: "Seed like standard types.",
      growing: "Purplish-red stalks, leaves, and sprouts; color deepens with a cool finish.",
      harvesting: "Harvest as sprouts firm; nutty sweetness best after cool weather/frost.",
      sources: [
        { tier: "seed-supplier", title: "Falstaff Brussel Sprouts Seed", publisher: "Heirloom Seed Supply", url: "https://www.heirloomseedsupply.com/products/falstaff-brussel-sprouts-seed" },
        { tier: "blog", title: "Falstaff · Brussels Sprouts", publisher: "CropNerd", url: "https://cropnerd.com/plants/vegetables/brussels-sprouts/falstaff" },
      ],
    },
    {
      name: "Diablo",
      description: "Professional-grower variety now popular in home gardens; large, very uniform, dense sprouts with excellent cold handling.",
      daysToMaturity: { min: 110, max: 110 },
      starting: "F1 hybrid seed, needs an early start given slow maturity.",
      growing: "Strong tolerance for white blister and ring spot.",
      harvesting: "Sprouts sweeten with repeated frost — good for harvesting well into winter.",
      sources: [
        { tier: "blog", title: "Diablo · Brussels Sprouts", publisher: "CropNerd", url: "https://cropnerd.com/plants/vegetables/brussels-sprouts/diablo" },
        { tier: "university-extension", title: "Disease-resistant Brussels sprouts varieties", publisher: "Cornell University Vegetable Program", url: "https://www.vegetables.cornell.edu/pest-management/disease-factsheets/disease-resistant-vegetable-varieties/disease-resistant-brussels-sprouts-varieties/" },
      ],
    },
    {
      name: "Silvia",
      description: "High-performance hybrid bred for disease resistance and bolt tolerance; sprouts form densely against the main stalk.",
      starting: "F1 hybrid seed.",
      growing: "High resistance to Fusarium yellows, high bolt tolerance.",
      harvesting: "1-1.5 in blue-green \"orbs\" resembling tiny cabbages.",
      sources: [
        { tier: "seed-supplier", title: "Silvia Brussels Sprouts Seeds", publisher: "Epic Gardening", url: "https://shop.epicgardening.com/products/silvia-brussels-sprouts-seeds" },
      ],
    },
    {
      name: "Nautic",
      description: "Sweet, tender hybrid with extra space between sprouts on the stalk for better airflow and fewer disease issues.",
      daysToMaturity: { min: 110, max: 120 },
      starting: "F1 hybrid seed, late-season type.",
      growing: "Strong disease resistance, especially to powdery mildew.",
      harvesting: "1 in smooth, tightly wrapped sprouts, tender and sweet, good storability.",
      sources: [
        { tier: "seed-supplier", title: "Nautic Brussels Sprouts Seed", publisher: "Territorial Seed Company", url: "https://territorialseed.com/products/brussels-sprout-nautic" },
        { tier: "university-extension", title: "Disease-resistant Brussels sprouts varieties", publisher: "Cornell University Vegetable Program", url: "https://www.vegetables.cornell.edu/pest-management/disease-factsheets/disease-resistant-vegetable-varieties/disease-resistant-brussels-sprouts-varieties/" },
      ],
    },
    {
      name: "Gustus",
      description: "Bred specifically for flavor; one of the sweetest, mildest Brussels sprouts available due to very low glucosinolate levels.",
      starting: "F1 hybrid seed.",
      growing: "Medium-height, good stem strength, smooth round bright-green sprouts.",
      harvesting: "Mild flavor variety, good for those sensitive to typical bitterness.",
      sources: [
        { tier: "seed-supplier", title: "Brussels Sprouts", publisher: "Territorial Seed Company", url: "https://territorialseed.com/collections/brussels-sprouts" },
      ],
    },
    {
      name: "Gladius",
      description: "Early, firm F1 variety with excellent field-holding ability.",
      starting: "F1 hybrid seed.",
      growing: "Blue-green sprouts uniform in size/color, resists lodging.",
      harvesting: "Recommended for early/mid-fall harvest.",
      sources: [
        { tier: "seed-supplier", title: "Gladius - (F1) Brussels Sprouts Seeds", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/brussels-sprouts/gladius-f1-brussels-sprout-seed-4539.html" },
      ],
    },
    {
      name: "Divino",
      description: "Tall, lodging-resistant, late-season F1 type meant for whole-stalk harvest.",
      starting: "F1 hybrid seed.",
      growing: "Firm, uniform, attractive sprouts that hold well on the stalk.",
      harvesting: "Pick after frost through end of December (or through winter in mild climates).",
      sources: [
        { tier: "seed-supplier", title: "Divino - (F1) Brussels Sprouts Seeds", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/brussels-sprouts/divino-f1-brussels-sprout-seed-4566.html" },
      ],
    },
    {
      name: "Doric",
      description: "Mid-to-late, vigorous, low-nitrogen-input F1 variety good for exposed/windy sites; strong upright stems suited to whole-stalk harvest.",
      starting: "F1 hybrid seed.",
      growing: "Good tolerance to white blister and mildew.",
      harvesting: "Tight, round, 1-1.75 in buttons of fine flavor and texture, harvested late in the season.",
      sources: [
        { tier: "seed-supplier", title: "Brussels Sprout 'Doric F1' Organic Seeds", publisher: "Seedaholic", url: "https://www.seedaholic.com/brussels-sprout-doric-organic.html" },
      ],
    },
    {
      name: "Prince Marvel",
      description: "A variety comparable in class to Royal Marvel, Churchill, and Diablo; positioned as a mid-tier commercial/home-garden performer.",
      starting: "Comparable culture to other \"Marvel\"-type hybrids.",
      growing: "Comparable culture to other \"Marvel\"-type hybrids.",
      harvesting: "Standard base-up harvest.",
      sources: [
        { tier: "blog", title: "Brussels Sprouts 'Prince Marvel'", publisher: "Dave's Garden", url: "https://davesgarden.com/guides/pf/go/76646/" },
      ],
    },
    {
      name: "Red Rubine (Rubine)",
      description: "Heirloom open-pollinated variety, likely developed in the Netherlands by the 1940s-50s; deep purple-red sprouts with a rich, nutty-sweet flavor that intensifies with frost.",
      daysToMaturity: { min: 90, max: 90 },
      starting: "Start indoors 6-8 weeks before last frost; transplant 4-6 weeks after last frost, or grow as a fall crop.",
      growing: "Color intensifies in cool weather.",
      harvesting: "Pick as sprouts firm; best flavor/color after frost.",
      sources: [
        { tier: "seed-supplier", title: "Red Rubine Brussels Sprout Seeds", publisher: "Baker Creek Heirloom Seeds", url: "https://www.rareseeds.com/brussels-sprout-red-rubine" },
        { tier: "blog", title: "Rubine · Brussels Sprouts", publisher: "CropNerd", url: "https://cropnerd.com/plants/vegetables/brussels-sprouts/rubine" },
      ],
    },
    {
      name: "Franklin",
      description: "Large, firm, medium-green F1 sprouts (1-1.5 in) with great flavor and uniformity; early maturity and reliable production.",
      starting: "F1 hybrid seed.",
      growing: "Tall plants with less-woody stalks, enabling whole-stem harvest.",
      harvesting: "Uniform, high-quality sprouts, early to mature.",
      sources: [
        { tier: "seed-supplier", title: "Franklin Brussels Sprouts Seed", publisher: "Territorial Seed Company", url: "https://territorialseed.com/products/brussel-sprout-franklin" },
        { tier: "university-extension", title: "Vegetable Cultivar Descriptions for North America - Brussels Sprouts", publisher: "NC State University Cucurbit/Vegetable Breeding Program", url: "https://cucurbitbreeding.wordpress.ncsu.edu/2016/05/24/brussels-sprouts/" },
      ],
    },
    {
      name: "Oliver",
      description: "F1 hybrid bred by Dutch seed company Sluis en Groot; early-maturing type reaching harvest before winter sets in.",
      starting: "F1 hybrid seed.",
      growing: "Medium-to-large, round-oval, dark green buttons with good flavor.",
      harvesting: "Ready before winter sets in given its early maturity.",
      sources: [
        { tier: "blog", title: "Oliver · Brussels Sprouts", publisher: "CropNerd", url: "https://cropnerd.com/plants/vegetables/brussels-sprouts/oliver" },
      ],
    },
    {
      name: "Catskill",
      description: "American heirloom introduced in 1941 by Arthur White of New York; compact 50-60cm plants producing large, firm, dark green buttons that sweeten after frost.",
      starting: "Open-pollinated seed, widely available from seed libraries.",
      growing: "Compact plants, classic heirloom vigor.",
      harvesting: "Sweetens after frost, standard base-up harvest.",
      sources: [
        { tier: "university-extension", title: "Brussels Sprouts 'Catskill'", publisher: "Texas A&M AgriLife Extension / Texas Master Gardener (Henderson County)", url: "https://txmg.org/hendersonmg/plant-library/brussels-sprouts-catskill/" },
        { tier: "seed-supplier", title: "Catskill Brussel Sprout", publisher: "MIgardener", url: "https://migardener.com/products/catskill-brussel-sprout" },
      ],
    },
    {
      name: "Igor",
      description: "Documented as a disorder-resistant cultivar in university trial data, bred with an emphasis on disease/disorder resistance.",
      starting: "F1 hybrid seed.",
      growing: "Bred with an emphasis on disease/disorder resistance.",
      harvesting: "Standard base-up harvest.",
      sources: [
        { tier: "university-extension", title: "Disease-resistant Brussels sprouts varieties", publisher: "Cornell University Vegetable Program", url: "https://www.vegetables.cornell.edu/pest-management/disease-factsheets/disease-resistant-vegetable-varieties/disease-resistant-brussels-sprouts-varieties/" },
        { tier: "seed-supplier", title: "Igor Brussels Sprouts Seed", publisher: "Territorial Seed Company", url: "https://territorialseed.com/products/brussel-sprout-igor" },
      ],
    },
    {
      name: "Dagan",
      description: "Mid-season commercial-style F1 hybrid; tightly wrapped, bright medium-green buttons on tall, lodging-resistant plants.",
      daysToMaturity: { min: 100, max: 100 },
      starting: "F1 hybrid seed.",
      growing: "Tall, lodging-resistant plants.",
      harvesting: "Standard base-up harvest.",
      sources: [
        { tier: "seed-supplier", title: "Brussels Sprouts Seeds - Organic Varieties", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/brussels-sprouts/" },
      ],
    },
    {
      name: "Tasty Nuggets",
      description: "Fast-maturing hybrid producing small, one-inch, button-sized sprouts on compact 2-foot plants; good for containers.",
      daysToMaturity: { min: 78, max: 78 },
      starting: "F1 hybrid seed; compact habit suits containers.",
      growing: "Fastest of common named varieties to mature.",
      harvesting: "Small, one-inch, button-sized sprouts.",
      sources: [
        { tier: "blog", title: "13 Best Brussels Sprouts Varieties to Grow in Your Garden", publisher: "MorningChores", url: "https://morningchores.com/best-brussels-sprouts-varieties/" },
      ],
    },
  ],
} satisfies Plant;

export default brusselsSprouts;
