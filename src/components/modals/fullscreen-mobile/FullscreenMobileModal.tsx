import { Modal } from "antd"
import type { ComponentProps } from "react"
import { useResponsive } from "@/common/responsive/hooks"

type AntModalProps = ComponentProps<typeof Modal>

export type FullscreenMobileModalProps = AntModalProps & {
  splitFooterButtonsOnMobile?: boolean
}

const MOBILE_FULLSCREEN_MODAL_CLASS = "mobile-fullscreen-modal"

const FullscreenMobileModal = ({
  splitFooterButtonsOnMobile = true,
  rootClassName,
  width,
  style,
  styles,
  okButtonProps,
  cancelButtonProps,
  ...rest
}: FullscreenMobileModalProps) => {
  const { isMobile } = useResponsive()

  const mergedRootClassName = [rootClassName, isMobile ? MOBILE_FULLSCREEN_MODAL_CLASS : ""].filter(Boolean).join(" ")

  const mergedStyle = isMobile
    ? {
        top: 0,
        maxWidth: "100%",
        margin: 0,
        ...style,
      }
    : style

  const mergedOkButtonProps =
    isMobile && splitFooterButtonsOnMobile
      ? {
          ...okButtonProps,
          style: { flex: 1, ...(okButtonProps?.style ?? {}) },
        }
      : okButtonProps

  const mergedCancelButtonProps =
    isMobile && splitFooterButtonsOnMobile
      ? {
          ...cancelButtonProps,
          style: { flex: 1, ...(cancelButtonProps?.style ?? {}) },
        }
      : cancelButtonProps

  return (
    <Modal
      {...rest}
      rootClassName={mergedRootClassName || undefined}
      width={isMobile ? "100%" : width}
      style={mergedStyle}
      styles={styles}
      okButtonProps={mergedOkButtonProps}
      cancelButtonProps={mergedCancelButtonProps}
    />
  )
}

export default FullscreenMobileModal
