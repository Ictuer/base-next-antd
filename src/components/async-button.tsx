import React, { useCallback, useState } from 'react'
import { Button } from 'antd'

const AsyncButton: React.FC<React.ComponentProps<typeof Button>> = ({
  onClick,
  hidden,
  disabled,
  ...props
}) => {
  const [loading, setLoading] = useState(false)

  const _onClick = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!onClick) return
      setLoading(true)
      try {
        await onClick(e)
      } finally {
        setLoading(false)
      }
    },
    [onClick],
  )

  return (
    <Button
      {...props}
      onClick={_onClick}
      loading={loading || props.loading}
      style={{ opacity: hidden ? 0 : 100 }}
      disabled={disabled || hidden}
    />
  )
}

export default AsyncButton
