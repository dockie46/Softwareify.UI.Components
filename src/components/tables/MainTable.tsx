import { Button, Dropdown, Input, Space, Table, Tooltip } from 'antd'
import type { TableProps } from 'antd'
import type { FilterValue, SorterResult } from 'antd/es/table/interface'
import type { ColumnsType } from 'antd/es/table'
import { MenuOutlined, SearchOutlined, TableOutlined } from '@ant-design/icons'
import { type ReactNode, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type { BaseModel } from '@/common/models'
import ColumnManager from './components/ColumnManager'
import { DndProvider } from 'react-dnd'
import DraggableHeader from './components/DraggableHeader'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { TABLE_THEME } from './theme'
import { defaultTablePageSize } from '@/common/constants'
import { useColumnManager } from './hooks/useColumnManager'
import { useResponsive } from '@/common/responsive/hooks'
import { useTableFullHeightCalculator } from './hooks/useTableFullHeightCalculator'
import { useTranslation } from 'react-i18next'

export type TableFilterType = Record<string, FilterValue | null>
export type TableSorterType<T = unknown> = SorterResult<T> | SorterResult<T>[]

export interface MainTableProps<T extends BaseModel<number | string>> extends TableProps<T> {
  totalCount: number
  onSearch?: (searchText: string) => void
  actionButtons?: ReactNode
  searchDebounceMs?: number
}

const MainTable = <T extends BaseModel<number | string>>({
  totalCount,
  onSearch,
  actionButtons,
  searchDebounceMs = 300,
  ...restProps
}: MainTableProps<T>) => {
  const tableHeaderRef = useRef<HTMLDivElement>(null)
  const searchTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const { t } = useTranslation()
  const { isMobile, screens } = useResponsive()
  const { tableWrapperRef, tableRef, getTableHeight } = useTableFullHeightCalculator(
    restProps.scroll?.y,
    tableHeaderRef,
    screens,
  )
  const columns = restProps.columns || []
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [searchText, setSearchText] = useState('')

  const {
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
  } = useColumnManager(columns)

  useEffect(() => {
    if (isDropdownOpen) {
      startEditing()
    }
  }, [isDropdownOpen])

  useEffect(() => {
    return () => {
      if (searchTimerRef.current) clearTimeout(searchTimerRef.current)
    }
  }, [])

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value
      setSearchText(value)

      if (searchTimerRef.current) clearTimeout(searchTimerRef.current)
      searchTimerRef.current = setTimeout(() => {
        onSearch?.(value)
      }, searchDebounceMs)
    },
    [onSearch, searchDebounceMs],
  )

  const handleApply = () => {
    applyChanges()
    setIsDropdownOpen(false)
  }

  const handleCancel = () => {
    cancelChanges()
    setIsDropdownOpen(false)
  }

  const draggableColumns = useMemo(() => {
    const visibleColumns = getVisibleColumns()
    const columnMap = new Map(columns.map((col) => [getColumnKey(col), col]))

    return visibleColumns
      .map((config, index) => {
        const col = columnMap.get(config.key)
        if (!col) return null

        return {
          ...col,
          fixed: isMobile ? false : config.fixed,
          title: <DraggableHeader title={col.title as ReactNode} columnKey={config.key} index={index} moveColumn={moveColumn} />,
          ellipsis: true,
          onCell: () => ({
            style: {
              whiteSpace: isMobile ? 'normal' : ('nowrap' as const),
              padding: isMobile ? '8px 4px' : undefined,
            },
          }),
        }
      })
      .filter(Boolean) as ColumnsType<T>
  }, [columns, getVisibleColumns, isMobile, screens])

  const columnManagerItems = useMemo(() => {
    const editingColumns = getEditingColumns()
    const columnMap = new Map(columns.map((col) => [getColumnKey(col), col]))

    return editingColumns.map((config) => ({
      key: config.key,
      visible: config.visible,
      fixed: config.fixed,
      title: columnMap.get(config.key)?.title?.toString() || config.key,
    }))
  }, [columns, getEditingColumns])

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ height: '100%', width: '100%' }}>
        <div
          ref={tableHeaderRef}
          style={{
            marginBottom: 16,
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'space-between',
            alignItems: isMobile ? 'stretch' : 'center',
            background: TABLE_THEME.secondary,
            padding: isMobile ? '12px 12px' : '12px 16px',
            borderRadius: 8,
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
            gap: isMobile ? 12 : 0,
          }}
        >
          {onSearch && (
            <div style={{ position: 'relative', width: isMobile ? '100%' : 320 }}>
              <Input
                placeholder={t('global.labels.search')}
                allowClear
                prefix={<SearchOutlined style={{ color: TABLE_THEME.primary, fontSize: 16 }} />}
                style={{
                  borderRadius: 6,
                  padding: '8px 12px',
                  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.03)',
                  border: `1px solid ${TABLE_THEME.border}`,
                  width: '100%',
                }}
                onChange={handleSearchChange}
                value={searchText}
              />
            </div>
          )}
          <Space
            size={isMobile ? 'small' : 'middle'}
            direction={isMobile ? 'vertical' : 'horizontal'}
            style={{
              width: isMobile ? '100%' : 'auto',
              justifyContent: 'flex-end',
              display: 'flex',
            }}
          >
            <Tooltip title={t('global.labels.customizeTableColumns')}>
              <Dropdown
                open={isDropdownOpen}
                onOpenChange={setIsDropdownOpen}
                dropdownRender={() => (
                  <ColumnManager
                    columns={columnManagerItems}
                    moveColumn={moveColumn}
                    toggleVisibility={toggleVisibility}
                    setFixedStatus={setFixedStatus}
                    resetToDefault={resetToDefault}
                    onCancel={handleCancel}
                    onApply={handleApply}
                  />
                )}
                trigger={['click']}
              >
                <Button
                  icon={isMobile ? <MenuOutlined /> : <TableOutlined />}
                  style={{
                    borderRadius: 6,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    backgroundColor: isDropdownOpen ? TABLE_THEME.accent : 'white',
                    borderColor: isDropdownOpen ? TABLE_THEME.primary : TABLE_THEME.border,
                    color: isDropdownOpen ? TABLE_THEME.primary : 'inherit',
                    boxShadow: isDropdownOpen ? `0 0 0 2px ${TABLE_THEME.accent}` : 'none',
                    padding: isMobile ? '6px 12px' : '6px 16px',
                    height: 'auto',
                    width: isMobile ? '100%' : 'auto',
                    justifyContent: isMobile ? 'center' : 'flex-start',
                  }}
                >
                  {t('global.btns.columns')}
                </Button>
              </Dropdown>
            </Tooltip>
            {actionButtons}
          </Space>
        </div>
        <div style={{ height: '100%', width: '100%' }} ref={tableWrapperRef}>
          <Table
            {...restProps}
            columns={draggableColumns}
            virtual={restProps.virtual ?? true}
            ref={tableRef}
            pagination={{
              position: ['bottomCenter'],
              total: totalCount ?? 0,
              defaultPageSize: defaultTablePageSize,
              showSizeChanger: false,
              size: isMobile ? 'small' : 'default',
              ...(restProps.pagination || {}),
            }}
            className={`w-full h-full ${restProps.className || ''}`}
            scroll={{
              x: restProps.scroll?.x ?? (draggableColumns?.length ?? 0) * (isMobile ? 150 : 200),
              y: getTableHeight(),
            }}
            rowKey={(x) => x.id}
            size={isMobile ? 'small' : 'middle'}
          />
        </div>
      </div>
    </DndProvider>
  )
}

export default MainTable
