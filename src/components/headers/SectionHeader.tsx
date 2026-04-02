import { Grid, Space, Typography } from 'antd'
import type { ReactNode } from 'react'

type SectionHeaderProps = {
  title: ReactNode
  filters?: ReactNode
  actions?: ReactNode
}

const SectionHeader = ({ title, filters, actions }: SectionHeaderProps) => {
  const screens = Grid.useBreakpoint()
  const isMobile = !screens.md

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: isMobile ? 'flex-start' : 'center',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? 8 : 0,
        marginBottom: 12,
      }}
    >
      <Typography.Title level={5} style={{ margin: 0 }}>
        {title}
      </Typography.Title>
      {filters || actions ? (
        <Space size={8} wrap style={{ width: isMobile ? '100%' : undefined }}>
          {filters}
          {actions}
        </Space>
      ) : null}
    </div>
  )
}

export default SectionHeader
