import { mount, unmount } from '@mfe/auth/AuthApp'

import { MfWrapper } from '@app/components/MfWrapper'
import { ErrorBoundary } from '@app/components/ErrorBoundary'

export function AuthApp() {
  return (
    <ErrorBoundary>
      <MfWrapper mount={mount} unmount={unmount} />
    </ErrorBoundary>
  )
}

export default AuthApp
