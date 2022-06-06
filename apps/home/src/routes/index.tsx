import { useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'

import { APP_NAME, CUSTOM_EVENTS } from '@mfe/core'
import type { ShellNavigationEvent } from '@mfe/core'

export function AppRoutes() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const navigationEvent = new CustomEvent(CUSTOM_EVENTS[APP_NAME.SHELL].INTERNAL_NAVIGATION, {
      detail: {
        pathname: location.pathname,
      },
    })

    window.dispatchEvent(navigationEvent)
  }, [location.pathname])

  useEffect(() => {
    const handler = (event: ShellNavigationEvent) => {
      if (event.detail.targetApp === APP_NAME.HOME) {
        navigate(event.detail.pathname)
      }
    }

    window.addEventListener(CUSTOM_EVENTS[APP_NAME.SHELL].SHELL_NAVIGATION, handler)

    return () => {
      window.removeEventListener(CUSTOM_EVENTS[APP_NAME.SHELL].SHELL_NAVIGATION, handler)
    }
  }, [navigate])

  return (
    <Routes>
      <Route path="/pricing" element={<div>Home Pricing</div>} />
      <Route path="/" element={<div>Home default page</div>} />
    </Routes>
  )
}
