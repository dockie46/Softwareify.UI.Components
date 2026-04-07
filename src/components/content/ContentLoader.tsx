import { Card, Skeleton, Space } from "antd"
import type { CSSProperties, ReactNode } from "react"
import { spacing } from "@/config"

// Skeleton width percentages (30%, 45%, 60%, 72%, etc.) and row counts are visual approximations
// for loading placeholders. They mimic realistic content widths, not design tokens.

const rootStyle = (gap: number): CSSProperties => ({
  display: "flex",
  flexDirection: "column",
  gap,
})

export type ContentLoaderVariant =
  | "hero"
  | "stacked"
  | "content"
  | "fields"
  | "grid"
  | "rows"

export type ContentLoaderProps = {
  variant?: ContentLoaderVariant
  cards?: number
  rows?: number
  inputRows?: number
  showAvatar?: boolean
  gap?: number
  className?: string
  style?: CSSProperties
  footer?: ReactNode
}

/** Skeleton layouts for page sections while data is loading. */
const ContentLoader = ({
  variant = "hero",
  cards = 4,
  rows,
  inputRows = 5,
  showAvatar = true,
  gap = spacing.lg,
  className,
  style,
  footer,
}: ContentLoaderProps) => {
  const g = gap
  const contentRows = rows ?? 6
  const rowLines = rows ?? 5

  if (variant === "stacked") {
    return (
      <div className={className} style={{ ...rootStyle(g), ...style }}>
        <Card>
          <Skeleton
            active
            title={{ width: "30%" }}
            paragraph={{ rows: 5, width: ["45%", "45%", "60%", "45%", "45%"] }}
          />
        </Card>
        <Card>
          <Skeleton active paragraph={{ rows: 4 }} />
        </Card>
        {footer}
      </div>
    )
  }

  if (variant === "content") {
    return (
      <div className={className} style={{ ...rootStyle(g), ...style }}>
        <Card>
          <Skeleton active title paragraph={{ rows: contentRows }} />
        </Card>
        {footer}
      </div>
    )
  }

  if (variant === "fields") {
    return (
      <div className={className} style={{ ...rootStyle(g), ...style }}>
        <Card>
          <Space direction="vertical" size="middle" style={{ width: "100%" }}>
            {Array.from({ length: inputRows }).map((_, i) => (
              <Skeleton.Input key={i} active size="large" style={{ width: i % 2 === 0 ? "100%" : "72%" }} />
            ))}
          </Space>
        </Card>
        {footer}
      </div>
    )
  }

  if (variant === "grid") {
    return (
      <div className={className} style={{ ...rootStyle(g), ...style }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${Math.max(1, cards)}, 1fr)`,
            gap: spacing.md,
          }}
        >
          {[...Array(Math.max(1, cards))].map((_, i) => (
            <Card key={i}>
              <Skeleton active paragraph={{ rows: 1 }} title={{ width: "60%" }} />
            </Card>
          ))}
        </div>
        {footer}
      </div>
    )
  }

  if (variant === "rows") {
    return (
      <div className={className} style={{ ...rootStyle(g), ...style }}>
        <Card>
          <Space direction="vertical" style={{ width: "100%" }} size={spacing.md}>
            {Array.from({ length: rowLines }).map((_, i) => (
              <Skeleton key={i} active title={false} paragraph={{ rows: 1, width: "100%" }} />
            ))}
          </Space>
        </Card>
        {footer}
      </div>
    )
  }

  return (
    <div className={className} style={{ ...rootStyle(g), ...style }}>
      <Card>
        <Skeleton
          avatar={showAvatar ? { size: 72, shape: "circle" } : false}
          active
          paragraph={{ rows: 2, width: ["40%", "25%"] }}
          title={{ width: "30%" }}
        />
      </Card>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${Math.max(1, cards)}, 1fr)`,
          gap: spacing.md,
        }}
      >
        {[...Array(Math.max(1, cards))].map((_, i) => (
          <Card key={i}>
            <Skeleton active paragraph={{ rows: 1 }} title={{ width: "60%" }} />
          </Card>
        ))}
      </div>
      <Card>
        <Skeleton active paragraph={{ rows: 4 }} />
      </Card>
      {footer}
    </div>
  )
}

export default ContentLoader
