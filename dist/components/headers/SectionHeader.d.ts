import { ReactNode } from 'react';
type SectionHeaderProps = {
    title: ReactNode;
    filters?: ReactNode;
    actions?: ReactNode;
};
declare const SectionHeader: ({ title, filters, actions }: SectionHeaderProps) => import("react/jsx-runtime").JSX.Element;
export default SectionHeader;
