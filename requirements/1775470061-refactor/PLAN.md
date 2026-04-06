---
status: approved
phase: 3
last_updated: 2026-04-06
---

# 1775470061 — Production-Ready Code Quality Refactor: Implementation Plan

**Approved Requirements**: `requirements/1775470061-refactor/REQUIREMENTS.md` (status: approved)

**Execution Mode**: Sequential (FR dependencies: FR-1 must complete before FR-2, FR-2 before FR-3, etc.)

---

## Phase 3 Implementation Steps

### Step 1: Type Safety Hardening (FR-2)

Critical first step because type fixes unblock other refactors.

#### 1.1: Fix `any` types in core utilities
- [ ] **1.1a**: Update `objectToFormData` in `src/common/helpers/formDataHelpers.ts`
  - Add generic: `function objectToFormData<T extends Record<string, unknown>>(obj: T, ...)`
  - Replace `any` param types and return type with proper typing
  - Verify all FormData operations are type-safe
  - Test: `npm run build` passes with zero errors

- [ ] **1.1b**: Update `datesToDayjs` in same file
  - Add generic constraint instead of `any`
  - Ensure recursive typing for nested objects/arrays

- [ ] **1.1c**: Extract `getRules` from formDataHelpers.ts → new file `src/common/hooks/useFormRules.ts`
  - Convert from regular function to proper React hook
  - Call `useLibTranslation()` inside hook body (valid hook location)
  - Maintain existing rule logic and exports
  - Update all imports in form components

#### 1.2: Fix hook type issues
- [ ] **1.2a**: Update `useColumnManager` in `src/components/tables/hooks/useColumnManager.ts`
  - Replace `any` column type with generic: `<T extends BaseModel<string | number>>(columns: ColumnType<T>[])`
  - Type the return object fully
  - Update all call sites to pass typed columns

- [ ] **1.2b**: Fix `useTableFullHeightCalculator` in same directory
  - Replace `querySelector`/`setAttribute` with React refs
  - Remove direct DOM manipulation, use state instead
  - Test height calculation still works in all breakpoints

#### 1.3: Type exports and API surface
- [ ] **1.3a**: Add explicit `export type` declarations to `src/index.ts`
  - Audit all re-exported types
  - Ensure zero `any` in public API
  - Verify tree-shaking works

### Step 2: Design Token Unification (FR-3)

Once types are solid, refactor design tokens to antd v6 ConfigProvider model.

#### 2.1: Create theme provider infrastructure
- [ ] **2.1a**: Create `src/components/providers/SoftwareifyThemeProvider.tsx`
  - Thin wrapper around antd `ConfigProvider`
  - Accept optional theme config prop with antd ThemeConfig shape
  - Read CSS variables as fallback (--color-success, --color-brand-primary, etc.)
  - Apply antd tokens with precedence: prop > CSS variables > defaults

- [ ] **2.1b**: Create `src/components/providers/index.ts`
  - Re-export SoftwareifyThemeProvider
  - Export related types

#### 2.2: Restructure design tokens
- [ ] **2.2a**: Update `src/config/designTokens.ts`
  - Export antd-compatible `ThemeConfig` object
  - Map brand colors → `token.colorPrimary`, `token.colorPrimaryBg`, etc.
  - Map spacing → `token.margin*`, `token.padding*`
  - Map radius values → `token.borderRadius*`
  - Map font sizes → `token.fontSize*`
  - Use `as const` for literal types

- [ ] **2.2b**: Update `src/components/tables/theme.ts`
  - Derive `TABLE_THEME` from antd tokens, not hardcoded CSS variables
  - Remove CSS variable references

#### 2.3: Replace hardcoded CSS values with tokens
Update each component listed below. For each:
1. Import tokens from designTokens.ts
2. Replace hardcoded values with token references
3. Use inline `style` objects or antd's `Flex`/`Space`/`Grid` where applicable
4. Run `npm run build` after each component

