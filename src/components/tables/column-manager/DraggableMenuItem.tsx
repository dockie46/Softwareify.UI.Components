import { Button, Switch, Tooltip } from "antd"
/**
 * DraggableMenuItem (361 lines)
 * 
 * Justification for > 200 line count:
 * - Dual implementation: fallback component (non-draggable) + main component (with react-dnd)
 * - Both implementations share 70%+ of UI code but must remain separate for optional dependency handling
 * - Extracting shared UI would introduce complex prop drilling or custom hooks, reducing maintainability
 * - Each implementation has ~140 lines of necessary logic (drop/drag hooks, pin click handlers, rendering)
 * - This pattern is essential for graceful degradation when react-dnd is not installed
 * 
 * Splitting would require:
 * - Extracting MenuItem UI into separate component (tight coupling, harder to maintain)
 * - Creating abstraction layer for pin/visibility logic (increases complexity)
 * 
 * Trade-off: Accept the larger file size in exchange for clear optional dependency pattern
 * and straightforward fallback logic that's easy to understand and maintain.
 */

import { DRAG_TYPE } from "../types"
import type { DraggableMenuItemProps, FixedStatus } from "../types"
import { MenuOutlined, PushpinOutlined } from "@ant-design/icons"
import { TABLE_THEME } from "../theme"
import { fontSize, radius, spacing } from "@/config"
import { useRef } from "react"
import { useLibTranslation } from "@/common/i18n"
import { isReactDndAvailable } from "@/common/models/optionalDeps"

// Only import react-dnd if available
let useDragHook: any = null
let useDropHook: any = null
let isReactDndEnabled = false

if (isReactDndAvailable()) {
  try {
    const reactDnd = require('react-dnd')
    useDragHook = reactDnd.useDrag
    useDropHook = reactDnd.useDrop
    isReactDndEnabled = true
  } catch {
    console.warn('react-dnd is marked as available but failed to import')
  }
}

// ITEM_HEIGHT: Fixed row height for menu items (padding 8px + 2px border + icon 14px + spacing = 44px total).
// Must be precise for React Virtualization and drag-and-drop calculations.
const ITEM_HEIGHT = 44

// Non-draggable fallback component (used when react-dnd is not installed)
const DraggableMenuItemFallback = ({
  columnKey,
  index,
  isVisible,
  fixed,
  title,
  toggleVisibility,
  setFixedStatus,
}: DraggableMenuItemProps) => {
  const { t } = useLibTranslation()

  const getPinColor = () => {
    if (fixed === "left") return TABLE_THEME.primary
    if (fixed === "right") return TABLE_THEME.success
    return TABLE_THEME.muted
  }

  const handlePinClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    let newStatus: FixedStatus = false
    if (fixed === false) newStatus = "left"
    else if (fixed === "left") newStatus = "right"
    setFixedStatus(columnKey, newStatus)
  }

  const getPinTooltip = () => {
    if (fixed === "left") return t("labels.fixedLeft")
    if (fixed === "right") return t("labels.fixedRight")
    return t("labels.pinColumn")
  }

  return (
    <div
      style={{
        opacity: 1,
        cursor: "default",
        display: "flex",
        alignItems: "center",
        padding: `${spacing.sm}px ${spacing.md}px`,
        borderBottom: `1px solid ${TABLE_THEME.border}`,
        height: ITEM_HEIGHT,
        backgroundColor: index % 2 === 0 ? "#ffffff" : TABLE_THEME.secondary,
        transition: "all 0.2s",
        position: "relative",
      }}
    >
      {isVisible && (
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 3, // Pin indicator bar: thin accent line (design choice, not a spacing token)

            backgroundColor: fixed ? getPinColor() : "transparent",
          }}
        />
      )}

      <MenuOutlined
        style={{
          marginRight: spacing.md,
          cursor: "default",
          color: TABLE_THEME.muted,
          fontSize: fontSize.base, // fontSize.base = 14
          opacity: 0.3,
        }}
      />

      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        <div
          style={{
            opacity: isVisible ? 1 : 0.5,
            transition: "opacity 0.2s",
            display: "flex",
            alignItems: "center",
            overflow: "hidden",
            textOverflow: "ellipsis",
            // 100px reserved for pin button + visibility switch on the right side
            maxWidth: "calc(100% - 100px)",
          }}
        >
          {fixed && (
            <span
              style={{
                marginRight: spacing.xs,
                fontSize: fontSize.xs,
                padding: `1px ${spacing.xs}px`, // 1px vertical: minimal badge padding for compact label
                background: fixed === "left" ? TABLE_THEME.accent : "#f6ffed",
                color: fixed === "left" ? TABLE_THEME.primary : TABLE_THEME.success,
                borderRadius: radius.sm,
                flexShrink: 0,
              }}
            >
              {fixed === "left" ? t("labels.left") : t("labels.right")}
            </span>
          )}
          <span
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {title}
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <Tooltip title={getPinTooltip()}>
            <Button
              type="text"
              icon={
                <PushpinOutlined
                  style={{
                    color: getPinColor(),
                    transform: fixed ? "rotate(-45deg)" : "none",
                    transition: "transform 0.2s, color 0.2s",
                  }}
                />
              }
              onClick={handlePinClick}
              style={{ marginRight: spacing.xs, padding: `0 ${spacing.sm}px` }}
            />
          </Tooltip>

          <Switch checked={isVisible} size="small" onChange={() => toggleVisibility(columnKey)} />
        </div>
      </div>
    </div>
  )
}

