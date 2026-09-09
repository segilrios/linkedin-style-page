# Tasks: Personal LinkedIn Portfolio

## Workload Forecast

| Field | Value |
|---|---|
| Estimated changed lines | 1,050–1,400 |
| 800-line budget risk | High |
| 400-line budget risk | High |
| Chained PRs recommended | Yes |
| Suggested split | Approved `size:exception`; three units |
| Delivery strategy | ask-on-risk |
| Chain strategy | size-exception |

Decision needed before apply: No
Chained PRs recommended: Yes
Chain strategy: size-exception
400-line budget risk: High

### Suggested Work Units

| Unit | Goal | Likely PR | Focused test command | Runtime harness | Rollback boundary |
|---|---|---|---|---|---|
| 1 | Tooling, content, base path | PR 1 | `npm run check` | Local dev server | package/config, `src/content/` |
| 2 | Responsive portfolio UI | PR 1 | `npm run test -- --run` | Playwright smoke | components, `src/App.tsx`, CSS |
| 3 | Pages workflow and handoff | PR 1 | `npm run test:e2e` | Actions on `main` | workflow, tests, `README.md` |

## Phase 1: Foundation and Tooling

- [x] 1.1 Create `package.json`, `tsconfig.json`, `index.html`, and `src/main.tsx` with install, test, check, and build scripts.
- [x] 1.2 Create `vitest.config.ts`, `playwright.config.ts`, `eslint.config.js`, `.prettierrc.json`, and `src/test/setup.ts`; add scripts in `package.json`.
- [x] 1.3 Create `public/media/.gitkeep` and `public/cv/.gitkeep` as owner-content destinations.
- [x] 1.4 RED: add `src/config/pages-base.test.ts` for local `/`, Actions `/{repository}/`, missing-repository failure, and base-aware public CV/media paths.
- [x] 1.5 Create `vite.config.ts` and base-aware asset helpers so the configuration passes `src/config/pages-base.test.ts`.

## Phase 2: Content Contracts and Page Rendering

- [x] 2.1 Create `src/types/content.ts`, `src/content/profile.ts`, and `src/content/projects.ts` with typed content and optional actions.
- [x] 2.2 Create `src/App.tsx` and `src/components/{Header,Hero,Experience,Skills,Education,Projects,Contact}.tsx` with landmarks and native controls.
- [x] 2.3 Create `src/components/ProjectCard.tsx` to label missing images and omit unavailable demo links.
- [x] 2.4 Create `src/styles/global.css` with editorial tokens, responsive layouts, focus, and reduced motion.

## Phase 3: Tests and Workflow

- [x] 3.1 Add `src/components/ProjectCard.test.tsx` for complete and missing image/demo cards; assert unavailable resources are non-actionable.
- [x] 3.2 Add `src/App.test.tsx` for sections, empty collections, omitted contact/CV actions, landmarks, and `jest-axe`.
- [x] 3.3 Add `e2e/portfolio.spec.ts` for desktop/mobile readability, keyboard actions, and offline project content.
- [x] 3.4 RED: add `.github/workflows/deploy-pages.contract.test.ts` rejecting missing checkout, `main`/manual guards, permissions, `dist`, `page_url`, and deploy dependency.
- [x] 3.5 Create `.github/workflows/deploy-pages.yml` with guarded publishing, off-main manual refusal, artifact dependency, concurrency, permissions, and non-zero failures.

## Phase 4: Verification

- [x] 4.1 Update `README.md` with setup, content replacement, quality commands, and the original-brand boundary.
- [x] 4.2 Run `npm run check`, `npm run test -- --run`, and `npm run test:e2e`; retain owner-content failures.
- [x] 4.3 In `openspec/changes/personal-linkedin-portfolio/verify-report.md`, record the accepted design-validation gap as unavailable, never PASS.
- [x] 4.4 Run `npx actionlint .github/workflows/deploy-pages.yml` and its contract test; verify failures do not publish.
- [x] 4.5 After Pages is enabled and a `main` run succeeds, record its `page_url` in `README.md`; otherwise state no published URL and do not invent one.
- [ ] 4.6 Verify the project-path URL, desktop/mobile keyboard actions, base-aware CV/media, workflow logs, and no unvalidated custom domain. *(Blocked: requires a successful remote GitHub Pages deployment and its workflow logs.)*
