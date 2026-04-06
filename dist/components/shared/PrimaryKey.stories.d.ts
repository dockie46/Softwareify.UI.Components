import { Meta, StoryObj } from '@storybook/react';
import { default as PrimaryKey } from './PrimaryKey';
declare const meta: Meta<typeof PrimaryKey>;
export default meta;
type Story = StoryObj<typeof PrimaryKey>;
export declare const Default: Story;
export declare const CustomLabel: Story;
export declare const Empty: Story;
