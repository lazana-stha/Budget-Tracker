function BalanceSummary({ income, expense, balance }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
        <p className="text-gray-500 text-sm font-medium">Balance</p>
        <h2
          className={`text-2xl font-bold mt-1 ${
            balance < 0 ? "text-red-600" : "text-gray-900"
          }`}
        >
          Rs {balance.toLocaleString()}
        </h2>
      </div>

      <div className="bg-green-50 p-5 rounded-2xl shadow-sm border border-green-100">
        <p className="text-green-700 text-sm font-medium">💰 Total Income</p>
        <h2 className="text-2xl font-bold mt-1 text-green-700">
          Rs {income.toLocaleString()}
        </h2>
      </div>

      <div className="bg-red-50 p-5 rounded-2xl shadow-sm border border-red-100">
        <p className="text-red-700 text-sm font-medium">💸 Total Expense</p>
        <h2 className="text-2xl font-bold mt-1 text-red-600">
          Rs {expense.toLocaleString()}
        </h2>
      </div>
    </div>
  );
}

export default BalanceSummary;
