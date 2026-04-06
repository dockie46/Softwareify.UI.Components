import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const storybookTranslations = {
  en: {
    translation: {
      global: {
        btns: {
          save: 'Save',
          saveChanges: 'Save Changes',
          cancel: 'Cancel',
          cancelChanges: 'Cancel Changes',
          confirm: 'Confirm',
          clear: 'Clear',
          reset: 'Reset',
          apply: 'Apply',
          columns: 'Columns',
          ok: 'OK',
          copy: 'Copy',
          copied: 'Copied!',
          delete: 'Delete',
        },
        labels: {
          search: 'Search...',
          customizeTableColumns: 'Customize columns',
          primaryKey: 'Primary Key',
          pinColumn: 'Pin column',
          fixedLeft: 'Fixed left',
          fixedRight: 'Fixed right',
          left: 'LEFT',
          right: 'RIGHT',
        },
        texts: {
          columnsVisible: '{{count}} of {{total}} visible',
        },
        validations: {
          input: {
            isRequiredField: 'is required',
            common: 'This field is required',
            incorrectFormat: '{0} has incorrect format',
            field: 'Field',
          },
        },
      },
    },
  },
}

i18n.use(initReactI18next).init({
  resources: storybookTranslations,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
