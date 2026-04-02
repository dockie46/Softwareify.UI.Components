import { Input, Button, Space } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import type { ColumnType } from 'antd/es/table'
import type { FilterDropdownProps } from 'antd/es/table/interface'

export const TextFilterDropdown = ({
  setSelectedKeys,
  selectedKeys,
  confirm,
  clearFilters,
}: FilterDropdownProps) => {
  return (
    <div style={{ padding: 8 }}>
      <Input
        placeholder="Search..."
        value={selectedKeys[0]}
        onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
        onPressEnter={() => confirm()}
        style={{ marginBottom: 8, display: 'block' }}
      />
      <Space>
        <Button type="primary" onClick={() => confirm()} size="small" style={{ width: 90 }}>
          OK
        </Button>
        <Button
          onClick={() => {
            clearFilters?.()
            confirm()
          }}
          size="small"
          style={{ width: 90 }}
        >
          Reset
        </Button>
      </Space>
    </div>
  )
}

export const textSearchColumnProps = <T,>(
  dataIndex: keyof T & string,
): Pick<ColumnType<T>, 'filterDropdown' | 'filterIcon' | 'onFilter'> => {
  return {
    filterDropdown: TextFilterDropdown,
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? 'var(--color-brand-primary)' : undefined }} />
    ),
    onFilter: (value, record) =>
      String((record as Record<string, unknown>)[dataIndex] ?? '')
        .toLowerCase()
        .includes(String(value).toLowerCase()),
  }
}

export const textSearchMultiFieldProps = <T,>(
  fields: (keyof T & string)[],
): Pick<ColumnType<T>, 'filterDropdown' | 'filterIcon' | 'onFilter'> => {
  return {
    filterDropdown: TextFilterDropdown,
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? 'var(--color-brand-primary)' : undefined }} />
    ),
    onFilter: (value, record) => {
      const search = String(value).toLowerCase()
      return fields.some((f) =>
        String((record as Record<string, unknown>)[f] ?? '')
          .toLowerCase()
          .includes(search),
      )
    },
  }
}

export const enumFilterColumnProps = <T,>(
  enumObj: Record<string, string>,
  labelFn: (value: string) => string,
  dataIndex: keyof T & string,
): Pick<ColumnType<T>, 'filters' | 'onFilter'> => {
  return {
    filters: Object.values(enumObj).map((v) => ({
      text: labelFn(v),
      value: v,
    })),
    onFilter: (value, record) => (record as Record<string, unknown>)[dataIndex] === value,
  }
}

export const booleanFilterColumnProps = <T,>(
  dataIndex: keyof T & string,
  trueLabel: string,
  falseLabel: string,
): Pick<ColumnType<T>, 'filters' | 'onFilter'> => {
  return {
    filters: [
      { text: trueLabel, value: true },
      { text: falseLabel, value: false },
    ],
    onFilter: (value, record) => (record as Record<string, unknown>)[dataIndex] === value,
  }
}
