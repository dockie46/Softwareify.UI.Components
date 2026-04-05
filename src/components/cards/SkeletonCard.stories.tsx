import type { Meta, StoryObj } from '@storybook/react'
import SkeletonCard from './SkeletonCard'

const meta: Meta<typeof SkeletonCard> = {
  title: 'Cards/SkeletonCard',
  component: SkeletonCard,
}

export default meta
type Story = StoryObj<typeof SkeletonCard>

export const Default: Story = {}
