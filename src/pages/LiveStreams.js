const LiveStreams = () => {
    return (
        <div className="px-[32px]">



            <h1 className="mt-12 mb-6 text-2xl text-center text-gray-700">Livestreams</h1>

            <h3 className="text-center text-xl font-light mb-3 px-6">Livestreams of teachings + our ministry events from around the world.</h3>

            <hr className="border-t border-gray-300 mt-4 mx-auto w-[85%] mb-6" />

            <div className="px-6">
                <div className=" mx-auto md:w-[600px] mt-3">
                    <iframe width="100%" height="315"
                        src="https://www.youtube.com/embed/A6hf33n2Ibc" title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen>
                    </iframe>
                </div>
            </div>

            <div className="flex justify-center items-center">
                <button className="py-3 mb-12 px-6 text-white bg-blue-500 mt-6">WATCH LIVE ON YOUTUBE</button>
            </div>
            <hr className="border-t border-gray-300 mt-4 mx-auto w-[85%] mb-6" />

            <div className="sm:px-6 md:w-[600px] mx-auto">
                <h1 className="text-center text-2xl font-bold text-gray-700 ">Want livestream alerts via text? Fill out this form.</h1>
                <form className="border-2 px-6 mx-8 mb-12 md:mb-24 ">
                    <h1 className="text-gray-700 text-[18px] font-light mb-6 mt-6">Receive livestream alerts via text.</h1>
                    <div>
                        <div >
                            <h3 className="text-xl font-semibold mb-3 text-gray-700">PHONE NUMBER*</h3>
                            <input type="text" className=" h-[40px] border-2 w-[70%]" />
                        </div>
                        <div className="flex space-x-3 text-gray-700 mt-3">
                            <input type="checkbox" />
                            <h2>Yes! I want to receive text messages</h2>
                        </div>
                        <button className="w-[95%] mx-auto block bg-gray-400 hover:bg-blue-600 text-white mb-6 mt-6 font-bold px-6 py-3">Sign Up</button>
                        <h3 className="text-[12px] w-[230px]">Message and data rates may apply.
                            Recurring messages subscription.
                            Click to view Terms & Privacy.
                            Available in USA and Canada.
                            Powered by EZ Texting</h3>
                    </div>
                </form>
            </div>
            <div>
                <h1 className="text-center text-2xl text-gray-700 font-semibold mt-6 mb-12 ">Want livestream alerts via email? Fill out this form.</h1>
            </div>

            <form className="px-12  md:w-[600px] mx-auto  text-gray-700 text-[16px] ">
                <div>
                    <h1 className="mb-1 mt-8">Email Address *</h1>
                    <input type="text" className="border-2 h-[30px] w-[90%]" />
                </div>
                <div>
                    <h1 className="mb-1 mt-8">First Name</h1>
                    <input type="text" className="border-2 h-[30px] w-[90%]" />
                </div>
                <div>
                    <h1 className="mb-1 mt-8">Last Name</h1>
                    <input type="text" className="border-2 h-[30px] w-[90%]" />
                </div>

                <h1 className="font-bold text-gray-600 mt-6">I would like to receive...</h1>
                <div>
                    <div className="flex space-x-2 mt-1 text-sm">
                        <input type="checkbox" />
                        <h1> Sunday Morning Sermons</h1>
                    </div>
                    <div className="flex space-x-2 mt-2 text-sm">
                        <input type="checkbox" />
                        <h1>Livestream Alerts</h1>
                    </div>

                    <div className="flex space-x-2 mt-2 text-sm">
                        <input type="checkbox" />
                        <h1>  Weekly Podcast Episodes</h1>
                    </div>
                    <div className="flex space-x-2 mt-2 text-sm">
                        <input type="checkbox" />
                        <h1>  Weekly Blog Posts</h1>
                    </div>

                    <div className="flex space-x-2 mt-2 text-sm">
                        <input type="checkbox" />
                        <h1> Merch Drop Alerts</h1>
                    </div>
                </div>

                <button className="bg-gray-400 hover:bg-blue-600 mt-6 mb-12 px-6 py-3">Subscribe</button>
            </form>

            <hr className="border-t border-gray-300 mt-4 mx-auto w-[85%] mb-6" />
            <div className=" ">
                <h1 className=" font-bold text-xl  text-center text-gray-800 mt-24">WATCH NOW ON THE DHM APP</h1>
                <img src="/assets/etvlast.jpg" alt="" className="mx-auto" />
            </div>




        </div>
    );
}

export default LiveStreams;