import type { BaseFormItemProps, FormItemWrapperProps } from '@/common/models/form'
import { Form, Switch } from 'antd'
import type { SwitchProps } from 'antd'
import { getRules } from '@/common/helpers/formDataHelpers'

interface Props extends FormItemWrapperProps<BaseFormItemProps, SwitchProps> {}

const SwitchFormItem = ({ elementProps, formProps }: Props) => {
  return (
    <Form.Item {...formProps} rules={formProps?.rules ?? getRules(formProps)} valuePropName="checked">
      <Switch {...elementProps} />
    </Form.Item>
  )
}

export default SwitchFormItem
