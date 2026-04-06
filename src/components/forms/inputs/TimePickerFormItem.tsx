import type { BaseFormItemProps, FormItemWrapperProps } from '@/common/models/form'
import { Form, TimePicker } from 'antd'
import type { TimePickerProps } from 'antd'
import { useFormRules } from '@/common/hooks'

interface Props extends FormItemWrapperProps<BaseFormItemProps, TimePickerProps> {}

const TimePickerFormItem = ({ formProps, elementProps }: Props) => {
  const rules = useFormRules(formProps)

  return (
    <Form.Item {...formProps} rules={formProps?.rules ?? rules}>
      <TimePicker {...elementProps} className="w-full" />
    </Form.Item>
  )
}

export default TimePickerFormItem
