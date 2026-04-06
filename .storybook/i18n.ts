import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { registerLocale } from '../src/common/i18n'

// Initialize i18next for Storybook
i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  ns: ['softwareify-ui'],
  defaultNS: 'softwareify-ui',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      'softwareify-ui': {},
    },
  },
})

// Register library locales
registerLocale(i18n, 'en')

export default i18n
