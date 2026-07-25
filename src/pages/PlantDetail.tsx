import { Link, useParams } from "react-router-dom";
import { getPlantById } from "@/data/plants";
import { useUserStore } from "@/store/userStore";
import { useWeather } from "@/hooks/useWeather";
import { getCareAdvice } from "@/lib/advice";
import { getPlantingRecommendations } from "@/lib/planting";
import ZoneBadge from "@/components/ZoneBadge";
import AdviceList from "@/components/AdviceList";

const statusLabel = {
  upcoming: "Upcoming",
  active: "Plant now",
  passed: "Passed for this year",
} as const;

const statusStyle = {
  upcoming: "bg-leaf-50 text-leaf-800 border-leaf-200",
  active: "bg-leaf-600 text-white border-leaf-600",
  passed: "bg-soil-100 text-soil-700 border-soil-200",
} as const;

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
});

export default function PlantDetail() {
  const { plantId } = useParams<{ plantId: string }>();
  const plant = plantId ? getPlantById(plantId) : undefined;

  const location = useUserStore((s) => s.location);
  const hasPlant = useUserStore((s) => s.hasPlant);
  const addPlant = useUserStore((s) => s.addPlant);
  const removePlant = useUserStore((s) => s.removePlant);

  const { weather } = useWeather(location?.latitude, location?.longitude);

  if (!plant) {
    return (
      <div>
        <p className="text-soil-700">Plant not found.</p>
        <Link to="/plants" className="text-leaf-700 underline">
          Back to directory
        </Link>
      </div>
    );
  }

  const saved = hasPlant(plant.id);
  const advice = weather ? getCareAdvice(plant, weather) : [];
  const windows = location
    ? getPlantingRecommendations(plant, location.climate.frostDates)
    : [];

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <Link to="/plants" className="text-sm text-leaf-700 underline">
          &larr; Back to directory
        </Link>
      </div>

      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-soil-900">{plant.commonName}</h1>
          <p className="italic text-soil-700">{plant.scientificName}</p>
        </div>
        <ZoneBadge
          min={plant.zones.min}
          max={plant.zones.max}
          userZone={location?.climate.hardinessZone}
        />
      </div>

      <p className="text-soil-700">{plant.description}</p>

      <button
        onClick={() => (saved ? removePlant(plant.id) : addPlant(plant.id))}
        className={`px-4 py-2 rounded-md text-sm font-medium ${
          saved
            ? "border border-soil-300 text-soil-700 hover:bg-soil-50"
            : "bg-leaf-600 text-white hover:bg-leaf-700"
        }`}
      >
        {saved ? "Remove from My Garden" : "Add to My Garden"}
      </button>

      <section className="grid sm:grid-cols-2 gap-4 text-sm">
        <div className="bg-white border border-leaf-200 rounded-lg p-4">
          <h2 className="font-semibold text-soil-900 mb-2">Growing basics</h2>
          <dl className="space-y-1 text-soil-700">
            <div className="flex justify-between">
              <dt>Sun</dt>
              <dd className="capitalize">{plant.sun.replace("-", " ")}</dd>
            </div>
            <div className="flex justify-between">
              <dt>Soil</dt>
              <dd className="text-right">{plant.soil}</dd>
            </div>
            <div className="flex justify-between">
              <dt>Spacing</dt>
              <dd>{plant.spacingInches}in</dd>
            </div>
            <div className="flex justify-between">
              <dt>Days to maturity</dt>
              <dd>
                {plant.daysToMaturity.min}-{plant.daysToMaturity.max}
              </dd>
            </div>
          </dl>
        </div>

        <div className="bg-white border border-leaf-200 rounded-lg p-4">
          <h2 className="font-semibold text-soil-900 mb-2">Thresholds</h2>
          <dl className="space-y-1 text-soil-700">
            <div className="flex justify-between">
              <dt>Water</dt>
              <dd>every ~{plant.water.intervalDays}d without rain</dd>
            </div>
            <div className="flex justify-between">
              <dt>Frost damage below</dt>
              <dd>{plant.temperature.frostThresholdF}°F</dd>
            </div>
            <div className="flex justify-between">
              <dt>Heat stress above</dt>
              <dd>{plant.temperature.heatStressThresholdF}°F</dd>
            </div>
          </dl>
        </div>
      </section>

      <section>
        <h2 className="font-semibold text-soil-900 mb-2">Planting windows</h2>
        {location ? (
          <ul className="space-y-2">
            {windows.map((rec, i) => (
              <li
                key={i}
                className={`border rounded-md px-3 py-2 text-sm flex justify-between items-center ${statusStyle[rec.status]}`}
              >
                <span className="capitalize">
                  {rec.window.season} ({rec.window.method.replace("-", " ")})
                </span>
                <span>
                  {dateFormatter.format(rec.start)} &ndash;{" "}
                  {dateFormatter.format(rec.end)} &middot;{" "}
                  {statusLabel[rec.status]}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-soil-700">
            <Link to="/location" className="underline text-leaf-700">
              Set your location
            </Link>{" "}
            to see planting windows timed to your local frost dates.
          </p>
        )}
      </section>

      {location && (
        <section>
          <h2 className="font-semibold text-soil-900 mb-2">
            Today's advice for {location.name}
          </h2>
          <AdviceList advice={advice} />
        </section>
      )}

      <section>
        <h2 className="font-semibold text-soil-900 mb-2">Care notes</h2>
        <ul className="list-disc list-inside space-y-1 text-sm text-soil-700">
          {plant.careNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
