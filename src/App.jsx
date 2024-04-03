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

    <div>
      <section id='cta' className='flex flex-col'>
          <div>
            <h1> WHAT MAKES US DIFFERENT ?</h1>
            <h2 className=''> Bringing The World's Snacks to Your Doorstep</h2>
            <p> Enjoy Snacks from Comfort of Your Own Home! Curated and Packed with Love by Locals</p>
            <img src="" alt="Picture of People Happy" />
            <a href="#" className=''>Shop</a>
          </div>

          <div>
            <p>Connect with Fellow Foodies, Share Recommendations, and Embark on a Culinary Journey Together!</p>
            <a href="#">Create Account</a>
            <a href="#">Explore</a>
          </div>
        </section>
    </div>
    </>
  )
}

export default App
