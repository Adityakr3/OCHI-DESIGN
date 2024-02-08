import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
function App() {
  return (
    <div>
      <div className="w-full min-h-screen bg-zinc-900 text-white">
       <Navbar/>
       <LandingPage/>
       <Marquee/>
       <About/>
      </div>
    </div>
  )
}

export default App
