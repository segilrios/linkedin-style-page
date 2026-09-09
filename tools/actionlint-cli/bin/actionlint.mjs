#!/usr/bin/env node
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { createLinter } from 'actionlint'

const files = process.argv.slice(2)
if (files.length === 0) {
  console.error('Usage: actionlint <workflow.yml> [...workflow.yml]')
  process.exitCode = 2
} else {
  const lint = await createLinter()
  let hasErrors = false

  for (const file of files) {
    const path = resolve(file)
    const findings = lint(await readFile(path, 'utf8'), path)
    for (const finding of findings) {
      hasErrors = true
      console.error(`${finding.file}:${finding.line}:${finding.column}: ${finding.message}`)
    }
  }

  if (hasErrors) process.exitCode = 1
}
