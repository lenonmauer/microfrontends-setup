import { useState } from 'react'

export function App() {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      Home App
      <button onClick={() => setCounter(counter + 1)}>Count: {counter}</button>
    </div>
  )
}

export default App
