import { TableProps } from 'antd';
export declare const LIST_TABLE_BODY_MAX_Y = "calc(100dvh - 300px)";
export declare const LIST_TABLE_PROPS: {
    readonly size: "middle";
    readonly pagination: {
        readonly pageSize: 20;
        readonly showSizeChanger: true;
    };
    readonly scroll: {
        readonly y: "calc(100dvh - 300px)";
    };
};
export declare const DETAIL_TABLE_PROPS: {
    readonly size: "small";
    readonly pagination: false;
};
export type ListPageGap = "gap-4" | "gap-6";
export declare const listPageRootClassName: (isMobile: boolean, options?: {
    gap?: ListPageGap;
}) => string;
export declare const listTableScroll: (isMobile: boolean, mobileScrollX?: number) => NonNullable<TableProps<unknown>["scroll"]>;
