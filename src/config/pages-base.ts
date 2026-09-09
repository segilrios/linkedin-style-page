export type BuildEnvironment = {
  GITHUB_ACTIONS?: string
  GITHUB_REPOSITORY?: string
}

export function getPagesBase(environment: BuildEnvironment): string {
  if (environment.GITHUB_ACTIONS !== 'true') {
    return '/'
  }

  const repository = environment.GITHUB_REPOSITORY
  if (!repository) {
    throw new Error('GITHUB_REPOSITORY is required for GitHub Pages builds')
  }

  const [, repositoryName] = repository.split('/')
  if (!repositoryName) {
    throw new Error('GITHUB_REPOSITORY must use the owner/repository format')
  }

  return `/${repositoryName}/`
}

export function publicAssetPath(base: string, path: string): string {
  return `${base}${path.replace(/^\//, '')}`
}
