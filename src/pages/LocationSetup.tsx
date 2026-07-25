import { useRef, useState } from "react";
import { useUserStore } from "@/store/userStore";
import { geocode } from "@/lib/geocode";
import { getClimateProfile } from "@/lib/climate";
import type { GeocodeResult } from "@/types/location";

export default function LocationSetup() {
  const location = useUserStore((s) => s.location);
  const setLocation = useUserStore((s) => s.setLocation);
  const importProfile = useUserStore((s) => s.importProfile);

  const [query, setQuery] = useState("");
  const [results, setResults] = useState<GeocodeResult[]>([]);
  const [searching, setSearching] = useState(false);
  const [resolving, setResolving] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInput = useRef<HTMLInputElement>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSearching(true);
    try {
      const matches = await geocode(query);
      setResults(matches);
      if (matches.length === 0) {
        setError("No matches found. Try a city and state, or a zip code.");
      }
    } catch {
      setError("Couldn't search locations right now. Please try again.");
    } finally {
      setSearching(false);
    }
  };

  const handleSelect = async (result: GeocodeResult) => {
    setResolving(result.name);
    setError(null);
    try {
      const climate = await getClimateProfile(result.latitude, result.longitude);
      setLocation({ ...result, climate, savedAt: new Date().toISOString() });
      setResults([]);
      setQuery("");
    } catch {
      setError("Couldn't determine your climate zone right now. Please try again.");
    } finally {
      setResolving(null);
    }
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    file.text().then((text) => {
      try {
        importProfile(text);
      } catch {
        setError("That file doesn't look like a valid Rooted profile export.");
      }
    });
    e.target.value = "";
  };

  return (
    <div className="space-y-6 max-w-xl">
      <div>
        <h1 className="text-2xl font-bold text-soil-900">Your Location</h1>
        <p className="text-soil-700 text-sm mt-1">
          Rooted computes your USDA hardiness zone and average frost dates from
          ~10 years of historical weather data — no account needed. Everything
          is stored only in this browser.
        </p>
      </div>

      {location && (
        <div className="bg-white border border-leaf-200 rounded-lg p-4">
          <h2 className="font-semibold text-soil-900">
            {location.name}
            {location.admin1 ? `, ${location.admin1}` : ""}
          </h2>
          <dl className="mt-2 text-sm text-soil-700 space-y-1">
            <div className="flex justify-between">
              <dt>Hardiness zone</dt>
              <dd>
                Zone {location.climate.hardinessZone}
                {location.climate.zoneHalf}
              </dd>
            </div>
            <div className="flex justify-between">
              <dt>Average annual low</dt>
              <dd>{location.climate.averageAnnualMinF}°F</dd>
            </div>
            <div className="flex justify-between">
              <dt>Typical last spring frost</dt>
              <dd>day {location.climate.frostDates.lastSpringFrostDay} of year</dd>
            </div>
            <div className="flex justify-between">
              <dt>Typical first fall frost</dt>
              <dd>day {location.climate.frostDates.firstFallFrostDay} of year</dd>
            </div>
          </dl>
        </div>
      )}

      <form onSubmit={handleSearch} className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="City, state, or zip code"
          className="flex-1 border border-leaf-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-leaf-400"
        />
        <button
          type="submit"
          disabled={searching || query.trim().length === 0}
          className="bg-leaf-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-leaf-700 disabled:opacity-50"
        >
          {searching ? "Searching..." : "Search"}
        </button>
      </form>

      {error && <p className="text-sm text-red-700">{error}</p>}

      {results.length > 0 && (
        <ul className="space-y-2">
          {results.map((result, i) => (
            <li key={i}>
              <button
                onClick={() => handleSelect(result)}
                disabled={resolving !== null}
                className="w-full text-left bg-white border border-leaf-200 rounded-md px-3 py-2 text-sm hover:border-leaf-400 disabled:opacity-50"
              >
                {result.name}
                {result.admin1 ? `, ${result.admin1}` : ""}
                {result.country ? `, ${result.country}` : ""}
                {resolving === result.name && " — calculating your zone..."}
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="pt-4 border-t border-leaf-200">
        <h2 className="font-semibold text-soil-900 mb-2">Restore a profile</h2>
        <p className="text-sm text-soil-700 mb-2">
          Import a profile JSON file exported from My Garden to move your saved
          plants and location to this browser.
        </p>
        <input
          ref={fileInput}
          type="file"
          accept="application/json"
          onChange={handleImport}
          className="text-sm"
        />
      </div>
    </div>
  );
}
