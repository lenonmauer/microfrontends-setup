import { mount, unmount } from '@mfe/home/HomeApp'

import { MfWrapper } from '../../components/MfWrapper'
import { ErrorBoundary } from '../../components/ErrorBoundary'

export function HomeApp() {
  return (
    <ErrorBoundary>
      <MfWrapper mount={mount} unmount={unmount} />
    </ErrorBoundary>
  )
}

export default HomeApp
