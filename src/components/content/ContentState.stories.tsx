import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "antd"
import { InboxOutlined } from "@ant-design/icons"
import ContentState from "./ContentState"

const meta: Meta<typeof ContentState> = {
  title: "Content/ContentState",
  component: ContentState,
}

export default meta
type Story = StoryObj<typeof ContentState>

export const Default: Story = {
  args: { title: "No data found" },
}

export const WithDescription: Story = {
  args: {
    title: "No users yet",
    description: "Create your first user to get started with the platform.",
  },
}

export const WithAction: Story = {
  args: {
    title: "No projects",
    description: "You haven't created any projects yet.",
    action: <Button type="primary">Create Project</Button>,
  },
}

export const CustomIcon: Story = {
  args: {
    icon: <InboxOutlined style={{ fontSize: 48, color: "var(--color-text-muted, #999)" }} />,
    title: "Inbox is empty",
    description: "All caught up!",
  },
}
