import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cta from './components/Cta'


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

    <section>
      <div>
        <h1> Testimonials</h1>
        <h2> ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ </h2>
        <h2> - Lucy M </h2>
      </div>

      <div>
        <img src="#" alt="Image" />
        <img src="#" alt="Image" />
        <img src="#" alt="Image" />
      </div>
    </section>
    

   
    </>
  )
}

export default App
