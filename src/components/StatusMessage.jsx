const VARIANTS = {
  error: {
    role: 'alert',
    icon: '⚠️',
    container: 'border-red-200 bg-red-50',
    title: 'text-red-800',
    body: 'text-red-700',
    button: 'bg-red-600 text-white hover:bg-red-700',
  },
  empty: {
    role: 'status',
    icon: '📭',
    container: 'border-slate-200 bg-white',
    title: 'text-slate-800',
    body: 'text-slate-600',
    button: 'bg-indigo-600 text-white hover:bg-indigo-700',
  },
}

export default function StatusMessage({ variant, title, message, actionLabel, onAction }) {
  const styles = VARIANTS[variant]

  return (
    <div
      role={styles.role}
      className={`flex flex-col items-center rounded-xl border px-6 py-10 text-center ${styles.container}`}
    >
      <span aria-hidden="true" className="text-3xl">
        {styles.icon}
      </span>
      <h2 className={`mt-3 text-lg font-semibold ${styles.title}`}>{title}</h2>
      <p className={`mt-1 max-w-md text-sm ${styles.body}`}>{message}</p>
      {actionLabel && onAction && (
        <button
          type="button"
          onClick={() => onAction()}
          className={`mt-5 rounded-md px-4 py-2 text-sm font-medium transition-colors ${styles.button}`}
        >
          {actionLabel}
        </button>
      )}
    </div>
  )
}
