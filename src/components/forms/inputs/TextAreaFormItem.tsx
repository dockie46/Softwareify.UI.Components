import type { BaseFormItemProps, FormItemWrapperProps } from '@/common/models/form'
import { Form, Input } from 'antd'
import type { TextAreaProps } from 'antd/es/input'
import { getRules } from '@/common/helpers/formDataHelpers'

interface Props extends FormItemWrapperProps<BaseFormItemProps, TextAreaProps> {}

const TextAreaFormItem = ({ elementProps, formProps }: Props) => {
  return (
    <Form.Item {...formProps} rules={formProps?.rules ?? getRules(formProps)}>
      <Input.TextArea {...elementProps} />
    </Form.Item>
  )
}

export default TextAreaFormItem
