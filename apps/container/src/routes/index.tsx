import { Suspense, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import { CUSTOM_EVENTS, APP_NAME } from '@mfe/core'

import { HomeApp } from '../apps/Home/lazy'
import { AuthApp } from '../apps/Auth/lazy'
import { Loader } from '../components/Loader'
import { ErrorBoundary } from '../components/ErrorBoundary'

export function AppRoutes() {
  const navigate = useNavigate()

  useEffect(() => {
    const handler = (event: CustomEvent) => {
      navigate(event.detail.pathname)
    }

    window.addEventListener(CUSTOM_EVENTS[APP_NAME.SHELL].CROSS_NAVIGATION, handler)
    window.addEventListener(CUSTOM_EVENTS[APP_NAME.SHELL].INTERNAL_NAVIGATION, handler)

    return () => {
      window.removeEventListener(CUSTOM_EVENTS[APP_NAME.SHELL].CROSS_NAVIGATION, handler)
      window.removeEventListener(CUSTOM_EVENTS[APP_NAME.SHELL].INTERNAL_NAVIGATION, handler)
    }
  }, [navigate])

  return (
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/auth/*" element={<AuthApp />} />
          <Route path="/pricing" element={<HomeApp />} />
          <Route path="/" element={<HomeApp />} />
          <Route path="/*" element={<div>404 - Page not Found</div>} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  )
}
