import { useTranslation } from 'react-i18next'
import type { Rule } from 'antd/es/form'
import type { BaseFormItemProps } from '../models/form'
import { format } from 'react-string-format'
import { phoneFormatRegex, uriRegex } from '../constants/constants'

/**
 * Hook to generate form validation rules based on form item properties.
 * Proper hook implementation (unlike previous getRules function which violated hooks rules).
 */
export const useFormRules = (
  props: BaseFormItemProps | undefined,
  type?: 'email' | 'url' | 'phone' | string,
  placeholder?: string,
): Rule[] => {
  const { t } = useTranslation()

  if (!props) return []

  const msg = props.label?.toString()

  const newRules: Rule[] = [
    {
      required: props.required,
      message: msg
        ? `${props.label ?? placeholder} ${t('global.validations.input.isRequiredField')}`
        : t('global.validations.input.common'),
    },
  ]

  if (type === 'email') {
    newRules.push({
      type: type,
      message: format(t('global.validations.input.incorrectFormat'), msg ?? t('global.validations.input.field')),
    })
  }

  if (type === 'url') {
    newRules.push({
      pattern: new RegExp(uriRegex),
      message: format(t('global.validations.input.incorrectFormat'), msg ?? t('global.validations.input.field')),
    })
  }

  if (type === 'phone') {
    newRules.push({
      pattern: new RegExp(phoneFormatRegex),
      message: format(t('global.validations.input.incorrectFormat'), msg ?? t('global.validations.input.field')),
    })
  }

  return newRules ?? props.rules ?? []
}
