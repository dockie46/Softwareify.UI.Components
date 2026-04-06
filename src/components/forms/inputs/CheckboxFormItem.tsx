import type { BaseFormItemProps, FormItemWrapperProps } from '@/common/models/form'
import { Checkbox, Form } from 'antd'
import type { CheckboxProps } from 'antd'
import { useFormRules } from '@/common/hooks'

interface Props extends FormItemWrapperProps<BaseFormItemProps, CheckboxProps> {
  children?: React.ReactNode
}

const CheckboxFormItem = ({ formProps, elementProps, children }: Props) => {
  const rules = useFormRules(formProps)

  return (
    <Form.Item {...formProps} rules={formProps?.rules ?? rules} valuePropName="checked">
      <Checkbox {...elementProps}>{children}</Checkbox>
    </Form.Item>
  )
}

export default CheckboxFormItem
