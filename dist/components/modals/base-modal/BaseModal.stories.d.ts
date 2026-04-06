import { Meta, StoryObj } from '@storybook/react';
import { default as BaseModal } from './BaseModal';
declare const meta: Meta<typeof BaseModal>;
export default meta;
type Story = StoryObj<typeof BaseModal>;
export declare const Default: Story;
export declare const Loading: Story;
export declare const CustomButtons: Story;
