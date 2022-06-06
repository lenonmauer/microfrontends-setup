import styled from '@emotion/styled'

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  background: #eee;
  padding: 0.5rem;
  font-weight: bold;
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`

export const ListItem = styled.li`
  & > a {
    text-decoration: none;
    color: blue;
    padding: 8px;
    font-weight: normal;
  }
`
