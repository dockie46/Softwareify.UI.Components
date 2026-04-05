import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "antd"
import { PhoneOutlined, MailOutlined, MessageOutlined } from "@ant-design/icons"
import ActionColumnRow from "./ActionColumnRow"

const meta: Meta<typeof ActionColumnRow> = {
  title: "Content/ActionColumnRow",
  component: ActionColumnRow,
}

export default meta
type Story = StoryObj<typeof ActionColumnRow>

export const TwoColumns: Story = {
  args: {
    items: [
      <Button key="a" type="link" icon={<PhoneOutlined />}>
        Call
      </Button>,
      <Button key="b" type="link" icon={<MailOutlined />}>
        Email
      </Button>,
    ],
  },
}

export const ThreeColumns: Story = {
  args: {
    items: [
      <Button key="a" type="link" icon={<PhoneOutlined />}>
        Call
      </Button>,
      <Button key="b" type="link" icon={<MailOutlined />}>
        Email
      </Button>,
      <Button key="c" type="link" icon={<MessageOutlined />}>
        SMS
      </Button>,
    ],
  },
}

export const LegacyLeftRight: Story = {
  args: {
    left: (
      <Button type="link" icon={<PhoneOutlined />}>
        Call
      </Button>
    ),
    right: (
      <Button type="link" icon={<MailOutlined />}>
        Email
      </Button>
    ),
  },
}

export const TextOnly: Story = {
  args: {
    items: [<span key="l">Left</span>, <span key="r">Right</span>],
  },
}
