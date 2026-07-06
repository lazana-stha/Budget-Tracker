import { useState } from "react";
import { CATEGORIES } from "../utils/categories";

function TransactionForm({ initialData, onSubmit, onCancel }) {
  const [title, setTitle] = useState(initialData?.title || "");
  const [type, setType] = useState(initialData?.type || "expense");
  const [amount, setAmount] = useState(
    initialData?.amount ? String(initialData.amount) : "",
  );
  const [category, setCategory] = useState(
    initialData?.category || CATEGORIES[0],
  );
  const [description, setDescription] = useState(
    initialData?.description || "",
  );
  const [date, setDate] = useState(
    initialData?.date || new Date().toISOString().split("T")[0],
  );
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setError("Please enter a title for this transaction.");
      return;
    }
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
    onSubmit({
      title: title.trim(),
      type,
      amount,
      category,
      description,
      date,
    });
  };

  const isEdit = Boolean(initialData);

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 space-y-5"
    >
      <div>
        <h2 className="text-xl font-semibold text-gray-900">
          {isEdit ? "Edit Transaction" : "Add Transaction"}
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          {isEdit
            ? "Update the details of this transaction."
            : "Fill in the details below to record a new transaction."}
        </p>
      </div>

      {error && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg p-3">
          {error}
        </p>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Title
        </label>
        <input
          type="text"
          placeholder="e.g. Groceries, Netflix, Tuition Fee"
          className="border border-gray-300 p-2.5 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500 transition"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Type
          </label>
          <select
            className="border border-gray-300 p-2.5 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500 transition"
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
            className="border border-gray-300 p-2.5 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500 transition"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <select
            className="border border-gray-300 p-2.5 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500 transition"
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
            className="border border-gray-300 p-2.5 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500 transition"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <textarea
          rows="3"
          placeholder="Add a note about this transaction (optional)"
          className="border border-gray-300 p-2.5 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500 resize-none transition"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="flex gap-3 pt-2">
        <button className="bg-green-600 text-white px-5 py-2.5 rounded-lg hover:bg-green-700 transition shadow-sm font-medium">
          {isEdit ? "Save Changes" : "Save Transaction"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-100 text-gray-700 px-5 py-2.5 rounded-lg hover:bg-gray-200 transition"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default TransactionForm;
