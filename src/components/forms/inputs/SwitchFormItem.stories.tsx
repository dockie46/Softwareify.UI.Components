import type { Meta, StoryObj } from '@storybook/react'
import { Form } from 'antd'
import SwitchFormItem from './SwitchFormItem'

const meta: Meta<typeof SwitchFormItem> = {
  title: 'Forms/SwitchFormItem',
  component: SwitchFormItem,
  decorators: [(Story) => <Form layout="vertical"><Story /></Form>],
}

export default meta
type Story = StoryObj<typeof SwitchFormItem>

export const Default: Story = {
  args: {
    formProps: { label: 'Active', name: 'isActive' },
  },
}

export const Disabled: Story = {
  args: {
    formProps: { label: 'Locked', name: 'isLocked' },
    elementProps: { disabled: true },
  },
}
