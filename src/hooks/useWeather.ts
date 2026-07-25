import { useEffect, useState } from "react";
import { getWeatherSnapshot, type WeatherSnapshot } from "@/lib/weather";

interface UseWeatherResult {
  weather: WeatherSnapshot | null;
  loading: boolean;
  error: string | null;
}

/** Fetches recent + forecast weather for a location directly from the browser. */
export function useWeather(
  latitude: number | undefined,
  longitude: number | undefined,
): UseWeatherResult {
  const [weather, setWeather] = useState<WeatherSnapshot | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (latitude == null || longitude == null) return;

    let cancelled = false;
    setLoading(true);
    setError(null);

    getWeatherSnapshot(latitude, longitude)
      .then((snapshot) => {
        if (!cancelled) setWeather(snapshot);
      })
      .catch((err: unknown) => {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Failed to load weather");
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [latitude, longitude]);

  return { weather, loading, error };
}
