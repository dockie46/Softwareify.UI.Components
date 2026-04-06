import { Button, Dropdown, Input, Space, Tooltip } from "antd"
import type { LegacyRef, ReactNode } from "react"
import { MenuOutlined, SearchOutlined, TableOutlined } from "@ant-design/icons"
import { TABLE_THEME } from "../theme"

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
        marginBottom: 16,
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "space-between",
        alignItems: isMobile ? "stretch" : "center",
        background: TABLE_THEME.secondary,
        padding: isMobile ? "12px 12px" : "12px 16px",
        borderRadius: 8,
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
        gap: isMobile ? 12 : 0,
      }}
    >
      {showSearch && (
        <div style={{ position: "relative", width: isMobile ? "100%" : 320 }}>
          <Input
            placeholder={searchLabel}
            allowClear
            prefix={<SearchOutlined style={{ color: TABLE_THEME.primary, fontSize: 16 }} />}
            style={{
              borderRadius: 6,
              padding: "8px 12px",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.03)",
              border: `1px solid ${TABLE_THEME.border}`,
              width: "100%",
            }}
            onChange={onSearchInputChange}
            value={searchText}
          />
        </div>
      )}
      <Space
        size={isMobile ? "small" : "middle"}
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
                borderRadius: 6,
                display: "flex",
                alignItems: "center",
                gap: 8,
                backgroundColor: columnMenuOpen ? TABLE_THEME.accent : "white",
                borderColor: columnMenuOpen ? TABLE_THEME.primary : TABLE_THEME.border,
                color: columnMenuOpen ? TABLE_THEME.primary : "inherit",
                boxShadow: columnMenuOpen ? `0 0 0 2px ${TABLE_THEME.accent}` : "none",
                padding: isMobile ? "6px 12px" : "6px 16px",
                height: "auto",
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
