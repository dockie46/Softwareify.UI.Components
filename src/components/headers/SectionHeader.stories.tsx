import type { Meta, StoryObj } from '@storybook/react'
import { Button, Select } from 'antd'
import SectionHeader from './SectionHeader'

const meta: Meta<typeof SectionHeader> = {
  title: 'Headers/SectionHeader',
  component: SectionHeader,
}

export default meta
type Story = StoryObj<typeof SectionHeader>

export const Default: Story = {
  args: {
    title: 'Recent Activity',
  },
}

export const WithActions: Story = {
  args: {
    title: 'Users',
    actions: <Button type="primary">Add User</Button>,
  },
}

export const WithFilters: Story = {
  args: {
    title: 'Orders',
    filters: (
      <Select placeholder="Status" style={{ width: 120 }} options={[
        { label: 'Active', value: 'active' },
        { label: 'Closed', value: 'closed' },
      ]} />
    ),
    actions: <Button>Export</Button>,
  },
}
