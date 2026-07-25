import { useMemo, useState } from "react";
import { plants } from "@/data/plants";
import type { PlantCategory } from "@/types/plant";
import PlantCard from "@/components/PlantCard";
import { useUserStore } from "@/store/userStore";

const categories: (PlantCategory | "all")[] = [
  "all",
  "vegetable",
  "herb",
  "fruit",
  "flower",
  "shrub",
  "tree",
];

export default function PlantDirectory() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<PlantCategory | "all">("all");
  const location = useUserStore((s) => s.location);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return plants.filter((plant) => {
      const matchesCategory = category === "all" || plant.category === category;
      const matchesQuery =
        q.length === 0 ||
        plant.commonName.toLowerCase().includes(q) ||
        plant.scientificName.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-soil-900">Plant Directory</h1>
        <p className="text-soil-700 text-sm mt-1">
          {plants.length} plants. Missing one?{" "}
          <a
            href="https://github.com/jonmurders/rooted/blob/main/CONTRIBUTING.md"
            className="underline hover:text-leaf-700"
          >
            Add it
          </a>
          .
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search plants..."
          className="flex-1 border border-leaf-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-leaf-400"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value as PlantCategory | "all")}
          className="border border-leaf-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-leaf-400"
        >
          {categories.map((c) => (
            <option key={c} value={c} className="capitalize">
              {c === "all" ? "All categories" : c}
            </option>
          ))}
        </select>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((plant) => (
          <PlantCard
            key={plant.id}
            plant={plant}
            userZone={location?.climate.hardinessZone}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-soil-700 text-sm">No plants match your search.</p>
      )}
    </div>
  );
}
