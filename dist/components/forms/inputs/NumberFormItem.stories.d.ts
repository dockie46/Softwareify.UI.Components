import { Meta, StoryObj } from '@storybook/react';
import { default as NumberFormItem } from './NumberFormItem';
declare const meta: Meta<typeof NumberFormItem>;
export default meta;
type Story = StoryObj<typeof NumberFormItem>;
export declare const Default: Story;
export declare const WithMinMax: Story;
export declare const Required: Story;
