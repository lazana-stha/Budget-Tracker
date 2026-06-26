function TransactionItem({ transaction }) {
  return (
    <div
      className={`flex justify-between items-center p-3 mb-3 rounded-md
      ${transaction.type === "income" ? "bg-green-100" : "bg-red-100"}`}
    >
      <span>{transaction.title}</span>

      <span
        className={
          transaction.type === "income"
            ? "text-green-700 font-bold"
            : "text-red-700 font-bold"
        }
      >
        Rs. {transaction.amount}
      </span>
    </div>
  );
}

export default TransactionItem;
