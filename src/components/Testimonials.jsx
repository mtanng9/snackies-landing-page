function Testimonials() {

    return (
        <section id= 'testimonials' className='flex flex-col bg-palePurple mb-3 mr-3 ml-3'>
        <div className='flex flex-col'>
          <h1 className='mb-1 text-center text-md p-2'> "Testimonials"</h1>
          <h2 className='mb-1 text-center'> ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ </h2>
          <h2 className='mb-1 text-center font-bold'> - Lucy M </h2>
        </div>
  
        <div className='flex flex-row p-3 justify-center'>
          <img src="./src/assets/snacks-testimonials.jpg" alt="Image" className='mr-5 h-[150px] w-[200px]'/>
          <img src="./src/assets/snacks-testimonials.jpg" alt="Image" className='mr-5 h-[150px] w-[200px]'/>
          <img src="./src/assets/snacks-testimonials.jpg" alt="Image" className='mr-5 h-[150px] w-[200px]'/>
        </div>
      </section>
    )

}

export default Testimonials 