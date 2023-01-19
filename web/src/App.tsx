import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Habits } from './components/Habits'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Habits/>
    </>
      
  )
}

export default App
