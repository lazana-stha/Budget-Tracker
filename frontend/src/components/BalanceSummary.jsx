function BalanceSummary() {
  const income = 58000;
  const expense = 4400;
  const balance = income - expense;

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-semibold mb-4">Balance Summary</h2>

      <div className="space-y-2">
        <p className="text-green-600 font-bold">Income: Rs. {income}</p>

        <p className="text-red-600 font-bold">Expense: Rs. {expense}</p>

        <p className="text-blue-600 font-bold">Balance: Rs. {balance}</p>
      </div>
    </div>
  );
}

export default BalanceSummary;
