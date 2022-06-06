type MountFn = (element: HTMLDivElement) => void

declare module 'home/HomeApp' {
  const mount: MountFn
  const unmount: () => void

  export { mount, unmount }
}

declare module 'auth/AuthApp' {
  const mount: MountFn
  const unmount: () => void

  export { mount, unmount }
}
