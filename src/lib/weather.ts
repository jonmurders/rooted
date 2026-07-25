export interface DailyWeather {
  date: string;
  tempMaxF: number;
  tempMinF: number;
  precipitationIn: number;
}

export interface WeatherSnapshot {
  /** Includes the last 7 days (for rainfall totals) through the forecast horizon. */
  daily: DailyWeather[];
  fetchedAt: string;
}

interface ForecastResponse {
  daily?: {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    precipitation_sum: number[];
  };
}

const PAST_DAYS = 7;
const FORECAST_DAYS = 10;

/**
 * Fetches recent + forecast daily weather from Open-Meteo's free forecast
 * API (no API key required). Includes 7 days of recent history (for
 * rainfall totals) and 10 days of forecast (for freeze/heat advice).
 */
export async function getWeatherSnapshot(
  latitude: number,
  longitude: number,
): Promise<WeatherSnapshot> {
  const url = new URL("https://api.open-meteo.com/v1/forecast");
  url.searchParams.set("latitude", String(latitude));
  url.searchParams.set("longitude", String(longitude));
  url.searchParams.set(
    "daily",
    "temperature_2m_max,temperature_2m_min,precipitation_sum",
  );
  url.searchParams.set("past_days", String(PAST_DAYS));
  url.searchParams.set("forecast_days", String(FORECAST_DAYS));
  url.searchParams.set("temperature_unit", "fahrenheit");
  url.searchParams.set("precipitation_unit", "inch");
  url.searchParams.set("timezone", "auto");

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Weather request failed (${response.status})`);
  }

  const data = (await response.json()) as ForecastResponse;
  const daily = data.daily ?? {
    time: [],
    temperature_2m_max: [],
    temperature_2m_min: [],
    precipitation_sum: [],
  };

  return {
    daily: daily.time.map((date, i) => ({
      date,
      tempMaxF: daily.temperature_2m_max[i],
      tempMinF: daily.temperature_2m_min[i],
      precipitationIn: daily.precipitation_sum[i],
    })),
    fetchedAt: new Date().toISOString(),
  };
}
