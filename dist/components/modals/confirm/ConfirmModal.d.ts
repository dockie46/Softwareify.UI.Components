import { ReactNode } from 'react';
type ConfirmVariant = "danger" | "warning" | "info";
export type ConfirmModalProps = {
    open: boolean;
    onConfirm: () => void;
    onCancel: () => void;
    title: ReactNode;
    description?: ReactNode;
    confirmLabel?: string;
    cancelLabel?: string;
    variant?: ConfirmVariant;
    loading?: boolean;
    icon?: ReactNode;
    children?: ReactNode;
};
declare const ConfirmModal: ({ open, onConfirm, onCancel, title, description, confirmLabel, cancelLabel, variant, loading, icon, children, }: ConfirmModalProps) => import("react/jsx-runtime").JSX.Element;
export default ConfirmModal;
