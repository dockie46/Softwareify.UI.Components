import type { BaseFormItemProps, FormItemWrapperProps } from '@/common/models/form'
import { DatePicker, Form } from 'antd'
import { dateFormat, dateTimeFormat } from '@/common/constants/constants'
import type { DatePickerProps } from 'antd/lib'
import { useFormRules } from '@/common/hooks'

interface Props extends FormItemWrapperProps<BaseFormItemProps, DatePickerProps> {}

const DateFormItem = ({ formProps, elementProps }: Props) => {
  const rules = useFormRules(formProps)

  return (
    <Form.Item {...formProps} rules={formProps?.rules ?? rules}>
      <DatePicker
        {...elementProps}
        format={elementProps?.format ?? elementProps?.showTime ? dateTimeFormat : dateFormat}
        style={{ width: '100%', ...elementProps?.style }}
      />
    </Form.Item>
  )
}

export default DateFormItem
