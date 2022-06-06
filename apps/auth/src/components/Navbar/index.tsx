import { Link } from 'react-router-dom'

import { ExternalAppLink } from '../ExternalAppLink'
import { Nav, List, ListItem } from './styles'

export function Navbar() {
  return (
    <Nav>
      Auth App
      <List>
        <ListItem>
          <Link to={'/auth/signin'}>To login page</Link>
        </ListItem>
        <ListItem>
          <Link to={'/auth/signup'}>To signup page</Link>
        </ListItem>
        <ListItem>
          <ExternalAppLink to={'/'}>To home page</ExternalAppLink>
        </ListItem>
      </List>
    </Nav>
  )
}
