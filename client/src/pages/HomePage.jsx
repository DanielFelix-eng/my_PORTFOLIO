import Hero from './hero.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import Reveal from '../components/Reveal.jsx'
import { projects } from '../data/projects.js'

function HomePage() {
  return (
    <main>
      <Hero />

      <section className="section page-width" id="projects" aria-labelledby="projects-title">
        <Reveal className="section-heading">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 id="projects-title">A few things I&apos;ve worked on.</h2>
          </div>
          <span className="section-count">{projects.filter((project) => project.featured).length} projects</span>
        </Reveal>
        <div className="projects-grid">
          {projects
            .filter((project) => project.featured)
            .sort((first, second) => first.order - second.order)
            .map((project) => (
              <Reveal key={project.slug}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
        </div>
      </section>

      <section className="section about-section" id="about" aria-labelledby="about-title">
        <Reveal className="page-width about-content">
          <p className="eyebrow">A little about me</p>
          <h2 id="about-title">Thoughtful work, built for people.</h2>
          <p>
            Hi, I'm Daniel Felix, a full-stack developer from Kenya. I build web
            apps with the MERN stack, and I'm especially drawn to AI-powered products,
            including chat widgets that answer questions from your own documents and
            server monitoring tools.

            I learn best by building real things, shipping them, and fixing what
            breaks along the way. I'm open to freelance projects and collaborations,
            so if you have an idea, let's build it.
          </p>
        </Reveal>
      </section>

      <section className="section page-width contact-section" id="contact" aria-labelledby="contact-title">
        <Reveal className="contact-content">
          <p className="eyebrow">Get in touch</p>
          <h2 id="contact-title">Have a project in mind?</h2>
          <a className="button button-primary" href="mailto:felixjardini502@gmail.com">
            felixjardini502@gmail.com
          </a>
        </Reveal>
      </section>
    </main>
  )
}

export default HomePage
