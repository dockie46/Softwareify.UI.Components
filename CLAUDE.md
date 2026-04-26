# AI-First Development Guide

## Project Context

**Project**: @softwareifycz/ui-components — Shared Softwareify UI Components
**Stack**: TypeScript / React + Ant Design
**Build tool**: Vite (npm)
**Repo type**: Single service (shared UI component library)

> **Why this project exists**: A shared React component library built on Ant Design, consumed by multiple Softwareify products. Components must be generic, well-typed, and visually consistent.
> When in doubt, optimise for reusability.

## Quick Commands

<!-- VERIFY_COMMAND: npm run build -->

```bash
npm run build              # tsc --noEmit && vite build (VERIFY_COMMAND)
npm run storybook          # storybook dev -p 6006
npm run build-storybook    # build storybook static site
# npm run lint             # eslint — NOT WORKING (eslint not in devDependencies)
```

## CONSTITUTIONAL PRINCIPLES

> **Immutable.** These override any spec, plan, or task.

### Type Safety

| ALWAYS                                                            | NEVER                                                           |
| ----------------------------------------------------------------- | --------------------------------------------------------------- |
| Use explicit prop interfaces/types for every exported component   | Export a component without typed props                          |
| Keep `tsconfig.json` `strict: true` — never weaken it             | Use `any` in application code; use `unknown` and narrow instead |
| Leverage `as const` for constant objects (design tokens, configs) | Use type assertions (`as X`) to silence compiler errors         |

### Component Consistency

| ALWAYS                                                                                   | NEVER                                                    |
| ---------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| Follow the pattern: Props type/interface -> arrow function -> default export             | Use class components or `React.FC`                       |
| Create a barrel `index.ts` in each component directory and re-export from `src/index.ts` | Export a component without adding it to the barrel files |
| Co-locate `*.stories.tsx` alongside the component file                                   | Put stories in a separate top-level directory            |

### Design Token Centralization

| ALWAYS                                                                                  | NEVER                                                   |
| --------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| Use values from `src/config/designTokens.ts` for colors, spacing, typography, and radii | Hardcode magic numbers or hex colors in component files |
| Define new visual constants in `designTokens.ts` before using them                      | Introduce a one-off CSS variable or inline constant     |
| Use `as const` for token objects so values are literal types                            | Define mutable token objects                            |

### Ant Design Alignment

| ALWAYS                                                                         | NEVER                                                            |
| ------------------------------------------------------------------------------ | ---------------------------------------------------------------- |
| Compose and wrap Ant Design primitives — extend, don't replace                 | Build custom low-level UI (buttons, inputs, modals) from scratch |
| Follow Ant Design's API conventions for prop naming and behavior               | Invent prop names that conflict with or shadow Ant Design's API  |
| Keep peer dependency version ranges broad (`>=5.0.0`) for consumer flexibility | Pin exact peer dependency versions                               |

## Tech Stack Mandates

| Purpose                  | Approved                             | Banned alternatives          |
| ------------------------ | ------------------------------------ | ---------------------------- |
| UI Framework             | antd (>=5.0.0)                       | —                            |
| Icons                    | @ant-design/icons                    | other icon libraries         |
| Date library             | dayjs                                | moment.js                    |
| i18n                     | i18next + react-i18next              | —                            |
| Drag & Drop              | react-dnd                            | —                            |
| Build                    | vite + @vitejs/plugin-react          | webpack, rollup (standalone) |
| Type checking            | typescript (strict)                  | —                            |
| Stories / Visual testing | storybook 10 (@storybook/react-vite) | —                            |
| Component testing        | vitest + @storybook/addon-vitest     | jest                         |
| Accessibility            | @storybook/addon-a11y                | —                            |

**Banned Patterns**: _(extend as needed)_

## Source of Truth — Reference Implementations

| Pattern                            | Reference file                                  |
| ---------------------------------- | ----------------------------------------------- |
| UI Component (complex, responsive) | `src/components/headers/MainHeader.tsx`         |
| UI Component (variant-based)       | `src/components/content/ContentLoader.tsx`      |
| Form input wrapper                 | `src/components/forms/inputs/InputFormItem.tsx` |
| Storybook story (CSF3)             | `src/components/headers/MainHeader.stories.tsx` |
| Design tokens                      | `src/config/designTokens.ts`                    |
| Types / Models                     | `src/common/models/form.ts`                     |
| Custom hook                        | `src/common/responsive/hooks.ts`                |
| Barrel export (root)               | `src/index.ts`                                  |

