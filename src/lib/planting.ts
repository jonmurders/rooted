import type { Plant, PlantingWindow } from "@/types/plant";
import type { FrostDates } from "@/types/location";

export type PlantingStatus = "upcoming" | "active" | "passed";

export interface PlantingRecommendation {
  window: PlantingWindow;
  start: Date;
  end: Date;
  status: PlantingStatus;
}

function dayOfYearToDate(year: number, day: number): Date {
  // Date.UTC normalizes out-of-range days (e.g. day 0 -> Dec 31 prior year),
  // so windows that spill across a year boundary resolve correctly.
  return new Date(Date.UTC(year, 0, day));
}

/**
 * Converts a plant's frost-relative planting windows into real calendar
 * dates for a given location's frost dates, and flags whether each window
 * is still ahead, currently open, or already passed this year.
 */
export function getPlantingRecommendations(
  plant: Plant,
  frostDates: FrostDates,
  now: Date = new Date(),
): PlantingRecommendation[] {
  const year = now.getUTCFullYear();

  return plant.plantingWindows.map((window) => {
    const referenceDay =
      window.season === "spring"
        ? frostDates.lastSpringFrostDay
        : frostDates.firstFallFrostDay;

    const start = dayOfYearToDate(
      year,
      referenceDay + window.earliestWeeksFromFrost * 7,
    );
    const end = dayOfYearToDate(
      year,
      referenceDay + window.latestWeeksFromFrost * 7,
    );

    let status: PlantingStatus = "active";
    if (now < start) status = "upcoming";
    else if (now > end) status = "passed";

    return { window, start, end, status };
  });
}
