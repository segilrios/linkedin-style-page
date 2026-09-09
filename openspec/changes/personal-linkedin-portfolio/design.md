# Design: Personal LinkedIn Portfolio

## Technical Approach

Build a static, single-page portfolio with Vite, React, TypeScript, and scoped CSS. Local typed modules render approved content and retain the original editorial dossier visual system. GitHub Actions builds `dist/`, uploads it as the Pages artifact, and deploys that artifact only from `main`, satisfying both delta specs.

## Architecture Decisions

| Decision | Choice | Alternatives considered | Rationale |
|---|---|---|---|
| Frontend stack | Vite + React + TypeScript + CSS | Static HTML; Next.js; component library | Typed, reusable sections without server or framework complexity. |
| Content and visual system | Typed local modules; original warm-paper/deep-ink/cobalt/amber dossier design | CMS; GitHub API; LinkedIn-like assets | Keeps curated data offline and preserves the approved original, non-affiliated portfolio direction. |
| Pages asset base | In Actions, derive `base` from `GITHUB_REPOSITORY` as `/{repository}/`; use `/` locally | Hard-coded root; hard-coded repository name | Project Pages serves at a repository subpath; deriving it keeps fork deployments correct while local development stays simple. Missing repository metadata during an Actions build fails configuration rather than publishing broken asset URLs. |
| Deployment | Official Pages artifact pipeline: configure, build, upload `dist`, deploy | Branch publishing; third-party action | Artifact deployment separates build from publication and prevents a failed build from becoming a release. |
| Permissions | Build: `contents: read`; deploy: `pages: write`, `id-token: write` | Default token permissions; broad write token | Job-scoped least privilege grants only checkout and Pages deployment capabilities. |

## Data Flow

```text
src/content/*.ts + public/{media,cv} ─→ React sections ─→ Vite build (dist/)
                                                   └──→ Pages artifact ─→ GitHub Pages URL
```

`profile.ts` provides identity, experience, skills, education, and contacts; `projects.ts` provides curated projects. Optional values remain omitted and unavailable image/demo resources remain non-actionable. Public asset references must be resolved from `import.meta.env.BASE_URL`, not hard-coded `/` paths, so CV and media work under the project path.

`.github/workflows/deploy-pages.yml` runs on pushes to `main` and manual dispatch. It checks out, configures Pages, installs locked dependencies, runs the validation/build command, and uploads `dist` with `actions/upload-pages-artifact`. A dependent deployment job uses `actions/deploy-pages`, `environment.name: github-pages`, and `environment.url: ${{ steps.deployment.outputs.page_url }}`. Concurrency uses the Pages group without cancelling an active deployment. A build, artifact-upload, checkout, or deployment failure exits non-zero, exposes its failing job/logs, and prevents dependent publication; a non-`main` manual run must not deploy.

## File Changes

| File | Action | Description |
|---|---|---|
| `package.json` | Create | Vite scripts, locked install support, and quality commands. |
| `vite.config.ts` | Create | Strict Vite configuration and Actions-aware project Pages base path. |
| `index.html`, `tsconfig.json`, `src/main.tsx`, `src/App.tsx` | Create | Typed application entry and semantic page composition. |
| `src/types/content.ts`, `src/content/{profile,projects}.ts` | Create | Local profile and project contracts/data. |
| `src/components/{Header,Hero,Experience,Skills,Education,Projects,Contact,ProjectCard}.tsx` | Create | Accessible portfolio sections and resource fallbacks. |
| `src/styles/global.css` | Create | Original editorial tokens, responsive layout, focus, and reduced-motion styles. |
| `public/media/.gitkeep`, `public/cv/.gitkeep` | Create | Owner-provided asset and CV destinations. |
| `.github/workflows/deploy-pages.yml` | Create | Least-privilege Pages artifact build/deploy workflow. |
| `README.md` | Modify | Setup, quality commands, and the verified Pages URL after deployment. |

## Interfaces / Contracts

```ts
type Project = { title: string; description: string; technologies: string[]; repositoryUrl: string; status: string; image?: { src: string; alt: string }; demoUrl?: string }
type Profile = { name: string; headline: string; introduction: string; experience: Experience[]; skills: string[]; education: Education[]; contacts: Contact[]; cv?: { href: string; label: string } }
```

The deployment job's `page_url` step output is the authoritative deployment URL. README publication occurs only after that output is available and verified; custom domains, DNS, redirects, and CNAME configuration are out of scope.

## Testing Strategy

| Layer | What to Test | Approach |
|---|---|---|
| Unit | Content omission, project fallbacks, base-aware asset resolution | Vitest/RTL and `jest-axe`; add tests before components/config behavior. |
| Integration | Semantic landmarks, keyboard navigation, production build URLs | RTL interaction tests; run `npm run build` with Actions repository metadata and inspect emitted asset paths. |
| Workflow | Trigger/ref guard, job permissions, artifact path, deployment URL binding, failure dependency | Validate YAML with `actionlint` and a workflow-contract test; GitHub run confirms `page_url` and visible failed job/log output. |
| E2E | Desktop/mobile readability, keyboard actions, no project-data network request | Playwright under the project base path. |

## Threat Matrix

| Boundary | Applicability | Design response | Planned RED tests |
|---|---|---|---|
| Documentation-like paths | N/A — no executable-file classification | No execution based on file names. | N/A |
| Git repository selection | Applicable — checkout must use the triggering repository workspace | Use `actions/checkout`; checkout failure blocks build/deploy. | Workflow contract rejects a missing checkout step. |
| Commit state | N/A — workflow neither stages nor commits | No repository mutation. | N/A |
| Push state | Applicable — publishing is push-triggered | Trigger only `main`; non-main/manual refs cannot deploy; failed runs publish nothing. | Workflow contract rejects missing branch/ref guards. |
| PR commands | N/A — workflow creates or invokes no PR command | No PR automation. | N/A |

These applicable RED cases must be carried unchanged into the next tasks revision; no tasks are created or changed in this design update.

## Migration / Rollout

No migration required. Enable GitHub Pages with GitHub Actions as the source, merge to `main`, verify the deployment output URL, then document that verified GitHub Pages URL. Custom domain and DNS work remain out of scope.

## Open Questions

- [ ] Owner must provide approved profile text, destinations, CV, project records, media, and meaningful alt text.
- [ ] Confirm whether narrow-screen navigation needs disclosure or can retain visible links.
