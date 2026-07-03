import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import BalanceSummary from "./components/BalanceSummary";
import TransactionForm from "./pages/TransactionForm";
import TransactionList from "./components/TransactionList";
import CategoryChart from "./components/CategoryChart";
import { getTransactions, saveTransactions } from "./utils/storage";

function App() {
  const [transactions, setTransactions] = useState(() => getTransactions());
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    saveTransactions(transactions);
  }, [transactions]);

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const balance = income - expense;

  const handleAdd = (transaction) => {
    setTransactions((prev) => [
      { ...transaction, id: Date.now(), amount: Number(transaction.amount) },
      ...prev,
    ]);
    setShowForm(false);
  };

  const handleDelete = (id) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <div className="max-w-4xl mx-auto p-6">
        <BalanceSummary income={income} expense={expense} balance={balance} />

        <div className="flex justify-end mb-4">
          <Button data="Add Transaction" onClick={() => setShowForm(true)} />
        </div>

        {showForm && (
          <TransactionForm
            onAdd={handleAdd}
            onCancel={() => setShowForm(false)}
          />
        )}

        <TransactionList transactions={transactions} onDelete={handleDelete} />

        <CategoryChart transactions={transactions} />
      </div>
    </div>
  );
}

export default App;
