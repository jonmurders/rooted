import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "@/components/Layout";

// The plant database (100 plants x up to 20 varieties) is only needed by
// Directory/Detail/My Garden, so it's split into its own chunk(s) rather
// than bundled into every page's initial load.
const Home = lazy(() => import("@/pages/Home"));
const PlantDirectory = lazy(() => import("@/pages/PlantDirectory"));
const PlantDetail = lazy(() => import("@/pages/PlantDetail"));
const MyGarden = lazy(() => import("@/pages/MyGarden"));
const LocationSetup = lazy(() => import("@/pages/LocationSetup"));
const NotFound = lazy(() => import("@/pages/NotFound"));

export default function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/plants" element={<PlantDirectory />} />
          <Route path="/plants/:plantId" element={<PlantDetail />} />
          <Route path="/my-garden" element={<MyGarden />} />
          <Route path="/location" element={<LocationSetup />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
