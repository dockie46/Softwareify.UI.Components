import { Empty, Typography } from "antd"
import type { ReactNode } from "react"

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
        padding: "48px 24px",
        textAlign: "center",
      }}
    >
      {icon ?? <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={null} />}
      <Text strong style={{ fontSize: 16, marginTop: icon ? 16 : 0, display: "block" }}>
        {title}
      </Text>
      {description && (
        <Text type="secondary" style={{ marginTop: 8, display: "block", maxWidth: 400 }}>
          {description}
        </Text>
      )}
      {action && <div style={{ marginTop: 16 }}>{action}</div>}
    </div>
  )
}

export default ContentState
