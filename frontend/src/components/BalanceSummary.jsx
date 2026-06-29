function BalanceSummary({ transactions }) {
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = income - expense;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      {/* BALANCE */}
      <div className="bg-white p-5 rounded-xl shadow-sm">
        <p className="text-gray-500">Balance</p>
        <h2 className="text-2xl font-bold mt-1">Rs. {balance}</h2>
      </div>

      {/* INCOME */}
      <div className="bg-red-50 p-5 rounded-xl shadow-sm">
        <p className="text-red-500">Income</p>
        <h2 className="text-2xl font-bold mt-1 text-red-600">+ Rs. {income}</h2>
      </div>

      {/* EXPENSE */}
      <div className="bg-green-50 p-5 rounded-xl shadow-sm">
        <p className="text-green-600">Expense</p>
        <h2 className="text-2xl font-bold mt-1 text-green-700">
          - Rs. {expense}
        </h2>
      </div>
    </div>
  );
}

export default BalanceSummary;
