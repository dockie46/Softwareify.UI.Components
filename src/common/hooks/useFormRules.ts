import { useLibTranslation } from '../i18n'
import type { Rule } from 'antd/es/form'
import type { BaseFormItemProps } from '../models/form'
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
  const { t } = useLibTranslation()

  if (!props) return []

  const msg = props.label?.toString()

  const newRules: Rule[] = [
    {
      required: props.required,
      message: msg
        ? `${props.label ?? placeholder} ${t('validations.input.isRequiredField')}`
        : t('validations.input.common'),
    },
  ]

  if (type === 'email') {
    newRules.push({
      type: type,
      message: t('validations.input.incorrectFormat', {
        fieldName: msg ?? t('validations.input.field'),
      }),
    })
  }

  if (type === 'url') {
    newRules.push({
      pattern: new RegExp(uriRegex),
      message: t('validations.input.incorrectFormat', {
        fieldName: msg ?? t('validations.input.field'),
      }),
    })
  }

  if (type === 'phone') {
    newRules.push({
      pattern: new RegExp(phoneFormatRegex),
      message: t('validations.input.incorrectFormat', {
        fieldName: msg ?? t('validations.input.field'),
      }),
    })
  }

  return newRules ?? props.rules ?? []
}
