import type { Meta, StoryObj } from '@storybook/react'
import { Col, Form, Input } from 'antd'
import FormSection from './FormSection'

const meta: Meta<typeof FormSection> = {
  title: 'Forms/FormSection',
  component: FormSection,
  decorators: [(Story) => <Form layout="vertical"><Story /></Form>],
}

export default meta
type Story = StoryObj<typeof FormSection>

export const Default: Story = {
  args: {
    title: 'Personal Information',
    subtitle: 'Fill in your personal details',
    children: (
      <>
        <Col xl={12} md={24} sm={24} xs={24}>
          <Form.Item label="First Name" name="firstName">
            <Input placeholder="John" />
          </Form.Item>
        </Col>
        <Col xl={12} md={24} sm={24} xs={24}>
          <Form.Item label="Last Name" name="lastName">
            <Input placeholder="Doe" />
          </Form.Item>
        </Col>
      </>
    ),
  },
}

export const SingleColumn: Story = {
  args: {
    title: 'Address',
    columns: 1,
    children: (
      <>
        <Form.Item label="Street" name="street">
          <Input placeholder="123 Main St" />
        </Form.Item>
        <Form.Item label="City" name="city">
          <Input placeholder="Prague" />
        </Form.Item>
      </>
    ),
  },
}

export const Loading: Story = {
  args: {
    title: 'Loading Section',
    loading: true,
    children: null,
  },
}
