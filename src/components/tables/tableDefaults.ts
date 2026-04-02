export const LIST_TABLE_BODY_MAX_Y = 'calc(100dvh - 300px)'

export const LIST_TABLE_PROPS = {
  size: 'middle',
  pagination: { pageSize: 20, showSizeChanger: true },
  scroll: { y: LIST_TABLE_BODY_MAX_Y },
} as const

export const DETAIL_TABLE_PROPS = {
  size: 'small',
  pagination: false,
} as const
