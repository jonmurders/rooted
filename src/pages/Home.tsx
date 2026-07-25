import { Link } from "react-router-dom";
import { useUserStore } from "@/store/userStore";
import { plants } from "@/data/plants";

export default function Home() {
  const location = useUserStore((s) => s.location);
  const savedCount = useUserStore((s) => s.savedPlants.length);

  return (
    <div className="space-y-8">
      <section className="text-center py-10">
        <h1 className="text-4xl font-bold text-leaf-800">
          Grow with confidence, right where you live.
        </h1>
        <p className="mt-4 text-lg text-soil-700 max-w-2xl mx-auto">
          Rooted gives you planting windows, care advice, and weather-based
          watering, heat, and freeze alerts — tuned to your exact location.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Link
            to="/location"
            className="bg-leaf-600 text-white px-5 py-2.5 rounded-md font-medium hover:bg-leaf-700"
          >
            {location ? "Update your location" : "Set your location"}
          </Link>
          <Link
            to="/plants"
            className="border border-leaf-600 text-leaf-700 px-5 py-2.5 rounded-md font-medium hover:bg-leaf-50"
          >
            Browse plants
          </Link>
        </div>
      </section>

      <section className="grid sm:grid-cols-3 gap-4">
        <div className="bg-white border border-leaf-200 rounded-lg p-4">
          <h2 className="font-semibold text-soil-900">Your zone</h2>
          <p className="text-sm text-soil-700 mt-1">
            {location
              ? `${location.name}, ${location.admin1 ?? location.country} — Zone ${location.climate.hardinessZone}${location.climate.zoneHalf}`
              : "Set a location to see your USDA hardiness zone and frost dates."}
          </p>
        </div>
        <div className="bg-white border border-leaf-200 rounded-lg p-4">
          <h2 className="font-semibold text-soil-900">Plant repository</h2>
          <p className="text-sm text-soil-700 mt-1">
            {plants.length} plants and counting — an open, community-editable
            database of planting and care info.
          </p>
        </div>
        <div className="bg-white border border-leaf-200 rounded-lg p-4">
          <h2 className="font-semibold text-soil-900">My Garden</h2>
          <p className="text-sm text-soil-700 mt-1">
            {savedCount > 0
              ? `${savedCount} plant${savedCount === 1 ? "" : "s"} saved — check today's watering and weather advice.`
              : "Save plants to your garden to get personalized care alerts."}
          </p>
        </div>
      </section>
    </div>
  );
}
