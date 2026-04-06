---
status: approved
# status lifecycle: draft → approved → implemented | cancelled
#
# draft:       requirements being written; Claude will not implement
# approved:    all [NEEDS CLARIFICATION] resolved; signed off; Claude may proceed
# implemented: fulfillment audit passed; feature is shipped
# cancelled:    feature was cancelled before completion

iteration: 1775470061
feature: refactor
approved_by: jakubkacik
approved_date: 2026-04-06
---

# 1775470061 — Production-Ready Code Quality Refactor

---

## Why We're Building This

We are refactoring @softwareifycz/ui-components to production quality: upgrading to antd v6, unifying the design token system on antd's ConfigProvider API, hardening TypeScript types, fixing architectural anti-patterns, and removing the implicit Tailwind dependency. The most important constraint is **minimal breaking changes to existing component public APIs** — consumers upgrade with dependency bumps and a short migration checklist documented in `MIGRATION.md`.

---

## Functional Requirements

### FR-1: antd v6 Migration

**As a library maintainer**, I can build and ship the library on antd v6 so that consumers get the latest antd features, performance improvements, and long-term support.

**Acceptance Criteria**:
- Peer dependency updated to `antd >=6.0.0` (v5 not supported — see TD-3)
- All component imports updated to match antd v6 API (removed/renamed exports handled)
- `npm run build` passes with zero TypeScript errors and zero warnings
- Every existing Storybook story renders correctly on antd v6
- Deprecated antd v5 APIs replaced with v6 equivalents

### FR-2: Type Safety Hardening

**As a library consumer**, I get full TypeScript type safety with zero `any` types in the public API so that my IDE gives accurate autocompletion and compile-time error checking.

**Acceptance Criteria**:
- Zero `any` types in all source files under `src/` (replace with `unknown`, generics, or concrete types)
- `objectToFormData` typed with generics: `<T extends Record<string, unknown>>(obj: T, ...)`
- `datesToDayjs` typed with generics instead of `any` input/output
- `useColumnManager` hook typed with generic constraint: `<T extends BaseModel<string | number>>(columns: ColumnType<T>[])`
- `getColumnKey` returns typed value without `as string` assertion
- `getRules()` converted from regular function (calling `useTranslation` inside — React hooks rule violation) to a proper `useFormRules()` custom hook
- `useTableFullHeightCalculator` replaces direct DOM `setAttribute()` calls with React refs and state
- All exported types have explicit `export type` declarations where applicable
- `npm run build` passes with `strict: true` and zero type errors

### FR-3: Design Token Unification

**As a library consumer**, I can theme the entire library through a single `<SoftwareifyThemeProvider>` component that maps to antd v6's token system, so that all components inherit consistent visual styles without manual CSS variable setup.

