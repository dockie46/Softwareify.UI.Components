/**
 * Tables feature area
 *
 * - `main-table/` — {@link MainTable} + toolbar
 * - `column-manager/` — draggable columns UI (used by MainTable)
 * - `filters/` — Ant Design column filter helpers
 * - `layout/` — list-page scroll + shell helpers
 * - `hooks/` — column state + full-height measurement
 * - `types/` — shared table TypeScript types
 * - `theme.ts` — table chrome tokens
 */

export { default as MainTable } from "./main-table/MainTable"
export type { TableFilterType, TableSorterType, MainTableProps } from "./main-table/MainTable"

export { default as MainTableToolbar } from "./main-table/MainTableToolbar"
export type { MainTableToolbarProps } from "./main-table/MainTableToolbar"

export { default as ColumnManager } from "./column-manager/ColumnManager"
export { default as DraggableHeader } from "./column-manager/DraggableHeader"
export { default as DraggableMenuItem } from "./column-manager/DraggableMenuItem"

export { useColumnManager } from "./hooks/useColumnManager"
export { useTableFullHeightCalculator } from "./hooks/useTableFullHeightCalculator"

export * from "./types"
export * from "./layout/listPageTableLayout"
export { ListPageTableArea } from "./layout/ListPageTableArea"
export {
  TextFilterDropdown,
  textSearchColumnProps,
  textSearchMultiFieldProps,
  enumFilterColumnProps,
  booleanFilterColumnProps,
} from "./filters/columnFilters"
