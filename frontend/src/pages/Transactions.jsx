import TransactionList from "../components/TransactionList";

function Transactions({ transactions, onDelete }) {
  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6">
      <h1 className="text-xl font-bold text-gray-900 mb-4">Transactions</h1>
      <TransactionList transactions={transactions} onDelete={onDelete} />
    </div>
  );
}

export default Transactions;
