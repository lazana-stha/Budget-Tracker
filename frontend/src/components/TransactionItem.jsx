function TransactionItem({ transaction }) {
  return (
    <div
      className={`flex justify-between items-center rounded-2xl p-5 shadow-md transition hover:scale-[1.02]

      ${
        transaction.type === "income"
          ? "bg-green-50 border-l-8 border-green-500"
          : "bg-red-50 border-l-8 border-red-500"
      }`}
    >
      <div>
        <h3 className="font-semibold text-lg">{transaction.title}</h3>

        <p className="text-gray-500 capitalize">{transaction.type}</p>
      </div>

      <div
        className={`font-bold text-xl

        ${transaction.type === "income" ? "text-green-700" : "text-red-700"}`}
      >
        Rs. {transaction.amount}
      </div>
    </div>
  );
}

export default TransactionItem;
