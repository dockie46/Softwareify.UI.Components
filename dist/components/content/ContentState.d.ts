import { ReactNode } from 'react';
export type ContentStateProps = {
    icon?: ReactNode;
    title: ReactNode;
    description?: ReactNode;
    action?: ReactNode;
};
/**
 * Centered empty / no-data presentation: optional icon, title, description, and action.
 */
declare const ContentState: ({ icon, title, description, action }: ContentStateProps) => import("react/jsx-runtime").JSX.Element;
export default ContentState;
