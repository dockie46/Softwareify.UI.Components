import { Breadcrumb, Button, Space, Typography } from "antd"
import type { BreadcrumbProps } from "antd"
import { ArrowLeftOutlined } from "@ant-design/icons"
import type { ReactNode } from "react"
import { useResponsive } from "@/common/responsive/hooks"

const { Title, Text } = Typography

export type MainHeaderVariant = "page" | "section"

export type MainHeaderProps = {
  title: ReactNode
  variant?: MainHeaderVariant
  subtitle?: ReactNode
  breadcrumb?: BreadcrumbProps
  /** Buttons or other controls on the same row as the breadcrumb, right-aligned (page variant only). */
  breadcrumbExtra?: ReactNode
  onBack?: () => void
  filters?: ReactNode
  actions?: ReactNode
}

const MainHeader = ({
  title,
  variant = "page",
  subtitle,
  breadcrumb,
  breadcrumbExtra,
  onBack,
  filters,
  actions,
}: MainHeaderProps) => {
  const { isMobile } = useResponsive()
  const isPage = variant === "page"
  const titleLevel = isPage ? 4 : 5
  const outerMb = isPage ? 16 : 12
  const rowGap = isPage ? 12 : 8

  const hasRight = Boolean(filters || actions)

  const showBreadcrumbRow = isPage && (breadcrumb || breadcrumbExtra)

  return (
    <div style={{ marginBottom: outerMb }}>
      {showBreadcrumbRow && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 12,
            marginBottom: 8,
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: "1 1 auto", minWidth: 0 }}>
            {breadcrumb ? <Breadcrumb {...breadcrumb} /> : null}
          </div>
          {breadcrumbExtra ? (
            <Space size={8} wrap style={{ flexShrink: 0 }}>
              {breadcrumbExtra}
            </Space>
          ) : null}
        </div>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: isMobile ? "flex-start" : "center",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? rowGap : 0,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {isPage && onBack && (
            <Button type="text" icon={<ArrowLeftOutlined />} onClick={onBack} size="small" aria-label="back" />
          )}
          <div>
            <Title level={titleLevel} style={{ margin: 0 }}>
              {title}
            </Title>
            {subtitle && (
              <Text type="secondary" style={{ marginTop: 2, display: "block" }}>
                {subtitle}
              </Text>
            )}
          </div>
        </div>
        {hasRight && (
          <Space size={8} wrap style={{ width: isMobile ? "100%" : undefined }}>
            {filters}
            {actions}
          </Space>
        )}
      </div>
    </div>
  )
}

export default MainHeader
