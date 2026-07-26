import type { Plant } from "@/types/plant";

const beet = {
  id: "beet",
  commonName: "Beet",
  scientificName: "Beta vulgaris",
  category: "vegetable",
  zones: { min: 3, max: 10 },
  sun: "full-sun",
  soil: "Fertile, deep, well-drained loose soil free of stones; pH 6.0-6.5.",
  spacingInches: 4,
  daysToMaturity: { min: 50, max: 70 },
  water: {
    intervalDays: 7,
    drySpellThresholdIn: 1,
    notes: "Needs about 1 inch of water per week; keep moisture consistent — uneven watering produces tough, woody roots and cracked/zoned texture.",
  },
  temperature: {
    frostThresholdF: 25,
    heatStressThresholdF: 85,
  },
  plantingWindows: [
    {
      season: "spring",
      earliestWeeksFromFrost: -4,
      latestWeeksFromFrost: 2,
      method: "direct-sow",
    },
    {
      season: "fall",
      earliestWeeksFromFrost: -10,
      latestWeeksFromFrost: -6,
      method: "direct-sow",
    },
  ],
  description:
    "A cool-season biennial root crop grown as an annual for its sweet, earthy globe- or cylinder-shaped roots and edible greens; performs best in spring and fall when temperatures stay moderate.",
  careNotes: [
    "Thin seedlings to 3-4 in apart (each \"seed\" is a fruit cluster with multiple embryos unless monogerm) — crowding produces small, misshapen roots.",
    "Soak seed clusters in warm water ~24 hours before planting to speed germination and reduce damping-off.",
    "Keep soil consistently moist; drought stress and uneven watering cause tough, woody, or cracked roots.",
    "Harvest at 1.5-3 in diameter for best texture — larger roots become fibrous.",
    "Watch for boron deficiency on sandy soils (causes internal black spot); amend with borax if a soil test confirms deficiency.",
  ],
  sources: [
    {
      title: "Carrot, Beet, Radish & Parsnip",
      publisher: "Clemson Cooperative Extension HGIC",
      url: "https://hgic.clemson.edu/factsheet/carrot-beet-radish-parsnip/",
    },
    {
      title: "Growing Beets in a Home Garden",
      publisher: "University of Maryland Extension",
      url: "https://extension.umd.edu/resource/growing-beets-home-garden",
    },
  ],
  regionalNotes: [
    {
      region: "Gulf South / Humid Subtropical",
      note: "Beets are primarily a fall/winter crop in Louisiana; plant September-October and harvest before summer heat returns.",
      source: {
        title: "Time to get ready for fall vegetable gardening",
        publisher: "LSU AgCenter",
        url: "https://www.lsuagcenter.com/articles/page1724096115741",
      },
    },
    {
      region: "Cold Continental (Upper Midwest)",
      note: "Direct-sow as soon as soil can be worked in spring (soil at least 40°F); Michigan's short season favors early spring and late-summer fall crops rather than summer sowing.",
      source: {
        title: "How to Grow Beets",
        publisher: "Michigan State University Extension",
        url: "https://www.canr.msu.edu/resources/how_to_grow_beets",
      },
    },
  ],
  varieties: [
    {
      name: "Detroit Dark Red",
      description: "1892 heirloom producing deep red, 3 in round roots; the classic \"grocery store\" beet, cold-hardy, germinates in soil as cool as 40°F.",
      daysToMaturity: { min: 55, max: 60 },
      starting: "Direct-sow early, tolerates cool soil.",
      growing: "Vigorous, disease-tolerant tops.",
      harvesting: "Pull at 3 in for best flavor; roots hold well in ground.",
      sources: [
        { tier: "blog", title: "26 Types Of Beet You Need To Grow", publisher: "Epic Gardening", url: "https://www.epicgardening.com/types-of-beet/" },
      ],
    },
    {
      name: "Chioggia (Chioggia Guardsmark)",
      description: "Italian heirloom with candy-cane pink-and-white striped interior (\"target\" pattern) and a mild, sweet, peppery flavor; Guardsmark is an improved, more uniform strain.",
      daysToMaturity: { min: 55, max: 55 },
      starting: "Direct-sow, medium-height tops with pink-striped stems.",
      growing: "Vigorous, uniform bulbing.",
      harvesting: "Harvest young — the stripe pattern fades once cooked or if roots oversize.",
      sources: [
        { tier: "blog", title: "26 Types Of Beet You Need To Grow", publisher: "Epic Gardening", url: "https://www.epicgardening.com/types-of-beet/" },
        { tier: "seed-supplier", title: "Chioggia Guardsmark - Heirloom Beet Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/beets/chioggia-guardsmark-beet-seed-25.html" },
      ],
    },
    {
      name: "Golden Detroit",
      description: "1820s heirloom with bright orange-yellow flesh that doesn't bleed or stain; sweet, mild, earthy flavor; edible gold-veined tops.",
      daysToMaturity: { min: 55, max: 60 },
      starting: "Direct-sow like other Detroit types.",
      growing: "Globe-shaped, holds color when cooked.",
      harvesting: "Stays tender and sweet even at larger sizes.",
      sources: [
        { tier: "blog", title: "26 Types Of Beet You Need To Grow", publisher: "Epic Gardening", url: "https://www.epicgardening.com/types-of-beet/" },
        { tier: "seed-supplier", title: "Beet Seeds - Golden Detroit", publisher: "True Leaf Market", url: "https://trueleafmarket.com/products/beet-golden-detroit" },
      ],
    },
    {
      name: "Cylindra (Formanova)",
      description: "1880s heirloom with elongated, cylindrical 6-9 in roots; easy to slice into uniform rounds, tender non-fibrous texture.",
      daysToMaturity: { min: 55, max: 60 },
      starting: "Direct-sow, needs a bit more depth than round types.",
      growing: "Unusually shaped for a beet, efficient use of row space.",
      harvesting: "Slice for pickling/canning; good keeper.",
      sources: [
        { tier: "blog", title: "26 Types Of Beet You Need To Grow", publisher: "Epic Gardening", url: "https://www.epicgardening.com/types-of-beet/" },
      ],
    },
    {
      name: "Bull's Blood",
      description: "Ornamental/dual-purpose heirloom with deep red-purple tops and roots; grown as much for striking microgreens/salad greens as for 2-3 in roots.",
      daysToMaturity: { min: 60, max: 60 },
      starting: "Direct-sow; also popular sown thick for microgreens.",
      growing: "Strongly pigmented foliage throughout growth.",
      harvesting: "Cut greens young for salads; roots at 2-3 in diameter.",
      sources: [
        { tier: "blog", title: "26 Types Of Beet You Need To Grow", publisher: "Epic Gardening", url: "https://www.epicgardening.com/types-of-beet/" },
      ],
    },
    {
      name: "Touchstone Gold",
      description: "Improved modern golden beet bred by Johnny's; vibrant, extra-sweet, milder than red types, color holds through cooking.",
      daysToMaturity: { min: 55, max: 55 },
      starting: "Direct-sow.",
      growing: "Reliable, uniform bulbing.",
      harvesting: "Harvest young for mildest flavor.",
      sources: [
        { tier: "seed-supplier", title: "Touchstone Gold - Golden Beet Seeds", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/beets/specialty-beets/touchstone-gold-beet-seed-2818.html" },
      ],
    },
    {
      name: "Boro",
      description: "Fast-maturing F1 hybrid with strong tops, smooth rich-red skin, widely adapted and reliable performance.",
      starting: "Direct-sow.",
      growing: "Strong, disease-tolerant top growth good for bunching.",
      harvesting: "Matures quickly, good for succession plantings.",
      sources: [
        { tier: "seed-supplier", title: "Boro - (F1) Beet Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/beets/round-red-beets/boro-f1-beet-seed-3300.html" },
      ],
    },
    {
      name: "Merlin",
      description: "Round, 3 in-diameter F1 hybrid with high sugar content and good resistance to leaf spot and other foliar fungi.",
      daysToMaturity: { min: 48, max: 48 },
      starting: "Direct-sow.",
      growing: "Strong disease tolerance reduces foliage loss.",
      harvesting: "Uniform round roots, good for bunching.",
      sources: [
        { tier: "blog", title: "27 of the Best Beet Varieties to Grow at Home", publisher: "Gardener's Path", url: "https://gardenerspath.com/plants/vegetables/best-beet-varieties/" },
        { tier: "blog", title: "26 Types Of Beet You Need To Grow", publisher: "Epic Gardening", url: "https://www.epicgardening.com/types-of-beet/" },
      ],
    },
    {
      name: "Avalanche",
      description: "White-rooted hybrid, super-sweet, 2-3 in diameter, does not bleed/stain.",
      daysToMaturity: { min: 55, max: 55 },
      starting: "Direct-sow.",
      growing: "Uniform white roots.",
      harvesting: "Harvest at 2-3 in for peak sweetness.",
      sources: [
        { tier: "blog", title: "27 of the Best Beet Varieties to Grow at Home", publisher: "Gardener's Path", url: "https://gardenerspath.com/plants/vegetables/best-beet-varieties/" },
      ],
    },
    {
      name: "Red Ace",
      description: "Rapidly-growing F1 hybrid with very uniform roots that stay sweet and tender even as they size up; good tops for bunching.",
      daysToMaturity: { min: 50, max: 50 },
      starting: "Direct-sow.",
      growing: "Vigorous, forgiving of slightly delayed harvest.",
      harvesting: "Excellent for bunching with greens attached.",
      sources: [
        { tier: "blog", title: "27 of the Best Beet Varieties to Grow at Home", publisher: "Gardener's Path", url: "https://gardenerspath.com/plants/vegetables/best-beet-varieties/" },
      ],
    },
    {
      name: "Moneta (Monogerm)",
      description: "Monogerm F1 hybrid (one seedling per seed ball, reducing/eliminating thinning); uniform size and smooth texture.",
      daysToMaturity: { min: 46, max: 46 },
      starting: "Direct-sow — no thinning needed due to monogerm seed.",
      growing: "Very uniform stand.",
      harvesting: "Consistent root size simplifies bunch harvest.",
      sources: [
        { tier: "seed-supplier", title: "Moneta (Monogerm) - (F1) Beet Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/beets/moneta-monogerm-f1-beet-seed-2319.html" },
      ],
    },
    {
      name: "Kestrel",
      description: "F1 hybrid bred with documented resistance to Cercospora leaf spot, downy mildew, powdery mildew, and Rhizoctonia root/crown rot.",
      starting: "Direct-sow.",
      growing: "Strong disease package, good for humid climates prone to leaf spot.",
      harvesting: "Standard round-root harvest.",
      sources: [
        { tier: "blog", title: "27 of the Best Beet Varieties to Grow at Home", publisher: "Gardener's Path", url: "https://gardenerspath.com/plants/vegetables/best-beet-varieties/" },
      ],
    },
    {
      name: "Early Wonder Tall Top",
      description: "Early heirloom selected for taller, more abundant greens alongside 3-4 in dark red roots.",
      daysToMaturity: { min: 45, max: 45 },
      starting: "One of the earliest-maturing standards; good for first spring sowing.",
      growing: "Tall glossy tops good for eating.",
      harvesting: "Pull young for sweetest roots and best greens.",
      sources: [
        { tier: "seed-supplier", title: "Early Wonder Tall Top Beet Seed", publisher: "Territorial Seed Company", url: "https://territorialseed.com/products/beet-early-wonder-tall-top" },
        { tier: "seed-supplier", title: "Early Wonder Tall Top - Beet Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/beets/beet-greens/early-wonder-tall-top-beet-seed-123.html" },
      ],
    },
    {
      name: "Lutz Green Leaf (Winterkeeper)",
      description: "Late, long-storing heirloom that stays tender and sweet even at large size; excellent keeper.",
      daysToMaturity: { min: 65, max: 65 },
      starting: "Direct-sow, plant for fall storage crop.",
      growing: "Unusually resistant to becoming woody as it sizes up.",
      harvesting: "Can be left in ground longer than most varieties; stores well through winter.",
      sources: [
        { tier: "seed-supplier", title: "Lutz Green Leaf Beet Seed", publisher: "Territorial Seed Company", url: "https://territorialseed.com/products/beet-lutz-green-leaf" },
        { tier: "seed-supplier", title: "Lutz Green Leaf Organic Beet", publisher: "Fedco Seeds", url: "https://fedcoseeds.com/seeds/lutz-green-leaf-organic-beet-2170" },
      ],
    },
    {
      name: "Albina Vereduna (White Albino)",
      description: "Old Dutch white-rooted heirloom, sweet and delicate with milder, less earthy flavor than red beets; doesn't stain.",
      daysToMaturity: { min: 50, max: 60 },
      starting: "Direct-sow.",
      growing: "Similar culture to red types.",
      harvesting: "Best eaten young; roots don't bleed so good for mixed dishes.",
      sources: [
        { tier: "seed-supplier", title: "White Beetroot 'Albina Vereduna' / 'Albina Ice'", publisher: "Magic Garden Seeds", url: "https://www.magicgardenseeds.com/White-Beetroot-Albina-Vereduna-Albina-Ice-Beta-vulgaris-seeds" },
      ],
    },
    {
      name: "Ruby Queen",
      description: "1957 All-America Selections winner; smooth, buttery-textured, ringless deep-red globes with a small taproot; tolerates poor soils and crowding without going woody.",
      daysToMaturity: { min: 50, max: 60 },
      starting: "Direct-sow.",
      growing: "Performs in less-than-ideal soil.",
      harvesting: "Holds color well when canned or pickled; can size up without becoming woody.",
      sources: [
        { tier: "blog", title: "Beet Ruby Queen", publisher: "All-America Selections", url: "https://all-americaselections.org/product/beet-ruby-queen/" },
        { tier: "seed-supplier", title: "Ruby Queen Beet (60 Days)", publisher: "Pinetree Garden Seeds", url: "https://www.superseeds.com/products/ruby-queen-beet-60-days" },
      ],
    },
    {
      name: "Robin",
      description: "F1 hybrid baby beet; sweet, uniformly round dark-red roots up to ~5cm, eye-catching red stems/bright green leaves.",
      daysToMaturity: { min: 30, max: 60 },
      starting: "Succession-sow every 2 weeks from early spring through summer for continuous baby beets.",
      growing: "Fast germination (7-12 days).",
      harvesting: "Pull at ~30 days for true baby beets.",
      sources: [
        { tier: "seed-supplier", title: "Robin Hybrid Baby Beet Seeds", publisher: "OSC Seeds", url: "https://www.oscseeds.com/product/robin-hybrid-baby-beet-seeds-aimers-international-2740/" },
        { tier: "seed-supplier", title: "Robin Beet Seeds", publisher: "Botanical Interests", url: "https://www.botanicalinterests.com/products/robin-beet-seeds" },
      ],
    },
    {
      name: "Sangria",
      description: "Open-pollinated dual-purpose variety grown for both roots and baby leaf/greens; notably heat-tolerant, handling temperature fluctuation better than most.",
      daysToMaturity: { min: 55, max: 85 },
      starting: "Direct-sow; can be grown specifically for leaf harvest.",
      growing: "Better heat tolerance than typical beets.",
      harvesting: "Cut leaves from ~35 days; roots from 55-85 days.",
      sources: [
        { tier: "seed-supplier", title: "Beetroot Sangria", publisher: "Green Seeds", url: "https://greenseeds.net/product/beetroot-sangria" },
      ],
    },
    {
      name: "Detroit Supreme",
      description: "Heirloom improvement on Detroit Medium Top bred for better disease resistance, smoother skin, and glossy tops.",
      daysToMaturity: { min: 60, max: 60 },
      starting: "Direct-sow.",
      growing: "Improved disease resistance over older Detroit strains.",
      harvesting: "Blood-red flesh, standard globe harvest at 2-3 in.",
      sources: [
        { tier: "seed-supplier", title: "Detroit Supreme Beet Seeds", publisher: "Burpee", url: "https://www.burpee.com/beet-detroit-supreme-prod001815.html" },
      ],
    },
    {
      name: "MacGregor's Favorite",
      description: "Scottish heirloom (150+ years old) grown as a bunching beet, prized for rapid maturity and small, tender roots harvested young in bunches.",
      daysToMaturity: { min: 55, max: 65 },
      starting: "Direct-sow, thin for bunching harvest.",
      growing: "Fast to reach bunching size.",
      harvesting: "Pull whole bunches young rather than growing to full size.",
      sources: [
        { tier: "seed-supplier", title: "MacGregor's Favorite Bunching Beet Seeds", publisher: "True Leaf Market", url: "https://trueleafmarket.com/products/beet-seeds-bunching-macgregors-favorite" },
        { tier: "seed-supplier", title: "Organic MacGregor's Favorite Beet", publisher: "Wild Garden Seed", url: "https://www.wildgardenseed.com/product_info.php?products_id=170" },
      ],
    },
  ],
} satisfies Plant;

export default beet;
