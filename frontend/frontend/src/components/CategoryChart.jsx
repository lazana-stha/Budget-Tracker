import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function CategoryChart({ transactions }) {
  const data = Object.values(
    transactions
      .filter((t) => t.type === "expense")
      .reduce((acc, curr) => {
        if (!acc[curr.category]) {
          acc[curr.category] = { name: curr.category, amount: 0 };
        }
        acc[curr.category].amount += Number(curr.amount);
        return acc;
      }, {}),
  );

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm mt-6">
      <h2 className="text-lg font-semibold mb-4">Category Spending</h2>

      {data.length === 0 ? (
        <p className="text-gray-500">No expenses to show yet</p>
      ) : (
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Bar dataKey="amount" fill="#ef4444" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}
