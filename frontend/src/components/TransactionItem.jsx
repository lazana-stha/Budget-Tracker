function TransactionItem({ transaction, onDeleteRequest, onEdit }) {
  const isIncome = transaction.type === "income";

  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-150">
      <div className="min-w-0">
        <p className="font-semibold text-gray-900 truncate">
          {transaction.title || transaction.category}
        </p>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
            {transaction.category}
          </span>
          <span className="text-xs text-gray-400">{transaction.date}</span>
        </div>
        {transaction.description && (
          <p className="text-xs text-gray-400 mt-1 truncate">
            {transaction.description}
          </p>
        )}
      </div>

      <div className="flex items-center gap-3 shrink-0 pl-3">
        <p
          className={`font-semibold whitespace-nowrap ${
            isIncome ? "text-green-600" : "text-red-500"
          }`}
        >
          {isIncome ? "+" : "-"} Rs{" "}
          {Number(transaction.amount).toLocaleString()}
        </p>

        <button
          onClick={() => onEdit(transaction.id)}
          className="text-sm text-green-700 hover:text-green-900 font-medium transition"
        >
          Edit
        </button>

        <button
          onClick={() => onDeleteRequest(transaction)}
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
