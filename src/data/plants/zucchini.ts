import type { Plant } from "@/types/plant";

const zucchini = {
  id: "zucchini",
  commonName: "Zucchini",
  scientificName: "Cucurbita pepo",
  category: "vegetable",
  zones: { min: 3, max: 11 },
  sun: "full-sun",
  soil: "Rich, well-drained soil, heavy feeder",
  spacingInches: 36,
  daysToMaturity: { min: 45, max: 70 },
  water: {
    intervalDays: 2,
    drySpellThresholdIn: 1.5,
    notes: "Deep watering at the base; wet leaves invite powdery mildew.",
  },
  temperature: {
    frostThresholdF: 32,
    heatStressThresholdF: 95,
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
    "A fast, prolific summer squash that needs warm soil and plenty of room to sprawl.",
  careNotes: [
    "Harvest young and often (6-8in) — oversized fruit turns woody.",
    "Handpollinate in low-pollinator conditions if fruit fails to set.",
    "Watch for squash vine borers at the base of the stem.",
    "Seeds germinate from 60°F soil, but 70-95°F is optimal.",
  ],
  sources: [
    {
      title: "LSU AgCenter Pub. 2054: Squash and Pumpkins in the Home Garden",
      publisher: "LSU AgCenter",
      url: "https://www.lsuagcenter.com/~/media/system/4/4/f/5/44f5081425183c1dd8fc9c6a70be9cb6/2054squashandpumpkinsinthehomegarden%20rev%200417pdf.pdf",
    },
  ],
  regionalNotes: [
    {
      region: "Gulf South / Humid Subtropical",
      note: "Plant mid-March (south LA) to early April (north LA) once soil hits 60°F. Squash vine borer larvae overwinter in soil and emerge late May-June, so planting early — before infestations peak — is the main defense. Recommended varieties: Justice III, Independence II, Tigress, Spineless Beauty, Lynx, Senator.",
      source: {
        title: "Squash Vine Borers",
        publisher: "LSU AgCenter",
        url: "https://www.lsuagcenter.com/portals/blogs/southerngarden/squash-vine-borers",
      },
    },
    {
      region: "Cool Maritime Pacific NW",
      note: "Western Oregon's planting window runs early May to mid-July — much later and longer than the Gulf South's. Despite the mild climate, 12-15in of supplemental irrigation over the season may still be needed since PNW summers are dry.",
      source: {
        title: "Squash, Zucchini and Summer",
        publisher: "Oregon State University Extension",
        url: "https://horticulture.oregonstate.edu/oregon-vegetables/squash-zucchini-and-summer",
      },
    },
    {
      region: "Cold Continental (Northeast)",
      note: "Squash vine borer adults emerge later here (late June-early July) than in the Gulf South, shifting the early-planting escape strategy accordingly. Trap-cropping with Blue Hubbard squash nearby is recommended to draw borers away from the zucchini crop.",
      source: {
        title: "Squash Vine Borer Fact Sheet",
        publisher: "Cornell CALS",
        url: "https://cals.cornell.edu/integrated-pest-management/outreach-education/fact-sheets/squash-vine-borer-melittia-cucurbitae-vegetable-ipm-fact-sheet",
      },
    },
  ],
  varieties: [
    {
      name: "Black Beauty",
      description: "Classic heirloom (1920s) dark green, glossy-skinned zucchini — the type most commonly seen in grocery stores; mild, tender flavor.",
      daysToMaturity: { min: 45, max: 60 },
      starting: "No specific quirks beyond generic guidance.",
      growing: "Compact bush habit, fast-growing, high yielding; no notable disease-resistance package (open-pollinated heirloom).",
      harvesting: "Best picked at 6-8in long; open-pollinated so seed can be saved.",
      sources: [
        { tier: "seed-supplier", title: "Black Beauty Zucchini Seeds", publisher: "Baker Creek Heirloom Seeds", url: "https://www.rareseeds.com/squash-summer-zucchini-black-beauty" },
        { tier: "seed-supplier", title: "Black Beauty Zucchini Summer Squash", publisher: "Victory Seed Company", url: "https://victoryseeds.com/products/black-beauty-zucchini-summer-squash" },
      ],
    },
    {
      name: "Costata Romanesco",
      description: "Italian heirloom with gray-green ribbed skin flecked pale green; distinctly nutty flavor and creamy, firm texture — prized for both fruit and edible blossoms.",
      daysToMaturity: { min: 52, max: 62 },
      starting: "No specific quirks beyond generic guidance.",
      growing: "Vigorous vining/semi-trailing habit (less compact than typical bush zucchini); no widely cited disease-resistance package.",
      harvesting: "Ribbing makes it forgiving — holds quality slightly longer than smooth types before going tough, but best under 8in.",
      sources: [
        { tier: "seed-supplier", title: "Costata Romanesco Zucchini", publisher: "High Mowing Seeds", url: "https://www.highmowingseeds.com/organic-non-gmo-costata-romanesc-zucchini.html" },
        { tier: "seed-supplier", title: "Costata Romanesco - Heirloom zucchini Squash Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/squash/summer-squash/costata-romanesco-zucchini-squash-seed-2053.html" },
      ],
    },
    {
      name: "Dark Star",
      description: "Modern open-pollinated (non-hybrid) variety bred to match hybrid uniformity/yield without hybrid seed dependence; uniform dark-green fruit.",
      starting: "No specific quirks beyond generic guidance.",
      growing: "Open, compact bush canopy makes developing fruit easy to spot before oversizing; drought-tolerant with strong general disease/pest resistance; open-pollinated so seed-savable.",
      harvesting: "Open canopy is the key differentiator — fruit is easy to find while still small, reducing the \"giant zucchini\" problem common to denser-canopy varieties.",
      sources: [
        { tier: "seed-supplier", title: "Dark Star Zucchini Organic Seeds", publisher: "Hudson Valley Seed Company", url: "https://hudsonvalleyseed.com/products/dark-star-zucchini" },
        { tier: "seed-supplier", title: "Organic Non-GMO Dark Star Zucchini", publisher: "High Mowing Seeds", url: "https://www.highmowingseeds.com/organic-non-gmo-dark-star-zucchini.html" },
      ],
    },
    {
      name: "Raven",
      description: "F1 hybrid producing deep, glossy dark-green fruit noted for especially high lutein content; one of the best zucchini for container growing due to compact size.",
      daysToMaturity: { min: 48, max: 48 },
      starting: "No specific quirks beyond generic guidance.",
      growing: "Compact/manageable plant size suits containers and small beds; no notable disease-resistance package cited.",
      harvesting: "Standard 6-8in harvest window; being early, it fruits before many other hybrids.",
      sources: [
        { tier: "blog", title: "7 Best Heat Tolerant, Disease Resistant Zucchini Varieties", publisher: "Bountiful Gardener", url: "https://www.bountifulgardener.com/heat-tolerant-disease-resistant-zucchini-varieties/" },
      ],
    },
    {
      name: "Golden Zucchini",
      description: "Open-pollinated heirloom with vivid golden-yellow skin, slender cylindrical fruit, and mild flavor sweeter than green zucchini.",
      daysToMaturity: { min: 45, max: 60 },
      starting: "No specific quirks beyond generic guidance.",
      growing: "Compact 3-4ft bush plants — good fit for raised beds/small gardens; long harvest period; no notable disease package.",
      harvesting: "Pick at 6-8in for best tenderness; skin/flesh mild and small-seeded.",
      sources: [
        { tier: "seed-supplier", title: "Golden Zucchini Squash Seeds", publisher: "Baker Creek Heirloom Seeds", url: "https://www.rareseeds.com/squash-summer-zucchini-golden" },
      ],
    },
    {
      name: "Golden Glory",
      description: "F1 hybrid, dark yellow, cylindrical, smooth thin-skinned fruit with creamy-white flesh; semi-spineless plant for easier harvest.",
      daysToMaturity: { min: 50, max: 50 },
      starting: "No specific quirks beyond generic guidance.",
      growing: "Open, upright vigorous plant; intermediate resistance to powdery mildew, watermelon mosaic virus (WMV), and zucchini yellow mosaic virus (ZYMV).",
      harvesting: "Harvest at 7-8in; flesh described as \"meaty, not watery\" — holds quality well, good for grilling.",
      sources: [
        { tier: "seed-supplier", title: "Golden Glory - (F1) Zucchini Squash Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/squash/summer-squash/golden-glory-f1-zucchini-squash-seed-3837.html" },
      ],
    },
    {
      name: "Ronde de Nice",
      description: "French heirloom (introduced to North America in the 1850s) producing nearly spherical, deep-green fruit with light stripes/flecks — ideal for stuffing rather than slicing.",
      daysToMaturity: { min: 45, max: 60 },
      starting: "No specific quirks beyond generic guidance.",
      growing: "Standard bush habit; no notable disease-resistance package.",
      harvesting: "Pick young at 3-4in diameter for exceptionally tender, thin-skinned fruit suited to stuffing/roasting whole.",
      sources: [
        { tier: "seed-supplier", title: "'Ronde de Nice' Heirloom French Zucchini", publisher: "Renee's Garden", url: "https://www.reneesgarden.com/products/squash-zucchini-ronde-de-nice" },
      ],
    },
    {
      name: "Eight Ball",
      description: "F1 hybrid, perfectly round fruit with glossy, dark forest-green skin flecked white; 1999 All-America Selections winner; nutty/buttery flavor good for stuffing.",
      starting: "No specific quirks beyond generic guidance.",
      growing: "Bush habit, ~18in tall x 2ft wide, very productive vines.",
      harvesting: "Harvest at 3-4in diameter — becomes spongy quickly if left to grow larger (round shape hides size more than long types, so check more often).",
      sources: [
        { tier: "seed-supplier", title: "Eight Ball Zucchini Summer Squash Seeds", publisher: "Burpee", url: "https://www.burpee.com/squash-summer-eight-ball-zucchini-prod000913.html" },
        { tier: "seed-supplier", title: "Eight Ball Zucchini", publisher: "Fedco Seeds", url: "https://fedcoseeds.com/seeds/eight-ball-zucchini-1402" },
      ],
    },
    {
      name: "Sunburst",
      description: "Patty pan/scallop type, bright yellow with a dark-green \"sunburst\" pattern at blossom/stem ends; 1985 AAS winner. Creamy white, mild buttery flesh.",
      daysToMaturity: { min: 45, max: 55 },
      starting: "No specific quirks beyond generic guidance.",
      growing: "Space-saving bush plant; scalloped-edge fruit.",
      harvesting: "Best at 3-4in diameter (can be picked \"baby\" size too) — patty pans lose tenderness fast once past this size.",
      sources: [
        { tier: "seed-supplier", title: "Sunburst - (F1) Patty Pan Squash Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/squash/summer-squash/sunburst-f1-patty-pan-squash-seed-662.html" },
      ],
    },
    {
      name: "Peter Pan",
      description: "Miniature scallop/patty pan, light-green skin, meatier flesh than most patty pans; 1982 AAS winner.",
      daysToMaturity: { min: 50, max: 50 },
      starting: "No specific quirks beyond generic guidance.",
      growing: "Compact, vigorous, early-bearing bush plant.",
      harvesting: "Remains tender up to 5in diameter (more forgiving of oversizing than most patty pans) — pick young for best sweetness.",
      sources: [
        { tier: "seed-supplier", title: "Peter Pan (Scallop) Summer Squash Seeds", publisher: "Burpee", url: "https://www.burpee.com/squash-summer-peter-pan-hybrid-scallop-prod000916.html" },
      ],
    },
    {
      name: "Justice III",
      description: "F1 hybrid with long, smooth, glossy dark-green fruit; bred for a strong disease package on a vigorous, open bush plant.",
      daysToMaturity: { min: 41, max: 41 },
      starting: "Days-to-maturity figure is for direct seeding; expect faster fruiting than most other hybrids.",
      growing: "Resistant to Cucumber Mosaic Virus (CMV), Watermelon Mosaic Virus (WMV), and Zucchini Yellow Mosaic Virus (ZYMV); open bush habit for easy picking.",
      harvesting: "Standard 6-8in harvest window; very productive.",
      sources: [
        { tier: "seed-supplier", title: "Hybrid Green Zucchini Squash - Justice III", publisher: "Gowan Seed", url: "https://gowanseed.com/products/squash-zucchini-green-hybrid-justice-iii" },
      ],
    },
    {
      name: "Independence II",
      description: "F1 hybrid bred by Asgrow, notable for virus-resistance breeding rather than fruit novelty.",
      starting: "No specific quirks found.",
      growing: "Resistant to ZYMV and WMV-2; university disease trials found no significant difference vs. other zucchini for powdery mildew or Phytophthora crown rot — its resistance edge is specifically viral, not fungal.",
      harvesting: "Standard generic zucchini harvest guidance.",
      sources: [
        { tier: "university-extension", title: "Disease Tolerance of Zucchini and Yellow Squash Varieties", publisher: "University of Connecticut IPM (CAHNR)", url: "https://ipm.cahnr.uconn.edu/disease-tolerance-of-zucchini-and-yellow-squash-varieties/" },
      ],
    },
    {
      name: "Tigress",
      description: "F1 hybrid producing smooth medium-green fruit closely resembling \"Zucchini Elite\"; plant canopy is a bit more open than average, easing harvest.",
      daysToMaturity: { min: 50, max: 50 },
      starting: "Catalog explicitly notes subtracting ~14 days from the direct-seed maturity figure if starting via transplant.",
      growing: "Intermediate resistance to ZYMV and WMV; retains high yields later into the season as disease pressure builds, unlike some earlier-fading hybrids.",
      harvesting: "Standard 6-8in harvest size.",
      sources: [
        { tier: "seed-supplier", title: "Tigress - (F1) Zucchini Squash Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/squash/tigress-f1-zucchini-squash-seed-2973.html" },
      ],
    },
    {
      name: "Spineless Beauty",
      description: "F1 hybrid, \"Ambassador type\" medium-dark green fruit (7.5x1.5in), grown on plants with spineless petioles — the industry standard heavy-yielding green zucchini.",
      daysToMaturity: { min: 40, max: 47 },
      starting: "No specific quirks beyond generic guidance.",
      growing: "Spineless petioles make harvesting itch-free/scratch-free versus typical bristly zucchini foliage.",
      harvesting: "Standard harvest window; open plant habit aids visibility of fruit.",
      sources: [
        { tier: "seed-supplier", title: "Spineless Beauty Zucchini", publisher: "Fedco Seeds", url: "https://fedcoseeds.com/seeds/spineless-beauty-zucchini-1406" },
      ],
    },
    {
      name: "Senator",
      description: "Hybrid producing medium-green, cylindrical, blunt-ended fruit (6-7in).",
      daysToMaturity: { min: 60, max: 60 },
      starting: "No specific quirks beyond generic guidance.",
      growing: "Hybrid — seed cannot be reliably saved true-to-type; continues producing throughout the season.",
      harvesting: "Standard 6-8in harvest guidance.",
      sources: [
        { tier: "seed-supplier", title: "Senator Summer Squash", publisher: "Willhite Seed Co.", url: "https://www.willhiteseed.com/0239" },
      ],
    },
    {
      name: "Gold Rush",
      description: "F1 hybrid, AAS winner, introduced by Burpee in 1973; bright waxy golden-yellow skin with creamy white flesh, shape/taste of standard zucchini.",
      daysToMaturity: { min: 53, max: 53 },
      starting: "No specific quirks beyond generic guidance.",
      growing: "Very compact — each plant occupies only about 4sq ft, an upright open form for easy harvest, notably space-efficient versus sprawling types.",
      harvesting: "Standard harvest guidance; skin stays glossy/waxy at pick size.",
      sources: [
        { tier: "seed-supplier", title: "Gold Rush Hybrid Squash Seeds", publisher: "Park Seed", url: "https://parkseed.com/gold-rush-hybrid-squash-seeds/p/05331-PK-P1/" },
      ],
    },
    {
      name: "Payroll",
      description: "F1 hybrid bred for reduced spines on an open bush habit, with a strong disease package, 7in medium-green cylindrical fruit.",
      daysToMaturity: { min: 45, max: 47 },
      starting: "No specific quirks beyond generic guidance.",
      growing: "Resistant/tolerant to powdery mildew (Px), WMV, and ZYMV; open, reduced-spine habit makes picking notably easier than average.",
      harvesting: "Standard 6-8in harvest window; widely adaptable/stress tolerant.",
      sources: [
        { tier: "seed-supplier", title: "Payroll (Hybrid Summer Squash)", publisher: "Stokes Seeds", url: "https://www.stokeseeds.com/ca/payroll-hybrid-summer-squash-f296g-group" },
      ],
    },
    {
      name: "Zephyr",
      description: "F1 hybrid bred by Rob Johnston (Johnny's Selected Seeds, released 1999); distinctive slender fruit — yellow with faint white striping and a light-green blossom end.",
      daysToMaturity: { min: 54, max: 54 },
      starting: "Catalog explicitly notes subtracting ~14 days from the maturity figure if transplanting rather than direct sowing.",
      growing: "Upright, vigorous, high-yielding bush plant.",
      harvesting: "Harvest young at 4-6in for the variety's noted dense, nutty flavor — chef-favorite specifically because of flesh texture at this small size.",
      sources: [
        { tier: "seed-supplier", title: "Zephyr - (F1) Yellow Summer Squash Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/squash/summer-squash/zephyr-f1-yellow-summer-squash-seed-2217.html" },
      ],
    },
    {
      name: "Cocozelle",
      description: "Italian heirloom dating to the 1880s (\"Cocozella di Napoli\"), long cylindrical fruit with dark green skin and light-green stripes; firm greenish-white flesh.",
      daysToMaturity: { min: 42, max: 58 },
      starting: "No specific quirks beyond generic guidance.",
      growing: "Non-vining, semi-upright bush 18-24in tall; no notable disease-resistance package.",
      harvesting: "Best harvested under 6-8in long and 1.5-3in diameter — striping can mask overripeness slightly more than solid-green types.",
      sources: [
        { tier: "seed-supplier", title: "Cocozelle Ribbed And Striped Zucchini", publisher: "Fedco Seeds", url: "https://fedcoseeds.com/seeds/cocozelle-ribbed-and-striped-zucchini-1434" },
      ],
    },
    {
      name: "Green Machine",
      description: "USDA-certified-organic F1 hybrid producing high volumes of straight, dark-green 7-8in fruit on an open bush plant with moderate spines.",
      daysToMaturity: { min: 45, max: 45 },
      starting: "No specific quirks beyond generic guidance.",
      growing: "Intermediate resistance to CMV, powdery mildew, WMV, and ZYMV; matures 7-10 days earlier than Raven in side-by-side trials.",
      harvesting: "Standard 6-8in harvest guidance; very high fruit-to-plant ratio.",
      sources: [
        { tier: "seed-supplier", title: "Green Machine - Organic (F1) Zucchini Squash Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/squash/summer-squash/green-machine-organic-f1-zucchini-squash-seed-3279G.html" },
      ],
    },
  ],
} satisfies Plant;

export default zucchini;
