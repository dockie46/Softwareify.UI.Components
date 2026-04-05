import { ColumnType } from 'antd/es/table';
import { FilterDropdownProps } from 'antd/es/table/interface';
type FilterMode = 'client' | 'server';
type BaseFilterOptions = {
    /** 'client' applies onFilter in-memory, 'server' omits it so onChange bubbles to parent */
    mode?: FilterMode;
};
type TextFilterDropdownProps = FilterDropdownProps & {
    placeholder?: string;
};
export declare const TextFilterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, placeholder, }: TextFilterDropdownProps) => import("react/jsx-runtime").JSX.Element;
type TextSearchOptions = BaseFilterOptions & {
    placeholder?: string;
};
export declare const textSearchColumnProps: <T>(dataIndex: keyof T & string, options?: TextSearchOptions) => Pick<ColumnType<T>, "filterDropdown" | "filterIcon" | "onFilter">;
export declare const textSearchMultiFieldProps: <T>(fields: (keyof T & string)[], options?: TextSearchOptions) => Pick<ColumnType<T>, "filterDropdown" | "filterIcon" | "onFilter">;
type EnumFilterOptions = BaseFilterOptions;
export declare const enumFilterColumnProps: <T>(enumObj: Record<string, string>, labelFn: (value: string) => string, dataIndex: keyof T & string, options?: EnumFilterOptions) => Pick<ColumnType<T>, "filters" | "onFilter">;
type BooleanFilterOptions = BaseFilterOptions;
export declare const booleanFilterColumnProps: <T>(dataIndex: keyof T & string, trueLabel: string, falseLabel: string, options?: BooleanFilterOptions) => Pick<ColumnType<T>, "filters" | "onFilter">;
export {};
