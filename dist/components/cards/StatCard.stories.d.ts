import { Meta, StoryObj } from '@storybook/react';
import { default as StatCard } from './StatCard';
declare const meta: Meta<typeof StatCard>;
export default meta;
type Story = StoryObj<typeof StatCard>;
export declare const Default: Story;
export declare const WithSubtext: Story;
export declare const CustomStyle: Story;
