import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Login from './Components/Login'
import Navbar from './Components/Navbar'

function App() {
  //const [count, setCount] = useState(0)
  let userInput = "Harshitha"
  return (
    <>
    <Navbar />
  {/* <Home name ={userInput}/>   */}
    </>
  )
}

export default App
