import {  BetaSchemaForm } from '@ant-design/pro-components'
import { columns } from '../config'
import { App } from 'antd'
import { Prisma } from '@prisma/client'

import { updateUser } from '../actions/update'

interface Props {
  onSuccess: ()=>void
  defaultValue: any
  open:boolean 
  setOpen: (open:boolean)=>void
}

export default function UpdateUserFormModal({onSuccess, defaultValue, open, setOpen}: Props ) {
  const { message } = App.useApp()

  const onUpdate = async (data:Prisma.UserUpdateInput) => {
    try {
      const res = await updateUser(defaultValue.id, data)
      if (res.success) {
        message.success('Updated Successfully!')
        onSuccess()
        setOpen(false)
      }
      message.error(res.message)
    } catch (error) {
      message.error("An unexpected error occurred!")
      
    }
  }
  return (
    <BetaSchemaForm
      open={open}
      initialValues={defaultValue}
      title="Update user"
      layoutType="ModalForm"
      columns={columns}
      clearOnDestroy
      width={526}
      onFinish={onUpdate}
      modalProps={{
        destroyOnClose: true,
        onCancel: () => setOpen(false),
      }}
    />
  )
}
