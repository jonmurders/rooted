import type { Plant } from "@/types/plant";

const cucumber = {
  id: "cucumber",
  commonName: "Cucumber",
  scientificName: "Cucumis sativus",
  category: "vegetable",
  zones: { min: 4, max: 11 },
  sun: "full-sun",
  soil: "Rich, well-drained soil, consistent moisture",
  spacingInches: 18,
  daysToMaturity: { min: 50, max: 70 },
  water: {
    intervalDays: 2,
    drySpellThresholdIn: 1.5,
    notes: "Needs steady moisture — irregular watering causes bitter fruit.",
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
    "A vigorous warm-season vine that climbs or sprawls and produces heavily with steady water.",
  careNotes: [
    "Trellising saves space and keeps fruit straighter and cleaner.",
    "Pick frequently — oversized cucumbers turn bitter and slow new fruit set.",
    "Inconsistent watering is the top cause of bitter-tasting fruit.",
  ],
  sources: [
    {
      title: "LSU AgCenter Pub. 1981: Cucumbers",
      publisher: "LSU AgCenter",
      url: "https://www.lsuagcenter.com/~/media/system/4/3/b/2/43b2782100371590bb90dee63a449fd9/pub%201981%20cucumberspdf.pdf",
    },
  ],
  regionalNotes: [
    {
      region: "Gulf South / Humid Subtropical",
      note: "Downy mildew is common in moderate-to-warm, wet weather (grayish mold on leaf undersides) because the region's humidity keeps foliage wet. Plant resistant varieties (Dasher II, Poinsett 76, General Lee, Thunder) and give full sun with spacing for airflow so leaves dry quickly.",
      source: {
        title: "Louisiana Plant Pathology: Downy Mildew on Cucurbits",
        publisher: "LSU AgCenter",
        url: "https://www.lsuagcenter.com/portals/communications/publications/publications_catalog/crops_livestock/insect_disease_control/vegetables/louisiana-plant-pathology--downy-mildew-on-cucurbits",
      },
    },
    {
      region: "Cold Continental (Northeast)",
      note: "Downy mildew pressure is tracked regionally and varieties are ranked by resistance under trial: DMR 401 gave 75% control under severe pressure vs. 23-37% for several other common cultivars — variety choice matters more here than in milder climates.",
      source: {
        title: "Evaluation of Cucumber Varieties Resistant to Downy Mildew",
        publisher: "Cornell CALS (LIHREC)",
        url: "https://blogs.cornell.edu/livegpath/research/cucurbit-downy-mildew/",
      },
    },
    {
      region: "Mediterranean / California",
      note: "Powdery mildew, not downy mildew, is the dominant cucurbit disease here — it thrives in warm, dry conditions and doesn't need free water on the leaf to spread, so resistant varieties and good airflow matter even without Gulf South-level humidity.",
      source: {
        title: "Powdery Mildew on Vegetables",
        publisher: "UC Statewide IPM Program",
        url: "https://ipm.ucanr.edu/home-and-landscape/powdery-mildew-on-vegetables/",
      },
    },
  ],
  varieties: [
    {
      name: "Marketmore 76",
      description: "Cornell-bred (Dr. Henry Munger, released 1976) slicer; slender, slightly tapered dark-green fruit with thin skin and crisp white flesh — bred for reliability across a wide range of conditions.",
      daysToMaturity: { min: 58, max: 63 },
      starting: "No specific quirks beyond generic guidance.",
      growing: "Resistant to cucumber mosaic virus and scab; intermediate resistance to powdery/downy mildew — one of the more broadly disease-tolerant open-pollinated slicers available.",
      harvesting: "Harvest at 8-9in long for classic slicing size; vigorous vines give a long harvest season.",
      sources: [
        { tier: "seed-supplier", title: "Marketmore 76 - Organic Cucumber Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/cucumbers/slicing-cucumbers/marketmore-76-organic-cucumber-seed-336G.html" },
      ],
    },
    {
      name: "Straight Eight",
      description: "American heirloom, 1935 AAS winner; uniformly straight 8in dark-green fruit, small seed cavity, crisp mild-sweet flesh; dual-purpose (pickling or fresh eating).",
      daysToMaturity: { min: 55, max: 65 },
      starting: "No specific quirks beyond generic guidance.",
      growing: "Resistant to Cucumber Mosaic Virus; vigorous leafy open-pollinated vines (seed-savable).",
      harvesting: "Pick at 8in for classic slicer size; small immature fruit can also be used for pickling.",
      sources: [
        { tier: "seed-supplier", title: "Straight Eight Cucumber Seeds", publisher: "Burpee", url: "https://www.burpee.com/cucumber-straight-eight-prod000699.html" },
      ],
    },
    {
      name: "Sweet Slice",
      description: "Hybrid burpless slicer with tender skin and clean, non-bitter flesh; bred specifically to eliminate cucurbitacin bitterness.",
      daysToMaturity: { min: 62, max: 62 },
      starting: "No specific quirks beyond generic guidance.",
      growing: "Good general disease resistance per catalog copy; vining, benefits from trellising like most burpless types to keep fruit straight.",
      harvesting: "Harvest at typical 8-10in slicer size — being burpless/thin-skinned, it's best picked promptly as it can lose crispness if left too long.",
      sources: [
        { tier: "seed-supplier", title: "Sweet-Slice Cucumber Seed", publisher: "Territorial Seed", url: "https://territorialseed.com/products/cucumber-sweet-slice" },
      ],
    },
    {
      name: "Boston Pickling",
      description: "Heirloom dating to the late 1800s; short, blocky, blunt-ended fruit (2-6in) with bright-to-dark green skin and black spines that rub off easily.",
      daysToMaturity: { min: 50, max: 63 },
      starting: "No specific quirks beyond generic guidance.",
      growing: "Vigorous, productive open-pollinated vines; no notable modern disease-resistance package.",
      harvesting: "Pick small (2-4in) for gherkins/crunchy pickles or up to 6in for larger pickles — blocky shape with full ends is the visual harvest cue for pickling readiness.",
      sources: [
        { tier: "seed-supplier", title: "Boston Pickling, Cucumber Seeds", publisher: "Urban Farmer", url: "https://www.ufseeds.com/product/boston-pickling-cucumber-seeds/CUBP.html" },
      ],
    },
    {
      name: "National Pickling",
      description: "Heirloom dating to 1924, developed via collaboration between the National Pickle Packers Association and seed companies specifically for commercial pickling; blocky medium-green fruit with black spines.",
      daysToMaturity: { min: 52, max: 55 },
      starting: "No specific quirks beyond generic guidance.",
      growing: "Compact, vigorous vines (3-4ft spread) — more restrained growth than many slicing types; performs well in containers/small beds per catalog notes.",
      harvesting: "Best picked small (2-4in) for gherkins or up to 6in; starts bearing early and continues over an extended season.",
      sources: [
        { tier: "seed-supplier", title: "National Pickling Cucumber", publisher: "Fedco Seeds", url: "https://fedcoseeds.com/seeds/national-pickling-cucumber-1226" },
      ],
    },
    {
      name: "Sweet Success",
      description: "F1 hybrid, AAS winner; gynoecious and parthenocarpic — sets fruit without pollination, producing nearly seedless 12in dark-green burpless fruit.",
      daysToMaturity: { min: 54, max: 60 },
      starting: "No special quirk on starting itself, but growing environment matters — suited to open field or greenhouse specifically because it doesn't need pollinators.",
      growing: "Parthenocarpic/gynoecious — isolate from other cucumber pollen or trellis in a greenhouse/row cover to keep fruit seedless and straight; resistant to cucumber and watermelon mosaic viruses, scab, and leaf spot.",
      harvesting: "Harvest at up to 12in; unpollinated fruit stays straight and seedless — cross-pollination from other varieties nearby can cause seediness/curving.",
      sources: [
        { tier: "seed-supplier", title: "Cucumber Sweet Success hybrid", publisher: "All-America Selections", url: "https://all-americaselections.org/product/cucumber-sweet-success-hybrid/" },
      ],
    },
    {
      name: "English Telegraph (Telegraph Improved)",
      description: "Victorian-era English heirloom greenhouse cucumber, historically grown in heated \"cucumber houses\"; smooth, long (10-12in), nearly seedless, thin-skinned, non-bitter fruit.",
      daysToMaturity: { min: 60, max: 65 },
      starting: "No special quirk on starting; benefits from warm, sheltered (greenhouse-like) conditions consistent with its origin.",
      growing: "Parthenocarpic (sets fruit without pollination) — best isolated/trellised to keep fruit seedless; needs support for its long fruit to grow straight.",
      harvesting: "Harvest at 10-12in; skin stays thin/tender so pick before it toughens.",
      sources: [
        { tier: "seed-supplier", title: "Telegraph Improved Cucumber Seed", publisher: "Territorial Seed", url: "https://territorialseed.com/products/cucumber-telegraph-improved" },
      ],
    },
    {
      name: "Suyo Long",
      description: "Old Chinese heirloom; thin-fleshed, burpless, never bitter; long, dark-green, ribbed fruit growing 15-18in long.",
      daysToMaturity: { min: 60, max: 65 },
      starting: "No specific quirks beyond generic guidance.",
      growing: "Parthenocarpic (female flowers set fruit without pollination, giving seedless fruit); powdery-mildew resistant and heat-tolerant — notably more heat-tough than many slicers; needs a 5ft trellis for straight fruit.",
      harvesting: "Good for both fresh slicing and pickling; ribbed skin holds quality well but harvest before fruit gets too thick.",
      sources: [
        { tier: "seed-supplier", title: "Suyo Long - Organic Cucumber Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/cucumbers/specialty-cucumbers/suyo-long-organic-cucumber-seed-333G.html" },
      ],
    },
    {
      name: "Dasher II",
      description: "F1 hybrid, gynoecious; uniform 8in dark-green fruit, smooth with a slight taper at each end, bitter-free.",
      daysToMaturity: { min: 58, max: 58 },
      starting: "No specific quirks beyond generic guidance.",
      growing: "Gynoecious (predominantly female flowers — check seed packet for included pollinator seed); intermediate resistance to CMV, angular leaf spot, powdery mildew, and anthracnose race 2; also tolerant of downy mildew per manufacturer.",
      harvesting: "Harvest at 8in — dual-purpose (slicing or pickling) per some catalogs.",
      sources: [
        { tier: "seed-supplier", title: "Dasher II | Slicers | Cucumbers", publisher: "Rupp Seeds", url: "https://www.ruppseeds.com/vegetables/products/cucumbers/slicers/dasher-ii" },
      ],
    },
    {
      name: "Poinsett 76",
      description: "Cooperative release by Cornell and Clemson in 1976; dark-green cylindrical slicer, 7-8in long, crisp white flesh.",
      daysToMaturity: { min: 63, max: 70 },
      starting: "No specific quirks beyond generic guidance.",
      growing: "Resistant to anthracnose, angular leaf spot, downy mildew, and powdery mildew; notably susceptible to cucumber mosaic virus — a gap versus its otherwise strong disease package.",
      harvesting: "Standard 7-8in slicer harvest size.",
      sources: [
        { tier: "seed-supplier", title: "Poinsett 76 Cucumber", publisher: "Victory Seed Company", url: "https://victoryseeds.com/products/poinsett-76-cucumber" },
      ],
    },
    {
      name: "General Lee",
      description: "F1 hybrid released by Ferry-Morse in 1988, gynoecious; uniform 8in dark-green fruit with white spines, very straight; originally bred for southern gardens but performs well in northern climates too.",
      daysToMaturity: { min: 66, max: 66 },
      starting: "No specific quirks beyond generic guidance.",
      growing: "Gynoecious (mostly female flowers); resistant to cucumber mosaic virus, downy mildew, and powdery mildew, with intermediate resistance noted for CMV in some listings; also carries scab resistance.",
      harvesting: "Harvest at 8in for best straightness/quality.",
      sources: [
        { tier: "seed-supplier", title: "General Lee - Treated (F1) Cucumber Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/field-grown-cucumbers/general-lee-treated-f1-cucumber-seed-4536T.html" },
      ],
    },
    {
      name: "Thunder",
      description: "F1 hybrid, gynoecious, early dark-green glossy slicer bred for fresh-market/open-field production, with a focus on Southeast US growing conditions.",
      daysToMaturity: { min: 56, max: 56 },
      starting: "No specific quirks beyond generic guidance.",
      growing: "Gynoecious flowering; high resistance to CMV, scab (Ccu), and powdery mildew (Px); intermediate resistance to downy mildew (Psl) and ZYMV — one of the stronger combined disease packages among named hybrids researched here.",
      harvesting: "Bred to produce a high percentage of premium-grade fruit — uniform blocky stem/blossom ends are the quality marker growers watch for.",
      sources: [
        { tier: "seed-supplier", title: "THUNDER Cucumber", publisher: "Seminis (Bayer Vegetable Seeds)", url: "https://www.vegetables.bayer.com/us/en-us/seminis-products/cucumber/details.html/cucumber_thunder_usa_seminis_fresh_market_open_field_fresh_market_southeast.html" },
      ],
    },
    {
      name: "Speedway",
      description: "F1 hybrid gynoecious slicer, uniform dark-green cylindrical fruit ~8in long; one of the earliest-maturing Seminis slicers.",
      daysToMaturity: { min: 56, max: 60 },
      starting: "No specific quirks beyond generic guidance.",
      growing: "Gynoecious — sold as a blend of the named hybrid with a pollinator variety, so no separate pollinator planting is needed; high resistance to angular leaf spot, scab, and anthracnose race 2; intermediate resistance to CMV and powdery mildew.",
      harvesting: "Standard 8in slicer harvest size.",
      sources: [
        { tier: "seed-supplier", title: "SPEEDWAY 85 + PS 109188 15 Cucumber", publisher: "Seminis (Bayer Vegetable Seeds)", url: "https://www.vegetables.bayer.com/us/en-us/products/cucumber/details.html/cucumber_speedway_85_+_ps_109188_15_usa_seminis_fresh_market_open_field_fresh_market_northeast.html" },
      ],
    },
    {
      name: "Slice More",
      description: "F1 hybrid, predominantly female (gynoecious blend with pollinator), producing perfectly cylindrical 8-9in dark-green fruit with a very small seed cavity; marketed as a consistent burpless slicer.",
      daysToMaturity: { min: 55, max: 62 },
      starting: "No specific quirks beyond generic guidance.",
      growing: "Vigorous, tight-vined plants said to handle varied conditions well; high resistance to scab; intermediate resistance to anthracnose, CMV, downy mildew, and powdery mildew.",
      harvesting: "Small seed cavity and burpless flesh make it forgiving for slightly later picking than thin-skinned burpless types, but standard 8-9in is the target size.",
      sources: [
        { tier: "seed-supplier", title: "Cucumber, Slice More Hybrid", publisher: "William Dam Seeds", url: "https://www.damseeds.com/products/slice-more-hybrid" },
      ],
    },
  ],
} satisfies Plant;

export default cucumber;
