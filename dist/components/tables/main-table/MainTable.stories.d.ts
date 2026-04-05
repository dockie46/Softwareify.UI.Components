import { Meta, StoryObj } from '@storybook/react';
import { default as MainTable } from './MainTable';
interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    status: 'active' | 'inactive' | 'pending';
    age: number;
}
declare const meta: Meta<typeof MainTable<User>>;
export default meta;
type Story = StoryObj<typeof MainTable<User>>;
export declare const Default: Story;
export declare const WithActionButtons: Story;
export declare const NoSearch: Story;
export declare const Empty: Story;
export declare const Loading: Story;
export declare const FewRows: Story;
export declare const CustomPagination: Story;