- [ ] **2.3a**: `StatCard.tsx` — padding 16px 20px, fontSize 12, marginBottom 6
- [ ] **2.3b**: `FormSection.tsx` — marginBottom 16, gutter 24
- [ ] **2.3c**: `FormItemWrapper.tsx` — default gutter 24
- [ ] **2.3d**: `MainHeader.tsx` — gaps/margins 12, 8, 16 (responsive)
- [ ] **2.3e**: `ContentState.tsx` — padding 48px 24px, margins, maxWidth 400
- [ ] **2.3f**: `BaseModal.tsx` — width 50% → configurable with token default
- [ ] **2.3g**: `MainTableToolbar.tsx` — borderRadius 8, padding, boxShadow, gap values
- [ ] **2.3h**: `ColumnManager.tsx` — width 320, max-height 500, paddings
- [ ] **2.3i**: `DraggableMenuItem.tsx` — ITEM_HEIGHT 44
- [ ] **2.3j**: `SignatureCanvas.tsx` — border, borderRadius 8
- [ ] **2.3k**: `PrimaryKey.tsx` — background, border, padding, gap, font values
- [ ] **2.3l**: `ActionColumnRow.tsx` — gap 12, divider width 1
- [ ] **2.3m**: `StatusBadge.tsx` — gap 8

#### 2.4: Update Storybook decorator
- [ ] **2.4a**: Update `.storybook/preview.ts` to wrap all stories with `SoftwareifyThemeProvider`
- [ ] **2.4b**: Verify all stories still render correctly

#### 2.5: Export theme provider from root
- [ ] **2.5a**: Update `src/index.ts` to export SoftwareifyThemeProvider and related types

### Step 3: Remove Tailwind Dependency (FR-4)

Replace all Tailwind utility classes with inline styles or antd components.

#### 3.1: Audit and replace Tailwind utilities
For each file in the inventory (from previous session):
1. Replace all `w-full`, `h-full`, `flex`, `flex-col`, `gap-*`, `items-center`, `justify-*`, etc.
2. Use inline `style` objects or antd `Flex`/`Space`/`Grid` components
3. Run tests after each file

- [ ] **3.1a**: `ColumnManager.tsx` — bg-white, shadow-lg, rounded-lg, w-80, max-h, flex utilities
- [ ] **3.1b**: `DraggableMenuItem.tsx` — flex layout utilities
- [ ] **3.1c**: Other files with Tailwind utilities (8+ more files)

#### 3.2: Update `listPageRootClassName` helper
- [ ] **3.2a**: Replace Tailwind utility return with library-owned CSS classes
- [ ] **3.2b**: Emit corresponding styles in dist/style.css

#### 3.3: Verify no Tailwind in output
- [ ] **3.3a**: Run `npm run build`
- [ ] **3.3b**: Grep dist/style.css to confirm no Tailwind utilities present
- [ ] **3.3c**: Verify build succeeds without tailwindcss dependency

### Step 4: i18n Architecture (FR-5)

Create library-namespaced i18n with unified translation system.

#### 4.1: Create library i18n infrastructure
- [ ] **4.1a**: Create `src/common/i18n/useLibTranslation.ts`
  - Custom hook that calls `useTranslation('softwareify-ui')`
  - Export typed hook for all components to use

- [ ] **4.1b**: Create `src/locales/en.json`
  - Flat namespace with all keys used by components
  - Keys format: `btns.save`, `validations.input.isRequiredField`, etc. (no `global.` prefix)
  - Include all current translation keys from global namespace

- [ ] **4.1c**: Create `src/common/i18n/registerLocale.ts`
  - Helper function consumers call to merge library translations into their i18n
  - Export locale type for type-safe key usage

#### 4.2: Update all components
- [ ] **4.2a**: Replace `useTranslation('global')` with `useLibTranslation()` in all components
- [ ] **4.2b**: Update translation keys from `global.*` to flat namespace (e.g., `btns.save`)
- [ ] **4.2c**: Remove `react-string-format` usage, use i18next `{{variable}}` syntax instead

#### 4.3: Update Storybook i18n
- [ ] **4.3a**: Update `.storybook/preview.ts` to initialize i18n with library locale
- [ ] **4.3b**: Verify all stories render with correct translations

