function NotFoundPage({ children }) {
  return (
    <main className="not-found page-width">
      <p className="eyebrow">404</p>
      <h1>Page not found.</h1>
      {children}
    </main>
  )
}

export default NotFoundPage
