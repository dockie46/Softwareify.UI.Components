import type { BaseFormItemProps, FormItemWrapperProps } from '@/common/models/form'
import { Form, Switch } from 'antd'
import type { SwitchProps } from 'antd'
import { useFormRules } from '@/common/hooks'

interface Props extends FormItemWrapperProps<BaseFormItemProps, SwitchProps> {}

const SwitchFormItem = ({ elementProps, formProps }: Props) => {
  const rules = useFormRules(formProps)

  return (
    <Form.Item {...formProps} rules={formProps?.rules ?? rules} valuePropName="checked">
      <Switch {...elementProps} />
    </Form.Item>
  )
}

export default SwitchFormItem
