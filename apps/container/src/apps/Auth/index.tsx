import { mount } from 'auth/AuthApp'

import { MfWrapper } from '../../components/MfWrapper'

export function AuthApp() {
  return <MfWrapper mount={mount} />
}

export default AuthApp
