import { BetaSchemaForm } from '@ant-design/pro-components'
import { columns } from '../config'
import { PlusOutlined } from '@ant-design/icons'
import { App, Button } from 'antd'

export default function CreateUserFormModal() {
  const { message } = App.useApp()
  const onCreate = async () => {
    message.success('Created Successfully!')

    return Promise.resolve(true) // to close modal
  }
  return (
    <BetaSchemaForm
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
