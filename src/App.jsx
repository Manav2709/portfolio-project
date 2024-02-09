import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import SocialLinks from './components/SocialLinks'
import About from './components/About'
import Porfolio from './components/Porfolio'
import Experience from './components/Experience'
import  Contact from './components/Contact'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar /> 
      <Home />
      <About />
      <Porfolio />
      <Experience />
      <Contact />
      <SocialLinks />
    </div>
  )
}

export default App
