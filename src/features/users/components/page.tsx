'use client'
import {
  PageContainer,
  ProTable,
  TableDropdown,
} from '@ant-design/pro-components'
import { getUsers } from '../actions/read'
import { columns } from '../config'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import CreateUserForm from './create'

export default function PageUsers() {
  const onUpdate = (record: any) => {}
  const onDelete = (id: number) => {}

  return (
    <PageContainer
      title="List User"
      extra={<CreateUserForm />}
      breadcrumb={{
        items: [
          { title: 'Abc', href: '/abc' },
          { title: 'Def', href: '/def' },
          { title: 'Ghj' },
        ],
      }}
    >
      <ProTable
        rowKey="id"
        form={{ layout: 'vertical' }}
        request={({ current, pageSize }, sort, filter) => getUsers()}
        columns={[
          ...columns,
          {
            title: '',
            valueType: 'option',
            key: 'option',
            width: 50,
            align: 'center',

            render: (_, record: any) => (
              <TableDropdown
                key="actionGroup"
                menus={[
                  {
                    key: 'edit',
                    name: 'Sửa',
                    onClick: () => onUpdate(record),
                    icon: <EditOutlined />,
                  },
                  {
                    key: 'delete',
                    name: 'Xoá',
                    danger: true,
                    onClick: () => onDelete(record.id),
                    icon: <DeleteOutlined />,
                  },
                ]}
              />
            ),
          },
        ]}
      />
    </PageContainer>
  )
}
