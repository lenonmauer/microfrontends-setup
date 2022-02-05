import { StrictMode } from 'react'
import { render } from 'react-dom'

import { App } from './App'

export function mount(element) {
  render(
    <StrictMode>
      <App />
    </StrictMode>,
    element
  )
}

if (process.env.NODE_ENV === 'development') {
  mount(document.getElementById('root'))
}
