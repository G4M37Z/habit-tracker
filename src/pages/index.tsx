export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-4">🔥 Habit Tracker</h1>
      <p className="mb-8 text-gray-300">Build streaks, earn rewards, level up!</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-md">
        {/* Habit Card 1 */}
        <div className="p-4 rounded-xl bg-white/10 border border-purple-500/50">
          <h2 className="font-semibold">🏃 Morning Run</h2>
          <button className="mt-2 px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition">
            Mark Done
          </button>
        </div>

        {/* Habit Card 2 */}
        <div className="p-4 rounded-xl bg-white/10 border border-pink-500/50">
          <h2 className="font-semibold">📖 Read 30 Pages</h2>
          <button className="mt-2 px-4 py-2 bg-pink-600 rounded-lg hover:bg-pink-700 transition">
            Mark Done
          </button>
        </div>
      </div>
    </div>
  )
}
