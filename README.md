# Professional Portfolio

An original, accessible professional portfolio built with React, TypeScript, and Vite. It uses a warm editorial dossier visual system; it is not affiliated with, integrated with, or branded as LinkedIn.

## Local development

```bash
npm install
npm run dev
```

## Quality commands

```bash
npm run check
npm run test -- --run
npm run test:e2e
npm run build
npx actionlint .github/workflows/deploy-pages.yml
```

## Replace owner content

All profile and project information is maintained locally and never imported from the GitHub API:

- Update `src/content/profile.ts` with approved introduction, experience, skills, education, and contact destinations.
- Update `src/content/projects.ts` with curated project records only.
- Put approved images in `public/media/`; reference them with the base-aware public asset helper.
- Put the approved CV in `public/cv/`, add the downloadable action to `profile.ts`, and verify it under the project Pages path.

The starter content intentionally leaves owner-provided entries, contact destinations, and CV unavailable rather than fabricating personal information.

## GitHub Pages

The workflow deploys successfully built artifacts from `main` through the official GitHub Pages artifact pipeline. Enable GitHub Pages with **GitHub Actions** as the source, then run or merge a successful `main` deployment.

**Published URL:** No published URL is available yet. Add the `page_url` reported by a successful GitHub Pages deployment here; do not substitute an unverified repository URL or custom domain.

Custom domains, CNAME files, DNS configuration, redirects, and domain documentation are intentionally out of scope until owner-provided DNS configuration is validated.
