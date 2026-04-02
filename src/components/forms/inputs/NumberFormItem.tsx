import type { BaseFormItemProps, FormItemWrapperProps } from '@/common/models/form'
import { Form, InputNumber } from 'antd'
import type { InputNumberProps } from 'antd'
import { getRules } from '@/common/helpers/formDataHelpers'

interface Props extends FormItemWrapperProps<BaseFormItemProps, InputNumberProps> {}

const NumberFormItem = ({ elementProps, formProps }: Props) => {
  return (
    <Form.Item {...formProps} rules={formProps?.rules ?? getRules(formProps)}>
      <InputNumber {...elementProps} className="w-full" />
    </Form.Item>
  )
}

export default NumberFormItem
