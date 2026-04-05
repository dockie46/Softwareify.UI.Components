import type { Meta, StoryObj } from '@storybook/react'
import { Button } from 'antd'
import { PhoneOutlined, MailOutlined } from '@ant-design/icons'
import MobileActionSplitRow from './MobileActionSplitRow'

const meta: Meta<typeof MobileActionSplitRow> = {
  title: 'Mobile/MobileActionSplitRow',
  component: MobileActionSplitRow,
}

export default meta
type Story = StoryObj<typeof MobileActionSplitRow>

export const Default: Story = {
  args: {
    left: <Button type="link" icon={<PhoneOutlined />}>Call</Button>,
    right: <Button type="link" icon={<MailOutlined />}>Email</Button>,
  },
}

export const TextOnly: Story = {
  args: {
    left: <span>Left Action</span>,
    right: <span>Right Action</span>,
  },
}
