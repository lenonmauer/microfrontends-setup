import styled from '@emotion/styled'

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: #dadada;
  padding: 1rem;
`

export const Ul = styled.ul`
  display: flex;
`

export const Li = styled.li`
  & + & {
    margin-left: 1rem;
  }
`
