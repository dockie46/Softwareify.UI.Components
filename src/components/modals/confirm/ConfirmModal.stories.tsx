import type { Meta, StoryObj } from "@storybook/react"
import ConfirmModal from "./ConfirmModal"

const meta: Meta<typeof ConfirmModal> = {
  title: "Modals/ConfirmModal",
  component: ConfirmModal,
}

export default meta
type Story = StoryObj<typeof ConfirmModal>

export const Danger: Story = {
  args: {
    open: true,
    title: "Delete User",
    description: "Are you sure you want to delete this user? This action cannot be undone.",
    variant: "danger",
    onConfirm: () => {},
    onCancel: () => {},
  },
}

export const Warning: Story = {
  args: {
    open: true,
    title: "Archive Project",
    description: "This project will be archived and hidden from active projects.",
    variant: "warning",
    onConfirm: () => {},
    onCancel: () => {},
  },
}

export const Info: Story = {
  args: {
    open: true,
    title: "Confirm Action",
    description: "Do you want to proceed with this action?",
    variant: "info",
    onConfirm: () => {},
    onCancel: () => {},
  },
}

export const Loading: Story = {
  args: {
    open: true,
    title: "Deleting...",
    description: "Please wait while the item is being deleted.",
    variant: "danger",
    loading: true,
    onConfirm: () => {},
    onCancel: () => {},
  },
}