**Acceptance Criteria**:
- New `src/components/providers/SoftwareifyThemeProvider.tsx` exports a thin wrapper around antd's `ConfigProvider`
- `designTokens.ts` restructured to export an antd-compatible `ThemeConfig` object (mapping brand colors, spacing, radius, typography to antd's `token` API)
- All hardcoded CSS values in components replaced with tokens from the unified system:
  - `StatCard`: padding `16px 20px` → spacing tokens
  - `FormSection`: gap `16` → spacing token
  - `FormItemWrapper`: gutter `24` → spacing token
  - `MainHeader`: gaps `12`, `8` → spacing tokens
  - `ContentState`: padding `48px 24px`, margins, max-width → spacing tokens
  - `BaseModal`: width `"50%"` → configurable prop with token default
  - `MainTableToolbar`: border-radius `8px`, box-shadow, padding `12px`/`16px` → tokens
  - `ColumnManager`: width `320px`, max-height `500px`, paddings → tokens
  - `DraggableMenuItem`: `ITEM_HEIGHT: 44` → token
  - `SignatureCanvas`: border `1px solid`, border-radius `8px` → tokens
  - `PrimaryKey`: background, border, padding, gap, font-size → tokens
  - `ActionColumnRow`: gap `12px`, divider width `1px` → tokens
  - `StatusBadge`: gap `8px` → token
  - `EntityInfo`: font-size already uses token (keep)
- Custom CSS variables (`--color-success`, `--color-brand-primary`, etc.) retained as optional overrides consumed by `SoftwareifyThemeProvider` (reads CSS vars at mount, antd tokens take precedence if both set). Hardcoded CSS variable references in individual components removed — only ThemeProvider reads them
- `TABLE_THEME` in `src/components/tables/theme.ts` derived from antd tokens, not hardcoded CSS variables
- ThemeProvider exported from `src/index.ts`
- Storybook decorator updated to wrap all stories with `SoftwareifyThemeProvider`

### FR-4: Remove Tailwind Dependency

**As a library consumer**, I can use the library without Tailwind CSS installed so that my project's styling choices are independent of the library's internals.

**Acceptance Criteria**:
- Zero Tailwind utility classes in any `src/` file (`w-full`, `h-full`, `flex`, `flex-col`, `gap-*`, etc.)
- All layout replaced with inline `style` objects or antd's `Flex`/`Space`/`Grid` components
- `listPageRootClassName` helper returns library-owned CSS classes instead of Tailwind utilities (return type stays `string`, classes emitted in `dist/style.css`)
- Build output (`dist/style.css`) contains no Tailwind-generated CSS
- No `tailwindcss` in `dependencies`, `devDependencies`, or `peerDependencies`

### FR-5: i18n Architecture for Library Consumption

**As a library consumer**, I can integrate the library's translations into my app's i18n setup without key collisions, so that all library UI strings are translatable and namespaced.

**Acceptance Criteria**:
- All components use a library-internal `useLibTranslation()` hook that calls `useTranslation('softwareify-ui')`
- Translation keys renamed from `global.*` to flat namespace keys (e.g., `btns.save`, `validations.input.isRequiredField`)
- Default locale file exported at `src/locales/en.json` with all translation keys used by components
- Locale file included in the published npm package (`files` field in package.json)
- `src/index.ts` exports the locale type and a `registerLocale()` helper that consumers call to merge translations into their i18n instance
- `react-string-format` dependency removed; interpolation handled by i18next's built-in `{{variable}}` syntax
- Storybook `.storybook/preview.ts` initializes i18n with the library's locale for story rendering

### FR-6: Dependency Optimization

**As a library consumer**, I only install the dependencies I actually need, so that my bundle size stays minimal and I'm not forced into libraries I don't use.

**Acceptance Criteria**:
- `react-dnd` and `react-dnd-html5-backend` moved to `peerDependencies` with `"optional": true` in `peerDependenciesMeta`
- `react-resize-detector` moved to `peerDependencies` with `"optional": true`
- `react-string-format` removed entirely (replaced by i18next interpolation in FR-5)
- When `react-dnd` is not installed: column drag/drop UI elements (drag handles, reorder indicators) are not rendered; table functions normally without reorder capability; zero console errors or runtime exceptions
- When `react-resize-detector` is not installed: `useTableFullHeightCalculator` falls back to CSS-based height (`100%` of parent); no resize observation; zero runtime errors
- Importing any component that depends on an optional peer dep does not throw if that dep is missing; the feature it enables is silently disabled
- Library builds successfully without optional peer deps installed
- Storybook stories for table components still work (optional deps installed in devDependencies)

### FR-7: Code Hygiene Cleanup

**As a library maintainer**, the codebase follows consistent patterns with no dead code, no anti-patterns, and proper separation of concerns so that future development is predictable and fast.

**Acceptance Criteria**:
- Zero `console.log` statements in production source files (stories excluded)
- All components follow the pattern: `interface Props` → arrow function → `export default` (as established in CLAUDE.md Component Consistency principle)
- Every component directory has a barrel `index.ts` re-exporting the component and its types
- `useTableFullHeightCalculator` refactored to use React refs instead of direct DOM queries (`querySelector`, `setAttribute`)
- Deprecated props in `ActionColumnRow` (`left`, `right`) removed (use `items` instead); removal documented in `MIGRATION.md` with before/after example
- `BaseFormItemProps` narrowed from bare `FormItemProps` re-export to explicit interface with documented fields
- All inline magic numbers annotated with token references or extracted to named constants
- Components target 200 lines max; `EntityInfo` (261 lines) and `DraggableMenuItem` (189 lines) reviewed for extraction — justified exceptions documented with inline comment explaining why the file was not split

---

## Non-Functional Requirements

### NFR-1: Backward Compatibility
- All existing component public APIs (props, exports, type names) remain unchanged unless a prop was already deprecated. i18n namespace change (`global.*` → `softwareify-ui`) and antd v6 peer dependency bump are documented breaking changes covered by `MIGRATION.md`
- Consumers upgrading need only: (a) bump the library version, (b) bump antd to v6, (c) update i18n namespace from `global` to `softwareify-ui`, (d) optionally install optional peer deps they were already using
- A `MIGRATION.md` file documents all breaking changes with before/after examples

### NFR-2: Build & Bundle
- `npm run build` completes in under 30 seconds with zero errors and zero warnings
- Bundle size (ES output) does not increase by more than 10% compared to current build
- Tree-shaking works: importing a single component does not pull the entire library. Verified by: a test consumer importing only `StatCard` produces a bundle under 50 KB (excluding antd peer dep)

### NFR-3: Type Coverage
- `tsc --noEmit` passes with zero errors under `strict: true`
- Zero `any` in the public API surface (exported types, props, return types)
- All generic components preserve type inference for consumers (no explicit type parameter required at call site)

### NFR-4: Storybook Verification
- All existing stories render without errors on antd v6
- No visual regressions in component rendering (verified via Storybook visual inspection)
- Storybook builds successfully: `npm run build-storybook` passes

---

## Technical Design

> Written by engineers after FR/NFR are approved.
> Concrete library, pattern, and data-model choices for this specific stack.

### TD-1: Data Model Changes
```
# Token system restructure
designTokens.ts → exports AntD-compatible ThemeConfig object
  - brand → token.colorPrimary, token.colorPrimaryBg, etc.
  - spacing → token.margin*, token.padding*
  - radius → token.borderRadius*
  - fontSize → token.fontSize*

# i18n types
src/locales/en.json → flat key structure
src/locales/types.ts → typed key union for type-safe t() calls

# Optional dependency types
src/common/models/optionalDeps.ts → type guards for react-dnd, react-resize-detector
```

### TD-2: Component / Module Changes
```
NEW FILES:
  src/components/providers/SoftwareifyThemeProvider.tsx
  src/components/providers/index.ts
  src/common/i18n/useLibTranslation.ts
  src/common/i18n/registerLocale.ts
  src/common/hooks/useFormRules.ts    (extracted from formDataHelpers)
  src/locales/en.json
  MIGRATION.md

MODIFIED FILES (all src/components/**/*.tsx):
  - Replace Tailwind classes with inline styles
  - Replace hardcoded values with token references
  - Replace useTranslation() with useLibTranslation()
  - Replace any types with proper generics

MODIFIED FILES (helpers):
  src/common/helpers/formDataHelpers.ts  → remove getRules (moved to hook), fix any types
  src/config/designTokens.ts             → restructure to antd ThemeConfig
  src/components/tables/theme.ts         → derive from antd tokens
  src/index.ts                           → add new exports

DELETED FILES:
  (none — deprecations handled via removal of deprecated code paths)

DELETED DEPENDENCIES:
  react-string-format (replaced by i18next interpolation)
```

### TD-3: Key Decisions
| Decision | Choice | Alternatives rejected | Reason |
|----------|--------|-----------------------|--------|
| antd version | `>=6.0.0` only, drop v5 | `>=5.0.0 \|\| >=6.0.0` dual support | Major refactor — dual-support doubles testing surface for minimal benefit; clean break documented in MIGRATION.md |
| Token system | antd v6 ConfigProvider tokens | Keep custom CSS variables | Single source of truth, no parallel systems, antd-native |
| Tailwind removal | Inline styles + antd Flex/Space | CSS Modules, styled-components | Zero runtime dep, works everywhere, antd-idiomatic |
| i18n namespace | `softwareify-ui` via `useLibTranslation` hook | Keep `global` namespace | Prevents key collisions in consumer apps |
| Optional deps | Dynamic `import()` with try/catch | Conditional exports, separate packages | Simplest for consumers, single package |
| getRules → useFormRules | Custom hook | Keep function (suppress lint) | Hooks rules compliance, proper React lifecycle |
| ThemeProvider | Thin ConfigProvider wrapper | HOC, context-only | Matches antd ecosystem conventions |

---

## Fulfillment Audit Log
<!-- Filled in during Phase 4. One row per acceptance criterion. -->

| Criterion | Status | Code evidence | Tested by |
|-----------|--------|---------------|-----------|
| *(filled by /fulfillment-audit)* | | | |

<!-- Status values: ✅ Met · ❌ Not met · ⚠️ Partial -->
<!-- NOTE: FR tags in this document use local form (FR-1, FR-2).
     In code and tests, use the namespaced form: FR-[iteration]-N (e.g. FR-1775470061-1).
     This prevents tag collisions when multiple features are developed in parallel. -->
