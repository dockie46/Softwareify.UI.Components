import { Modal } from 'antd';
import { ComponentProps } from 'react';
type AntModalProps = ComponentProps<typeof Modal>;
export type FullscreenMobileModalProps = AntModalProps & {
    splitFooterButtonsOnMobile?: boolean;
};
declare const FullscreenMobileModal: ({ splitFooterButtonsOnMobile, rootClassName, width, style, styles, okButtonProps, cancelButtonProps, ...rest }: FullscreenMobileModalProps) => import("react/jsx-runtime").JSX.Element;
export default FullscreenMobileModal;
