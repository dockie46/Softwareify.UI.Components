import type { Meta, StoryObj } from '@storybook/react'
import { Tag } from 'antd'
import DescriptionList from './DescriptionList'

const meta: Meta<typeof DescriptionList> = {
  title: 'DataDisplay/DescriptionList',
  component: DescriptionList,
}

export default meta
type Story = StoryObj<typeof DescriptionList>

export const Default: Story = {
  args: {
    items: [
      { label: 'Name', value: 'John Doe' },
      { label: 'Email', value: 'john@example.com' },
      { label: 'Phone', value: '+420 123 456 789' },
      { label: 'Role', value: 'Admin' },
    ],
  },
}

export const WithTitle: Story = {
  args: {
    title: 'User Details',
    items: [
      { label: 'Name', value: 'Jane Smith' },
      { label: 'Email', value: 'jane@example.com' },
      { label: 'Status', value: <Tag color="green">Active</Tag> },
      { label: 'Created', value: '2024-01-15' },
    ],
  },
}

export const Bordered: Story = {
  args: {
    title: 'Project Info',
    bordered: true,
    items: [
      { label: 'Project', value: 'Softwareify' },
      { label: 'Version', value: '1.0.0' },
      { label: 'License', value: 'Private' },
      { label: 'Status', value: <Tag color="blue">Active</Tag> },
    ],
  },
}

export const SingleColumn: Story = {
  args: {
    column: 1,
    items: [
      { label: 'Description', value: 'A long description that spans the full width of the container.' },
      { label: 'Notes', value: 'Additional notes for this item.' },
    ],
  },
}

export const Loading: Story = {
  args: {
    loading: true,
    items: [
      { label: 'Name', value: '' },
      { label: 'Email', value: '' },
      { label: 'Phone', value: '' },
    ],
  },
}
