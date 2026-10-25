import { useEffect, useState } from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/navbar.jsx'
import HomePage from './pages/HomePage.jsx'
import ProjectDetailPage from './pages/ProjectDetailPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import './App.css'

function App() {
  const location = useLocation()
  const [theme, setTheme] = useState(() => {
    return window.localStorage.getItem('portfolio-theme') === 'dark' ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    if (!location.hash) return

    const target = document.getElementById(decodeURIComponent(location.hash.slice(1)))
    if (target) {
      target.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
        block: 'start',
      })
    }
  }, [location.hash, location.pathname])

  return (
    <div className="site-shell">
      <Navbar theme={theme} onThemeChange={setTheme} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        <Route
          path="*"
          element={
            <NotFoundPage>
              <Link className="text-link" to="/">Back to home</Link>
            </NotFoundPage>
          }
        />
      </Routes>
      <footer className="site-footer">
        <Link className="brand" to="/">Daniel Felix<span>.</span></Link>
        <p>Daniel Felix. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