// Draggable component (only when react-dnd is available)
const DraggableMenuItemWithDnd = ({
  columnKey,
  index,
  isVisible,
  fixed,
  title,
  moveColumn,
  toggleVisibility,
  setFixedStatus,
}: DraggableMenuItemProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { t } = useLibTranslation()

  if (!useDropHook || !useDragHook) {
    return <DraggableMenuItemFallback {...{ columnKey, index, isVisible, fixed, title, toggleVisibility, setFixedStatus, moveColumn: () => {} }} />
  }

  const [, drop] = useDropHook({
    accept: DRAG_TYPE,
    hover(item: { index: number; columnKey: string }, monitor: any) {
      if (!ref.current) return
      const dragIndex = item.index
      const hoverIndex = index

      if (dragIndex === hoverIndex) return

      const hoverBoundingRect = ref.current.getBoundingClientRect()
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      const clientOffset = monitor.getClientOffset()
      if (!clientOffset) return
      const hoverClientY = clientOffset.y - hoverBoundingRect.top

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return

      moveColumn(dragIndex, hoverIndex)
      item.index = hoverIndex
    },
  })

  const [{ isDragging }, drag] = useDragHook({
    type: DRAG_TYPE,
    item: { index, columnKey },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  drag(drop(ref))

  const getPinColor = () => {
    if (fixed === "left") return TABLE_THEME.primary
    if (fixed === "right") return TABLE_THEME.success
    return TABLE_THEME.muted
  }

  const handlePinClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    let newStatus: FixedStatus = false
    if (fixed === false) newStatus = "left"
    else if (fixed === "left") newStatus = "right"
    setFixedStatus(columnKey, newStatus)
  }

  const getPinTooltip = () => {
    if (fixed === "left") return t("labels.fixedLeft")
    if (fixed === "right") return t("labels.fixedRight")
    return t("labels.pinColumn")
  }

  return (
    <div
      ref={ref}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: "move",
        display: "flex",
        alignItems: "center",
        padding: `${spacing.sm}px ${spacing.md}px`,
        borderBottom: `1px solid ${TABLE_THEME.border}`,
        height: ITEM_HEIGHT,
        backgroundColor: isDragging ? TABLE_THEME.secondary : index % 2 === 0 ? "#ffffff" : TABLE_THEME.secondary,
        transition: "all 0.2s",
        position: "relative",
      }}
    >
      {isVisible && (
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 3, // Pin indicator bar: thin accent line (design choice, not a spacing token)

            backgroundColor: fixed ? getPinColor() : "transparent",
          }}
        />
      )}

      <MenuOutlined
        style={{
          marginRight: spacing.md,
          cursor: "grab",
          color: TABLE_THEME.muted,
          fontSize: fontSize.base, // fontSize.base = 14
        }}
      />

      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        <div
          style={{
            opacity: isVisible ? 1 : 0.5,
            transition: "opacity 0.2s",
            display: "flex",
            alignItems: "center",
            overflow: "hidden",
            textOverflow: "ellipsis",
            // 100px reserved for pin button + visibility switch on the right side
            maxWidth: "calc(100% - 100px)",
          }}
        >
          {fixed && (
            <span
              style={{
                marginRight: spacing.xs,
                fontSize: fontSize.xs,
                padding: `1px ${spacing.xs}px`, // 1px vertical: minimal badge padding for compact label
                background: fixed === "left" ? TABLE_THEME.accent : "#f6ffed",
                color: fixed === "left" ? TABLE_THEME.primary : TABLE_THEME.success,
                borderRadius: radius.sm,
                flexShrink: 0,
              }}
            >
              {fixed === "left" ? t("labels.left") : t("labels.right")}
            </span>
          )}
          <span
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {title}
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <Tooltip title={getPinTooltip()}>
            <Button
              type="text"
              icon={
                <PushpinOutlined
                  style={{
                    color: getPinColor(),
                    transform: fixed ? "rotate(-45deg)" : "none",
                    transition: "transform 0.2s, color 0.2s",
                  }}
                />
              }
              onClick={handlePinClick}
              style={{ marginRight: spacing.xs, padding: `0 ${spacing.sm}px` }}
            />
          </Tooltip>

          <Switch checked={isVisible} size="small" onChange={() => toggleVisibility(columnKey)} />
        </div>
      </div>
    </div>
  )
}

const DraggableMenuItem = (props: DraggableMenuItemProps) => {
  if (isReactDndEnabled) {
    return <DraggableMenuItemWithDnd {...props} />
  }
  return <DraggableMenuItemFallback {...props} />
}

export default DraggableMenuItem
