import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import "./styles/global.css"
import { Habits } from './components/Habits'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Habits completed={3}/>
      <Habits completed={2}/>
      <Habits completed={10}/>
      <Habits completed={9}/>
    </>
      
  )
}

export default App
