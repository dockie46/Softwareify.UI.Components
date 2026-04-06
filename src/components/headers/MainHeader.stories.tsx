import type { Meta, StoryObj } from '@storybook/react'
import { Button, Space } from 'antd'
import MainHeader from './MainHeader'

const meta: Meta<typeof MainHeader> = {
  title: 'Headers/MainHeader',
  component: MainHeader,
  argTypes: {
    variant: { control: 'radio', options: ['page', 'section'] },
  },
}

export default meta
type Story = StoryObj<typeof MainHeader>

export const Page: Story = {
  args: {
    variant: 'page',
    title: 'Page title',
    subtitle: 'Optional subtitle',
    actions: (
      <Space>
        <Button type="primary">Action</Button>
      </Space>
    ),
  },
}

export const PageWithBreadcrumbAndButtons: Story = {
  args: {
    variant: 'page',
    title: 'Settings',
    breadcrumb: {
      items: [{ title: 'App' }, { title: 'Settings' }],
    },
    breadcrumbExtra: (
      <Space>
        <Button size="small">Help</Button>
        <Button type="primary" size="small">
          Save
        </Button>
      </Space>
    ),
  },
}

export const Section: Story = {
  args: {
    variant: 'section',
    title: 'Section title',
    filters: <Button size="small">Filter</Button>,
    actions: <Button size="small">Export</Button>,
  },
}
