type MountFn = (element: HTMLDivElement) => void

declare module 'home/HomeApp' {
  const mount: MountFn

  export { mount }
}

declare module 'login/LoginApp' {
  const mount: MountFn

  export { mount }
}
