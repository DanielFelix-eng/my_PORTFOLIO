import { Link, NavLink } from 'react-router-dom'

function Navbar({ theme, onThemeChange }) {
  return (
    <header className="site-header">
      <nav className="navigation page-width" aria-label="Main navigation">
        <Link className="brand" to="/" aria-label="Daniel Felix, home">
          Daniel Felix<span>.</span>
        </Link>
        <div className="navigation-actions">
          <NavLink className="nav-link" to="/#projects">Work</NavLink>
          <NavLink className="nav-link" to="/#about">About</NavLink>
          <NavLink className="nav-link" to="/#contact">Contact</NavLink>
          <button
            className="theme-toggle"
            type="button"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            aria-pressed={theme === 'dark'}
            onClick={() => onThemeChange((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'))}
          >
            <span aria-hidden="true">{theme === 'light' ? '☾' : '☀'}</span>
            <span className="theme-toggle-label">{theme === 'light' ? 'Dark' : 'Light'}</span>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
