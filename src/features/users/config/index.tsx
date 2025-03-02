import { ProColumns } from '@ant-design/pro-components'
import { getUsers } from '../actions/read'
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
