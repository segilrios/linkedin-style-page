import { expect, test } from '@playwright/test'

test('keeps portfolio content readable and keyboard navigation operable on desktop', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('main')).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Professional portfolio' })).toBeVisible()

  await page.keyboard.press('Tab')
  await expect(page.getByRole('link', { name: 'Skip to main content' })).toBeFocused()
  await page.keyboard.press('Enter')
  await expect(page.getByRole('main')).toBeFocused()
})

test('keeps navigation and locally curated project content available on mobile without GitHub API requests', async ({ page }) => {
  const githubRequests: string[] = []
  page.on('request', (request) => {
    if (request.url().includes('api.github.com')) githubRequests.push(request.url())
  })

  await page.goto('/')
  await expect(page.getByRole('navigation', { name: 'Primary navigation' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Selected projects' })).toBeVisible()
  expect(githubRequests).toEqual([])
})
