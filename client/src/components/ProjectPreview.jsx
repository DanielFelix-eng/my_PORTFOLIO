function ProjectPreview({ title, src, alt = title, className = '' }) {
  return (
    <div className={`project-preview${src ? ' has-image' : ''} ${className}`}>
      {src ? (
        <img className="project-preview-image" src={src} alt={alt} loading="lazy" />
      ) : (
        <div className="preview-window" role="img" aria-label={alt}>
          <div className="preview-toolbar">
            <span />
            <span />
            <span />
            <div />
          </div>
          <div className="preview-content" aria-hidden="true">
            <div className="preview-sidebar">
              <i />
              <i />
              <i />
              <i />
            </div>
            <div className="preview-main">
              <div className="preview-heading" />
              <div className="preview-cards">
                <i />
                <i />
                <i />
              </div>
              <div className="preview-chart">
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProjectPreview
