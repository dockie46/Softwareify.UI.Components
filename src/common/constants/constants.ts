export const dateFormat = 'DD.MM.YYYY'
export const dateTimeFormat = 'DD.MM.YYYY HH:mm:ss'
export const dateTimeFormatWithoutSeconds = 'DD.MM.YYYY HH:mm'
export const dateFormatISO = 'YYYY-MM-DDTHH:mm:ss.SSS[Z]'

export const isoDateFormatRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z?/

export const passwordRegex = '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$'

export const defaultTablePageSize = 50

export const uriRegex =
  '^https?:\\/\\/(?:www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b(?:[-a-zA-Z0-9()@:%_\\+.~#?&\\/\\=]*)$'

export const phoneFormatRegex = /^((([+]|0|00)42[0-9]{1}\s?)?(\d{3}\s?){3}|\d{9})$/

export const dropdownItemsMaxTake = 2147483646
