import type { ReactNode } from 'react'
import { Card, Typography } from 'antd'

const { Text } = Typography

type StatCardProps = {
  label: ReactNode
  children: ReactNode
  style?: React.CSSProperties
}

const StatCard = ({ label, children, style }: StatCardProps) => {
  return (
    <Card size="small" styles={{ body: { padding: '16px 20px' } }} style={style}>
      <Text type="secondary" style={{ fontSize: 12, display: 'block', marginBottom: 6 }}>
        {label}
      </Text>
      {children}
    </Card>
  )
}

export default StatCard
