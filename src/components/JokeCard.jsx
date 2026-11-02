import { Link } from 'react-router-dom'

export default function JokeCard({ joke }) {
  return (
    <li>
      <Link
        to={`/jokes/${joke.id}`}
        className="flex h-full flex-col justify-between gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-indigo-300 hover:shadow-md focus-visible:outline-2 focus-visible:outline-indigo-500"
      >
        <p className="font-medium text-slate-900">{joke.setup}</p>
        <span className="text-xs text-slate-500">Joke #{joke.id}</span>
      </Link>
    </li>
  )
}