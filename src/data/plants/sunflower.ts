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
  varieties: [
    {
      name: "Mammoth (Grey Stripe)",
      description: "Classic heirloom giant single-stem sunflower grown for its huge striped edible seeds; one of the oldest and most recognizable garden sunflowers.",
      daysToMaturity: { min: 80, max: 100 },
      starting: "Direct sow after last frost with wide 2-3ft spacing; single massive stalk needs room and often staking in wind.",
      growing: "Non-branching single stem, 9-12ft tall; heads average 11-14in across.",
      harvesting: "Grown primarily for edible seed — harvest when the back of the head turns yellow-brown and seeds are plump and loose.",
      sources: [
        { tier: "seed-supplier", title: "Mammoth Sunflower Seeds", publisher: "Burpee", url: "https://www.burpee.com/sunflower-mammoth-prod000397.html" },
        { tier: "seed-supplier", title: "Mammoth Sunflower", publisher: "Southern Exposure Seed Exchange", url: "https://www.southernexposure.com/products/mammoth-sunflower/" },
      ],
    },
    {
      name: "Russian Giant",
      description: "Heirloom giant single-stem type similar to Mammoth, bred for very large flower heads and abundant seed for eating or roasting.",
      daysToMaturity: { min: 80, max: 95 },
      starting: "Direct sow, needs full sun and deep, loose soil for the taproot supporting its height.",
      growing: "10-12ft tall single stalk; heads up to 18in diameter.",
      harvesting: "Head fully dries on the plant roughly 30-45 days after flowering; large seed size makes it a favorite for seed harvest.",
      sources: [
        { tier: "seed-supplier", title: "Russian Giant Sunflower Seeds (95 Days)", publisher: "T&T Seeds", url: "https://ttseeds.com/products/sunflowerrussiangiant95days" },
      ],
    },
    {
      name: "American Giant",
      description: "Burpee F1 hybrid giant sunflower, one of the tallest garden varieties, bred for hybrid vigor and a dramatic single huge head.",
      starting: "Direct sow after frost danger passes; F1 seed, not saveable true-to-type.",
      growing: "Reaches up to 14ft; heads up to 1ft wide.",
      harvesting: "Large single head, typically grown for display/seed rather than cutting.",
      sources: [
        { tier: "seed-supplier", title: "American Giants Sunflower Seeds", publisher: "Burpee", url: "https://www.burpee.com/sunflower-american-giants-hybrid-prod000380.html" },
      ],
    },
    {
      name: "ProCut Series",
      description: "Industry-standard pollen-free, single-stem (non-branching) cut-flower series available in many colors (Gold, Orange, Plum, Red, White Lite, etc.) — the commercial-grower benchmark for cut sunflowers.",
      daysToMaturity: { min: 50, max: 65 },
      starting: "Densely spaced (4-6in), succession-planted every 1-2 weeks for continuous bloom supply; not pinched, since each plant yields one usable stem.",
      growing: "Non-branching single stem bred for uniform height for bunching; pollenless so it won't shed pollen indoors or stain fabric.",
      harvesting: "Cut when petals are just beginning to unfurl (~25% open) for maximum vase life.",
      sources: [
        { tier: "seed-supplier", title: "ProCut Series Sunflower Seeds", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/flowers/sunflowers/procut-series/" },
        { tier: "blog", title: "13 ProCut Sunflower Varieties to Plant From Seed in April", publisher: "Epic Gardening", url: "https://www.epicgardening.com/procut-sunflower-varieties/" },
      ],
    },
    {
      name: "Sunrich Series",
      description: "Pollen-free single-stem series (Orange, Gold, Lemon Summer, Provence, etc.), a major commercial competitor to ProCut, prized for fast, uniform bloom.",
      daysToMaturity: { min: 48, max: 70 },
      starting: "Same succession single-stem planting approach as ProCut for continuous market-style harvest.",
      growing: "Non-branching, pollen-free, uniform stem height for bunching; fastest-blooming named sunflower group researched.",
      harvesting: "Harvest at bud/early-petal stage; pollen-free trait extends vase life for cut arrangements.",
      sources: [
        { tier: "seed-supplier", title: "Sunrich Series Sunflower Seeds", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/flowers/sunflowers/sunrich-series/" },
      ],
    },
    {
      name: "Teddy Bear",
      description: "Dwarf, fully-double \"pom-pom\" sunflower with no visible central disc — shaggy, fluffy blooms popular for containers and kids' gardens.",
      daysToMaturity: { min: 65, max: 80 },
      starting: "Excellent container variety; can be started indoors for earlier bloom.",
      growing: "Compact 2-4ft in open ground (as little as 12in in a 4in pot); minimal pollen shed but still pollinator-friendly.",
      harvesting: "Grown as an ornamental/cut flower for its 3-5in double blooms, not typically for seed harvest.",
      sources: [
        { tier: "seed-supplier", title: "Teddy Bear - Dwarf Sunflower Seeds", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/flowers/sunflowers/dwarf-sunflowers/teddy-bear-sunflower-seed-1437.html" },
        { tier: "blog", title: "How to Grow Teddy Bear Sunflowers", publisher: "Gardener's Path", url: "https://gardenerspath.com/plants/flowers/grow-teddy-bear-sunflowers/" },
      ],
    },
    {
      name: "Sunspot",
      description: "Dwarf single-stem variety bred to put an oversized flower head on a short plant — a compact option for growers who still want a big edible-seed head.",
      daysToMaturity: { min: 55, max: 65 },
      starting: "Direct sow; germinates in ~14 days at 70°F.",
      growing: "Compact 24in (some sources say up to 4-4.5ft), disproportionately large 8-12in head for its size.",
      harvesting: "Large head still yields good edible seed despite the plant's small stature.",
      sources: [
        { tier: "seed-supplier", title: "Sunflower Seed | Sunspot", publisher: "True Leaf Market", url: "https://trueleafmarket.com/products/sunflower-sunspot-flower-seed" },
      ],
    },
    {
      name: "Elf",
      description: "Burpee's shortest sunflower ever bred, an extreme dwarf ideal for window boxes and small pots.",
      daysToMaturity: { min: 60, max: 60 },
      starting: "Ideal for container planting; thrives in hot weather.",
      growing: "Only 14-16in tall — the most compact variety in this survey; drought tolerant.",
      harvesting: "Ornamental scale blooms suited to container display rather than seed production.",
      sources: [
        { tier: "seed-supplier", title: "Grow Elf Sunflowers", publisher: "Burpee", url: "https://www.burpee.com/article11140" },
      ],
    },
    {
      name: "Autumn Beauty",
      description: "Branching heirloom mix in fall tones — gold, bronze, orange, scarlet, and bicolors — producing many blooms per plant over a long season.",
      daysToMaturity: { min: 80, max: 110 },
      starting: "Direct sow; allow room for branching (don't crowd as tightly as single-stem types).",
      growing: "Branching habit, 4-6ft; a single plant can produce up to 20 blooms, many bicolored.",
      harvesting: "Cut continually through a long bloom season rather than a single harvest; 6-8in flowers.",
      sources: [
        { tier: "seed-supplier", title: "Autumn Beauty - Sunflower Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/flowers/sunflowers/tall-sunflowers/autumn-beauty-sunflower-seed-1305.html" },
      ],
    },
    {
      name: "Moulin Rouge",
      description: "Pollen-free branching variety with striking near-black burgundy-red petals fading almost to black near the disc; a favorite dark-color cut-flower type.",
      daysToMaturity: { min: 70, max: 90 },
      starting: "Direct sow with branching spacing; can be pinched to encourage more lateral stems or left unpinched.",
      growing: "Branching, 4-7ft; pollen-free, so no pollen mess indoors.",
      harvesting: "Cut when petals begin to open; pollen-free trait extends vase life for arrangements.",
      sources: [
        { tier: "seed-supplier", title: "Moulin Rouge Sunflower", publisher: "Fedco Seeds", url: "https://fedcoseeds.com/seeds/moulin-rouge-sunflower-5521" },
      ],
    },
    {
      name: "Chocolate Cherry",
      description: "Branching variety with dark burgundy petals and a chocolate-brown disc, popular for bouquet work; blooms continuously for about 4 weeks.",
      daysToMaturity: { min: 65, max: 90 },
      starting: "Direct sow with branching spacing.",
      growing: "Height reports vary widely by source (24-36in per one nursery vs. 6-8ft per others) — worth verifying against a single authoritative catalog before treating one figure as definitive.",
      harvesting: "Continuous ~4-week bloom window, good repeat cut-flower producer.",
      sources: [
        { tier: "seed-supplier", title: "Chocolate Cherry Sunflower Seeds", publisher: "Baker Creek Heirloom Seeds", url: "https://www.rareseeds.com/sunflower-chocolate-cherry" },
        { tier: "blog", title: "Chocolate Cherry Sunflower", publisher: "Epic Gardening", url: "https://shop.epicgardening.com/products/chocolate-cherry-sunflower" },
      ],
    },
    {
      name: "Suncredible Saturn",
      description: "Proven Winners annual landscape sunflower — bushy, continuously-blooming (not a single-harvest type), yellow petals with a bronze-orange ring and chocolate-brown center.",
      starting: "Sold as young plants/plugs as much as seed; performs as a season-long bedding/landscape plant.",
      growing: "Compact 24-36in tall, 20-32in wide; heat and drought tolerant, deer resistant; blooms continuously from planting until hard frost rather than maturing to one harvest point.",
      harvesting: "Not grown for seed or cutting — ornamental garden performer; no deadheading needed to keep blooming.",
      sources: [
        { tier: "seed-supplier", title: "Sunflower | Suncredible Saturn", publisher: "Proven Winners", url: "https://www.provenwinners.com/plants/helianthus/suncredible-saturn-sunflower-helianthus" },
        { tier: "university-extension", title: "Perfectly Named for Summer: Suncredible!", publisher: "UT Gardens, University of Tennessee", url: "https://utgardens.tennessee.edu/perfectly-named-for-summer-suncredible/" },
      ],
    },
    {
      name: "Suncredible Yellow",
      description: "Sibling to Suncredible Saturn — same continuous-blooming bushy landscape habit, but bright yellow petals with a plain brown center (no bronze ring).",
      starting: "Same as Saturn — typically grown as a season-long bedding plant.",
      growing: "24-36in tall, 20-32in wide, well-branched bush habit good for screens/back-of-border use; heat/drought tolerant, deer resistant.",
      harvesting: "Ornamental only, continuous bloom until frost, not for seed/cutting.",
      sources: [
        { tier: "seed-supplier", title: "Sunflower | Suncredible Yellow", publisher: "Proven Winners", url: "https://provenwinnersdirect.com/products/suncredible-yellow-sunflower" },
      ],
    },
    {
      name: "Lemon Queen",
      description: "Open-pollinated heirloom branching type with soft lemon-yellow petals and a dark center; the reference variety for The Great Sunflower Project pollinator-counting citizen-science program.",
      daysToMaturity: { min: 70, max: 90 },
      starting: "Direct sow with branching spacing; readily self-sows.",
      growing: "Branching, 6-7ft, strong stems, long flowering period.",
      harvesting: "Multiple 5-8in blooms over an extended season; grown as much for pollinator support as for cutting.",
      sources: [
        { tier: "seed-supplier", title: "'Lemon Queen' The Great Sunflower Project", publisher: "Renee's Garden", url: "https://www.reneesgarden.com/products/lemon-queen" },
      ],
    },
    {
      name: "Italian White",
      description: "Actually a different species (Helianthus debilis, beach sunflower, not H. annuus) with small ivory/cream daisy-like blooms produced in profusion on heavily-branched plants.",
      daysToMaturity: { min: 70, max: 90 },
      starting: "Direct sow; branches heavily so allow more lateral space than single-stem types.",
      growing: "Branching, 4-6ft; different species than the parent plant's generic sunflower data — worth noting this is not H. annuus.",
      harvesting: "Numerous small 4in blooms rather than one large seed head; grown ornamentally, not for seed.",
      sources: [
        { tier: "seed-supplier", title: "Sunflower Seeds - Italian White", publisher: "True Leaf Market", url: "https://trueleafmarket.com/products/sunflower-italian-white-flower-seed" },
      ],
    },
    {
      name: "Ring of Fire",
      description: "All-America Selections winner, a deliberately late-flowering bicolor branching variety — golden petals with a red ring near the center.",
      daysToMaturity: { min: 100, max: 120 },
      starting: "Direct sow; because it's a late bloomer, plan timing so it's not cut short by early fall frost in short-season climates.",
      growing: "Branching, 4-5ft; deliberately later-flowering than most sunflowers, valued for extending bloom season into fall.",
      harvesting: "Grown for its bicolor cut-flower blooms; peak bloom later in the season than earlier-flowering types.",
      sources: [
        { tier: "seed-supplier", title: "Sunflower Ring of Fire", publisher: "All-America Selections", url: "https://all-americaselections.org/product/sunflower-ring-of-fire/" },
      ],
    },
    {
      name: "Velvet Queen",
      description: "Open-pollinated heirloom branching variety with dark burgundy/chestnut/bronze \"velvet\" blooms and dark centers.",
      daysToMaturity: { min: 75, max: 100 },
      starting: "Direct sow with branching spacing.",
      growing: "Branching, 5-7ft.",
      harvesting: "Multiple blooms per plant, good for cut-flower production.",
      sources: [
        { tier: "seed-supplier", title: "Silver Falls Seed Company - Sunflower - Velvet Queen", publisher: "Silver Falls Seed Company", url: "https://silverfallsseed.com/product/sunflower-velvet-queen/" },
      ],
    },
    {
      name: "Red Sun",
      description: "Branching variety with intense crimson/burgundy-bronze-copper blooms; the related \"Van Gogh\" strain (same color palette) grows much taller and is pollen-free.",
      daysToMaturity: { min: 90, max: 110 },
      starting: "Direct sow with branching spacing.",
      growing: "Branching, 5-6ft (Red Sun) — the related Van Gogh strain reaches up to 10ft and is pollen-free.",
      harvesting: "5-6in smoky burgundy/bronze/copper heads for cut-flower use.",
      sources: [
        { tier: "seed-supplier", title: "Red Sun Sunflower Seed", publisher: "Territorial Seed", url: "https://territorialseed.com/products/sunflower-red-sun" },
      ],
    },
    {
      name: "Music Box",
      description: "AAS/Fleuroselect award-winning (1992) true dwarf branching mix — an unusual combination of multi-branching habit at a small scale, in yellows, creams, and mahogany bicolors with brown centers.",
      daysToMaturity: { min: 70, max: 85 },
      starting: "Direct sow; suitable for containers despite being a branching type.",
      growing: "Multi-branching but truly dwarf proportions, 24-36in tall.",
      harvesting: "Numerous 4-5in blooms per plant; ornamental/border use.",
      sources: [
        { tier: "seed-supplier", title: "Music Box Sunflower Seeds", publisher: "Baker Creek Heirloom Seeds", url: "https://www.rareseeds.com/sunflower-music-box" },
      ],
    },
    {
      name: "Big Smile",
      description: "Open-pollinated heirloom mini-dwarf, technically single-stem but naturally well-branching; the fastest-maturing dwarf researched.",
      daysToMaturity: { min: 50, max: 60 },
      starting: "Good container variety; germinates and blooms quickly, suitable for succession planting.",
      growing: "12-24in in the garden, smaller (10-15in) in containers.",
      harvesting: "5-8in golden blooms with dark centers on very compact plants — earliest of the dwarfs in this set to bloom.",
      sources: [
        { tier: "seed-supplier", title: "Big Smile - Dwarf Sunflower Seeds", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/flowers/sunflowers/dwarf-sunflowers/big-smile-sunflower-seed-1312.html" },
      ],
    },
  ],
} satisfies Plant;

export default sunflower;
