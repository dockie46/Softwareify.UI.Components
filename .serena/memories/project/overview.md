# Project Overview: @softwareifycz/ui-components

## Purpose
Shared React component library built on Ant Design, consumed by multiple Softwareify products. Components must be generic, well-typed, and visually consistent. Optimize for reusability.

## Tech Stack
- **Framework**: React 18+ (peer dependency)
- **UI Library**: Ant Design v5.22.5 (peer dep >=5.0.0)
- **Build Tool**: Vite with @vitejs/plugin-react
- **Language**: TypeScript 5.5.4 (strict mode)
- **i18n**: i18next + react-i18next
- **Date handling**: dayjs
- **Drag & Drop**: react-dnd (optional peer dependency)
- **Resize detection**: react-resize-detector (optional peer dependency)
- **Component Stories**: Storybook 10 with React Vite adapter
- **Testing**: Vitest with Storybook addon, Playwright for E2E
- **Package Format**: ESM + CJS with type definitions

## Key Constraints
- **TypeScript**: strict: true, no `any` in application code (use `unknown` instead)
- **Component Pattern**: Props interface → arrow function → default export (never React.FC or class components)
- **Barrel files**: Every component directory must have index.ts re-exporting
- **Design tokens**: Must use designTokens.ts, no hardcoded magic numbers
- **antd alignment**: Compose/wrap antd primitives, don't build from scratch

## Current Version
0.1.1 (npm.pkg.github.com - private GitHub packages registry)

## Breaking Changes in Progress
- Upgrading to antd v6 (from v5)
- Unifying design tokens on antd ConfigProvider
- Removing Tailwind CSS dependency
- Fixing React Hooks Rules violations (getRules function)
- Zero `any` types in codebase
