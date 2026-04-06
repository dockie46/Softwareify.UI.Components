import { Input, Button, Space } from "antd"
import { SearchOutlined } from "@ant-design/icons"
import type { ColumnType } from "antd/es/table"
import type { FilterDropdownProps } from "antd/es/table/interface"
import { useTranslation } from "react-i18next"

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
  const { t } = useTranslation()

  return (
    <div style={{ padding: 8 }}>
      <Input
        placeholder={placeholder ?? t("global.labels.search")}
        value={selectedKeys[0]}
        onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
        onPressEnter={() => confirm()}
        style={{ marginBottom: 8, display: "block" }}
      />
      <Space>
        <Button type="primary" onClick={() => confirm()} size="small" style={{ width: 90 }}>
          {t("global.btns.ok")}
        </Button>
        <Button
          onClick={() => {
            clearFilters?.()
            confirm()
          }}
          size="small"
          style={{ width: 90 }}
        >
          {t("global.btns.reset")}
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
