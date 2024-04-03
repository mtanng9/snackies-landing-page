import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {

  return (
    <>
    <div className='bg-hero bg-cover bg-no-repeat bg-center'>

      <Navbar/>
      <Hero/>


    </div>
    </>
  )
}

export default App
