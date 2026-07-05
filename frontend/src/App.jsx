import { useEffect, useMemo, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import BalanceSummary from "./components/BalanceSummary";
import TransactionForm from "./pages/TransactionForm";
import TransactionList from "./components/TransactionList";
import CategoryChart from "./components/CategoryChart";
import { getTransactions, saveTransactions } from "./utils/storage";

// Dashboard is just the "/" page: summary + list + chart
function Dashboard({ transactions, income, expense, balance, onDelete }) {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <BalanceSummary income={income} expense={expense} balance={balance} />

      <div className="flex justify-end mb-4">
        <Button data="Add Transaction" onClick={() => navigate("/add")} />
      </div>

      <TransactionList transactions={transactions} onDelete={onDelete} />

      <CategoryChart transactions={transactions} />
    </div>
  );
}

function App() {
  const [transactions, setTransactions] = useState(() => getTransactions());

  // Persist to localStorage whenever transactions change
  useEffect(() => {
    saveTransactions(transactions);
  }, [transactions]);

  // Derived totals - recalculated only when transactions change
  const income = useMemo(
    () =>
      transactions
        .filter((t) => t.type === "income")
        .reduce((sum, t) => sum + Number(t.amount), 0),
    [transactions],
  );

  const expense = useMemo(
    () =>
      transactions
        .filter((t) => t.type === "expense")
        .reduce((sum, t) => sum + Number(t.amount), 0),
    [transactions],
  );

  const balance = useMemo(() => income - expense, [income, expense]);

  // Keep the tab title in sync with the current balance
  useEffect(() => {
    document.title = `Balance: Rs ${balance.toLocaleString()}`;
  }, [balance]);

  const handleAdd = (transaction) => {
    setTransactions((prev) => [
      { ...transaction, id: Date.now(), amount: Number(transaction.amount) },
      ...prev,
    ]);
  };

  const handleDelete = (id) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <Dashboard
              transactions={transactions}
              income={income}
              expense={expense}
              balance={balance}
              onDelete={handleDelete}
            />
          }
        />
        <Route path="/add" element={<TransactionForm onAdd={handleAdd} />} />
      </Routes>
    </div>
  );
}

export default App;
