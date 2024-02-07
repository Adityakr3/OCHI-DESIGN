import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
function App() {
  return (
    <div>
      <div className="w-full h-screen bg-zinc-900 text-white">
       <Navbar/>
       <LandingPage/>
      </div>
    </div>
  )
}

export default App
