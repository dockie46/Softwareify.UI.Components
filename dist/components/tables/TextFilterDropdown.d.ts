import { ColumnType } from 'antd/es/table';
import { FilterDropdownProps } from 'antd/es/table/interface';
export declare const TextFilterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, }: FilterDropdownProps) => import("react/jsx-runtime").JSX.Element;
export declare const textSearchColumnProps: <T>(dataIndex: keyof T & string) => Pick<ColumnType<T>, "filterDropdown" | "filterIcon" | "onFilter">;
export declare const textSearchMultiFieldProps: <T>(fields: (keyof T & string)[]) => Pick<ColumnType<T>, "filterDropdown" | "filterIcon" | "onFilter">;
export declare const enumFilterColumnProps: <T>(enumObj: Record<string, string>, labelFn: (value: string) => string, dataIndex: keyof T & string) => Pick<ColumnType<T>, "filters" | "onFilter">;
export declare const booleanFilterColumnProps: <T>(dataIndex: keyof T & string, trueLabel: string, falseLabel: string) => Pick<ColumnType<T>, "filters" | "onFilter">;
