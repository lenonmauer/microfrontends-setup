export type MountProps = {
  isShellRender?: boolean
  initialPath: string
}

export type ShellNavigationEvent = CustomEvent<{
  pathname: string
  targetApp?: string
}>
