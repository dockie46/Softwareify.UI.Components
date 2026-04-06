import { Fragment, type CSSProperties, type ReactNode } from "react"
import { spacing } from "@/config"

export type ActionColumnRowProps = {
  items?: ReactNode[]
  /** @deprecated Use `items={[left, right]}`. */
  left?: ReactNode
  /** @deprecated Use `items={[left, right]}`. */
  right?: ReactNode
  className?: string
  gap?: number
  dividerColor?: string
}

const dividerStyle = (color: string): CSSProperties => ({
  width: 1,
  alignSelf: "stretch",
  flexShrink: 0,
  background: color,
})

/** Equal-width columns with vertical dividers (e.g. mobile action bar). */
const ActionColumnRow = ({
  items,
  left,
  right,
  className,
  gap = spacing.md,
  dividerColor = "var(--color-border-light, rgba(0,0,0,0.06))",
}: ActionColumnRowProps) => {
  const cells = items !== undefined ? items : [left, right].filter((x) => x != null)

  if (cells.length === 0) return null

  const rootStyle: CSSProperties = {
    display: "flex",
    alignItems: "stretch",
    width: "100%",
    gap,
  }

  return (
    <div className={className} style={rootStyle}>
      {cells.map((cell, i) => (
        <Fragment key={i}>
          {i > 0 ? <div style={dividerStyle(dividerColor)} aria-hidden /> : null}
          <div
            style={{
              flex: 1,
              minWidth: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {cell}
          </div>
        </Fragment>
      ))}
    </div>
  )
}

export default ActionColumnRow
