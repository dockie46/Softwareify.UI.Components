import { Col, Row } from 'antd'
import type { Gutter } from 'antd/es/grid/row'
import type { ReactNode } from 'react'
import { spacing } from '@/config'

interface FormItemWrapperProps {
  firstItem: ReactNode
  secondItem?: ReactNode
  style?: React.CSSProperties
  gutter?: Gutter | [Gutter, Gutter]
}

const FormItemWrapper = ({ firstItem, secondItem, style, gutter = spacing['2xl'] }: FormItemWrapperProps) => {
  return (
    <Row gutter={gutter} style={style}>
      <Col xl={12} md={24} sm={24} xs={24}>
        {firstItem}
      </Col>
      <Col xl={12} md={24} sm={24} xs={24}>
        {secondItem}
      </Col>
    </Row>
  )
}

export default FormItemWrapper
