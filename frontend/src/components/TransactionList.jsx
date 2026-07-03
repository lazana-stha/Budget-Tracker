import TransactionItem from "./TransactionItem";

function TransactionList({ transactions, onDelete }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm space-y-3">
      <h2 className="text-lg font-semibold">Recent Transactions</h2>

      {transactions.length === 0 && (
        <p className="text-gray-500">No transactions yet</p>
      )}

      {transactions.map((t) => (
        <TransactionItem key={t.id} transaction={t} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default TransactionList;
