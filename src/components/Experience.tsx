import type { Experience as ExperienceEntry } from '../types/content'

export function Experience({ entries }: { entries: ExperienceEntry[] }) {
  return (
    <section id="experience" aria-labelledby="experience-heading">
      <h2 id="experience-heading">Experience</h2>
      {entries.length > 0 ? (
        <ol className="timeline">
          {entries.map((entry) => (
            <li key={`${entry.role}-${entry.organization}`}>
              <h3>{entry.role}</h3>
              <p>{entry.organization}</p>
              <p>{entry.period}</p>
              <p>{entry.description}</p>
            </li>
          ))}
        </ol>
      ) : (
        <p>No experience entries have been published yet.</p>
      )}
    </section>
  )
}
