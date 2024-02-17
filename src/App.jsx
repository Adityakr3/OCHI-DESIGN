import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Card3 from './components/Card3'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';



function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div>
      <div className="w-full text-zinc-950  min-h-screen bg-[#f1f1f1]">
       <Navbar/>
       <LandingPage/>
       <Marquee/>
       <About/>
       <Eyes/>
       <Featured/>
       <Card3/>
       <Footer/>
      </div>
    </div>
  )
}

export default App
