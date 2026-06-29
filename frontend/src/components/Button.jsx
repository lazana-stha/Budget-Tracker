import { Link } from "react-router-dom";

export default function Button() {
  return (
    <Link to="/add">
      <button className="bg-emerald-600 hover:bg-emerald-700 transition text-white font-semibold px-8 py-3 rounded-xl shadow-lg">
        + Add Transaction
      </button>
    </Link>
  );
}
