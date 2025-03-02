'use client'
import {
  ActionType,
  PageContainer,
  ProTable,
  TableDropdown,
} from '@ant-design/pro-components'
import { getUsers } from '../actions/read'
import { columns } from '../config'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import CreateUserForm from './create'
import UpdateUserForm from './update'
import { deleteUser } from '../actions/delete'
import { useRef, useState } from 'react'
import { App } from 'antd'

export default function PageUsers() {
  const actionTable = useRef<ActionType>()
  const { message } = App.useApp()
  const [row,setRow] = useState()
  const [openUpdate, setOpenUpdate] = useState(false)
  const onUpdate = (record: any) => {
    setRow(record)
    setOpenUpdate(true)
  }
  const onDelete = async (id: number) => {
    const data = await deleteUser(id)
    if(data.success){
       message.success(data.message)
       reloadTable()
       return 
    }
    message.error(data.message)
  }
  const reloadTable = ()=>{
    actionTable.current?.reload()
  }

  return (
    <>
    <PageContainer
      title="List User"
      extra={<CreateUserForm onSuccess={reloadTable} />}
      breadcrumb={{
        items: [
          { title: 'Abc', href: '/abc' },
          { title: 'Def', href: '/def' },
          { title: 'Ghj' },
        ],
      }}
    >
      <ProTable
        actionRef={actionTable}
        rowKey="id"
        pagination={
          {pageSize:10}
        }
        form={{ layout: 'vertical' }}
        request={ getUsers}
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
    <UpdateUserForm open={openUpdate} setOpen={setOpenUpdate} onSuccess={reloadTable} defaultValue={row} />
        </>
  )
}
