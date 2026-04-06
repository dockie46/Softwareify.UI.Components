import type { BaseFormItemProps, FormItemWrapperProps } from '@/common/models/form'
import { Form, InputNumber } from 'antd'
import type { InputNumberProps } from 'antd'
import { useFormRules } from '@/common/hooks'

interface Props extends FormItemWrapperProps<BaseFormItemProps, InputNumberProps> {}

const NumberFormItem = ({ elementProps, formProps }: Props) => {
  const rules = useFormRules(formProps)

  return (
    <Form.Item {...formProps} rules={formProps?.rules ?? rules}>
      <InputNumber {...elementProps} className="w-full" />
    </Form.Item>
  )
}

export default NumberFormItem
