# Migration Guide

## v0.1.1 → v0.2.0

### Breaking Changes

#### ActionColumnRow: Deprecated `left` and `right` props removed

The `left` and `right` props have been removed from `ActionColumnRow`. Use the `items` prop instead.

**Before:**
```tsx
<ActionColumnRow
  left={<Button>Call</Button>}
  right={<Button>Email</Button>}
/>
```

**After:**
```tsx
<ActionColumnRow
  items={[
    <Button key="left">Call</Button>,
    <Button key="right">Email</Button>,
  ]}
/>
```

**Rationale:** The `items` prop is more flexible and aligns with modern React patterns. It accepts any number of items (not just left/right) and makes the component's intent clearer.
