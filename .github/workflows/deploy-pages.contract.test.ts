import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'

const workflowPath = resolve(process.cwd(), '.github/workflows/deploy-pages.yml')

function readWorkflow(): string {
  return readFileSync(workflowPath, 'utf8')
}

describe('Pages workflow contract', () => {
  it('uses checkout, main or guarded manual dispatch, least privilege, and a dist artifact', () => {
    const workflow = readWorkflow()
    expect(workflow).toContain('actions/checkout@')
    expect(workflow).toContain('push:')
    expect(workflow).toContain('main')
    expect(workflow).toContain('workflow_dispatch:')
    expect(workflow).toContain('contents: read')
    expect(workflow).toContain('pages: write')
    expect(workflow).toContain('id-token: write')
    expect(workflow).toContain('path: ./dist')
  })

  it('binds deployment URL to the deploy action and blocks off-main manual deployment', () => {
    const workflow = readWorkflow()
    expect(workflow).toContain('needs: build')
    expect(workflow).toContain('actions/deploy-pages@')
    expect(workflow).toContain('steps.deployment.outputs.page_url')
    expect(workflow).toContain("github.ref == 'refs/heads/main'")
  })
})
