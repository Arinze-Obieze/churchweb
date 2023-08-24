const MailInGiving = () => {
    return (
        <div>




            <div>
                <div className="px-6">
                    <h1 className="mt-12 mb-6 text-2xl text-center text-gray-700">Give Through Mail</h1>
                    <img src="/assets/mailingiving.jpg" alt="" />
                </div>

                <div className="px-6 mt-12 text-[18px] bg-gray-100 mx-4 border-2">
                    <h4 className="bg-blue-600 text-white px-6 py-3 leading-6 ">Fill out this form if you wish to become a mail-in World Changer
                        Partner, and we will send you a year's supply of envelopes. By submitting
                        your email address, you are also signing up to receive updates and
                        resources from David Hernandez Ministries via email.</h4>

                    <div>
                        <div className="mt-6">
                            <h1>Name</h1>
                            <input type="text" />
                        </div>

                        <div>
                            <h1 className='mt-6'>Email</h1>
                            <input type="text" className='w-[80%] h-[40px]' />
                        </div>
                        <div>
                            <h1 className='mt-6'>Street Address</h1>
                            <input type="text" className='w-[80%] h-[40px]' />
                        </div>
                        <div>
                            <h1 className='mt-6'>Address Line 2</h1>
                            <input type="text" className='w-[80%] h-[40px]' />
                        </div>

                        <div>
                            <span>
                                <h1 className='mt-6'>City</h1>
                                <input type="text" className='w-[80%] h-[40px]' />
                            </span>

                            <span>
                                <h1 className='mt-6'> State/province/Region</h1>
                                <input type="text" className='w-[80%] h-[40px]' />
                            </span>
                        </div>

                        <div>
                            <h1 className='mt-6'>Zip/Postal Code *</h1>
                            <input type="text" className='w-[80%] h-[40px]' />
                        </div>

                        <div>
                            <h1 className='mt-6'>Country: *</h1>
                            <input type="text" className='w-[80%] h-[40px]' />
                        </div>

                        <div>
                            <h1 className='mt-6'>I will commit to giving.. *</h1>
                            <input type="tel"  className='w-[80%] h-[40px]'/>
                        </div>
                    </div>
                </div>
<button className="bg-blue-600 px-6 py-3 mx-auto block text-white text-lg mt-6">Submit</button>
            </div>
        </div>
    );
}

export default MailInGiving;