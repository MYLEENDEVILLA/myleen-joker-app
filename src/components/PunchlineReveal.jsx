import { useState } from 'react'

export default function PunchlineReveal({ punchline }) {
  // Only this component cares whether the punchline is showing, so it owns the state.
  const [revealed, setRevealed] = useState(false)

  return (
    <div className="mt-6">
      {revealed && (
        <p className="rounded-lg bg-indigo-50 px-4 py-3 text-lg font-medium text-indigo-900">
          {punchline}
        </p>
      )}
      <button
        type="button"
        onClick={() => setRevealed((current) => !current)}
        className="mt-4 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
      >
        {revealed ? 'Hide punchline' : 'Reveal punchline'}
      </button>
    </div>
  )
}
