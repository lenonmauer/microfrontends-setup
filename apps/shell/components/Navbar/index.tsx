import { MfeLink } from '../MfeLink'

import { APP_NAME } from '../../core'

import { Nav, Ul, Li } from './styles'

export function Navbar() {
  return (
    <nav>
      Mfe App
      <ul>
        <li>
          <MfeLink href="/" appName={APP_NAME.HOME}>
            Default Page
          </MfeLink>
        </li>
        <li>
          <MfeLink href="/auth/signin" appName={APP_NAME.AUTH}>
            Login Page
          </MfeLink>
        </li>
      </ul>
    </nav>
  )
}
