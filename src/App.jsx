import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import JokesPage from './pages/JokesPage'
import JokeDetailPage from './pages/JokeDetailPage'
import AboutPage from './pages/AboutPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<JokesPage />} />
        <Route path="jokes/:id" element={<JokeDetailPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
