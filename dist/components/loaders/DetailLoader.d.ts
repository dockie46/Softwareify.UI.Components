import { CSSProperties, ReactNode } from 'react';
export type DetailLoaderVariant = "user" | "project" | "simple" | "form" | "cards" | "list";
export type DetailLoaderProps = {
    /**
     * `user` — profile-style: hero card + stat grid + bottom card.
     * `project` — two stacked detail cards.
     * `simple` — single card, title + paragraphs.
     * `form` — single card, input-shaped placeholders.
     * `cards` — only the stat grid (no hero/footer).
     * `list` — vertical stack of compact row skeletons.
     */
    variant?: DetailLoaderVariant;
    /** Columns in the stat grid (`user`, `cards`). Default 4. */
    cards?: number;
    /** Paragraph rows (`simple`) or list rows (`list`). Default 6 / 5. */
    rows?: number;
    /** Skeleton.Input rows (`form`). Default 5. */
    formRows?: number;
    /** Hero card: show avatar (`user`). Default true. */
    showAvatar?: boolean;
    /** Space between sections in px. Default 16. */
    gap?: number;
    className?: string;
    style?: CSSProperties;
    /** Extra content after the loader (e.g. error boundary slot). */
    footer?: ReactNode;
};
declare const DetailLoader: ({ variant, cards, rows, formRows, showAvatar, gap, className, style, footer, }: DetailLoaderProps) => import("react/jsx-runtime").JSX.Element;
export default DetailLoader;
