import type { Meta, StoryObj } from '@storybook/react'
import DetailLoader from './DetailLoader'

const meta: Meta<typeof DetailLoader> = {
  title: 'Loaders/DetailLoader',
  component: DetailLoader,
  argTypes: {
    variant: {
      control: 'select',
      options: ['user', 'project', 'simple', 'form', 'cards', 'list'],
    },
  },
}

export default meta
type Story = StoryObj<typeof DetailLoader>

export const User: Story = {
  args: {
    variant: 'user',
    cards: 4,
    showAvatar: true,
  },
}

export const UserNoAvatar: Story = {
  args: {
    variant: 'user',
    cards: 4,
    showAvatar: false,
  },
}

export const Project: Story = {
  args: {
    variant: 'project',
  },
}

export const Simple: Story = {
  args: {
    variant: 'simple',
    rows: 8,
  },
}

export const Form: Story = {
  args: {
    variant: 'form',
    formRows: 6,
  },
}

export const CardsOnly: Story = {
  args: {
    variant: 'cards',
    cards: 6,
  },
}

export const List: Story = {
  args: {
    variant: 'list',
    rows: 6,
  },
}
