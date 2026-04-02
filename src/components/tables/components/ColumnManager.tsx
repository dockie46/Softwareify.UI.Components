import { Badge, Button, Divider, Tooltip, Typography } from 'antd'
import DraggableMenuItem from './DraggableMenuItem'
import type { FixedStatus } from '../types'
import { UndoOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'

const THEME = {
  primary: '#1890ff',
  secondary: '#f5f7fa',
  accent: '#e6f7ff',
  border: '#e8e8e8',
  success: '#52c41a',
}

interface ColumnManagerProps {
  columns: {
    key: string
    visible: boolean
    fixed: FixedStatus
    title: string
  }[]
  moveColumn: (dragIndex: number, hoverIndex: number) => void
  toggleVisibility: (key: string) => void
  setFixedStatus: (key: string, status: FixedStatus) => void
  resetToDefault: () => void
  onCancel: () => void
  onApply: () => void
}

const ColumnManager: React.FC<ColumnManagerProps> = ({
  columns,
  moveColumn,
  toggleVisibility,
  setFixedStatus,
  resetToDefault,
  onCancel,
  onApply,
}) => {
  const visibleCount = columns.filter((col) => col.visible).length
  const totalCount = columns.length
  const { t } = useTranslation()

  const leftFixedCount = columns.filter((col) => col.fixed === 'left').length
  const rightFixedCount = columns.filter((col) => col.fixed === 'right').length

  return (
    <div className="bg-white shadow-lg rounded-lg w-80 max-h-[500px] flex flex-col overflow-hidden">
      <div className="p-4 font-bold border-b flex justify-between items-center bg-[#f5f7fa]">
        <Typography.Title level={5} style={{ margin: 0 }}>
          {t('global.labels.customizeTableColumns')}
        </Typography.Title>
        <Tooltip title={t('global.btns.reset')}>
          <Button type="text" icon={<UndoOutlined />} onClick={resetToDefault} className="text-[#1890ff]" />
        </Tooltip>
      </div>

      <div className="px-3 py-2 flex justify-between bg-[#fafafa] border-b">
        <div className="flex items-center">
          <Badge
            count={visibleCount}
            color={THEME.primary}
            size="small"
            overflowCount={999}
            style={{ marginRight: '8px' }}
          />
          <Typography.Text type="secondary" className="text-xs">
            {t('global.texts.columnsVisible', { count: visibleCount, total: totalCount })}
          </Typography.Text>
        </div>
        {(leftFixedCount > 0 || rightFixedCount > 0) && (
          <div className="flex items-center">
            {leftFixedCount > 0 && (
              <Badge count={leftFixedCount} size="small" color={THEME.primary} style={{ marginRight: '4px' }} />
            )}
            {rightFixedCount > 0 && <Badge count={rightFixedCount} size="small" color={THEME.success} />}
          </div>
        )}
      </div>

      <div className="overflow-auto flex-grow scrollbar-thin scrollbar-thumb-[#e8e8e8] scrollbar-track-transparent">
        {columns.map((col, index) => (
          <DraggableMenuItem
            key={col.key}
            columnKey={col.key}
            index={index}
            isVisible={col.visible}
            fixed={col.fixed}
            title={col.title}
            moveColumn={moveColumn}
            toggleVisibility={toggleVisibility}
            setFixedStatus={setFixedStatus}
          />
        ))}
      </div>

      <Divider className="my-0" />

      <div className="py-3 px-4 flex justify-end gap-2 bg-[#fafafa]">
        <Button block size="middle" onClick={onCancel}>
          {t('global.btns.cancel')}
        </Button>
        <Button block type="primary" size="middle" onClick={onApply}>
          {t('global.btns.apply')}
        </Button>
      </div>
    </div>
  )
}

export default ColumnManager
