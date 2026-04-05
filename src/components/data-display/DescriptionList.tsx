import { Descriptions, Skeleton } from 'antd'
import type { DescriptionsProps } from 'antd'
import type { ReactNode } from 'react'
import { useResponsive } from '@/common/responsive/hooks'

export type DescriptionListItem = {
  label: ReactNode
  value: ReactNode
  span?: number
}

export type DescriptionListProps = {
  items: DescriptionListItem[]
  loading?: boolean
  column?: DescriptionsProps['column']
  title?: ReactNode
  bordered?: boolean
  layout?: DescriptionsProps['layout']
}

const DescriptionList = ({
  items,
  loading = false,
  column,
  title,
  bordered = false,
  layout,
}: DescriptionListProps) => {
  const { isMobile } = useResponsive()

  if (loading) {
    return <Skeleton active paragraph={{ rows: items.length }} title={!!title && { width: '30%' }} />
  }

  const defaultColumn = column ?? (isMobile ? 1 : 2)
  const defaultLayout = layout ?? (isMobile ? 'vertical' : 'horizontal')

  return (
    <Descriptions
      title={title}
      column={defaultColumn}
      bordered={bordered}
      layout={defaultLayout}
      size={isMobile ? 'small' : 'default'}
    >
      {items.map((item, index) => (
        <Descriptions.Item key={index} label={item.label} span={item.span}>
          {item.value}
        </Descriptions.Item>
      ))}
    </Descriptions>
  )
}

export default DescriptionList
