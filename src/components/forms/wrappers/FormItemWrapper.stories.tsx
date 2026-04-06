import type { Meta, StoryObj } from '@storybook/react'
import { Form, Input } from 'antd'
import FormItemWrapper from './FormItemWrapper'

const meta: Meta<typeof FormItemWrapper> = {
  title: 'Forms/FormItemWrapper',
  component: FormItemWrapper,
  decorators: [(Story) => <Form><Story /></Form>],
}

export default meta
type Story = StoryObj<typeof FormItemWrapper>

export const TwoFields: Story = {
  args: {
    firstItem: (
      <Form.Item label="First Name" name="firstName">
        <Input placeholder="John" />
      </Form.Item>
    ),
    secondItem: (
      <Form.Item label="Last Name" name="lastName">
        <Input placeholder="Doe" />
      </Form.Item>
    ),
  },
}

export const SingleField: Story = {
  args: {
    firstItem: (
      <Form.Item label="Full Name" name="fullName">
        <Input placeholder="John Doe" />
      </Form.Item>
    ),
  },
}