## Project Structure

```
Softwareify.UI.Components/
├── CLAUDE.md
├── package.json
├── tsconfig.json
├── vite.config.ts
├── .storybook/                    ← Storybook configuration
├── .github/workflows/             ← CI (build) + Publish (npm)
├── src/
│   ├── index.ts                   ← Root barrel — every public export
│   ├── config/                    ← Design tokens
│   ├── common/
│   │   ├── constants/             ← Shared constants (date formats, regex)
│   │   ├── helpers/               ← Utility functions (form helpers)
│   │   ├── models/                ← Shared types (BaseModel, form types)
│   │   └── responsive/            ← Responsive hooks + breakpoints
│   └── components/
│       ├── cards/                 ← StatCard, SkeletonCard
│       ├── content/               ← ContentLoader, ContentState, ActionColumnRow
│       ├── data-display/          ← EntityInfo, StatusBadge
│       ├── forms/                 ← FormItem, FormSection
│       │   ├── inputs/            ← InputFormItem, SelectFormItem, etc.
│       │   └── wrappers/          ← FormItemWrapper
│       ├── headers/               ← MainHeader, PageHeader, SectionHeader
│       ├── modals/                ← BaseModal, ConfirmModal, FullscreenMobileModal
│       ├── shared/                ← SignatureCanvas, PrimaryKey
│       └── tables/                ← MainTable, ColumnManager, filters, hooks
├── dist/                          ← Built output (ES + CJS + types + CSS)
└── requirements/                  ← SDD feature specs (cross-cutting)
    └── [TIMESTAMP]-[feature-name]/
        ├── REQUIREMENTS.md
        └── PLAN.md
```

**Placement rule**: feature touches >1 module -> root `requirements/`. Single module -> `[module]/requirements/`.

## Right-Sizing

| Task type                                         | Workflow                                |
| ------------------------------------------------- | --------------------------------------- |
| Bug fix, config tweak, single-file refactor       | Implement directly — no SDD docs needed |
| New behaviour, multi-file change, design decision | Full 4-phase workflow required          |

---

## SDD Workflow — Phases 1-4

> **Phases 1-4** are workflow stages. Within Phase 3, PLAN.md breaks implementation into
> Steps 1-4 (Types -> Data -> Logic -> UI) — those are not workflow phases.
> After Phase 4, `/capture-findings` handles the revision loop when review finds issues.
> Run `/sdd-status` at any time to see where every feature stands and what to do next.

### Phase 1 — Specify _(humans lead, Claude reviews)_

1. Create folder (choose level based on scope):
   - **Root** (multi-module): `requirements/$(date +%s)-[feature-name]/`
   - **Module** (isolated): `[module]/requirements/$(date +%s)-[feature-name]/`
   - Or use `/sdd-init [feature-name]` to scaffold automatically.
2. Create `REQUIREMENTS.md` — copy from `REQUIREMENTS.template.md`.
   Set `status: draft`. Write FR, NFR, and Technical Design.
   Mark every unknown: `[NEEDS CLARIFICATION: question]` — never assume.
   (Both humans and Claude use these markers. If Claude helps draft,
   it must insert [NEEDS CLARIFICATION] for anything not explicitly stated.
   The human owns the content — Claude helps structure and flags gaps.)
3. Resolve all `[NEEDS CLARIFICATION]` markers.
4. Run `/review-requirements [path]` — Claude reviews for gaps, ambiguities, untestable criteria.
   Fix all **FAIL** items. Re-run until verdict is **READY TO APPROVE** or **APPROVE WITH NOTES**.
5. Set `status: approved`, fill `approved_by` and `approved_date`.
6. Create feature branch `feat/[TIMESTAMP]-[feature-name]`. Commit + push. Open a **draft PR** targeting `main`, linking to `requirements/[TIMESTAMP]-[feature-name]/`.

### Phase 2 — Plan _(Claude generates, you approve)_

7. Run `/write-plan [path]` — Claude reads approved REQUIREMENTS.md, generates PLAN.md with
   step-by-step `[ ]` items, dependency annotations, Mermaid diagram, and execution strategy.
