import type { Meta, StoryObj } from '@storybook/react'
import SignatureCanvas from './SignatureCanvas'

const meta: Meta<typeof SignatureCanvas> = {
  title: 'Shared/SignatureCanvas',
  component: SignatureCanvas,
}

export default meta
type Story = StoryObj<typeof SignatureCanvas>

export const Default: Story = {
  args: {
    onSign: (dataUrl) => console.log('Signed:', dataUrl.slice(0, 50)),
  },
}

export const CustomSize: Story = {
  args: {
    width: 600,
    height: 300,
    onSign: (dataUrl) => console.log('Signed:', dataUrl.slice(0, 50)),
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    onSign: () => {},
  },
}

export const CustomLabels: Story = {
  args: {
    clearLabel: 'Erase',
    confirmLabel: 'Submit Signature',
    onSign: (dataUrl) => console.log('Signed:', dataUrl.slice(0, 50)),
  },
}
