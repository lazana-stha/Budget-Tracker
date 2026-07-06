export default function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center shadow-md sticky top-0 z-10">
      <h1 className="text-xl font-bold tracking-tight">💰 Budget Tracker</h1>

      <div className="text-sm opacity-70 hidden sm:block">
        Track your income & expenses
      </div>
    </nav>
  );
}
