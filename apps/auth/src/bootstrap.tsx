import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { App } from './App'

import type { MountProps } from '@mfe/core'

let reactRoot: ReturnType<typeof createRoot> | null = null

export function mount(element: HTMLElement, props: MountProps) {
  reactRoot = createRoot(element)

  console.log('mounted auth app')

  reactRoot.render(
    <StrictMode>
      <App {...props} />
    </StrictMode>
  )
}

export function unmount() {
  reactRoot?.unmount()
}

if (process.env.NODE_ENV === 'development') {
  const devRootElement = document.getElementById('dev-root')

  if (devRootElement) {
    mount(devRootElement, {
      initialPath: '',
    })
  }
}
