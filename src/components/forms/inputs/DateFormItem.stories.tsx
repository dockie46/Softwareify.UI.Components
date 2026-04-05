import type { Meta, StoryObj } from '@storybook/react'
import { Form } from 'antd'
import DateFormItem from './DateFormItem'

const meta: Meta<typeof DateFormItem> = {
  title: 'Forms/DateFormItem',
  component: DateFormItem,
  decorators: [(Story) => <Form><Story /></Form>],
}

export default meta
type Story = StoryObj<typeof DateFormItem>

export const Default: Story = {
  args: {
    formProps: { label: 'Date of Birth', name: 'dob' },
  },
}

export const Required: Story = {
  args: {
    formProps: { label: 'Start Date', name: 'startDate', required: true },
  },
}

export const Disabled: Story = {
  args: {
    formProps: { label: 'Created At', name: 'createdAt' },
    elementProps: { disabled: true },
  },
}
