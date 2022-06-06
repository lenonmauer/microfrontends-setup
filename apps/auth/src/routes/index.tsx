import { useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'

import { CUSTOM_EVENTS, APP_NAME } from '@mfe/core'
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
      if (event.detail.targetApp === APP_NAME.AUTH) {
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
      <Route path="/auth/signup" element={<div>SignUp Page</div>} />
      <Route path="/auth/signin" element={<div>SignIn page</div>} />
    </Routes>
  )
}
