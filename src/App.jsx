import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cta from './components/Cta'
import Testimonials from './components/Testimonials'


function App() {

  return (
    <>
    <div className='bg-hero bg-cover bg-no-repeat bg-center'>
      <Navbar/>
      <Hero/>
    </div>

    <div>
      <Cta/>
    </div>

    <Testimonials/>
    </>
  )
}

export default App
