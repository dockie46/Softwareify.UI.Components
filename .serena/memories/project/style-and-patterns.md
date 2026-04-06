# Code Style and Patterns

## Component Structure
**ALWAYS follow this pattern:**
1. Define props interface/type
2. Implement as arrow function component
3. Default export the component

```typescript
interface UserCardProps {
  id: string
  email: string
  onSelect: (id: string) => void
}

export default function UserCard({ id, email, onSelect }: UserCardProps) {
  return (
    <button onClick={() => onSelect(id)}>
      {email}
    </button>
  )
}
```

**NEVER use:**
- React.FC
- class components
- Inline arrow function as default export without named interface

## Type Safety Rules
- Zero `any` types (use `unknown` for untrusted input, then narrow it)
- Generic constraints for type-dependent values
- Explicit prop types on all exported components
- Use `as const` for token objects (design values)

## File Organization
- Each component in its own directory: `src/components/[category]/[Component]/`
- Colocated stories: `Component.stories.tsx` next to `Component.tsx`
- Barrel files: Every component dir has `index.ts` re-exporting component + types
- Helpers in `src/common/helpers/`
- Hooks in `src/common/hooks/` or module-specific hooks directories
- Types/models in `src/common/models/`

## Design Tokens
- All hardcoded values go to `src/config/designTokens.ts` first
- Use tokens via `designTokens.colors`, `designTokens.spacing`, etc.
- Token objects defined with `as const` for literal types
- No CSS variables hardcoded in component files

## i18n Pattern (Current)
- Use `useTranslation('global')` to load translation namespace
- Keys like `global.btns.save`, `global.validations.input.isRequiredField`
- Store translations in `.storybook/i18n/` (currently)
- NOTE: Refactor will change this to `useLibTranslation()` hook with 'softwareify-ui' namespace

## Naming Conventions
- PascalCase for components: `MainHeader`, `StatCard`
- camelCase for hooks: `useColumnManager`, `useTableFullHeightCalculator`
- camelCase for helper functions: `objectToFormData`, `datesToDayjs`
- UPPER_SNAKE_CASE for constants: `ITEM_HEIGHT`, `TABLE_THEME`
- Descriptive prop names: prefer `onSelect` over `onCb`, `isLoading` over `loading`

## TypeScript Strict Mode
All files must pass `tsc --noEmit` with strict: true
- Explicitly type function parameters
- Explicitly type return types on exports
- Use `Readonly<T>` for immutable props
- Discriminated unions for variant components
