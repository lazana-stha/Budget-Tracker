import { NavLink } from "react-router-dom";

const linkClass = ({ isActive }) =>
  `px-3 py-1.5 rounded-lg text-sm font-medium transition ${
    isActive ? "bg-white text-green-700" : "text-white/90 hover:bg-white/10"
  }`;

export default function Navbar() {
  return (
    <nav className="bg-green-600 px-4 sm:px-6 py-3 flex flex-wrap gap-3 justify-between items-center shadow-md sticky top-0 z-10">
      <h1 className="text-lg sm:text-xl font-bold tracking-tight text-white flex items-center gap-2">
        💰 Budget Tracker
      </h1>

      <div className="flex gap-1 sm:gap-2">
        <NavLink to="/" end className={linkClass}>
          Dashboard
        </NavLink>
        <NavLink to="/transactions" className={linkClass}>
          Transactions
        </NavLink>
        <NavLink to="/add" className={linkClass}>
          ➕ Add
        </NavLink>
      </div>
    </nav>
  );
}
