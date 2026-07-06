import { useEffect, useMemo, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import TransactionForm from "./components/TransactionForm";
import { getTransactions, saveTransactions } from "./utils/storage";

function App() {
  const [transactions, setTransactions] = useState(() => getTransactions());

  useEffect(() => {
    saveTransactions(transactions);
  }, [transactions]);

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

  const handleUpdate = (id, updated) => {
    setTransactions((prev) =>
      prev.map((t) =>
        String(t.id) === String(id)
          ? { ...t, ...updated, amount: Number(updated.amount) }
          : t,
      ),
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen">
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
            />
          }
        />
        <Route
          path="/transactions"
          element={
            <Transactions transactions={transactions} onDelete={handleDelete} />
          }
        />
        <Route
          path="/add"
          element={
            <TransactionForm transactions={transactions} onAdd={handleAdd} />
          }
        />
        <Route
          path="/edit/:id"
          element={
            <TransactionForm
              transactions={transactions}
              onUpdate={handleUpdate}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
