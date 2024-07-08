import { useState } from 'react'
import Messenger from './components/Messenger'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Messenger/>
    </>
  )
}

export default App
