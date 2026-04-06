import { CSSProperties, ReactNode } from 'react';
export type ContentLoaderVariant = "hero" | "stacked" | "content" | "fields" | "grid" | "rows";
export type ContentLoaderProps = {
    variant?: ContentLoaderVariant;
    cards?: number;
    rows?: number;
    inputRows?: number;
    showAvatar?: boolean;
    gap?: number;
    className?: string;
    style?: CSSProperties;
    footer?: ReactNode;
};
/** Skeleton layouts for page sections while data is loading. */
declare const ContentLoader: ({ variant, cards, rows, inputRows, showAvatar, gap, className, style, footer, }: ContentLoaderProps) => import("react/jsx-runtime").JSX.Element;
export default ContentLoader;