#### 4.4: Export i18n helpers from root
- [ ] **4.4a**: Update `src/index.ts` to export registerLocale, useLibTranslation
- [ ] **4.4b**: Include en.json in package.json `files` field

### Step 5: Dependency Optimization (FR-6)

Make optional dependencies truly optional with graceful fallbacks.

#### 5.1: Move dependencies to peerDependencies
- [ ] **5.1a**: Update package.json `peerDependencies`:
  - Move `react-dnd` and `react-dnd-html5-backend` (mark as `optional: true`)
  - Move `react-resize-detector` (mark as `optional: true`)
  - Remove `react-string-format` entirely

- [ ] **5.1b**: Update `peerDependenciesMeta` with optional flags

#### 5.2: Add dynamic imports with fallbacks
- [ ] **5.2a**: Create `src/common/models/optionalDeps.ts`
  - Type guards for detecting optional dependencies
  - Safe dynamic import helpers

- [ ] **5.2b**: Update `ColumnManager.tsx` (uses react-dnd)
  - Gracefully disable drag/drop UI if react-dnd not installed
  - No console errors or exceptions

- [ ] **5.2c**: Update `useTableFullHeightCalculator.ts` (uses react-resize-detector)
  - Fall back to CSS-based height (100% of parent) if not installed
  - Maintain functionality without resize observation

#### 5.3: Verify library builds without optional deps
- [ ] **5.3a**: Remove node_modules, reinstall with only required peer deps
- [ ] **5.3b**: Run `npm run build` — must succeed
- [ ] **5.3c**: Verify importing components that depend on optional deps doesn't throw

### Step 6: antd v6 Migration (FR-1)

Upgrade peer dependency and fix breaking API changes.

#### 6.1: Update package.json and dependencies
- [ ] **6.1a**: Update `peerDependencies` to `"antd": ">=6.0.0"` (drop v5 support)
- [ ] **6.1b**: Update devDependencies: install antd v6 (currently v5)
- [ ] **6.1c**: Run `npm install`

#### 6.2: Fix antd v6 breaking changes
- [ ] **6.2a**: Audit imports for removed/renamed antd exports
  - Check `antd/es/table/interface` — may have moved
  - Check `antd/es/form/interface` — may have moved
  - Check `antd/es/grid/row` — may have moved
  - Check component APIs (e.g., Table prop changes)

- [ ] **6.2b**: Update component imports/usage to antd v6 API
- [ ] **6.2c**: Update ConfigProvider theme API to v6 format

#### 6.3: Verify Storybook stories render
- [ ] **6.3a**: Run `npm run storybook`, visually verify all stories
- [ ] **6.3b**: Verify no console warnings or errors
- [ ] **6.3c**: Check visual rendering for regressions

#### 6.4: Update SoftwareifyThemeProvider for antd v6
- [ ] **6.4a**: Ensure ConfigProvider API usage matches antd v6
- [ ] **6.4b**: Test theme token application with v6 tokens

### Step 7: Code Hygiene Cleanup (FR-7)

Final pass: remove anti-patterns, ensure consistency, document exceptions.

#### 7.1: Console.log audit
- [ ] **7.1a**: Grep src/ for all console.log statements (excluding .stories.tsx)
- [ ] **7.1b**: Remove any found (should be zero from previous session, but verify)
- [ ] **7.1c**: Confirm zero console.log in production code

#### 7.2: Component pattern consistency
- [ ] **7.2a**: Audit all components in src/components/ for pattern adherence
  - Verify: Props interface → arrow function → default export
  - Find any React.FC usage (should be only 2: ColumnManager, DraggableMenuItem)
  - Verify exceptions are justified in inline comments

- [ ] **7.2b**: Review ColumnManager and DraggableMenuItem
  - Document why React.FC is used (if valid)
  - OR convert to arrow functions with arrow function signature

#### 7.3: Barrel files
- [ ] **7.3a**: Verify every component directory has index.ts re-exporting
- [ ] **7.3b**: Create missing barrel files for 9 directories identified in previous session
  - Each barrel exports: component + exported types

