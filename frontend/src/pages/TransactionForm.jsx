import { useState } from "react";

export default function TransactionForm({ onAdd, onCancel }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !amount) return;

    onAdd({
      title,
      amount: Number(amount),
      type,
    });

    setTitle("");
    setAmount("");
    setType("income");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-5 rounded-lg">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Add Transaction
      </h2>

      <input
        type="text"
        placeholder="Title"
        className="border p-2 w-full mb-3"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        className="border p-2 w-full mb-3"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select
        className="border p-2 w-full mb-4"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <div className="flex justify-between">
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>

        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-400 text-white px-4 py-2 rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
