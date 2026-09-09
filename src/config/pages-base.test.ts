import { describe, expect, it } from 'vitest'
import { getPagesBase, publicAssetPath } from './pages-base'

describe('GitHub Pages base paths', () => {
  it('uses the root path outside Actions', () => {
    expect(getPagesBase({ GITHUB_ACTIONS: undefined, GITHUB_REPOSITORY: undefined })).toBe('/')
  })

  it('uses the repository path in Actions', () => {
    expect(getPagesBase({ GITHUB_ACTIONS: 'true', GITHUB_REPOSITORY: 'owner/portfolio' })).toBe(
      '/portfolio/',
    )
  })

  it('fails an Actions build without repository metadata', () => {
    expect(() => getPagesBase({ GITHUB_ACTIONS: 'true', GITHUB_REPOSITORY: undefined })).toThrow(
      'GITHUB_REPOSITORY is required',
    )
  })

  it('builds public CV and media paths from the configured base', () => {
    expect(publicAssetPath('/portfolio/', 'cv/resume.pdf')).toBe('/portfolio/cv/resume.pdf')
    expect(publicAssetPath('/portfolio/', 'media/profile.jpg')).toBe('/portfolio/media/profile.jpg')
  })
})
