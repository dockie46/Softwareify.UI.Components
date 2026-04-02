import type { BaseFormItemProps, FormItemWrapperProps } from '@/common/models/form'
import { DatePicker, Form } from 'antd'
import { dateFormat, dateTimeFormat } from '@/common/constants/constants'
import type { DatePickerProps } from 'antd/lib'
import { getRules } from '@/common/helpers/formDataHelpers'

interface Props extends FormItemWrapperProps<BaseFormItemProps, DatePickerProps> {}

const DateFormItem = ({ formProps, elementProps }: Props) => {
  return (
    <Form.Item {...formProps} rules={formProps?.rules ?? getRules(formProps)}>
      <DatePicker
        {...elementProps}
        format={elementProps?.format ?? elementProps?.showTime ? dateTimeFormat : dateFormat}
        className="w-full"
      />
    </Form.Item>
  )
}

export default DateFormItem
