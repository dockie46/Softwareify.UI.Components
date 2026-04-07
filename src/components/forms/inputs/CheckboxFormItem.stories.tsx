import type { Meta, StoryObj } from '@storybook/react'
import { Form } from 'antd'
import CheckboxFormItem from './CheckboxFormItem'

const meta: Meta<typeof CheckboxFormItem> = {
  title: 'Forms/CheckboxFormItem',
  component: CheckboxFormItem,
  decorators: [(Story) => <Form layout="vertical"><Story /></Form>],
}

export default meta
type Story = StoryObj<typeof CheckboxFormItem>

export const Default: Story = {
  args: {
    formProps: { name: 'agree' },
    children: 'I agree to the terms and conditions',
  },
}

export const Required: Story = {
  args: {
    formProps: { name: 'consent', required: true },
    children: 'I consent to data processing',
  },
}

export const Disabled: Story = {
  args: {
    formProps: { name: 'locked' },
    elementProps: { disabled: true },
    children: 'This option is locked',
  },
}
