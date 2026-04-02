import { Reference } from 'rc-table/lib/interface';
export declare const useTableFullHeightCalculator: (scrollY: string | number | undefined, tableHeaderRef: React.RefObject<HTMLDivElement>, screens: Record<string, boolean>) => {
    tableWrapperRef: import('node_modules/react-resize-detector/build/types').OnRefChangeType<HTMLDivElement>;
    tableRef: import('react').RefObject<Reference>;
    getTableHeight: () => number | string;
};
