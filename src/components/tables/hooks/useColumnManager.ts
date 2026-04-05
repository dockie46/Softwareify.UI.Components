import type { FixedStatus, TableColumnConfig } from "../types"
import { useCallback, useEffect, useMemo, useState } from "react"

export function useColumnManager(columns: any[]) {
  const getColumnKey = (col: any) => (col.key || col.dataIndex) as string

  const originalColumnsOrder = useMemo(() => columns.map(getColumnKey), [columns])

  const createInitialConfig = (): Record<string, TableColumnConfig> => {
    return columns.reduce((config, col, index) => {
      const key = getColumnKey(col)
      return {
        ...config,
        [key]: {
          key,
          visible: true,
          fixed: col.fixed ?? false,
          originalIndex: index,
        },
      }
    }, {})
  }

  const [columnConfig, setColumnConfig] = useState(() => createInitialConfig())
  const [editingConfig, setEditingConfig] = useState(() => createInitialConfig())
  const [orderConfig, setOrderConfig] = useState(() => originalColumnsOrder)
  const [editingOrderConfig, setEditingOrderConfig] = useState(() => originalColumnsOrder)

  useEffect(() => {
    const newConfig = createInitialConfig()
    const newOrder = columns.map(getColumnKey)

    setColumnConfig(newConfig)
    setEditingConfig(newConfig)
    setOrderConfig(newOrder)
    setEditingOrderConfig(newOrder)
  }, [columns])

  const startEditing = useCallback(() => {
    setEditingConfig({ ...columnConfig })
    setEditingOrderConfig([...orderConfig])
  }, [columnConfig, orderConfig])

  const applyChanges = () => {
    setColumnConfig(editingConfig)
    setOrderConfig(editingOrderConfig)
  }

  const cancelChanges = () => {
    setEditingConfig({ ...columnConfig })
    setEditingOrderConfig([...orderConfig])
  }

  const resetToDefault = () => {
    setEditingConfig(createInitialConfig())
    setEditingOrderConfig([...originalColumnsOrder])
  }

  const moveColumn = (dragIndex: number, hoverIndex: number) => {
    const newOrder = [...editingOrderConfig]
    const dragItem = newOrder[dragIndex]
    newOrder.splice(dragIndex, 1)
    newOrder.splice(hoverIndex, 0, dragItem)
    setEditingOrderConfig(newOrder)
  }

  const toggleVisibility = (key: string) => {
    const visibleCount = Object.values(editingConfig).filter((c) => c.visible).length
    if (editingConfig[key].visible && visibleCount <= 1) return

    setEditingConfig((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        visible: !prev[key].visible,
      },
    }))
  }

  const setFixedStatus = (key: string, status: FixedStatus) => {
    setEditingConfig((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        fixed: status,
      },
    }))
  }

  const getVisibleColumns = () => {
    return orderConfig
      .filter((key) => columnConfig[key]?.visible)
      .map((key) => ({
        key,
        fixed: columnConfig[key]?.fixed || false,
      }))
  }

  const getEditingColumns = () => {
    return editingOrderConfig.map((key) => ({
      key,
      visible: editingConfig[key]?.visible || false,
      fixed: editingConfig[key]?.fixed || false,
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
