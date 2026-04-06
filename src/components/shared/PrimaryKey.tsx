import { Typography } from 'antd'
import { useLibTranslation } from '@/common/i18n'
import { fontSize, fontWeight, radius, spacing } from '@/config'

const { Text } = Typography

type PrimaryKeyProps = {
  value: string | undefined
  label?: string
  copyTooltip?: string
  copiedTooltip?: string
}

const PrimaryKey = ({ value, label, copyTooltip, copiedTooltip }: PrimaryKeyProps) => {
  const { t } = useLibTranslation()
  if (!value) return null

  return (
    <div
      style={{
        background: 'var(--color-highlight-bg, #f6f8fa)',
        border: '1px solid var(--color-highlight-border, #e1e4e8)',
        borderRadius: radius.lg,
        padding: `${spacing.md}px ${spacing['2xl']}px`,
        display: 'flex',
        alignItems: 'center',
        gap: spacing.xl,
      }}
    >
      <Text
        style={{
          fontSize: fontSize.xs,
          fontWeight: fontWeight.bold,
          color: 'var(--color-highlight-text, #586069)',
          textTransform: 'uppercase',
          letterSpacing: 1.5,
          flexShrink: 0,
        }}
      >
        {label ?? t('global.labels.primaryKey')}
      </Text>
      <Text
        copyable={{
          tooltips: [
            copyTooltip ?? t('global.btns.copy'),
            copiedTooltip ?? t('global.btns.copied'),
          ],
        }}
        style={{
          fontFamily: 'monospace',
          fontSize: fontSize.md,
          fontWeight: fontWeight.bold,
          color: 'var(--color-text-primary, #24292e)',
        }}
      >
        {value}
      </Text>
    </div>
  )
}

export default PrimaryKey
