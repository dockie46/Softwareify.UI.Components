import { Button, Dropdown, Grid, Input, Space, Table, Tooltip } from 'antd'
import type { TableProps } from 'antd'
import type { FilterValue, SorterResult } from 'antd/es/table/interface'
import { MenuOutlined, SearchOutlined, TableOutlined } from '@ant-design/icons'
import { type ReactNode, useEffect, useMemo, useRef, useState } from 'react'
import type { BaseModel } from '@/common/models'
import ColumnManager from './components/ColumnManager'
import type { ColumnsType } from 'antd/es/table'
import { DndProvider } from 'react-dnd'
import DraggableHeader from './components/DraggableHeader'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { defaultTablePageSize } from '@/common/constants'
import { useColumnManager } from './hooks/useColumnManager'
import { useTableFullHeightCalculator } from './hooks/useTableFullHeightCalculator'
import { useTranslation } from 'react-i18next'

const THEME = {
  primary: '#1890ff',
  secondary: '#f5f7fa',
  accent: '#e6f7ff',
  border: '#e8e8e8',
}

export type TableFilterType = Record<string, FilterValue | null | any>
export type TableSorterType<T = any> = SorterResult<T> | SorterResult<T>[]

interface Props<T extends BaseModel<number>> extends TableProps<T> {
  totalCount: number
  onSearch?: (searchText: string) => void
  actionButtons?: ReactNode
}

const MainTable = <T extends BaseModel<number>>({
  totalCount,
  onSearch,
  actionButtons,
  ...restProps
}: Props<T>) => {
  const tableHeaderRef = useRef<HTMLDivElement>(null)
  const { t } = useTranslation()
  const { useBreakpoint } = Grid
  const screens = useBreakpoint()
  const { tableWrapperRef, tableRef, getTableHeight } = useTableFullHeightCalculator(
    restProps.scroll?.y,
    tableHeaderRef,
    screens,
  )
  const columns = restProps.columns || []
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [searchText, setSearchText] = useState<string>('')

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

  const handleOpenChange = (open: boolean) => {
    setIsDropdownOpen(open)
  }

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
          fixed: screens.xs ? false : config.fixed,
          title: <DraggableHeader title={col.title} columnKey={config.key} index={index} moveColumn={moveColumn} />,
          ellipsis: true,
          onCell: () => ({
            style: {
              whiteSpace: screens.xs ? 'normal' : ('nowrap' as const),
              padding: screens.xs ? '8px 4px' : undefined,
            },
          }),
        }
      })
      .filter(Boolean) as ColumnsType<T>
  }, [columns, getVisibleColumns, screens])

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

  const columnManagementDropdown = (
    <ColumnManager
      columns={columnManagerItems}
      moveColumn={moveColumn}
      toggleVisibility={toggleVisibility}
      setFixedStatus={setFixedStatus}
      resetToDefault={resetToDefault}
      onCancel={handleCancel}
      onApply={handleApply}
    />
  )

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ height: '100%', width: '100%' }}>
        <div
          ref={tableHeaderRef}
          style={{
            marginBottom: '16px',
            display: 'flex',
            flexDirection: screens.xs ? 'column' : 'row',
            justifyContent: 'space-between',
            alignItems: screens.xs ? 'stretch' : 'center',
            background: THEME.secondary,
            padding: screens.xs ? '12px 12px' : '12px 16px',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
            gap: screens.xs ? '12px' : '0',
          }}
        >
          <div
            style={{
              position: 'relative',
              width: screens.xs ? '100%' : '320px',
            }}
          >
            <Input
              placeholder={t('global.labels.search')}
              allowClear
              prefix={<SearchOutlined style={{ color: THEME.primary, fontSize: '16px' }} />}
              style={{
                borderRadius: '6px',
                padding: '8px 12px',
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.03)',
                border: `1px solid ${THEME.border}`,
                width: '100%',
              }}
              onChange={(e) => {
                const value = e.target.value
                setSearchText(value)

                clearTimeout((window as any).searchTimeout)
                ;(window as any).searchTimeout = setTimeout(() => {
                  if (onSearch) {
                    onSearch(value)
                  }
                }, 300)
              }}
              value={searchText}
            />
          </div>
          <Space
            size={screens.xs ? 'small' : 'middle'}
            direction={screens.xs ? 'vertical' : 'horizontal'}
            style={{
              width: screens.xs ? '100%' : 'auto',
              justifyContent: 'flex-end',
              display: 'flex',
            }}
          >
            <Tooltip title={t('global.labels.customizeTableColumns')}>
              <Dropdown
                open={isDropdownOpen}
                onOpenChange={handleOpenChange}
                overlay={columnManagementDropdown}
                trigger={['click']}
              >
                <Button
                  icon={screens.xs ? <MenuOutlined /> : <TableOutlined />}
                  style={{
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    backgroundColor: isDropdownOpen ? THEME.accent : 'white',
                    borderColor: isDropdownOpen ? THEME.primary : THEME.border,
                    color: isDropdownOpen ? THEME.primary : 'inherit',
                    boxShadow: isDropdownOpen ? `0 0 0 2px ${THEME.accent}` : 'none',
                    padding: screens.xs ? '6px 12px' : '6px 16px',
                    height: 'auto',
                    width: screens.xs ? '100%' : 'auto',
                    justifyContent: screens.xs ? 'center' : 'flex-start',
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
              size: screens.xs ? 'small' : 'default',
              ...(restProps.pagination || {}),
            }}
            className={`w-full h-full ${restProps.className || ''}`}
            scroll={{
              x: restProps.scroll?.x ? restProps.scroll.x : (draggableColumns?.length ?? 0) * (screens.xs ? 150 : 200),
              y: getTableHeight(),
            }}
            rowKey={(x) => x.id}
            size={screens.xs ? 'small' : 'middle'}
          />
        </div>
      </div>
    </DndProvider>
  )
}

export default MainTable
