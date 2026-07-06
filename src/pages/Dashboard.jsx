import { useNavigate } from "react-router-dom";
import BalanceSummary from "../components/BalanceSummary";
import IncomeExpenseChart from "../components/IncomeExpenseChart";
import CategoryChart from "../components/CategoryChart";
import Button from "../components/Button";

function Dashboard({ transactions, income, expense, balance }) {
  const navigate = useNavigate();
  const recent = transactions.slice(0, 5);

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6">
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
        <Button data="➕ Add Transaction" onClick={() => navigate("/add")} />
      </div>

      <BalanceSummary income={income} expense={expense} balance={balance} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <IncomeExpenseChart income={income} expense={expense} />
        <CategoryChart transactions={transactions} />
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Recent Transactions
          </h2>
          <button
            onClick={() => navigate("/transactions")}
            className="text-sm text-green-700 hover:text-green-900 font-medium"
          >
            View All →
          </button>
        </div>

        <div className="space-y-3">
          {recent.length === 0 && (
            <p className="text-gray-500 text-sm">No transactions yet</p>
          )}
          {recent.map((t) => (
            <div
              key={t.id}
              className="flex justify-between items-center p-3 rounded-xl border border-gray-100"
            >
              <div>
                <p className="font-medium text-gray-900">
                  {t.title || t.category}
                </p>
                <p className="text-xs text-gray-400">
                  {t.category} • {t.date}
                </p>
              </div>
              <p
                className={`font-semibold ${
                  t.type === "income" ? "text-green-600" : "text-red-500"
                }`}
              >
                {t.type === "income" ? "+" : "-"} Rs{" "}
                {Number(t.amount).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
