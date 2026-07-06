import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CATEGORIES = [
  "Food",
  "Groceries",
  "Education",
  "Financial Services",
  "Entertainment",
  "Transport",
  "Others",
];

function TransactionForm({ onAdd }) {
  const navigate = useNavigate();

  const [type, setType] = useState("expense");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(
    () => new Date().toISOString().split("T")[0],
  );
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!amount || Number(amount) <= 0) {
      setError("Please enter a valid amount greater than 0.");
      return;
    }
    if (!category) {
      setError("Please select a category.");
      return;
    }
    if (!date) {
      setError("Please select a date.");
      return;
    }

    setError("");
    onAdd?.({ type, amount, category, description, date });
    navigate("/");
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="mb-4 text-sm text-gray-600 hover:text-black transition flex items-center gap-1"
      >
        ← Back
      </button>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-sm space-y-4"
      >
        <h2 className="text-xl font-semibold">Add Transaction</h2>

        {error && (
          <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded p-2">
            {error}
          </p>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Type
          </label>
          <select
            className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-black/20"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Amount
          </label>
          <input
            type="number"
            min="0"
            step="0.01"
            placeholder="0.00"
            className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-black/20"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <select
            className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-black/20"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date
          </label>
          <input
            type="date"
            className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-black/20"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            rows="3"
            placeholder="Add a note (optional)"
            className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-black/20 resize-none"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="flex gap-3 pt-2">
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
            Save Transaction
          </button>
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 transition"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default TransactionForm;
