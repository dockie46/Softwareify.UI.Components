import { ReactNode } from 'react';
type StatCardProps = {
    label: ReactNode;
    children: ReactNode;
    style?: React.CSSProperties;
};
declare const StatCard: ({ label, children, style }: StatCardProps) => import("react/jsx-runtime").JSX.Element;
export default StatCard;
