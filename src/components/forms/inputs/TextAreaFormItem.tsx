import type { BaseFormItemProps, FormItemWrapperProps } from '@/common/models/form'
import { Form, Input } from 'antd'
import type { TextAreaProps } from 'antd/es/input'
import { useFormRules } from '@/common/hooks'

interface Props extends FormItemWrapperProps<BaseFormItemProps, TextAreaProps> {}

const TextAreaFormItem = ({ elementProps, formProps }: Props) => {
  const rules = useFormRules(formProps)

  return (
    <Form.Item {...formProps} rules={formProps?.rules ?? rules}>
      <Input.TextArea {...elementProps} />
    </Form.Item>
  )
}

export default TextAreaFormItem
