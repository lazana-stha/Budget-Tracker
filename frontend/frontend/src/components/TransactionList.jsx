import { useState } from "react";
import TransactionItem from "./TransactionItem";
import Modal from "./Modal";

function TransactionList({ transactions, onDelete }) {
  const [selected, setSelected] = useState(null);
  const isIncome = selected?.type === "income";

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm space-y-3">
      <h2 className="text-lg font-semibold">Recent Transactions</h2>

      {transactions.length === 0 && (
        <p className="text-gray-500">No transactions yet</p>
      )}

      {transactions.map((t) => (
        <TransactionItem
          key={t.id}
          transaction={t}
          onDelete={onDelete}
          onClick={() => setSelected(t)}
        />
      ))}

      <Modal isOpen={!!selected} onClose={() => setSelected(null)}>
        {selected && (
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Transaction Details</h3>

            <p
              className={`text-2xl font-bold ${
                isIncome ? "text-green-600" : "text-red-500"
              }`}
            >
              {isIncome ? "+" : "-"} Rs{" "}
              {Number(selected.amount).toLocaleString()}
            </p>

            <div className="text-sm text-gray-700 space-y-1">
              <p>
                <span className="font-medium">Type:</span>{" "}
                <span className="capitalize">{selected.type}</span>
              </p>
              <p>
                <span className="font-medium">Category:</span>{" "}
                {selected.category}
              </p>
              <p>
                <span className="font-medium">Date:</span> {selected.date}
              </p>
              <p>
                <span className="font-medium">Description:</span>{" "}
                {selected.description || "—"}
              </p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default TransactionList;
