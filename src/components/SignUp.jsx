function SignUp() {

    return (
        <section className=' flex flex-row bg-jordyBlue p-3'>
             <p className='mr-8 text-md p-2 font-bold'> Sign Up for Exclusive Offers and More!</p>
             <input type="email" name="email" id="email" placeholder='Enter Your Email' className='mr-8 rounded-lg bg-white p-2'/>
             <a href="#" className='rounded-lg bg-white p-2 text-sm'>Submit</a>
      </section>
    )
}

export default SignUp