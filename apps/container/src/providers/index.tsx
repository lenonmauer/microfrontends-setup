import { createContext, useState } from 'react'

const AppsRegistryContext = createContext(null)

export function AppsRegistryProvider({ children }) {
  const apps = useState<any[]>([])
  return <AppsRegistryContext.Provider>{children}</AppsRegistryContext.Provider>
}
