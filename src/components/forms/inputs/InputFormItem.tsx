import type { BaseFormItemProps, FormItemWrapperProps } from '@/common/models/form'
import { Form, Input } from 'antd'
import type { InputProps } from 'antd'
import { getRules } from '@/common/helpers/formDataHelpers'

interface Props extends FormItemWrapperProps<BaseFormItemProps, InputProps> {}

const InputFormItem = ({ elementProps, formProps }: Props) => {
  return (
    <Form.Item {...formProps} rules={formProps?.rules ?? getRules(formProps, elementProps?.type)}>
      <Input {...elementProps} />
    </Form.Item>
  )
}

export default InputFormItem
