import { Link } from "react-router-dom";
import type { Plant } from "@/types/plant";
import ZoneBadge from "@/components/ZoneBadge";

interface PlantCardProps {
  plant: Plant;
  userZone?: number;
}

export default function PlantCard({ plant, userZone }: PlantCardProps) {
  return (
    <Link
      to={`/plants/${plant.id}`}
      className="block bg-white border border-leaf-200 rounded-lg p-4 hover:border-leaf-400 hover:shadow-sm transition-shadow"
    >
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="font-semibold text-soil-900">{plant.commonName}</h3>
          <p className="text-sm italic text-soil-700">{plant.scientificName}</p>
        </div>
        <ZoneBadge min={plant.zones.min} max={plant.zones.max} userZone={userZone} />
      </div>
      <p className="text-sm text-soil-700 mt-2 line-clamp-2">{plant.description}</p>
      <div className="flex gap-2 mt-3 text-xs text-leaf-700">
        <span className="capitalize bg-leaf-50 px-2 py-0.5 rounded">
          {plant.category}
        </span>
        <span className="capitalize bg-leaf-50 px-2 py-0.5 rounded">
          {plant.sun.replace("-", " ")}
        </span>
      </div>
    </Link>
  );
}
