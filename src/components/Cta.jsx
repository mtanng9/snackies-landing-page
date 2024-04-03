function Cta() {

    return (
        <div>
            <section id='cta' className='flex flex-row p-3 space-x-3'>
                <div className='flex flex-row bg-periwinkle'>
                <div className='m-3'>
                <img src="./src/assets/packing-snacks.jpg" alt="Picture of people handing boxes" className='h-[150px] w-[200px]' />
                </div>
    
                <div>
                    <h1 className='mb-1 text-sm text-center mt-4'> WHAT MAKES US DIFFERENT ?</h1>
                    <h2 className='mb-1 font-bold text-md'> Bringing The World's Snacks to Your Doorstep</h2>
                    <p className='mb-2 text-sm text-justify mr-5'> Enjoy Snacks from Comfort of Your Own Home! Curated and Packed with Love by Locals</p>
    
                    <div className='text-right mb-4'>
                    <a href="#" className='mr-5 rounded-lg p-3 bg-palePurple font-bold' >Shop</a>
                    </div>
                </div>
                </div>
    
                <div className='bg-palePurple'>
                <div>
                    <p className='mb-10 mt-4 text-md text-center'>Connect with Fellow Foodies, Share Recommendations, and Embark on a Culinary Journey Together!</p>
                </div>
    
                <div className='text-right'>
                    <a href="#" className='rounded-lg p-3 bg-jordyBlue font-bold'>Create Account</a>
                    <a href="#" className='ml-3 mr-3 rounded-lg p-3 bg-jordyBlue font-bold'>Explore</a>
                </div>
                </div>
            </section>
        </div>
    )
}

export default Cta