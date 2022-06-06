export const navigateToExternalApp = (pathname: string) => {
  const navigationEvent = new CustomEvent('@shell/external-app-navigation', {
    detail: {
      pathname,
    },
  })

  window.dispatchEvent(navigationEvent)
}
