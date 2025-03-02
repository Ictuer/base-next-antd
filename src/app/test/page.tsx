'use client'
import { Typography } from 'antd'

export default function Test() {
  return (
    <div className="p-5">
      <Typography.Paragraph
        editable={{
          onChange: (e) => {
            console.log(e)
            return Promise.resolve(true)
          },
        }}
        inputMode="none"
        ellipsis
      >
        editableStr
      </Typography.Paragraph>
    </div>
  )
}
