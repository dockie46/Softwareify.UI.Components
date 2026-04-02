import type { BaseFormItemProps, FormItemWrapperProps } from '@/common/models/form'
import { Form, Select } from 'antd'
import type { SelectProps } from 'antd'
import { getRules } from '@/common/helpers/formDataHelpers'

interface Props extends FormItemWrapperProps<BaseFormItemProps, SelectProps> {}

const SelectFormItem = ({ elementProps, formProps }: Props) => {
  return (
    <Form.Item {...formProps} rules={formProps?.rules ?? getRules(formProps)}>
      <Select
        showSearch
        filterOption={(input, option) => {
          const label = String(option?.label ?? option?.children ?? '')
          return label
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase()
            .includes(
              input
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .toLowerCase(),
            )
        }}
        {...elementProps}
      />
    </Form.Item>
  )
}

export default SelectFormItem
