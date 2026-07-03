export default function Button({ data = "Add New", onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition"
    >
      {data}
    </button>
  );
}
