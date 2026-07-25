import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="text-center py-16">
      <h1 className="text-3xl font-bold text-soil-900">Page not found</h1>
      <p className="text-soil-700 mt-2">
        <Link to="/" className="underline text-leaf-700">
          Back home
        </Link>
      </p>
    </div>
  );
}
