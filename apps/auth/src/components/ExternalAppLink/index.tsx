import type { ReactNode, MouseEvent } from 'react'

import { navigateToExternalApp } from '../../utils'

type ExternalAppLinkProps = {
  className?: string
  to: string
  children: ReactNode
}

export function ExternalAppLink(props: ExternalAppLinkProps) {
  const { children, to, className } = props

  const handleClick = (event: MouseEvent) => {
    event.preventDefault()
    navigateToExternalApp(to)
  }

  return (
    <a className={className} href={to} onClick={handleClick}>
      {children}
    </a>
  )
}

export default ExternalAppLink
