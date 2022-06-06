export const APP_NAME = {
  SHELL: '@mfe-shell',
  HOME: '@mfe-home',
  AUTH: '@mfe-auth',
}

export const CUSTOM_EVENTS = {
  [APP_NAME.SHELL]: {
    CROSS_NAVIGATION: `${APP_NAME.SHELL}/cross-app-navigation` as any,
    INTERNAL_NAVIGATION: `${APP_NAME.SHELL}/internal-app-navigation` as any,
    SHELL_NAVIGATION: `${APP_NAME.SHELL}/shell-navigation` as any,
  },
}
