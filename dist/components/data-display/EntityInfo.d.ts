import { Descriptions, DescriptionsProps } from 'antd';
import { ComponentProps, ReactNode } from 'react';
type ItemSpan = ComponentProps<typeof Descriptions.Item>['span'];
export type EntityInfoItem = {
    /** Omit or leave empty to show only the value (label column hidden). */
    label?: ReactNode;
    /** One cell, or several lines stacked (no manual `<>` / `Space` needed). */
    value: ReactNode | ReactNode[];
    span?: ItemSpan;
};
/** Array of rows, or a plain object (`label → value`). Use `''` as key for value-only rows. */
export type EntityInfoSource = EntityInfoItem[] | Record<string, ReactNode | ReactNode[]>;
type DescriptionsPassthrough = Pick<DescriptionsProps, 'colon' | 'extra' | 'className' | 'style' | 'styles' | 'classNames' | 'rootClassName' | 'id'>;
export type EntityInfoProps = {
    items: EntityInfoSource;
    loading?: boolean;
    column?: DescriptionsProps['column'];
    title?: ReactNode;
    bordered?: boolean;
    layout?: DescriptionsProps['layout'];
} & DescriptionsPassthrough;
declare const EntityInfo: ({ items: itemsSource, loading, column, title, bordered, layout, colon, extra, className, style, styles, classNames, rootClassName, id, }: EntityInfoProps) => import("react/jsx-runtime").JSX.Element;
export default EntityInfo;
