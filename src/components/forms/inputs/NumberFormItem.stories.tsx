import type { Meta, StoryObj } from '@storybook/react'
import { Form } from 'antd'
import NumberFormItem from './NumberFormItem'

const meta: Meta<typeof NumberFormItem> = {
  title: 'Forms/NumberFormItem',
  component: NumberFormItem,
  decorators: [(Story) => <Form layout="vertical"><Story /></Form>],
}

export default meta
type Story = StoryObj<typeof NumberFormItem>

export const Default: Story = {
  args: {
    formProps: { label: 'Quantity', name: 'quantity' },
    elementProps: { placeholder: 'Enter quantity' },
  },
}

export const WithMinMax: Story = {
  args: {
    formProps: { label: 'Age', name: 'age' },
    elementProps: { min: 0, max: 120, placeholder: 'Enter age' },
  },
}

export const Required: Story = {
  args: {
    formProps: { label: 'Price', name: 'price', required: true },
    elementProps: { prefix: '$', placeholder: '0.00' },
  },
}
