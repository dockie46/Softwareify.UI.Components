import { Typography } from 'antd'
import { useTranslation } from 'react-i18next'

const { Text } = Typography

type PrimaryKeyProps = {
  value: string | undefined
  label?: string
  copyTooltip?: string
  copiedTooltip?: string
}

const PrimaryKey = ({ value, label, copyTooltip, copiedTooltip }: PrimaryKeyProps) => {
  const { t } = useTranslation()
  if (!value) return null

  return (
    <div
      style={{
        background: 'var(--color-highlight-bg, #f6f8fa)',
        border: '1px solid var(--color-highlight-border, #e1e4e8)',
        borderRadius: 8,
        padding: '16px 24px',
        display: 'flex',
        alignItems: 'center',
        gap: 20,
      }}
    >
      <Text
        style={{
          fontSize: 12,
          fontWeight: 700,
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
          fontSize: 15,
          fontWeight: 700,
          color: 'var(--color-text-primary, #24292e)',
        }}
      >
        {value}
      </Text>
    </div>
  )
}

export default PrimaryKey
