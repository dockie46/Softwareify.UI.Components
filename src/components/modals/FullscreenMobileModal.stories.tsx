import type { Meta, StoryObj } from '@storybook/react'
import { Typography } from 'antd'
import FullscreenMobileModal from './FullscreenMobileModal'

const meta: Meta<typeof FullscreenMobileModal> = {
  title: 'Modals/FullscreenMobileModal',
  component: FullscreenMobileModal,
}

export default meta
type Story = StoryObj<typeof FullscreenMobileModal>

export const Default: Story = {
  args: {
    open: true,
    title: 'Mobile Modal',
    okText: 'Save',
    cancelText: 'Cancel',
    onOk: () => {},
    onCancel: () => {},
    children: (
      <Typography.Paragraph>
        This modal goes fullscreen on mobile devices.
      </Typography.Paragraph>
    ),
  },
}

export const NoSplitButtons: Story = {
  args: {
    open: true,
    title: 'Compact Modal',
    splitFooterButtonsOnMobile: false,
    okText: 'Done',
    onOk: () => {},
    onCancel: () => {},
    children: <Typography.Paragraph>Footer buttons are not split.</Typography.Paragraph>,
  },
}
