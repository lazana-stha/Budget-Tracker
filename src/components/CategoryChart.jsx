import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#16a34a",
  "#ef4444",
  "#f59e0b",
  "#3b82f6",
  "#8b5cf6",
  "#ec4899",
  "#14b8a6",
  "#f97316",
  "#6366f1",
];

export default function CategoryChart({ transactions }) {
  const grouped = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, curr) => {
      const key = curr.category || "Other";
      const amount = Number(curr.amount) || 0;
      if (!acc[key]) acc[key] = { name: key, value: 0 };
      acc[key].value += amount;
      return acc;
    }, {});

  const data = Object.values(grouped);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        📊 Category-wise Expenses
      </h2>

      {data.length === 0 ? (
        <p className="text-gray-500 text-sm">No expenses to show yet</p>
      ) : (
        <ResponsiveContainer width="100%" height={280}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius={60}
              outerRadius={95}
              paddingAngle={2}
            >
              {data.map((entry, index) => (
                <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value) => [
                `Rs ${Number(value).toLocaleString()}`,
                "Spent",
              ]}
            />
            <Legend
              verticalAlign="bottom"
              height={36}
              wrapperStyle={{ fontSize: 12 }}
            />
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}
