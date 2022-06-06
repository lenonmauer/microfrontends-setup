import { Link } from 'react-router-dom'
import type { LinkProps } from 'react-router-dom'
import type { MouseEvent } from 'react'

import { CUSTOM_EVENTS, APP_NAME } from '@mfe/core'

type Props = LinkProps & {
  appName: string
}

export function MfeLink(props: Props) {
  const { onClick, appName, ...linkProps } = props
  const { to } = props

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const navigationEvent = new CustomEvent(CUSTOM_EVENTS[APP_NAME.SHELL].SHELL_NAVIGATION, {
      detail: {
        pathname: to,
        targetApp: appName,
      },
    })

    window.dispatchEvent(navigationEvent)

    if (onClick) onClick(event)
  }

  return <Link {...linkProps} onClick={handleClick} />
}
