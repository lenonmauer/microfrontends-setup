import { useRef, useEffect } from 'react'

import { mount } from 'login/LoginApp'

export function LoginApp() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    mount(ref.current!)
  }, [])

  return <div ref={ref} />
}
