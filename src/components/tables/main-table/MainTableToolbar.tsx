import { Button, Dropdown, Input, Space, Tooltip } from "antd"
import type { LegacyRef, ReactNode } from "react"
import { MenuOutlined, SearchOutlined, TableOutlined } from "@ant-design/icons"
import { TABLE_THEME } from "../theme"
import { fontSize, radius, spacing } from "@/config"

export type MainTableToolbarProps = {
  headerRef: LegacyRef<HTMLDivElement>
  isMobile: boolean
  searchLabel: string
  columnsLabel: string
  customizeColumnsTooltip: string
  onSearchInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  searchText?: string
  columnMenuOpen: boolean
  onColumnMenuOpenChange: (open: boolean) => void
  columnManagerPanel: ReactNode
  actionButtons?: ReactNode
}

const MainTableToolbar = ({
  headerRef,
  isMobile,
  searchLabel,
  columnsLabel,
  customizeColumnsTooltip,
  onSearchInputChange,
  searchText = "",
  columnMenuOpen,
  onColumnMenuOpenChange,
  columnManagerPanel,
  actionButtons,
}: MainTableToolbarProps) => {
  const showSearch = Boolean(onSearchInputChange)

  return (
    <div
      ref={headerRef}
      style={{
        marginBottom: spacing.lg,
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "space-between",
        alignItems: isMobile ? "stretch" : "center",
        background: TABLE_THEME.secondary,
        padding: isMobile ? `${spacing.sm}px` : `${spacing.sm}px ${spacing.md}px`,
        borderRadius: radius.lg,
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
        gap: isMobile ? spacing.sm : 0,
      }}
    >
      {showSearch && (
        // Search input width: 320px is optimal for desktop (enough for typical search terms without taking space).
        // On mobile, expands to 100% for touch-friendly interaction.
        <div style={{ position: "relative", width: isMobile ? "100%" : 320 }}>
          <Input
            placeholder={searchLabel}
            allowClear
            prefix={<SearchOutlined style={{ color: TABLE_THEME.primary, fontSize: fontSize.lg }} />}
            style={{
              borderRadius: radius.md,
              padding: `${spacing.sm}px ${spacing.md}px`,
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.03)", // Subtle input shadow matching antd style
              border: `1px solid ${TABLE_THEME.border}`,
              width: "100%",
            }}
            onChange={onSearchInputChange}
            value={searchText}
          />
        </div>
      )}
      <Space
        size={spacing.sm}
        direction={isMobile ? "vertical" : "horizontal"}
        style={{
          width: isMobile ? "100%" : "auto",
          justifyContent: "flex-end",
          display: "flex",
        }}
      >
        <Tooltip title={customizeColumnsTooltip}>
          <Dropdown
            open={columnMenuOpen}
            onOpenChange={onColumnMenuOpenChange}
            dropdownRender={() => columnManagerPanel}
            trigger={["click"]}
          >
            <Button
              icon={isMobile ? <MenuOutlined /> : <TableOutlined />}
              style={{
                borderRadius: radius.md,
                display: "flex",
                alignItems: "center",
                gap: spacing.sm,
                backgroundColor: columnMenuOpen ? TABLE_THEME.accent : "white",
                borderColor: columnMenuOpen ? TABLE_THEME.primary : TABLE_THEME.border,
                color: columnMenuOpen ? TABLE_THEME.primary : "inherit",
                boxShadow: columnMenuOpen ? `0 0 0 2px ${TABLE_THEME.accent}` : "none",
                width: isMobile ? "100%" : "auto",
                justifyContent: isMobile ? "center" : "flex-start",
              }}
            >
              {columnsLabel}
            </Button>
          </Dropdown>
        </Tooltip>
        {actionButtons}
      </Space>
    </div>
  )
}

export default MainTableToolbar
