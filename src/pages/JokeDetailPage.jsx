import { Link, useParams } from 'react-router-dom'
import { useJoke } from '../hooks/useJokes'
import PunchlineReveal from '../components/PunchlineReveal'
import Skeleton from '../components/Skeleton'
import StatusMessage from '../components/StatusMessage'

function DetailSkeleton() {
  return (
    <div
      role="status"
      aria-label="Loading joke"
      className="rounded-xl border border-slate-200 bg-white p-6"
    >
      <span className="sr-only">Loading joke…</span>
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="mt-8 h-4 w-1/2" />
    </div>
  )
}

export default function JokeDetailPage() {
  const { id } = useParams()
  const { data: joke, isPending, isError, error, refetch } = useJoke(id)

  let content
  if (isPending) {
    content = <DetailSkeleton />
  } else if (isError) {
    const canRetry = error.status !== 404
    content = (
      <StatusMessage
        variant="error"
        title={canRetry ? 'Could not load this joke' : 'Joke not found'}
        message={error.message}
        actionLabel={canRetry ? 'Try again' : undefined}
        onAction={refetch}
      />
    )
  } else {
    content = (
      <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-xl font-bold sm:text-2xl">{joke.setup}</h1>

        <PunchlineReveal key={joke.id} punchline={joke.punchline} />

        <p className="mt-8 border-t border-slate-100 pt-6 text-sm text-slate-500">
          Joke #{joke.id}
        </p>
      </article>
    )
  }

  return (
    <div className="flex flex-col gap-5">
      <Link to="/" className="text-sm font-medium text-indigo-600 hover:text-indigo-800">
        ← Back to jokes
      </Link>
      {content}
    </div>
  )
}
