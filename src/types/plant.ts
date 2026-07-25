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
}
