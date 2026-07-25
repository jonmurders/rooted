import type { Plant } from "@/types/plant";

const greenBean = {
  id: "green-bean",
  commonName: "Green Bean (Bush)",
  scientificName: "Phaseolus vulgaris",
  category: "vegetable",
  zones: { min: 3, max: 10 },
  sun: "full-sun",
  soil: "Well-drained, average fertility — too much nitrogen reduces pods",
  spacingInches: 4,
  daysToMaturity: { min: 45, max: 65 },
  water: {
    intervalDays: 3,
    drySpellThresholdIn: 1,
    notes: "Water at the base; wet foliage encourages fungal disease.",
  },
  temperature: {
    frostThresholdF: 32,
    heatStressThresholdF: 90,
  },
  plantingWindows: [
    {
      season: "spring",
      earliestWeeksFromFrost: 1,
      latestWeeksFromFrost: 8,
      method: "direct-sow",
    },
  ],
  description:
    "A quick, easy warm-season vegetable — direct-sown after frost risk passes.",
  careNotes: [
    "Succession-sow every 2 weeks for a continuous harvest.",
    "Pods toughen quickly once mature — pick every 2-3 days.",
    "Blossom drop is common above 90°F; this usually resolves as temperatures cool.",
    "Look for seed labeled resistant to bean common mosaic virus (BCMV) and rust where those are a known regional problem.",
  ],
  sources: [
    {
      title: "Home Garden Green Beans",
      publisher: "LSU AgCenter",
      url: "https://www.lsuagcenter.com/~/media/system/5/5/6/4/55646c0ef9404ad2073c46b006e13b51/green%20beans%20-%20ugapdf.pdf",
    },
  ],
  regionalNotes: [
    {
      region: "Gulf South / Humid Subtropical",
      note: "Direct-sow mid-March through mid-May for spring, then again mid-to-late August for a fall crop (fall quality is usually excellent). Recommended varieties: Contender, Strike, Provider, Bush Blue Lake 274.",
      source: {
        title: "Home Garden Green Beans",
        publisher: "LSU AgCenter",
        url: "https://www.lsuagcenter.com/~/media/system/5/5/6/4/55646c0ef9404ad2073c46b006e13b51/green%20beans%20-%20ugapdf.pdf",
      },
    },
    {
      region: "Hot/Arid Southwest",
      note: "Bush beans stall in true desert summer heat and resume producing once daytime temps drop back under 95°F. Contender is a strong performer here, and its fast 50-55 day maturity lets a crop finish before the first fall frost.",
      source: {
        title: "Vegetable Planting Calendar for Maricopa County",
        publisher: "University of Arizona Cooperative Extension",
        url: "https://extension.arizona.edu/sites/default/files/2024-08/az1005-2018.pdf",
      },
    },
    {
      region: "Cold Continental (Upper Midwest)",
      note: "Even a light frost (30-32°F) kills bean plants outright, so spring planting must wait until frost danger has fully passed.",
      source: {
        title: "Growing beans in home gardens",
        publisher: "University of Minnesota Extension",
        url: "https://extension.umn.edu/vegetables/growing-beans",
      },
    },
  ],
  varieties: [
    {
      name: "Contender",
      description: "Open-pollinated 1949-release heirloom; compact 18-24in plants with straight, uniform, stringless 6-7in pods.",
      daysToMaturity: { min: 50, max: 55 },
      starting: "Standard direct-sow; no unusual cold-soil tolerance claimed, though catalogs note it does well in short seasons/cool starts.",
      growing: "Tolerates bean mosaic virus, greasy pod, and both cool starts and hot summer conditions — wider climate range than typical bush types.",
      harvesting: "Pods mature all at once (a plus for one-pass canning); pick at 6-7in while stringless.",
      sources: [
        { tier: "seed-supplier", title: "Contender Bush Bean Seeds", publisher: "Burpee", url: "https://www.burpee.com/bean-bush-contender-prod001101.html" },
        { tier: "seed-supplier", title: "Contender Bush Bean Seeds", publisher: "Botanical Interests", url: "https://www.botanicalinterests.com/products/contender-bush-bean-seeds" },
      ],
    },
    {
      name: "Provider",
      description: "Open-pollinated, purple-seeded bush bean (USDA release, 1965); straight, round, medium-green 5-6in pods.",
      daysToMaturity: { min: 50, max: 50 },
      starting: "Germinates in cooler soil than most bush beans (min ~60°F, optimal 70-80°F) — a real edge for early direct-sowing before soil has fully warmed.",
      growing: "Resistant to Bean Common Mosaic Virus (CBMV), NY15, Powdery Mildew, Downy Mildew, and PMV.",
      harvesting: "Pick at 5-6in; among the earliest bush beans to first harvest.",
      sources: [
        { tier: "seed-supplier", title: "Provider - Organic Bush Bean Seeds", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/beans/bush-beans/provider-organic-bean-seed-10G.html" },
        { tier: "seed-supplier", title: "Provider Bush Bean", publisher: "Fedco Seeds", url: "https://fedcoseeds.com/seeds/provider-bush-bean-204" },
      ],
    },
    {
      name: "Bush Blue Lake 274",
      description: "Canning-industry standard; compact 18-24in bush, long straight 6-7in pods, stringless when picked young.",
      daysToMaturity: { min: 54, max: 61 },
      starting: "Standard direct-sow; nothing unusual vs. generic guidance.",
      growing: "Resistant to Bean Common Mosaic Virus (race 1) and NY15.",
      harvesting: "Pods mature uniformly/all-at-once — the trait that made it the canning industry's favorite; pick before seeds bulge.",
      sources: [
        { tier: "seed-supplier", title: "Blue Lake Bush 274 Bean Seed", publisher: "Territorial Seed", url: "https://territorialseed.com/products/bean-blue-lake-bush-274" },
        { tier: "blog", title: "Bush Bean 'Blue Lake 274'", publisher: "Fine Gardening", url: "https://www.finegardening.com/article/bush-bean-blue-lake-274" },
      ],
    },
    {
      name: "Tendercrop",
      description: "Also sold as \"Tendergreen Improved\"; easy-prep stringless pods.",
      daysToMaturity: { min: 53, max: 56 },
      starting: "Standard direct-sow; no variety-specific note beyond generic guidance.",
      growing: "Adapted USDA zones 5-11; no specific disease-resistance claim found.",
      harvesting: "Pods snap cleanly when stringless-ripe; no unusual harvest indicator beyond generic guidance.",
      sources: [
        { tier: "blog", title: "Tendercrop Bush Beans", publisher: "Gardening Know How", url: "https://www.gardeningknowhow.com/edible/vegetables/beans/tendercrop-green-beans.htm" },
      ],
    },
    {
      name: "Strike",
      description: "Very heavy-yielding open-pollinated bush type; concentrated pod set of smooth, uniform 5-6in medium-green pods, sweet classic flavor.",
      daysToMaturity: { min: 45, max: 53 },
      starting: "Standard direct-sow.",
      growing: "Resistant to BCMV, NY15, and CBMV; popular with both commercial and home growers for disease tolerance.",
      harvesting: "Concentrated pod set gives a heavier one-time harvest window vs. extended-pick types like Derby.",
      sources: [
        { tier: "seed-supplier", title: "Organic Non-GMO Strike Bush Bean", publisher: "High Mowing Organic Seeds", url: "https://www.highmowingseeds.com/organic-non-gmo-strike-bush-bean.html" },
        { tier: "seed-supplier", title: "Strike Bush Bean", publisher: "Fedco Seeds", url: "https://fedcoseeds.com/seeds/strike-bush-bean-210" },
      ],
    },
    {
      name: "Santa Fe",
      description: "An upright pinto (dry) bean bred at Michigan State for an erect, lodging-resistant, direct-harvest habit — not a fresh snap type, but matches the rust/anthracnose/BCMV resistance profile named for this app's region.",
      daysToMaturity: { min: 91, max: 91 },
      starting: "Direct-sow as with other dry beans; no cold-soil tolerance data found.",
      growing: "Carries the dominant I gene for BCMV resistance; highly resistant to rust (Ur-3 gene); resistant to Michigan anthracnose strains — the broadest disease-resistance profile among the varieties researched here.",
      harvesting: "Left to full dry-down rather than picked green; matures ~3 days earlier than comparable pinto varieties, with uniform dry-down.",
      sources: [
        { tier: "university-extension", title: "Santa Fe — New Pinto Bean for Michigan (E3070)", publisher: "Michigan State University Extension", url: "https://www.canr.msu.edu/uploads/resources/pdfs/santa_fe_-_new_pinto_bean_for_michigan_(e3070).pdf" },
      ],
    },
    {
      name: "Golden Wax",
      description: "Classic yellow wax-pod heirloom; straight, round-to-flat, bright golden 5-7in pods, consistently stringless.",
      daysToMaturity: { min: 50, max: 60 },
      starting: "Standard direct-sow; frost-sensitive like all snap beans.",
      growing: "Good resistance to BCMV noted by suppliers; adapted zones 3-10/11.",
      harvesting: "Pick at 5-7in for stringless tenderness; good fresh, canned, or in salads.",
      sources: [
        { tier: "seed-supplier", title: "Golden Wax Bush Bean", publisher: "Annie's Heirloom Seeds", url: "https://anniesheirloomseeds.com/products/golden-wax-bush-bean-phaseolus-vulgaris" },
      ],
    },
    {
      name: "Cherokee Wax",
      description: "1948 AAS winner bred at Clemson University; black-seeded plant, bright yellow 5-6in pods, mild sweet flavor.",
      daysToMaturity: { min: 50, max: 55 },
      starting: "Standard direct-sow.",
      growing: "Resistant to BCMV races 1 and 15, and to rust.",
      harvesting: "Pick at 5-6in while tender and crisp.",
      sources: [
        { tier: "blog", title: "Yellow Wax Bean Care: Growing Cherokee Wax Beans", publisher: "Gardening Know How", url: "https://www.gardeningknowhow.com/edible/vegetables/beans/cherokee-wax-beans.htm" },
      ],
    },
    {
      name: "Royal Burgundy",
      description: "Heirloom purple-podded type; round 5-6in bright violet-purple pods with buff seed; pods turn green when cooked; purple color makes ripe pods easy to spot against foliage.",
      daysToMaturity: { min: 51, max: 60 },
      starting: "Standard direct-sow.",
      growing: "Resistant to white mold and BCMV races 1 and NY15.",
      harvesting: "Purple color aids picking visibility; pods turn emerald green on cooking.",
      sources: [
        { tier: "seed-supplier", title: "Royal Burgundy Bush Bean Seeds", publisher: "Botanical Interests", url: "https://www.botanicalinterests.com/products/royal-burgundy-bush-bean-seeds" },
      ],
    },
    {
      name: "Royalty Purple Pod",
      description: "Older heirloom purple-podded type (distinct from Royal Burgundy); 5-6in bright purple pods that turn dark green when cooked.",
      daysToMaturity: { min: 50, max: 60 },
      starting: "Standard direct-sow.",
      growing: "BCMV-resistant; some growers report Mexican bean beetles tend to avoid the purple foliage/pods (anecdotal, not a confirmed lab-tested resistance).",
      harvesting: "Purple pods stand out for easy picking against green foliage.",
      sources: [
        { tier: "seed-supplier", title: "Royalty Purple Pod Bean", publisher: "Seed Savers Exchange", url: "https://shop.seedsavers.org/royalty-purple-pod-bean" },
      ],
    },
    {
      name: "Tavera",
      description: "French filet (haricot vert) type; slender, round, dark-green 4-5in pods with small white seeds; very tender/nutty.",
      daysToMaturity: { min: 54, max: 54 },
      starting: "Direct-sow; compact plants suit containers, no staking needed.",
      growing: "Resistant to anthracnose and BCMV.",
      harvesting: "Must be picked frequently at the petite \"extra-fine\" filet size (4-5in) — harvest size is the defining quality trait and pods fiber up fast if left too long.",
      sources: [
        { tier: "seed-supplier", title: "Tavera - Organic Bush Bean Seeds", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/beans/bush-beans/tavera-organic-bean-seed-19G.html" },
      ],
    },
    {
      name: "Maxibel",
      description: "First full-size bush filet bean on the market — pole-bean flavor/quality on a bush plant; straight dark-green pods to 6-8in x 1/4in wide on 22-26in plants.",
      daysToMaturity: { min: 60, max: 60 },
      starting: "Good container variety due to sturdy compact habit; standard direct-sow, frost-sensitive.",
      growing: "No specific disease-resistance claim found (contrast with Tavera).",
      harvesting: "Best picked at 6-8in while still slender (~1/4in diameter) for true filet texture; frequent picking keeps production going.",
      sources: [
        { tier: "seed-supplier", title: "Maxibel Bean Seed", publisher: "Territorial Seed", url: "https://territorialseed.com/products/bean-maxibel" },
      ],
    },
    {
      name: "Nickel",
      description: "Refined filet type producing abundant small, slender pods on sturdy compact plants.",
      starting: "Standard direct-sow; compact plants suit small spaces/containers.",
      growing: "No specific disease-resistance data found.",
      harvesting: "Pick at just 3-4in long and ~1/4in diameter — a narrower harvest window than standard snap beans, similar to Tavera.",
      sources: [
        { tier: "seed-supplier", title: "Nickel - Bush Bean Seeds", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/beans/bush-beans/nickel-bean-seed-3735.html" },
      ],
    },
    {
      name: "Derby",
      description: "Open-pollinated 1990 AAS winner; long straight round 7in pods, old-time deep flavor, holds well on the plant over an extended harvest period.",
      daysToMaturity: { min: 55, max: 57 },
      starting: "Standard direct-sow.",
      growing: "Resistant to lodging and to common bean mosaic virus; strong bush habit in field trials.",
      harvesting: "Extended harvest window — pods hold on the plant without toughening, unlike concentrated-set types like Strike.",
      sources: [
        { tier: "seed-supplier", title: "Bean Derby", publisher: "All-America Selections", url: "https://all-americaselections.org/product/bean-derby/" },
      ],
    },
    {
      name: "Jade",
      description: "High-yielding, notably heat-tolerant dark-green bean; long straight pods to 7in; upright habit holds pods off the ground.",
      daysToMaturity: { min: 55, max: 60 },
      starting: "Standard direct-sow.",
      growing: "Resistant to BCMV races 1 and NY15; tolerant of curly top virus and rust; thrives in heat/humidity — useful beyond the species' generic heat threshold for late-summer sowings.",
      harvesting: "Upright growth reduces pod curling and tip rot from ground contact.",
      sources: [
        { tier: "seed-supplier", title: "Jade Bush Bean", publisher: "Fedco Seeds", url: "https://fedcoseeds.com/seeds/jade-bush-bean-230" },
      ],
    },
    {
      name: "Slenderette",
      description: "Gourmet variety; sleek, rounded, bright-green 5in pods, no tough tips or fiber.",
      daysToMaturity: { min: 53, max: 56 },
      starting: "Standard direct-sow.",
      growing: "Proven resistance to bean mosaic virus and curly top virus.",
      harvesting: "Holds well on the plant without turning stringy — forgiving for gardeners who can't pick daily.",
      sources: [
        { tier: "seed-supplier", title: "'Classic Slenderette' Bush Beans", publisher: "Renee's Garden", url: "https://www.reneesgarden.com/products/bean-bush-slenderette" },
      ],
    },
    {
      name: "Velour",
      description: "First purple filet bean brought to market; straight, slender, vibrant purple 4-5in pods with light brown seed, turns green when cooked.",
      daysToMaturity: { min: 62, max: 62 },
      starting: "Standard direct-sow.",
      growing: "High resistance to bean mosaic virus and halo blight.",
      harvesting: "Pick at 4-5in filet size; purple pods aid visibility for picking, like other purple-podded types.",
      sources: [
        { tier: "seed-supplier", title: "Velour - Purple Bush Bean Seeds", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/beans/bush-beans/velour-bean-seed-2559.html" },
      ],
    },
    {
      name: "Dragon's Tongue",
      description: "Dutch heirloom (aka Merveille de Piemonte); flat yellow 7in pods streaked purple, streaks fade on cooking; can also be left on the plant to mature as a shelling/dry bean.",
      daysToMaturity: { min: 55, max: 80 },
      starting: "Standard direct-sow.",
      growing: "No specific disease-resistance claim found.",
      harvesting: "Pick young (55-60 days) for snap use with purple streaking intact, or leave to ~80 days to harvest as dry shell beans — two different crops off one planting.",
      sources: [
        { tier: "seed-supplier", title: "Dragon Tongue - Heirloom Bush Bean Seeds", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/beans/bush-beans/dragons-tongue-bean-seed-3175.html" },
      ],
    },
    {
      name: "Bronco",
      description: "High-yielding commercial-grade type; dark-green, glossy, round pods averaging ~5.5in long. LSU AgCenter lists it among recommended bush snap varieties for Louisiana growing conditions.",
      daysToMaturity: { min: 50, max: 60 },
      starting: "Standard direct-sow.",
      growing: "Resistant to rust and BCMV.",
      harvesting: "Noted for holding up well post-harvest for shipping — more durable than more delicate fresh-market types.",
      sources: [
        { tier: "seed-supplier", title: "Bronco", publisher: "Rupp Seeds", url: "https://www.ruppseeds.com/vegetables/products/beans/bush-green/bronco" },
        { tier: "university-extension", title: "Louisiana Vegetable Planting Guide (Pub. 1980)", publisher: "LSU AgCenter", url: "https://www.lsuagcenter.com/~/media/system/d/e/3/e/de3e7516e68dfee4a21a84b38caa4df8/p1980_lavegplantguiderev_ai0520kfontenot_finalpdf.pdf" },
      ],
    },
  ],
} satisfies Plant;

export default greenBean;
