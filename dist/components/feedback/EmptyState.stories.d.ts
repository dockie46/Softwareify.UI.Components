import { Meta, StoryObj } from '@storybook/react';
import { default as EmptyState } from './EmptyState';
declare const meta: Meta<typeof EmptyState>;
export default meta;
type Story = StoryObj<typeof EmptyState>;
export declare const Default: Story;
export declare const WithDescription: Story;
export declare const WithAction: Story;
export declare const CustomIcon: Story;
