/**
 * Measures the wrapper and header filter row so the table body gets a usable `scroll.y`.
 * When `scrollY` is set, that value wins; otherwise height is derived from the container.
 * Falls back to CSS-based height (100% of parent) if react-resize-detector is not installed.
 */
export declare const useTableFullHeightCalculator: (scrollY: string | number | undefined, tableHeaderRef: React.RefObject<HTMLDivElement | null>, isMobile: boolean) => {
    tableWrapperRef: import('react').RefObject<HTMLDivElement>;
    tableRef: import('react').RefObject<HTMLDivElement>;
    getTableHeight: () => number | string | undefined;
};
