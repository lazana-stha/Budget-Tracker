const VARIANTS = {
  primary: "bg-green-600 text-white hover:bg-green-700",
  danger: "bg-red-500 text-white hover:bg-red-600",
  secondary: "bg-gray-100 text-gray-700 hover:bg-gray-200",
};

export default function Button({
  data = "Add New",
  onClick,
  variant = "primary",
  type = "button",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-5 py-2.5 rounded-lg font-medium text-sm shadow-sm transition ${VARIANTS[variant]}`}
    >
      {data}
    </button>
  );
}
