import { Meta, StoryObj } from '@storybook/react';
import { default as ConfirmModal } from './ConfirmModal';
declare const meta: Meta<typeof ConfirmModal>;
export default meta;
type Story = StoryObj<typeof ConfirmModal>;
export declare const Danger: Story;
export declare const Warning: Story;
export declare const Info: Story;
export declare const Loading: Story;
