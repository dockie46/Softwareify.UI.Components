import { ReactNode } from 'react';
export type EmptyStateProps = {
    icon?: ReactNode;
    title: ReactNode;
    description?: ReactNode;
    action?: ReactNode;
};
declare const EmptyState: ({ icon, title, description, action }: EmptyStateProps) => import("react/jsx-runtime").JSX.Element;
export default EmptyState;
