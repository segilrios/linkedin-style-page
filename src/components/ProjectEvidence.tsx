import { useState } from 'react'
import type { ProjectDomainEvidence } from '../types/content'

type ProjectEvidenceProps = {
  entries: ProjectDomainEvidence[]
  totalProjects: number
}

export function ProjectEvidence({
  entries,
  totalProjects,
}: ProjectEvidenceProps) {
  const [selectedDomain, setSelectedDomain] = useState(entries[0]?.domain)
  const selectedEntry =
    entries.find((entry) => entry.domain === selectedDomain) ?? entries[0]

  if (!selectedEntry || totalProjects === 0) return null

  return (
    <section id="evidence" aria-labelledby="evidence-heading">
      <div className="section-introduction">
        <p className="eyebrow">Verified project coverage</p>
        <h2 id="evidence-heading">Technical domain evidence</h2>
        <p>
          Explore how the {totalProjects} selected projects demonstrate applied
          work across technical domains. Counts represent projects, not
          proficiency ratings.
        </p>
      </div>

      <div className="evidence-layout">
        <div
          className="evidence-chart"
          aria-label="Projects represented in each technical domain"
        >
          <div className="chart-scale" aria-hidden="true">
            <span>0</span>
            <span>{Math.round(totalProjects / 2)}</span>
            <span>{totalProjects} projects</span>
          </div>
          {entries.map((entry) => {
            const count = entry.projects.length
            const isSelected = entry.domain === selectedEntry.domain

            return (
              <button
                className="evidence-row"
                type="button"
                key={entry.domain}
                aria-pressed={isSelected}
                onClick={() => setSelectedDomain(entry.domain)}
              >
                <span className="evidence-label">{entry.domain}</span>
                <span className="evidence-track" aria-hidden="true">
                  <span
                    className="evidence-bar"
                    style={{ width: `${(count / totalProjects) * 100}%` }}
                  />
                </span>
                <span
                  className="evidence-count"
                  aria-label={`${count} of ${totalProjects} projects`}
                >
                  {count}/{totalProjects}
                </span>
              </button>
            )
          })}
        </div>

        <article className="evidence-detail" aria-live="polite">
          <p className="status">Selected domain</p>
          <h3>{selectedEntry.domain}</h3>
          <p>{selectedEntry.summary}</p>
          <p className="evidence-projects-label">Project evidence</p>
          <ul>
            {selectedEntry.projects.map((project) => (
              <li key={project}>{project}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}
