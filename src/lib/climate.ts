import type { ClimateProfile } from "@/types/location";

const HISTORY_YEARS = 10;
const FROST_THRESHOLD_F = 32;

interface ArchiveResponse {
  daily?: {
    time: string[];
    temperature_2m_min: number[];
  };
}

function dayOfYear(dateStr: string): number {
  const [year, month, day] = dateStr.split("-").map(Number);
  const start = Date.UTC(year, 0, 1);
  const current = Date.UTC(year, month - 1, day);
  return Math.round((current - start) / 86_400_000) + 1;
}

function yearOf(dateStr: string): number {
  return Number(dateStr.slice(0, 4));
}

function monthOf(dateStr: string): number {
  return Number(dateStr.slice(5, 7));
}

/**
 * USDA hardiness zones are defined by average annual minimum temperature in
 * 10°F bands (split into an "a"/"b" half each), starting at zone 2 = -60°F.
 * See https://planthardiness.ars.usda.gov/.
 */
export function zoneFromAverageAnnualMinF(avgMinF: number): {
  zone: number;
  half: "a" | "b";
} {
  const raw = (avgMinF + 60) / 10 + 1;
  const zone = Math.min(13, Math.max(1, Math.floor(raw)));
  const half: "a" | "b" = raw - Math.floor(raw) < 0.5 ? "a" : "b";
  return { zone, half };
}

/**
 * Derives a location's hardiness zone and average frost dates from ~10
 * years of historical daily temperatures via Open-Meteo's free archive API
 * (no API key required). This is more precise than a zip-code lookup table
 * because it reflects the exact coordinates rather than a zone-wide average.
 */
export async function getClimateProfile(
  latitude: number,
  longitude: number,
): Promise<ClimateProfile> {
  const endYear = new Date().getUTCFullYear() - 1;
  const startYear = endYear - HISTORY_YEARS + 1;

  const url = new URL("https://archive-api.open-meteo.com/v1/archive");
  url.searchParams.set("latitude", String(latitude));
  url.searchParams.set("longitude", String(longitude));
  url.searchParams.set("start_date", `${startYear}-01-01`);
  url.searchParams.set("end_date", `${endYear}-12-31`);
  url.searchParams.set("daily", "temperature_2m_min");
  url.searchParams.set("temperature_unit", "fahrenheit");
  url.searchParams.set("timezone", "auto");

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Historical climate request failed (${response.status})`);
  }

  const data = (await response.json()) as ArchiveResponse;
  const { time, temperature_2m_min: mins } = data.daily ?? {
    time: [],
    temperature_2m_min: [],
  };

  const byYear = new Map<number, { date: string; min: number }[]>();
  for (let i = 0; i < time.length; i++) {
    const year = yearOf(time[i]);
    const entries = byYear.get(year) ?? [];
    entries.push({ date: time[i], min: mins[i] });
    byYear.set(year, entries);
  }

  const annualMins: number[] = [];
  const lastSpringFrostDays: number[] = [];
  const firstFallFrostDays: number[] = [];

  for (const entries of byYear.values()) {
    if (entries.length === 0) continue;

    annualMins.push(Math.min(...entries.map((e) => e.min)));

    const springFrosts = entries.filter(
      (e) => monthOf(e.date) <= 6 && e.min <= FROST_THRESHOLD_F,
    );
    const fallFrosts = entries.filter(
      (e) => monthOf(e.date) >= 7 && e.min <= FROST_THRESHOLD_F,
    );

    // No spring frost found means frost risk is effectively over by day 1.
    lastSpringFrostDays.push(
      springFrosts.length > 0
        ? dayOfYear(springFrosts[springFrosts.length - 1].date)
        : 1,
    );
    // No fall frost found means frost risk doesn't arrive until year end.
    firstFallFrostDays.push(
      fallFrosts.length > 0 ? dayOfYear(fallFrosts[0].date) : 365,
    );
  }

  const average = (values: number[]) =>
    values.length > 0
      ? values.reduce((sum, v) => sum + v, 0) / values.length
      : 0;

  const averageAnnualMinF = average(annualMins);
  const { zone, half } = zoneFromAverageAnnualMinF(averageAnnualMinF);

  return {
    hardinessZone: zone,
    zoneHalf: half,
    averageAnnualMinF: Math.round(averageAnnualMinF),
    frostDates: {
      lastSpringFrostDay: Math.round(average(lastSpringFrostDays)),
      firstFallFrostDay: Math.round(average(firstFallFrostDays)),
    },
  };
}
