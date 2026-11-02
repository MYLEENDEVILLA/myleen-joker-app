export default function JokeFilters({ search, onSearchChange }) {
  return (
    <label className="block sm:w-64">
      <span className="sr-only">Search jokes</span>
      <input
        type="search"
        value={search}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Search jokes…"
        className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
      />
    </label>
  )
}
