import { Button, Modal, Row, Spin, Typography } from 'antd'
import type React from 'react'
import type { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

interface Props extends React.PropsWithChildren<{}> {
  onCancel: () => void
  onFormSubmit?: () => void
  open: boolean
  title?: string
  width?: string
  footer?: ReactNode
  loading?: boolean
  btns?: {
    save?: { label?: string }
    cancel?: { label?: string }
  }
}

const BaseEditModal = ({
  onCancel,
  onFormSubmit,
  open,
  children,
  title,
  width = '50%',
  footer,
  loading = false,
  btns,
}: Props) => {
  const { t } = useTranslation()

  const defaultFooter = (
    <Row align="middle" justify="space-between">
      <Button disabled={loading} onClick={() => onCancel()} type="default">
        {btns?.cancel?.label ?? t('global.btns.cancelChanges')}
      </Button>
      <Button disabled={loading} onClick={onFormSubmit} block={false} type="primary" loading={loading}>
        {btns?.save?.label ?? t('global.btns.saveChanges')}
      </Button>
    </Row>
  )

  return (
    <Modal
      centered
      maskClosable={false}
      width={width}
      onCancel={onCancel}
      open={open}
      footer={footer ?? defaultFooter}
      title={
        !!title && (
          <Row justify="start" align="middle">
            <Typography.Title level={2}>{title}</Typography.Title>
          </Row>
        )
      }
    >
      <Spin spinning={loading} style={{ maxHeight: '100%' }}>
        {children}
      </Spin>
    </Modal>
  )
}

export default BaseEditModal
