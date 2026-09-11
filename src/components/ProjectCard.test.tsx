import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ProjectCard } from './ProjectCard'

const completeProject = {
  title: 'Research notebook',
  description: 'A local, curated project record.',
  technologies: ['React', 'TypeScript'],
  repositoryUrl: 'https://example.com/repository',
  status: 'Complete',
  image: { src: '/media/notebook.jpg', alt: 'Notebook cover' },
  demoUrl: 'https://example.com/demo',
}

describe('ProjectCard', () => {
  it('renders every available project resource', () => {
    render(<ProjectCard project={completeProject} />)

    expect(screen.getByRole('img', { name: 'Notebook cover' })).toHaveAttribute(
      'src',
      '/media/notebook.jpg',
    )
    expect(screen.getByRole('link', { name: 'View demo' })).toHaveAttribute(
      'href',
      'https://example.com/demo',
    )
  })

  it('labels unavailable images and does not expose a missing demo as a link', () => {
    const projectWithoutResources = {
      title: completeProject.title,
      description: completeProject.description,
      technologies: completeProject.technologies,
      status: completeProject.status,
    }
    render(<ProjectCard project={projectWithoutResources} />)

    expect(screen.getByText('Project image unavailable')).toBeInTheDocument()
    expect(screen.getByText('Repository unavailable')).toBeInTheDocument()
    expect(screen.getByText('Demo unavailable')).toBeInTheDocument()
    expect(screen.queryByRole('link', { name: 'View repository' })).not.toBeInTheDocument()
    expect(screen.queryByRole('link', { name: 'View demo' })).not.toBeInTheDocument()
  })
})
