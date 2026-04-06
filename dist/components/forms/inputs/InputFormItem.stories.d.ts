import { Meta, StoryObj } from '@storybook/react';
import { default as InputFormItem } from './InputFormItem';
declare const meta: Meta<typeof InputFormItem>;
export default meta;
type Story = StoryObj<typeof InputFormItem>;
export declare const Default: Story;
export declare const Required: Story;
export declare const Password: Story;
export declare const Disabled: Story;
