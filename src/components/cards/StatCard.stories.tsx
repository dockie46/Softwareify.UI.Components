import type { Meta, StoryObj } from '@storybook/react'
import { Typography } from 'antd'
import StatCard from './StatCard'

const meta: Meta<typeof StatCard> = {
  title: 'Cards/StatCard',
  component: StatCard,
}

export default meta
type Story = StoryObj<typeof StatCard>

export const Default: Story = {
  args: {
    label: 'Total Users',
    children: <Typography.Title level={3} style={{ margin: 0 }}>1,234</Typography.Title>,
  },
}

export const WithSubtext: Story = {
  args: {
    label: 'Revenue',
    children: (
      <>
        <Typography.Title level={3} style={{ margin: 0 }}>$45,678</Typography.Title>
        <Typography.Text type="success" style={{ fontSize: 12 }}>+12.5%</Typography.Text>
      </>
    ),
  },
}

export const CustomStyle: Story = {
  args: {
    label: 'Active Projects',
    children: <Typography.Title level={3} style={{ margin: 0 }}>8</Typography.Title>,
    style: { maxWidth: 200 },
  },
}
