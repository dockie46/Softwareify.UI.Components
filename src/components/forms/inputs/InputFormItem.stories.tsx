import type { Meta, StoryObj } from '@storybook/react'
import { Form } from 'antd'
import InputFormItem from './InputFormItem'

const meta: Meta<typeof InputFormItem> = {
  title: 'Forms/InputFormItem',
  component: InputFormItem,
  decorators: [(Story) => <Form layout="vertical"><Story /></Form>],
}

export default meta
type Story = StoryObj<typeof InputFormItem>

export const Default: Story = {
  args: {
    formProps: { label: 'Name', name: 'name' },
    elementProps: { placeholder: 'Enter name' },
  },
}

export const Required: Story = {
  args: {
    formProps: { label: 'Email', name: 'email', required: true },
    elementProps: { type: 'email', placeholder: 'Enter email' },
  },
}

export const Password: Story = {
  args: {
    formProps: { label: 'Password', name: 'password' },
    elementProps: { type: 'password', placeholder: 'Enter password' },
  },
}

export const Disabled: Story = {
  args: {
    formProps: { label: 'Disabled Field', name: 'disabled' },
    elementProps: { disabled: true, value: 'Cannot edit' },
  },
}
