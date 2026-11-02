const buttonClass =
  'rounded-md px-3 py-1.5 text-sm font-medium ring-1 ring-slate-300 transition-colors enabled:hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50 bg-white text-slate-700'

export default function Pagination({ page, totalPages, onPageChange }) {
  if (totalPages <= 1) {
    return null
  }

  return (
    <nav aria-label="Pagination" className="flex items-center justify-between gap-3">
      <button
        type="button"
        className={buttonClass}
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
      >
        Previous
      </button>
      <span className="text-sm text-slate-600">
        Page {page} of {totalPages}
      </span>
      <button
        type="button"
        className={buttonClass}
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
      >
        Next
      </button>
    </nav>
  )
}
