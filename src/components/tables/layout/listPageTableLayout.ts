/**
 * Defaults and layout helpers for list/detail pages that embed the main data table.
 */
import type { TableProps } from "antd"

export const LIST_TABLE_BODY_MAX_Y = "calc(100dvh - 300px)"

export const LIST_TABLE_PROPS = {
  size: "middle",
  pagination: { pageSize: 20, showSizeChanger: true },
  scroll: { y: LIST_TABLE_BODY_MAX_Y },
} as const

export const DETAIL_TABLE_PROPS = {
  size: "small",
  pagination: false,
} as const

export type ListPageGap = "gap-4" | "gap-6"

export const listPageRootClassName = (isMobile: boolean, options?: { gap?: ListPageGap }): string => {
  const gap = options?.gap ?? "gap-6"
  const base = `flex h-full min-h-0 flex-col ${gap}`
  if (isMobile) return base
  return `${base} overflow-hidden`
}

export const listTableScroll = (
  isMobile: boolean,
  mobileScrollX?: number,
): NonNullable<TableProps<unknown>["scroll"]> => {
  const y = LIST_TABLE_BODY_MAX_Y
  if (isMobile && mobileScrollX != null && mobileScrollX > 0) {
    return { x: mobileScrollX, y }
  }
  return { ...LIST_TABLE_PROPS.scroll }
}
