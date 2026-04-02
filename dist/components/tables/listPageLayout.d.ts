import { TableProps } from 'antd';
export type ListPageGap = 'gap-4' | 'gap-6';
export declare const listPageRootClassName: (isMobile: boolean, options?: {
    gap?: ListPageGap;
}) => string;
export declare const listTableScroll: (isMobile: boolean, mobileScrollX?: number) => NonNullable<TableProps<unknown>["scroll"]>;
