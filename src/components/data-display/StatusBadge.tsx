import { Badge, Typography } from 'antd'
import type { ReactNode } from 'react'
import { spacing } from '@/config'

const { Text } = Typography

type StatusType = 'success' | 'warning' | 'error' | 'info' | 'default'

export type StatusBadgeProps = {
  status: StatusType
  label: ReactNode
}

const statusColorMap: Record<StatusType, string> = {
  success: 'var(--color-success, #52c41a)',
  warning: 'var(--color-warning, #fa8c16)',
  error: 'var(--color-error, #f5222d)',
  info: 'var(--color-info, #1677ff)',
  default: 'var(--color-text-muted, #d9d9d9)',
}

const StatusBadge = ({ status, label }: StatusBadgeProps) => {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: spacing.sm }}>
      <Badge color={statusColorMap[status]} />
      <Text>{label}</Text>
    </span>
  )
}

export default StatusBadge
