import { NavLink, Outlet } from 'react-router-dom'

const navLinkClass = ({ isActive }) =>
  `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
    isActive
      ? 'bg-indigo-50 text-indigo-700'
      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
  }`

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <NavLink to="/" className="flex items-center gap-2 text-lg font-bold text-indigo-600">
            Week 5 | JOKER APP | Myleen
          </NavLink>
          <nav aria-label="Main" className="flex gap-1">
            <NavLink to="/" end className={navLinkClass}>
              Jokes
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-6 sm:px-6 sm:py-10">
        <Outlet />
      </main>
    </div>
  )
}
