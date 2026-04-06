import { Badge, Button, Divider, Tooltip, Typography } from "antd"
import DraggableMenuItem from "./DraggableMenuItem"
import type { FixedStatus } from "../types"
import { TABLE_THEME } from "../theme"
import { spacing } from "@/config"
import { UndoOutlined } from "@ant-design/icons"
import { useLibTranslation } from "@/common/i18n"

// ─── Tailwind → Inline Styles Migration ─────────────────────
// bg-white → backgroundColor: '#fff' (from antd theme)
// shadow-lg → box-shadow (antd elevation)
// rounded-lg → borderRadius (from theme)
// w-80 → width: 320px (20rem = 80 * 4px)
// max-h-[500px] → maxHeight: 500px
// flex flex-col → display: flex; flexDirection: column
// overflow-hidden → overflow: hidden
// p-4 → padding: spacing.md (12px)
// font-bold → fontWeight: 700
// border-b → borderBottom: 1px solid
// flex justify-between items-center → flex layout
// px-3 py-2 → paddingX: spacing.sm, paddingY: spacing.xs
// text-xs → fontSize: fontSize.xs (12px)
// overflow-auto flex-grow → overflow: auto; flex: 1
// py-3 px-4 → paddingY: spacing.md, paddingX: spacing.lg
// justify-end → justifyContent: flex-end
// gap-2 → gap: spacing.xs (4px)

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

// Using React.FC for consistent component interface with explicit return type
// This component uses hooks (useLibTranslation) which require functional component syntax
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
  const { t } = useLibTranslation()

  const leftFixedCount = columns.filter((col) => col.fixed === "left").length
  const rightFixedCount = columns.filter((col) => col.fixed === "right").length

  return (
    <div
      style={{
        backgroundColor: '#fff',
        boxShadow: '0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08)',
        borderRadius: 8,
        width: 320,
        maxHeight: 500,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          background: TABLE_THEME.secondary,
          padding: spacing.md,
          fontWeight: 700,
          borderBottom: `1px solid ${TABLE_THEME.border}`,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography.Title level={5} style={{ margin: 0 }}>
          {t("labels.customizeTableColumns")}
        </Typography.Title>
        <Tooltip title={t("btns.reset")}>
          <Button type="text" icon={<UndoOutlined />} onClick={resetToDefault} style={{ color: TABLE_THEME.primary }} />
        </Tooltip>
      </div>

      <div
        style={{
          paddingLeft: spacing.sm,
          paddingRight: spacing.sm,
          paddingTop: spacing.xs,
          paddingBottom: spacing.xs,
          display: 'flex',
          justifyContent: 'space-between',
          borderBottom: `1px solid ${TABLE_THEME.border}`,
          background: TABLE_THEME.secondary,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Badge
            count={visibleCount}
            color={TABLE_THEME.primary}
            size="small"
            overflowCount={999}
            style={{ marginRight: spacing.sm }}
          />
          <Typography.Text type="secondary" style={{ fontSize: 12 }}>
            {t("texts.columnsVisible", { count: visibleCount, total: totalCount })}
          </Typography.Text>
        </div>
        {(leftFixedCount > 0 || rightFixedCount > 0) && (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {leftFixedCount > 0 && (
              <Badge count={leftFixedCount} size="small" color={TABLE_THEME.primary} style={{ marginRight: spacing.xs }} />
            )}
            {rightFixedCount > 0 && <Badge count={rightFixedCount} size="small" color={TABLE_THEME.success} />}
          </div>
        )}
      </div>

      <div style={{ overflow: 'auto', flex: 1 }}>
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

      <Divider style={{ margin: 0 }} />

      <div
        style={{
          paddingTop: spacing.md,
          paddingBottom: spacing.md,
          paddingLeft: spacing.lg,
          paddingRight: spacing.lg,
          display: 'flex',
          justifyContent: 'flex-end',
          gap: spacing.xs,
          background: TABLE_THEME.secondary,
        }}
      >
        <Button block size="middle" onClick={onCancel}>
          {t("btns.cancel")}
        </Button>
        <Button block type="primary" size="middle" onClick={onApply}>
          {t("btns.apply")}
        </Button>
      </div>
    </div>
  )
}

export default ColumnManager
