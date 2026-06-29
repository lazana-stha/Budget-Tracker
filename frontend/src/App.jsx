import { useState } from "react";
import BalanceSummary from "./components/BalanceSummary";
import TransactionList from "./components/TransactionList";
import Button from "./components/Button";
import TransactionForm from "./pages/TransactionForm";

function App() {
  const [showForm, setShowForm] = useState(false);

  const [transactions, setTransactions] = useState([
    { id: 1, title: "Salary", amount: 50000, type: "income" },
    { id: 2, title: "Freelance", amount: 15000, type: "income" },
    { id: 3, title: "Groceries", amount: 2500, type: "expense" },
    { id: 4, title: "Rent", amount: 12000, type: "expense" },
    { id: 5, title: "Transport", amount: 1500, type: "expense" },
  ]);

  const addTransaction = (data) => {
    const newTransaction = {
      id: Date.now(),
      ...data,
    };

    setTransactions([newTransaction, ...transactions]);
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-200 px-4 py-10">
      <div className="max-w-2xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Budget Tracker</h1>

          <p className="text-gray-600 text-lg">
            Track your income and expenses easily
          </p>
        </div>

        {!showForm ? (
          <>
            {/* BUTTON */}
            <div className="flex justify-center mb-6">
              <Button onClick={() => setShowForm(true)} />
            </div>

            <BalanceSummary transactions={transactions} />
            <TransactionList transactions={transactions} />
          </>
        ) : (
          <TransactionForm
            onAdd={addTransaction}
            onCancel={() => setShowForm(false)}
          />
        )}
      </div>
    </div>
  );
}

export default App;
