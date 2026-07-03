function TransactionItem({ transaction, onDelete }) {
  const isIncome = transaction.type === "income";

  return (
    <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg border border-gray-100 hover:border-gray-200 transition">
      <div>
        <p className="font-medium">{transaction.title}</p>
        <small className="text-gray-500">{transaction.category}</small>
      </div>

      <div className="flex items-center gap-4">
        <p
          className={`font-semibold ${
            isIncome ? "text-green-600" : "text-red-500"
          }`}
        >
          {isIncome ? "+" : "-"} Rs{" "}
          {Number(transaction.amount).toLocaleString()}
        </p>

        <button
          onClick={() => onDelete(transaction.id)}
          className="text-red-500 hover:scale-110 transition-transform"
          aria-label="Delete transaction"
        >
          ❌
        </button>
      </div>
    </div>
  );
}

export default TransactionItem;
