import { LegacyRef, ReactNode } from 'react';
export type MainTableToolbarProps = {
    headerRef: LegacyRef<HTMLDivElement>;
    isMobile: boolean;
    searchLabel: string;
    columnsLabel: string;
    customizeColumnsTooltip: string;
    onSearchInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    searchText?: string;
    columnMenuOpen: boolean;
    onColumnMenuOpenChange: (open: boolean) => void;
    columnManagerPanel: ReactNode;
    actionButtons?: ReactNode;
};
declare const MainTableToolbar: ({ headerRef, isMobile, searchLabel, columnsLabel, customizeColumnsTooltip, onSearchInputChange, searchText, columnMenuOpen, onColumnMenuOpenChange, columnManagerPanel, actionButtons, }: MainTableToolbarProps) => import("react/jsx-runtime").JSX.Element;
export default MainTableToolbar;
