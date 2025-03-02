import { ProColumns } from '@ant-design/pro-components'
import { getUsers } from '../actions/read'
import { ROLE_OPTIONS } from '@/constants/role'
export const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    formItemProps: { rules: [{ required: true }], tooltip: 'Tooltip' },
  },
  {
    title: 'Email',
    dataIndex: 'email',
    formItemProps: {
      rules: [{ required: true, type: 'email' }],
    },
  },
  {
    title: 'Password',
    dataIndex: 'password',
    formItemProps: {
      rules: [{ required: true }],
    },
    valueType:'password',
    search:false,
    hideInTable:true
  },
  {
    title: 'Role',
    dataIndex: 'role',
    formItemProps: {
      rules: [{ required: true }],
    },
    valueType:'select',
    request: async()=>{
      return ROLE_OPTIONS
    },
  },
  {
    title: 'Created At',
    dataIndex: 'createdAt',
    valueType: 'fromNow',
    hideInSearch: true,
    hideInForm: true,
  },
  {
    title: 'Updated At',
    dataIndex: 'updatedAt',
    valueType: 'fromNow',
    hideInSearch: true,
    hideInForm: true,
  },
] satisfies ProColumns<Awaited<ReturnType<typeof getUsers>>['data'][0]>[]