8. Review the plan. Claude shows recommended execution mode (`all`, range, or single-step).
9. Set `status: approved` in PLAN.md frontmatter. **Freeze the plan.**
   New scope = new numbered folder. Never append to an approved plan.

### Phase 3 — Implement _(Claude executes, hooks enforce)_

10. Run `/implement-phase [N|N-M|all] [path]` — Claude reads CLAUDE.md, PLAN.md,
    and module CLAUDE.md files. Executes plan items in order.
    Hooks auto-run `VERIFY_COMMAND` after every file change (PostToolUse).
    If `<!-- CHECKPOINT -->` exists, Claude resumes from there.
11. If a session ends mid-step, Claude writes a `<!-- CHECKPOINT -->` comment in PLAN.md
    automatically (Stop hook). Commit message format: `feat([TIMESTAMP]): FR-N short description`.

### Phase 4 — Audit _(Claude verifies, human merges)_

12. Run `/fulfillment-audit [path]` — Claude maps every acceptance criterion to code evidence,
    checks constitutional compliance, and outputs a structured audit report with JSON.
    If Playwright MCP is available, UI criteria are verified in a real browser.
13. Claude auto-fixes failures and re-checks until `passed: true`.
14. Claude sets `status: implemented` in REQUIREMENTS.md and PLAN.md.
15. Claude updates CLAUDE.md (Source of Truth table + Decisions Log). Final commit.
16. Mark the draft PR **ready for review** -> get human approval -> **merge to main**.

### Post-Phase 4 — Revision Loop _(when manual review finds issues)_

17. If manual review/QA discovers bugs, change requests, or improvements after Phase 4:
    Run `/capture-findings [path]` — captures findings in FINDINGS.md, classifies each,
    and routes appropriately:
    - **Small fixes** (bugs, minor tweaks): Appends revision step to PLAN.md, reverts
      status to `approved`, re-enter Phase 3 -> Phase 4
    - **Requirement changes** (major CRs): Sets REQUIREMENTS.md `status: draft`,
      loop through Phase 1-2-3-4
    - **New scope** (major improvements): Suggests `/sdd-init [new-feature-name]`
18. FINDINGS.md serves as audit trail for why `implemented` was reverted.
    This is the ONLY permitted path to revert `implemented` status.

### Spec Change Protocol — Discovering changes during Phase 3

Stop implementation immediately. Identify which scenario applies:

| Scenario             | What happened                                                                    | Action                                                                                                                                                                             |
| -------------------- | -------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Spec gap / error** | Requirement was wrong, ambiguous, or missing a detail that blocks implementation | Set `status: draft` in REQUIREMENTS.md -> fix -> re-approve -> update PLAN.md if steps change (set PLAN.md `status: draft` -> re-approve) -> write `<!-- CHECKPOINT -->` -> resume |
| **New scope**        | Something new discovered that was not in the original spec                       | Create a new numbered folder `requirements/[NEWTIMESTAMP]-[name]/`. Do **not** touch the current iteration. Park it and continue.                                                  |
| **Plan step wrong**  | The implementation approach in PLAN.md is technically incorrect                  | Set PLAN.md `status: draft` -> revise affected steps -> re-approve -> resume                                                                                                       |

**Key rule**: never silently deviate from an approved spec or plan. Every change must go back through the approval gate before implementation continues.

---

## Session Rules

### Starting a session

Run `/sdd-status` to see the current dashboard. State the current PLAN.md phase. If a `<!-- CHECKPOINT -->` exists, read it and resume from there. Re-inject key constraint if context was compacted.

### During a session

One task per session (`/clear` between unrelated tasks). Reference files by path (`@src/...`). Use subagents for verbose operations.

### Ending a session

If the phase is incomplete, add a checkpoint comment to PLAN.md before closing:

```markdown
<!-- CHECKPOINT: completed Step 2 items 1-3. Next: item 4 (implement toggleTask).
     Session ended: context limit. State: types done, store partial. -->
```

### Model Routing

| Task                                            | Model  | Rationale                       |
| ----------------------------------------------- | ------ | ------------------------------- |
| Architecture decisions, ADRs, complex debugging | Opus   | Highest reasoning depth         |
| Feature implementation, most daily work         | Sonnet | Best cost/quality               |
| Bulk refactors, migrations, CI checks           | Haiku  | Lower cost for mechanical tasks |

### NEVER Do These

