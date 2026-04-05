import { TableProps } from 'antd';
import { FilterValue, SorterResult } from 'antd/es/table/interface';
import { ReactNode } from 'react';
import { BaseModel } from '../../common/models';
export type TableFilterType = Record<string, FilterValue | null>;
export type TableSorterType<T = unknown> = SorterResult<T> | SorterResult<T>[];
export interface MainTableProps<T extends BaseModel<number | string>> extends TableProps<T> {
    totalCount: number;
    onSearch?: (searchText: string) => void;
    actionButtons?: ReactNode;
    searchDebounceMs?: number;
}
declare const MainTable: <T extends BaseModel<number | string>>({ totalCount, onSearch, actionButtons, searchDebounceMs, ...restProps }: MainTableProps<T>) => import("react/jsx-runtime").JSX.Element;
export default MainTable;
