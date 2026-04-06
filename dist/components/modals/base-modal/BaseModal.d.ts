import { default as React, ReactNode } from 'react';
export type BaseModalProps = React.PropsWithChildren<{
    onCancel: () => void;
    /** Primary action (e.g. save / submit). */
    onFormSubmit?: () => void;
    open: boolean;
    title?: string;
    width?: string;
    footer?: ReactNode;
    loading?: boolean;
    btns?: {
        save?: {
            label?: string;
        };
        cancel?: {
            label?: string;
        };
    };
}>;
declare const BaseModal: ({ onCancel, onFormSubmit, open, children, title, width, footer, loading, btns, }: BaseModalProps) => import("react/jsx-runtime").JSX.Element;
export default BaseModal;
