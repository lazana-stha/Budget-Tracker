function BalanceSummary() {
  const income = 58000;
  const expense = 4400;
  const balance = income - expense;

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
      <h2 className="text-2xl font-bold text-gray-700 mb-6">Balance Summary</h2>

      <div className="grid md:grid-cols-3 gap-5">
        <div className="bg-green-100 rounded-2xl p-5 text-center">
          <p className="text-gray-600">Income</p>
          <h3 className="text-2xl font-bold text-green-700">Rs. {income}</h3>
        </div>

        <div className="bg-red-100 rounded-2xl p-5 text-center">
          <p className="text-gray-600">Expense</p>
          <h3 className="text-2xl font-bold text-red-700">Rs. {expense}</h3>
        </div>

        <div className="bg-emerald-100 rounded-2xl p-5 text-center">
          <p className="text-gray-600">Balance</p>
          <h3 className="text-2xl font-bold text-emerald-700">Rs. {balance}</h3>
        </div>
      </div>
    </div>
  );
}

export default BalanceSummary;
