import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cosmetics from './Components/Cosmetics/Cosmetics'
import Handle from './Components/Handle/Handle'

function App() {
 

  return (
    <div>
      <Cosmetics></Cosmetics>
      <Handle></Handle>
    </div>
  )
}

export default App
