import { Meta, StoryObj } from '@storybook/react';
import { default as BaseEditModal } from './BaseEditModal';
declare const meta: Meta<typeof BaseEditModal>;
export default meta;
type Story = StoryObj<typeof BaseEditModal>;
export declare const Default: Story;
export declare const Loading: Story;
export declare const CustomButtons: Story;
