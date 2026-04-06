import { i18n } from 'i18next';
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
export declare function registerLocale(i18nInstance: i18n, language?: string): void;
export default registerLocale;
