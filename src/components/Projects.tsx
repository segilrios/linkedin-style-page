import type { Project } from '../types/content'
import { ProjectCard } from './ProjectCard'

export function Projects({ entries }: { entries: Project[] }) {
  return (
    <section id="projects" aria-labelledby="projects-heading">
      <h2 id="projects-heading">Selected projects</h2>
      {entries.length > 0 ? (
        <div className="project-grid">
          {entries.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      ) : (
        <p>No projects have been published yet.</p>
      )}
    </section>
  )
}
