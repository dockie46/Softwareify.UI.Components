import type { Meta, StoryObj } from '@storybook/react'
import StatusBadge from './StatusBadge'

const meta: Meta<typeof StatusBadge> = {
  title: 'DataDisplay/StatusBadge',
  component: StatusBadge,
}

export default meta
type Story = StoryObj<typeof StatusBadge>

export const Success: Story = {
  args: { status: 'success', label: 'Active' },
}

export const Warning: Story = {
  args: { status: 'warning', label: 'Pending' },
}

export const Error: Story = {
  args: { status: 'error', label: 'Inactive' },
}

export const Info: Story = {
  args: { status: 'info', label: 'In Progress' },
}

export const Default: Story = {
  args: { status: 'default', label: 'Draft' },
}
