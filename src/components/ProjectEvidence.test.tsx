import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { projectDomainEvidence, projects } from '../content/projects'
import { ProjectEvidence } from './ProjectEvidence'

describe('ProjectEvidence', () => {
  it('exposes chart values and updates supporting evidence from the keyboard', async () => {
    const user = userEvent.setup()
    render(
      <ProjectEvidence
        entries={projectDomainEvidence}
        totalProjects={projects.length}
      />,
    )

    expect(screen.getAllByLabelText('2 of 4 projects')).toHaveLength(3)

    const dataDomain = screen.getByRole('button', {
      name: /Machine learning and data/,
    })
    await user.click(dataDomain)
    expect(dataDomain).toHaveAttribute('aria-pressed', 'true')

    const webDomain = screen.getByRole('button', { name: /Web engineering/ })
    webDomain.focus()
    await user.keyboard('{Enter}')

    expect(webDomain).toHaveAttribute('aria-pressed', 'true')
    expect(
      screen.getByText(
        'Accessible React and TypeScript interface delivery with a Vite build pipeline.',
      ),
    ).toBeInTheDocument()
    expect(screen.getAllByText('Professional Portfolio')).not.toHaveLength(0)
  })
})
