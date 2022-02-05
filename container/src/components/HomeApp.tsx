import { useRef, useEffect } from 'react'

import { mount } from 'home/HomeApp'

export function HomeApp() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    mount(ref.current!)
  }, [])

  return <div ref={ref} />
}
