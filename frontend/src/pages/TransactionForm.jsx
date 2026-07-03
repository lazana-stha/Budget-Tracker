import { useState } from "react";

function TransactionForm({ onAdd, onCancel }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("income");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !amount || !category.trim()) return;

    onAdd?.({ title, amount, category, type });

    setTitle("");
    setAmount("");
    setCategory("");
    setType("income");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow mb-6 space-y-3"
    >
      <h2 className="text-xl font-semibold">Add Transaction</h2>

      <input
        type="text"
        placeholder="Title"
        className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-black/20"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-black/20"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <input
        type="text"
        placeholder="Category"
        className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-black/20"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <select
        className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-black/20"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <div className="flex gap-3">
        <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
          Add
        </button>

        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 transition"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default TransactionForm;
