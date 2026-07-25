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
  varieties: [
    {
      name: "Packman",
      description: "An early, vigorous hybrid producing large, domed, mildly-flavored heads held above the foliage, plus heavy side-shoot production afterward.",
      daysToMaturity: { min: 50, max: 65 },
      starting: "Standard — no unusual starting requirements versus generic.",
      growing: "One of the earliest-maturing standard hybrids, especially suited to northern/short-season growing.",
      harvesting: "Heads sit above the leaf canopy, making them easy to spot and cut early before beads loosen.",
      sources: [
        { tier: "seed-supplier", title: "Broccoli Imperial (Formerly Packman)", publisher: "Anderson's Seed & Garden", url: "https://andersonseedandgarden.com/products/bulk-packman-broccoli" },
        { tier: "university-extension", title: "Home & Garden Information Center - Broccoli", publisher: "Clemson HGIC", url: "https://hgic.clemson.edu/factsheet/broccoli/" },
      ],
    },
    {
      name: "Premium Crop",
      description: "Widely-adapted hybrid producing one large, very tight central head with mild flavor even in hot climates.",
      daysToMaturity: { min: 65, max: 65 },
      starting: "Standard.",
      growing: "Officially on the recommended list of 12 southern states' Extension services; tolerates heat better than many main-crop types while keeping mild flavor.",
      harvesting: "Single large tight head (up to 12in) is the main crop; moderate side-shoot follow-up.",
      sources: [
        { tier: "seed-supplier", title: "Premium Crop Hybrid Broccoli", publisher: "Gurney's Seed & Nursery", url: "https://www.gurneys.com/products/premium-crop-hybrid" },
      ],
    },
    {
      name: "Green Comet",
      description: "Extra-early hybrid forming a single, large (up to 1lb), tightly-budded dark green dome with buttery, nutty flavor.",
      daysToMaturity: { min: 40, max: 55 },
      starting: "Standard.",
      growing: "Good heat and disease resistance, but produces few or no side shoots after the main head — a one-and-done harvest unlike most other varieties.",
      harvesting: "Cut the single main head; do not expect a meaningful side-shoot follow-up crop.",
      sources: [
        { tier: "university-extension", title: "Green Comet - Vegetable Varieties for Gardeners", publisher: "Cornell Cooperative Extension", url: "https://vegvariety.cce.cornell.edu/main/detail.php?variety_id=4408&filterBy=0" },
      ],
    },
    {
      name: "Marathon",
      description: "Widely-adaptable, medium-late hybrid with a high-domed, small-beaded, blue-green head; an industry-standard \"workhorse\" variety.",
      daysToMaturity: { min: 60, max: 75 },
      starting: "Standard.",
      growing: "Exceptionally cold-tolerant and reliable across regions; some downy mildew tolerance.",
      harvesting: "Continuous side-shoot production extends the harvest well past the main head.",
      sources: [
        { tier: "seed-supplier", title: "Marathon Hybrid Broccoli F1", publisher: "HOSS Tools", url: "https://growhoss.com/products/marathon-broccoli" },
        { tier: "seed-supplier", title: "Marathon Broccoli Seeds", publisher: "Burpee", url: "https://www.burpee.com/broccoli-marathon-hybrid-prod500140.html" },
      ],
    },
    {
      name: "Gypsy",
      description: "Vigorous hybrid with smooth, dome-shaped, paler-green heads and medium-small beads; bred specifically for heat resistance.",
      daysToMaturity: { min: 57, max: 65 },
      starting: "Standard.",
      growing: "The standout trait is heat tolerance/slow bolting — recommended for southern growing and late-spring plantings in the North that mature into August heat. Resists downy mildew.",
      harvesting: "Single large head plus good side-shoot production.",
      sources: [
        { tier: "seed-supplier", title: "Gypsy - (F1) Broccoli Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/broccoli/standard-broccoli/gypsy-f1-broccoli-seed-2413.html" },
      ],
    },
    {
      name: "Patriot",
      description: "A Sakata-bred hybrid (SBC7401) with a slightly tall plant, small fine beads, and a high-domed head shape suited to bunching, crown cuts, and freezer markets.",
      starting: "Standard — no distinct guidance found beyond the generic.",
      growing: "Good tolerance to brown bead disorder; documentation is thinner than for more common hybrids, so treat specifics with some caution.",
      harvesting: "Bred for crown-cut/bunching markets — trim close for the \"crown cut\" trade style.",
      sources: [
        { tier: "university-extension", title: "Sustainable Gardening for School and Home Gardens: Broccoli & Cauliflower", publisher: "LSU AgCenter", url: "https://www.lsuagcenter.com/~/media/system/e/7/5/3/e7533093b8e178e510c498d76bba47d4/p3761i_sustgardbroccauli_rh0721pdf.pdf" },
      ],
    },
    {
      name: "Arcadia",
      description: "Midseason hybrid with a deep-domed head, small fine beads, and dark green-to-purplish color; a top choice for cold-season heading.",
      daysToMaturity: { min: 63, max: 68 },
      starting: "Standard.",
      growing: "Best-in-class cold tolerance among heading hybrids — the go-to pick for fall/winter production; tolerant of downy mildew and black rot.",
      harvesting: "Standard single-head harvest with side shoots following.",
      sources: [
        { tier: "seed-supplier", title: "Arcadia Broccoli (F1 Hybrid 70 Days)", publisher: "Pinetree Garden Seeds", url: "https://www.superseeds.com/products/arcadia-broccoli-f1-hybrid-70-days" },
      ],
    },
    {
      name: "Green Magic",
      description: "Hybrid producing sturdy, dark blue-green, semi-domed 6-7in heads with excellent side-shoot follow-up.",
      daysToMaturity: { min: 60, max: 60 },
      starting: "Standard.",
      growing: "Especially heat-tolerant and slow to bolt — extends the spring harvest window later than most, and can go in the ground earlier in fall than typical varieties. Resists downy mildew.",
      harvesting: "Main head plus strong second/third-flush side shoots.",
      sources: [
        { tier: "seed-supplier", title: "Green Magic - (F1) Broccoli Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/broccoli/standard-broccoli/green-magic-f1-broccoli-seed-2813.html" },
        { tier: "university-extension", title: "Broccoli trials test which varieties can stand up to disease and heat stress", publisher: "University of Minnesota Extension", url: "https://extension.umn.edu/yard-and-garden-news/which-varieties-broccoli-can-stand-disease-and-heat-stress" },
      ],
    },
    {
      name: "Belstar",
      description: "Organic-standard compact hybrid with dense, deep bluish-green domes (~1.5lb) and small-to-medium beads.",
      daysToMaturity: { min: 65, max: 70 },
      starting: "Standard; widely offered as certified-organic seed.",
      growing: "Notably adaptable across spring, summer, and fall trials — tolerates drought, 90°F highs, and 30°F lows in the same trial season. High resistance to downy mildew, Fusarium yellows, and wilt.",
      harvesting: "Large central head is the main crop; numerous smaller side-shoots follow.",
      sources: [
        { tier: "seed-supplier", title: "Belstar - Organic (F1) Broccoli Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/broccoli/standard-broccoli/belstar-organic-f1-broccoli-seed-2815G.html" },
      ],
    },
    {
      name: "Waltham 29",
      description: "Open-pollinated heirloom (1954, University of Massachusetts' Waltham Field Station) bred specifically for cool New England climates; large deep blue-green 6-8in heads.",
      daysToMaturity: { min: 74, max: 85 },
      starting: "Open-pollinated — seed can be saved true-to-type, unlike the F1 hybrids in this list.",
      growing: "Bred-in cold tolerance on sturdy 20-24in plants; reliable in zones 3-10.",
      harvesting: "Strong side-shoot production after the main head extends yield over an extended period.",
      sources: [
        { tier: "seed-supplier", title: "Waltham 29 Broccoli Seeds", publisher: "Baker Creek Heirloom Seeds", url: "https://www.rareseeds.com/broccoli-waltham-29" },
      ],
    },
    {
      name: "Calabrese (Green Sprouting)",
      description: "The classic Italian type (Calabria region) with sturdy upright stalks and large, loosely-clustered dark green heads; the ancestral type behind most modern hybrids.",
      daysToMaturity: { min: 50, max: 80 },
      starting: "Standard; commonly sold as open-pollinated/heirloom seed.",
      growing: "Vigorous, reliable side-shoot producer after the main harvest.",
      harvesting: "Cut the main head, then continue harvesting side shoots for weeks.",
      sources: [
        { tier: "seed-supplier", title: "Green Sprouting Calabrese, Broccoli Seeds", publisher: "Urban Farmer", url: "https://www.ufseeds.com/product/green-sprouting-calabrese-broccoli-seeds/BRGSC.html" },
      ],
    },
    {
      name: "Di Cicco",
      description: "Italian heirloom (introduced 1890), compact 2-3ft plants producing a small 3-4in central head followed by many side-shoot clusters.",
      daysToMaturity: { min: 48, max: 65 },
      starting: "Open-pollinated; can succession-sow closely for continual small harvests rather than one big flush.",
      growing: "Mild but sweet flavor; compact habit suits small gardens/containers.",
      harvesting: "Central head is small — the real payoff is the extended side-shoot harvest afterward.",
      sources: [
        { tier: "seed-supplier", title: "Di Cicco Broccoli (Heirloom, 55-70 Days)", publisher: "Pinetree Garden Seeds", url: "https://www.superseeds.com/products/di-cicco-broccoli" },
      ],
    },
    {
      name: "Purple Sprouting",
      description: "Traditional English heirloom sprouting type — no central head, instead a profusion of slender purple-floreted shoots that turn green when cooked; sweet, nutty flavor.",
      daysToMaturity: { min: 180, max: 240 },
      starting: "Sown in summer specifically to overwinter in the ground, not spring-planted like heading types.",
      growing: "Extremely cold-hardy, tolerating temps below 10°F; benefits from row cover or a sheltered site in the coldest stretches of winter.",
      harvesting: "Harvest begins in late winter/early spring as shoots emerge — a totally different harvest calendar than heading broccoli.",
      sources: [
        { tier: "seed-supplier", title: "Purple Sprouting Broccoli Guide for PNW Growers", publisher: "Organic Seed Alliance", url: "https://seedalliance.org/publications/psb-guide/" },
      ],
    },
    {
      name: "Everest",
      description: "Early-maturing hybrid forming crisp, deep blue-green 6-8in domed heads with small beads on a 22in plant.",
      daysToMaturity: { min: 68, max: 80 },
      starting: "Standard.",
      growing: "Recommended for Louisiana as an early type; keeps growing during cold snaps when other varieties stall, and resists head rot, brown bead, and downy mildew.",
      harvesting: "Late-summer/fall harvest window in Gulf South plantings.",
      sources: [
        { tier: "university-extension", title: "Sustainable Gardening for School and Home Gardens: Broccoli & Cauliflower", publisher: "LSU AgCenter", url: "https://www.lsuagcenter.com/~/media/system/e/7/5/3/e7533093b8e178e510c498d76bba47d4/p3761i_sustgardbroccauli_rh0721pdf.pdf" },
      ],
    },
    {
      name: "Wolfman",
      description: "A bunching-type hybrid (Bejo) that produces smaller heads held above the plant, intended for higher-density planting.",
      daysToMaturity: { min: 58, max: 58 },
      starting: "Plant at higher population/density than standard heading types since heads run smaller.",
      growing: "One of the University of Minnesota's top spring picks in multi-year regional trials for marketability and disease standing.",
      harvesting: "Bunching format — heads are smaller and typically harvested together rather than as one dominant crown.",
      sources: [
        { tier: "university-extension", title: "2021 Midwest Broccoli Trial Results", publisher: "University of Minnesota Extension", url: "https://conservancy.umn.edu/server/api/core/bitstreams/a4488c7b-a8c5-4a37-9c3d-12dc6a7a9898/content" },
      ],
    },
    {
      name: "Eastern Crown",
      description: "Compact hybrid (Sakata) with blue-green domed heads and small beads, bred to perform under long day-length and moderate heat.",
      daysToMaturity: { min: 58, max: 74 },
      starting: "Standard.",
      growing: "Excellent heat tolerance and, per University of Minnesota's multi-year regional trials, the best disease tolerance of the tested varieties in 2022.",
      harvesting: "Used for the \"crown cut\"/short-trim market — small beads and compact form suit close trimming.",
      sources: [
        { tier: "university-extension", title: "Broccoli trials test which varieties can stand up to disease and heat stress", publisher: "University of Minnesota Extension", url: "https://extension.umn.edu/yard-and-garden-news/which-varieties-broccoli-can-stand-disease-and-heat-stress" },
      ],
    },
    {
      name: "Destiny",
      description: "Heat-tolerant hybrid (formerly sold as \"Superdome\") with modest, medium-to-small-beaded heads showing a rich green-and-purple cast.",
      daysToMaturity: { min: 70, max: 75 },
      starting: "Germinates in 6-10 days at 50-60°F; standard spacing 24in between plants.",
      growing: "Bred for zones 7-11 — more heat-tolerant than the species baseline, and also noted as cold-hardy enough for spring or fall planting.",
      harvesting: "Main head plus side shoots, standard harvest style.",
      sources: [
        { tier: "seed-supplier", title: "Destiny Hybrid Broccoli", publisher: "True Leaf Market", url: "https://trueleafmarket.com/products/broccoli-destiny-hybrid" },
      ],
    },
    {
      name: "Imperial",
      description: "Hybrid with dark green heads and small, attractive beads; frequently confused in retail listings with Packman but is its own distinct selection.",
      daysToMaturity: { min: 71, max: 71 },
      starting: "Standard.",
      growing: "Notably heat-tolerant — best suited to summer/early-fall harvest in long-day, moderate-heat regions; grows slowly in cold weather.",
      harvesting: "Standard single-head harvest.",
      sources: [
        { tier: "seed-supplier", title: "Imperial - (F1) Broccoli Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/broccoli/standard-broccoli/imperial-f1-broccoli-seed-3041.html" },
      ],
    },
    {
      name: "Romanesco (Veronica)",
      description: "A distinct fractal-spiraled type (Romanesco group) with chartreuse, nutty-flavored heads; Veronica is the most widely grown named hybrid.",
      daysToMaturity: { min: 75, max: 80 },
      starting: "Standard, though Romanesco types are generally slower and more particular about consistent cool conditions than standard broccoli.",
      growing: "Resists purpling/red-tipping in heat better than older Romanesco lines; heads can reach 8in and 5lb under wide spacing and high fertility.",
      harvesting: "Harvest before the spiraled florets begin to loosen/separate — the geometric pattern is most visible and heads tightest at peak.",
      sources: [
        { tier: "seed-supplier", title: "Veronica Organic Romanesco Broccoli", publisher: "Fedco Seeds", url: "https://fedcoseeds.com/seeds/veronica-organic-romanesco-broccoli-3330" },
        { tier: "blog", title: "How to Plant, Grow, and Care for Romanesco Broccoli", publisher: "Epic Gardening", url: "https://www.epicgardening.com/romanesco-broccoli/" },
      ],
    },
    {
      name: "Burgundy",
      description: "A purple sprouting-type F1 hybrid with striking purple buds and purple-green stems, bred for concentrated side-shoot yield rather than one dominant head.",
      daysToMaturity: { min: 90, max: 100 },
      starting: "Standard transplant spacing 12-18in; as with all sprouting types, days-to-maturity is counted differently (add ~20 days if direct seeding).",
      growing: "A hybridized, faster-cropping alternative to traditional overwintering purple sprouting broccoli (which takes 180+ days) while keeping the purple sprouting habit.",
      harvesting: "Harvest the abundant purple side shoots continuously rather than waiting for one large crown.",
      sources: [
        { tier: "seed-supplier", title: "Burgundy - Purple Sprouting Broccoli Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/broccoli/mini-broccoli/burgundy-f1-broccoli-seed-3460.html" },
      ],
    },
  ],
} satisfies Plant;

export default broccoli;
