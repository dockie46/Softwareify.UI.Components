import type { Meta, StoryObj } from '@storybook/react'
import { Form } from 'antd'
import TimePickerFormItem from './TimePickerFormItem'

const meta: Meta<typeof TimePickerFormItem> = {
  title: 'Forms/TimePickerFormItem',
  component: TimePickerFormItem,
  decorators: [(Story) => <Form layout="vertical"><Story /></Form>],
}

export default meta
type Story = StoryObj<typeof TimePickerFormItem>

export const Default: Story = {
  args: {
    formProps: { label: 'Start Time', name: 'startTime' },
  },
}

export const Required: Story = {
  args: {
    formProps: { label: 'Deadline', name: 'deadline', required: true },
  },
}

export const Disabled: Story = {
  args: {
    formProps: { label: 'Locked Time', name: 'lockedTime' },
    elementProps: { disabled: true },
  },
}
