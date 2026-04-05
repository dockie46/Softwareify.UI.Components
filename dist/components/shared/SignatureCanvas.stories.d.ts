import { Meta, StoryObj } from '@storybook/react';
import { default as SignatureCanvas } from './SignatureCanvas';
declare const meta: Meta<typeof SignatureCanvas>;
export default meta;
type Story = StoryObj<typeof SignatureCanvas>;
export declare const Default: Story;
export declare const CustomSize: Story;
export declare const Disabled: Story;
export declare const CustomLabels: Story;
