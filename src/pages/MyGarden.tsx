import { Link } from "react-router-dom";
import { useUserStore } from "@/store/userStore";
import { getPlantById } from "@/data/plants";
import { useWeather } from "@/hooks/useWeather";
import { getCareAdvice } from "@/lib/advice";
import AdviceList from "@/components/AdviceList";

export default function MyGarden() {
  const location = useUserStore((s) => s.location);
  const savedPlants = useUserStore((s) => s.savedPlants);
  const removePlant = useUserStore((s) => s.removePlant);
  const exportProfile = useUserStore((s) => s.exportProfile);

  const { weather, loading, error } = useWeather(
    location?.latitude,
    location?.longitude,
  );

  const handleExport = () => {
    const blob = new Blob([exportProfile()], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "rooted-profile.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-soil-900">My Garden</h1>
        {savedPlants.length > 0 && (
          <button
            onClick={handleExport}
            className="text-sm border border-leaf-300 text-leaf-700 px-3 py-1.5 rounded-md hover:bg-leaf-50"
          >
            Export profile (JSON)
          </button>
        )}
      </div>

      {!location && (
        <p className="text-sm bg-amber-50 border border-amber-300 text-amber-900 rounded-md px-3 py-2">
          <Link to="/location" className="underline font-medium">
            Set your location
          </Link>{" "}
          to get weather-based watering, heat, and freeze advice for your saved
          plants.
        </p>
      )}

      {location && loading && (
        <p className="text-sm text-soil-700">Loading weather for {location.name}...</p>
      )}
      {location && error && (
        <p className="text-sm text-red-700">Couldn't load weather: {error}</p>
      )}

      {savedPlants.length === 0 ? (
        <p className="text-soil-700 text-sm">
          You haven't saved any plants yet.{" "}
          <Link to="/plants" className="underline text-leaf-700">
            Browse the directory
          </Link>{" "}
          to add some.
        </p>
      ) : (
        <div className="space-y-4">
          {savedPlants.map((saved) => {
            const plant = getPlantById(saved.plantId);
            if (!plant) return null;
            const advice = weather ? getCareAdvice(plant, weather) : [];

            return (
              <div
                key={saved.plantId}
                className="bg-white border border-leaf-200 rounded-lg p-4"
              >
                <div className="flex items-center justify-between">
                  <Link
                    to={`/plants/${plant.id}`}
                    className="font-semibold text-soil-900 hover:text-leaf-700"
                  >
                    {saved.nickname ?? plant.commonName}
                  </Link>
                  <button
                    onClick={() => removePlant(plant.id)}
                    className="text-xs text-soil-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
                {advice.length > 0 ? (
                  <div className="mt-3">
                    <AdviceList advice={advice} />
                  </div>
                ) : (
                  <p className="text-sm text-soil-500 mt-2">
                    {location ? "No alerts right now." : "Set a location for advice."}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
