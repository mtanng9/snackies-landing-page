import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cta from './components/Cta'
import Testimonials from './components/Testimonials'
import SignUp from './components/SignUp'


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

    <div>
      <Testimonials/>
    </div>

    <div>
      <SignUp/>
    </div>

    </>
  )
}

export default App
