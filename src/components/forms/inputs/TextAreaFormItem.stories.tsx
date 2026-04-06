import type { Meta, StoryObj } from '@storybook/react'
import { Form } from 'antd'
import TextAreaFormItem from './TextAreaFormItem'

const meta: Meta<typeof TextAreaFormItem> = {
  title: 'Forms/TextAreaFormItem',
  component: TextAreaFormItem,
  decorators: [(Story) => <Form><Story /></Form>],
}

export default meta
type Story = StoryObj<typeof TextAreaFormItem>

export const Default: Story = {
  args: {
    formProps: { label: 'Description', name: 'description' },
    elementProps: { placeholder: 'Enter description', rows: 4 },
  },
}

export const Required: Story = {
  args: {
    formProps: { label: 'Notes', name: 'notes', required: true },
    elementProps: { placeholder: 'Enter notes', rows: 6 },
  },
}

export const WithMaxLength: Story = {
  args: {
    formProps: { label: 'Comment', name: 'comment' },
    elementProps: { placeholder: 'Max 200 characters', maxLength: 200, showCount: true },
  },
}
