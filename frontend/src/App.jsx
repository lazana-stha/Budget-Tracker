import BalanceSummary from "./components/BalanceSummary";
import TransactionList from "./components/TransactionList";

function App() {
  const transactions = [
    { id: 1, title: "Salary", amount: 50000, type: "income" },
    { id: 2, title: "Groceries", amount: 2500, type: "expense" },
    { id: 3, title: "Internet Bill", amount: 1200, type: "expense" },
    { id: 4, title: "Freelance Work", amount: 8000, type: "income" },
    { id: 5, title: "Movie", amount: 700, type: "expense" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-2">Budget Tracker</h1>

      <p className="text-center text-gray-600 mb-6">Personal Expense Tracker</p>

      <BalanceSummary />

      <TransactionList transactions={transactions} />
    </div>
  );
}

export default App;
