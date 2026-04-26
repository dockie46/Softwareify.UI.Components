import type { BaseFormItemProps, FormItemWrapperProps } from '@/common/models/form'
import { Form, Input } from 'antd'
import type { InputProps } from 'antd'
import { useFormRules } from '@/common/hooks'

interface Props extends FormItemWrapperProps<BaseFormItemProps, InputProps> {}

const InputFormItem = ({ elementProps, formProps }: Props) => {
  const rules = useFormRules(formProps, elementProps?.type)

  return (
    <Form.Item {...formProps} rules={formProps?.rules ?? rules}>
      <Input {...elementProps} />
    </Form.Item>
  )
}

export default InputFormItem
