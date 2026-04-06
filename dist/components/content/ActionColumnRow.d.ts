import { ReactNode } from 'react';
export type ActionColumnRowProps = {
    items?: ReactNode[];
    className?: string;
    gap?: number;
    dividerColor?: string;
};
/** Equal-width columns with vertical dividers (e.g. mobile action bar). */
declare const ActionColumnRow: ({ items, className, gap, dividerColor, }: ActionColumnRowProps) => import("react/jsx-runtime").JSX.Element | null;
export default ActionColumnRow;
