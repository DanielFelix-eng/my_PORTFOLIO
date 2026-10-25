import { Link } from 'react-router-dom'
import ProjectPreview from './ProjectPreview.jsx'

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <Link className="project-card-link" to={`/projects/${project.slug}`}>
        <ProjectPreview
          title={project.title}
          src={project.screenshots[0]?.src}
          alt={project.screenshots[0].alt}
          className={`preview-${project.order}`}
        />
        <div className="project-card-copy">
          <div className="project-card-heading">
            <h3>{project.title}</h3>
            <span aria-hidden="true">↗</span>
          </div>
          <p>{project.shortDescription}</p>
        </div>
      </Link>
    </article>
  )
}

export default ProjectCard
