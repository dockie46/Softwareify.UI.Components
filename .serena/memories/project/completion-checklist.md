# Task Completion Checklist

When completing any implementation task:

## Before Committing
1. Run `npm run build` - must pass with zero errors and zero warnings
2. Verify `dist/` output contains compiled JS, types, and styles
3. Check no `console.log` statements were added (search for them)
4. Run `npm run storybook` and visually verify affected stories render
5. Commit using format: `feat([TIMESTAMP]): FR-N short description`

## During Refactoring Tasks (like 1775470061)
1. Update REQUIREMENTS.md acceptance criteria tracking if changes discovered
2. Update PLAN.md steps as you progress (mark items complete)
3. Write `<!-- CHECKPOINT -->` if session will end mid-task
4. Commit frequently (after each logical step)

## Phase 4 Fulfillment Audit
1. Map every acceptance criterion to code evidence
2. Verify TypeScript strict mode passes
3. Check Storybook builds and stories render
4. Verify bundle output in `dist/`
5. Check no Tailwind utilities remain (grep src/ for utility names)
6. Verify no `any` types in src/ except test files

## Final Merge Prep
1. Set REQUIREMENTS.md `status: implemented`
2. Set PLAN.md `status: implemented`
3. Update CLAUDE.md Source of Truth table with new patterns/files
4. Add Decisions Log entry for any new choices
5. Create MIGRATION.md if breaking changes exist
6. Mark PR ready for review
