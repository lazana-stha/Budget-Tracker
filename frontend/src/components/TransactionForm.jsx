import { useState } from "react";
import { useNavigate } from "react-router-dom";

function TransactionForm({ onAdd }) {
  const [form, setForm] = useState({
    title: "",
    amount: "",
    type: "expense",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await onAdd(form); // 🔥 THIS is critical

    navigate("/transactions"); // redirect after add
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-3">
      <input
        name="title"
        placeholder="Title"
        value={form.title}
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <input
        name="amount"
        type="number"
        placeholder="Amount"
        value={form.amount}
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <select
        name="type"
        value={form.type}
        onChange={handleChange}
        className="border p-2 w-full"
      >
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <button className="bg-green-500 text-white px-4 py-2">
        Add Transaction
      </button>
    </form>
  );
}

export default TransactionForm;
