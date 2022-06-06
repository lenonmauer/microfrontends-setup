import { MfeLink } from '../MfeLink'

import { APP_NAME } from '@mfe/core'

import { Nav, Ul, Li } from './styles'

export function Navbar() {
  return (
    <Nav>
      Mfe App
      <Ul>
        <Li>
          <MfeLink to="/" appName={APP_NAME.HOME}>
            Default Page
          </MfeLink>
        </Li>
        <Li>
          <MfeLink to="/auth/signin" appName={APP_NAME.AUTH}>
            Login Page
          </MfeLink>
        </Li>
      </Ul>
    </Nav>
  )
}
