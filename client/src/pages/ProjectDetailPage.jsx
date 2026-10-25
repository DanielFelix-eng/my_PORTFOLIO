import { Link, useParams } from 'react-router-dom'
import ProjectPreview from '../components/ProjectPreview.jsx'
import Reveal from '../components/Reveal.jsx'
import NotFoundPage from './NotFoundPage.jsx'
import { getProjectBySlug } from '../data/projects.js'

function ProjectDetailPage() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) {
    return <NotFoundPage><Link className="text-link" to="/">Back to home</Link></NotFoundPage>
  }

  return (
    <main className="project-detail page-width">
      <Link className="back-link" to="/#projects">← All projects</Link>
      <Reveal className="project-detail-intro">
        <p className="eyebrow">Selected work</p>
        <h1>{project.title}</h1>
        <p>{project.shortDescription}</p>
      </Reveal>
      <div className="project-gallery">
        {project.screenshots.map((screenshot) => (
          <Reveal key={screenshot.id}>
            <ProjectPreview
              title={project.title}
              src={screenshot.src}
              alt={screenshot.alt}
              className={`preview-${project.order} preview-large`}
            />
          </Reveal>
        ))}
      </div>
      <section className="project-detail-info" aria-label="Project details">
        <div>
          <h2>About this project</h2>
          <p>{project.longDescription}</p>
        </div>
        <div>
          <h2>Built with</h2>
          {project.stack.length > 0 ? (
            <ul className="stack-list">
              {project.stack.map((technology) => <li key={technology}>{technology}</li>)}
            </ul>
          ) : null}
        </div>
        <div className="project-detail-links">
          <h2>Project links</h2>
          {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Live site ↗</a>}
          <a href={project.githubUrl} target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
      </section>
    </main>
  )
}

export default ProjectDetailPage
