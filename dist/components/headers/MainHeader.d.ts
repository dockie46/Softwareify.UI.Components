import { BreadcrumbProps } from 'antd';
import { ReactNode } from 'react';
export type MainHeaderVariant = "page" | "section";
export type MainHeaderProps = {
    title: ReactNode;
    variant?: MainHeaderVariant;
    subtitle?: ReactNode;
    breadcrumb?: BreadcrumbProps;
    /** Buttons or other controls on the same row as the breadcrumb, right-aligned (page variant only). */
    breadcrumbExtra?: ReactNode;
    onBack?: () => void;
    filters?: ReactNode;
    actions?: ReactNode;
};
declare const MainHeader: ({ title, variant, subtitle, breadcrumb, breadcrumbExtra, onBack, filters, actions, }: MainHeaderProps) => import("react/jsx-runtime").JSX.Element;
export default MainHeader;
