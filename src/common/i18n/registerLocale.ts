import type { i18n } from 'i18next'
import enLocale from '../../locales/en.json'

/**
 * Register Softwareify UI library translations with a consuming application's i18n instance.
 * 
 * This helper merges library translations into the 'softwareify-ui' namespace,
 * allowing consumers to initialize their own i18n without conflicts.
 * 
 * Usage:
 * ```tsx
 * import i18n from 'i18next'
 * import { registerLocale } from '@softwareifycz/ui-components'
 * 
 * registerLocale(i18n, 'en')
 * ```
 * 
 * @param i18nInstance - The i18next instance from the consuming application
 * @param language - The language code (e.g., 'en') to register for
 */
export function registerLocale(i18nInstance: i18n, language: string = 'en'): void {
  const localeMap: Record<string, Record<string, unknown>> = {
    en: enLocale,
    // Additional locales can be added here in the future
  }

  const locale = localeMap[language]
  if (!locale) {
    console.warn(`Softwareify UI locale '${language}' not found. Defaulting to 'en'.`)
    return
  }

  i18nInstance.addResourceBundle(language, 'softwareify-ui', locale, true, true)
}

export default registerLocale
