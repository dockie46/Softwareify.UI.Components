import { Empty, Typography } from "antd"
import type { ReactNode } from "react"
import { fontSize, spacing } from "@/config"

const { Text } = Typography

export type ContentStateProps = {
  icon?: ReactNode
  title: ReactNode
  description?: ReactNode
  action?: ReactNode
}

/**
 * Centered empty / no-data presentation: optional icon, title, description, and action.
 */
const ContentState = ({ icon, title, description, action }: ContentStateProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: `${spacing['3xl']}px ${spacing['2xl']}px`,
        textAlign: "center",
      }}
    >
      {icon ?? <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={null} />}
      <Text strong style={{ fontSize: fontSize.lg, marginTop: icon ? spacing.lg : 0, display: "block" }}>
        {title}
      </Text>
      {description && (
        <Text type="secondary" style={{ marginTop: spacing.sm, display: "block", maxWidth: 400 }}>
          {description}
        </Text>
      )}
      {action && <div style={{ marginTop: spacing.lg }}>{action}</div>}
    </div>
  )
}

export default ContentState
