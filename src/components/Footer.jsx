function Footer () {

    return (
        <footer className=' bg-palePurple flex flex-row justify-between' >
            <div>
                <div className='flex flex-col p-2'>
                    <h1 className='text-3xl font-bold mb-3'> Snackies</h1>
                    <h2 className='text-md'> Social Medias</h2>
                </div>

                <div className='flex flex-row ml-2'>
                    <img src="./src/assets/facebook-logo.jpg" alt="logo" className='content-end h-5 w-5 mr-4'/>
                    <img src="./src/assets/instagram-logo.jpg" alt="logo" className='content-end h-5 w-5 mr-4'/>
                    <img src="./src/assets/twitter-logo.jpg" alt="logo" className='content-end h-5 w-5'/>
                </div>
            </div>
            
            <div className='p-3'>
                <h2 className='font-bold'>Information</h2>
                <h3 className='mb-1'>Contact Us</h3>
                <h3 className='mb-1'>Shipping Policy</h3>
                <h3 className='mb-1'>Terms</h3>
                <h3 className='mb-1'>FAQ</h3>
            </div>

            <div className='p-3'>
                <h2 className='font-bold '>We Accept</h2>
                <img src="./src/assets/payments-logo.jpg" alt="picture of payment" className='h-[100px] w-[300px] m-1'/>
            </div>
    </footer>
    )
}

export default Footer