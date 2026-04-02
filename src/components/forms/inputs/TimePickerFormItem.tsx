import type { BaseFormItemProps, FormItemWrapperProps } from '@/common/models/form'
import { Form, TimePicker } from 'antd'
import type { TimePickerProps } from 'antd'
import { getRules } from '@/common/helpers/formDataHelpers'

interface Props extends FormItemWrapperProps<BaseFormItemProps, TimePickerProps> {}

const TimePickerFormItem = ({ formProps, elementProps }: Props) => {
  return (
    <Form.Item {...formProps} rules={formProps?.rules ?? getRules(formProps)}>
      <TimePicker {...elementProps} className="w-full" />
    </Form.Item>
  )
}

export default TimePickerFormItem
