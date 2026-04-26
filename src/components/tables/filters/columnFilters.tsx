import { Input, Button, Space } from "antd"
import { SearchOutlined } from "@ant-design/icons"
import type { ColumnType } from "antd/es/table"
import type { FilterDropdownProps } from "antd/es/table/interface"
import { spacing } from "@/config"
import { useLibTranslation } from "@/common/i18n"

type FilterMode = "client" | "server"

type BaseFilterOptions = {
  mode?: FilterMode
}

type TextFilterDropdownProps = FilterDropdownProps & {
  placeholder?: string
}

export const TextFilterDropdown = ({
  setSelectedKeys,
  selectedKeys,
  confirm,
  clearFilters,
  placeholder,
}: TextFilterDropdownProps) => {
  const { t } = useLibTranslation()

  return (
    <div style={{ padding: spacing.sm }}>
      <Input
        placeholder={placeholder ?? t("labels.search")}
        value={selectedKeys[0]}
        onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
        onPressEnter={() => confirm()}
        style={{ marginBottom: spacing.sm, display: "block" }}
      />
      <Space>
        {/* Filter button width: 90px ensures OK/Reset buttons are equal width in the dropdown */}
        <Button type="primary" onClick={() => confirm()} size="small" style={{ width: 90 }}>
          {t("btns.ok")}
        </Button>
        <Button
          onClick={() => {
            clearFilters?.()
            confirm()
          }}
          size="small"
          style={{ width: 90 }}
        >
          {t("btns.reset")}
        </Button>
      </Space>
    </div>
  )
}

type TextSearchOptions = BaseFilterOptions & {
  placeholder?: string
}

export const textSearchColumnProps = <T,>(
  dataIndex: keyof T & string,
  options: TextSearchOptions = {},
): Pick<ColumnType<T>, "filterDropdown" | "filterIcon" | "onFilter"> => {
  const { mode = "client", placeholder } = options

  return {
    filterDropdown: (props) => <TextFilterDropdown {...props} placeholder={placeholder} />,
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? "var(--color-brand-primary)" : undefined }} />
    ),
    ...(mode === "client" && {
      onFilter: (value, record) =>
        String((record as Record<string, unknown>)[dataIndex] ?? "")
          .toLowerCase()
          .includes(String(value).toLowerCase()),
    }),
  }
}

export const textSearchMultiFieldProps = <T,>(
  fields: (keyof T & string)[],
  options: TextSearchOptions = {},
): Pick<ColumnType<T>, "filterDropdown" | "filterIcon" | "onFilter"> => {
  const { mode = "client", placeholder } = options

  return {
    filterDropdown: (props) => <TextFilterDropdown {...props} placeholder={placeholder} />,
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? "var(--color-brand-primary)" : undefined }} />
    ),
    ...(mode === "client" && {
      onFilter: (value, record) => {
        const search = String(value).toLowerCase()
        return fields.some((f) =>
          String((record as Record<string, unknown>)[f] ?? "")
            .toLowerCase()
            .includes(search),
        )
      },
    }),
  }
}

type EnumFilterOptions = BaseFilterOptions

export const enumFilterColumnProps = <T,>(
  enumObj: Record<string, string>,
  labelFn: (value: string) => string,
  dataIndex: keyof T & string,
  options: EnumFilterOptions = {},
): Pick<ColumnType<T>, "filters" | "onFilter"> => {
  const { mode = "client" } = options

  return {
    filters: Object.values(enumObj).map((v) => ({
      text: labelFn(v),
      value: v,
    })),
    ...(mode === "client" && {
      onFilter: (value, record) => (record as Record<string, unknown>)[dataIndex] === value,
    }),
  }
}

type BooleanFilterOptions = BaseFilterOptions

export const booleanFilterColumnProps = <T,>(
  dataIndex: keyof T & string,
  trueLabel: string,
  falseLabel: string,
  options: BooleanFilterOptions = {},
): Pick<ColumnType<T>, "filters" | "onFilter"> => {
  const { mode = "client" } = options

  return {
    filters: [
      { text: trueLabel, value: true },
      { text: falseLabel, value: false },
    ],
    ...(mode === "client" && {
      onFilter: (value, record) => (record as Record<string, unknown>)[dataIndex] === value,
    }),
  }
}
