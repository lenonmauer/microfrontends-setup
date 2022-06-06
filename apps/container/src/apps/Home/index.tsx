import { mount, unmount } from 'home/HomeApp'

import { MfWrapper } from '../../components/MfWrapper'

export function HomeApp() {
  return <MfWrapper mount={mount} unmount={unmount} />
}

export default HomeApp
