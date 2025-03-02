import React from 'react'
import { Button, Result } from 'antd'

const Error404: React.FC = () => (
  <div className="h-screen flex items-center justify-center">
    <Result
      status="500"
      title="500"
      subTitle="Sorry, something went wrong."
      extra={<Button type="primary">Back Home</Button>}
    />
  </div>
)

export default Error404
