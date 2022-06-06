import { useRef, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { MountProps } from '@mfe/core'

type MfWrapperProps = {
  mount(element: HTMLElement, props: MountProps): void
  unmount(): void
}

export function MfWrapper({ mount, unmount }: MfWrapperProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const mountedRef = useRef(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (mountedRef.current) return

    const remoteProps: MountProps = {
      initialPath: location.pathname,
      isShellRender: true,
    }

    mount(elementRef.current!, remoteProps)
    mountedRef.current = true
  }, [location.pathname, mount, navigate])

  useEffect(() => {
    return () => {
      if (mountedRef.current && unmount) {
        setTimeout(unmount, 0)
        mountedRef.current = false
      }
    }
  }, [unmount])

  return <div ref={elementRef} />
}
