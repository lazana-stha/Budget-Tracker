import TransactionItem from "./TransactionItem";

function TransactionList({ transactions }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Recent Transactions</h2>
        <span className="text-sm text-gray-500">
          {transactions.length} items
        </span>
      </div>

      <div className="space-y-3">
        {transactions.map((t) => (
          <TransactionItem key={t.id} transaction={t} />
        ))}
      </div>
    </div>
  );
}

export default TransactionList;
