import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('provides semantic, evidence-driven technical profile sections', () => {
    render(<App />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(
      screen.getByRole('navigation', { name: 'Primary navigation' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Electronics Engineering student/i }),
    ).toBeInTheDocument()
    expect(screen.getByText('Student Researcher')).toBeInTheDocument()
    expect(
      screen.getByText('Universidad Nacional de Colombia'),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'SDR Spectral Monitoring' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Technical domain evidence' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('img', {
        name: /ESP32-C3 RF experimentation platform PCB render/,
      }),
    ).toHaveAttribute('src', '/media/flipper-zero-pcb-render.png')
    expect(
      screen.getByRole('link', { name: 'segilr@unal.edu.co' }),
    ).toHaveAttribute('href', 'mailto:segilr@unal.edu.co')
    expect(
      screen.getByRole('link', { name: '+57 304 655 2853' }),
    ).toHaveAttribute('href', 'tel:+573046552853')
    expect(screen.getByText('Manizales, Caldas, Colombia')).toBeInTheDocument()
    const githubLink = screen.getByRole('link', {
      name: 'github.com/segilrios',
    })
    expect(githubLink).toHaveAttribute('href', 'https://github.com/segilrios')
    expect(githubLink).toHaveAttribute('target', '_blank')
    expect(githubLink).toHaveAttribute('rel', 'noreferrer')
    expect(
      screen.queryByRole('link', { name: /download/i }),
    ).not.toBeInTheDocument()
  })

  it('has no detectable accessibility violations', async () => {
    const { container } = render(<App />)
    expect((await axe(container)).violations).toEqual([])
  })
})
