function TransactionItem({ transaction }) {
  const isIncome = transaction.type === "income";

  return (
    <div className="flex items-center justify-between bg-gray-50 rounded-lg overflow-hidden">
      {/* LEFT COLOR BAR */}
      <div
        className={`w-2 h-full ${isIncome ? "bg-green-600" : "bg-red-500"}`}
      ></div>

      {/* CONTENT */}
      <div className="flex justify-between w-full px-4 py-3">
        <div>
          <p className="font-medium">{transaction.title}</p>
          <small className="text-gray-500">{transaction.type}</small>
        </div>

        <p
          className={`font-semibold ${
            isIncome ? "text-green-600" : "text-red-500"
          }`}
        >
          {isIncome ? "+" : "-"} Rs. {transaction.amount}
        </p>
      </div>
    </div>
  );
}

export default TransactionItem;