- Implement before REQUIREMENTS.md has `status: approved` and PLAN.md has `status: approved`
- Leave `[NEEDS CLARIFICATION]` markers unresolved before Technical Design
- Suppress or bypass failing tests or build errors to make something pass
- Expand an approved PLAN.md — create a new numbered folder instead
- Silently deviate from an approved spec or plan — go back through the approval gate first
- Mix unrelated tasks in one session — use `/clear` to reset
- Introduce a library not in Tech Stack Mandates without a Decisions Log entry
- Revert `implemented` status without going through `/capture-findings` — requires FINDINGS.md audit trail
- Skip Phase 4 Audit before merging
- End a session mid-phase without writing a `<!-- CHECKPOINT -->` comment

### ALWAYS Do These

- Run `VERIFY_COMMAND` after every meaningful change
- Reference files by path in prompts (`@src/...`), never by vague description
- Include acceptance criteria in every implementation prompt
- Tag tests with the FR they cover using the namespaced form: `# FR-[iteration]-4` or `"FR-[iteration]-4: user can filter tasks"`
- Update CLAUDE.md Source of Truth + Decisions Log — last commit of every iteration
- Commit format: `feat([TIMESTAMP]): FR-N short description`
- Set `status: implemented` in `REQUIREMENTS.md` and `PLAN.md` when feature is complete

---

## Operations

### Hooks

> **Plugin-provided** hooks are in `hooks/hooks.json` (read-only, from sdd-workflow plugin).
> **Project-customizable** hooks go in `.claude/settings.json` under the `"hooks"` key.
> Both sources merge at runtime — project hooks supplement plugin hooks.

| Hook                 | Trigger                                                | Action                                                                                                    |
| -------------------- | ------------------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| **SessionStart**     | Session begins                                         | Scans for CHECKPOINT comments in PLAN.md files, reports in-progress work                                  |
| **PreCompact**       | Before context compaction                              | Write `<!-- CHECKPOINT -->` in PLAN.md, commit partial work (with dedup guard)                            |
| **PostToolUse**      | After every `Edit` or `Write` (matcher: `Edit\|Write`) | Runs `VERIFY_COMMAND` from CLAUDE.md if configured; warns if CLAUDE.md exists but no VERIFY_COMMAND found |
| **Stop**             | Claude tries to end session                            | Check PLAN.md for unchecked items — write checkpoint if incomplete (with dedup guard)                     |
| **UserPromptSubmit** | Before each user prompt                                | Shows active SDD plan progress (items done/remaining)                                                     |
| **SessionEnd**       | Session closes                                         | Backup checkpoint save (if Stop didn't fire), then warns about uncommitted changes                        |

### Phase 4 CI Audit Command

Add as a required check in your CI pipeline:

```bash
claude -p "Read requirements/[TIMESTAMP]-[feature-name]/REQUIREMENTS.md. Map every acceptance criterion to
code evidence. Output JSON: {passed: boolean, failures: [{criterion, gap}]}" \
  --output-format json | jq -e '.passed == true'
```

### CLAUDE.md Maintenance

- **Pruning**: if removing a line wouldn't cause Claude to make a mistake, delete it
- **Testing rules**: if a rule doesn't change Claude's behaviour, rewrite or remove it
- **Escalation**: prefix with `IMPORTANT:` or `YOU MUST` for rules repeatedly ignored
- **Imports**: `@path/to/module/CLAUDE.md` instead of duplicating module content here

### CLAUDE.local.md — Personal Preferences (gitignored)

Create `CLAUDE.local.md` in the project root for **personal, machine-specific preferences**
that you do not want committed. It is auto-loaded alongside `CLAUDE.md`.

Examples of what belongs in CLAUDE.local.md:

```markdown
# My personal preferences for this project

- My name for commits: Ada Lovelace <ada@example.com>
- I prefer shorter explanations — skip the rationale unless I ask
- I always work on macOS — don't give Linux-specific commands
- My preferred test runner invocation: `npm test -- --watch`
- When I say "ship it", assume I mean merge the current feature branch to main
```

Add to `.gitignore`:

```
CLAUDE.local.md
```

---

## Architectural Decisions Log

<!-- Add a row per decision. Never delete rows. -->

| Decision             | Rationale                                                      | Date       |
| -------------------- | -------------------------------------------------------------- | ---------- |
| Adopted SDD workflow | Bootstrapped from existing codebase audit via `/sdd-bootstrap` | 2026-04-06 |
