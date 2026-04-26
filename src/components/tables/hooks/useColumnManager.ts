import type { FixedStatus, TableColumnConfig } from '../types'
import type { ColumnsType } from 'antd/es/table'
import type { BaseModel } from '@/common/models'
import { useCallback, useEffect, useMemo, useState } from 'react'

/**
 * Hook for managing table column visibility, order, and fixed positioning.
 * Provides type-safe column management with generic constraint on data model.
 */
export function useColumnManager<T extends BaseModel<string | number>>(
  columns: ColumnsType<T>
) {
  const getColumnKey = (col: ColumnsType<T>[number]): string => {
    if (!col) return ''
    // Handle both ColumnType and ColumnGroupType
    if ('children' in col) {
      // ColumnGroupType - use key as fallback
      return ((col.key as string) || '') ?? ''
    }
    // ColumnType
    return ((col.key || col.dataIndex) as string) ?? ''
  }

  const originalColumnsOrder = useMemo(() => columns.map(getColumnKey).filter(Boolean), [columns])

  const createInitialConfig = (): Record<string, TableColumnConfig> => {
    const config: Record<string, TableColumnConfig> = {}
    
    for (let index = 0; index < columns.length; index++) {
      const col = columns[index]
      if (!col) continue
      
      // Skip column groups (they have children property)
      if ('children' in col) continue
      
      // Now col is safely typed as ColumnType<T>
      const key = getColumnKey(col)
      if (!key) continue
      
      config[key] = {
        key,
        visible: true,
        fixed: (col.fixed as FixedStatus) ?? false,
        originalIndex: index,
      }
    }
    
    return config
  }

  const [columnConfig, setColumnConfig] = useState(() => createInitialConfig())
  const [editingConfig, setEditingConfig] = useState(() => createInitialConfig())
  const [orderConfig, setOrderConfig] = useState(() => originalColumnsOrder)
  const [editingOrderConfig, setEditingOrderConfig] = useState(() => originalColumnsOrder)

  useEffect(() => {
    const newConfig = createInitialConfig()
    const newOrder = columns.map(getColumnKey).filter(Boolean)

    setColumnConfig(newConfig)
    setEditingConfig(newConfig)
    setOrderConfig(newOrder)
    setEditingOrderConfig(newOrder)
  }, [columns])

  const startEditing = useCallback(() => {
    setEditingConfig({ ...columnConfig })
    setEditingOrderConfig([...orderConfig])
  }, [columnConfig, orderConfig])

  const applyChanges = (): void => {
    setColumnConfig(editingConfig)
    setOrderConfig(editingOrderConfig)
  }

  const cancelChanges = (): void => {
    setEditingConfig({ ...columnConfig })
    setEditingOrderConfig([...orderConfig])
  }

  const resetToDefault = (): void => {
    setEditingConfig(createInitialConfig())
    setEditingOrderConfig([...originalColumnsOrder])
  }

  const moveColumn = (dragIndex: number, hoverIndex: number): void => {
    const newOrder = [...editingOrderConfig]
    const dragItem = newOrder[dragIndex]
    newOrder.splice(dragIndex, 1)
    newOrder.splice(hoverIndex, 0, dragItem)
    setEditingOrderConfig(newOrder)
  }

  const toggleVisibility = (key: string): void => {
    const visibleCount = Object.values(editingConfig).filter((c) => c.visible).length
    if (editingConfig[key]?.visible && visibleCount <= 1) return

    setEditingConfig((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        visible: !prev[key]?.visible,
      },
    }))
  }

  const setFixedStatus = (key: string, status: FixedStatus): void => {
    setEditingConfig((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        fixed: status,
      },
    }))
  }

  const getVisibleColumns = (): Array<{ key: string; fixed: FixedStatus }> => {
    return orderConfig
      .filter((key) => columnConfig[key]?.visible)
      .map((key) => ({
        key,
        fixed: columnConfig[key]?.fixed ?? false,
      }))
  }

  const getEditingColumns = (): Array<{ key: string; visible: boolean; fixed: FixedStatus }> => {
    return editingOrderConfig.map((key) => ({
      key,
      visible: editingConfig[key]?.visible ?? false,
      fixed: editingConfig[key]?.fixed ?? false,
    }))
  }

  return {
    getColumnKey,
    getVisibleColumns,
    getEditingColumns,
    startEditing,
    applyChanges,
    cancelChanges,
    resetToDefault,
    moveColumn,
    toggleVisibility,
    setFixedStatus,
  }
}
