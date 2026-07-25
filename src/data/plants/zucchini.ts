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
} satisfies Plant;

export default zucchini;
