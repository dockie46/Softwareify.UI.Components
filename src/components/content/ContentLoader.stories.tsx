import type { Meta, StoryObj } from "@storybook/react"
import ContentLoader from "./ContentLoader"

const meta: Meta<typeof ContentLoader> = {
  title: "Content/ContentLoader",
  component: ContentLoader,
  argTypes: {
    variant: {
      control: "select",
      options: ["hero", "stacked", "content", "fields", "grid", "rows"],
    },
  },
}

export default meta
type Story = StoryObj<typeof ContentLoader>

export const Hero: Story = {
  args: { variant: "hero", cards: 4, showAvatar: true },
}

export const HeroNoAvatar: Story = {
  args: { variant: "hero", cards: 4, showAvatar: false },
}

export const Stacked: Story = {
  args: { variant: "stacked" },
}

export const Content: Story = {
  args: { variant: "content", rows: 8 },
}

export const Fields: Story = {
  args: { variant: "fields", inputRows: 6 },
}

export const Grid: Story = {
  args: { variant: "grid", cards: 6 },
}

export const Rows: Story = {
  args: { variant: "rows", rows: 6 },
}
