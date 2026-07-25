import type { GeocodeResult } from "@/types/location";

interface OpenMeteoGeocodeResult {
  name: string;
  latitude: number;
  longitude: number;
  country?: string;
  admin1?: string;
}

interface OpenMeteoGeocodeResponse {
  results?: OpenMeteoGeocodeResult[];
}

/**
 * Resolves a free-text place (zip code, city, "city, state") to coordinates
 * using Open-Meteo's free geocoding API. No API key required.
 */
export async function geocode(query: string): Promise<GeocodeResult[]> {
  const trimmed = query.trim();
  if (!trimmed) return [];

  const url = new URL("https://geocoding-api.open-meteo.com/v1/search");
  url.searchParams.set("name", trimmed);
  url.searchParams.set("count", "5");
  url.searchParams.set("language", "en");
  url.searchParams.set("format", "json");

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Geocoding request failed (${response.status})`);
  }

  const data = (await response.json()) as OpenMeteoGeocodeResponse;

  return (data.results ?? []).map((result) => ({
    name: result.name,
    admin1: result.admin1,
    country: result.country,
    latitude: result.latitude,
    longitude: result.longitude,
  }));
}
