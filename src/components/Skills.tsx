export function Skills({ entries }: { entries: string[] }) {
  return (
    <section id="skills" aria-labelledby="skills-heading">
      <h2 id="skills-heading">Skills</h2>
      {entries.length > 0 ? (
        <ul className="tag-list">
          {entries.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      ) : (
        <p>No skills have been published yet.</p>
      )}
    </section>
  )
}
