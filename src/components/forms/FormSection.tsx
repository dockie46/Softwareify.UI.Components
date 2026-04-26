import { Card, Col, Row, Skeleton, Typography } from 'antd'
import type { ReactNode } from 'react'
import { useResponsive } from '@/common/responsive/hooks'
import { spacing } from '@/config'

const { Title, Text } = Typography

export type FormSectionProps = {
  title: ReactNode
  subtitle?: ReactNode
  children: ReactNode
  columns?: 1 | 2
  loading?: boolean
}

const FormSection = ({
  title,
  subtitle,
  children,
  columns = 2,
  loading = false,
}: FormSectionProps) => {
  const { isMobile } = useResponsive()
  const effectiveColumns = isMobile ? 1 : columns

  return (
    <Card style={{ marginBottom: spacing.lg }}>
      <div style={{ marginBottom: spacing.lg }}>
        <Title level={5} style={{ margin: 0 }}>
          {title}
        </Title>
        {subtitle && (
          <Text type="secondary" style={{ display: 'block', marginTop: spacing.xs }}>
            {subtitle}
          </Text>
        )}
      </div>
      {loading ? (
        <Skeleton active paragraph={{ rows: 4 }} />
      ) : (
        <Row gutter={spacing['2xl']}>
          {effectiveColumns === 1 ? (
            <Col span={24}>{children}</Col>
          ) : (
            children
          )}
        </Row>
      )}
    </Card>
  )
}

export default FormSection
