import { Meta, StoryObj } from '@storybook/react';
import { default as SelectFormItem } from './SelectFormItem';
declare const meta: Meta<typeof SelectFormItem>;
export default meta;
type Story = StoryObj<typeof SelectFormItem>;
export declare const Default: Story;
export declare const Required: Story;
export declare const Multiple: Story;
export declare const Disabled: Story;
