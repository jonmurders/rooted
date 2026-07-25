import { Route, Routes } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import PlantDirectory from "@/pages/PlantDirectory";
import PlantDetail from "@/pages/PlantDetail";
import MyGarden from "@/pages/MyGarden";
import LocationSetup from "@/pages/LocationSetup";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
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
  );
}
