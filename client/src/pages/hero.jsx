function Hero() {
  return (
    <section className="hero page-width" aria-labelledby="hero-title">
      <p className="eyebrow">Developer portfolio</p>
      <h1 id="hero-title">
        Hi, I'm Daniel Felix.
        <br />
        Full-stack developer building with the MERN stack.
      </h1>
      <p className="hero-description">
        I specialize in AI-powered web applications, from chat widgets that answer
        questions from your own documents to server monitoring tools. I learn best
        by building real things, shipping them, and fixing what breaks along the way.
      </p>
      <div className="hero-actions">
        <a className="button button-primary" href="#projects">View projects</a>
        <a className="button button-secondary" href="#contact">Contact</a>
      </div>
    </section>
  )
}

export default Hero
