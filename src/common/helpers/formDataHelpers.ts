import { isoDateFormatRegex, phoneFormatRegex, uriRegex } from '../constants/constants'
import type { BaseFormItemProps } from '../models/form'
import type { Dayjs } from 'dayjs'
import type { Rule } from 'antd/es/form'
import dayjs from 'dayjs'
import { format } from 'react-string-format'
import { useTranslation } from 'react-i18next'

export const objectToFormData = (obj: any, rootName?: any, ignoreList?: any[]) => {
  const formData = new FormData()

  function appendFormData(data: any, root: string) {
    if (!ignore(root)) {
      root = root || ''
      if (data instanceof File) {
        formData.append(root, data)
      } else if (data instanceof dayjs) {
        data && formData.append(root, (data as Dayjs).toISOString())
      } else if (Array.isArray(data)) {
        for (let i = 0; i < data.length; i++) {
          appendFormData(data[i], root + '[' + i + ']')
        }
      } else if (typeof data === 'object' && data) {
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            if (root === '') {
              appendFormData(data[key], key)
            } else {
              appendFormData(data[key], root + '.' + key)
            }
          }
        }
      } else {
        if (data !== null && typeof data !== 'undefined') {
          formData.append(root, data)
        }
      }
    }
  }

  function ignore(root: any) {
    return (
      Array.isArray(ignoreList) &&
      ignoreList.some(function (x) {
        return x === root
      })
    )
  }

  appendFormData(obj, rootName)

  return formData
}

export const getRules = (
  props: BaseFormItemProps | undefined,
  type?: 'email' | 'url' | 'phone' | string,
  placeholder?: string,
): Rule[] => {
  if (!props) return []

  const { t } = useTranslation()

  const msg = props.label?.toString()

  const newRules: Rule[] = [
    {
      required: props.required,
      message: msg
        ? `${props.label ?? placeholder} ${t('global.validations.input.isRequiredField')}`
        : t('global.validations.input.common'),
    },
  ]

  if (type === 'email')
    newRules.push({
      type: type,
      message: format(t('global.validations.input.incorrectFormat'), msg ?? t('global.validations.input.field')),
    })

  if (type === 'url')
    newRules.push({
      pattern: new RegExp(uriRegex),
      message: format(t('global.validations.input.incorrectFormat'), msg ?? t('global.validations.input.field')),
    })

  if (type === 'phone')
    newRules.push({
      pattern: new RegExp(phoneFormatRegex),
      message: format(t('global.validations.input.incorrectFormat'), msg ?? t('global.validations.input.field')),
    })

  return newRules ?? props.rules ?? []
}

const isIsoDateString = (value: any): boolean => {
  return value && typeof value === 'string' && isoDateFormatRegex.test(value)
}

export const datesToDayjs = (model: any) => {
  const data = { ...model }

  if (data === null || data === undefined || typeof data !== 'object') {
    return data
  }

  for (const key of Object.keys(data)) {
    const value = data[key]
    if (isIsoDateString(value)) data[key] = dayjs(value)
    else if (typeof value === 'object') datesToDayjs(value)
  }

  return data
}
