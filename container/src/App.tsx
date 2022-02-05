import { HomeApp } from './components/HomeApp'
import { LoginApp } from './components/LoginApp'

type AppProps = {}

export function App(props: AppProps) {
  return (
    <div>
      Container App
      <br />
      <br />
      <div>
        <HomeApp />
      </div>
      <br />
      <br />
      <div>
        <LoginApp />
      </div>
    </div>
  )
}

App.defaultProps = {}

export default App
