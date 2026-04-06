/**
 * Custom hook for library-namespaced i18n.
 * All Softwareify UI components should use this hook instead of useTranslation('global').
 *
 * This hook internally calls useTranslation('softwareify-ui') to ensure
 * translations are namespaced to avoid conflicts with consuming applications.
 *
 * Usage:
 * ```tsx
 * const { t } = useLibTranslation()
 * <span>{t('btns.save')}</span>
 * ```
 */
export declare function useLibTranslation(): import('react-i18next').UseTranslationResponse<"softwareify-ui", undefined>;
export default useLibTranslation;
