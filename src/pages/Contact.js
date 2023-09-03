const Contact = () => {
    return (
        <div className="text-gray-700  md:w-[600px] mx-auto block">


            <div>
                <div className="border-2 mx-6 mt-24">
                    <h1 className="text-2xl py-6 text-white px-4 bg-blue-600 font-semibold">General Contact</h1>
                    <form className="px-3 leading-5 mt-3 " >

                        <h3 className="mb-6">We welcome your phone call or email. Our dedicated ministry staff will respond to you in
                            a timely manner. Use this form for general correspondence. <span className="font-semibold">
                                Note: your email address will be
                                added to our emailing list.
                            </span>
                        </h3>


                        <div className="mb-6">
                            <h1 className="mb-3">Full Name: *</h1>
                            <input type="text" className="h-[35px] border-2" />
                        </div>

                        <div className="mb-6">
                            <h1 className="mb-3">Email Address?</h1>
                            <input type="text" className="h-[35px] border-2" />
                        </div>

                        <div className="mb-6">
                            <h1 className="mb-3">Message Subject:</h1>
                            <input type="textarea" className="h-[35px] border-2" />
                        </div>

                    </form>




                </div>

                <button className="py-3 px-6 mx-auto block text-white bg-blue-500 mt-12">Submit</button>
                

            
            </div>
        </div>
    );
}

export default Contact;