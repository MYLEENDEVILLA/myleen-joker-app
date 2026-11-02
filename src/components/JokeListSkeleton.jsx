import Skeleton from './Skeleton'

export default function JokeListSkeleton({ count = 6 }) {
  return (
    <div role="status" aria-label="Loading jokes">
      <span className="sr-only">Loading jokes…</span>
      <ul className="grid gap-3">
        {Array.from({ length: count }, (_, index) => (
          <li key={index} className="rounded-xl border border-slate-200 bg-white p-4">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="mt-4 h-3 w-16" />
          </li>
        ))}
      </ul>
    </div>
  )
}
