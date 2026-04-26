import { Modal, Button, Row, Typography } from "antd"
import { ExclamationCircleOutlined } from "@ant-design/icons"
import type { ReactNode } from "react"
import { fontSize, spacing } from "@/config"
import { useLibTranslation } from "@/common/i18n"

const { Text } = Typography

type ConfirmVariant = "danger" | "warning" | "info"

export type ConfirmModalProps = {
  open: boolean
  onConfirm: () => void
  onCancel: () => void
  title: ReactNode
  description?: ReactNode
  confirmLabel?: string
  cancelLabel?: string
  variant?: ConfirmVariant
  loading?: boolean
  icon?: ReactNode
  children?: ReactNode
}

const variantButtonType: Record<ConfirmVariant, { danger: boolean }> = {
  danger: { danger: true },
  warning: { danger: false },
  info: { danger: false },
}

const ConfirmModal = ({
  open,
  onConfirm,
  onCancel,
  title,
  description,
  confirmLabel,
  cancelLabel,
  variant = "danger",
  loading = false,
  icon,
  children,
}: ConfirmModalProps) => {
  const { t } = useLibTranslation()

  return (
    <Modal
      open={open}
      onCancel={onCancel}
      centered
      maskClosable={false}
      title={
        <Row align="middle" style={{ gap: spacing.sm }}>
          {icon ?? <ExclamationCircleOutlined style={{ color: "var(--color-warning, #faad14)", fontSize: fontSize.xl }} />}
          <span>{title}</span>
        </Row>
      }
      footer={
        <Row align="middle" justify="end" style={{ gap: spacing.sm }}>
          <Button disabled={loading} onClick={onCancel}>
            {cancelLabel ?? t("btns.cancel")}
          </Button>
          <Button type="primary" {...variantButtonType[variant]} loading={loading} onClick={onConfirm}>
            {confirmLabel ?? t("btns.confirm")}
          </Button>
        </Row>
      }
    >
      {description && <Text type="secondary">{description}</Text>}
      {children}
    </Modal>
  )
}

export default ConfirmModal
