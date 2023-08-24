import { useState } from 'react'
function Home() {

    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLasttName] = useState('')



    return (
        <>

            <div className='md:px-[180px] py-4  px-6 '>

                <img src="/assets/book.jpeg" alt=""
                    className='mt-8 ' />
                <button className='bg-blue-400 text-white
         p-5 mt-4 block mx-auto mb-12 md:mb-1'>BUY NOW</button>
            </div>

            <div className='md:px-[170px] px-6 '>
                <img src="/assets/Second_Book.jpg" alt="" />
            </div>

            <div className='md:flex border-b-2 mb-20 pb-12 md:justify-center'>
                <div>
                    <span className='mt-20   '>
                        <img src="/assets/Praying+the+Holy+Spirit.png" width={600} className='mt-20 md:w-[400px] h-auto' alt="" />
                    </span>
                </div>

                {/* lkkl */}
                <div className='w-[550px]'>
                    <h1 className='text-xl font-bold text-center leading-[40px] text-gray-700 md:mt-6'>Free Download</h1>
                    <h3 className=' w-62 ml-6 text-gray-600 text-xl mb-6 font-light'>Sign up to David’s firstNameing list and receive the first chapter of “Praying in the Holy Spirit” for free. You'll also begin receiving free content, resources, and updates from this ministry.
                    </h3>

                    {/* form */}
                    <div className='pl-6 flex flex-col mt-3  '>

                        <label className='text-gray-800 text-md font-light leading-3 border-1 border-gray-900  mb-2' htmlFor="Email">Email Address</label>
                        <input type="text" value={email} required className='border-2 w-[70%] outline-none' />

                        <label className='text-gray-800 text-md font-light leading-3 border-1 mb-2 mt-6' htmlFor="First-Name" >First Name</label>
                        <input type="text" value={firstName} required className='border-2 w-[70%] outline-none' />

                        <label className='text-gray-800 text-md font-light leading-3 border-1 mb-2 mt-6 ' htmlFor="Last-Name" >Last Name </label>
                        <input type="text" required className='border-2 w-[70%] outline-none' value={lastName} />
                    </div>

                    {/* checkbox */}
                    <div className='pl-6 text-gray-600'>
                        <h1 className='text-gray-800'>In addition to general emails, I would also like to receive...</h1>
                        <div className='space-x-2 '>
                            <input type="checkbox" />
                            <label htmlFor="checkbox">Sunday Morning Sermons</label>
                        </div>
                        <div className='space-x-2'>
                            <input type="checkbox" />
                            <label htmlFor="checkbox"> Livestream Alerts</label>
                        </div>
                        <div className='space-x-2'>
                            <input type="checkbox" />
                            <label htmlFor="checkbox">Weekly Podcast Episodes</label>
                        </div>
                        <div className='space-x-2'>
                            <input type="checkbox" />

                            <label htmlFor="checkbox">Weekly Blog Posts</label>
                        </div>
                        <div className='mt-16'>
                            <button className='bg-blue-600 text-white py-3 px-6'>Subscribe</button>
                        </div>
                    </div>
                </div>

            </div>



            <div className='md:mb-24 grid grid-col-1 gap-4  px-3 mb-24  md:grid md:grid-cols-2 md:gap-3 md:px-64'>
                <span className='md:m-2'>
                    <img src="/assets/media.jpg" alt="" className='' />
                </span>
                <span className='md:m-2'>
                    <img src="/assets/Donate.jpg" alt="" className='' />
                </span>
                <span className='md:m-2'>
                    <img src="/assets/Booking.jpg" alt="" className='' />
                </span>
                <span className='md:m-2 '>
                    <img src="/assets/Events.jpg" alt="" className='' />
                </span>
            </div>

        </>
    )
}

export default Home
