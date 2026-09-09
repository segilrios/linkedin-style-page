import type { Education as EducationEntry } from '../types/content'

export function Education({ entries }: { entries: EducationEntry[] }) {
  return (
    <section id="education" aria-labelledby="education-heading">
      <h2 id="education-heading">Education</h2>
      {entries.length > 0 ? (
        <ul className="education-list">
          {entries.map((entry) => (
            <li key={`${entry.credential}-${entry.institution}`}>
              <h3>{entry.credential}</h3>
              <p>{entry.institution}</p>
              <p>{entry.period}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No education entries have been published yet.</p>
      )}
    </section>
  )
}
