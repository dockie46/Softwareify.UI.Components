import type { Meta, StoryObj } from '@storybook/react'
import { Form } from 'antd'
import SelectFormItem from './SelectFormItem'

const meta: Meta<typeof SelectFormItem> = {
  title: 'Forms/SelectFormItem',
  component: SelectFormItem,
  decorators: [(Story) => <Form layout="vertical"><Story /></Form>],
}

export default meta
type Story = StoryObj<typeof SelectFormItem>

const options = [
  { label: 'Option A', value: 'a' },
  { label: 'Option B', value: 'b' },
  { label: 'Option C', value: 'c' },
]

export const Default: Story = {
  args: {
    formProps: { label: 'Country', name: 'country' },
    elementProps: { options, placeholder: 'Select country' },
  },
}

export const Required: Story = {
  args: {
    formProps: { label: 'Role', name: 'role', required: true },
    elementProps: { options, placeholder: 'Select role' },
  },
}

export const Multiple: Story = {
  args: {
    formProps: { label: 'Tags', name: 'tags' },
    elementProps: { options, mode: 'multiple', placeholder: 'Select tags' },
  },
}

export const Disabled: Story = {
  args: {
    formProps: { label: 'Status', name: 'status' },
    elementProps: { options, disabled: true, value: 'a' },
  },
}
