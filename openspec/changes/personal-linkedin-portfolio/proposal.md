# Proposal: Personal LinkedIn Portfolio

## Intent

Create an accessible, responsive LinkedIn-inspired portfolio with curated content and no affiliation. Publish through GitHub Pages and document its URL.

## Scope

### In Scope
- Personal introduction, experience, skills, education, contact links, and downloadable CV.
- Curated projects: title, description, technologies, repository, optional image, status, and demo link.
- Responsive, semantic, keyboard-accessible presentation using local résumé and project data; no GitHub API.
- GitHub Actions deployment of build output to GitHub Pages and project Pages URL documentation.

### Out of Scope
- LinkedIn branding, proprietary assets, or integration.
- GitHub API synchronization or automatic project import.
- Framework, visual system, and interaction details, deferred to design.
- Custom domains without separately provided DNS details; a CNAME file alone does not configure a domain.

## Capabilities

### New Capabilities
- `personal-portfolio`: Accessible, responsive presentation of local professional and project content.
- `github-pages-deployment`: Actions deployment to GitHub Pages and URL documentation.

### Modified Capabilities
None. No source-of-truth capabilities currently exist in `openspec/specs/`.

## Approach

Render local content. Design selects the stack and visual system; GitHub Actions builds and deploys static output. Document the Pages URL.

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `openspec/specs/personal-portfolio/` | New | Portfolio capability spec. |
| `openspec/specs/github-pages-deployment/` | New | Pages deployment capability spec. |
| Application source structure | New | Portfolio UI and local content. |
| `.github/workflows/deploy-pages.yml` | New | Build and deploy output. |
| `README.md` | Modified | Document the Pages URL. |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Stack and visual system are not selected | Medium | Resolve in design before implementation. |
| LinkedIn affiliation is implied | Medium | Use original branding and assets. |
| Local content is incomplete | Medium | Validate required fields before release. |
| Pages output or URL is wrong | Medium | Verify workflow artifact and published URL. |

## Rollback Plan

Revert the implementation commits and README. Disable the repository Pages source to stop publishing; no external state needs cleanup.

## Dependencies

- Design-phase stack and visual-direction decision.
- Owner-provided résumé, project, contact, CV, and media content.
- Repository permissions and GitHub Pages availability.

## Success Criteria

- [ ] The site presents all approved profile sections and curated project fields.
- [ ] Project data is local and no GitHub API requests are made.
- [ ] Core navigation and links are keyboard-operable and semantic.
- [ ] The experience is usable at desktop and mobile baseline layouts.
- [ ] GitHub Actions deploys the validated build output to GitHub Pages.
- [ ] Documentation includes the published GitHub Pages URL.
