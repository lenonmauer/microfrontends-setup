import { useRef, useEffect } from 'react'
import { useRouter } from 'next/router'

import { MountProps } from '@mfe/core'

type MfWrapperProps = {
  mount(element: HTMLElement, props: MountProps): void
  unmount(): void
}

export function MfWrapper({ mount, unmount }: MfWrapperProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const mountedRef = useRef(false)
  const router = useRouter()

  useEffect(() => {
    if (mountedRef.current) return
    const remoteProps: MountProps = {
      initialPath: location.pathname,
      isShellRender: true,
    }
    console.log('Mounted')
    mount(elementRef.current!, remoteProps)
    mountedRef.current = true
  }, [router.pathname, mount])

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
