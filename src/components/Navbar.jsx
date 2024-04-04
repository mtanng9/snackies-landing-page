function Navbar() {
  
    return (
      <>
        <nav className='p-1 flex justify-between bg-gradient-to-b from-gray-600 ...'>
          <div>
            <a href="#" className='font-bold text-3xl text-white'>Snackies</a>
          </div>
  
          <div className='flex space-x-2 items-center'>
            <a href="#">Shop</a>
            <a href="#">About</a>
            <a href="#" className='p-1 rounded-lg bg-jordyBlue'>Create Account</a>
            <a href="#" className='p-1 rounded-lg bg-palePurple'>Login</a>
          </div>
        </nav>
      </>
    )
  }
  
  export default Navbar