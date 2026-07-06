function BalanceSummary({ income, expense, balance }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 mt-6">
      <div className="bg-white p-4 rounded-lg shadow text-center border border-gray-100">
        <p className="text-gray-500 text-sm">Balance</p>
        <h2
          className={`text-xl font-bold ${
            balance < 0 ? "text-red-600" : "text-gray-900"
          }`}
        >
          Rs {balance.toLocaleString()}
        </h2>
      </div>

      <div className="bg-green-50 p-4 rounded-lg text-center border border-green-100">
        <p className="text-green-700 text-sm">Income</p>
        <h2 className="text-lg font-semibold text-green-700">
          Rs {income.toLocaleString()}
        </h2>
      </div>

      <div className="bg-red-50 p-4 rounded-lg text-center border border-red-100">
        <p className="text-red-700 text-sm">Expense</p>
        <h2 className="text-lg font-semibold text-red-600">
          Rs {expense.toLocaleString()}
        </h2>
      </div>
    </div>
  );
}

export default BalanceSummary;
