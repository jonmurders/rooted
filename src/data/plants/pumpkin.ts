import type { Plant } from "@/types/plant";

const pumpkin = {
  id: "pumpkin",
  commonName: "Pumpkin",
  scientificName: "Cucurbita pepo / C. maxima",
  category: "vegetable",
  zones: { min: 3, max: 9 },
  sun: "full-sun",
  soil: "Rich, well-drained soil, heavy feeder",
  spacingInches: 48,
  daysToMaturity: { min: 70, max: 120 },
  water: {
    intervalDays: 3,
    drySpellThresholdIn: 1.5,
    notes: "Deep, infrequent watering encourages strong roots; water at the base to limit mildew.",
  },
  temperature: {
    frostThresholdF: 32,
    heatStressThresholdF: 95,
  },
  plantingWindows: [
    {
      season: "fall",
      earliestWeeksFromFrost: -18,
      latestWeeksFromFrost: -13,
      method: "direct-sow",
    },
  ],
  description:
    "A sprawling, long-season vine grown for a fall harvest everywhere — timed backward from the first fall frost, not forward from the last spring one.",
  careNotes: [
    "Needs a long, warm season — count backward from your first fall frost to time planting.",
    "Give vines plenty of room or trellis smaller varieties.",
    "A killing frost ends the season abruptly; harvest mature fruit beforehand.",
    "Match variety length to your season: varieties over ~110-120 days risk not ripening before frost in shorter-season climates.",
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
      note: "Plant in summer (around July) for an autumn harvest — Louisiana's spring/early-summer heat delays fruit set if planted earlier. Named varieties span giant (Atlantic Giant), large 10-30lb (Howden, Spirit), and medium 5-10lb (Autumn Gold, Jack-o-Lantern) classes.",
      source: {
        title: "Pumpkin & Squash",
        publisher: "LSU AgCenter",
        url: "https://www.lsuagcenter.com/topics/lawn_garden/home_gardening/vegetables/individual%20crops/pumpkin_and_squash",
      },
    },
    {
      region: "Cold Continental (Upper Midwest)",
      note: "Sow late May-early June (or start indoors late April) — vine crops need soil at 65°F at 2in depth to germinate. Here the planting-date constraint is season length, not heat: long-season (110-120+ day) varieties may not ripen before fall frost.",
      source: {
        title: "Growing pumpkins and winter squash in home gardens",
        publisher: "University of Minnesota Extension",
        url: "https://extension.umn.edu/vegetables/pumpkins-and-winter-squash",
      },
    },
  ],
  varieties: [
    {
      name: "Atlantic Giant",
      description: "The classic giant/competition pumpkin, grown for record-breaking weight rather than eating or carving; can reach hundreds to 1000+ lbs under competitive conditions.",
      daysToMaturity: { min: 110, max: 160 },
      starting: "Start seed indoors or direct sow after soil warms; growers often start seed early to maximize the growing season for size.",
      growing: "Requires far more space than generic pumpkin spacing — plants need 70+ sq ft per plant, vines sown 4-5ft apart, and heavy feeding/watering to support massive fruit.",
      harvesting: "Harvested by weight goal rather than color/rind hardness alone; 200-300lb fruit common with wide spacing, competition specimens far larger.",
      sources: [
        { tier: "seed-supplier", title: "Atlantic Giant - Giant Pumpkin Seeds", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/pumpkins/giant-pumpkins/atlantic-giant-f1-pumpkin-seed-4428.51.html" },
        { tier: "blog", title: "How to Grow a Giant Pumpkin", publisher: "The Old Farmer's Almanac", url: "https://www.almanac.com/how-grow-giant-pumpkin" },
      ],
    },
    {
      name: "Big Max",
      description: "Large all-purpose giant, popular at pumpkin patches/roadside stands; used for carving, decoration, and cooking (pies, canning) unlike pure-competition giants.",
      daysToMaturity: { min: 105, max: 120 },
      starting: "Standard direct sow after soil warms.",
      growing: "Deeply ribbed, thick rind (3-4in flesh) that stores well; full sun, fertile well-draining soil pH 6.0-7.5.",
      harvesting: "Typically 50-100lbs, occasionally up to 200lbs; thick rind favors longer storage than thinner-skinned carving types.",
      sources: [
        { tier: "blog", title: "Big Max pumpkin", publisher: "Home for the Harvest", url: "https://homefortheharvest.com/big-max-pumpkin/" },
      ],
    },
    {
      name: "Prizewinner",
      description: "Hybrid giant/competition type producing bright orange, classic-shaped fruit; a step below true record-chasing genetics like Atlantic Giant but still very large.",
      daysToMaturity: { min: 120, max: 120 },
      starting: "Same giant-pumpkin starting approach as Atlantic Giant (early start, wide hills).",
      growing: "Shallow-ribbed, glossy red-orange skin; needs generous space like other giant types.",
      harvesting: "Fruit commonly 75-150lbs depending on growing conditions.",
      sources: [
        { tier: "seed-supplier", title: "PrizeWinner Giant Pumpkin", publisher: "Hoss Tools", url: "https://hosstools.com/products/prizewinner-giant-pumpkin" },
      ],
    },
    {
      name: "Connecticut Field",
      description: "Historic pre-1700 American heirloom, often called the original commercial jack-o'-lantern pumpkin; classic round carving type also used for pies/purees.",
      daysToMaturity: { min: 90, max: 110 },
      starting: "No special requirements; standard heirloom open-pollinated seed saving possible.",
      growing: "Shallow-ribbed fruit, hard but thin rind; benefits from consistent watering and mulching.",
      harvesting: "Typically 15-25lbs, about 12in tall and wide.",
      sources: [
        { tier: "seed-supplier", title: "Connecticut Field Pumpkin", publisher: "Victory Seed Company", url: "https://victoryseeds.com/products/connecticut-field-pumpkin" },
      ],
    },
    {
      name: "Howden",
      description: "The modern \"original\" Jack O'Lantern carving pumpkin, bred in the Berkshires in the mid-1970s; the industry-standard patch/carving pumpkin.",
      daysToMaturity: { min: 95, max: 120 },
      starting: "Standard direct sow; widely used as the commercial carving-pumpkin benchmark variety.",
      growing: "Deep ribs, large seed cavity, thick sturdy stem/handle good for display and hauling.",
      harvesting: "Smooth rind ideal for painting/carving; not recommended for cooking (bland/stringy flesh) compared to pie types.",
      sources: [
        { tier: "seed-supplier", title: "Organic Non-GMO Howden Pumpkin", publisher: "High Mowing Seeds", url: "https://www.highmowingseeds.com/organic-non-gmo-howden-pumpkin.html" },
        { tier: "university-extension", title: "Patience, Persistence Produce Prodigious Pumpkins", publisher: "UGA CAES Newswire", url: "https://newswire.caes.uga.edu/story/502/pumpkin-patience.html" },
      ],
    },
    {
      name: "Spirit",
      description: "Semi-bush F1 hybrid carving pumpkin bred for smaller garden footprint than vining types like Howden/Connecticut Field.",
      daysToMaturity: { min: 90, max: 98 },
      starting: "Standard direct sow; suited to smaller gardens/raised beds due to compact habit.",
      growing: "Semi-bush plant puts more energy into fruit than vine growth, needing much less space than sprawling carving varieties.",
      harvesting: "Medium fruit, 10-16lbs, round to slightly rectangular, nicely ribbed classic orange color.",
      sources: [
        { tier: "blog", title: "Pumpkin Varieties You'll Love to Grow", publisher: "Harvest to Table", url: "https://harvesttotable.com/pumpkin-varieties-youll-love-to-grow/" },
      ],
    },
    {
      name: "Jack O'Lantern",
      description: "Generic/branded classic carving type — round, rich orange, moderately ribbed with thick walls for sturdy carving.",
      daysToMaturity: { min: 100, max: 115 },
      starting: "Can be started via transplant or direct seed; transplanting shaves several days off maturity.",
      growing: "Thick flesh walls (1.5-2in) make it durable for carving yet still edible.",
      harvesting: "12-20+ lbs, averaging 14-18lbs.",
      sources: [
        { tier: "seed-supplier", title: "Pumpkin, Jack O Lantern", publisher: "Burpee", url: "https://www.burpee.com/pumpkin-jack-o-lantern-prod000862.html" },
      ],
    },
    {
      name: "Autumn Gold",
      description: "AAS award-winning early-maturing semi-bush hybrid, notable for turning golden-orange weeks before full harvest.",
      daysToMaturity: { min: 70, max: 90 },
      starting: "Good candidate for shorter growing seasons or later plantings given its early maturity.",
      growing: "Semi-bush, vines only ~5ft long (much less space than vining carving types); 3-5 fruits per vine.",
      harvesting: "7-10lb fruit; early color change is a visual ripeness cue distinct from other carving types.",
      sources: [
        { tier: "seed-supplier", title: "Pumpkin, Autumn Gold Bush Hybrid", publisher: "Jung Seed", url: "https://www.jungseed.com/product/J03250/565" },
        { tier: "blog", title: "9 Fast-Growing Pumpkins You Can Plant in July", publisher: "Epic Gardening", url: "https://www.epicgardening.com/fast-growing-pumpkins-july/" },
      ],
    },
    {
      name: "Small Sugar",
      description: "Pre-1860 heirloom pie pumpkin; the archetypal \"sugar pumpkin\" — fine-grained, very sweet, deep-yellow flesh bred for baking rather than size/carving.",
      daysToMaturity: { min: 95, max: 110 },
      starting: "Standard direct sow; open-pollinated so seed can be saved true-to-type.",
      growing: "Prolific — 4-6 fruits per vine, each 7-10in diameter.",
      harvesting: "5-8lbs; larger specimens can double as small jack-o-lanterns.",
      sources: [
        { tier: "seed-supplier", title: "Small Sugar Pumpkin (Heirloom 95 Days)", publisher: "Pinetree Garden Seeds", url: "https://www.superseeds.com/products/small-sugar-pumpkin-95-days-heirloom" },
      ],
    },
    {
      name: "New England Pie",
      description: "1863 American heirloom, essentially synonymous with/derived from Small Sugar; regarded by seed suppliers as a top pie-making variety, also usable for small jack-o-lanterns.",
      daysToMaturity: { min: 95, max: 105 },
      starting: "Standard direct sow, open-pollinated.",
      growing: "Small round fruit; no unusual space requirements versus generic pumpkin.",
      harvesting: "4-6lbs, dark orange, fine sweet flesh ideal for puree/pie.",
      sources: [
        { tier: "seed-supplier", title: "New England Pie - Heirloom & Organic Pumpkin Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/pumpkins/pie-pumpkins/new-england-pie-organic-pumpkin-seed-592G.html" },
      ],
    },
    {
      name: "Cinderella (Rouge Vif d'Étampes)",
      description: "French heirloom (the most popular Parisian market pumpkin of the 1880s), flattened deep-red-orange \"Cinderella carriage\" shape; ornamental/culinary dual-use, distinct from round carving types.",
      daysToMaturity: { min: 95, max: 110 },
      starting: "Open-pollinated heirloom seed, standard direct sow.",
      growing: "Cucurbita maxima; flattened, deeply lobed form differs structurally from Cucurbita pepo carving pumpkins.",
      harvesting: "Harvested for both ornamental display and cooking; flesh reputed to be good for soups/pies despite mainly ornamental marketing.",
      sources: [
        { tier: "seed-supplier", title: "Rouge Vif D'Etampes - Heirloom Red Pumpkin Seeds", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/pumpkins/specialty-pumpkins/rouge-vif-detampes-pumpkin-seed-614.html" },
      ],
    },
    {
      name: "Baby Pam",
      description: "Small, uniform pie pumpkin bred specifically for smooth pie filling and attractive fall-display size.",
      daysToMaturity: { min: 100, max: 105 },
      starting: "Standard direct sow.",
      growing: "Vigorous 10-12ft vines despite small fruit size; heavy yielding.",
      harvesting: "Uniform 5inx5.5in fruit, 3-4lbs; stringless sugary flesh cooks to smooth puree.",
      sources: [
        { tier: "seed-supplier", title: "Baby Pam Culinary Pumpkin", publisher: "Fedco Seeds", url: "https://fedcoseeds.com/seeds/baby-pam-culinary-pumpkin-1711" },
      ],
    },
    {
      name: "Sugar Pie",
      description: "Widely-sold generic name for small, sweet pie pumpkins (closely related to/often used interchangeably with Small Sugar); flattened-round 7-10in fruit.",
      daysToMaturity: { min: 85, max: 100 },
      starting: "Standard direct sow, no special requirements.",
      growing: "Compact plant relative to carving vines; typically higher yield of smaller fruit per plant.",
      harvesting: "Fine-grained yellow flesh valued for pies/canning over eating fresh or carving.",
      sources: [
        { tier: "blog", title: "How To Grow Sugar Pie Pumpkin From Seed", publisher: "Gardeners Basics", url: "https://www.gardenersbasics.com/tools/blog/how-to-grow-sugar-pie-pumpkin-from-seed" },
      ],
    },
    {
      name: "Fairytale (Musquée de Provence)",
      description: "Southern-France heirloom, large flattened wheel-of-cheese shape, deeply ribbed; grown for exceptional flavor and long storage rather than carving.",
      daysToMaturity: { min: 90, max: 120 },
      starting: "Standard direct sow, longer-season variety.",
      growing: "Large sprawling Cucurbita moschata vines; needs full season warmth.",
      harvesting: "15-20lbs, 12-18in diameter; stores up to 3 months — notably longer keeping than typical carving pumpkins.",
      sources: [
        { tier: "seed-supplier", title: "Musquee de Provence - Heirloom Pumpkin Seeds", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/pumpkins/specialty-pumpkins/musquee-de-provence-pumpkin-seed-2621.html" },
      ],
    },
    {
      name: "Long Island Cheese",
      description: "Early-1800s heirloom (Cucurbita moschata) named for its flattened, tan, wheel-of-cheese appearance; a top choice for cooking/pie among heirloom growers.",
      daysToMaturity: { min: 100, max: 105 },
      starting: "Standard direct sow; open-pollinated seed-saving variety.",
      growing: "A moschata species — generally more resistant to squash vine borer than pepo/maxima pumpkins, a species-level trait worth noting.",
      harvesting: "Smaller than most storage pumpkins at 6-10lbs; buff/tan smooth skin distinct from orange carving types.",
      sources: [
        { tier: "blog", title: "Long Island Cheese pumpkin", publisher: "Home for the Harvest", url: "https://homefortheharvest.com/long-island-cheese-pumpkin/" },
      ],
    },
    {
      name: "Casper",
      description: "White-skinned carving/pie dual-use pumpkin with smoother, less-ribbed rind than other white varieties (e.g., Lumina); mild flesh good for pies.",
      daysToMaturity: { min: 90, max: 110 },
      starting: "Requires the same long season as standard carving types.",
      growing: "Slightly flattened fruit, 8-10in tall.",
      harvesting: "10-12+ lbs; white types should be cured out of direct sun to avoid yellowing.",
      sources: [
        { tier: "seed-supplier", title: "Casper Pumpkin (100 Days)", publisher: "Pinetree Garden Seeds", url: "https://www.superseeds.com/products/casper-pumpkin-100-days" },
      ],
    },
    {
      name: "Lumina",
      description: "Ghostly-white-skinned pumpkin (orange flesh) popular for novelty carving/painting and mixed white-orange fall displays.",
      daysToMaturity: { min: 85, max: 100 },
      starting: "Available as both open-pollinated and F1 hybrid seed.",
      growing: "Standard vine habit; no unusual space needs beyond generic pumpkin spacing.",
      harvesting: "10-15lbs; smooth texture, sweet flavor suited to baking despite white skin.",
      sources: [
        { tier: "seed-supplier", title: "Lumina Pumpkin Seeds", publisher: "Burpee", url: "https://www.burpee.com/pumpkin-lumina-prod000863.html" },
      ],
    },
    {
      name: "Jarrahdale",
      description: "Australian heirloom (Cucurbita maxima) with distinctive blue-grey, deeply ribbed, drum-shaped rind; grown as much for storage/cooking as decoration.",
      daysToMaturity: { min: 95, max: 110 },
      starting: "Standard direct sow; long-season variety.",
      growing: "Medium-large fruit 6-20lbs; dense, dry, nearly stringless flesh.",
      harvesting: "Exceptional keeper — cures 10-14 days then stores up to a year or more, notably longer than most carving/pie pumpkins.",
      sources: [
        { tier: "seed-supplier", title: "Jarrahdale - Heirloom Pumpkin Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/pumpkins/specialty-pumpkins/jarrahdale-pumpkin-seed-3150.html" },
      ],
    },
    {
      name: "Wolf",
      description: "Heirloom bred by a Western New York farmer; deep-orange, round pumpkin known for massive, extra-thick dark-green handles.",
      daysToMaturity: { min: 120, max: 120 },
      starting: "Standard direct sow; long-season variety needing full-length growing window.",
      growing: "Give as much space as possible — recommended 36-72in in-row and 12ft between rows, more generous than typical carving-type spacing.",
      harvesting: "16-24lbs with moderate ribs; distinguishing feature is the oversized sturdy handle prized for display.",
      sources: [
        { tier: "seed-supplier", title: "Wolf Pumpkin Seeds", publisher: "Holmes Seed Company", url: "https://www.holmesseed.com/wolf/" },
      ],
    },
    {
      name: "Gladiator",
      description: "Modern hybrid carving pumpkin bred for uniform size/shape and improved powdery mildew resistance — a disease-resistance improvement over older open-pollinated carving types.",
      daysToMaturity: { min: 100, max: 115 },
      starting: "Standard direct sow; semi-vine habit.",
      growing: "Homozygous intermediate resistance to powdery mildew, a meaningful disease-management advantage over heirloom carving varieties like Connecticut Field or Howden.",
      harvesting: "20-25lb fruit, 13inx12in, moderate ribbing, long thick handles good for display/carving.",
      sources: [
        { tier: "seed-supplier", title: "Gladiator Pumpkin Seeds – High Performance Hybrid", publisher: "Stokes Seeds", url: "https://www.stokeseeds.com/products/gladiator-pumpkin-hybrid-seed" },
      ],
    },
  ],
} satisfies Plant;

export default pumpkin;
