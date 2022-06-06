import { Link } from 'react-router-dom'

import { Nav, List, ListItem } from './styles'

export function Navbar() {
  return (
    <Nav>
      Home App
      <List>
        <ListItem>Sidebar</ListItem>
        <ListItem>
          <Link to={'/'}>To default home Page</Link>
        </ListItem>
        <ListItem>
          <Link to={'/pricing'}>To pricing page</Link>
        </ListItem>
      </List>
    </Nav>
  )
}
