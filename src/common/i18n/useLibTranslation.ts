import { useTranslation } from 'react-i18next'

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
export function useLibTranslation() {
  return useTranslation('softwareify-ui')
}

export default useLibTranslation
