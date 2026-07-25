export type SunNeeds = "full-sun" | "partial-sun" | "shade";

export type PlantCategory =
  | "vegetable"
  | "herb"
  | "fruit"
  | "flower"
  | "shrub"
  | "tree";

export type Season = "spring" | "fall";

/**
 * A planting window expressed relative to the location's own frost dates,
 * not fixed calendar dates. "Spring" windows count forward from the last
 * spring frost; "fall" windows count backward from the first fall frost.
 * This lets one plant record stay correct for any zone/location.
 */
export interface PlantingWindow {
  season: Season;
  /** Earliest a grower should plant, in weeks relative to the frost date (can be negative). */
  earliestWeeksFromFrost: number;
  /** Latest a grower should plant, in weeks relative to the frost date. */
  latestWeeksFromFrost: number;
  method: "direct-sow" | "transplant";
}

export interface WaterNeeds {
  /** Baseline days between waterings with no meaningful rainfall. */
  intervalDays: number;
  /** Rain (in inches, last 7 days) below which the interval advice still applies. */
  drySpellThresholdIn: number;
  notes: string;
}

export interface TemperatureTolerance {
  /** Coldest temp (°F) the plant tolerates before frost damage; below this, protect/cover. */
  frostThresholdF: number;
  /** Hottest temp (°F) before heat stress; above this, extra water/shade advised. */
  heatStressThresholdF: number;
}

export interface Citation {
  title: string;
  url: string;
  /** The publishing institution, e.g. "LSU AgCenter", "UF/IFAS", "Cornell Cooperative Extension". */
  publisher: string;
}

/**
 * Practical guidance specific to a named climate archetype (not a formal
 * zone) — e.g. humid, hot-and-arid, and cool-maritime growing conditions all
 * exist within overlapping USDA zones, so this captures what a zone number
 * alone can't. Sourced from university/land-grant extension publications
 * (LSU AgCenter, UF/IFAS, UC ANR, Cornell, etc.), one of the few genuinely
 * research-backed, freely reusable sources for this kind of advice.
 */
export interface RegionalNote {
  region: string;
  note: string;
  source: Citation;
}

/**
 * Validity tiers for variety-level sourcing, ranked highest to lowest
 * confidence: research-backed university/extension guidance, then
 * commercial seed suppliers (accurate on their own product, but
 * sales-oriented), then gardening blogs, then YouTube (practical but
 * unverified), then Reddit (real-world anecdote, most variable quality).
 */
export type SourceTier =
  | "university-extension"
  | "seed-supplier"
  | "blog"
  | "youtube"
  | "reddit";

export interface VarietySource extends Citation {
  tier: SourceTier;
}

/**
 * A specific cultivar of a plant (e.g. "Brandywine" tomato, "Danvers 126"
 * carrot). Fields only need to say what's different from — or more
 * specific than — the parent Plant's own fields; they aren't a full
 * restatement of general species care.
 */
export interface Variety {
  name: string;
  /** What distinguishes this variety — habit, flavor, disease resistance, appearance, etc. */
  description: string;
  /** Variety-specific days-to-maturity, when it differs meaningfully from the species-level range. */
  daysToMaturity?: { min: number; max: number };
  /** How to start this variety where it differs from the parent plant's general guidance. */
  starting: string;
  /** Variety-specific growing notes (habit, support, disease watch-outs, etc.). */
  growing: string;
  /** Harvest indicators and timing specific to this variety. */
  harvesting: string;
  /** Cited sources for this variety's claims, ideally led by the highest validity tier available. */
  sources: VarietySource[];
}

export interface Plant {
  id: string;
  commonName: string;
  scientificName: string;
  category: PlantCategory;
  /** USDA hardiness zone range this plant can be grown in outdoors, e.g. { min: 3, max: 9 }. */
  zones: { min: number; max: number };
  sun: SunNeeds;
  soil: string;
  spacingInches: number;
  daysToMaturity: { min: number; max: number };
  water: WaterNeeds;
  temperature: TemperatureTolerance;
  plantingWindows: PlantingWindow[];
  description: string;
  careNotes: string[];
  /** Extension/academic publications backing this plant's core data. */
  sources: Citation[];
  /** Region-specific adjustments and pitfalls beyond what zone/frost data alone captures. */
  regionalNotes: RegionalNote[];
  /** Named cultivars of this plant. Populated progressively — see CONTRIBUTING.md. */
  varieties: Variety[];
}
