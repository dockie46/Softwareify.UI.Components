import type { Meta, StoryObj } from '@storybook/react'
import { Form, Input } from 'antd'
import BaseEditModal from './BaseEditModal'

const meta: Meta<typeof BaseEditModal> = {
  title: 'Modals/BaseEditModal',
  component: BaseEditModal,
}

export default meta
type Story = StoryObj<typeof BaseEditModal>

export const Default: Story = {
  args: {
    open: true,
    title: 'Edit User',
    onCancel: () => {},
    onFormSubmit: () => {},
    children: (
      <Form layout="vertical">
        <Form.Item label="Name" name="name">
          <Input placeholder="Enter name" />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input placeholder="Enter email" />
        </Form.Item>
      </Form>
    ),
  },
}

export const Loading: Story = {
  args: {
    open: true,
    title: 'Saving...',
    loading: true,
    onCancel: () => {},
    onFormSubmit: () => {},
    children: (
      <Form layout="vertical">
        <Form.Item label="Name"><Input /></Form.Item>
      </Form>
    ),
  },
}

export const CustomButtons: Story = {
  args: {
    open: true,
    title: 'Create Project',
    onCancel: () => {},
    onFormSubmit: () => {},
    btns: {
      save: { label: 'Create' },
      cancel: { label: 'Discard' },
    },
    children: (
      <Form layout="vertical">
        <Form.Item label="Project Name"><Input /></Form.Item>
      </Form>
    ),
  },
}