#### 7.4: DOM manipulation refactor
- [ ] **7.4a**: Verify `useTableFullHeightCalculator` no longer uses querySelector/setAttribute
- [ ] **7.4b**: All DOM access via React refs
- [ ] **7.4c**: Test height calculation on all breakpoints

#### 7.5: Deprecated props removal
- [ ] **7.5a**: Remove `left` and `right` props from `ActionColumnRow.tsx`
- [ ] **7.5b**: Ensure consumers only use `items` prop
- [ ] **7.5c**: Document in MIGRATION.md with before/after

#### 7.6: Component line count review
- [ ] **7.6a**: Review `EntityInfo.tsx` (261 lines) — justify non-splitting with inline comment OR extract
- [ ] **7.6b**: Review `DraggableMenuItem.tsx` (189 lines) — justify non-splitting with inline comment OR extract
- [ ] **7.6c**: Ensure all other components ≤200 lines

#### 7.7: Magic number documentation
- [ ] **7.7a**: Audit all remaining inline numbers
- [ ] **7.7b**: Add comments referencing token definitions or extract to named constants

### Step 8: Build & Bundle Verification

Run final checks before Phase 4 Fulfillment Audit.

#### 8.1: TypeScript strict mode
- [ ] **8.1a**: Run `npm run build`
- [ ] **8.1b**: Verify zero TypeScript errors and zero warnings
- [ ] **8.1c**: Verify output: dist/index.es.js, dist/index.cjs.js, dist/index.d.ts, dist/style.css all exist

#### 8.2: Storybook verification
- [ ] **8.2a**: Run `npm run build-storybook`
- [ ] **8.2b**: Verify no build errors
- [ ] **8.2c**: Run `npm run storybook` and visually spot-check affected stories

#### 8.3: Bundle size and tree-shaking
- [ ] **8.3a**: Verify bundle size hasn't increased >10% from current
- [ ] **8.3b**: Test consumer importing single component (StatCard) yields <50KB bundle
- [ ] **8.3c**: Verify no dead code in output

#### 8.4: No external Tailwind dependency
- [ ] **8.4a**: Grep dist/style.css for any Tailwind utilities (must be zero)
- [ ] **8.4b**: Verify package.json has no tailwindcss in any dependency section

---

## Execution Strategy

**Dependencies**: FR-2 (types) → FR-3 (tokens) → FR-4 (Tailwind) → FR-5 (i18n) → FR-6 (deps) → FR-1 (antd) → FR-7 (cleanup)

**Commit frequency**: After each numbered substep (1.1a, 1.1b, etc.)
- Format: `feat([1775470061]): [FR-N] description`
- Example: `feat(1775470061): FR-2 fix any types in utilities`

**Verification cadence**: Run `npm run build` after every type-affecting change
- This is the VERIFY_COMMAND from CLAUDE.md

**Storybook checks**: Run after every visual/layout change
- Key stories: MainHeader, StatCard, MainTable, ColumnManager, FormSection

**Session checkpoints**: Write `<!-- CHECKPOINT -->` if context runs low
- Include: completed substeps, next substep, any blockers

---

## Success Criteria (NFR Compliance)

When complete:
- ✅ `npm run build` passes in <30 seconds, zero errors/warnings
- ✅ TypeScript strict mode: zero errors
- ✅ Zero `any` types in src/
- ✅ Zero Tailwind utilities in src/ or dist/
- ✅ All stories render in Storybook 10 on antd v6
- ✅ Bundle size within 10% of baseline
- ✅ Tree-shaking verified (single-component import <50KB)
- ✅ All acceptance criteria mapped to code evidence in Phase 4 audit

---

## Phase 4 Fulfillment Audit

After implementation completes:
1. Run `/fulfillment-audit requirements/1775470061-refactor/`
2. Map every FR/NFR acceptance criterion to code evidence
3. Check constitutional compliance (types, patterns, tokens)
4. Auto-fix any failures
5. Set REQUIREMENTS.md `status: implemented`
6. Set PLAN.md `status: implemented`
7. Update CLAUDE.md Source of Truth table
8. Commit: `feat(1775470061): Phase 4 fulfillment audit passed`
