import { DescriptionsProps } from 'antd';
import { ReactNode } from 'react';
export type DescriptionListItem = {
    label: ReactNode;
    value: ReactNode;
    span?: number;
};
export type DescriptionListProps = {
    items: DescriptionListItem[];
    loading?: boolean;
    column?: DescriptionsProps['column'];
    title?: ReactNode;
    bordered?: boolean;
    layout?: DescriptionsProps['layout'];
};
declare const DescriptionList: ({ items, loading, column, title, bordered, layout, }: DescriptionListProps) => import("react/jsx-runtime").JSX.Element;
export default DescriptionList;
