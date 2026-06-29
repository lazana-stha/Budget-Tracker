import { useState } from "react";
import BalanceSummary from "./components/BalanceSummary";
import TransactionList from "./components/TransactionList";
import Button from "./components/Button";

function App() {
  const [transactions] = useState([
    { id: 1, title: "Salary", amount: 50000, type: "income" },
    { id: 2, title: "Groceries", amount: 2500, type: "expense" },
    { id: 3, title: "Internet Bill", amount: 1200, type: "expense" },
    { id: 4, title: "Freelance Work", amount: 8000, type: "income" },
    { id: 5, title: "Movie", amount: 700, type: "expense" },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-10 px-5">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-5xl font-extrabold text-center text-emerald-700">
          Budget Tracker
        </h1>

        <p className="text-center text-gray-600 mt-2 mb-8">
          Personal Expense Tracker
        </p>

        <div className="flex justify-center mb-8">
          <Button />
        </div>

        <BalanceSummary />

        <TransactionList transactions={transactions} />

      </div>

    </div>
  );
}

export default App;