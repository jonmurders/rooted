import type { Plant } from "@/types/plant";

const marigold = {
  id: "marigold",
  commonName: "Marigold",
  scientificName: "Tagetes spp.",
  category: "flower",
  zones: { min: 2, max: 11 },
  sun: "full-sun",
  soil: "Average, well-drained soil — tolerates poor soil",
  spacingInches: 12,
  daysToMaturity: { min: 45, max: 60 },
  water: {
    intervalDays: 4,
    drySpellThresholdIn: 1,
    notes: "Fairly drought tolerant once established; avoid overwatering.",
  },
  temperature: {
    frostThresholdF: 32,
    heatStressThresholdF: 95,
  },
  plantingWindows: [
    {
      season: "spring",
      earliestWeeksFromFrost: 0,
      latestWeeksFromFrost: 10,
      method: "direct-sow",
    },
  ],
  description:
    "A tough, heat-loving annual flower often companion-planted to deter pests in vegetable beds.",
  careNotes: [
    "Deadhead spent blooms to keep flowers coming all season.",
    "Very tolerant of heat and drought once established.",
    "Killed outright by the season's first frost.",
    "Water at the soil line, not overhead — wet petals in humid heat invite petal blight.",
  ],
  sources: [
    {
      title: "These colorful plants take the heat",
      publisher: "LSU AgCenter",
      url: "https://www.lsuagcenter.com/articles/page1464977874130",
    },
  ],
  regionalNotes: [
    {
      region: "Gulf South / Humid Subtropical",
      note: "One of the recommended heat-tolerant summer bedding plants — avoid overhead irrigation because wet petals in humid heat lead to petal blight. Varieties: Discovery, Inca, Excel, Bonanza.",
      source: {
        title: "These colorful plants take the heat",
        publisher: "LSU AgCenter",
        url: "https://www.lsuagcenter.com/articles/page1464977874130",
      },
    },
    {
      region: "Hot/Arid Southwest",
      note: "Hot, dry weather sharply accelerates spider mite reproduction (a generation can complete in under a week in heat), and drought stress compounds mite damage — consistent irrigation is a real defense here, not just a pest-control afterthought.",
      source: {
        title: "Spider Mites",
        publisher: "UC Statewide IPM Program",
        url: "https://ipm.ucanr.edu/home-and-landscape/spider-mites/",
      },
    },
    {
      region: "Subtropical Florida",
      note: "Marigold is specifically planted as a root-knot nematode-suppressing companion in Florida's sandy, nematode-prone soils — a regional pest-management use beyond its role as a bedding flower.",
      source: {
        title: "Marigolds (Tagetes spp.) for Nematode Management",
        publisher: "UF/IFAS",
        url: "https://ask.ifas.ufl.edu/publication/NG045",
      },
    },
  ],
  varieties: [
    {
      name: "Crackerjack",
      description: "Tall, vigorous African marigold with dense, carnation-like double blooms in lemon-yellow to deep orange; AAS award winner.",
      daysToMaturity: { min: 70, max: 85 },
      starting: "Standard.",
      growing: "Reaches 24-36in tall — one of the taller African types, good as a back-of-border or cutting-garden plant rather than a bedding/edging plant.",
      harvesting: "Ornamental — blooms are 3-5in and long-lasting for cutting.",
      sources: [
        { tier: "seed-supplier", title: "Crackerjack Mix Marigold Seeds", publisher: "Baker Creek Heirloom Seeds", url: "https://www.rareseeds.com/marigold-crackerjack-mix" },
      ],
    },
    {
      name: "Antigua (Antiqua)",
      description: "Dwarf African marigold series with brilliant 3in fully double blooms in orange/yellow/gold; compact, mounded habit.",
      daysToMaturity: { min: 60, max: 84 },
      starting: "Standard.",
      growing: "Excellent heat tolerance — specifically noted as thriving in hot, humid, and drought-prone Southern/Southwest gardens without stalling. Height only 10-12in, unlike Crackerjack's tall habit.",
      harvesting: "Ornamental.",
      sources: [
        { tier: "seed-supplier", title: "African Marigold Seeds - Antigua Series", publisher: "True Leaf Market", url: "https://trueleafmarket.com/products/marigold-antigua-series-flower-seed" },
        { tier: "university-extension", title: "These colorful plants take the heat", publisher: "LSU AgCenter", url: "https://www.lsuagcenter.com/articles/page1464977874130" },
      ],
    },
    {
      name: "Inca II",
      description: "African marigold series with the largest blooms available in the type — 3-5in fully double pompom flowers in yellow/orange/gold.",
      daysToMaturity: { min: 77, max: 84 },
      starting: "Standard.",
      growing: "Blooms 7-10 days earlier than the original Inca series; AAS award-winning color.",
      harvesting: "Ornamental.",
      sources: [
        { tier: "seed-supplier", title: "African Marigold Seeds - Inca II Series", publisher: "True Leaf Market", url: "https://trueleafmarket.com/products/marigold-inca-ii-series-flower-seed" },
      ],
    },
    {
      name: "Vanilla",
      description: "African marigold with unusual creamy-white-to-ivory double blooms (fading to lemon-yellow centers) rather than the typical orange/gold palette; less pungent scent than most marigolds.",
      daysToMaturity: { min: 56, max: 60 },
      starting: "Standard.",
      growing: "Compact, well-branched habit to about 16in tall — smaller and less aromatic than typical African types.",
      harvesting: "Ornamental.",
      sources: [
        { tier: "seed-supplier", title: "Marigold Vanilla F1 Seed", publisher: "Harris Seeds", url: "https://www.harrisseeds.com/products/20679-marigold-vanilla-f1" },
      ],
    },
    {
      name: "Excel",
      description: "An African marigold series named in LSU AgCenter's regional recommendations alongside Discovery, Inca, and Bonanza; public seed-catalog documentation for this exact series is thinner than for the others in this list.",
      starting: "Standard — no distinct guidance found beyond generic African-marigold care.",
      growing: "Cited specifically as a heat-tolerant summer bedding recommendation for the Gulf South; treat detailed size/maturity claims with some caution given limited independent sourcing.",
      harvesting: "Ornamental.",
      sources: [
        { tier: "university-extension", title: "These colorful plants take the heat", publisher: "LSU AgCenter", url: "https://www.lsuagcenter.com/articles/page1464977874130" },
      ],
    },
    {
      name: "Discovery",
      description: "Compact, dwarf African marigold series (10-14in tall) with fully double bright yellow blooms — bred for reliability and heat tolerance in a smaller footprint than most African types.",
      daysToMaturity: { min: 77, max: 84 },
      starting: "Standard.",
      growing: "Named specifically in LSU's Gulf South heat-tolerant bedding-plant recommendations; unusual dwarf/compact habit for an African marigold, better suited to containers/edging than the taller series.",
      harvesting: "Ornamental.",
      sources: [
        { tier: "university-extension", title: "These colorful plants take the heat", publisher: "LSU AgCenter", url: "https://www.lsuagcenter.com/articles/page1464977874130" },
        { tier: "seed-supplier", title: "African Marigold Seeds - Discovery Series", publisher: "True Leaf Market", url: "https://trueleafmarket.com/products/marigold-discovery-series-flower-seed" },
      ],
    },
    {
      name: "Moonlight (Moonsong)",
      description: "An heirloom African marigold with large, creamy-white fully double blooms — a soft alternative to the classic orange/gold palette, growing 24-36in tall.",
      daysToMaturity: { min: 70, max: 85 },
      starting: "Open-pollinated heirloom, unlike most F1 hybrid African series.",
      growing: "Found primarily under the name \"Moonlight\" in catalogs — likely the same white-flowered African type sold under slightly different names by different retailers.",
      harvesting: "Ornamental.",
      sources: [
        { tier: "blog", title: "Moonlight African Marigold", publisher: "MIgardener", url: "https://migardener.com/products/moonlight-african-marigold" },
      ],
    },
    {
      name: "Climax",
      description: "African marigold with ruffled, double, ball-shaped blooms in gold/yellow/orange up to 4-5in across, from midsummer to frost.",
      starting: "Standard — specific days-to-maturity and height figures were not confirmed in available sources.",
      growing: "One of the larger-flowered African types by bloom diameter; long bloom season into frost.",
      harvesting: "Ornamental.",
      sources: [
        { tier: "seed-supplier", title: "Climax Mixed Colors Marigold Seeds", publisher: "Burpee", url: "https://www.burpee.com/marigold-climax-mixed-colors-prod000259.html" },
      ],
    },
    {
      name: "Bonanza",
      description: "French marigold series, compact (8-12in) with large double 2-3in blooms — among the largest flowers of any French type; AAS Bedding Plant Winner.",
      daysToMaturity: { min: 56, max: 63 },
      starting: "Standard.",
      growing: "Bred to thrive in long summer heat while staying compact — good container/edging choice.",
      harvesting: "Ornamental.",
      sources: [
        { tier: "seed-supplier", title: "French Marigold Seeds - Bonanza Series", publisher: "True Leaf Market", url: "https://trueleafmarket.com/products/marigold-bonanza-series-flower-seeds" },
      ],
    },
    {
      name: "Janie",
      description: "Dwarf French marigold (8-10in tall) with vibrant golden-orange double blooms held 2-3in above the foliage rather than hidden in it; AAS Flower Winner.",
      daysToMaturity: { min: 56, max: 63 },
      starting: "Early-blooming cultivar — flowers sooner than many French types.",
      growing: "Exceptionally uniform, low, rounded habit — well suited to edging/border-front use.",
      harvesting: "Ornamental.",
      sources: [
        { tier: "seed-supplier", title: "French Marigold Seeds - Janie Series", publisher: "True Leaf Market", url: "https://trueleafmarket.com/products/marigold-janie-series-bright-yellow-flower-seeds" },
      ],
    },
    {
      name: "Durango",
      description: "French marigold series, anemone-type flowers with excellent branching and strong stems. Height 10-12in.",
      daysToMaturity: { min: 56, max: 63 },
      starting: "Standard; plug crop time ~3 weeks, transplant-to-finish 4-5 weeks.",
      growing: "Vigorous, uniform, upright-compact habit; multiple named color selections (Bolero, Gold, Yellow, Outback Mixture).",
      harvesting: "Ornamental.",
      sources: [
        { tier: "seed-supplier", title: "Durango Outback Mix - Marigold Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/flowers/marigold/durango-outback-mix-marigold-seed-1821.html" },
      ],
    },
    {
      name: "Hero (Little Hero / Super Hero series)",
      description: "Compact French marigold series (7-12in tall) with bright double blooms in orange/red/gold and bicolors; \"Little Hero\" flowers are also edible with a citrusy flavor.",
      daysToMaturity: { min: 50, max: 60 },
      starting: "Standard.",
      growing: "Early-flowering and compact; resistant to common pests per catalog claims.",
      harvesting: "If grown for edible petals (Little Hero), harvest blooms as they open and use fresh.",
      sources: [
        { tier: "seed-supplier", title: "French Marigold Seeds - Little Hero", publisher: "Outside Pride", url: "https://www.outsidepride.com/seed/flower-seed/marigold/french-marigold-seeds-little-hero.html" },
      ],
    },
    {
      name: "Aurora",
      description: "A French marigold selection within the standard compact, bushy French-type habit (under 2ft); specific bloom-form details were less documented than other varieties in this list.",
      daysToMaturity: { min: 50, max: 70 },
      starting: "Standard.",
      growing: "Treat as a typical compact French marigold pending firmer sourcing on distinguishing traits.",
      harvesting: "Ornamental.",
      sources: [
        { tier: "seed-supplier", title: "Marigold Seeds - French Aurora Orange", publisher: "PA Seed Company", url: "https://www.paseeds.com/marigold-seeds-french-aurora-orange-annual-seed/" },
      ],
    },
    {
      name: "Disco",
      description: "French marigold series with single-petaled (not double) blooms in yellow/orange/red including bicolors — a distinctly \"simpler\" flower form than most French/African types. Only 9in tall.",
      daysToMaturity: { min: 55, max: 65 },
      starting: "Standard; early-blooming.",
      growing: "Compact, well-branched, and extremely floriferous — the single-petal form is the key visual distinguisher from the double-flowered French series.",
      harvesting: "Ornamental.",
      sources: [
        { tier: "seed-supplier", title: "Marigold Flower Seeds - Disco Series", publisher: "True Leaf Market", url: "https://trueleafmarket.com/products/marigold-disco-series-flower-seeds" },
      ],
    },
    {
      name: "Safari",
      description: "Dwarf French marigold with large (~3in) double, crested blooms resembling anemones, in yellow, scarlet, and rare tangerine; 1992 Fleuroselect Gold Medal winner.",
      daysToMaturity: { min: 70, max: 84 },
      starting: "Germinates in 3-7 days at 75-80°F soil temp.",
      growing: "Compact 10-12in habit; noted for earliness and tidy habit despite the larger bloom size for a dwarf type.",
      harvesting: "Ornamental.",
      sources: [
        { tier: "seed-supplier", title: "Safari Tangerine Marigold Seeds", publisher: "Baker Creek Heirloom Seeds", url: "https://www.rareseeds.com/marigold-safari-tangerine" },
      ],
    },
    {
      name: "Lemon Gem",
      description: "Signet marigold (Tagetes tenuifolia, a different species from French/African marigolds) with hundreds of small single yellow flowers on lacy, citrus-scented foliage.",
      daysToMaturity: { min: 59, max: 59 },
      starting: "Sow 6-8 weeks before last frost; standard otherwise.",
      growing: "Entirely different growth form from French/African types — fine ferny foliage, low compact mounds, not upright/bushy.",
      harvesting: "Flowers and foliage are edible with a citrusy, spicy flavor — pick blooms fresh for salads/garnish.",
      sources: [
        { tier: "seed-supplier", title: "Lemon & Tangerine Gems Signet Marigold Seeds", publisher: "Epic Gardening", url: "https://shop.epicgardening.com/products/lemon-tangerine-gems-signet-marigold-seeds" },
      ],
    },
    {
      name: "Tangerine Gem",
      description: "Signet marigold (Tagetes tenuifolia) producing dozens of penny-sized tangerine-orange blooms with darker centers on 15-20 branching stems per plant, up to 24in tall.",
      daysToMaturity: { min: 60, max: 90 },
      starting: "Standard; 12in spacing.",
      growing: "Ferny, wilt-resistant, scented foliage attracts beneficial insects (ladybugs, hoverflies, parasitic wasps).",
      harvesting: "Edible flowers (floral/citrus/spice flavor, slightly bitter at the petal base — trim that part off) and edible leaves as a garnish/salad green.",
      sources: [
        { tier: "seed-supplier", title: "Tangerine Gem - Signet Marigold Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/flowers/marigold/tangerine-gem-marigold-seed-1411.html" },
      ],
    },
    {
      name: "Golden Gem",
      description: "Signet marigold (Tagetes tenuifolia) with deep yellow-orange single blooms and a slightly darker center, on lacy foliage — the \"gold\" counterpart to Lemon Gem and Tangerine Gem.",
      daysToMaturity: { min: 59, max: 59 },
      starting: "Standard.",
      growing: "Compact habit (4-20in), full sun, tolerant of a range of soils.",
      harvesting: "Edible-flower use similar to other signet types.",
      sources: [
        { tier: "blog", title: "Tagetes tenuifolia 'Golden Gem'", publisher: "Royal Horticultural Society (RHS)", url: "https://www.rhs.org.uk/plants/351173/tagetes-tenuifolia-golden-gem/details" },
      ],
    },
    {
      name: "Queen Sophia",
      description: "Award-winning anemone-flowered dwarf French marigold with bicolored blooms — deep rusty-orange petals edged in gold as they mature.",
      daysToMaturity: { min: 60, max: 60 },
      starting: "Standard.",
      growing: "Compact 10-12in tall, 6-8in wide; 1979 AAS award winner and voted second-most-popular AAS flower historically.",
      harvesting: "Ornamental.",
      sources: [
        { tier: "seed-supplier", title: "Queen Sophia - Marigold Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/flowers/marigold/queen-sophia-marigold-seed-1617.html" },
      ],
    },
    {
      name: "Zenith",
      description: "Afro-French hybrid (cross between African and French types) with large, crested, carnation-like double blooms in reds/oranges/yellows/bicolors, held above the foliage; 14in height/spread.",
      daysToMaturity: { min: 70, max: 84 },
      starting: "Standard.",
      growing: "Triploid (sterile) hybrid — because it can't set seed, the plant keeps producing flowers continuously all season rather than slowing after going to seed; noted for strong weather resistance.",
      harvesting: "Ornamental.",
      sources: [
        { tier: "blog", title: "Tagetes 'Zenith Yellow' (Zenith Series)", publisher: "Royal Horticultural Society (RHS)", url: "https://www.rhs.org.uk/plants/280037/tagetes-zenith-yellow-(zenith-series)/details" },
      ],
    },
  ],
} satisfies Plant;

export default marigold;
