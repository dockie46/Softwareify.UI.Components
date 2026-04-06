# Project Commands

## Core Development
- `npm run build` — Runs tsc --noEmit && vite build (VERIFY_COMMAND)
- `npm run dev` — Runs vite build --watch (file watcher for development)
- `npm run storybook` — Launches Storybook dev server on port 6006
- `npm run build-storybook` — Builds static Storybook site
- `npm run lint` — Runs eslint on src (may not work - eslint not in devDependencies)
- `npm run prepublishOnly` — Runs build before npm publish (automatic)

## Git & Version Control
- `git status` — Show branch and modified files
- `git log --oneline -10` — Show recent commits
- `git diff` — Show uncommitted changes
- `git add .` — Stage all changes
- `git commit -m "feat([TIMESTAMP]): message"` — Commit with SDD format

## Key Build Artifacts
- `dist/index.es.js` — ES module entry point
- `dist/index.cjs.js` — CommonJS entry point
- `dist/index.d.ts` — TypeScript definitions
- `dist/style.css` — Generated styles (no Tailwind after refactor)

## File Structure Key Paths
- `src/index.ts` — Root barrel (every public export here)
- `src/config/designTokens.ts` — Design token definitions
- `src/components/` — Component modules (cards, forms, tables, headers, etc.)
- `.storybook/` — Storybook configuration
- `requirements/1775470061-refactor/` — Current refactor feature spec
