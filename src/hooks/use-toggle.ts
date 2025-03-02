import { useState } from 'react'

export const useToggle = (value: boolean = false) => {
  const [state, setState] = useState(value)

  const open = () => setState(true)
  const close = () => setState(false)
  const toggle = () => setState((v) => !v)

  return {
    state,
    open,
    close,
    toggle,
  }
}
