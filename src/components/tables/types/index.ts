import type { ColumnTitle } from 'antd/es/table/interface'

export type FixedStatus = 'left' | 'right' | boolean

export type TableColumnConfig = {
  key: string
  visible: boolean
  fixed: FixedStatus
  originalIndex: number
}

export interface DraggableHeaderProps<T> {
  title: ColumnTitle<T>
  columnKey: string
  index: number
  moveColumn: (dragIndex: number, hoverIndex: number) => void
}

export interface DraggableMenuItemProps {
  columnKey: string
  index: number
  isVisible: boolean
  fixed: FixedStatus
  title: React.ReactNode
  moveColumn: (dragIndex: number, hoverIndex: number) => void
  toggleVisibility: (key: string) => void
  setFixedStatus: (key: string, status: FixedStatus) => void
}

export const DRAG_TYPE = 'DraggableColumn'
