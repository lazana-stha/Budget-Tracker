import { useNavigate } from "react-router-dom";

export default function TransactionForm() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex justify-center items-center">
      <form className="bg-white rounded-3xl shadow-xl p-8 w-96">
        <h2 className="text-3xl font-bold text-center text-emerald-700 mb-6">
          Add Transaction
        </h2>

        <input
          type="text"
          placeholder="Transaction Name"
          className="border-2 border-gray-200 rounded-xl p-3 w-full mb-4 outline-none focus:border-emerald-500"
        />

        <input
          type="number"
          placeholder="Amount"
          className="border-2 border-gray-200 rounded-xl p-3 w-full mb-4 outline-none focus:border-emerald-500"
        />

        <select className="border-2 border-gray-200 rounded-xl p-3 w-full mb-6 outline-none focus:border-emerald-500">
          <option>Income</option>
          <option>Expense</option>
        </select>

        <div className="flex gap-4">
          <button
            type="submit"
            className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-semibold"
          >
            Save
          </button>

          <button
            type="button"
            onClick={() => navigate("/")}
            className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-3 rounded-xl font-semibold"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
