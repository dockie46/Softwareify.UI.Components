import type { Meta, StoryObj } from '@storybook/react'
import type { ColumnsType } from 'antd/es/table'
import { Button, Tag } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import MainTable from './MainTable'

// ─── Mock data ─────────────────────────────────────────────

interface User {
  id: number
  name: string
  email: string
  role: string
  status: 'active' | 'inactive' | 'pending'
  age: number
}

const generateUsers = (count: number): User[] =>
  Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    role: ['Admin', 'Editor', 'Viewer'][i % 3],
    status: (['active', 'inactive', 'pending'] as const)[i % 3],
    age: 20 + (i % 40),
  }))

const mockUsers = generateUsers(100)

const statusColors: Record<User['status'], string> = {
  active: 'green',
  inactive: 'red',
  pending: 'orange',
}

const columns: ColumnsType<User> = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    width: 80,
    sorter: (a, b) => a.id - b.id,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Role',
    dataIndex: 'role',
    key: 'role',
    filters: [
      { text: 'Admin', value: 'Admin' },
      { text: 'Editor', value: 'Editor' },
      { text: 'Viewer', value: 'Viewer' },
    ],
    onFilter: (value, record) => record.role === value,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status: User['status']) => (
      <Tag color={statusColors[status]}>{status}</Tag>
    ),
    filters: [
      { text: 'Active', value: 'active' },
      { text: 'Inactive', value: 'inactive' },
      { text: 'Pending', value: 'pending' },
    ],
    onFilter: (value, record) => record.status === value,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    sorter: (a, b) => a.age - b.age,
    width: 100,
  },
]

// ─── Stories ───────────────────────────────────────────────

const meta: Meta<typeof MainTable<User>> = {
  title: 'Tables/MainTable',
  component: MainTable,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div style={{ height: '100vh', padding: 16 }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof MainTable<User>>

export const Default: Story = {
  args: {
    dataSource: mockUsers,
    columns,
    totalCount: mockUsers.length,
    onSearch: (text: string) => console.log('Search:', text),
    virtual: false,
  },
}

export const WithActionButtons: Story = {
  args: {
    dataSource: mockUsers,
    columns,
    totalCount: mockUsers.length,
    onSearch: (text: string) => console.log('Search:', text),
    virtual: false,
    actionButtons: (
      <Button type="primary" icon={<PlusOutlined />}>
        Add User
      </Button>
    ),
  },
}

export const NoSearch: Story = {
  args: {
    dataSource: mockUsers,
    columns,
    totalCount: mockUsers.length,
    virtual: false,
  },
}

export const Empty: Story = {
  args: {
    dataSource: [],
    columns,
    totalCount: 0,
    onSearch: () => {},
    virtual: false,
  },
}

export const Loading: Story = {
  args: {
    dataSource: [],
    columns,
    totalCount: 0,
    loading: true,
    onSearch: () => {},
    virtual: false,
  },
}

export const FewRows: Story = {
  args: {
    dataSource: generateUsers(5),
    columns,
    totalCount: 5,
    onSearch: (text: string) => console.log('Search:', text),
    virtual: false,
  },
}

export const CustomPagination: Story = {
  args: {
    dataSource: mockUsers,
    columns,
    totalCount: 500,
    onSearch: (text: string) => console.log('Search:', text),
    virtual: false,
    pagination: {
      pageSize: 10,
      showSizeChanger: true,
    },
  },
}
