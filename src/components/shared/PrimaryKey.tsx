import { Typography } from 'antd'

const { Text } = Typography

type PrimaryKeyProps = {
  value: string | undefined
  label?: string
}

const PrimaryKey = ({ value, label = 'Primary key' }: PrimaryKeyProps) => {
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
        {label}
      </Text>
      <Text
        copyable={{ tooltips: ['Copy', 'Copied!'] }}
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
