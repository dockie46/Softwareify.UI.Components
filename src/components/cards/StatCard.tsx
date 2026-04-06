import type { ReactNode } from 'react'
import { Card, Typography } from 'antd'
import { fontSize, spacing } from '@/config'

const { Text } = Typography

type StatCardProps = {
  label: ReactNode
  children: ReactNode
  style?: React.CSSProperties
}

const StatCard = ({ label, children, style }: StatCardProps) => {
  return (
    <Card 
      size="small" 
      styles={{ body: { padding: `${spacing.md}px ${spacing.lg}px` } }} 
      style={style}
    >
      <Text 
        type="secondary" 
        style={{ 
          fontSize: fontSize.xs, 
          display: 'block', 
          marginBottom: spacing.xs 
        }}
      >
        {label}
      </Text>
      {children}
    </Card>
  )
}

export default StatCard
