import { useMemo } from 'react'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'

import { Navbar } from './components/Navbar'
import { AppRoutes } from './routes'

import type { MountProps } from '@mfe/core'

type AppProps = MountProps

export function App(props: AppProps) {
  const { isShellRender, initialPath } = props

  const Router = useMemo(() => (isShellRender ? MemoryRouter : BrowserRouter), [isShellRender])
  const initialEntries = useMemo(() => [initialPath], [initialPath])

  return (
    <Router initialEntries={initialEntries}>
      <Navbar />
      <AppRoutes />
    </Router>
  )
}

export default App
