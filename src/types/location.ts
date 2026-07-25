export interface GeocodeResult {
  name: string;
  admin1?: string;
  country?: string;
  latitude: number;
  longitude: number;
}

export interface FrostDates {
  /** Average day-of-year the last spring frost occurs (1-366). */
  lastSpringFrostDay: number;
  /** Average day-of-year the first fall frost occurs (1-366). */
  firstFallFrostDay: number;
}

export interface ClimateProfile {
  hardinessZone: number;
  /** "a" (colder half) or "b" (warmer half) of the zone. */
  zoneHalf: "a" | "b";
  averageAnnualMinF: number;
  frostDates: FrostDates;
}

export interface SavedLocation extends GeocodeResult {
  climate: ClimateProfile;
  savedAt: string;
}
