import type { Plant } from "@/types/plant";
import type { WeatherSnapshot } from "@/lib/weather";

export type AdviceLevel = "info" | "warning" | "danger";

export interface CareAdvice {
  type: "water" | "freeze" | "heat";
  level: AdviceLevel;
  message: string;
  date?: string;
}

function todayISO(): string {
  return new Date().toISOString().slice(0, 10);
}

/**
 * Turns a weather snapshot into plain-language watering/freeze/heat advice
 * for one plant. Freeze and heat checks look a few days ahead so a grower
 * has time to act (cover plants, add shade, etc.) before conditions hit.
 */
export function getCareAdvice(
  plant: Plant,
  weather: WeatherSnapshot,
): CareAdvice[] {
  const today = todayISO();
  const past = weather.daily.filter((d) => d.date <= today).slice(-7);
  const upcoming = weather.daily.filter((d) => d.date >= today).slice(0, 5);

  const advice: CareAdvice[] = [];

  const rainLast7 = past.reduce((sum, d) => sum + (d.precipitationIn || 0), 0);
  if (rainLast7 < plant.water.drySpellThresholdIn) {
    advice.push({
      type: "water",
      level: "warning",
      message: `Only ${rainLast7.toFixed(2)}in of rain in the last 7 days — below the ${plant.water.drySpellThresholdIn}in ${plant.commonName.toLowerCase()} needs. Water now.`,
    });
  } else {
    advice.push({
      type: "water",
      level: "info",
      message: `${rainLast7.toFixed(2)}in of rain in the last 7 days is enough for ${plant.commonName.toLowerCase()} — no need to water yet.`,
    });
  }

  const freezeDay = upcoming.find(
    (d) => d.tempMinF <= plant.temperature.frostThresholdF,
  );
  if (freezeDay) {
    advice.push({
      type: "freeze",
      level: "danger",
      date: freezeDay.date,
      message: `Forecast low of ${Math.round(freezeDay.tempMinF)}°F on ${freezeDay.date} is at or below ${plant.commonName.toLowerCase()}'s frost threshold (${plant.temperature.frostThresholdF}°F) — cover or bring it in.`,
    });
  }

  const heatDay = upcoming.find(
    (d) => d.tempMaxF >= plant.temperature.heatStressThresholdF,
  );
  if (heatDay) {
    advice.push({
      type: "heat",
      level: "warning",
      date: heatDay.date,
      message: `Forecast high of ${Math.round(heatDay.tempMaxF)}°F on ${heatDay.date} may stress ${plant.commonName.toLowerCase()} — provide shade and extra water.`,
    });
  }

  return advice;
}
