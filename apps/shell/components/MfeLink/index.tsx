import type { MouseEvent } from 'react'
import Link from 'next/link'

import { CUSTOM_EVENTS, APP_NAME } from '../../core'

type Props = any

export function MfeLink(props: Props) {
  const { onClick, appName, ...linkProps } = props
  const { href, children } = props

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const navigationEvent = new CustomEvent(CUSTOM_EVENTS[APP_NAME.SHELL].SHELL_NAVIGATION, {
      detail: {
        pathname: href,
        targetApp: appName,
      },
    })

    window.dispatchEvent(navigationEvent)

    if (onClick) onClick(event)
  }

  return (
    <Link {...linkProps}>
      <a onClick={handleClick}>{children}</a>
    </Link>
  )
}
