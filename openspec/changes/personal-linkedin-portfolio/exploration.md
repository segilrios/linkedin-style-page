## Exploration: personal-linkedin-portfolio

### Current State
The repository is documentation-only: no application scaffold, implementation architecture, or test command exists. The OpenSpec source-of-truth specs directory is empty. The requested site is a new LinkedIn-inspired personal résumé/portfolio, with GitHub projects curated manually rather than fetched through the GitHub API.

### Affected Areas
- `openspec/changes/personal-linkedin-portfolio/exploration.md` — records the discovery phase for the new change.
- `README.md` — may need a revised project description once the approved implementation scope is known.
- `openspec/specs/` — has no existing domain specification; later phases will introduce the relevant source-of-truth spec.

### Approaches
1. **Static content with structured local data** — Render résumé sections and project cards from manually maintained local content definitions.
   - Pros: Honors the manual-curation constraint; keeps presentation consistent; makes future content updates less repetitive.
   - Cons: Requires selecting an application stack and defining a content schema before implementation.
   - Effort: Medium

2. **Static hand-authored page sections** — Maintain every résumé entry and project card directly in the page markup.
   - Pros: Minimal initial structure and no data-model abstraction.
   - Cons: Content updates can become inconsistent or repetitive as the portfolio grows.
   - Effort: Low

### Recommendation
Use structured local content for manually curated experience and project entries, but defer framework, visual sections, interaction behavior, and content fields to the proposal. This supports the confirmed no-API requirement without inventing unconfirmed product decisions.

### Risks
- No application stack, visual system, résumé content, or test tooling exists yet, so implementation scope cannot be estimated reliably.
- A LinkedIn-inspired presentation needs explicit boundaries to avoid copying LinkedIn branding, proprietary assets, or implying platform integration.

### Ready for Proposal
No — ask the user to confirm the intended sections, target devices/accessibility expectations, visual boundaries, project-card fields, and whether contact links or a downloadable résumé are in scope. Then create the proposal.
