import { ReactNode } from 'react';
type StatusType = 'success' | 'warning' | 'error' | 'info' | 'default';
export type StatusBadgeProps = {
    status: StatusType;
    label: ReactNode;
};
declare const StatusBadge: ({ status, label }: StatusBadgeProps) => import("react/jsx-runtime").JSX.Element;
export default StatusBadge;
