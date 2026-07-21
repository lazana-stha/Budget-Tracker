import { useEffect, useMemo, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import TransactionForm from "./components/TransactionForm";
import { getData, addData, updateData, deleteData } from "./api/transactionApi";

function App() {
  const [transactions, setTransactions] = useState([]);

  const [error, setError] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await getData();
        setTransactions(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        setError((prev) => [...prev, error]);
      } finally {
        setIsLoading(false);
      }
    }
    loadData();
  }, []);

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

  const handleAdd = async (transaction) => {
    try {
      const res = await addData(transaction);
      setTransactions((prev) => [res.data, ...prev]);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteData(id);
      setTransactions((prev) => prev.filter((t) => t._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdate = async (id, updated) => {
    try {
      const res = await updateData(id, updated);
      setTransactions((prev) => prev.map((t) => (t._id === id ? res.data : t)));
    } catch (err) {
      console.error(err);
    }
  };

  // ✅ put this BEFORE return
  if (isLoading) {
    return <p className="p-4">Loading...</p>;
  }

  if (error.length > 0) {
    return (
      <div className="p-4">
        {error.map((err, index) => (
          <p key={index} className="text-red-500">
            {err.message || err.toString()}
          </p>
        ))}
      </div>
    );
  }

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
        <Route path="/add" element={<TransactionForm onAdd={handleAdd} />} />
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
