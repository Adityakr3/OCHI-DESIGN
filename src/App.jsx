import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
function App() {
  return (
    <div>
      <div className="w-full text-zinc-950  min-h-screen bg-[#f1f1f1]">
       <Navbar/>
       <LandingPage/>
       <Marquee/>
       <About/>
       <Eyes/>
       <Featured/>
      </div>
    </div>
  )
}

export default App
