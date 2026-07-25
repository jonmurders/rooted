import type { Plant } from "@/types/plant";

const tomato = {
  id: "tomato",
  commonName: "Tomato",
  scientificName: "Solanum lycopersicum",
  category: "vegetable",
  zones: { min: 3, max: 11 },
  sun: "full-sun",
  soil: "Rich, well-drained loam, pH 6.0-6.8",
  spacingInches: 24,
  daysToMaturity: { min: 50, max: 85 },
  water: {
    intervalDays: 2,
    drySpellThresholdIn: 1,
    notes: "Deep, consistent watering prevents blossom-end rot. Water at the base, not the leaves.",
  },
  temperature: {
    frostThresholdF: 32,
    heatStressThresholdF: 94,
  },
  plantingWindows: [
    {
      season: "spring",
      earliestWeeksFromFrost: 1,
      latestWeeksFromFrost: 6,
      method: "transplant",
    },
    {
      season: "fall",
      earliestWeeksFromFrost: -18,
      latestWeeksFromFrost: -14,
      method: "transplant",
    },
  ],
  description:
    "A warm-season staple grown as an annual almost everywhere. Needs heat and steady moisture to set fruit.",
  careNotes: [
    "Stake or cage early to support heavy vines.",
    "Pinch suckers on indeterminate varieties for bigger fruit.",
    "Fruit set slows above ~90°F and stops around 94°F, or when nights stay above 75°F — pollen clumps in the heat. This is normal, not a problem to fix.",
    "In short-season climates, pick 45-70 day varieties so fruit finishes before fall frost.",
  ],
  sources: [
    {
      title: "Growing Great Home Garden Tomatoes",
      publisher: "LSU AgCenter",
      url: "https://www.lsuagcenter.com/profiles/lbenedict/articles/page1468953548243",
    },
    {
      title: "LSU AgCenter Pub. 1902: Tomatoes",
      publisher: "LSU AgCenter",
      url: "https://www.lsuagcenter.com/~/media/system/f/a/2/5/fa25b59d25c9d8ad93142283f4a311be/1902%20tomatoes%20rev%200417pdf.pdf",
    },
  ],
  regionalNotes: [
    {
      region: "Gulf South / Humid Subtropical",
      note: "Use heat-set determinate cultivars (Florida 91, Phoenix, Solar Fire, Bella Rosa, Heatwave II, Sunmaster) for both crops. Spring transplants go in mid-March (south LA) to April 1 (north LA); a fall crop is transplanted July-early August for an October harvest ahead of frost.",
      source: {
        title: "Growing Great Home Garden Tomatoes",
        publisher: "LSU AgCenter",
        url: "https://www.lsuagcenter.com/profiles/lbenedict/articles/page1468953548243",
      },
    },
    {
      region: "Hot/Arid Southwest",
      note: "Fruit set slows at 90°F daytime and stops at 94°F, or once nights stay above 75°F. Short-season varieties (45-70 days) fit the two short low-desert planting windows, and early spring transplants need active frost protection (e.g. row cover or water-filled plant sleeves).",
      source: {
        title: "Tomato Challenges",
        publisher: "University of Arizona Cooperative Extension",
        url: "https://extension.arizona.edu/publication/tomato-challenges",
      },
    },
    {
      region: "Cold Continental (Upper Midwest)",
      note: "Choose varieties maturing in 65-75 days so fruit finishes before the first September chill. Early blight commonly appears mid-to-late June — space plants for airflow and mulch to stop soil from splashing onto lower leaves.",
      source: {
        title: "Growing tomatoes in home gardens",
        publisher: "University of Minnesota Extension",
        url: "https://extension.umn.edu/vegetables/growing-tomatoes",
      },
    },
  ],
  varieties: [
    {
      name: "Brandywine",
      description:
        "Classic potato-leaf heirloom (Sudduth's Strain, dating to 1885) producing large pink beefsteak fruit up to 1.5lb with rich, complex, sweet-acidic flavor; widely considered a top-flavor heirloom.",
      daysToMaturity: { min: 80, max: 100 },
      starting: "Same as generic species guidance; its long season means short-season gardeners should start it as early as their frost calendar allows.",
      growing:
        "Potato-leaf foliage looks different from typical tomato leaves (don't mistake for disease); medium-tall vigorous vines need sturdy staking. No notable disease-resistance package, so watch for early blight/Septoria in humid climates.",
      harvesting: "Pick at deep pink-red skin with smooth red flesh; fruit is slow to finish, and prone to cracking after heavy rain near ripeness.",
      sources: [
        { tier: "seed-supplier", title: "Brandywine Tomato Seeds", publisher: "Baker Creek Heirloom Seeds", url: "https://www.rareseeds.com/tomato-brandywine-sudduth-s-strain" },
        { tier: "seed-supplier", title: "Brandywine - Heirloom & Organic Tomato Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/tomatoes/heirloom-tomatoes/brandywine-organic-tomato-seed-2845.html" },
      ],
    },
    {
      name: "Cherokee Purple",
      description:
        "Pre-1890 Cherokee heirloom with dusky brownish-purple/rose skin, dark green shoulders, brick-red flesh, and superb sweet flavor; fruit averages 10-13oz.",
      daysToMaturity: { min: 75, max: 90 },
      starting: "No special treatment beyond generic guidance.",
      growing: "Vigorous vines need staking; no widely-marketed disease-resistance codes, so it's more vulnerable to soil-borne wilts than modern hybrids — rotate beds.",
      harvesting: "Ripeness cue differs from red tomatoes — fruit stays dusky purple-pink with a greenish tinge near the stem even when fully ripe; don't wait for red color that will never come.",
      sources: [
        { tier: "seed-supplier", title: "Cherokee Purple Tomato Seeds", publisher: "Baker Creek Heirloom Seeds", url: "https://www.rareseeds.com/tomato-cherokee-purple" },
        { tier: "seed-supplier", title: "Cherokee Purple Tomato Seed", publisher: "Territorial Seed", url: "https://territorialseed.com/products/tomato-cherokee-purple" },
      ],
    },
    {
      name: "Mortgage Lifter",
      description:
        "1930s West Virginia heirloom prized for massive pink-red beefsteak fruit (often 1+ lb) with meaty, low-seed texture.",
      daysToMaturity: { min: 80, max: 85 },
      starting: "No special treatment beyond generic guidance.",
      growing: "Very vigorous vines need heavy-duty staking for fruit weight; no disease-resistance package as an old open-pollinated heirloom.",
      harvesting: "Fruit size (up to 1-2lb) means fewer tomatoes per plant but large individual yield; harvest at full pink-red color for best flavor.",
      sources: [
        { tier: "seed-supplier", title: "Mortgage Lifter Tomato (Heirloom, 77 Days)", publisher: "Pinetree Garden Seeds", url: "https://www.superseeds.com/products/mortgage-lifter-tomato-77-days" },
        { tier: "blog", title: "What Are Mortgage Lifter Tomatoes", publisher: "Gardening Know How", url: "https://www.gardeningknowhow.com/edible/vegetables/tomato/growing-mortgage-lifter-tomatoes.htm" },
      ],
    },
    {
      name: "Better Boy",
      description:
        "Popular VFN hybrid slicer with 6-10oz fruit; resistant to Verticillium wilt, Fusarium wilt, nematodes, plus gray leaf spot and Alternaria stem canker.",
      daysToMaturity: { min: 70, max: 75 },
      starting: "No special treatment beyond generic guidance.",
      growing: "Its VFN resistance package is the key differentiator — good pick for gardens with a history of soil-borne wilts or nematodes; still needs staking.",
      harvesting: "Reliable heavy producer; harvest at full red for best flavor, standard slicer use.",
      sources: [
        { tier: "seed-supplier", title: "Better Boy VFN Hybrid Tomato", publisher: "Tomato Growers Supply Company", url: "https://tomatogrowers.com/products/better-boy-vfn-hybrid" },
        { tier: "blog", title: "Guide to Growing Better Boy Tomatoes", publisher: "Gardening Channel", url: "https://www.gardeningchannel.com/guide-to-growing-better-boy-tomatoes/" },
      ],
    },
    {
      name: "Big Beef",
      description:
        "1994 AAS-winning hybrid beefsteak with broad VFFNTASt disease resistance (Verticillium, Fusarium races 1&2, nematodes, tobacco mosaic virus, Alternaria, gray leaf spot); extra-large, extra-meaty fruit at roughly double typical yield.",
      daysToMaturity: { min: 70, max: 75 },
      starting: "No special treatment beyond generic guidance.",
      growing: "One of the earliest hybrids to stack this many disease-resistance genes — good choice where multiple soil-borne diseases coexist; robust vines require sturdy support.",
      harvesting: "Large beefsteak-type fruit; harvest at full red for classic slicing use.",
      sources: [
        { tier: "seed-supplier", title: "Tomato Big Beef F1", publisher: "All-America Selections", url: "https://all-americaselections.org/product/tomato-big-beef/" },
        { tier: "seed-supplier", title: "Big Beef Hybrid Tomato Seeds", publisher: "Park Seed", url: "https://www.parkseed.com/products/big-beef-hybrid-tomato-seeds-05433" },
      ],
    },
    {
      name: "Celebrity",
      description:
        "1984 AAS-winning VFFNTASt hybrid, one of the most disease-resistant award-winning tomatoes ever released; classified determinate but often keeps producing until frost (sometimes labeled semi-determinate).",
      daysToMaturity: { min: 70, max: 72 },
      starting: "No special treatment beyond generic guidance.",
      growing: "Its semi-determinate habit means it benefits from light staking despite being a \"determinate\" — don't assume it needs zero support.",
      harvesting: "Mid-season producer with a long harvest window because it continues setting fruit past the typical determinate cutoff; harvest at full red.",
      sources: [
        { tier: "seed-supplier", title: "Tomato Celebrity hybrid", publisher: "All-America Selections", url: "https://all-americaselections.org/product/tomato-celebrity-hybrid/" },
        { tier: "blog", title: "Celebrity Tomatoes: Tomato of the Month", publisher: "Tomato Dirt", url: "https://www.tomatodirt.com/celebrity-tomatoes.html" },
      ],
    },
    {
      name: "Early Girl",
      description:
        "Widely grown F1 globe-type hybrid known for earliness (tennis-ball sized, 4-8oz fruit); resistant to Fusarium wilt races 1&2 and Verticillium wilt.",
      daysToMaturity: { min: 50, max: 62 },
      starting: "No special treatment, but its short days-to-maturity makes it a good fit for short-season climates or gardeners wanting the first ripe fruit of the season.",
      growing: "Despite \"Early\" in the name it grows tall and still needs full-season staking, not a compact/patio type.",
      harvesting: "Ripens well ahead of most slicers; good choice to extend the harvest window earlier in the season alongside later main-crop varieties.",
      sources: [
        { tier: "seed-supplier", title: "Early Girl - (F1) Tomato Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/tomatoes/slicing-tomatoes/early-girl-f1-tomato-seed-3995.html" },
        { tier: "blog", title: "Early Girl Tomato: How to Grow Healthy Tomato Plants", publisher: "MasterClass", url: "https://www.masterclass.com/articles/early-girl-tomato-care-guide" },
      ],
    },
    {
      name: "Beefsteak",
      description:
        "The archetypal large red slicing heirloom, a household name since the 1890s; massive 10oz-2lb oblate fruit, 4-5in across, classic juicy tomato flavor.",
      daysToMaturity: { min: 80, max: 90 },
      starting: "No special treatment beyond generic guidance.",
      growing: "Needs a heavy-duty cage or trellis given fruit weight; no disease-resistance package as an old heirloom-type.",
      harvesting: "Very large individual fruit means lower fruit count per plant but big slices; pick at full red.",
      sources: [
        { tier: "blog", title: "The 15 Best Beefsteak Tomatoes To Grow", publisher: "Food Gardening Network", url: "https://foodgardening.mequoda.com/daily/vegetable-gardening/the-best-beefsteak-tomatoes-to-grow/" },
        { tier: "blog", title: "Beefsteak tomato", publisher: "Home for the Harvest", url: "https://homefortheharvest.com/beefsteak-tomato/" },
      ],
    },
    {
      name: "Roma",
      description:
        "The standard paste/plum tomato: 2oz egg-shaped fruit, thick meaty walls, low juice/seed content ideal for sauce, paste, and canning. VF-resistant (Verticillium, Fusarium).",
      daysToMaturity: { min: 75, max: 80 },
      starting: "No special treatment beyond generic guidance.",
      growing: "Determinate/compact habit needs less staking than indeterminate slicers and suits smaller spaces or large-batch canning plantings; VF resistance helps in wilt-prone soil.",
      harvesting: "All fruit ripens in a concentrated window (typical of determinates) — plan for a batch harvest for canning rather than a season-long trickle.",
      sources: [
        { tier: "seed-supplier", title: "Organic Non-GMO Roma VF Paste Tomato", publisher: "High Mowing Seeds", url: "https://www.highmowingseeds.com/organic-non-gmo-roma-vf-paste-tomato.html" },
        { tier: "seed-supplier", title: "Roma VF Tomato", publisher: "Victory Seed Company", url: "https://victoryseeds.com/products/roma-vf-tomato" },
      ],
    },
    {
      name: "San Marzano",
      description:
        "Italian heirloom paste tomato from Campania; thinner, more pointed fruit than Roma with thicker flesh, fewer seeds, and a sweeter, less acidic, stronger flavor prized for sauce. Vigorous vines to ~6ft.",
      daysToMaturity: { min: 80, max: 85 },
      starting: "Its longer season means it benefits from a slightly earlier indoor start than determinate paste types like Roma.",
      growing: "Taller and more vine-like than Roma — needs real staking/caging, not just a small cage; vigorous vines produce large clusters.",
      harvesting: "Harvest continues through the season (vs. Roma's concentrated set); prized specifically for sauce/canning quality over fresh eating.",
      sources: [
        { tier: "seed-supplier", title: "San Marzano II - Heirloom & Organic Paste Tomato Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/tomatoes/heirloom-tomatoes/san-marzano-ii-organic-tomato-seed-3405G.html" },
        { tier: "seed-supplier", title: "Organic Non-GMO San Marzano Paste Tomato", publisher: "High Mowing Seeds", url: "https://www.highmowingseeds.com/organic-non-gmo-san-marzano-paste-tomato.html" },
      ],
    },
    {
      name: "Amish Paste",
      description:
        "Pennsylvania Dutch heirloom (c. 1870) bridging paste and beefsteak qualities — large for a paste type (8-12oz), deep red, pointed/heart-shaped, dense and meaty yet sweet enough for fresh slicing.",
      daysToMaturity: { min: 80, max: 90 },
      starting: "No special treatment beyond generic guidance.",
      growing: "Vigorous vines need staking; no marketed disease-resistance codes as an open-pollinated heirloom.",
      harvesting: "Larger fruit size than typical paste tomatoes means fewer per plant but more versatile use (sauce or fresh slicing).",
      sources: [
        { tier: "seed-supplier", title: "Amish Paste - Heirloom & Organic Tomato Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/tomatoes/paste-tomatoes/amish-paste-organic-tomato-seed-3817G.html" },
        { tier: "seed-supplier", title: "Organic Non-GMO Amish Paste Tomato", publisher: "High Mowing Seeds", url: "https://www.highmowingseeds.com/organic-non-gmo-amish-paste-tomato.html" },
      ],
    },
    {
      name: "Sun Gold",
      description:
        "F1 hybrid cherry tomato with intensely sweet, tangerine-orange fruit and minimal acidity — often described as tasting like candy or tropical fruit rather than a typical tomato.",
      daysToMaturity: { min: 57, max: 65 },
      starting: "No special treatment beyond generic guidance.",
      growing: "Long, vigorous vines need full staking/trellising like a full-size slicer despite small fruit; very productive all season.",
      harvesting: "Fruit splits/cracks easily and is thin-skinned — harvest promptly at full orange color rather than letting it sit on the vine.",
      sources: [
        { tier: "seed-supplier", title: "Sungold Cherry Tomato Seeds", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/tomatoes/cherry-tomatoes/sun-gold-f1-tomato-seed-770.html" },
        { tier: "seed-supplier", title: "Sun Gold Hybrid Cherry Tomato Seeds and Plants", publisher: "Burpee", url: "https://www.burpee.com/tomato-sun-gold-hybrid-prod001012.html" },
      ],
    },
    {
      name: "Sweet 100",
      description:
        "Very popular red F1 cherry hybrid producing long branching clusters that can hold dozens of small, sweet fruit each. Vigorous vines 6-10ft.",
      daysToMaturity: { min: 60, max: 70 },
      starting: "No special treatment beyond generic guidance.",
      growing: "Extremely vigorous, long vines need substantial trellising — more support than a typical slicer of similar season length.",
      harvesting: "Continuous high-volume production of small fruit in large clusters; pick regularly since clusters ripen unevenly and overripe fruit splits.",
      sources: [
        { tier: "blog", title: "Tips for Growing Super Sweet 100 Tomatoes", publisher: "Gardener's Path", url: "https://gardenerspath.com/plants/vegetables/grow-supersweet-100-tomatoes/" },
        { tier: "seed-supplier", title: "Supersweet 100 - Cherry Tomato Seeds", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/tomatoes/cherry-tomatoes/supersweet-100-f1-tomato-seed-3981.html" },
      ],
    },
    {
      name: "Black Cherry",
      description: "Heirloom cherry tomato with dusky mahogany-purple 1in round fruit; rich, smoky-sweet, complex flavor with low acidity.",
      daysToMaturity: { min: 64, max: 75 },
      starting: "No special treatment beyond generic guidance.",
      growing: "Tall vigorous vines need full staking; grows in large clusters, generally trouble-free/disease-resistant per seed suppliers.",
      harvesting: "Not truly black — ripe color is dusky purplish-red; pick at that dark hue rather than waiting for a \"black\" color that won't develop.",
      sources: [
        { tier: "seed-supplier", title: "'Black Cherry' Heirloom Tomato", publisher: "Renee's Garden", url: "https://www.reneesgarden.com/products/tomato-organic-black-cherry" },
        { tier: "blog", title: "Black Cherry Tomatoes Information and Facts", publisher: "Specialty Produce", url: "https://specialtyproduce.com/produce/Black_Cherry_Tomatoes_4363.php" },
      ],
    },
    {
      name: "Juliet",
      description:
        "1999 AAS-winning F1 \"saladette\" between a grape and Roma tomato — 2in deep-red, meaty yet sweet fruit that resists cracking and holds up to 2 weeks on the vine. Upright to 6ft.",
      daysToMaturity: { min: 60, max: 60 },
      starting: "No special treatment beyond generic guidance.",
      growing: "Resistant to Alternaria blight, early blight, late blight, and Septoria leaf spot — a good pick where foliar disease is a recurring problem; still needs staking.",
      harvesting: "Notably long on-vine shelf life and crack resistance vs. other grape/cherry types, making it more forgiving of harvest timing and better for storage.",
      sources: [
        { tier: "seed-supplier", title: "Juliet - (F1) Tomato Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/tomatoes/paste-tomatoes/juliet-f1-tomato-seed-707.html" },
        { tier: "seed-supplier", title: "Juliet Tomato (F1 Hybrid 60 Days)", publisher: "Pinetree Garden Seeds", url: "https://www.superseeds.com/products/juliet-tomato-f1-hybrid-60-days" },
      ],
    },
    {
      name: "Solar Fire",
      description:
        "Heat-set determinate hybrid bred at the University of Florida's Gulf Coast Research and Education Center specifically to set fruit reliably in extreme heat without cracking in heavy rain; medium-large fruit averaging 6oz+.",
      daysToMaturity: { min: 70, max: 72 },
      starting: "No special treatment beyond generic guidance, but timing matters — plant to have fruit set take advantage of (or finish before) peak summer heat.",
      growing: "Determinate/compact — needs less staking than indeterminate slicers; bred and marketed specifically for hot, humid Gulf South-type climates and resists common fungal diseases.",
      harvesting: "Its main advantage is reliable fruit set through the heat window most other varieties stall in (90°F+); yields medium-large fruit rather than jumbo size.",
      sources: [
        { tier: "university-extension", title: "April 2017 Growing Tomatoes in South Louisiana", publisher: "LSU AgCenter", url: "https://www.lsuagcenter.com/~/media/system/7/d/2/b/7d2b84af67ec6ecdf8dfe56b32620047/april%202017pdf.pdf" },
        { tier: "blog", title: "Solar Fire Information – How To Grow A Solar Fire Tomato", publisher: "Gardening Know How", url: "https://www.gardeningknowhow.com/edible/vegetables/tomato/growing-solar-fire-tomatoes.htm" },
      ],
    },
    {
      name: "Phoenix",
      description:
        "Compact determinate hybrid (3-4ft) developed for heat tolerance in hot south Texas conditions; crack-resistant, 8oz+ red fruit; resistant to Verticillium wilt, Fusarium wilt, and Anthracnose.",
      daysToMaturity: { min: 70, max: 75 },
      starting: "No special treatment beyond generic guidance.",
      growing: "Compact determinate habit needs minimal staking; specifically bred to keep setting fruit through peak summer heat where many other varieties stop.",
      harvesting: "Crack-resistant even after sudden heavy rain — a practical advantage over standard slicers in humid, storm-prone climates.",
      sources: [
        { tier: "university-extension", title: "Extending Your Tomato Harvest", publisher: "Texas A&M AgriLife Extension (Brazoria County)", url: "https://brazoria.agrilife.org/2021/04/27/extending-your-tomato-harvest/" },
        { tier: "blog", title: "14 Heat Tolerant Tomato Varieties (Sun Loving Tomato Plants)", publisher: "Tomato Garden (growtomato.com)", url: "https://growtomato.com/14-heat-tolerant-tomato-varieties-sun-loving-tomato-plants/" },
      ],
    },
    {
      name: "Heatwave II",
      description:
        "Determinate hybrid bred for intense summer heat, reportedly still setting fruit at 95-100°F; compact bush (24-36in tall) with 6-7oz red fruit.",
      daysToMaturity: { min: 68, max: 70 },
      starting: "No special treatment beyond generic guidance, though its early maturity means it can beat peak summer heat stress if started on the early side of the window.",
      growing: "Bush-like determinate habit needs less support than a vining indeterminate; ideal for large-batch harvests/preserving given the concentrated fruit set.",
      harvesting: "Matures earlier than most heat-tolerant types, letting gardeners harvest before the most extreme summer stress arrives.",
      sources: [
        { tier: "blog", title: "What Is A Heatwave II", publisher: "Gardening Know How", url: "https://www.gardeningknowhow.com/edible/vegetables/tomato/heatwave-ii-tomato-growing.htm" },
        { tier: "seed-supplier", title: "Heatwave II Tomato, Heatwave II Tomato Seeds", publisher: "Reimer Seeds", url: "https://www.reimerseeds.com/heatwave-ii-tomato-seeds" },
      ],
    },
    {
      name: "Bella Rosa",
      description:
        "Determinate hybrid bred for heat tolerance and Tomato Spotted Wilt Virus (TSWV) resistance, important for the Deep South; also resistant to Verticillium wilt, Fusarium wilt races 1&2, Alternaria stem canker, and gray leaf spot. Firm 10-12oz round red fruit.",
      daysToMaturity: { min: 70, max: 75 },
      starting: "No special treatment beyond generic guidance.",
      growing: "TSWV resistance is its standout feature versus other heat-set types (thrips-vectored virus is a recurring Deep South problem); determinate habit needs modest staking only.",
      harvesting: "Firm fruit holds up well post-harvest; balanced sweetness/acidity makes it suited to fresh eating despite being bred primarily for heat/disease tolerance.",
      sources: [
        { tier: "seed-supplier", title: "Bella Rosa F1 Tomato", publisher: "Victory Seed Company", url: "https://victoryseeds.com/products/bella-rosa-tomato" },
        { tier: "seed-supplier", title: "Bella Rosa (Hybrid) - Tomato", publisher: "Sakata Homegrown", url: "https://sakatahomegrown.com/homegrown/bella-rosa/" },
      ],
    },
    {
      name: "Rutgers",
      description:
        "1934 New Jersey Agricultural Experiment Station release bred for commercial processors; crack-resistant, thick-walled 6-8oz fruit, uniform and easy to peel — a canning/sauce classic.",
      daysToMaturity: { min: 75, max: 80 },
      starting: "No special treatment beyond generic guidance.",
      growing: "Determinate habit needs less staking than heirloom slicers of similar vintage; VF-resistant strains are available, so check the specific seed source's disease-resistance letters.",
      harvesting: "Bred specifically for canning/processing — uniform size and smooth skin make it easier to peel than typical fresh-eating heirlooms.",
      sources: [
        { tier: "seed-supplier", title: "Rutgers VF Tomato Seeds", publisher: "Park Seed", url: "https://www.parkseed.com/products/rutgers-vf-tomato-seeds" },
        { tier: "blog", title: "Everything You Need to Know About the Disease-Resistant Rutgers Tomato", publisher: "Gardening Channel", url: "https://www.gardeningchannel.com/disease-resistant-rutgers-tomato/" },
      ],
    },
  ],
} satisfies Plant;

export default tomato;
