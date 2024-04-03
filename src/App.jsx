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
      <section id='cta' className='flex flex-row p-3 space-x-3'>
          <div className='flex flex-row'>
            <div>
             <img src="" alt="Picture of People Happy" />
            </div>

            <div>
              <h1 className='mb-1 text-sm text-center'> WHAT MAKES US DIFFERENT ?</h1>
              <h2 className='mb-1 font-bold text-lg'> Bringing The World's Snacks to Your Doorstep</h2>
              <p className='mb-4 text-sm text-justify'> Enjoy Snacks from Comfort of Your Own Home! Curated and Packed with Love by Locals</p>

              <div className='text-right'>
                <a href="#" >Shop</a>
              </div>
            </div>
          </div>

          <div>
            <div>
              <p>Connect with Fellow Foodies, Share Recommendations, and Embark on a Culinary Journey Together!</p>
            </div>

            <div>
              <a href="#">Create Account</a>
              <a href="#">Explore</a>
            </div>
          </div>
        </section>
    </div>
    </>
  )
}

export default App
