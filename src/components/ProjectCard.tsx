import type { Project } from '../types/content'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      {project.image ? (
        <img
          src={project.image.src}
          alt={project.image.alt}
          loading="lazy"
          decoding="async"
        />
      ) : (
        <p className="resource-unavailable">Project image unavailable</p>
      )}
      <p className="status">{project.status}</p>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <ul className="tag-list" aria-label={`${project.title} technologies`}>
        {project.technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
      <p className="project-actions">
        {project.repositoryUrl ? (
          <a href={project.repositoryUrl}>View repository</a>
        ) : (
          <span>Repository unavailable</span>
        )}
        {project.demoUrl ? (
          <a href={project.demoUrl}>View demo</a>
        ) : (
          <span>Demo unavailable</span>
        )}
      </p>
    </article>
  )
}
