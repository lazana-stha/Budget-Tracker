import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import TransactionItem from "./TransactionItem";
import Modal from "./Modal";
import Button from "./Button";
import { CATEGORIES } from "../utils/categories";

const DATE_FILTERS = [
  { value: "all", label: "All Time" },
  { value: "today", label: "Today" },
  { value: "7", label: "Last 7 Days" },
  { value: "30", label: "Last 30 Days" },
  { value: "custom", label: "Custom Range" },
];

function withinDateFilter(dateStr, dateFilter, from, to) {
  if (dateFilter === "all") return true;
  const d = new Date(dateStr);
  const now = new Date();
  const startOfToday = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
  );

  if (dateFilter === "today") return d >= startOfToday;

  if (dateFilter === "7" || dateFilter === "30") {
    const days = Number(dateFilter);
    const start = new Date(startOfToday);
    start.setDate(start.getDate() - (days - 1));
    return d >= start;
  }

  if (dateFilter === "custom") {
    if (from && d < new Date(from)) return false;
    if (to && d > new Date(to)) return false;
    return true;
  }

  return true;
}

function TransactionList({ transactions, onDelete }) {
  const navigate = useNavigate();

  const [deleteTarget, setDeleteTarget] = useState(null);
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("all");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return transactions.filter((t) => {
      const matchesSearch = !q || (t.title || "").toLowerCase().includes(q);
      const matchesType = typeFilter === "all" || t.type === typeFilter;
      const matchesCategory =
        categoryFilter === "all" || t.category === categoryFilter;
      const matchesDate = withinDateFilter(
        t.date,
        dateFilter,
        fromDate,
        toDate,
      );
      return matchesSearch && matchesType && matchesCategory && matchesDate;
    });
  }, [
    transactions,
    search,
    typeFilter,
    categoryFilter,
    dateFilter,
    fromDate,
    toDate,
  ]);

  const confirmDelete = () => {
    if (deleteTarget) {
      onDelete(deleteTarget.id);
      setDeleteTarget(null);
    }
  };

  return (
    <div className="space-y-4">
      <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 space-y-4">
        <input
          type="text"
          placeholder="🔍 Search by title"
          className="border border-gray-300 p-2.5 w-full rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <select
            className="border border-gray-300 p-2.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500/30"
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
          >
            <option value="all">All Types</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>

          <select
            className="border border-gray-300 p-2.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500/30"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="all">All Categories</option>
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-wrap gap-2">
          {DATE_FILTERS.map((d) => (
            <button
              key={d.value}
              onClick={() => setDateFilter(d.value)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition border ${
                dateFilter === d.value
                  ? "bg-green-600 text-white border-green-600"
                  : "bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100"
              }`}
            >
              {d.label}
            </button>
          ))}
        </div>

        {dateFilter === "custom" && (
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">
                From
              </label>
              <input
                type="date"
                className="border border-gray-300 p-2 rounded-lg text-sm w-full focus:outline-none focus:ring-2 focus:ring-green-500/30"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">
                To
              </label>
              <input
                type="date"
                className="border border-gray-300 p-2 rounded-lg text-sm w-full focus:outline-none focus:ring-2 focus:ring-green-500/30"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
              />
            </div>
          </div>
        )}
      </div>

      <div className="space-y-3">
        {filtered.length === 0 && (
          <p className="text-gray-500 text-sm text-center py-6 bg-white rounded-2xl border border-gray-100">
            No transactions found
          </p>
        )}

        {filtered.map((t) => (
          <TransactionItem
            key={t.id}
            transaction={t}
            onDeleteRequest={setDeleteTarget}
            onEdit={(id) => navigate(`/edit/${id}`)}
          />
        ))}
      </div>

      <Modal isOpen={!!deleteTarget} onClose={() => setDeleteTarget(null)}>
        {deleteTarget && (
          <div className="space-y-4 text-center">
            <h3 className="text-lg font-bold text-gray-900">
              Are you sure you want to delete?
            </h3>
            <p className="text-sm text-gray-500">
              "{deleteTarget.title || deleteTarget.category}" will be removed
              permanently.
            </p>
            <div className="flex gap-3 justify-center pt-2">
              <Button
                data="Yes, Delete"
                variant="danger"
                onClick={confirmDelete}
              />
              <Button
                data="Cancel"
                variant="secondary"
                onClick={() => setDeleteTarget(null)}
              />
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default TransactionList;
