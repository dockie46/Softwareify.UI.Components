import { ReactNode } from 'react';
export type ActionColumnRowProps = {
    items?: ReactNode[];
    /** @deprecated Use `items={[left, right]}`. */
    left?: ReactNode;
    /** @deprecated Use `items={[left, right]}`. */
    right?: ReactNode;
    className?: string;
    gap?: number;
    dividerColor?: string;
};
/** Equal-width columns with vertical dividers (e.g. mobile action bar). */
declare const ActionColumnRow: ({ items, left, right, className, gap, dividerColor, }: ActionColumnRowProps) => import("react/jsx-runtime").JSX.Element | null;
export default ActionColumnRow;
