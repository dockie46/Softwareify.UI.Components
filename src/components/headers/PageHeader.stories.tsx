import type { Meta, StoryObj } from '@storybook/react'
import { Button } from 'antd'
import PageHeader from './PageHeader'

const meta: Meta<typeof PageHeader> = {
  title: 'Headers/PageHeader',
  component: PageHeader,
}

export default meta
type Story = StoryObj<typeof PageHeader>

export const Default: Story = {
  args: {
    title: 'Users',
  },
}

export const WithSubtitle: Story = {
  args: {
    title: 'Project Settings',
    subtitle: 'Manage your project configuration',
  },
}

export const WithBreadcrumb: Story = {
  args: {
    title: 'User Detail',
    subtitle: 'john@example.com',
    breadcrumb: {
      items: [
        { title: 'Home', href: '/' },
        { title: 'Users', href: '/users' },
        { title: 'John Doe' },
      ],
    },
    onBack: () => {},
  },
}

export const WithBreadcrumbAndExtraActions: Story = {
  args: {
    title: 'Release notes',
    subtitle: 'What changed in this build',
    breadcrumb: {
      items: [
        { title: 'Home', href: '/' },
        { title: 'Product' },
        { title: 'Releases' },
      ],
    },
    breadcrumbExtra: (
      <>
        <Button>Share</Button>
        <Button type="primary">Publish</Button>
      </>
    ),
    onBack: () => {},
  },
}

export const WithActions: Story = {
  args: {
    title: 'Invoices',
    subtitle: '24 total',
    actions: (
      <>
        <Button>Export</Button>
        <Button type="primary">Create Invoice</Button>
      </>
    ),
  },
}

export const FullExample: Story = {
  args: {
    title: 'Edit User',
    subtitle: 'Last updated 2 hours ago',
    breadcrumb: {
      items: [
        { title: 'Dashboard', href: '/' },
        { title: 'Users', href: '/users' },
        { title: 'Edit' },
      ],
    },
    onBack: () => {},
    actions: (
      <>
        <Button danger>Delete</Button>
        <Button type="primary">Save</Button>
      </>
    ),
  },
}
