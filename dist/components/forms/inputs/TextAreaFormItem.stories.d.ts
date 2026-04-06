import { Meta, StoryObj } from '@storybook/react';
import { default as TextAreaFormItem } from './TextAreaFormItem';
declare const meta: Meta<typeof TextAreaFormItem>;
export default meta;
type Story = StoryObj<typeof TextAreaFormItem>;
export declare const Default: Story;
export declare const Required: Story;
export declare const WithMaxLength: Story;
