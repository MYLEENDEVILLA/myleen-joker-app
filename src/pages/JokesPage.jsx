import { useState } from 'react'
import { useJokes } from '../hooks/useJokes'
import JokeFilters from '../components/JokeFilters'
import JokeList from '../components/JokeList'
import JokeListSkeleton from '../components/JokeListSkeleton'
import StatusMessage from '../components/StatusMessage'

export default function JokesPage() {
  // The search text only affects this page, so it lives here.
  const [search, setSearch] = useState('')

  const { data: jokes = [], isPending, isError, error, refetch, isFetching } = useJokes()

  const searchTerm = search.trim().toLowerCase()

  const visibleJokes = jokes.filter((joke) =>
    `${joke.setup} ${joke.punchline}`.toLowerCase().includes(searchTerm),
  )

  let content
  if (isPending) {
    content = <JokeListSkeleton />
  } else if (isError) {
    content = (
      <StatusMessage
        variant="error"
        title="Could not load jokes"
        message={error.message}
        actionLabel="Try again"
        onAction={refetch}
      />
    )
  } else if (visibleJokes.length === 0) {
    content = (
      <StatusMessage
        variant="empty"
        title={searchTerm ? 'No jokes match your search' : 'No jokes yet'}
        message={
          searchTerm
            ? 'Try a different search term.'
            : 'There are no jokes to show right now.'
        }
        actionLabel={searchTerm ? 'Clear search' : undefined}
        onAction={() => setSearch('')}
      />
    )
  } else {
    content = (
      <>
        <p className="text-sm text-slate-600">
          Showing {visibleJokes.length} jokes
        </p>
        <JokeList jokes={visibleJokes} />
      </>
    )
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold sm:text-3xl">Joke library</h1>
          <p className="mt-1 text-slate-600">
            Browse jokes, then open one to reveal the punchline.
          </p>
        </div>
        <button
          type="button"
          onClick={() => refetch()}
          disabled={isPending || isFetching}
          className="rounded-md bg-white px-4 py-2 text-sm font-medium text-slate-700 ring-1 ring-slate-300 transition-colors enabled:hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isFetching && !isPending ? 'Shuffling…' : 'Shuffle new jokes'}
        </button>
      </div>

      {!isPending && !isError && (
        <JokeFilters search={search} onSearchChange={setSearch} />
      )}

      {content}
    </div>
  )
}