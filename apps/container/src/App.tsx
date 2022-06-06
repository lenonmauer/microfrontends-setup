import { BrowserRouter } from 'react-router-dom'

import { Navbar } from './components/Navbar'
import { AppRoutes } from './routes'
import { GlobalStyles } from './styles/global'

export function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>

      <GlobalStyles />
    </>
  )
}
