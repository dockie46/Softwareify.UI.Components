import { ReactNode } from 'react';
export type FormSectionProps = {
    title: ReactNode;
    subtitle?: ReactNode;
    children: ReactNode;
    columns?: 1 | 2;
    loading?: boolean;
};
declare const FormSection: ({ title, subtitle, children, columns, loading, }: FormSectionProps) => import("react/jsx-runtime").JSX.Element;
export default FormSection;
