import { TableProps } from 'antd';
import { FilterValue, SorterResult } from 'antd/es/table/interface';
import { ReactNode } from 'react';
import { BaseModel } from '../../common/models';
export type TableFilterType = Record<string, FilterValue | null | any>;
export type TableSorterType<T = any> = SorterResult<T> | SorterResult<T>[];
interface Props<T extends BaseModel<number>> extends TableProps<T> {
    totalCount: number;
    onSearch?: (searchText: string) => void;
    actionButtons?: ReactNode;
}
declare const MainTable: <T extends BaseModel<number>>({ totalCount, onSearch, actionButtons, ...restProps }: Props<T>) => import("react/jsx-runtime").JSX.Element;
export default MainTable;
