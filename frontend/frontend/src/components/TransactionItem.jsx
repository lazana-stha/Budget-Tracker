function TransactionItem({ transaction, onDelete, onClick }) {
  const isIncome = transaction.type === "income";

  return (
    <div
      onClick={onClick}
      className="flex justify-between items-center bg-gray-50 p-4 rounded-lg border border-gray-100 hover:border-gray-300 hover:shadow-sm transition cursor-pointer"
    >
      <div>
        <p className="font-medium capitalize">{transaction.category}</p>
        <small className="text-gray-500">{transaction.date}</small>
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
          onClick={(e) => {
            e.stopPropagation(); // don't trigger the modal when deleting
            onDelete(transaction.id);
          }}
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
