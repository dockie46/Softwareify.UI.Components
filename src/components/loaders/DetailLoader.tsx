import { Card, Skeleton, Space } from "antd"
import type { CSSProperties, ReactNode } from "react"

const rootStyle = (gap: number): CSSProperties => ({
  display: "flex",
  flexDirection: "column",
  gap,
})

export type DetailLoaderVariant =
  | "user"
  | "project"
  | "simple"
  | "form"
  | "cards"
  | "list"

export type DetailLoaderProps = {
  /**
   * `user` — profile-style: hero card + stat grid + bottom card.
   * `project` — two stacked detail cards.
   * `simple` — single card, title + paragraphs.
   * `form` — single card, input-shaped placeholders.
   * `cards` — only the stat grid (no hero/footer).
   * `list` — vertical stack of compact row skeletons.
   */
  variant?: DetailLoaderVariant
  /** Columns in the stat grid (`user`, `cards`). Default 4. */
  cards?: number
  /** Paragraph rows (`simple`) or list rows (`list`). Default 6 / 5. */
  rows?: number
  /** Skeleton.Input rows (`form`). Default 5. */
  formRows?: number
  /** Hero card: show avatar (`user`). Default true. */
  showAvatar?: boolean
  /** Space between sections in px. Default 16. */
  gap?: number
  className?: string
  style?: CSSProperties
  /** Extra content after the loader (e.g. error boundary slot). */
  footer?: ReactNode
}

const DetailLoader = ({
  variant = "user",
  cards = 4,
  rows,
  formRows = 5,
  showAvatar = true,
  gap = 16,
  className,
  style,
  footer,
}: DetailLoaderProps) => {
  const g = gap
  const simpleRows = rows ?? 6
  const listRows = rows ?? 5

  if (variant === "project") {
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

  if (variant === "simple") {
    return (
      <div className={className} style={{ ...rootStyle(g), ...style }}>
        <Card>
          <Skeleton active title paragraph={{ rows: simpleRows }} />
        </Card>
        {footer}
      </div>
    )
  }

  if (variant === "form") {
    return (
      <div className={className} style={{ ...rootStyle(g), ...style }}>
        <Card>
          <Space direction="vertical" size="middle" style={{ width: "100%" }}>
            {Array.from({ length: formRows }).map((_, i) => (
              <Skeleton.Input key={i} active size="large" style={{ width: i % 2 === 0 ? "100%" : "72%" }} />
            ))}
          </Space>
        </Card>
        {footer}
      </div>
    )
  }

  if (variant === "cards") {
    return (
      <div className={className} style={{ ...rootStyle(g), ...style }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${Math.max(1, cards)}, 1fr)`,
            gap: 12,
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

  if (variant === "list") {
    return (
      <div className={className} style={{ ...rootStyle(g), ...style }}>
        <Card>
          <Space direction="vertical" style={{ width: "100%" }} size={12}>
            {Array.from({ length: listRows }).map((_, i) => (
              <Skeleton key={i} active title={false} paragraph={{ rows: 1, width: "100%" }} />
            ))}
          </Space>
        </Card>
        {footer}
      </div>
    )
  }

  // variant === "user"
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
          gap: 12,
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

export default DetailLoader
