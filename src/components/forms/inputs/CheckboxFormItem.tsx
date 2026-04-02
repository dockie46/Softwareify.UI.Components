import type { BaseFormItemProps, FormItemWrapperProps } from '@/common/models/form'
import { Checkbox, Form } from 'antd'
import type { CheckboxProps } from 'antd'
import { getRules } from '@/common/helpers/formDataHelpers'

interface Props extends FormItemWrapperProps<BaseFormItemProps, CheckboxProps> {
  children?: React.ReactNode
}

const CheckboxFormItem = ({ formProps, elementProps, children }: Props) => {
  return (
    <Form.Item {...formProps} rules={formProps?.rules ?? getRules(formProps)} valuePropName="checked">
      <Checkbox {...elementProps}>{children}</Checkbox>
    </Form.Item>
  )
}

export default CheckboxFormItem
