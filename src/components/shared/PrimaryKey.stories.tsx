import type { Meta, StoryObj } from '@storybook/react'
import PrimaryKey from './PrimaryKey'

const meta: Meta<typeof PrimaryKey> = {
  title: 'Shared/PrimaryKey',
  component: PrimaryKey,
}

export default meta
type Story = StoryObj<typeof PrimaryKey>

export const Default: Story = {
  args: {
    value: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
  },
}

export const CustomLabel: Story = {
  args: {
    value: 'USR-00042',
    label: 'User ID',
  },
}

export const Empty: Story = {
  args: {
    value: undefined,
  },
}
