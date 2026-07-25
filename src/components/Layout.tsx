import { NavLink, Outlet } from "react-router-dom";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
    isActive
      ? "bg-leaf-600 text-white"
      : "text-leaf-900 hover:bg-leaf-100"
  }`;

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-leaf-50 border-b border-leaf-200">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2 font-bold text-leaf-800 text-lg">
            <img src="/leaf.svg" alt="" className="w-6 h-6" />
            Rooted
          </NavLink>
          <nav className="flex gap-1">
            <NavLink to="/plants" className={navLinkClass}>
              Plants
            </NavLink>
            <NavLink to="/my-garden" className={navLinkClass}>
              My Garden
            </NavLink>
            <NavLink to="/location" className={navLinkClass}>
              Location
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-6">
        <Outlet />
      </main>

      <footer className="border-t border-leaf-200 text-center text-sm text-soil-700 py-4">
        Rooted is free and open source.{" "}
        <a
          href="https://github.com/jonmurders/rooted"
          className="underline hover:text-leaf-700"
        >
          Contribute on GitHub
        </a>
        .
      </footer>
    </div>
  );
}
