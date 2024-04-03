function Navbar() {
  
    return (
      <>
        <nav className='m-4 flex justify-between'>
          <div>
            <a href="#" className='font-bold text-3xl text-periwinkle'>Snackies</a>
          </div>
  
          <div className='flex space-x-2 items-center'>
            <a href="#">Shop</a>
            <a href="#">About</a>
            <a href="#" className='p-1 rounded-lg bg-jordyBlue text-white'>Create Account</a>
            <a href="#" className='p-1 rounded-lg bg-palePurple text-white'>Login</a>
          </div>
        </nav>
      </>
    )
  }
  
  export default Navbar