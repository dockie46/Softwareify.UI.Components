import type { Meta, StoryObj } from '@storybook/react'
import { Button } from 'antd'
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
    actions: <Button type="primary">Action</Button>,
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
      <>
        <Button>Help</Button>
        <Button type="primary">Save</Button>
      </>
    ),
  },
}

export const Section: Story = {
  args: {
    variant: 'section',
    title: 'Section title',
    filters: <Button>Filter</Button>,
    actions: <Button>Export</Button>,
  },
}
