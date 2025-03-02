import { ActionType, BetaSchemaForm } from '@ant-design/pro-components'
import { columns } from '../config'
import { PlusOutlined } from '@ant-design/icons'
import { App, Button } from 'antd'
import { Prisma } from '@prisma/client'
import { createUser } from '../actions/create'
import { useRef } from 'react'

interface Props {
  onSuccess: ()=>void
}
export default function CreateUserFormModal({onSuccess}: Props ) {
  const formRef = useRef<any>()
  const { message } = App.useApp()
  const onCreate = async (data:Prisma.UserCreateInput) => {
    try {
      const res = await createUser(data)
      if (res.success) {
        message.success('Created Successfully!')
        onSuccess()
        return true
      }
      message.error(res.message)
      return false
    } catch (error) {
      message.error("An unexpected error occurred!")
      return false
    }
  }
  return (
    <BetaSchemaForm
      formRef={formRef}
      title="Create new user"
      layoutType="ModalForm"
      columns={columns}
      clearOnDestroy
      trigger={
        <Button type="primary" icon={<PlusOutlined />}>
          Create
        </Button>
      }
      width={526}
      onFinish={onCreate}
      modalProps={{
        destroyOnClose: true,
      }}
    />
  )
}
