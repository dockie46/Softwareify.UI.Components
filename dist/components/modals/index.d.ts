/**
 * Modal building blocks
 *
 * - `base-modal/` — standard content modal with default save/cancel footer
 * - `fullscreen-mobile/` — Ant Design Modal tuned for small viewports
 * - `confirm/` — confirmation dialog (danger / warning / info)
 */
export { default as BaseModal } from './base-modal/BaseModal';
export type { BaseModalProps } from './base-modal/BaseModal';
export { default as FullscreenMobileModal } from './fullscreen-mobile/FullscreenMobileModal';
export type { FullscreenMobileModalProps } from './fullscreen-mobile/FullscreenMobileModal';
export { default as ConfirmModal } from './confirm/ConfirmModal';
export type { ConfirmModalProps } from './confirm/ConfirmModal';
