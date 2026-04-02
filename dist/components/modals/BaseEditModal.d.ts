import { default as React, ReactNode } from 'react';
interface Props extends React.PropsWithChildren<{}> {
    onCancel: () => void;
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
}
declare const BaseEditModal: ({ onCancel, onFormSubmit, open, children, title, width, footer, loading, btns, }: Props) => import("react/jsx-runtime").JSX.Element;
export default BaseEditModal;
